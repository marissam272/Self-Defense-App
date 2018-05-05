var config = {      
    apiKey: "AIzaSyDguuJkMZ-K2Zja64hO2VeVkXJDhEv1V7E",
    authDomain: "self-defense-app.firebaseapp.com",
    databaseURL: "https://self-defense-app.firebaseio.com",
    projectId: "self-defense-app",
    storageBucket: "self-defense-app.appspot.com",
    messagingSenderId: "50856098578"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// var firstName = "";
// var lastName = "";
// var email = "";

$(document).ready(function() {

    // Capture Button Click
    $("#submit").on("click", function(event) {
        event.preventDefault();
    
        // Grabbed values from text boxes
        var $firstName = $("#firstName-input").val();
        var $lastName = $("#lastName-input").val();
        var $email = $("#email-input").val();
        
    
        // Code for handling the push
        // database.ref().push({
            var form = {
            firstName: $firstName,
            lastName: $lastName,
            email: $email
    };
            // dateAdded: firebase.database.ServerValue.TIMESTAMP
        // });
    
        database.ref().push(form);

        //clear all of the checkboxes
    $("#firstName-input").val("");
    $("#lastName-input").val("");
    $("#email-input").val("");

});

$("#findClass").on("click", function(event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();

    var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(("#myMap"), {});
}

loadMapScenario();

});

});

// var urlFormat = 'http://dev.virtualearth.net/REST/v1/Locations?query="';
// var apiKey = 'AtWGzSZzYAbAlhjEmb08RxN24XFyXSfue2jfGSvj1WUbFmzZW79PmyDUc7hEmkj9';

// $('#findClass').on('click', function (event) {

//     // var urlFormat = 'http://dev.virtualearth.net/REST/v1/Locations?query="';
//     // var apiKey = 'AtWGzSZzYAbAlhjEmb08RxN24XFyXSfue2jfGSvj1WUbFmzZW79PmyDUc7hEmkj9';
//     event.preventDefault();
//     console.log("hi");

//     //var searchTerm = searchField.val();
//     var queryURL = "http://dev.virtualearth.net/REST/v1/Locations?query=taekwondoevanston&jsonp=GeocodeCallback&key=AtWGzSZzYAbAlhjEmb08RxN24XFyXSfue2jfGSvj1WUbFmzZW79PmyDUc7hEmkj9";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         var results = response.resourceSets;
//         console.log(results);

//     var map;
// function loadMapScenario() {
//     map = new Microsoft.Maps.Map(("#myMap"), {});
// }

// loadMapScenario();

// });

// });
