let fname = "";

// function for the greet
function greet(){
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;

    // show the results!
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + "!";

}

// function to trivia game
function trivia(){
    // trivia answer
    let triviaAnswer = document.getElementById("trivia-answer");
    // get the checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // decide what to "print"
    if (chocolateSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    } else if (tunaSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    } else if (honeySelected){
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }
    
}   

function trivia2(){
    // trivia answer
    let triviaAnswer = document.getElementById("trivia2-answer");
    // get the checked values from form
    let q1s = document.getElementById("q1").checked;
    let q2s = document.getElementById("q2").checked;
    let q3s = document.getElementById("q3").checked;

    // decide what to "print"
    if (q1s){
        triviaAnswer.innerHTML = fname + ", you are wrong.";
    } else if (q2s){
        triviaAnswer.innerHTML = fname + ", you are right!";
    } else if (q3s){
        triviaAnswer.innerHTML = fname + ", you are wrong."
    }
    
}   

function trivia3(){
    // trivia answer
    let triviaAnswer = document.getElementById("trivia3-answer");
    // get the checked values from form
    let q1s = document.getElementById("q1").checked;
    let q2s = document.getElementById("q2").checked;
    let q3s = document.getElementById("q3").checked;

    // decide what to "print"
    if (q1s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth";
    } else if (q2s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth";
    } else if (q3s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth"
    } else if (q1s && ){
        triviaAnswer.innerHTML = fname + ", there is more than one truth";
    } else if (q2s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth"
    } else if (q3s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth";
    } else if (q3s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth"
    } else if (q2s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth";
    } else if (q3s){
        triviaAnswer.innerHTML = fname + ", there is more than one truth"
    }
    
}  