import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profileViewer.html';
import { Profiles } from '../../api/profiles.js';
import profileEditor from '../profileEditor/profileEditor';
import { setProfile } from '../profileEditor/profileEditor';

class profileViewerCtrl {
  constructor($scope, profileService) {
    $scope.viewModel(this);

    this.helpers({
      profiles() {
        return Profiles.find({});
      }
    })

    $scope.addProf = function(){
      console.log(document.getElementById("profName").value);
      var providedProfName = document.getElementById("profName").value;
      var foundProf = Profiles.findOne({name: providedProfName});

      if (foundProf){
        alert("A profile by that name already exists.");
      }
      else if (!providedProfName.replace(/\s/g, '').length){
        alert("A profile name must be provided.");
      }
      else {
        Profiles.insert({name: providedProfName});    
      }
    }

    $scope.deleteProf = function(id){
      Profiles.remove({_id : id});   
    }

    $scope.hideProfs = false;
    $scope.hideProfEdit = true;

    $scope.profEdit = function(name) {
      $scope.hideProfs = true;
      $scope.hideProfEdit = false;
  //    setProfile(name);
    }

    $scope.returnProfs = function() {
      $scope.hideProfs = false;
      $scope.hideProfEdit = true;      
    }
  }
}

export default angular.module('profileViewer', [angularMeteor])
  .component('profileViewer', {
    templateUrl: 'imports/components/profileViewer/profileViewer.html',
    controller: ['$scope', 'profileService', profileViewerCtrl]
  })