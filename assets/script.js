const playBtn = document.querySelector("#generate");

// create function called generateNumbers
function generateNumbers () {
    let randNum = document.getElementById('randNum');
    let result = document.getElementById('result')
    // Number between 1 and 100,000
    randNum.innerHTML = Math.floor(Math.random() * 100000) + 1;
        if(randNum.innerHTML > 1000) {
            alert("This site says, 'Too bad! You've Lost!'")
        } else {
            alert("This site says, 'Congratulations! You've Won!'")
        }

}

// Add event listener to generate lottery numbers
playBtn.addEventListener("click", () => playBtn.style.backgroundColor='aqua');
playBtn.addEventListener("click", generateNumbers);