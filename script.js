let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let win=document.querySelector(".winner");
let mainarea=document.querySelector("main");
let msg=document.querySelector("#msg");
let newGame=document.querySelector("#new-game");
let turnX=true;
const winningPatern =[
    [0, 1, 2],
    [0 ,3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="x";
            turnX=false;
        }else{
            box.innerText="o";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
        checkDrow();
    })
});
const showWinner=(winner)=>{
    win.classList.remove("hide");
    msg.innerText=`Congratulation, winner is ${winner}`;
    // mainarea.classList.add("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner=()=>{
    for(let patern of winningPatern)
    {
        let p1=boxes[patern[0]].innerText;
        let p2=boxes[patern[1]].innerText;
        let p3=boxes[patern[2]].innerText;
        if(p1!==""&&p2!==""&&p3!==""){
            if(p1===p2&&p2===p3){
                showWinner(p1); 
            }   
        }
    }
}
const enableBtn=()=>{
    turnX=true;
    for(box of boxes)
    {box.disabled=false;
    box.innerText="";}
    win.classList.add("hide");
}
newGame.addEventListener("click",enableBtn);
resetbtn.addEventListener("click",enableBtn);
const checkDrow = () => {
    let count = 0;
    for (let box of boxes) {
        if (box.innerText !== "") {
            count++;
        }
    }
    if (count === 9) {
        showDrow(); // Add parentheses here to call the function
    }
};

const showDrow=()=>{
    win.classList.remove("hide");
    msg.innerText=`OPPS its a drow`;
    // mainarea.classList.add("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}