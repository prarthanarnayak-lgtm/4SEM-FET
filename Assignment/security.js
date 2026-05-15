const correctPassword = "12345";
let userGuess = "";
let attempts = 0;

while (userGuess !== correctPassword && attempts < 3) {
    userGuess = prompt("Enter Security Password (Attempt " + (attempts + 1) + "/3):");
    attempts++;
}

let loginDiv = document.getElementById("login-status");
if (userGuess === correctPassword) {
    loginDiv.innerHTML = "<strong>Access Granted!</strong> Welcome back.";
} else {
    loginDiv.innerHTML = "<span style='color:red;'>System Locked. Too many failed attempts.</span>";
}

let sectorsToScan = 0; // Even if there are 0 sectors, it will run once.
let scanLog = "Initializing Hardware... <br>";

do {
    scanLog += "Sector " + sectorsToScan + ": Cleaned and Verified.<br>";
    sectorsToScan--; 
} while (sectorsToScan > 0);

document.getElementById("scan-log").innerHTML = scanLog;
