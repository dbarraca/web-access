import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './dutList.html';

var temps = new Array(150, 168, 135, 159, 150, 160, 181, 129, 130, 164, 150, 178, 167, 135, 120, 159);

class dutListCtrl {
  constructor() {
    this.duts = [
    {index: '1', text: '1', temp: temps[0]}, 
    {index: '2', text: '2', temp: temps[1]}, 
    {index: '3', text: '3', temp: temps[2]}, 
    {index: '4', text: '4', temp: temps[3]}, 
    {index: '5', text: '5', temp: temps[4]}, 
    {index: '6', text: '6', temp: temps[5]}, 
    {index: '7', text: '7', temp: temps[6]}, 
    {index: '8', text: '8', temp: temps[7]}, 
    {index: '9', text: '9', temp: temps[8]}, 
    {index: '10', text: '10', temp: temps[9]}, 
    {index: '11', text: '11', temp: temps[10]}, 
    {index: '12', text: '12', temp: temps[11]}, 
    {index: '13', text: '13', temp: temps[12]}, 
    {index: '14', text: '14', temp: temps[13]}, 
    {index: '15', text: '15', temp: temps[14]}, 
    {index: '16', text: '16', temp: temps[15]}];
  }
}
 
export default angular.module('dutList', [angularMeteor])
  .component('dutList', {
    templateUrl: 'imports/components/dutList/dutList.html',
    controller: dutListCtrl
  });

$(function(){
  for(i = 1; i< 17; i++) {
    if(temps[i-1] >= 160){
      $('#dut-item-' + i + ' .dut-frame').toggleClass('red');
    }
  }
});

$(function(){
  for(i = 1; i< 17; i++) {
    if(temps[i-1] >= 180){
      $('#dut-item-' + i + ' .dut-frame').toggleClass('grey');
    }
  }
});


$(function(){
  $('#dut-item-1 .dut-frame .slider').on('click', function(){
    $('#dut-item-1 .dut-frame').toggleClass('grey');});
  $('#dut-item-2 .dut-frame .slider').on('click', function(){
    $('#dut-item-2 .dut-frame').toggleClass('grey');});
  $('#dut-item-3 .dut-frame .slider').on('click', function(){
    $('#dut-item-3 .dut-frame').toggleClass('grey');});
  $('#dut-item-4 .dut-frame .slider').on('click', function(){
    $('#dut-item-4 .dut-frame').toggleClass('grey');});
  $('#dut-item-5 .dut-frame .slider').on('click', function(){
    $('#dut-item-5 .dut-frame').toggleClass('grey');});
  $('#dut-item-6 .dut-frame .slider').on('click', function(){
    $('#dut-item-6 .dut-frame').toggleClass('grey');});
  $('#dut-item-7 .dut-frame .slider').on('click', function(){
    $('#dut-item-7 .dut-frame').toggleClass('grey');});
  $('#dut-item-8 .dut-frame .slider').on('click', function(){
    $('#dut-item-8 .dut-frame').toggleClass('grey');});
  $('#dut-item-9 .dut-frame .slider').on('click', function(){
    $('#dut-item-9 .dut-frame').toggleClass('grey');});
  $('#dut-item-10 .dut-frame .slider').on('click', function(){
    $('#dut-item-10 .dut-frame').toggleClass('grey');});
  $('#dut-item-11 .dut-frame .slider').on('click', function(){
    $('#dut-item-11 .dut-frame').toggleClass('grey');});
  $('#dut-item-12 .dut-frame .slider').on('click', function(){
    $('#dut-item-12 .dut-frame').toggleClass('grey');});
  $('#dut-item-13 .dut-frame .slider').on('click', function(){
    $('#dut-item-13 .dut-frame').toggleClass('grey');});
  $('#dut-item-14 .dut-frame .slider').on('click', function(){
    $('#dut-item-14 .dut-frame').toggleClass('grey');});
  $('#dut-item-15 .dut-frame .slider').on('click', function(){
    $('#dut-item-15 .dut-frame').toggleClass('grey');});
  $('#dut-item-16 .dut-frame .slider').on('click', function(){
    $('#dut-item-16 .dut-frame').toggleClass('grey');});

  $('#dut-item-1 .tab-title.Channels').on('click', function(){
    $('#dut-item-1 #Channels.tab').toggleClass('open');
    $('#dut-item-1 #5-min.tab').removeClass('open');
    $('#dut-item-1 #1-hour.tab').removeClass('open');
    $('#dut-item-1 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-1 .tab-title.5-min').on('click', function(){
    $('#dut-item-1 #Channels.tab').removeClass('open');
    $('#dut-item-1 #5-min.tab').toggleClass('open');
    $('#dut-item-1 #1-hour.tab').removeClass('open');
    $('#dut-item-1 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-1 .tab-title.1-hour').on('click', function(){
    $('#dut-item-1 #Channels.tab').removeClass('open');
    $('#dut-item-1 #5-min.tab').removeClass('open');
    $('#dut-item-1 #1-hour.tab').toggleClass('open');
    $('#dut-item-1 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-1 .tab-title.10-hour').on('click', function(){
    $('#dut-item-1 #Channels.tab').removeClass('open');
    $('#dut-item-1 #5-min.tab').removeClass('open');
    $('#dut-item-1 #1-hour.tab').removeClass('open');
    $('#dut-item-1 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-2 .tab-title.Channels').on('click', function(){
    $('#dut-item-2 #Channels.tab').toggleClass('open');
    $('#dut-item-2 #5-min.tab').removeClass('open');
    $('#dut-item-2 #1-hour.tab').removeClass('open');
    $('#dut-item-2 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-2 .tab-title.5-min').on('click', function(){
    $('#dut-item-2 #Channels.tab').removeClass('open');
    $('#dut-item-2 #5-min.tab').toggleClass('open');
    $('#dut-item-2 #1-hour.tab').removeClass('open');
    $('#dut-item-2 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-2 .tab-title.1-hour').on('click', function(){
    $('#dut-item-2 #Channels.tab').removeClass('open');
    $('#dut-item-2 #5-min.tab').removeClass('open');
    $('#dut-item-2 #1-hour.tab').toggleClass('open');
    $('#dut-item-2 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-2 .tab-title.10-hour').on('click', function(){
    $('#dut-item-2 #Channels.tab').removeClass('open');
    $('#dut-item-2 #5-min.tab').removeClass('open');
    $('#dut-item-2 #1-hour.tab').removeClass('open');
    $('#dut-item-2 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-3 .tab-title.Channels').on('click', function(){
    $('#dut-item-3 #Channels.tab').toggleClass('open');
    $('#dut-item-3 #5-min.tab').removeClass('open');
    $('#dut-item-3 #1-hour.tab').removeClass('open');
    $('#dut-item-3 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-3 .tab-title.5-min').on('click', function(){
    $('#dut-item-3 #Channels.tab').removeClass('open');
    $('#dut-item-3 #5-min.tab').toggleClass('open');
    $('#dut-item-3 #1-hour.tab').removeClass('open');
    $('#dut-item-3 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-3 .tab-title.1-hour').on('click', function(){
    $('#dut-item-3 #Channels.tab').removeClass('open');
    $('#dut-item-3 #5-min.tab').removeClass('open');
    $('#dut-item-3 #1-hour.tab').toggleClass('open');
    $('#dut-item-3 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-3 .tab-title.10-hour').on('click', function(){
    $('#dut-item-3 #Channels.tab').removeClass('open');
    $('#dut-item-3 #5-min.tab').removeClass('open');
    $('#dut-item-3 #1-hour.tab').removeClass('open');
    $('#dut-item-3 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-4 .tab-title.Channels').on('click', function(){
    $('#dut-item-4 #Channels.tab').toggleClass('open');
    $('#dut-item-4 #5-min.tab').removeClass('open');
    $('#dut-item-4 #1-hour.tab').removeClass('open');
    $('#dut-item-4 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-4 .tab-title.5-min').on('click', function(){
    $('#dut-item-4 #Channels.tab').removeClass('open');
    $('#dut-item-4 #5-min.tab').toggleClass('open');
    $('#dut-item-4 #1-hour.tab').removeClass('open');
    $('#dut-item-4 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-4 .tab-title.1-hour').on('click', function(){
    $('#dut-item-4 #Channels.tab').removeClass('open');
    $('#dut-item-4 #5-min.tab').removeClass('open');
    $('#dut-item-4 #1-hour.tab').toggleClass('open');
    $('#dut-item-4 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-4 .tab-title.10-hour').on('click', function(){
    $('#dut-item-4 #Channels.tab').removeClass('open');
    $('#dut-item-4 #5-min.tab').removeClass('open');
    $('#dut-item-4 #1-hour.tab').removeClass('open');
    $('#dut-item-4 #10-hour.tab').toggleClass('open');
  });
  
  $('#dut-item-5 .tab-title.Channels').on('click', function(){
    $('#dut-item-5 #Channels.tab').toggleClass('open');
    $('#dut-item-5 #5-min.tab').removeClass('open');
    $('#dut-item-5 #1-hour.tab').removeClass('open');
    $('#dut-item-5 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-5 .tab-title.5-min').on('click', function(){
    $('#dut-item-5 #Channels.tab').removeClass('open');
    $('#dut-item-5 #5-min.tab').toggleClass('open');
    $('#dut-item-5 #1-hour.tab').removeClass('open');
    $('#dut-item-5 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-5 .tab-title.1-hour').on('click', function(){
    $('#dut-item-5 #Channels.tab').removeClass('open');
    $('#dut-item-5 #5-min.tab').removeClass('open');
    $('#dut-item-5 #1-hour.tab').toggleClass('open');
    $('#dut-item-5 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-5 .tab-title.10-hour').on('click', function(){
    $('#dut-item-5 #Channels.tab').removeClass('open');
    $('#dut-item-5 #5-min.tab').removeClass('open');
    $('#dut-item-5 #1-hour.tab').removeClass('open');
    $('#dut-item-5 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-6 .tab-title.Channels').on('click', function(){
    $('#dut-item-6 #Channels.tab').toggleClass('open');
    $('#dut-item-6 #5-min.tab').removeClass('open');
    $('#dut-item-6 #1-hour.tab').removeClass('open');
    $('#dut-item-6 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-6 .tab-title.5-min').on('click', function(){
    $('#dut-item-6 #Channels.tab').removeClass('open');
    $('#dut-item-6 #5-min.tab').toggleClass('open');
    $('#dut-item-6 #1-hour.tab').removeClass('open');
    $('#dut-item-6 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-6 .tab-title.1-hour').on('click', function(){
    $('#dut-item-6 #Channels.tab').removeClass('open');
    $('#dut-item-6 #5-min.tab').removeClass('open');
    $('#dut-item-6 #1-hour.tab').toggleClass('open');
    $('#dut-item-6 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-6 .tab-title.10-hour').on('click', function(){
    $('#dut-item-6 #Channels.tab').removeClass('open');
    $('#dut-item-6 #5-min.tab').removeClass('open');
    $('#dut-item-6 #1-hour.tab').removeClass('open');
    $('#dut-item-6 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-7 .tab-title.Channels').on('click', function(){
    $('#dut-item-7 #Channels.tab').toggleClass('open');
    $('#dut-item-7 #5-min.tab').removeClass('open');
    $('#dut-item-7 #1-hour.tab').removeClass('open');
    $('#dut-item-7 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-7 .tab-title.5-min').on('click', function(){
    $('#dut-item-7 #Channels.tab').removeClass('open');
    $('#dut-item-7 #5-min.tab').toggleClass('open');
    $('#dut-item-7 #1-hour.tab').removeClass('open');
    $('#dut-item-7 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-7 .tab-title.1-hour').on('click', function(){
    $('#dut-item-7 #Channels.tab').removeClass('open');
    $('#dut-item-7 #5-min.tab').removeClass('open');
    $('#dut-item-7 #1-hour.tab').toggleClass('open');
    $('#dut-item-7 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-7 .tab-title.10-hour').on('click', function(){
    $('#dut-item-7 #Channels.tab').removeClass('open');
    $('#dut-item-7 #5-min.tab').removeClass('open');
    $('#dut-item-7 #1-hour.tab').removeClass('open');
    $('#dut-item-7 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-8 .tab-title.Channels').on('click', function(){
    $('#dut-item-8 #Channels.tab').toggleClass('open');
    $('#dut-item-8 #5-min.tab').removeClass('open');
    $('#dut-item-8 #1-hour.tab').removeClass('open');
    $('#dut-item-8 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-8 .tab-title.5-min').on('click', function(){
    $('#dut-item-8 #Channels.tab').removeClass('open');
    $('#dut-item-8 #5-min.tab').toggleClass('open');
    $('#dut-item-8 #1-hour.tab').removeClass('open');
    $('#dut-item-8 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-8 .tab-title.1-hour').on('click', function(){
    $('#dut-item-8 #Channels.tab').removeClass('open');
    $('#dut-item-8 #5-min.tab').removeClass('open');
    $('#dut-item-8 #1-hour.tab').toggleClass('open');
    $('#dut-item-8 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-8 .tab-title.10-hour').on('click', function(){
    $('#dut-item-8 #Channels.tab').removeClass('open');
    $('#dut-item-8 #5-min.tab').removeClass('open');
    $('#dut-item-8 #1-hour.tab').removeClass('open');
    $('#dut-item-8 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-9 .tab-title.Channels').on('click', function(){
    $('#dut-item-9 #Channels.tab').toggleClass('open');
    $('#dut-item-9 #5-min.tab').removeClass('open');
    $('#dut-item-9 #1-hour.tab').removeClass('open');
    $('#dut-item-9 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-9 .tab-title.5-min').on('click', function(){
    $('#dut-item-9 #Channels.tab').removeClass('open');
    $('#dut-item-9 #5-min.tab').toggleClass('open');
    $('#dut-item-9 #1-hour.tab').removeClass('open');
    $('#dut-item-9 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-9 .tab-title.1-hour').on('click', function(){
    $('#dut-item-9 #Channels.tab').removeClass('open');
    $('#dut-item-9 #5-min.tab').removeClass('open');
    $('#dut-item-9 #1-hour.tab').toggleClass('open');
    $('#dut-item-9 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-9 .tab-title.10-hour').on('click', function(){
    $('#dut-item-9 #Channels.tab').removeClass('open');
    $('#dut-item-9 #5-min.tab').removeClass('open');
    $('#dut-item-9 #1-hour.tab').removeClass('open');
    $('#dut-item-9 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-10 .tab-title.Channels').on('click', function(){
    $('#dut-item-10 #Channels.tab').toggleClass('open');
    $('#dut-item-10 #5-min.tab').removeClass('open');
    $('#dut-item-10 #1-hour.tab').removeClass('open');
    $('#dut-item-10 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-10 .tab-title.5-min').on('click', function(){
    $('#dut-item-10 #Channels.tab').removeClass('open');
    $('#dut-item-10 #5-min.tab').toggleClass('open');
    $('#dut-item-10 #1-hour.tab').removeClass('open');
    $('#dut-item-10 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-10 .tab-title.1-hour').on('click', function(){
    $('#dut-item-10 #Channels.tab').removeClass('open');
    $('#dut-item-10 #5-min.tab').removeClass('open');
    $('#dut-item-10 #1-hour.tab').toggleClass('open');
    $('#dut-item-10 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-10 .tab-title.10-hour').on('click', function(){
    $('#dut-item-10 #Channels.tab').removeClass('open');
    $('#dut-item-10 #5-min.tab').removeClass('open');
    $('#dut-item-10 #1-hour.tab').removeClass('open');
    $('#dut-item-10 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-11 .tab-title.Channels').on('click', function(){
    $('#dut-item-11 #Channels.tab').toggleClass('open');
    $('#dut-item-11 #5-min.tab').removeClass('open');
    $('#dut-item-11 #1-hour.tab').removeClass('open');
    $('#dut-item-11 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-11 .tab-title.5-min').on('click', function(){
    $('#dut-item-11 #Channels.tab').removeClass('open');
    $('#dut-item-11 #5-min.tab').toggleClass('open');
    $('#dut-item-11 #1-hour.tab').removeClass('open');
    $('#dut-item-11 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-11 .tab-title.1-hour').on('click', function(){
    $('#dut-item-11 #Channels.tab').removeClass('open');
    $('#dut-item-11 #5-min.tab').removeClass('open');
    $('#dut-item-11 #1-hour.tab').toggleClass('open');
    $('#dut-item-11 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-11 .tab-title.10-hour').on('click', function(){
    $('#dut-item-11 #Channels.tab').removeClass('open');
    $('#dut-item-11 #5-min.tab').removeClass('open');
    $('#dut-item-11 #1-hour.tab').removeClass('open');
    $('#dut-item-11 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-12 .tab-title.Channels').on('click', function(){
    $('#dut-item-12 #Channels.tab').toggleClass('open');
    $('#dut-item-12 #5-min.tab').removeClass('open');
    $('#dut-item-12 #1-hour.tab').removeClass('open');
    $('#dut-item-12 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-12 .tab-title.5-min').on('click', function(){
    $('#dut-item-12 #Channels.tab').removeClass('open');
    $('#dut-item-12 #5-min.tab').toggleClass('open');
    $('#dut-item-12 #1-hour.tab').removeClass('open');
    $('#dut-item-12 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-12 .tab-title.1-hour').on('click', function(){
    $('#dut-item-12 #Channels.tab').removeClass('open');
    $('#dut-item-12 #5-min.tab').removeClass('open');
    $('#dut-item-12 #1-hour.tab').toggleClass('open');
    $('#dut-item-12 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-12 .tab-title.10-hour').on('click', function(){
    $('#dut-item-12 #Channels.tab').removeClass('open');
    $('#dut-item-12 #5-min.tab').removeClass('open');
    $('#dut-item-12 #1-hour.tab').removeClass('open');
    $('#dut-item-12 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-13 .tab-title.Channels').on('click', function(){
    $('#dut-item-13 #Channels.tab').toggleClass('open');
    $('#dut-item-13 #5-min.tab').removeClass('open');
    $('#dut-item-13 #1-hour.tab').removeClass('open');
    $('#dut-item-13 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-13 .tab-title.5-min').on('click', function(){
    $('#dut-item-13 #Channels.tab').removeClass('open');
    $('#dut-item-13 #5-min.tab').toggleClass('open');
    $('#dut-item-13 #1-hour.tab').removeClass('open');
    $('#dut-item-13 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-13 .tab-title.1-hour').on('click', function(){
    $('#dut-item-13 #Channels.tab').removeClass('open');
    $('#dut-item-13 #5-min.tab').removeClass('open');
    $('#dut-item-13 #1-hour.tab').toggleClass('open');
    $('#dut-item-13 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-13 .tab-title.10-hour').on('click', function(){
    $('#dut-item-13 #Channels.tab').removeClass('open');
    $('#dut-item-13 #5-min.tab').removeClass('open');
    $('#dut-item-13 #1-hour.tab').removeClass('open');
    $('#dut-item-13 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-14 .tab-title.Channels').on('click', function(){
    $('#dut-item-14 #Channels.tab').toggleClass('open');
    $('#dut-item-14 #5-min.tab').removeClass('open');
    $('#dut-item-14 #1-hour.tab').removeClass('open');
    $('#dut-item-14 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-14 .tab-title.5-min').on('click', function(){
    $('#dut-item-14 #Channels.tab').removeClass('open');
    $('#dut-item-14 #5-min.tab').toggleClass('open');
    $('#dut-item-14 #1-hour.tab').removeClass('open');
    $('#dut-item-14 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-14 .tab-title.1-hour').on('click', function(){
    $('#dut-item-14 #Channels.tab').removeClass('open');
    $('#dut-item-14 #5-min.tab').removeClass('open');
    $('#dut-item-14 #1-hour.tab').toggleClass('open');
    $('#dut-item-14 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-14 .tab-title.10-hour').on('click', function(){
    $('#dut-item-14 #Channels.tab').removeClass('open');
    $('#dut-item-14 #5-min.tab').removeClass('open');
    $('#dut-item-14 #1-hour.tab').removeClass('open');
    $('#dut-item-14 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-15 .tab-title.Channels').on('click', function(){
    $('#dut-item-15 #Channels.tab').toggleClass('open');
    $('#dut-item-15 #5-min.tab').removeClass('open');
    $('#dut-item-15 #1-hour.tab').removeClass('open');
    $('#dut-item-15 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-15 .tab-title.5-min').on('click', function(){
    $('#dut-item-15 #Channels.tab').removeClass('open');
    $('#dut-item-15 #5-min.tab').toggleClass('open');
    $('#dut-item-15 #1-hour.tab').removeClass('open');
    $('#dut-item-15 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-15 .tab-title.1-hour').on('click', function(){
    $('#dut-item-15 #Channels.tab').removeClass('open');
    $('#dut-item-15 #5-min.tab').removeClass('open');
    $('#dut-item-15 #1-hour.tab').toggleClass('open');
    $('#dut-item-15 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-15 .tab-title.10-hour').on('click', function(){
    $('#dut-item-15 #Channels.tab').removeClass('open');
    $('#dut-item-15 #5-min.tab').removeClass('open');
    $('#dut-item-15 #1-hour.tab').removeClass('open');
    $('#dut-item-15 #10-hour.tab').toggleClass('open');
  });

  $('#dut-item-16 .tab-title.Channels').on('click', function(){
    $('#dut-item-16 #Channels.tab').toggleClass('open');
    $('#dut-item-16 #5-min.tab').removeClass('open');
    $('#dut-item-16 #1-hour.tab').removeClass('open');
    $('#dut-item-16 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-16 .tab-title.5-min').on('click', function(){
    $('#dut-item-16 #Channels.tab').removeClass('open');
    $('#dut-item-16 #5-min.tab').toggleClass('open');
    $('#dut-item-16 #1-hour.tab').removeClass('open');
    $('#dut-item-16 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-16 .tab-title.1-hour').on('click', function(){
    $('#dut-item-16 #Channels.tab').removeClass('open');
    $('#dut-item-16 #5-min.tab').removeClass('open');
    $('#dut-item-16 #1-hour.tab').toggleClass('open');
    $('#dut-item-16 #10-hour.tab').removeClass('open');
  });
  $('#dut-item-16 .tab-title.10-hour').on('click', function(){
    $('#dut-item-16 #Channels.tab').removeClass('open');
    $('#dut-item-16 #5-min.tab').removeClass('open');
    $('#dut-item-16 #1-hour.tab').removeClass('open');
    $('#dut-item-16 #10-hour.tab').toggleClass('open');
  });

});

