//function using a while loop to print a certain number of exclamation marks
function Call_Loop() {
    let p = document.getElementById("Loop");
    let n = document.getElementById("Length").value;

    //number validation on input field
    if (isNaN(n)) { return; }
    n = Math.trunc(n);
    if (n <= 0) { return; }

    //clear the element first
    p.innerHTML = "";
    //prints certain # of characters
    let i = 0;
    while (i < n) {
        p.innerHTML = p.innerHTML + "!";
        i++;
    }
}

//finds and prints the length of the paragraph "Loop"
function Length() {
    document.getElementById("stringLength").innerHTML =
        document.getElementById("Loop").innerHTML.length;
}

//Loops through each character in a string and prints a new line for each one
function For_Loop() {
    let p = document.getElementById("characters");
    let len = document.getElementById("Loop").innerHTML.length;
    p.innerHTML = ""    //clear the element first
    //for loop adding a line and a number for each character in the string
    for (i = 0; i < len; i++) {
        p.innerHTML = p.innerHTML + "<br />" + (i + 1);
    }
}

//Array function
function Array_f() {
    const a = [];
    let p = document.getElementById("Array");
    let len = document.getElementById("Loop").innerHTML.length;

    for (i = 0; i < len; i++) {
        a[i] = ((i + 1) * (i+1));
    }
    p.innerHTML = a;
}

//a function using constants
function Constant_Function() {
    const socks = {
        "Sock1": 1,
        "Sock2": 2,
        "Sock3": 3,
        "Sock4": 4
    };

    let p = document.getElementById("const_p");

    p.innerHTML = socks.Sock1 + " " +
        socks.Sock2 + " " +
        socks.Sock3 + " " +
        socks.Sock4 + "<br>";
    
    socks.Sock1 = ("Sokke");

    socks.Sock5 = ("NewSock");

    p.innerHTML = p.innerHTML +
        socks.Sock1 + " " +
        socks.Sock2 + " " +
        socks.Sock3 + " " +
        socks.Sock4 + " " +
        socks.Sock5 + " ";
}

//object using let keyword
function makeObject() {
    let drink = {
        color: "red",
        temperature: "cold",
        full: "full",
        empty: function () { this.full = "empty"; },
        fill: function () { this.full = "full"; },
        description: function () {
            return ("The drink is really really " + this.temperature +
                " and quite " + this.full + ".");
        }
    }
    document.getElementById("object").innerHTML = drink.description();
}