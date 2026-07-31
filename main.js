// // // function greating (name) {
    
// // //     // let newname = name + 
// // //     let suffel = Math.floor(Math.random()*100);
// // //     let suffelname = suffel + " " + name;
    
// // //     console.log(`Hello ${suffelname}, Wellcome to this programe`)
    



// // // };



// // // greating("Dimonhead");




// // // Hangman game;


// // // const game = {
// // //     cur: " ",
// // //     solution: " ",
// // //     puzz: [],
// // //     total: 0
// // // };


// // // const score  = document.querySelector(".score");

// // // const puzzle = document.querySelector(".puzzle");

// // // const letters = document.querySelector(".letters");

// // // const btn = document.querySelector("button");

// // // btn.addEventListener("click", startGame);

// // // function startGame () {
// // //     if (mywords.length>0) {
// // //         btn.style.display = "none";
// // //         game.puzz = [];
// // //         game.total = 0;
// // //         game.cur = mywords.shift();
// // //         game.solution = game.cur.split("");
// // //         builder();

// // //     } else {
// // //         score.textContent = "no more words";
// // //     }
// // // };


// // // function createElements(elType, ParentEle, output, cla) {
// // //     const temp = document.createElement(elType);
// // //     temp.classList.add("boxE");
// // //     ParentEle.append(temp);
// // //     temp.textContent = output;
// // //     return temp;
// // // }

// // // function updatescore() {
// // //     score.textContent = `Total Letters Left:${game.total}`;
// // //     if (game.total <=0) {
// // //         console.log("game over");
// // //         score.textContent = "game over";
// // //         btn.style.display = "block";
        
// // //     }
// // // };


// // // function builder() {
// // //     letters.innerHTML = "";
// // //     puzzle.innerHTML = "";
// // //     game.solution.forEach((lett) =>{
// // //         let div = createElements("div", puzzle, "_", "boxE");
// // //     });

// // //     if (lett == "") {
// // //         div.style.borderColor = "white";
// // //         div.textContent = ""; 
// // //     } else { game.totaltt;}
// // //     game.puzz.push(div);
// // //     updatescore();
    
// // //     for (let i = 0; i<26; i++) {
// // //         let temp = String.fromCharCode(65 + i);
// // //     let div = createElements("div"); letters, temp, "box"};

// // // let checker = function (e) {
// // //     div.style.backgroundColor = "#ddd";
// // //     div.classList.remove("box");
// // //     div.classList.add("boxD");
// // //     div.removeEventListener("click", checker);
// // //     checkLetter(temp);
// // // }

// // // div.addEventListener("click", checker);


// // // };

// // // function checkLetter(letter) {
// // //     console.log(letter);
// // //     game.solution.forEach((ele, index) => {
// // //         if (ele.toupperCase()== letter) {
// // //             game.puzz[index].textContent = letter;
// // //             game.total--;
// // //             updatescore();
// // //         };

// // //     }
// // // )


// // // }




// // // //Without Recursion;

// // // // const fibonacci = (num, array=[0,1]) => {
// // // //     while (num>2){
// // // //         const [hextToLast, last] = array.slice(-2);
// // // //         array.push(hextToLast + last);
// // // //         num -= 1;
// // // //     }
// // // //     return array;
// // // // }

// // // // console.log(fibonacci(50));


// // // // const fib = (num, array=[0,1]) => {
// // // //         if (num<=2) return array;
// // // //         const [nextTolast, last] = array.slice(-2);

// // // //         return fib (num - 1, [...array, nextTolast + last]);
// // // // }


// // // // console.log(fib(12));


// // // // function skri (n) {
// // // //         if (n<2) {
// // // //             return n;
// // // //         }

// // // //         return skri(n - 1) + skri(n -2);

// // // // };


// // // // console.log(skri(7));

// // // 'use strict'


// // // let b = 10;

// // // console.log(b);



// // // document.querySelector("html").style.backgroundColor = "#94d381";

// // // let nav = document.createElement("nav").style.backgroundColor = "#000000"
// // // nav.style.height = "20px"
// // // // nav.style.


// // // document.appendChild(nav);
// // // // const button = document.createElement("#button");

// // // // button.addEventListener("mouseover", (e)=>{
// // // //                 let fun = function(){
// // // //                         const obj1 = {
// // // //                             light: this.fun(20),
// // // //                             yaggami: 90,
// // // //                             coloni(){
// // // //                                 console.log(this.yaggami);
// // // //                             }
// // // //                         }
// // // //                 }
// // // // });



// // // // document.appendChild(button);


// // const react = {
// //     createElememt(e){
// //         document.createElement(e);

// //     }
// // };

// // const reactDom = {
    
// // }

// // react.createElememt(h1);



// let animal = ['sloth', 'owl', 'crocodile', 'gekos'];

// const button = document.createElement("button");

// button.innerText = "prompt";
// button.style.backgroundColor = "crimson";
// let main = document.getElementsByTagName("main");

// const animalcheck = function (animalname) {
    
    
//     let check = animal.includes(animalname);
//     if(check == true) {
//         console.log("Enter named animal is asscesibel in the data base!");
//         texth1 = getvalue;
//         return "sussses"
//     }

//     else{

//         texth1 = getvalue;
//         console.log("cudeent found animal in the data base");
        
//         return "enter valid name!"
//     }

    
// }

// button.addEventListener("click", _ => { let getvalue = globalThis.prompt()});







// const texth1 = document.getElementById("h1");

// // text.innerHTML(getvalue)


// document.main.append(button);
// text.addEventListener("click", ()=>{
//         text.innertext = getvalue;
// })



// //form validator

// const myForm  = document.querySelector("form");
// const inputs = document.querySelector("input");
// const errors = document.querySelector(".error");
// const required = undefined;

let requerd = "diso";

for(requerd in requerd ) {
    let melyiply = requerd *19;
    console.log(melyiply);
    
}



let PHYSICS_MATH_BOOK = [
    "Blitzer-INTERMEDIATE ALGEBRA",
    "college algebra blitzer 2nd eddition", 
    " A Graphical Approach to ALGEBRA & TRIGONOMETRY 6th edition", 
    "Calculus by James Stewart 5e", 
    "" 
];


console.log(PHYSICS_MATH_BOOK.slice(2));
