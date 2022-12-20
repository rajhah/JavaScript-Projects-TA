let activePlayer = 'X';

let selectedSquares = [];

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X' then x.png is placed in HTML
            select.style.backgroundImage = 'url(./images/x.png)';
        } else {
            select.style.backgroundImage = 'url(./images/o.png';
        }
        selectedSquares.push(squareNumber + activePlayer);

        checkWinConditions();

        return true;
    }
}

// I moved this function outside the previous one to prevent the computer from taking a 'phantom turn' after the game had ended
function computersTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        //random number between 0 and not quite 9, rounded down
        pickASquare = String(Math.floor(Math.random() * 9));

        //only returns true if it goes through the code, meaning it hasn't been selected yet
        //otherwise returns undefined, if square already has been picked
        if (placeXOrO(pickASquare)) {
            //if square is available, do the operation
            placeXOrO(pickASquare);
            //escape loop
            success = true;
        }
    }
}

function checkWinConditions() {
    //X win conditions
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //O win conditions
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //Tie conditions
    else if (selectedSquares.length >= 9) {
        audio("./media/tie.mp3");
        setTimeout(function () { resetGame(); }, 4000);
    } else {
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        audio("./media/place.mp3");

        if (activePlayer === 'O') {
            disableClick(1000);
            setTimeout(function () { computersTurn(); }, 1000);
        }
    }


    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true) { return true; }
    }
}

function disableClick(time) {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, time);
}

function audio(audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play()
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');

    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2, x = x1, y = y1;

    //when the game is won, do this stuff
    disableClick(4000);
    audio("./media/winGame.mp3");
    animateLineDrawing();


    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,255,33,.8';
        c.stroke();

        //check if reached endpoints
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }

        function clear() {
            const animationLoop = requestAnimationFrame(clear);
            c.clearRect(0, 0, 608, 608);
            cancelAnimationFrame(animationLoop);
        }

        //wait 1 sec, clear canvas and reset game
        setTimeout(function () { clear(); resetGame(); }, 4000);
    }
}

function resetGame() {
    //clear all squares images
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage=''
    }

    //empty the array
    selectedSquares = [];

    activePlayer = 'X';
}