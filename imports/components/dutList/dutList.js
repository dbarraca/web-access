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

    $scope.dutcolor = function(index, temp) {
      //alert('#dut-item-' + index +' .dut-frame');
      //if(temp >= 160) {
//        $('#dut-item-' + 1 +' .dut-frame').removeClass('green');
        $('#dut-item-' + 1 +' .dut-frame').toggleClass('red');
      //  $('#dut-item-' + index +' .dut-frame').removeClass('green');
       // $('#dut-item-' + index +' .dut-frame').toggleClass('red');
      //}
    }
  }
}
 
export default angular.module('dutList', [angularMeteor])
  .component('dutList', {
    templateUrl: 'imports/components/dutList/dutList.html',
    controller: ['$scope', dutListCtrl]
  });

/*
$(function(){
  $('#dut-item-1 .dut-frame .slider').on('click', function(){
    $('#dut-item-1 .dut-frame').toggleClass('grey');});
  $('#dut-item-2 .dut-frame .slider').on('click', function(){
    $('#dut-item-2 .dut-frame').toggleClass('grey');});
  $('#dut-item-3 .dut-frame .slider').on('click', function(){
    $('#dut-item-3 .dut-frame').toggleClass('grey');});
  $('#dut-item-4 .dut-frame .slider').on('click', function(){
    $('#dut-item-4 .dut-frame').toggleClass('grey');});
  $('#dut-item-5 .dut-frame .slider').on('click', function(){
    $('#dut-item-5 .dut-frame').toggleClass('grey');});
  $('#dut-item-6 .dut-frame .slider').on('click', function(){
    $('#dut-item-6 .dut-frame').toggleClass('grey');});
  $('#dut-item-7 .dut-frame .slider').on('click', function(){
    $('#dut-item-7 .dut-frame').toggleClass('grey');});
  $('#dut-item-8 .dut-frame .slider').on('click', function(){
    $('#dut-item-8 .dut-frame').toggleClass('grey');});
  $('#dut-item-9 .dut-frame .slider').on('click', function(){
    $('#dut-item-9 .dut-frame').toggleClass('grey');});
  $('#dut-item-10 .dut-frame .slider').on('click', function(){
    $('#dut-item-10 .dut-frame').toggleClass('grey');});
  $('#dut-item-11 .dut-frame .slider').on('click', function(){
    $('#dut-item-11 .dut-frame').toggleClass('grey');});
  $('#dut-item-12 .dut-frame .slider').on('click', function(){
    $('#dut-item-12 .dut-frame').toggleClass('grey');});
  $('#dut-item-13 .dut-frame .slider').on('click', function(){
    $('#dut-item-13 .dut-frame').toggleClass('grey');});
  $('#dut-item-14 .dut-frame .slider').on('click', function(){
    $('#dut-item-14 .dut-frame').toggleClass('grey');});
  $('#dut-item-15 .dut-frame .slider').on('click', function(){
    $('#dut-item-15 .dut-frame').toggleClass('grey');});
  $('#dut-item-16 .dut-frame .slider').on('click', function(){
    $('#dut-item-16 .dut-frame').toggleClass('grey');});

  $('#dut-item-1 .tab-title.Channels').on('click', function(){
    $('#dut-item-1 #Channels.tab').toggleClass('open');
    $('#dut-item-1 #5-min.tab').removeClass('open');
    $('#dut-item-1 #1-hour.tab').removeClass('open');
    $('#dut-item-1 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-1 .tab-title.5-min').on('click', function(){
    $('#dut-item-1 #Channels.tab').removeClass('open');
    $('#dut-item-1 #5-min.tab').toggleClass('open');
    $('#dut-item-1 #1-hour.tab').removeClass('open');
    $('#dut-item-1 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-1 .tab-title.1-hour').on('click', function(){
    $('#dut-item-1 #Channels.tab').removeClass('open');
    $('#dut-item-1 #5-min.tab').removeClass('open');
    $('#dut-item-1 #1-hour.tab').toggleClass('open');
    $('#dut-item-1 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-1 .tab-title.10-hour').on('click', function(){
    $('#dut-item-1 #Channels.tab').removeClass('open');
    $('#dut-item-1 #5-min.tab').removeClass('open');
    $('#dut-item-1 #1-hour.tab').removeClass('open');
    $('#dut-item-1 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-2 .tab-title.Channels').on('click', function(){
    $('#dut-item-2 #Channels.tab').toggleClass('open');
    $('#dut-item-2 #5-min.tab').removeClass('open');
    $('#dut-item-2 #1-hour.tab').removeClass('open');
    $('#dut-item-2 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-2 .tab-title.5-min').on('click', function(){
    $('#dut-item-2 #Channels.tab').removeClass('open');
    $('#dut-item-2 #5-min.tab').toggleClass('open');
    $('#dut-item-2 #1-hour.tab').removeClass('open');
    $('#dut-item-2 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-2 .tab-title.1-hour').on('click', function(){
    $('#dut-item-2 #Channels.tab').removeClass('open');
    $('#dut-item-2 #5-min.tab').removeClass('open');
    $('#dut-item-2 #1-hour.tab').toggleClass('open');
    $('#dut-item-2 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-2 .tab-title.10-hour').on('click', function(){
    $('#dut-item-2 #Channels.tab').removeClass('open');
    $('#dut-item-2 #5-min.tab').removeClass('open');
    $('#dut-item-2 #1-hour.tab').removeClass('open');
    $('#dut-item-2 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-3 .tab-title.Channels').on('click', function(){
    $('#dut-item-3 #Channels.tab').toggleClass('open');
    $('#dut-item-3 #5-min.tab').removeClass('open');
    $('#dut-item-3 #1-hour.tab').removeClass('open');
    $('#dut-item-3 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-3 .tab-title.5-min').on('click', function(){
    $('#dut-item-3 #Channels.tab').removeClass('open');
    $('#dut-item-3 #5-min.tab').toggleClass('open');
    $('#dut-item-3 #1-hour.tab').removeClass('open');
    $('#dut-item-3 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-3 .tab-title.1-hour').on('click', function(){
    $('#dut-item-3 #Channels.tab').removeClass('open');
    $('#dut-item-3 #5-min.tab').removeClass('open');
    $('#dut-item-3 #1-hour.tab').toggleClass('open');
    $('#dut-item-3 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-3 .tab-title.10-hour').on('click', function(){
    $('#dut-item-3 #Channels.tab').removeClass('open');
    $('#dut-item-3 #5-min.tab').removeClass('open');
    $('#dut-item-3 #1-hour.tab').removeClass('open');
    $('#dut-item-3 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-4 .tab-title.Channels').on('click', function(){
    $('#dut-item-4 #Channels.tab').toggleClass('open');
    $('#dut-item-4 #5-min.tab').removeClass('open');
    $('#dut-item-4 #1-hour.tab').removeClass('open');
    $('#dut-item-4 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-4 .tab-title.5-min').on('click', function(){
    $('#dut-item-4 #Channels.tab').removeClass('open');
    $('#dut-item-4 #5-min.tab').toggleClass('open');
    $('#dut-item-4 #1-hour.tab').removeClass('open');
    $('#dut-item-4 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-4 .tab-title.1-hour').on('click', function(){
    $('#dut-item-4 #Channels.tab').removeClass('open');
    $('#dut-item-4 #5-min.tab').removeClass('open');
    $('#dut-item-4 #1-hour.tab').toggleClass('open');
    $('#dut-item-4 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-4 .tab-title.10-hour').on('click', function(){
    $('#dut-item-4 #Channels.tab').removeClass('open');
    $('#dut-item-4 #5-min.tab').removeClass('open');
    $('#dut-item-4 #1-hour.tab').removeClass('open');
    $('#dut-item-4 #10-hour.tab').toggleClass('open');
  });
  
  $('#dut-item-5 .tab-title.Channels').on('click', function(){
    $('#dut-item-5 #Channels.tab').toggleClass('open');
    $('#dut-item-5 #5-min.tab').removeClass('open');
    $('#dut-item-5 #1-hour.tab').removeClass('open');
    $('#dut-item-5 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-5 .tab-title.5-min').on('click', function(){
    $('#dut-item-5 #Channels.tab').removeClass('open');
    $('#dut-item-5 #5-min.tab').toggleClass('open');
    $('#dut-item-5 #1-hour.tab').removeClass('open');
    $('#dut-item-5 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-5 .tab-title.1-hour').on('click', function(){
    $('#dut-item-5 #Channels.tab').removeClass('open');
    $('#dut-item-5 #5-min.tab').removeClass('open');
    $('#dut-item-5 #1-hour.tab').toggleClass('open');
    $('#dut-item-5 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-5 .tab-title.10-hour').on('click', function(){
    $('#dut-item-5 #Channels.tab').removeClass('open');
    $('#dut-item-5 #5-min.tab').removeClass('open');
    $('#dut-item-5 #1-hour.tab').removeClass('open');
    $('#dut-item-5 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-6 .tab-title.Channels').on('click', function(){
    $('#dut-item-6 #Channels.tab').toggleClass('open');
    $('#dut-item-6 #5-min.tab').removeClass('open');
    $('#dut-item-6 #1-hour.tab').removeClass('open');
    $('#dut-item-6 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-6 .tab-title.5-min').on('click', function(){
    $('#dut-item-6 #Channels.tab').removeClass('open');
    $('#dut-item-6 #5-min.tab').toggleClass('open');
    $('#dut-item-6 #1-hour.tab').removeClass('open');
    $('#dut-item-6 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-6 .tab-title.1-hour').on('click', function(){
    $('#dut-item-6 #Channels.tab').removeClass('open');
    $('#dut-item-6 #5-min.tab').removeClass('open');
    $('#dut-item-6 #1-hour.tab').toggleClass('open');
    $('#dut-item-6 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-6 .tab-title.10-hour').on('click', function(){
    $('#dut-item-6 #Channels.tab').removeClass('open');
    $('#dut-item-6 #5-min.tab').removeClass('open');
    $('#dut-item-6 #1-hour.tab').removeClass('open');
    $('#dut-item-6 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-7 .tab-title.Channels').on('click', function(){
    $('#dut-item-7 #Channels.tab').toggleClass('open');
    $('#dut-item-7 #5-min.tab').removeClass('open');
    $('#dut-item-7 #1-hour.tab').removeClass('open');
    $('#dut-item-7 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-7 .tab-title.5-min').on('click', function(){
    $('#dut-item-7 #Channels.tab').removeClass('open');
    $('#dut-item-7 #5-min.tab').toggleClass('open');
    $('#dut-item-7 #1-hour.tab').removeClass('open');
    $('#dut-item-7 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-7 .tab-title.1-hour').on('click', function(){
    $('#dut-item-7 #Channels.tab').removeClass('open');
    $('#dut-item-7 #5-min.tab').removeClass('open');
    $('#dut-item-7 #1-hour.tab').toggleClass('open');
    $('#dut-item-7 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-7 .tab-title.10-hour').on('click', function(){
    $('#dut-item-7 #Channels.tab').removeClass('open');
    $('#dut-item-7 #5-min.tab').removeClass('open');
    $('#dut-item-7 #1-hour.tab').removeClass('open');
    $('#dut-item-7 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-8 .tab-title.Channels').on('click', function(){
    $('#dut-item-8 #Channels.tab').toggleClass('open');
    $('#dut-item-8 #5-min.tab').removeClass('open');
    $('#dut-item-8 #1-hour.tab').removeClass('open');
    $('#dut-item-8 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-8 .tab-title.5-min').on('click', function(){
    $('#dut-item-8 #Channels.tab').removeClass('open');
    $('#dut-item-8 #5-min.tab').toggleClass('open');
    $('#dut-item-8 #1-hour.tab').removeClass('open');
    $('#dut-item-8 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-8 .tab-title.1-hour').on('click', function(){
    $('#dut-item-8 #Channels.tab').removeClass('open');
    $('#dut-item-8 #5-min.tab').removeClass('open');
    $('#dut-item-8 #1-hour.tab').toggleClass('open');
    $('#dut-item-8 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-8 .tab-title.10-hour').on('click', function(){
    $('#dut-item-8 #Channels.tab').removeClass('open');
    $('#dut-item-8 #5-min.tab').removeClass('open');
    $('#dut-item-8 #1-hour.tab').removeClass('open');
    $('#dut-item-8 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-9 .tab-title.Channels').on('click', function(){
    $('#dut-item-9 #Channels.tab').toggleClass('open');
    $('#dut-item-9 #5-min.tab').removeClass('open');
    $('#dut-item-9 #1-hour.tab').removeClass('open');
    $('#dut-item-9 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-9 .tab-title.5-min').on('click', function(){
    $('#dut-item-9 #Channels.tab').removeClass('open');
    $('#dut-item-9 #5-min.tab').toggleClass('open');
    $('#dut-item-9 #1-hour.tab').removeClass('open');
    $('#dut-item-9 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-9 .tab-title.1-hour').on('click', function(){
    $('#dut-item-9 #Channels.tab').removeClass('open');
    $('#dut-item-9 #5-min.tab').removeClass('open');
    $('#dut-item-9 #1-hour.tab').toggleClass('open');
    $('#dut-item-9 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-9 .tab-title.10-hour').on('click', function(){
    $('#dut-item-9 #Channels.tab').removeClass('open');
    $('#dut-item-9 #5-min.tab').removeClass('open');
    $('#dut-item-9 #1-hour.tab').removeClass('open');
    $('#dut-item-9 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-10 .tab-title.Channels').on('click', function(){
    $('#dut-item-10 #Channels.tab').toggleClass('open');
    $('#dut-item-10 #5-min.tab').removeClass('open');
    $('#dut-item-10 #1-hour.tab').removeClass('open');
    $('#dut-item-10 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-10 .tab-title.5-min').on('click', function(){
    $('#dut-item-10 #Channels.tab').removeClass('open');
    $('#dut-item-10 #5-min.tab').toggleClass('open');
    $('#dut-item-10 #1-hour.tab').removeClass('open');
    $('#dut-item-10 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-10 .tab-title.1-hour').on('click', function(){
    $('#dut-item-10 #Channels.tab').removeClass('open');
    $('#dut-item-10 #5-min.tab').removeClass('open');
    $('#dut-item-10 #1-hour.tab').toggleClass('open');
    $('#dut-item-10 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-10 .tab-title.10-hour').on('click', function(){
    $('#dut-item-10 #Channels.tab').removeClass('open');
    $('#dut-item-10 #5-min.tab').removeClass('open');
    $('#dut-item-10 #1-hour.tab').removeClass('open');
    $('#dut-item-10 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-11 .tab-title.Channels').on('click', function(){
    $('#dut-item-11 #Channels.tab').toggleClass('open');
    $('#dut-item-11 #5-min.tab').removeClass('open');
    $('#dut-item-11 #1-hour.tab').removeClass('open');
    $('#dut-item-11 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-11 .tab-title.5-min').on('click', function(){
    $('#dut-item-11 #Channels.tab').removeClass('open');
    $('#dut-item-11 #5-min.tab').toggleClass('open');
    $('#dut-item-11 #1-hour.tab').removeClass('open');
    $('#dut-item-11 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-11 .tab-title.1-hour').on('click', function(){
    $('#dut-item-11 #Channels.tab').removeClass('open');
    $('#dut-item-11 #5-min.tab').removeClass('open');
    $('#dut-item-11 #1-hour.tab').toggleClass('open');
    $('#dut-item-11 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-11 .tab-title.10-hour').on('click', function(){
    $('#dut-item-11 #Channels.tab').removeClass('open');
    $('#dut-item-11 #5-min.tab').removeClass('open');
    $('#dut-item-11 #1-hour.tab').removeClass('open');
    $('#dut-item-11 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-12 .tab-title.Channels').on('click', function(){
    $('#dut-item-12 #Channels.tab').toggleClass('open');
    $('#dut-item-12 #5-min.tab').removeClass('open');
    $('#dut-item-12 #1-hour.tab').removeClass('open');
    $('#dut-item-12 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-12 .tab-title.5-min').on('click', function(){
    $('#dut-item-12 #Channels.tab').removeClass('open');
    $('#dut-item-12 #5-min.tab').toggleClass('open');
    $('#dut-item-12 #1-hour.tab').removeClass('open');
    $('#dut-item-12 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-12 .tab-title.1-hour').on('click', function(){
    $('#dut-item-12 #Channels.tab').removeClass('open');
    $('#dut-item-12 #5-min.tab').removeClass('open');
    $('#dut-item-12 #1-hour.tab').toggleClass('open');
    $('#dut-item-12 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-12 .tab-title.10-hour').on('click', function(){
    $('#dut-item-12 #Channels.tab').removeClass('open');
    $('#dut-item-12 #5-min.tab').removeClass('open');
    $('#dut-item-12 #1-hour.tab').removeClass('open');
    $('#dut-item-12 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-13 .tab-title.Channels').on('click', function(){
    $('#dut-item-13 #Channels.tab').toggleClass('open');
    $('#dut-item-13 #5-min.tab').removeClass('open');
    $('#dut-item-13 #1-hour.tab').removeClass('open');
    $('#dut-item-13 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-13 .tab-title.5-min').on('click', function(){
    $('#dut-item-13 #Channels.tab').removeClass('open');
    $('#dut-item-13 #5-min.tab').toggleClass('open');
    $('#dut-item-13 #1-hour.tab').removeClass('open');
    $('#dut-item-13 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-13 .tab-title.1-hour').on('click', function(){
    $('#dut-item-13 #Channels.tab').removeClass('open');
    $('#dut-item-13 #5-min.tab').removeClass('open');
    $('#dut-item-13 #1-hour.tab').toggleClass('open');
    $('#dut-item-13 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-13 .tab-title.10-hour').on('click', function(){
    $('#dut-item-13 #Channels.tab').removeClass('open');
    $('#dut-item-13 #5-min.tab').removeClass('open');
    $('#dut-item-13 #1-hour.tab').removeClass('open');
    $('#dut-item-13 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-14 .tab-title.Channels').on('click', function(){
    $('#dut-item-14 #Channels.tab').toggleClass('open');
    $('#dut-item-14 #5-min.tab').removeClass('open');
    $('#dut-item-14 #1-hour.tab').removeClass('open');
    $('#dut-item-14 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-14 .tab-title.5-min').on('click', function(){
    $('#dut-item-14 #Channels.tab').removeClass('open');
    $('#dut-item-14 #5-min.tab').toggleClass('open');
    $('#dut-item-14 #1-hour.tab').removeClass('open');
    $('#dut-item-14 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-14 .tab-title.1-hour').on('click', function(){
    $('#dut-item-14 #Channels.tab').removeClass('open');
    $('#dut-item-14 #5-min.tab').removeClass('open');
    $('#dut-item-14 #1-hour.tab').toggleClass('open');
    $('#dut-item-14 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-14 .tab-title.10-hour').on('click', function(){
    $('#dut-item-14 #Channels.tab').removeClass('open');
    $('#dut-item-14 #5-min.tab').removeClass('open');
    $('#dut-item-14 #1-hour.tab').removeClass('open');
    $('#dut-item-14 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-15 .tab-title.Channels').on('click', function(){
    $('#dut-item-15 #Channels.tab').toggleClass('open');
    $('#dut-item-15 #5-min.tab').removeClass('open');
    $('#dut-item-15 #1-hour.tab').removeClass('open');
    $('#dut-item-15 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-15 .tab-title.5-min').on('click', function(){
    $('#dut-item-15 #Channels.tab').removeClass('open');
    $('#dut-item-15 #5-min.tab').toggleClass('open');
    $('#dut-item-15 #1-hour.tab').removeClass('open');
    $('#dut-item-15 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-15 .tab-title.1-hour').on('click', function(){
    $('#dut-item-15 #Channels.tab').removeClass('open');
    $('#dut-item-15 #5-min.tab').removeClass('open');
    $('#dut-item-15 #1-hour.tab').toggleClass('open');
    $('#dut-item-15 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-15 .tab-title.10-hour').on('click', function(){
    $('#dut-item-15 #Channels.tab').removeClass('open');
    $('#dut-item-15 #5-min.tab').removeClass('open');
    $('#dut-item-15 #1-hour.tab').removeClass('open');
    $('#dut-item-15 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-16 .tab-title.Channels').on('click', function(){
    $('#dut-item-16 #Channels.tab').toggleClass('open');
    $('#dut-item-16 #5-min.tab').removeClass('open');
    $('#dut-item-16 #1-hour.tab').removeClass('open');
    $('#dut-item-16 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-16 .tab-title.5-min').on('click', function(){
    $('#dut-item-16 #Channels.tab').removeClass('open');
    $('#dut-item-16 #5-min.tab').toggleClass('open');
    $('#dut-item-16 #1-hour.tab').removeClass('open');
    $('#dut-item-16 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-16 .tab-title.1-hour').on('click', function(){
    $('#dut-item-16 #Channels.tab').removeClass('open');
    $('#dut-item-16 #5-min.tab').removeClass('open');
    $('#dut-item-16 #1-hour.tab').toggleClass('open');
    $('#dut-item-16 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-16 .tab-title.10-hour').on('click', function(){
    $('#dut-item-16 #Channels.tab').removeClass('open');
    $('#dut-item-16 #5-min.tab').removeClass('open');
    $('#dut-item-16 #1-hour.tab').removeClass('open');
    $('#dut-item-16 #10-hour.tab').toggleClass('open');
  });

});

*/