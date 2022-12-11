document.write((typeof "werd") + "<br>");   //using typeof

document.write("werd" + " coercion " + 2022 + "<br>");  //using type coercion
document.write(0 / 0 + " " + isNaN(6) + " " + isNaN("oh") + "<br>");    //displaying NaN and using isNaN to display true and false
document.write(2e310 + " " + -3e333 + "<br>");  //infinities
document.write((10 > 6) + " " + (10 < 6) + "<br>"); //comparisons showing true and false

console.log(10 + 7);    //logging comparisons to console
console.log(10 == 7);

document.write((10 == 7) + " " + (7 == 7) + "<br>");    //using == operator

document.write(("one" === "one") + " " + ("one" === 7) + " " + ("1" === 1) + " " + (1 === 7) + "<br>"); //using === operator

document.write(((10 > 7) && (7 > 1)) + " " + ((10 < 7) && (7 > 1)) + "<br>");   //using boolean operators
document.write(((10 < 7) || (7 > 1)) + " " + ((10 < 7) || (7 < 1)) + "<br>");
document.write((!false) + " " + (!true) + "<br>");