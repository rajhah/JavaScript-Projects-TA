var g = "global variable"; // Initializing a global variable

function varSet() {
    var l = "local variable";   //Initializing a local variable
    console.log(l + " " + g);   //Using the global and local variables together

}

function varBreak() {
    console.log(l + " " + g);   //Trying to use the local variable l outside of its scope
}

//  This function gets the time of day and sets a greeting accordingly using if/else if/else
function getHours() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12) {
        document.getElementById("greet").innerHTML = Reply + "GOOD MORNING!";
        Reply = "It is still morning. ";
    } else if (Time >= 12 == Time < 18) {
        document.getElementById("greet").innerHTML = Reply +"GOOD AFTERNOON!";
        Reply = "It is afternoon. ";
    } else {
        Reply = "It is evening. ";
        document.getElementById("greet").innerHTML = Reply +"GOOD EVENING!";
    }
};


//  This function uses if/else to determine if the user is old enough to vote
function Vote_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough";
    } else {
        Vote = "You are not old enough";
    }
    document.getElementById("Vote").innerHTML = Vote + " to vote.";
}