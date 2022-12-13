// These first two functions use the ternary operator

// This checks to see if the height entered is tall enough to ride (52 centimeters)
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
};

// This checks if the age entered is old enough to vote (18)
function Vote_Function() {
    var Height, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
};

// This function uses the 'this' keyword
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
};

// This function creates new instances of the Vehicle class and assigns them values.
// Then it returns a paragraph about Erik's vehicle
function myFunction() {
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + " " +
        Erik.Vehicle_Model + " from " + Erik.Vehicle_Year;
};

// This is a nested function
function Nested_Function() {
    var p = document.getElementById("Nested_Function");
    var c = 0;
    var num = document.getElementById("Count").value;
    Count(num);
    async function Count(n) {
        if (n <= 0 || isNaN(n)) {   // Base case to escape the function
            return;
        };
        c++;
        p.innerHTML = c;
        await sleep(8);
        Count(n - 1);
    };
};

// This inserts a delay in the previous function so you can see the numbers count up on the screen
function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
};
