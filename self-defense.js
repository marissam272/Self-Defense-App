var config = {
    apiKey: "AIzaSyCgaX4qhJhjE4wxFW0xGrb3K9zgdasd5wI",
    authDomain: "project1-575d7.firebaseapp.com",
    databaseURL: "https://project1-575d7.firebaseio.com",
    projectId: "project1-575d7",
    storageBucket: "",
    messagingSenderId: "1048705115345"
};
firebase.initializeApp(config);
// Create a variable to reference the database.
var database = firebase.database();

var firstName = "";
var lastName = "";
var email = "";
$(document).ready(function () {

    // Capture Button Click
    $("#formsubmit").on("click", function (event) {
        event.preventDefault();

        // Grabbed values from text boxes
        firstName = $("#firstName-input").val();
        lastName = $("#lastName-input").val();
        email = $("#email-input").val();

        if ($.trim($("#firstName-input").val()) === "" || $.trim($("#lastName-input").val()) === "" || $.trim($("#email-input").val()) === "") {
            alert('You did not fill out one or more of the fields');
            return false;
        }
        var form = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };
        database.ref().push(form);

        $("#firstName-input").val('');
        $("#lastName-input").val('');
        $("#email-input").val('');

    });
});

//for maps
/******************************* */
//for the maps



/******************************* */
$("#Taekwondo").on("click",function(event){
    console.log("hi");
    location.href = "page1.html";
});
$("#Judo").on("click",function(event){
    console.log("hi");
    location.href = "page2.html";
});
$("#Karate").on("click",function(event){
    console.log("hi");
    location.href = "page3.html";
});
$("#KravMaga").on("click",function(event){
    console.log("hi");
    location.href = "page4.html";
});
$("#MuayThai").on("click",function(event){
    console.log("hi");
    location.href = "page5.html";
});
$("#Brazilian-Jiu-Jitsu").on("click",function(event){
    console.log("hi");
    location.href = "page6.html";
});
