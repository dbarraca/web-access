import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './dutList.html';
import { DUTs } from '../../api/duts.js';

class dutListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      duts() {
        return DUTs.find({});
      }
    })

    $scope.openChannels = function(index) {
      $('#dut-item-' + index + ' #Channels.tab').toggleClass('open');
      $('#dut-item-' + index + ' #5-min.tab').removeClass('open');
      $('#dut-item-' + index + ' #1-hour.tab').removeClass('open');
      $('#dut-item-' + index + ' #10-hour.tab').removeClass('open');
    }

    $scope.open5min = function(index) {
      $('#dut-item-' + index + ' #Channels.tab').removeClass('open');
      $('#dut-item-' + index + ' #5-min.tab').toggleClass('open');
      $('#dut-item-' + index + ' #1-hour.tab').removeClass('open');
      $('#dut-item-' + index + ' #10-hour.tab').removeClass('open');
    }

    $scope.open1hr = function(index) {
      $('#dut-item-' + index + ' #Channels.tab').removeClass('open');
      $('#dut-item-' + index + ' #5-min.tab').removeClass('open');
      $('#dut-item-' + index + ' #1-hour.tab').toggleClass('open');
      $('#dut-item-' + index + ' #10-hour.tab').removeClass('open');
    }

    $scope.open10hr = function(index) {
      $('#dut-item-' + index + ' #Channels.tab').removeClass('open');
      $('#dut-item-' + index + ' #5-min.tab').removeClass('open');
      $('#dut-item-' + index + ' #1-hour.tab').removeClass('open');
      $('#dut-item-' + index + ' #10-hour.tab').toggleClass('open');
    }

    $scope.dutoff = function(index) {
      $('#dut-item-' + index + ' .dut-frame').toggleClass('grey');
    }

    $scope.dutColor = function(temp) {
      if(temp >= 200)
        return 'grey';
      else if(temp >= 197)
        return 'red';
      else
        return 'green';
    }

    $scope.threshold = function(temp) {
      return temp < 197 ||  temp >= 200;
    }

    $scope.critical = function(temp) {
      return temp < 200 ;
    }

    $scope.test = function(){
      console.log("Test");
    }

    var packets;

    $scope.readText = function(filePath) {
      var reader = new FileReader();

      if(filePath.files && filePath.files[0]) {
        reader.onload = function (e) {
          text = e.target.result;
          packets = text.split("\n");
          console.log("loaded as text");
        };

        reader.readAsText(filePath.files[0]);
      }
      run = true;
    }

    var curStep = 0;
    var run  = true;

    $scope.stopRun = function(){
      run = false;
    }

//    translateTemp = function()

    translateADC = function(packet, index, step) {
      return (translateDC(packet, index, step) / (2040/3)).toFixed(2);
    }

    translateDC = function(packet, index, step) {
      return parseInt(packets[packet].split(" - ")[1]
       .substring(index * 4 + step * 80, index * 4 + step * 80 + 4), 16);
    }

    var startTime = new Date();

    setInterval(function(){
       var elapsedSeconds =  Math.round(((new Date()) - startTime)  / 1000) % 51;

      if(packets && packets[0]) {
        console.log(curStep);
        updateDUTS(curStep);
        if(run)
        curStep++;
      }
     }, 1000);

     updateDUTS = function(curStep){
       DUTs.update(
         {_id: 1},
         {$set:
           {
             "SP" : translateADC(0, 0, curStep % 51),
             "ISNS" : translateADC(0, 1, curStep % 51),
             "DSA2" : translateADC(0, 2, curStep % 51),
             "TEMP" : translateADC(0, 3, curStep % 51) * 100,
             "PSR3" : translateADC(0, 4, curStep % 51),
             "PSR2" : translateADC(0, 5, curStep % 51),
             "VCC" : translateADC(0, 6, curStep % 51),
             "VDD" : translateADC(0, 7, curStep % 51),
             "ADC8" : translateADC(0, 8, curStep % 51),
             "D5V" : translateADC(0, 9, curStep % 51),
             "VLDO" : translateADC(0, 10, curStep % 51),
             "VCP" : translateADC(0, 11, curStep % 51),
             "DSA1" : translateADC(0, 12, curStep % 51),
             "NSR" : translateADC(0, 13, curStep % 51),
             "PSR1" : translateADC(0, 14, curStep % 51),
             "PLR" : translateADC(0, 15, curStep % 51),
             "NPOR" : translateDC(0, 16, curStep % 51),
             "INT" : translateDC(0, 17, curStep % 51),
             "EWOK" : translateDC(0, 18, curStep % 51),
             "SLAVE" : translateDC(0, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 2},
         {$set:
           {
             "SP" : translateADC(1, 0, curStep % 51),
             "ISNS" : translateADC(1, 1, curStep % 51),
             "DSA2" : translateADC(1, 2, curStep % 51),
             "TEMP" : translateADC(1, 3, curStep % 51) * 100,
             "PSR3" : translateADC(1, 4, curStep % 51),
             "PSR2" : translateADC(1, 5, curStep % 51),
             "VCC" : translateADC(1, 6, curStep % 51),
             "VDD" : translateADC(1, 7, curStep % 51),
             "ADC8" : translateADC(1, 8, curStep % 51),
             "D5V" : translateADC(1, 9, curStep % 51),
             "VLDO" : translateADC(1, 10, curStep % 51),
             "VCP" : translateADC(1, 11, curStep % 51),
             "DSA1" : translateADC(1, 12, curStep % 51),
             "NSR" : translateADC(1, 13, curStep % 51),
             "PSR1" : translateADC(1, 14, curStep % 51),
             "PLR" : translateADC(1, 15, curStep % 51),
             "NPOR" : translateDC(1, 16, curStep % 51),
             "INT" : translateDC(1, 17, curStep % 51),
             "EWOK" : translateDC(1, 18, curStep % 51),
             "SLAVE" : translateDC(1, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 3},
         {$set:
           {
             "SP" : translateADC(2, 0, curStep % 51),
             "ISNS" : translateADC(2, 1, curStep % 51),
             "DSA2" : translateADC(2, 2, curStep % 51),
             "TEMP" : translateADC(2, 3, curStep % 51) * 100,
             "PSR3" : translateADC(2, 4, curStep % 51),
             "PSR2" : translateADC(2, 5, curStep % 51),
             "VCC" : translateADC(2, 6, curStep % 51),
             "VDD" : translateADC(2, 7, curStep % 51),
             "ADC8" : translateADC(2, 8, curStep % 51),
             "D5V" : translateADC(2, 9, curStep % 51),
             "VLDO" : translateADC(2, 10, curStep % 51),
             "VCP" : translateADC(2, 11, curStep % 51),
             "DSA1" : translateADC(2, 12, curStep % 51),
             "NSR" : translateADC(2, 13, curStep % 51),
             "PSR1" : translateADC(2, 14, curStep % 51),
             "PLR" : translateADC(2, 15, curStep % 51),
             "NPOR" : translateDC(2, 16, curStep % 51),
             "INT" : translateDC(2, 17, curStep % 51),
             "EWOK" : translateDC(2, 18, curStep % 51),
             "SLAVE" : translateDC(2, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 4},
         {$set:
           {
             "SP" : translateADC(3, 0, curStep % 51),
             "ISNS" : translateADC(3, 1, curStep % 51),
             "DSA2" : translateADC(3, 2, curStep % 51),
             "TEMP" : translateADC(3, 3, curStep % 51) * 100,
             "PSR3" : translateADC(3, 4, curStep % 51),
             "PSR2" : translateADC(3, 5, curStep % 51),
             "VCC" : translateADC(3, 6, curStep % 51),
             "VDD" : translateADC(3, 7, curStep % 51),
             "ADC8" : translateADC(3, 8, curStep % 51),
             "D5V" : translateADC(3, 9, curStep % 51),
             "VLDO" : translateADC(3, 10, curStep % 51),
             "VCP" : translateADC(3, 11, curStep % 51),
             "DSA1" : translateADC(3, 12, curStep % 51),
             "NSR" : translateADC(3, 13, curStep % 51),
             "PSR1" : translateADC(3, 14, curStep % 51),
             "PLR" : translateADC(3, 15, curStep % 51),
             "NPOR" : translateDC(3, 16, curStep % 51),
             "INT" : translateDC(3, 17, curStep % 51),
             "EWOK" : translateDC(3, 18, curStep % 51),
             "SLAVE" : translateDC(3, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 5},
         {$set:
           {
             "SP" : translateADC(4, 0, curStep % 51),
             "ISNS" : translateADC(4, 1, curStep % 51),
             "DSA2" : translateADC(4, 2, curStep % 51),
             "TEMP" : translateADC(4, 3, curStep % 51) * 100,
             "PSR3" : translateADC(4, 4, curStep % 51),
             "PSR2" : translateADC(4, 5, curStep % 51),
             "VCC" : translateADC(4, 6, curStep % 51),
             "VDD" : translateADC(4, 7, curStep % 51),
             "ADC8" : translateADC(4, 8, curStep % 51),
             "D5V" : translateADC(4, 9, curStep % 51),
             "VLDO" : translateADC(4, 10, curStep % 51),
             "VCP" : translateADC(4, 11, curStep % 51),
             "DSA1" : translateADC(4, 12, curStep % 51),
             "NSR" : translateADC(4, 13, curStep % 51),
             "PSR1" : translateADC(4, 14, curStep % 51),
             "PLR" : translateADC(4, 15, curStep % 51),
             "NPOR" : translateDC(4, 16, curStep % 51),
             "INT" : translateDC(4, 17, curStep % 51),
             "EWOK" : translateDC(4, 18, curStep % 51),
             "SLAVE" : translateDC(4, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 6},
         {$set:
           {
             "SP" : translateADC(5, 0, curStep % 51),
             "ISNS" : translateADC(5, 1, curStep % 51),
             "DSA2" : translateADC(5, 2, curStep % 51),
             "TEMP" : translateADC(5, 3, curStep % 51) * 100,
             "PSR3" : translateADC(5, 4, curStep % 51),
             "PSR2" : translateADC(5, 5, curStep % 51),
             "VCC" : translateADC(5, 6, curStep % 51),
             "VDD" : translateADC(5, 7, curStep % 51),
             "ADC8" : translateADC(5, 8, curStep % 51),
             "D5V" : translateADC(5, 9, curStep % 51),
             "VLDO" : translateADC(5, 10, curStep % 51),
             "VCP" : translateADC(5, 11, curStep % 51),
             "DSA1" : translateADC(5, 12, curStep % 51),
             "NSR" : translateADC(5, 13, curStep % 51),
             "PSR1" : translateADC(5, 14, curStep % 51),
             "PLR" : translateADC(5, 15, curStep % 51),
             "NPOR" : translateDC(5, 16, curStep % 51),
             "INT" : translateDC(5, 17, curStep % 51),
             "EWOK" : translateDC(5, 18, curStep % 51),
             "SLAVE" : translateDC(5, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 7},
         {$set:
           {
             "SP" : translateADC(6, 0, curStep % 51),
             "ISNS" : translateADC(6, 1, curStep % 51),
             "DSA2" : translateADC(6, 2, curStep % 51),
             "TEMP" : translateADC(6, 3, curStep % 51) * 100 + 4,
             "PSR3" : translateADC(6, 4, curStep % 51),
             "PSR2" : translateADC(6, 5, curStep % 51),
             "VCC" : translateADC(6, 6, curStep % 51),
             "VDD" : translateADC(6, 7, curStep % 51),
             "ADC8" : translateADC(6, 8, curStep % 51),
             "D5V" : translateADC(6, 9, curStep % 51),
             "VLDO" : translateADC(6, 10, curStep % 51),
             "VCP" : translateADC(6, 11, curStep % 51),
             "DSA1" : translateADC(6, 12, curStep % 51),
             "NSR" : translateADC(6, 13, curStep % 51),
             "PSR1" : translateADC(6, 14, curStep % 51),
             "PLR" : translateADC(6, 15, curStep % 51),
             "NPOR" : translateDC(6, 16, curStep % 51),
             "INT" : translateDC(6, 17, curStep % 51),
             "EWOK" : translateDC(6, 18, curStep % 51),
             "SLAVE" : translateDC(6, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 8},
         {$set:
           {
             "SP" : translateADC(7, 0, curStep % 51),
             "ISNS" : translateADC(7, 1, curStep % 51),
             "DSA2" : translateADC(7, 2, curStep % 51),
             "TEMP" : translateADC(7, 3, curStep % 51) * 100 + 5,
             "PSR3" : translateADC(7, 4, curStep % 51),
             "PSR2" : translateADC(7, 5, curStep % 51),
             "VCC" : translateADC(7, 6, curStep % 51),
             "VDD" : translateADC(7, 7, curStep % 51),
             "ADC8" : translateADC(7, 8, curStep % 51),
             "D5V" : translateADC(7, 9, curStep % 51),
             "VLDO" : translateADC(7, 10, curStep % 51),
             "VCP" : translateADC(7, 11, curStep % 51),
             "DSA1" : translateADC(7, 12, curStep % 51),
             "NSR" : translateADC(7, 13, curStep % 51),
             "PSR1" : translateADC(7, 14, curStep % 51),
             "PLR" : translateADC(7, 15, curStep % 51),
             "NPOR" : translateDC(7, 16, curStep % 51),
             "INT" : translateDC(7, 17, curStep % 51),
             "EWOK" : translateDC(7, 18, curStep % 51),
             "SLAVE" : translateDC(7, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 9},
         {$set:
           {
             "SP" : translateADC(8, 0, curStep % 51),
             "ISNS" : translateADC(8, 1, curStep % 51),
             "DSA2" : translateADC(8, 2, curStep % 51),
             "TEMP" : translateADC(8, 3, curStep % 51) * 100,
             "PSR3" : translateADC(8, 4, curStep % 51),
             "PSR2" : translateADC(8, 5, curStep % 51),
             "VCC" : translateADC(8, 6, curStep % 51),
             "VDD" : translateADC(8, 7, curStep % 51),
             "ADC8" : translateADC(8, 8, curStep % 51),
             "D5V" : translateADC(8, 9, curStep % 51),
             "VLDO" : translateADC(8, 10, curStep % 51),
             "VCP" : translateADC(8, 11, curStep % 51),
             "DSA1" : translateADC(8, 12, curStep % 51),
             "NSR" : translateADC(8, 13, curStep % 51),
             "PSR1" : translateADC(8, 14, curStep % 51),
             "PLR" : translateADC(8, 15, curStep % 51),
             "NPOR" : translateDC(8, 16, curStep % 51),
             "INT" : translateDC(8, 17, curStep % 51),
             "EWOK" : translateDC(8, 18, curStep % 51),
             "SLAVE" : translateDC(8, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 10},
         {$set:
           {
             "SP" : translateADC(9, 0, curStep % 51),
             "ISNS" : translateADC(9, 1, curStep % 51),
             "DSA2" : translateADC(9, 2, curStep % 51),
             "TEMP" : translateADC(9, 3, curStep % 51) * 100,
             "PSR3" : translateADC(9, 4, curStep % 51),
             "PSR2" : translateADC(9, 5, curStep % 51),
             "VCC" : translateADC(9, 6, curStep % 51),
             "VDD" : translateADC(9, 7, curStep % 51),
             "ADC8" : translateADC(9, 8, curStep % 51),
             "D5V" : translateADC(9, 9, curStep % 51),
             "VLDO" : translateADC(9, 10, curStep % 51),
             "VCP" : translateADC(9, 11, curStep % 51),
             "DSA1" : translateADC(9, 12, curStep % 51),
             "NSR" : translateADC(9, 13, curStep % 51),
             "PSR1" : translateADC(9, 14, curStep % 51),
             "PLR" : translateADC(9, 15, curStep % 51),
             "NPOR" : translateDC(9, 16, curStep % 51),
             "INT" : translateDC(9, 17, curStep % 51),
             "EWOK" : translateDC(9, 18, curStep % 51),
             "SLAVE" : translateDC(9, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 11},
         {$set:
           {
             "SP" : translateADC(10, 0, curStep % 51),
             "ISNS" : translateADC(10, 1, curStep % 51),
             "DSA2" : translateADC(10, 2, curStep % 51),
             "TEMP" : translateADC(10, 3, curStep % 51) * 100,
             "PSR3" : translateADC(10, 4, curStep % 51),
             "PSR2" : translateADC(10, 5, curStep % 51),
             "VCC" : translateADC(10, 6, curStep % 51),
             "VDD" : translateADC(10, 7, curStep % 51),
             "ADC8" : translateADC(10, 8, curStep % 51),
             "D5V" : translateADC(10, 9, curStep % 51),
             "VLDO" : translateADC(10, 10, curStep % 51),
             "VCP" : translateADC(10, 11, curStep % 51),
             "DSA1" : translateADC(10, 12, curStep % 51),
             "NSR" : translateADC(10, 13, curStep % 51),
             "PSR1" : translateADC(10, 14, curStep % 51),
             "PLR" : translateADC(10, 15, curStep % 51),
             "NPOR" : translateDC(10, 16, curStep % 51),
             "INT" : translateDC(10, 17, curStep % 51),
             "EWOK" : translateDC(10, 18, curStep % 51),
             "SLAVE" : translateDC(10, 19, curStep % 51),
           }
         }
       );

       DUTs.update(
         {_id: 12},
         {$set:
           {
             "SP" : translateADC(11, 0, curStep % 51),
             "ISNS" : translateADC(11, 1, curStep % 51),
             "DSA2" : translateADC(11, 2, curStep % 51),
             "TEMP" : translateADC(11, 3, curStep % 51) * 100 + 4,
             "PSR3" : translateADC(11, 4, curStep % 51),
             "PSR2" : translateADC(11, 5, curStep % 51),
             "VCC" : translateADC(11, 6, curStep % 51),
             "VDD" : translateADC(11, 7, curStep % 51),
             "ADC8" : translateADC(11, 8, curStep % 51),
             "D5V" : translateADC(11, 9, curStep % 51),
             "VLDO" : translateADC(11, 10, curStep % 51),
             "VCP" : translateADC(11, 11, curStep % 51),
             "DSA1" : translateADC(11, 12, curStep % 51),
             "NSR" : translateADC(11, 13, curStep % 51),
             "PSR1" : translateADC(11, 14, curStep % 51),
             "PLR" : translateADC(11, 15, curStep % 51),
             "NPOR" : translateDC(11, 16, curStep % 51),
             "INT" : translateDC(11, 17, curStep % 51),
             "EWOK" : translateDC(11, 18, curStep % 51),
             "SLAVE" : translateDC(11, 19, curStep % 51),
           }
         }
       );
     }

  }
}

export default angular.module('dutList', [angularMeteor])
  .component('dutList', {
    templateUrl: 'imports/components/dutList/dutList.html',
    controller: ['$scope', dutListCtrl]
  });
