import angular from 'angular';
import angularMeteor from 'angular-meteor';
import dutList from '../imports/components/dutList/dutList';
import profileList from '../imports/components/profileList/profileList';


/*
Was trying to have multiple pages
Meteor.startup(function () {
  Session.setDefault("templateName", "devices")
});

Template.body.helpers({
  template_name: function(){
    return Session.get("templateName")
  }
});

Template.body.events({
  "click .home": function() {
    Session.set("templateName", "devices");
  },
  "click .about": function() {
     Session.set("templateName", "profile");
  }

});
*/

angular.module('web-access', [
  angularMeteor,
  profileList.name,
  dutList.name,
]);
