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
   gameplay.begin();
})

var gameplay ={
    correct:0,
    incorrect:0,
    counter:24,
    countdown: function(){
        gameplay.counter --;
        $('#counter').html(gameplay.counter);
        if(gameplay.counter<=0){
            console.log("Shot Clock Violation")
            gameplay.done();
        }
    },
    begin: function(){
    timer = setInterval(gameplay.countdown,1000);
    $('#play').prepend('<h2>Shot Clock: <span id = "counter">24</span> Seconds</h2>');
        //removes the start button
    $("#start").remove();
    //Looping through the questions
    for(var i =0; i < questions.length; i++){
        $("#play").append('<h3>'+questions[i].question+'</h3>');
        //looping through the answers to display and storing the answer in the radio button
    for(var j =0; j < questions[i].answers.length; j++){
        $("#play").append("<input type = 'radio' name = 'question-"+i+"'value=' " +questions[i].answers[j]+" ' >"+questions[i].answers[j]+" ");

    }
    }
    $("#play").append('<button id="end">BUZZER BEATER</button>');

},

    endGame: function(){
        $.each($('input[name ="question-0]":checked'), function(){
            if($(this).val()==questions[0].correctAnswer){
                gameplay.correct++;
            } else{
                gameplay.incorrect++;
            }
        });
        $.each($('input[name ="question-1]":checked'), function(){
            if($(this).val()==questions[1].correctAnswer){
                gameplay.correct++;
            } else{
                gameplay.incorrect++;
            }
        });
        $.each($('input[name ="question-2]":checked'), function(){
            if($(this).val()==questions[2].correctAnswer){
                gameplay.correct++;
            } else{
                gameplay.incorrect++;
            }
        });
        $.each($('input[name ="question-3]":checked'), function(){
            if($(this).val()==questions[3].correctAnswer){
                gameplay.correct++;
            } else{
                gameplay.incorrect++;
            }
        });
        $.each($('input[name ="question-4]":checked'), function(){
            if($(this).val()==questions[4].correctAnswer){
                gameplay.correct++;
            } else{
                gameplay.incorrect++;
            }
        });
        $.each($('input[name ="question-5]":checked'), function(){
            if($(this).val()==questions[5].correctAnswer){
                gameplay.correct++;
            } else{
                gameplay.incorrect++;
            }
        });
        this.final();
    },
    final: function(){
        clearInterval(timer);
        $('#play h2').remove();
        $('#play').html("<h2>Times Up!</h2>");
        $('#play').append("<h3>Makes: " + gameplay.correct+"</h3>" );
        $('#play').append("<h3>Misses: " + gameplay.incorrect+"</h3>" );






    }
}




