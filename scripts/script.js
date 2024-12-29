let euros = 1000;
let days = 0;
let daysLeft = 10;
// Confidence is the ability to comeplete risky tasks
// We need 150 confidence to complete the saxophone heist 
let confidence = 50;


let inventory = [];

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const allBtn = document.getElementById('play-buttons-container');
const mainBtn = document.querySelector('.main-btn');
const stealBtn = document.querySelector('.steal-btn');
const inputBar = document.querySelector('.input');
const submitButton = document.getElementById('submit');
const textDisplay = document.querySelector('.text-display')
const statusBar = document.getElementById('status-bar')
const hideout = document.getElementById('hideout');
const quitJobSideButton = document.getElementById('quit-button');
const inventoryContainer = document.getElementById('inventory')
const inventoryText = document.getElementById('inventory-text')
const inv1 = document.querySelector('.inv1');
const inv2 = document.querySelector('.inv2');
const inv3 = document.querySelector('.inv3');
const inv4 = document.querySelector('.inv4');
const confidenceContainer = document.getElementById('confidence-container');


inventoryContainer.style.display = 'none';
submitButton.addEventListener("click", startGame);
function startGame() {
  if (
    inputBar.value == 'Yes I accept' ||
    inputBar.value == 'yes I accept' ||
    inputBar.value == 'Yes' ||
    inputBar.value == 'yes' ||
    inputBar.value == 'Yes i accept' ||
    inputBar.value == 'yes i accept') {
    acceptance();
    inputBar.value = '';
    } else if (inputBar.value == '') {
      textDisplay.innerText = 'Type something please'
      openingStatement();
      inputBar.value = '';
    } else {
      textDisplay.innerText = "That doesn't make sense.";
      openingStatement();
      inputBar.value = '';
  };
};
function openingStatement() {
   setTimeout(function () { 
        textDisplay.innerText = `Hello, Lupin. I am The Autumn Leaves, The Blue in Green, The Witchcraft... and I have been watching you. I've seen you grow from stealing wallets on the train to slithering your way into the Turdeu Jewelry House, pocketting the historic 50-carot Patience diamond just 2 weeks ago. They still have no clue they are displaying 10 grams of glass. But my message reaches you for this important matter. I need you to steal something for me, and there is no one in France that possess your skills. If you accept, reply, "Yes I accept"`
       }, 3000);
};
function acceptance() {
  textDisplay.innerText = "I knew you would say yes... Ok, this is what I need... We're looking to aquire John Coltrane's Saxophone. Click 'NEXT' for more details";
  submitButton.innerHTML = 'NEXT';
  submitButton.removeEventListener("click", startGame);
  submitButton.addEventListener("click", details);
  inputBar.value = '';
  inputBar.style.display = 'none'
};
function details() {
  textDisplay.innerText = "SO... Here are the details. John Coltrane's saxophone is sitting in the owner's office of Jo's Jazz Club. I have a buyer and I need you to get it for me before the purchase date. I don't care how you do it but don't damage anything on the saxophone. Once you have it, leave it at the footsteps of the Ministry Hall. A failure will never be forgotten. That is all. Click 'NEXT' to begin.";
  submitButton.innerHTML = 'NEXT';
  submitButton.removeEventListener("click", details);
  submitButton.addEventListener("click", hideoutHome);
}
function hideoutHome() {
  confidenceContainer.innerHTML = `Confidence: ${confidence}`
  inventoryContainer.style.display = 'block';
  inputBar.value = '';
  hideout.style.display = 'none';
  statusBar.style.display = 'flex';
  quitJobSideButton.style.display = 'inline';
  allBtn.style.display = 'flex';
  removeSecondRowButtons();
  textDisplay.style.height = '25vh';
  textDisplay.innerText = "You are in your secret hideout in Paris. Here, you can plan your next heist or go complete small tasks, like going to the store to buy supplies. Hint** you can also steal them. But don't get caught ;). Each tasks gains your confidence and tasks become easier. Add items to your inventory by buying them in the store, but you can only carry 3 things at one time. You'll need certain items to perform specific tasks, so think before you buy. There are three ways to get in: As a janitor, a band member, or a potential buyer. Think critically and good luck!";
  btn1.innerHTML = 'Go to store';
  btn2.innerHTML = 'Go to center';
  btn3.innerHTML = 'Go to club';
    btn3.style.fontSize = '.8rem'
  btn4.innerHTML = 'Quit Job';
    btn4.style.fontSize = '.8rem'
  submitButton.style.display = 'none';
  btn1.onclick = goToStore;
  btn2.onclick = goToCenter;
  btn3.onclick = goToClub;
  btn4.onclick = quitJob;
  quitJobSideButton.onclick = quitJob;
}

function gameOver() {
  textDisplay.innerText = "GAME OVER";
  inputBar.style.display = 'none';
  submitButton.style.display = 'none';
  document.querySelector('.inventory').style.display = 'none';
};
function quitJob() {
  inputBar.style.display = 'none';
  submitButton.onclick = gameOver;
  submitButton.innerHTML = 'QUIT'
  hideout.style.display = 'none';
  quitJobSideButton.style.display = 'none';
  statusBar.style.display = 'none';
  allBtn.style.display = 'none';
  textDisplay.innerText = 'I hope you understand that quitting means trying your luck with DEATH. Surely you can run, but we WILL find you.'
};
function displayInventory() {
  let inventoryHTML = '';
  inventory.forEach((item) => {
    inventoryHTML = `
    <p class="inv-text">${item}</p>
     `
  });
  inventoryText.innerHTML += inventoryHTML;
};
function updateStatus() {
  confidenceContainer.innerHTML = `Confidence: ${confidence}`
  statusBar.innerHTML = `
      <p class="euros">Euros: ${euros}</p>
      <p class="days">Days: ${days}</p>
      <p class="days-left">Days left: ${daysLeft}</p> `
};
function renderTopRowButtons() {
  btn1.style.display = 'inline';
  btn2.style.display = 'inline';
  btn3.style.display = 'inline';
  btn4.style.display = 'inline';
};
function removeTopRowButtons() {
  btn1.style.display = 'none';
  btn2.style.display = 'none';
  btn3.style.display = 'none';
  btn4.style.display = 'none';
};
function renderSecondRowButtons() {
  btn5.style.display = 'inline';
  btn6.style.display = 'inline';
  btn7.style.display = 'inline';
  btn8.style.display = 'inline';
};
function removeSecondRowButtons() {
  btn5.style.display = 'none';
  btn6.style.display = 'none';
  btn7.style.display = 'none';
  btn8.style.display = 'none';
};
function halfDayWork() {
  days += .5;
  daysLeft -= .5;
  updateStatus();
};
function fullDayWork() {
  days += 1;
  daysLeft -= 1;
  updateStatus();
};
