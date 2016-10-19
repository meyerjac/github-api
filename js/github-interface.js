var User = require('./../js/github.js').userModule;

$(document).ready(function() {
  $('#usernameInput').submit(function(event){
    var newUser = new User();
    event.preventDefault();
    var username = $('#username').val();
    newUser.getInfo(username);
    $('.info').show();

    displayInfoToHtml = function(object) {
      $('.avatar').text(userNow.userInfo.avatar_url);
      $('.bio').text(userNow.userInfo.bio);
      $('.created').text(userNow.userInfo.created_at);
      $('.login').text(userNow.userInfo.login);
      $('.name').text(userNow.userInfo.name);
      $('.repoNumber').text(userNow.userInfo.public_repos);
    };

    displayRepoListToHtml = function(response) {
        $('.repo').text("");
      for(var i = 0; i< userNow.repoList.length; i++) {
        $('.repo').append("<li>" + "your rep name: " + userNow.repoList[i].name + "</li>");
        $('.repo').append("<li>" + "description of your repo: " + userNow.repoList[i].description + "</li>" + "<br>");
    }
};
  });
});
