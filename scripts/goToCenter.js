
 function goToCenter() {
  renderTopRowButtons();
  removeSecondRowButtons();
  textDisplay.innerHTML = "You're in the 'streets' of Paris and need to make some quick cash and get proper materials for the heist. Be careful of what you do and what you purchase. Some job paths require certain things while others don't.";
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
}
function pickpocket() {
  let confidenceMoral = '';
  renderSecondRowButtons();
  btn5.innerHTML = 'Tourist';
  btn6.innerHTML = 'Pizza Delivery';
  btn7.innerHTML = 'Eldery Woman';
  btn8.innerHTML = 'Pregnant Lady';
  removeTopRowButtons();
  btn5.onclick = touristPick;
  btn6.onclick = deliveryPick;
  btn7.onclick = elderlyPick;
  btn8.onclick = pregnantPick;
  hideout.onclick = goToCenter;
  hideout.innerHTML = 'Back';
  if (confidence > 50) {
    confidenceMoral = 'low -- so beware of who you choose to prey on.';
  } else if (confidence >= 50 && confidence < 100) {
    confidenceMoral = 'moderate -- so taking a shot at most of these people will not be a problem.';
  } else {
    confidenceMoral = 'high -- so this really should not a be a problem at all.';
  }
  textDisplay.innerHTML = `In the world of pickpocketing, it's all about your confidence. By the looks of it -- your confidence level is pretty ${confidenceMoral}
  You have four general choices and all have their own consequences. Robbing a pregnant lady is a little messed up, and could lower your confidence. But, the payout could be nice. Same with the rest. You only get 5 ATTEMPTS so be smart. Good Luck.
  Attempts used: ${attempts};
  `
};
let attempts = 0;
function touristPick() {
  if (attempts < 5) {
    chances = Math.random() * 10;
    if (chances <= 8) {
      halfDayWork();
      attempts++;
      euros += 20;
      confidence += 10;
      updateStatus();
      textDisplay.innerHTML = 'You scored 20 euros and gained some confidence. The tourist has no idea. HAHAHA!'
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
    } else {
      attempts++;
      confidence -= 50;
      halfDayWork();
      textDisplay.innerHTML = 'I am not sure if I have chosen the right person... That tourist was ripe for the picking and you failed.'
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
      }
  } else if (attempts == 5) {
    textDisplay.innerHTML = "You've used all of your attempts."
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
    }
  }
function deliveryPick() {
  if (attempts < 5) {
    chances = Math.random() * 15;
    if (chances <= 8) {
      halfDayWork();
      attempts++;
      euros += 40;
      confidence += 20;
      updateStatus();
      textDisplay.innerHTML = 'You scored 40 euros and gained some confidence. Stealing from the delivery guy. Bold but I like it!'
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
    } else {
      attempts++;
      confidence -= 50;
      halfDayWork();
      updateStatus();
      textDisplay.innerHTML = "Delivery drivers are tough, but this is still a disappointing failure"
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
      }
  } else if (attempts == 5) {
    textDisplay.innerHTML = "You've used all of your attempts."
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
    }
  }
function elderlyPick() {
  if (attempts < 5) {
    chances = Math.random() * 10;
    if (chances <= 8) {
      halfDayWork();
      attempts++;
      euros += 70;
      confidence -= 40;
      updateStatus();
      textDisplay.innerHTML = 'You scored 70 euros but... it was an eldery woman. You lost some confidence.'
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
    } else {
      attempts++;
      confidence -= 50;
      halfDayWork();
      updateStatus();
      textDisplay.innerHTML = "OHH she knocked you across the head with her purse! That's embarrassing."
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
      }
  } else if (attempts == 5) {
    textDisplay.innerHTML = "You've used all of your attempts."
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
    }
  }
function pregnantPick() {
  if (attempts < 5) {
    chances = Math.random() * 25;
    if (chances <= 8) {
      halfDayWork();
      attempts++;
      euros += 100;
      confidence -= 30;
      updateStatus();
      textDisplay.innerHTML = 'You ran off with 150 euros but she tripped you as you left. You dropped 50. Still a profit but it was close. You lost some confidence.'
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
    } else {
      attempts++;
      confidence -= 30;
      halfDayWork();
      fullDayWork();
      updateStatus();
      textDisplay.innerHTML = "Oof you just got Karened by that lady. She called the cops. You lost an entire day and a half running away. Not good"
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
      }
  } else if (attempts == 5) {
    textDisplay.innerHTML = "You've used all of your attempts."
      setTimeout(() => {
        goToCenter();
        removeSecondRowButtons();
      }, 6000);
  };
};

function cardScam() {
  textDisplay.innerHTML = `You set up a table for some card games near Champs-Élysées. This is a hot area. It's risky but the payout and be pretty big. You mess with the wrong guy and you'll be missing out on a lot of cash. These poor tourist are not going to see you coming. You only have 3 attempts. The police start to crack down very quickly. Your attempts: ${attempts}.`
  removeTopRowButtons();
  btn2.style.display = 'inline';
  btn2.onclick = scam;
  btn3.style.display = 'inline';
  btn2.innerHTML = 'Do Scam';
  btn3.innerHTML = 'Go back';
  btn3.onclick = goToCenter;
  
}
let attemptsScam = 0;
function scam() {
  let chances = 0;
  if (attemptsScam < 3) {
    chances = Math.random() * 15;
      if (chances <= 8) {
      attemptsScam++;
      euros += 30
      confidence += 10
      halfDayWork();
      updateStatus();
      textDisplay.innerHTML = `You ripped off some tourists. Simple con. Your attempts: ${attemptsScam}.`
      } else if (chances == 10) {
      attemptsScam++;
      euros -= 50;
      confidence -= 50;
      halfDayWork();
      updateStatus();
      textDisplay.innerHTML = `You tried to con a con man and he beat you for your money. Tough loss. He took 50 euros from you. Your attempts: ${attemptsScam}.`
      } else if (chances > 8 && chances !== 10) {
      attemptsScam++;
      euros -= 50;
      confidence -= 50;
      halfDayWork();
      updateStatus();
      textDisplay.innerHTML = `You ran into a cop so you had to get out of there quick. You left some cash on the table. Not a good look. Your attempts: ${attemptsScam}.`
      };
    } else if (attemptsScam == 3) {
      textDisplay.innerHTML = `You've used all of your attempts. Your attempts: ${attemptsScam}.`
  }
}
function blackMarketCam() {
  removeTopRowButtons();
  btn2.style.display = 'inline';
  btn3.style.display = 'inline';
  btn2.innerHTML = 'Buy Camera';
  btn2.onclick = buyCamera;
  btn3.innerHTML = 'Go back'
  btn3.onclick = goToCenter;
  
textDisplay.innerHTML = `This is a Cam jammer that has the capabitlity of shutting off nearby cameras that are within 5 meters. It's not a far reach, so you really need to right under it. Depending on which path you chose, this may benefit you in a certain sitation. It cost 100 euros.`
}
function buyCamera() {
  const camera = 100
  if (!inventory.includes('Black Market Cam') && euros >= camera && inventory.length < 4) {
    inventory.push('Black Market Cam');
    displayInventory();
    confidence += 30;
    euros -= 100;
    halfDayWork();
    textDisplay.innerHTML = "You added the camera to your inventory."
  } else if (inventory.includes('Black Market Cam')) {
    textDisplay.innerText = "It's not wise to use to cam jammers at once. It causes interferance with the other cam jammer.";
  } else if (euros < camera) {
    textDisplay.innerText = "You need to go find some money... And you can't steal this. Your buddy is hooking you up.";
  };
  setTimeout(() => {
    hideoutHome();
  }, 3000);
};
function blackMarketCam() {
  removeTopRowButtons();
  btn2.style.display = 'inline';
  btn3.style.display = 'inline';
  btn2.innerHTML = 'Pay for Service';
  btn2.onclick = buyFakeProfile;
  btn3.innerHTML = 'Go back'
  btn3.onclick = goToCenter;
  
textDisplay.innerHTML = `This is a Cam jammer that has the capabitlity of shutting off nearby cameras that are within 5 meters. It's not a far reach, so you really need to right under it. Depending on which path you chose, this may benefit you in a certain sitation. It cost 100 euros.`
}
function buildFakeProfile() {
  const profile = 200
  if (!inventory.includes('Fake Profile') && euros >= profile && inventory.length < 4) {
    inventory.push('Fake Profile');
    displayInventory();
    confidence += 50;
    euros -= 200;
    halfDayWork();
    fullDayWork();
    textDisplay.innerHTML = "You paid someone to build you a website."
  } else if (inventory.includes('Fake Profile')) {
    textDisplay.innerText = "It's not worth it to pay for this twice.";
  } else if (euros < profile) {
    textDisplay.innerText = "You need to go find some money...";
  };
  setTimeout(() => {
    hideoutHome();
  }, 3000);
};