import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profileEdit.html';
import { Profiles } from '../../api/profiles.js';

class profileEditCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      profiles() {
        return Profiles.find({});
      }
    })

    $scope.openThresholds = function(index) {
      $('#profile-item-' + index + ' .profile-page').toggleClass('open');
    }
  }
}

export default angular.module('profileEdit', [angularMeteor])
  .component('profileEdit', {
    templateUrl: 'imports/components/profileEdit/profileEdit.html',
    controller: ['$scope', profileEditCtrl]
  });
