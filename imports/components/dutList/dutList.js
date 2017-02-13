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
    var curStep = 0;
    var run  = true;

    $scope.readText = function(filePath) {
      var reader = new FileReader();

      if(filePath.files && filePath.files[0]) {
        reader.onload = function (e) {
          text = e.target.result;
          packets = text.split("\n");
          curStep = 0;
        };

        reader.readAsText(filePath.files[0]);
      }
      run = true;
    }

    $scope.stopRun = function(){
      run = false;
    }

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
        //console.log(curStep);

        updateDUTS(curStep, Math.floor(curStep / 12));
        if(run)
          curStep++;
      }
     }, 1000);

     updateDUT= function(curStep, deviceId){
       DUTs.update(
         {_id: deviceId + 1},
         {$set:
           {
             "SP" : translateADC(deviceId, 0, curStep % 51),
             "ISNS" : translateADC(deviceId, 1, curStep % 51),
             "DSA2" : translateADC(deviceId, 2, curStep % 51),
             "TEMP" : translateADC(deviceId, 3, curStep % 51) * 100,
             "PSR3" : translateADC(deviceId, 4, curStep % 51),
             "PSR2" : translateADC(deviceId, 5, curStep % 51),
             "VCC" : translateADC(deviceId, 6, curStep % 51),
             "VDD" : translateADC(deviceId, 7, curStep % 51),
             "ADC8" : translateADC(deviceId, 8, curStep % 51),
             "D5V" : translateADC(deviceId, 9, curStep % 51),
             "VLDO" : translateADC(deviceId, 10, curStep % 51),
             "VCP" : translateADC(deviceId, 11, curStep % 51),
             "DSA1" : translateADC(deviceId, 12, curStep % 51),
             "NSR" : translateADC(deviceId, 13, curStep % 51),
             "PSR1" : translateADC(deviceId, 14, curStep % 51),
             "PLR" : translateADC(deviceId, 15, curStep % 51),
             "NPOR" : translateDC(deviceId, 16, curStep % 51),
             "INT" : translateDC(deviceId, 17, curStep % 51),
             "EWOK" : translateDC(deviceId, 18, curStep % 51),
             "SLAVE" : translateDC(deviceId, 19, curStep % 51),
           }
         }
       );
     }

     updateDUTS = function(curStep, packet) {
       console.log(packet);
       updateDUT(curStep, parseInt((packets[packet].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 1].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 2].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 3].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 4].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 5].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 6].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 7].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 8].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 9].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 10].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
       updateDUT(curStep, parseInt((packets[packet + 11].split(" - ")[1].substring(4080, 4080 + 8)), 16) - 0xAABBCCDD);
     }

  }
}

export default angular.module('dutList', [angularMeteor])
  .component('dutList', {
    templateUrl: 'imports/components/dutList/dutList.html',
    controller: ['$scope', dutListCtrl]
  });
