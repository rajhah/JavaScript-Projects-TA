var count = 0; // assigning a variable for use in the increment function

function assign(color) {    // defining the assign function
    var p = document.getElementById("paragraph");   // getting the paragraph element that we are going to change
    p.style.color = color;  // set the paragraph to whatever color was passed in
};

function increment(n) { //defining the increment function
    var p = document.getElementById("number");  // getting the paragraph where we will display the number
    count += n; // increment the number by whatever is passed in to the function
    p.innerHTML = "Number: " + count;   // edit the html to display the new number
};