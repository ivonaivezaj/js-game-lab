let userPoints = 40;
let grantPoints = 10;
let grantDefeated = 0;

const startGame = () => {
  const userName = prompt("What is your name?");

  while (userPoints > 0 && grantDefeated < 3) {
    userPoints -= Math.floor(Math.random() * 2 + 1);
    grantPoints -= Math.floor(Math.random() * 2 + 1);

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
};

const getResponse = prompt("Do you want to play the game?");
if (getResponse === "Yes") {
  startGame();
}
