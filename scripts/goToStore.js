function goToStore() {
  textDisplay.innerHTML = 'You are in the store.';
  textDisplay.style.height = '80px';
  hideout.style.display = 'inline';
  quitJobSideButton.style.display = 'inline';
  btn1.innerHTML = 'Wig 10';
  btn2.innerHTML = 'Janitor clothes 50';
    btn2.style.fontSize = '.8rem';
  btn3.innerHTML = 'Suit 50';
  btn4.innerHTML = 'Sax 250';
  renderSecondRowButtons();
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


function buyWig() {
  const wig = 10;
  if (!inventory.includes('Wig') && euros >= wig && inventory.length < 4) {
    inventory.push('Wig');
    displayInventory();
    confidence += 10;
    euros -= 10;
    halfDayWork();
    textDisplay.innerText = 'A wig... interesting choice.';
  } else if (inventory.includes('Wig')) {
    textDisplay.innerText = 'You already have a wig you dummy!';
  } else if (euros < wig) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the wig, but I hope you have the confidence to pull it off. ;)';
  } if (inventory.length >= 4) {
    textDisplay.innerText = "Your bag is full.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  }
};
function stealWig() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Wig') && inventory.length < 4) {
    stealIt();
    if (result) {
      inventory.push('Wig');
      displayInventory();
    } 
  } else if (inventory.includes('Wig') || inventory.length == 4) {
    textDisplay.innerText = "You've got enough! Do something else.";
  };
};
function buyClothes() {
  const janitorClothes = 50
  if (!inventory.includes('Janitor Clothes') && euros >= janitorClothes && inventory.length < 4) {
    inventory.push('Janitor Clothes');
    displayInventory();
    confidence += 30;
    euros -= 50;
    halfDayWork();
    textDisplay.innerText = 'Nice, you got the uniform! Hope it comes in handy';
  } else if (inventory.includes('Janitor Clothes')) {
    textDisplay.innerText = 'You already have a uniform you dummy!';
  } else if (euros < janitorClothes) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the uniform, but I hope you have the confidence to pull it off. ;)';
  };
  if (inventory.length >= 4) {
    textDisplay.innerText = "Your bag is full.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  };
};
function stealClothes() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Janitor Clothes') && inventory.length < 4) {
    stealIt();
    if (result) {
      inventory.push('Janitor CLothes');
      displayInventory();
    } 
  }else if (inventory.includes('Janitor Clothes') || inventory.length == 4) {
      textDisplay.innerText = "Your bag is full.";
    };
};
function buySuit() {
  const suit = 50
  if (!inventory.includes('Suit') && euros >= suit && inventory.length < 4) {
    inventory.push('Suit');
    displayInventory();
    confidence += 30;
    euros -= 50;
    halfDayWork();
    textDisplay.innerText = 'You clean up very nice, sir. That is a fine suit.';
  } else if (inventory.includes('Suit')) {
    textDisplay.innerText = 'You already have a suit you dummy!';
  } else if (euros < suit) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the suit, but I hope you have the confidence to pull it off. ;)';
  } 
  if (inventory.length == 4) {
    textDisplay.innerText = "Your bag is full.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  };
};
function stealSuit() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Suit') && inventory.length < 4) {
    stealIt();
    if (result) {
      inventory.push('Suit');
      displayInventory();
    }
  } else if (inventory.includes('Suit') || inventory.length == 4) {
    textDisplay.innerText = "Go steal something else!";
  } 
}
function buySax() {
  const sax = 250
  if (!inventory.includes('Saxophone') && euros >= sax && inventory.length < 4) {
    inventory.push('Saxophone');
    displayInventory();
    confidence += 50;
    euros -= 250;
    halfDayWork();
    textDisplay.innerText = "You're going to need a lot of practice to make that thing sound good.";
  } else if (inventory.includes('Saxophone')) {
    textDisplay.innerText = 'You already have a saxophone you dummy!';
  } else if (euros < sax) {
    textDisplay.innerText = 'You need to go find some money... Or just steal the sax, but I hope you have the confidence to pull it off. ;)';
  } 
  if (inventory.length == 4) {
    textDisplay.innerText = "Your bag is full.";
    mainBtn.onclick = hideoutHome;
    stealBtn.onclick = hideoutHome;
  }
}
function stealReplacementSax() {
  hideout.onclick = hideoutHome;
  if (!inventory.includes('Saxophone') && inventory.length < 4) {
    stealIt();
    if (result) {
      inventory.push('Saxophone');
      displayInventory();
    }
  } else if (inventory.includes('Saxophone') || inventory.length == 4) {
    textDisplay.innerText = "I'm blown away by your ambition, but be SMART ya dummy. Go somewhere else.";
  } 
}

function stealIt() {
  if (confidence <= 20) {
    return lowChance();
  } else if (confidence > 20 && confidence <= 40) {
    return mediumChance();
  } else if (confidence > 40 && confidence <= 100) {
    return highChance();
  };
};
let result;
function lowChance() {
   chances = Math.random()*25;
    if (chances <= 8) {
      textDisplay.innerText = "Wow! You stole it. Good job!";
      allBtn.style.display = 'none';
      confidence += 40;
      halfDayWork();
      return result = true;
    } else if (chances > 8) {
      textDisplay.innerText = "Wow, you idiot. You got caught."
      allBtn.style.display = 'none';
      confidence -= 20;
      halfDayWork();
      return result = false;
  };
};
function mediumChance() {
  chances = Math.random()*15;
    if (chances <= 8) {
      textDisplay.innerText = "Wow! You stole it. Good job!";
      allBtn.style.display = 'none';
      confidence += 30;
      halfDayWork();
      return result = true;
    } else if (chances > 8) {
      textDisplay.innerText = "Wow, you idiot. You got caught."
      allBtn.style.display = 'none';
      confidence -= 50;
      halfDayWork();
      return result = false;
  };
};
function highChance() {
  chances = Math.random()*10;
    if (chances <= 8) {
      textDisplay.innerText = "Wow! You stole it. Good job!";
      allBtn.style.display = 'none';
      confidence += 80;
      halfDayWork();
      return result = true;
    } else if (chances > 8) {
      textDisplay.innerText = "Wow, you idiot. You got caught."
      allBtn.style.display = 'none';
      confidence -= 100;
      halfDayWork();
      return result = false;
  };
};