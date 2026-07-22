
// // let selectionn = document.getElementsByClassName("highlight-span");


// // document.addEventListener('mouseup', () => {
// //     document = window.getSelection();
// //     if (!document.isCollapsed) {
// //         let range = document.getRangeAt(0);
// //         let span = document.createElement('span');
// //         span.className = 'highlight-span';

// //         selectionn.style.BackgroundColor = "#FFFF"
// //         range.surroundContents(span);
// //         document.removeAllRanges();
// //     }

// //     else {
// //         selectionn.style.BackgroundColor = 'none';
// //     }
// // });



// // // // class user {
// // // //     constructor(name) {
// // // //         this.name = name;

// // // //     }

// // // //     sayhi(){
// // // //         prompt(this.name);

// // // //     }



// // // // }



// // // // let user1 = new user("leon");

// // // // user1.sayhi();



// // // // console.log(5 & 3);



// // // document.addEventListener("keydown", (Event)=> {
// // //     console.log(Event);

// // // });





// // // let fun1 = document.getElementsByClassName("subivent");


// // // const fun2 = document.getElementsByClassName("Mupp");



// // // fun1.addEventListener("click", _ => {
// // //     fun2
// // // });



// // // console.log();




// // // // The prototypal inharetance is not located in the object class. 
// // // // We will use a method to create a prototype class in object prototype.



// // // let a = [10,9,653,5784];
// // // let sum = (a.forEach(sum));

// // // console.log(sum,a);


// // // localStorage.clear()


// // console.error("not working");




// let currentInput = '0', previousInput = '', currentOperator = '', shouldResetDisplay = false;
// const display = document.getElementById('display');

// function appendNumber(number) {
//     if (number === '.' && currentInput.includes('.')) return;
//     if (currentInput === '0' && number !== '.') currentInput = number;
//     else if (shouldResetDisplay) { currentInput = number; shouldResetDisplay = false; }
//     else currentInput += number;
//     updateDisplay();
// }
// function appendOperator(operator) {
//     if (currentOperator !== '' && !shouldResetDisplay) calculate();
//     previousInput = currentInput; currentOperator = operator; shouldResetDisplay = true;
// }
// function calculate() {
//     if (currentOperator === '' || shouldResetDisplay) return;
//     let result, prev = parseFloat(previousInput), curr = parseFloat(currentInput);
//     if (isNaN(prev) || isNaN(curr)) return;
//     if (currentOperator === '+') result = prev + curr;
//     else if (currentOperator === '-') result = prev - curr;
//     else if (currentOperator === '*') result = prev * curr;
//     else if (currentOperator === '/') result = curr === 0 ? "Error" : prev / curr;
//     currentInput = result.toString(); currentOperator = ''; shouldResetDisplay = true; updateDisplay();
// }
// function clearDisplay() { currentInput = '0'; previousInput = ''; currentOperator = ''; updateDisplay(); }
// function deleteLast() {
//     if (shouldResetDisplay) return;
//     currentInput = currentInput.slice(0, -1);
//     if (currentInput === '') currentInput = '0';
//     updateDisplay();
// }
// function updateDisplay() { display.value = currentInput; }




const min = 10000;
const max = 100000;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// let min2 = 10000;
// let max2 = 100000;

let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;

let yourquation = randomNum*randomNum2;



console.log(`Number-1:${randomNum}, Number-2: ${randomNum2} multi of two Number: ${yourquation}` ); 
// Yields a whole number between 10000 and 100000
