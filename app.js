//A0DEC7  9edcad  aee0ae  cde9c8   dbf0db
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newBtn = document.querySelector('.new-btn');
let msgContainer = document.querySelector('.msg-container');
let msgpara = document.querySelector("#msg");

let turnO = true;   //player X or player O

let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        if(turnO){ //palyeO
            box.style.color = "red";
            box.innerText = "O";
            turnO = false;
        }else{ // playerX
            box.style.color = "#243b18 ";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner)=> {
    msgpara.innerText = `Winner is ${winner}`;
    for(box of boxes){
        box.disabled = true;
    }
    msgContainer.classList.remove('hide');
}

const showDraw = () => {
    msgpara.innerText = `OOps ! Match is Draw`;
    for(box of boxes){
        box.disabled = true;
    }
    msgContainer.classList.remove('hide');
}


const resetGame = () => {
    let turnO = true; 
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
     msgContainer.classList.add('hide');
}


const checkWinner = () => {
    for (pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
                return;
            }    
        }
    }
   let isDraw = [...boxes].every((box) => (box.innerText !=""));
    if(isDraw){
        showDraw();
    }
};

newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);

