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

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;

$(document).ready(function() {

    // Capture Button Click
    $("#submit").on("click", function(event) {
        event.preventDefault();
    
        // Grabbed values from text boxes
        trainName = $("#trainName-input").val();
        destination = $("#destination-input").val();
        frequency = $("#frequency-input").val();
        firstTrain = $("#firstTrain-input").val();
    
        // Code for handling the push
        // database.ref().push({
            var train = {
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            firstTrain: firstTrain
    };
            // dateAdded: firebase.database.ServerValue.TIMESTAMP
        // });
    
        database.ref().push(train);
    
    // });
    
    
        database.ref().on("child_added", function(childSnapshot) {
    
            // Log everything that's coming out of snapshot
            console.log(childSnapshot.val().trainName);
            console.log(childSnapshot.val().destination);
            console.log(childSnapshot.val().frequency);
            console.log(childSnapshot.val().firstTrain);

            // Create Firebase event for adding a train to the database and a row in the html when a user adds an entry
var fireBaseTrain = database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());
    
    // Store everything into a variable.
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;

)};
)};
