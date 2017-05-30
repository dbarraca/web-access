import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profileEditor.html';
import { Steps } from '../../api/steps.js';

var currProf = 'profile1';

class profileEditorCtrl {
  constructor($scope, profileService) {
    $scope.viewModel(this);
 
    this.helpers({
      stepsActive() {
        return Steps.find({profile: currProf, active: true});
      },
      stepsInactive() {
        return Steps.find({profile: currProf, active: false});
      }
    })

    $scope.activate = function(step) {
      Steps.update( 
      	{_id: step._id} ,
      	{profile: step.profile, name : step.name, active: true});
    }

     $scope.inactivate = function(step) {
      Steps.update(
      	{_id: step._id} ,
      	{profile: step.profile, name : step.name, active: false});
    }

    $scope.hideActSteps = false;

    $scope.toggleActSteps = function(){
    	$scope.hideActSteps = !$scope.hideActSteps;
    }

    $scope.hideInactSteps = false;

    $scope.toggleInactSteps = function(){
    	$scope.hideInactSteps = !$scope.hideInactSteps;
    }

    $scope.addStep = function(){
      var status = document.getElementById("status").checked;
      var providedStepName = document.getElementById("stepName").value;
      var foundStep = Steps.findOne({profile: currProf, name: providedStepName});

      if (foundStep){
        alert("A step by that name already exists in this profile.");
      }
      else if (!providedStepName.replace(/\s/g, '').length){
        alert("A step name must be provided.");
      }
      else {
        console.log(currProf);
        Steps.insert({profile: currProf, name: providedStepName, active: status});   	
      }
    }

    $scope.deleteStep = function(id){
      Steps.remove({_id : id});   
    }
  }
}

export default angular.module('profileEditor', [angularMeteor])
  .component('profileEditor', {
    templateUrl: 'imports/components/profileEditor/profileEditor.html',
    controller: ['$scope', 'profileService', profileEditorCtrl]
  })

export function setProfile(profName) {
  currProf = profName;
 // console.log(currProf);
};
   
