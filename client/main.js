import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import dutList from '../imports/components/dutList/dutList';
import profileViewer from '../imports/components/profileViewer/profileViewer';
import profileEditor from '../imports/components/profileEditor/profileEditor';
import stepEditor from '../imports/components/stepEditor/stepEditor';
import './accounts/accounts-config.js';
//import {Accounts} from 'meteor/accounts-base';

class mainCtrl {
  constructor($scope, $state) {

  }
}

var app = angular.module('HTOL', [angularMeteor, profileViewer.name,
  dutList.name, profileEditor.name, stepEditor.name, "ui.router", 'accounts.ui'])
  .controller('mainController', ['$scope', '$state', 'profileService', mainCtrl]);


app.config(['$stateProvider', '$urlRouterProvider',
   function($stateProvider, $router) {
     $router.otherwise("/dut");

    $stateProvider
    .state('dutList',  {
      url: '/dut',
      template: '<dut-list></dut-list>',
    })
    .state('profView',  {
      url: '/profile_viewer',
      template: '<profile-viewer></profile-viewer>',
    })
    .state('profEdit',  {
      url: '/profile_editor/:profileName',
      template: '<profile-editor></profile-editor>',
    })
    .state('stepEdit',  {
      url: '/step_editor/:stepName',
      template: '<step-editor></step-editor>',
    })
    .state('analysis',  {
      url: '/analysis',
      template: '<div>analysis</div>',
    })
   }
]);

app.service('profileService', function() {
  var currProf = {}
  currProf.name = '';

  currProf.setCurrProf = function(profName){
    console.log("setCurrProf: profName: " + profName);
    currProf.name = profName;
    console.log("setCurrProf: currProf.name: " + currProf.name);
  }

  return currProf;
});