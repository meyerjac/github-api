var User = require('./../js/github.js').userModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  // var newUser = new User("string")
  $('#usernameForm').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();

    // getting the name and bio from the username that was inputted

    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      console.log(response);
      $('#name').text("Name: " + (response.name));
      $('#bio').text("Bio: " + (response.bio));
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });

    // getting the time each one was created at, and repos
    var repoNames = [];
    var timeCreated = [];
    $.get('https://api.github.com/users/' + username + '/repos' + '?access_token=' + apiKey).then(function(response) {
      console.log(response);

      for(var i = 0; i< response.length; i++) {
        repoNames.push(response[i].name);
        timeCreated.push(response[i].created_at);
      }


      $('.repoName').text(username + " 's'" + " list of repo's, and when they were created can be seen below"); {
        var counter = 0;

        repoNames.forEach(function(repoNames) {
          console.log(repoNames);
          console.log(timeCreated);
          $('.repoName').append("<li>" + repoNames + "</li>");
          counter++;
        });
      }
    });



  });
});
