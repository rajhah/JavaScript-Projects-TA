// The Calculator object will hold all the info we need for later
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

// Handles whenever a number is clicked
function Input_Digit(digit) {
    // Destructuring assignment, allows us to use the values that are in Calculator object locally
    // but we can still modify the Calculator object without messing with these local variables
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // If we are waiting for the start of the 2nd number, we want to clear the current screen and replace it
    // with the start of a new number.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // If we are not waiting for the 2nd number, just add the digit to the end of the current value
        // Unless the value is 0, then replace it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// This is to handle the .
function Input_Decimal(dot) {
    // Not sure this is correct. I want to be able to start a second operand with a decimal sometimes, I think
    if (Calculator.Wait_Second_Operand === true) return;
    // If there is NOT already a decimal in the Display_Value, we can add one
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// Handles operator buttons
function Handle_Operator(Next_Operator) {
    // Destructuring variables from our Calculator object
    const { First_Operand, Display_Value, operator } = Calculator;
    // This will give us a float of whatever is on the calculator screen
    const Value_of_Input = parseFloat(Display_Value);

    // If we pushed an operator button already, but haven't entered a new number...
    if (operator && Calculator.Wait_Second_Operand) {
        // ...replace the old operator with whatever the new one is
        Calculator.operator = Next_Operator;
        return;
    }

    // If we do not already have an initial number when we push an operator button...
    if (First_Operand == null) {
        // ...save the current calculator screen value to the first operand
        Calculator.First_Operand = Value_of_Input;

    // If there was already an operator button pushed previously, pushing a second one
    // should do the original calculation and update the current calculator screen
    } else if (operator) {
        // Store the first value (or 0 if there is not one)
        const Value_Now = First_Operand || 0;
        // Send the first value and the current value to get calculated
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        // Format the answer to fit on the screen
        result = Number(result).toFixed(9);
        // Remove trailing 0s
        //result = (result * 1).toString();
        result = (result).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    // We have pushed a button, so the next digit will clear the screen
    Calculator.Wait_Second_Operand = true;
    // Save whatever button we pushed in the Calculator object
    Calculator.operator = Next_Operator;
}

// This is actually a dictionary of functions (wild!)
// Access the desired function according to which operator we passed in earlier
// Do math on the two values that we passed as parameters
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

// When the AC button is pressed, clear everything
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// Updates the calculator screen with whatever is in Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

// Here is the meat of the code
Update_Display();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})