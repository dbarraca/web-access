import { DUTs } from '../api/duts.js';

var amqp = require('amqplib/callback_api');
var curStep = 0;

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var ex = 'DUTlogs';

    ch.assertExchange(ex, 'fanout', {durable: false});

    ch.assertQueue('', {exclusive: true}, function(err, q) {
      ch.bindQueue(q.queue, ex, '');

      ch.consume(q.queue, function(msg) {
        parsePacket(msg.content.toString());
      }, {noAck: true});
    });
  });
});


parsePacket = function(packet){
  setTimeout(boundUpdate(packet), curStep % 51)
}

var boundUpdate = Meteor.bindEnvironment(
  function(packet){
    updateDUT(parseInt((packet.split(" - ")[1]
      .substring(4080, 4088)), 16) - 0xAABBCCDD + 1, packet);
  },function(e) {
    throw e;
  }
);

translateADC = function(packet, reading, step) {
  return +(translateDC(packet, reading, step) / (2048/3));
}

translateDC = function(packet, reading, step) {
  return parseInt(packet.split(" - ")[1]
   .substring(reading * 4 + step * 80, reading * 4 + step * 80 + 4), 16);
}

updateDUT = function(deviceId, packet){
  curStep++;
  console.log(curStep);

  DUTs.update(
    {_id: deviceId},
    {$set:
      {
        "SP" : (translateADC(packet, 0, curStep % 51) * 6).toFixed(3),
        "ISNS" : (translateADC(packet, 1, curStep % 51) * 6).toFixed(3),
        "DSA2" : (translateADC(packet, 2, curStep % 51) * 10).toFixed(3),
        "TEMP" : ((0.6972-(translateADC(packet, 3, curStep % 51)/5.0))/
          0.002075).toFixed(0),
        "PSR3" : (translateADC(packet, 4, curStep % 51)).toFixed(3),
        "PSR2" : (translateADC(packet, 5, curStep % 51) * 2).toFixed(3),
        "VCC" : (translateADC(packet, 6, curStep % 51) * 3).toFixed(3),
        "VDD" : (translateADC(packet, 7, curStep % 51) * 6).toFixed(3),
        "ADC8" : translateDC(packet, 8, curStep % 51),
        "D5V" : (translateADC(packet, 9, curStep % 51) * 3).toFixed(3),
        "VLDO" : (translateADC(packet, 10, curStep % 51) * 6).toFixed(3),
        "VCP" : (translateADC(packet, 11, curStep % 51) * 10).toFixed(3),
        "DSA1" : (translateADC(packet, 12, curStep % 51) * 10).toFixed(3),
        "NSR" : (translateADC(packet, 13, curStep % 51) * 2).toFixed(3),
        "PSR1" : (translateADC(packet, 14, curStep % 51)).toFixed(3),
        "PLR" : (translateADC(packet, 15, curStep % 51) * 2).toFixed(3),
        "NPOR" : translateDC(packet, 16, curStep % 51),
        "INT" : translateDC(packet, 17, curStep % 51),
        "EWOK" : translateDC(packet, 18, curStep % 51),
        "SLAVE" : translateDC(packet, 19, curStep % 51),
      }
    }
  );
}