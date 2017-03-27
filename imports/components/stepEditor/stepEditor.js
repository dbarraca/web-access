import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './stepEditor.html';
import { Channels } from '../../api/channels.js';
import { Loads } from '../../api/loads.js';

class stepEditorCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    $scope.currStep = 'step1';

    this.helpers({
      channels() {
        return Channels.find({step: $scope.currStep});
      },
      load() {
        var loadQuery = Loads.findOne({step: $scope.currStep});
        if(loadQuery) {
          return loadQuery.load;
        }
      }

    })

    $scope.addChannel = function(){
      var providedChannelName = document.getElementById("channelName").value;
      var foundChannel = Channels.findOne({profile: $scope.currStep, name: providedChannelName});

      if (foundChannel){
        alert("A channel by that name already exists in this step.");
      }
      else if (!providedChannelName.replace(/\s/g, '').length){
        alert("A channel name must be provided.");
      }
      else {
        Channels.insert({step: $scope.currStep, name: providedChannelName,
          low: 0, high: 0, failureCount: 0 });    
      }
    }

    $scope.editChannel = function(channel) {
      console.log("Channel " + channel.name + " Thresholds Updated");
      Channels.update(
        {_id : channel._id},
        {step: channel.step, name: channel.name, 
          low: $("#low-" + channel._id).val(), high: $("#high-" + channel._id).val(), failureCount: $("#failureCount-" + channel._id).val()}
      );
    }

    $scope.editLoad = function() {
      var foundLoad = Loads.findOne({step : $scope.currStep});

      Loads.update(
        {_id : foundLoad._id},
        {step : foundLoad.step, load : document.getElementById("load-input").value}
      );
    }

    $scope.deleteChannel = function(id){
      Channels.remove({_id : id});   
    }
  }
}

export default angular.module('stepEditor', [angularMeteor])
  .component('stepEditor', {
    templateUrl: 'imports/components/stepEditor/stepEditor.html',
    controller: ['$scope', stepEditorCtrl]
  })
