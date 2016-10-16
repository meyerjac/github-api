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
