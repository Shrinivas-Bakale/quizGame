const resultPassword = "klesbca99";

function requestPassword() {
  const userPassword = prompt("Enter the password for Round 1");
  if (userPassword === resultPassword) {
    window.location.href = "round1.html";
  } else {
    alert("Incorrect password.");
    requestPassword();
  }
}

const resultPassword2 = "klesbca@420";

function requestPassword2() {
  const userPassword = prompt("Enter the password for Round 3");
  if (userPassword === resultPassword2) {
    window.location.href = "round3.html";
  } else {
    alert("Incorrect password.");
    requestPassword2();
  }
}

const resultPassword3 = "samarthchad";

function requestPassword3() {
  const userPassword = prompt("Enter the password to play game:");
  if (userPassword === resultPassword3) {
    window.open("https://www.games68.com/games.php?id=6264", "_blank");
  } else {
    alert("Incorrect password.");
    requestPassword3(); // Correct function call
  }
}


const resultPassword4 = "sumanthchad";

function requestPassword4() {
  const userPassword = prompt("Enter the password to download the pdf:");
  if (userPassword === resultPassword4) {
    window.location.href = "./Assets/Round 3.pdf";
  } else {
    alert("Incorrect password.");
    requestPassword4();
  }
}
