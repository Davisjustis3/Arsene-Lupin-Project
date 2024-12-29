
 function goToCenter() {
  renderTopRowButtons();
  removeSecondRowButtons();
  textDisplay.innerHTML = "You're in the 'streets' of Paris and need to make some quick cash and get proper materials for the heist. Be careful of what you purchase. Some job paths require certain things while others don't.";
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
    }
}

