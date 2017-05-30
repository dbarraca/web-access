import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import template from './profileViewer.html';
import { Profiles } from '../../api/profiles.js';
import profileEditor from '../profileEditor/profileEditor';
import { setProfile } from '../profileEditor/profileEditor';

class profileViewerCtrl {
  constructor($scope, $state, profileService) {
    $scope.viewModel(this);

    this.helpers({
      profiles() {
        return Profiles.find({});
      },
      currentUser() {
        return Meteor.user();
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
        Profiles.insert({
          name: providedProfName,
          createdAt: new Date,
          owner: Meteor.userId(),
          username: Meteor.user().username
        });    
      }
    }

    $scope.deleteProf = function(id){
      Profiles.remove({_id : id});   
    }
  }
}

export default angular.module('profileViewer', [angularMeteor])
  .component('profileViewer', {
    templateUrl: 'imports/components/profileViewer/profileViewer.html',
    controller: ['$scope', '$state', 'profileService', profileViewerCtrl]
  })