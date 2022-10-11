let flag = 0;
function changeName() {
  const player1 = document.getElementById("Player1").value;
  const player2 = document.getElementById("Player2").value;
  let playerTurn = document.getElementById("player");

  if (flag === 0) {
    playerTurn.innerText = player1;
    flag = 1;
  } else {
    playerTurn.innerText = player2;
    flag = 0;
  }
}
const boardGame = document.getElementById("tic-tac-toe");

boardGame.addEventListener("click", function (e) {
  let fieldSelect = document.getElementById(`${e.target.id}`);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 3; j++) {}
  }

  switch (flag) {
    case 0:
      fieldSelect.style.backgroundImage = "url('../IMGS/X.png')";
      break;
    case 1:
      fieldSelect.style.backgroundImage = "url('../IMGS/O.png')";
      break;

    default:
      break;
  }
  changeName();
});
