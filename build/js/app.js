(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(alarm) {
  this.alarm = alarm;
}

Alarm.prototype.alert = function(now) {
  return this.alarm - now;
};

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
var Alarm = require('./../js/alarm.js').alarmModule;

$(function() {
  var now = moment();
  var audio = new Audio('http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2015.mp3');
  $('#time').text(now);

  var soundAlarm = function(time) {
    setTimeout(function() {
      $(".sound-alarm").show();
      $("body").addClass("alarm");
      audio.play();
    }, time);
  }

  var stopAlarm = function() {
    $(".sound-alarm").hide();
    $("body").removeClass("alarm");
    audio.pause();
  }

  $("form").submit(function(event) {
    event.preventDefault();
    var userAlarm = moment($("#alarm").val());
    var alarm = new Alarm(userAlarm);
    soundAlarm(alarm.alert(now));
    console.log($("#alarm").val());
    console.log(userAlarm);
    console.log(alarm.alert(now));
   });

    $("#snooze").click(function(event) {
      stopAlarm();
      soundAlarm(30000);
    });

    $("#stopAlarm").click(function(event) {
      stopAlarm();
    });
});

},{"./../js/alarm.js":1}]},{},[2]);
