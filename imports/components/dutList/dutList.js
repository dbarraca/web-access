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
      if(temp >= 180)
        return 'grey';
      else if(temp >= 160)
        return 'red';
      else
        return 'green';
    }

/*
    $scope.dutColor = function(index, temp) {
      if (temp >= 180) {
        return ".dutframe .grey";
//        $('#dut-item-' + index +' .dut-frame').addClass('grey');
      }
      else if(temp >= 160) {
        return ".dutframe .red";
//        $('#dut-item-' + index + ' .dut-frame').addClass('red');
      }
      else {
        return ".dutframe .green";
//        $('#dut-item-' + index + ' .dut-frame').addClass('green');        
      }
    }*/
  }
}
 
export default angular.module('dutList', [angularMeteor])
  .component('dutList', {
    templateUrl: 'imports/components/dutList/dutList.html',
    controller: ['$scope', dutListCtrl]
  });
