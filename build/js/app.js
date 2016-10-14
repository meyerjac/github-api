(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b007f56453a660eb2f3a1e744d61ff52e0c2fb7a"

},{}],2:[function(require,module,exports){
var User = require('./../js/github.js').userModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  var newUser = new User("string");
  $('#usernameForm').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();

    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      console.log(response);
      $('#name').text("Name: " + (response.name));
      $('#bio').text("Bio: " + (response.bio));
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });

    var repoNames = [];
    var descriptionArray = [];
    $.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + apiKey).then(function(response) {
      console.log(response);
      for(var i = 0; i< response.length; i++) {
        repoNames.push(response[i].name);
        descriptionArray.push(response[i].description);
      }

      $('.repotitle').text(username + " 's'" + " list of repo's, and the description along with them can be seen below"); {
        var counter = 0;
        descriptionArray.forEach(function(descriptionArray) {
          repoNames.forEach(function(repoNames) {
            $('.repoName').append("<li>" + repoNames + "</li>");
            $('.repoName').append("<ol>"  + descriptionArray + "</ol>");
            counter++;
          });
        });
      }
    });
  });
});

},{"./../.env":1,"./../js/github.js":3}],3:[function(require,module,exports){
function User(name, bio) {
  this.name = name;
  this.bio = name;
}

User.prototype.github = function(methodparmarer) {
};

exports.userModule = User;

},{}]},{},[2]);
