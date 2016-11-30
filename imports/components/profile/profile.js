import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profile.html';
 
class profileCtrl {
  constructor() {
  }
}
 
export default angular.module('profile', [angularMeteor])
  .component('profile', {
    templateUrl: 'imports/components/profile/profile.html',
    controller: profileCtrl
  });