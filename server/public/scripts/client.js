console.log('JS sourced');

// first param links to <html ng-app="myApp">
// [] is the dependency injection array, what services do we need?
var myApp = angular.module('myApp', []);

myApp.controller('MessageController', function() {
    // Code that runs when our controller is initialized
    // Can think of this as our document.ready -- this means controller is ready
    // putting a variable on our controller for ease of understanding and reading the code
    // then anything we connect to welcome can be accessed in the html with dot notation
    var messages = this;
    messages.test = "Make sure this works";
    console.log(this);
    console.log('MessageController');
    messages.messagesArray = [];
    messages.addPost = function(name, post) {
      var newPost = {name: name, post: post, visible: true};
      console.log('New Post, ', messages.messagesArray);
      messages.messagesArray.push(newPost);
    };

    messages.deletePost = function(index) {
      messages.messagesArray.splice(index, 1)
    }
});



//
// // attached to welcome so that we can ng-repeat over content
//     welcome.people = [];
//     welcome.addPerson = function(firstName) {
//       var person = {firstName: firstName, visible: true};
//       welcome.people.push(person);
//       console.log(welcome.people);
//     };
// // delete button
//     welcome.deletePerson = function(index) {
//       welcome.people.splice(index, 1);
//       console.log(index);
//     };
//
//     welcome.toggle = function(person) {
//       console.log(person);
//       person.visible = !person.visible;
//       console.log(person.visible);
//     };
// });
