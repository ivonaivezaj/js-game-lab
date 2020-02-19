let userPoints = 40;
let grantPoints = 10;
let grantDefeated = 0;

function getDamage() {
  return Math.floor(Math.random() * 5) + 1;
}
  function startCombat () {
  const userName = prompt("What is your name?").toLowerCase();

  while (userPoints > 0 && grantDefeated < 3) {
    const quitGame = prompt("Would you like to attack or quit?").toLowerCase();
    if (quitGame == "quit"){
      break;
    } 
    else if (quitGame.toLowerCase() == "attack")
    userPoints = userPoints - getDamage();
    grantPoints = grantPoints - getDamage();

    console.log(`${userName} has ${userPoints} health left`);
    console.log(`Grant has ${grantPoints} health left`);

    if (grantPoints <= 0) {
      grantPoints = 10;
      grantDefeated++;
    }
  }
  if (grantDefeated === 3) {     
    console.log(`${userName} WON`);
  } else {
    console.log("Grant Almighty won!");
  }
}
const startGame = prompt ("Do you want to play the game?").toLowerCase();
if (startGame == "yes") 

  {
    startCombat(); 
  } else 
  alert ("Bye, Bye");

