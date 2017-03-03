import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profileEditor.html';
//import { Profiles } from '../../api/profile.js';

class profileEditorCtrl {
  constructor($scope) {
    console.log("Profile Editor controller");
    $scope.viewModel(this);
  }
}

export default angular.module('profileEditor', [angularMeteor])
  .component('profileEditor', {
    templateUrl: 'imports/components/profileEditor/profileEditor.html',
    controller: ['$scope', profileEditorCtrl]
  })
  .controller('profileEditorCtrl', ['$scope', profileEditorCtrl]);
