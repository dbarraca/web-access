import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profileViewer.html';
import { Profiles } from '../../api/profiles.js';

class profileViewerCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      profiles() {
        return Profiles.find({});
      }
    })

    $scope.hideProfs = false;
    $scope.hideProfEdit = true;

    $scope.profEdit = function() {
      $scope.hideProfs = true;
      $scope.hideProfEdit = false;
    }

  }
}

export default angular.module('profileViewer', [angularMeteor])
  .component('profileViewer', {
    templateUrl: 'imports/components/profileViewer/profileViewer.html',
    controller: ['$scope', profileViewerCtrl]
  })
  .controller('profileViewerCtrl', ['$scope', profileViewerCtrl]);
