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
