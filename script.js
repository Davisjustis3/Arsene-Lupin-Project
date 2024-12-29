let euros = 1000;
let days = 0;
let daysLeft = 11;
// Confidence is the ability to comeplete risky tasks
// We need 150 confidence to complete the saxophone heist 
let confidence = 0;

console.log(confidence);
let inventory = [];

const eurosStatus = document.querySelector('.euros');
const daysStatus = document.querySelector('.days');
const daysLeftStatus = document.querySelector('.days-left');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const allBtn = document.querySelector('.play-buttons');
const mainBtn = document.querySelector('.main-btn');
const stealBtn = document.querySelector('.steal-btn');
const inputBar = document.querySelector('.input');
const submitButton = document.querySelector('.submit');
const textDisplay = document.querySelector('.text-display')
const statusBar = document.querySelector('.status-bar')
const hideout = document.querySelector('.hideout');
const quitJobSideButton = document.querySelector('.quit');
const inventoryContainer = document.querySelector('.inventory')
const inventoryText = document.querySelector('.inventory-text')
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
}
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
  btn5.style.display = 'none';
  btn6.style.display = 'none';
  btn7.style.display = 'none';
  btn8.style.display = 'none';
  textDisplay.innerText = "You are in your secret hideout in Paris. Here, you can plan your next heist or go complete small tasks, like going to the store to buy supplies. Hint** you can also steal them. But don't get caught ;). Each tasks gains your confidence and tasks become easier. Add items to your inventory by buying them in the store, but you can only carry 3 things at one time. You'll need certain items to perform specific tasks, so think before you buy. There are three ways to get in: As a janitor, a band member, or a potential buyer. Think critically and good luck!";
  btn1.innerHTML = 'Go to store';
  btn2.innerHTML = 'Go to center';
  btn3.innerHTML = 'Go to club';
  btn4.innerHTML = 'Quit Job';
  submitButton.style.display = 'none';
  btn1.onclick = goToStore;
  btn2.onclick = goToCenter;
  btn3.onclick = goToClub;
  btn4.onclick = quitJob;
  quitJobSideButton.onclick = quitJob;
}
function goToStore() {
  hideout.style.display = 'inline';
  quitJobSideButton.style.display = 'inline';
  btn1.innerHTML = 'Wig 10';
  btn2.innerHTML = 'Janitor clothes 50';
    btn2.style.fontSize = '.8rem';
  btn3.innerHTML = 'Suit 50';
  btn4.innerHTML = 'Sax 250';
  btn5.style.display = 'inline';
  btn6.style.display = 'inline';
  btn7.style.display = 'inline';
  btn8.style.display = 'inline';
  btn5.innerHTML = 'Steal it';
  btn6.innerHTML = 'Steal it';
  btn7.innerHTML = 'Steal it';
  btn8.innerHTML = 'Steal it';
  btn1.onclick = buyWig;
  btn2.onclick = buyClothes;
  btn3.onclick = buySuit;
  btn4.onclick = buySax;
  btn5.onclick = stealWig;
  btn6.onclick = stealClothes;
  btn7.onclick = stealSuit;
  btn8.onclick = stealReplacementSax;
  hideout.onclick = hideoutHome;
  quitJobSideButton.onclick = quitJob;
}
function goToCenter() {
  hideout.onclick = hideoutHome;
  hideout.style.display = 'inline';
  quitJobSideButton.style.display = 'inline';
  btn1.innerHTML = 'Pickpocket';
  btn2.innerHTML = 'Card Scam';
  btn3.innerHTML = 'Black Market Cam Jammer 100';
    btn3.style.fontSize = '.6rem';
  btn4.innerHTML = 'Build Fake Profile 200';
    btn4.style.fontSize = '.6rem';
  btn1.onclick = pickpocket;
  btn2.onclick = cardScam;
  btn3.onclick = blackMarketCam;
  btn4.onclick = buildFakeProfile;
  
  textDisplay.innerText = "You're in the 'streets' of Paris and need to make some quick cash and get proper materials for the heist. Be careful of what you purchase. Some job paths require certain things while others don't." 
}
function goToClub() {

}

function buyWig() {
  const wig = 10;
  if (!inventory.includes('Wig') && euros >= wig && inventory.length < 3) {
    inventory.push('Wig');
    confidence += 10;
    addConfidence();
    euros -= 10;
    eurosStatus.innerText = `Euros: ${euros}`
    inv1.style.display = 'block';
    inv1.innerText = 'Wig';
    textDisplay.innerText = 'A wig... interesting choice.';
  } else if (inventory.includes('Wig')) {
    textDisplay.innerText = 'You already have a wig you dummy!';
  } else if (euros < wig) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the wig, but I hope you have the confidence to pull it off. ;)';
  } if (inventory.length >= 3) {
    textDisplay.innerText = "You can't get anything else. Sorry.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  }
}
function buyClothes() {
  const janitorClothes = 50
  if (!inventory.includes('Janitor Clothes') && euros >= janitorClothes && inventory.length < 3) {
    inventory.push('Janitor Clothes');
    confidence += 20;
    addConfidence();
    euros -= 50;
    eurosStatus.innerText = `Euros: ${euros}`
    textDisplay.innerText = 'Nice, you got the uniform! Hope it comes in handy';
    inv2.style.display = 'block';
    inv2.innerText = 'Janitor Clothes';
  } else if (inventory.includes('Janitor Clothes')) {
    textDisplay.innerText = 'You already have a uniform you dummy!';
  } else if (euros < janitorClothes) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the uniform, but I hope you have the confidence to pull it off. ;)';
  } 
  if (inventory.length >= 3) {
    textDisplay.innerText = "You can't get anything else. Sorry.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  }
}
function buySuit() {
  const suit = 50
  if (!inventory.includes('Suit') && euros >= suit && inventory.length < 3) {
    inventory.push('Suit');
    confidence += 20;
    addConfidence();
    euros -= 50;
    eurosStatus.innerText = `Euros: ${euros}`
    textDisplay.innerText = 'You clean up very nice, sir. That is a fine suit.';
    inv3.style.display = 'block';
    inv3.innerText = 'Suit';
  } else if (inventory.includes('Suit')) {
    textDisplay.innerText = 'You already have a suit you dummy!';
  } else if (euros < suit) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the suit, but I hope you have the confidence to pull it off. ;)';
  } 
  if (inventory.length >= 3) {
    textDisplay.innerText = "You can't get anything else. Sorry.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  }
}
function buySax() {
  const sax = 250
  if (!inventory.includes('Saxophone') && euros >= sax && inventory.length < 3) {
    inventory.push('Saxophone');
    confidence += 50;
    addConfidence();
    euros -= 250;
    eurosStatus.innerText = `Euros: ${euros}`
    textDisplay.innerText = "You're going to need a lot of practice to make that thing sound good.";
    inv4.style.display = 'block';
    inv4.innerText = 'Saxophone';
  } else if (inventory.includes('Saxophone')) {
    textDisplay.innerText = 'You already have a saxophone you dummy!';
  } else if (euros < suit) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the sax, but I hope you have the confidence to pull it off. ;)';
  } 
  if (inventory.length >= 3) {
    textDisplay.innerText = "You can't get anything else. Sorry.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  }
}
let result;
function stealIt() {
  if (confidence <= 20) {
      chances = Math.random()*20;
    if (chances <= 8) {
      textDisplay.innerText = "Wow! You stole it. Good job!";
      allBtn.style.display = 'none';
      result = 'success';
    } else {
      textDisplay.innerText = "Wow, you idiot. You got caught."
      allBtn.style.display = 'none';
      confidence -= 50;
      addConfidence();
      result = 'failure';
    }
    console.log(result);
    return result;
  } else if (confidence > 20 && confidence <= 40) {
      chances = Math.random()*15;
    if (chances <= 8) {
      textDisplay.innerText = "Wow! You stole it. Good job!";
      allBtn.style.display = 'none';
      result = 'success';
    } else {
      textDisplay.innerText = "Wow, you idiot. You got caught."
      allBtn.style.display = 'none';
      confidence -= 50;
      addConfidence();
       result = 'failure';
    } 
  } else if (confidence > 40 && confidence <= 100) {
      chances = Math.random()*10;
    if (chances <= 8) {
      textDisplay.innerText = "Wow! You stole it. Good job!";
      allBtn.style.display = 'none';
      result = 'success';
    } else {
      textDisplay.innerText = "Wow, you idiot. You got caught."
      allBtn.style.display = 'none';
      confidence -= 50;
      addConfidence();
      result = 'failure';
    } 
  }
}
function stealWig() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Wig') && inventory.length < 3) {
    stealIt();
    inventory.push('Wig');
    confidence += 40;
    addConfidence();
    inv1.style.display = 'block';
    inv1.innerText = 'Wig';
  } else if (inventory.includes('Wig')) {
    textDisplay.innerText = "Think... you don't need the wig. You already have one. So don't risk it.";
  } 
}
function stealClothes() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Janitor Clothes') && inventory.length < 3) {
    stealIt();
    inventory.push('Janitor CLothes');
    confidence += 40;
    addConfidence();
    inv2.style.display = 'block';
    inv2.innerText = 'Janitor Clothes ';
  } else if (inventory.includes('Janitor Clothes')) {
    textDisplay.innerText = "Do you have two bodies? NO Why do yu need two janitor uniforms. Go home, Rodger!!";
  } 
}
function stealSuit() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Suit') && inventory.length < 3) {
    stealIt();
    inventory.push('Suit');
    confidence += 60;
    addConfidence();
    inv3.style.display = 'block';
    inv3.innerText = 'Suit';
  } else if (inventory.includes('Suit')) {
    textDisplay.innerText = "Does it hurt to have two suits? Not really, but NO you don't need another one. Go steal something else!";
  } 
}
function stealReplacementSax() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Sax') && inventory.length < 3) {
    stealIt();
    inventory.push('Sax');
    confidence += 60;
    addConfidence();
    inv4.style.display = 'block';
    inv4.innerText = 'Sax';
  } else if (inventory.includes('Sax')) {
    textDisplay.innerText = "I'm blown away by your ambition, but be SMART ya dummy. You don't need another sax. Go somewhere else.";
  } 
}
function gameOver() {
  textDisplay.innerText = "GAME OVER";
  inputBar.style.display = 'none';
  submitButton.style.display = 'none';
  document.querySelector('.inventory').style.display = 'none';

}
function quitJob() {
  inputBar.style.display = 'none';
  submitButton.onclick = gameOver;
  submitButton.innerHTML = 'QUIT'
  hideout.style.display = 'none';
  quitJobSideButton.style.display = 'none';
  statusBar.style.display = 'none';
  allBtn.style.display = 'none';
  textDisplay.innerText = 'I hope you understand that quitting means trying your luck with DEATH. Surely you can run, but we WILL find you.'
}
function addConfidence() {
  confidenceContainer.innerHTML = `Confidence: ${confidence}`
}