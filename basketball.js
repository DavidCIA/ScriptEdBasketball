
function promptForPlayerName(player) {
    var greeting=player + " What is your name? ";
    var Name= prompt (greeting);
    var lengthOfName= Name.length;
    if (lengthOfName > 15) {
        alert ( " Wow, That's a long name!! ");
    }
    
    return Name;
}

function tryTwoPointShot (){
    var x= Math.Random ();
    var y= Math.Random ();
    if (x>=0.2 && y>0.2) {
        return true;
    } else {
        return false;
    }
}

function tryThreePointShot () {
    var d= Math.Random ();
    var e= Math.Random ();
    if (d<=0.2 && e>=0.8) {
        return true;
    } else {
        return false;
    }
}

function getShotString(name,points, madeShot){
     var shotString= name + " attempted a "+ points + " point shot. It was "
    if (madeShot) {
        return shotString + "Good";
    } else {
        return shotString = "No Good";
    }
}

function updateScore(shotMade,currentPoints, shotPoints){
    if (shotMade){
        return currentPoints + shotPoints;
    } else {
        return currentPoints;
    }
}

function isEndOfGame (playerScore, playerName){
    if ( playerScore>= 20) {
        alert (" The Game Is Over, Won!!!");
        return true; 
    } else {
        return false;
    }
}