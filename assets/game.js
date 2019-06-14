//Creating questions array
var questions =[{
    question: "Which team won the 2004 NBA Championship?",
    answers: ["Pistons", "Spurs", "Lakers", "Heat"],
    correctAnswer: "Pistons",
},
{
    question: "Who won the 2000 - 2001 NBA MVP?",
    answers: ["Iverson", "Kobe", "Shaq", "Duncan"],
    correctAnswer: "Iverson",
},
{
    question: "Which team orginally draft Kevin Durant?",
    answers: ["Thunder", "Bulls", "Lakers", "Supersonics"],
    correctAnswer: "Supersonics",
},
{
    question: "Who holds the record most points scored in one game in the decade?",
    answers: ["LeBron ", "Kobe ", "Shaq ", "KG "],
    correctAnswer: "Kobe",
},
{
    question: "Who did Michael Jordan select with the 1st overall pick?",
    answers: ["K.Martin ", "K.Brown ", "D.Howard ", "Y.Ming "],
    correctAnswer: "K.Brown",
},
{
    question: "Which NBA player ran into the stands and punch a fan in the face?",
    answers: ["Kobe ", "Carmelo ", "Artest ", "LeBron "],
    correctAnswer: "Artest",
}];

//Creating function that removes the start button
$("#start").on('click',function(){
    $("#start").remove();
    //Looping through the questions
    for(var i =0; i < questions.length; i++){
        $("#play").append('<h3>'+questions[i].question+'</h3>');
        //looping through the answers to display and storing the answer in the radio button
    for(var j =0; j < questions[i].answers.length; j++){
        $("#play").append("<input type = 'radio' name = 'question-"+i+"'value=' " +questions[i].answers[j]+" ' >"+questions[i].answers[j]+" ");

    }
    }
})


