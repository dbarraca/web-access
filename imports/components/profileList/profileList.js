import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profileList.html';
import { Profiles } from '../../api/profiles.js';

class profileListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      profiles() {
        return Profiles.find({});
      }
    })
  }
}

export default angular.module('profileList', [angularMeteor])
  .component('profileList', {
    templateUrl: 'imports/components/profileList/profileList.html',
    controller: ['$scope', profileListCtrl]
  });
