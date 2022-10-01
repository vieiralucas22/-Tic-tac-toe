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
function chooseField() {
  changeName();
}
