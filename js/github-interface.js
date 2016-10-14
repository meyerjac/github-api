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
