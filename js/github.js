var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getInfo = function(login) {
  userNow = this;
  $.get('https://api.github.com/users/' + login + '?access_token=' + apiKey).then(function(object){
    userNow.userInfo = object;
    displayInfoToHtml(object);
    userNow.getRepoList();
  })
  .fail(function(error){
    console.log(error.responseJSON.message);
  });
};

User.prototype.getRepoList = function() {
  userNow = this;
  $.get('https://api.github.com/users/' + userNow.userInfo.login + '/repos' + '?access_token=' + apiKey).then(function(response) {
      userNow.repoList = response;
      displayRepoListToHtml(response);
    });
  };
exports.userModule = User;
