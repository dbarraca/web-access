import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profile.html';
import { Profiles } from '../../api/profile.js';

class profileEditCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      profiles() {
        return Profiles.find({});
      }
    })
  }
}

export default angular.module('profileEdit', [angularMeteor])
  .component('profileEdit', {
    templateUrl: 'imports/components/profile/profile.html',
    controller: ['$scope', profileEditCtrl]
  });
