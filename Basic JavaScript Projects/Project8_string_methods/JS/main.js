// Initializing a bunch of variables to use later
var s1 = "Oi! ";
var s2 = "We appear to have ";
var s3 = "concatenated ";
var s4 = "HORSE ";
var s5 = "some bad data!";
var n = 1000.025636689;

// Concatenates all our strings from above
function concatFunction() {
    document.getElementById("concat").innerHTML = s1.concat(s2, s3, s4, s5);
}

// Slices the first 5 characters off of the 's5' string
function sliceFunction() {
    var slicedData = s5.slice(5);
    document.getElementById("slice").innerHTML = slicedData;
}

// Changes paragraph p to upper case
function toUpperFunction() {
    var p = document.getElementById("upper");
    p.innerHTML = p.innerHTML.toUpperCase();
}

// Returns the index of the character "z" in the paragraph string
function searchFunction() {
    var p = document.getElementById("search"); 
    p.innerHTML = p.innerHTML + p.innerHTML.search("z");
}

// Converts number to string, though they look the same when displayed
function numberToString() {
    document.getElementById("numberToString").innerHTML = n.toString();
}

// Numbers to certain precision and to fixed decimal places
function numberToPrecision() {
    document.getElementById("numberToPrecision").innerHTML = n.toPrecision(2);
}
function numberToFixed() {
    document.getElementById("numberToPrecision").innerHTML = n.toFixed(4);
}

// Since 'n' is already a primitive, calling valueOf() manually doesn't really do anything
function numberValueOf() {
    document.getElementById("valueOf").innerHTML = n.valueOf();
}