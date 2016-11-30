import angular from 'angular';
import angularMeteor from 'angular-meteor';
import dutList from '../imports/components/dutList/dutList';
import profileEdit from '../imports/components/profileEdit/profileEdit';
 
angular.module('web-access', [
  angularMeteor,
  dutList.name,
  profileEdit.name
]);