var User = require('./../js/github.js').userModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
    // var newUser = new User("string")
  $('#usernameForm').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    console.log(username);

      $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey ).then(function(response){
        console.log(JSON.stringify(response));
        $('#name').text("Name: " + (response.name));
        $('#bio').text("Bio: " + (response.bio));
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    });
  });
