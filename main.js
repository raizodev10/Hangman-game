// function greating (name) {
    
//     // let newname = name + 
//     let suffel = Math.floor(Math.random()*100);
//     let suffelname = suffel + " " + name;
    
//     console.log(`Hello ${suffelname}, Wellcome to this programe`)
    



// };



// greating("Dimonhead");




// Hangman game;


const game = {
    cur: " ",
    solution: " ",
    puzz: [],
    total: 0
};


const score  = document.querySelector(".score");

const puzzle = document.querySelector(".puzzle");

const letters = document.querySelector(".letters");

const btn = document.querySelector("button");

btn.addEventListener("click", startGame);

function startGame () {
    if (mywords.length>0) {
        btn.style.display = "none";
        game.puzz = [];
        game.total = 0;
        game.cur = mywords.shift();
        game.solution = game.cur.split("");
        builder();

    } else {
        score.textContent = "no more words";
    }
};


function createElements(elType, ParentEle, output, cla) {
    const temp = document.createElement(elType);
    temp.classList.add("boxE");
    ParentEle.append(temp);
    temp.textContent = output;
    return temp;
}

function updatescore() {
    score.textContent = `Total Letters Left:${game.total}`;
    if (game.total <=0) {
        console.log("game over");
        score.textContent = "game over";
        btn.style.display = "block";
        
    }
};


function builder() {
    letters.innerHTML = "";
    puzzle.innerHTML = "";
    game.solution.forEach((lett) =>{
        let div = createElements("div", puzzle, "_", "boxE");
    });

    if (lett == "") {
        div.style.borderColor = "white";
        div.textContent = ""; 
    } else { game.totaltt;}
    game.puzz.push(div);
    updatescore();
    
    for (let i = 0; i<26; i++) {
        let temp = String.fromCharCode(65 + i);
    let div = createElements("div"); letters, temp, "box"};

let checker = function (e) {
    div.style.backgroundColor = "#ddd";
    div.classList.remove("box");
    div.classList.add("boxD");
    div.removeEventListener("click", checker);
    checkLetter(temp);
}

div.addEventListener("click", checker);


};

function checkLetter(letter) {
    console.log(letter);
    game.solution.forEach((ele, index) => {
        if (ele.toupperCase()== letter) {
            game.puzz[index].textContent = letter;
            game.total--;
            updatescore();
        };

    }
)


}
