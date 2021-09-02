console.log( "wee")
var beliefStatus = prompt("Are you a believer?")
if(beliefStatus.toLowerCase() == 'yes'){
    document.getElementById("believe1").innerHTML = "Believer"
} else{
    if(beliefStatus.toLowerCase() == "no"){
    document.getElementById("believe1").innerHTML = "Non-Believer"
    } 
    // if(beliefStatus != "yes", "no"){
    //  document.getElementById("believe").innerHTML = "Soon to be a Believer"
    //  }
 }        