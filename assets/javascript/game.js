var goalNumber = 0;
var crystalInfo = {
  ruby: null,
  saphire: null,
  quartz: null,
  emerald: null
};

var winCount = 0;
var lossCount = 0;
var playerNumber = 0;

function reset() {
  goalNumber = Math.round(Math.random() * 115 + 15);
  crystalInfo.ruby = Math.round(Math.random() * 15);
  crystalInfo.saphire = Math.round(Math.random() * 15);
  crystalInfo.quartz = Math.round(Math.random() * 15);
  crystalInfo.emerald = Math.round(Math.random() * 15);
  $(".randomNumberDisplay").html(goalNumber);
  console.log(goalNumber);
  console.log(crystalInfo.ruby);
  console.log(crystalInfo.saphire);
  console.log(crystalInfo.quartz);
  console.log(crystalInfo.emerald);
  $(".win-loss-record").html(
    "<p>Wins: " + winCount + "</p><p>Losses: " + lossCount + "</p>"
  );
  playerNumber = 0;
  $(".scoreDisplay").html(playerNumber);
}

reset();

$("#ruby").on("click", function() {
  playerNumber = playerNumber + crystalInfo.ruby;
  console.log("New playerNumber= " + playerNumber);
  $(".scoreDisplay").html(playerNumber);
  //sets win/lose conditions
  if (playerNumber == goalNumber) {
    win();
  } else if (playerNumber > goalNumber) {
    lose();
  }
});

$("#saphire").on("click", function() {
  playerNumber = playerNumber + crystalInfo.saphire;
  console.log("New playerNumber= " + playerNumber);
  $(".scoreDisplay").html(playerNumber);
  //sets win/lose conditions
  if (playerNumber == goalNumber) {
    win();
  } else if (playerNumber > goalNumber) {
    lose();
  }
});

$("#quartz").on("click", function() {
  playerNumber = playerNumber + crystalInfo.quartz;
  console.log("New playerNumber= " + playerNumber);
  $(".scoreDisplay").html(playerNumber);
  //sets win/lose conditions
  if (playerNumber == goalNumber) {
    win();
  } else if (playerNumber > goalNumber) {
    lose();
  }
});

$("#emerald").on("click", function() {
  playerNumber = playerNumber + crystalInfo.emerald;
  console.log("New playerNumber= " + playerNumber);
  $(".scoreDisplay").html(playerNumber);
  //sets win/lose conditions
  if (playerNumber == goalNumber) {
    win();
  } else if (playerNumber > goalNumber) {
    lose();
  }
});

function win() {
  winCount++;
  alert("You Win!");
  reset();
}

function lose() {
  lossCount++;
  alert("You Lose!");
  reset();
}
