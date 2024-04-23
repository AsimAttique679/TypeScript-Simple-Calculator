#!/usr/bin/env node
import inquirer from "inquirer";

let calulator = await inquirer.prompt([
    {
        name: 'number1',
        type: 'number',
        message: 'Enter First Number: ',
        validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number',
    },
    {
        name: 'number2',
        type: 'number',
        message: 'Enter Second Number: ',
        validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number',
    },
    {
        name: 'operation',
        type: 'list',
        message: 'Choose the operation:',
        choices: ['Addition', 'Subtraction', 'Multiplcation', 'Division', 'Modulus'],
    },



]);
const number1 = parseInt(calulator.number1);
const number2 = parseInt(calulator.number2);
let result;
if (calulator.operation === 'Addition') {
    result = number1 + number2;
    console.log(`Result of ${calulator.operation} is: ${result}`);
    
}

else if (calulator.operation === 'Subtraction') {
    result = number1 - number2;
console.log(`Result of ${calulator.operation} is: ${result}`);

}
else if (calulator.operation === 'Multiplcation') {
    result = number1 * number2;
console.log(`Result of ${calulator.operation} is: ${result}`);

}
else if (calulator.operation === 'Division') {
    if (number2 === 0) {
        console.log('Error: Division by zero');
    } 
    else{
    result = number1 / number2;
console.log(`Result of ${calulator.operation} is: ${result}`);
    }
}
else if (calulator.operation === 'Modulus') {
    result = number1 % number2;
    console.log(`Result of ${calulator.operation} is: ${result}`);
}else {
    console.log("Please  select a valid operator");
  }