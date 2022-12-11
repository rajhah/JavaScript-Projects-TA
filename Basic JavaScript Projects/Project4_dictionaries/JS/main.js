function dict() {
    var d = {           //defining dictionary d
        base: "circle",
        stem: "true",
        capital: "false"
    };

    delete d.stem;      //remove stem value from dictionary

    document.getElementById("Dictionary").innerHTML = d.stem;   //attempt to display stem value
};
