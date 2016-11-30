import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './profileEdit.html';
 
class ProfileEditCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}
 
export default angular.module('profileEdit', [angularMeteor])
  .component('profileEdit', {
    templateUrl: 'imports/components/profileEdit/profileEdit.html',
    controller: ProfileEditCtrl
  });