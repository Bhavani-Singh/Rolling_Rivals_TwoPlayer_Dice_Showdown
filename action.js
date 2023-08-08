const heading = document.querySelector("h1");
const player1Dice = document.querySelector(".img1");
const player2Dice = document.querySelector(".img2");

// adding event listener to h1 tag so that when the use clicks the page reloads
heading.addEventListener('click', function() {
    location.reload();
})

// calculating the random variable
const randomVariable1 = Math.floor(Math.random() * 6) + 1;
const randomVariable2 = Math.floor(Math.random() * 6) + 1;

// changing the dice number based on the random number generated(1-6)
player1Dice.setAttribute("src", `images/dice${randomVariable1}.png`);
player2Dice.setAttribute("src", `images/dice${randomVariable2}.png`);

// to display the result 
if(randomVariable1 === randomVariable2) {
    heading.textContent = "Draw!"
}
else if(randomVariable1 > randomVariable2) {
    heading.textContent = "🚩Player 1 Won!!!"
}
else {
    heading.textContent = "Player 2 Won🚩!!!"
}

// for reseting the heading contents
setTimeout(function() {
    heading.textContent = "Give Me a High-Five for a Fresh Roll of Destiny!";
}, 2000);

//console.log(randomVariable1);
