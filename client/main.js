import angular from 'angular';
import angularMeteor from 'angular-meteor';
import dutList from '../imports/components/dutList/dutList';
import profileViewer from '../imports/components/profileViewer/profileViewer';
import profileEditor from '../imports/components/profileEditor/profileEditor';
import stepEditor from '../imports/components/stepEditor/stepEditor';

class mainCtrl {
  constructor($scope) {


    $scope.hideDutList = false;
    $scope.hideProfView = true;

    $scope.dutList = function() {
      $scope.hideDutList = false;
      $scope.hideProfView = true;
    }

    $scope.profView = function() {
      $scope.hideDutList = true;
      $scope.hideProfView = false;
    }

  }
}


var app = angular.module('HTOL', [angularMeteor, profileViewer.name,
  dutList.name, profileEditor.name, stepEditor.name])
  .controller('mainController', ['$scope', 'profileService', mainCtrl]);
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

/*  .config(function($stateProvider) {
    $stateProvider.state("main", {
      url:"",
      controller:"dutListController",
      templateUrl:"../imports/components/dutList/dutList.html",
    }),
    $stateProvider.state("dutList", {
      url:"/devices",
      controller:"dutListController",
      templateUrl:"imports/components/dutList/dutList.html",
    })
  });*/

/*app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "imports/components/dutList/dutList.html",
    //  controller: "dutListController",
  })
  .when("/devices", {
      templateUrl : "imports/components/dutList/dutList.html",
    //  controller: "dutListController",
  })
  .when("/profiles", {
      templateUrl : "imports/components/profileList/profileList.html",
    //  controller : "profileListCtrl",
  })
  .when("/profile-editor", {
      templateUrl : "imports/components/profileEditor/profileEditor.html",
    //  controller :"profileEditorCtrl",
  });
});*/