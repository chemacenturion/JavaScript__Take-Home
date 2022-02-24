const playBtn = document.querySelector("#generate");
const refreshBtn = document.querySelector("#okay");
const successMessageRef = document.querySelector("#successMessage");
const resultModal = document.querySelector("#result");
const okBtn = document.querySelector("#okay");
const closeBtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");


let message = "";
let randResult = 0;

resultModal.style.display="none"
overlay.style.display="none"

// create function called generateNumbers
function generateNumbers() {
    let randNum = document.getElementById("randNum");
    // Number between 1 and 100,000
    // The animation of having the numbers spin was very hard to solve and my intitial inclination was setInterval, but I found this link eventually
    // https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop

    var i = 1;                     //  set your counter to 1

    function myLoop() {            //  create a loop function
        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
            // console.log(" hello" + i);
            randResult= (Math.floor(Math.random() * 100000) + 1)%100000;//[1-99999]
            randNum.innerHTML=randResult;   //  your code here
            i++;                             //  increment the counter
            if (i < 10) {                    //  if the counter < 10, call the loop function
                myLoop();                        //  ..  again which will trigger another 
            } else {
                updateMessage();
            }                               //  ..  setTimeout()
        }, 100)
    }
    myLoop(); 

    function updateMessage() {
        if (randResult > 1000) {
            message="You've lost!";
            //alert("You've lost!")
        } else {
            message="You've won!";
        }
        successMessageRef.innerHTML=message; 
        resultModal.style.display="block";
        overlay.style.display="block";
    }
      
}

playBtn.addEventListener("click", () => {
    playBtn.style.backgroundColor='aqua';
    playBtn.style.border='2px solid skyblue'; 
});

okBtn.addEventListener("click",() => {
    resultModal.style.display="none";
    overlay.style.display="none";
})

closeBtn.addEventListener("click",() => {
    resultModal.style.display="none";
    overlay.style.display="none";
})

// Add event listener to generate lottery numbers
playBtn.addEventListener("click", (generateNumbers));

// Add event listener for modal buttons
refreshBtn.addEventListener("click", () => refreshBtn.style.border='2px rgb(83, 83, 83) solid');
