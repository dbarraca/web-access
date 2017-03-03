import angular from 'angular';
import angularMeteor from 'angular-meteor';
import dutList from '../imports/components/dutList/dutList';
import profileList from '../imports/components/profileList/profileList';
import profileEditor from '../imports/components/profileEditor/profileEditor';

var app = angular.module('web-access', [
  angularMeteor,
  profileList.name,
  dutList.name,
  profileEditor.name,
  "ngRoute",
  "ui.router"])
  .config(function($stateProvider) {
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
  });

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