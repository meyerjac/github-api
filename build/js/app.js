(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b007f56453a660eb2f3a1e744d61ff52e0c2fb7a";

},{}],2:[function(require,module,exports){
var User = require('./../js/github.js').userModule;

$(document).ready(function() {
  var newUser = new User();
  $('#usernameInput').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    newUser.getInfo(username);
    $('.info').show();

    User.prototype.displayInfoToHtml = function() {
      $('.avatar').text(userNow.userInfo.avatar_url);
      $('.bio').text(userNow.userInfo.bio);
      $('.created').text(userNow.userInfo.created_at);
      $('.login').text(userNow.userInfo.login);
      $('.name').text(userNow.userInfo.name);
      $('.repoNumber').text(userNow.userInfo.public_repos);
    };

    User.prototype.displayRepoListToHtml = function() {
      console.log("hello");
      // for(var i = 0; i< response.length; i++) {
      //   repoNames.push(response[i].name);
      //   descriptionArray.push(response[i].description);
      // }

    };
  });
});

},{"./../js/github.js":3}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function User() {
  this.fullName = "";
  this.repoList = [];
}

User.prototype.getInfo = function(login) {
  userNow = this;
  $.get('https://api.github.com/users/' + login + '?access_token=' + apiKey).then(function(object){
    userNow.userInfo = object;
    console.log(object);
    userNow.displayInfoToHtml();
    userNow.getRepoList();
  })
  // .fail(function(error){
  //   console.log(error.responseJSON.message);
  // });
};

User.prototype.getRepoList = function() {
  userNow = this;
  $.get('https://api.github.com/users/' + userNow.userInfo.login + '/repos' + '?access_token=' + apiKey).then(function(response) {
      console.log(response);
      userNow.repoList = response;
      userNow.displayRepoListToHtml();
    });
  };
exports.userModule = User;

},{"./../.env":1}]},{},[2]);
