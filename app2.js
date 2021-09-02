function userGuessingGame(){
    userAnswer = prompt("guess number");
    correctAnswer = Math.floor(Math.random() * 11);
    if(userAnswer == correctAnswer){
        alert("yeah");
        else{
            alert("boo")
        }

    }
}