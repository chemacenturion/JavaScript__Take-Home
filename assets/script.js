const playBtn = document.querySelector("#generate");
const refreshBtn = document.querySelector("#okay");

// create function called generateNumbers
function generateNumbers () {
    let randNum = document.getElementById('randNum');
    // Number between 1 and 100,000
    setInterval(()=> {randNum.innerHTML = Math.floor(Math.random() * 100000) + 1}, 100);
    clearInterval(handle);
    handle = 0;
    // upon finishing modal needs to populate by switching to active
        if(randNum.innerHTML > 1000) {
        // display "Too bad! You've Lost!"
        } else {
        // display "Hooray! You've Won!"
        }

}

// Add event listener to generate lottery numbers
playBtn.addEventListener("click", () => playBtn.style.backgroundColor='aqua');
playBtn.addEventListener("click", () => playBtn.style.border='2px solid skyblue');
playBtn.addEventListener("click", generateNumbers);
refreshBtn.addEventListener("click", () => refreshBtn.style.border='2px rgb(83, 83, 83) solid');