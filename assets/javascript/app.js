//object constructor for dog trivia questions

function DoggyData(question, answer, rightanswer) {
    this.question = question;
    this.answer = answer;
    this.rightanswer = rightanswer;
}

var doggydatas = [
    new DoggyData ("What breed of dog is Snoopy (from Charlie Brown)?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What's the WORLDS most popular dog breed?", ["Golden Retriever", "German Shepherds", "Rottweiler", "Labrador"], 3 ),
    new DoggyData ("What breed of dog is the favourite of Queen Elizabeth?", ["King Charles Cavalier Spaniel", "Pug", "Corgi", "ChowChow"], 2 ),
    new DoggyData ("Where are a dog's sweat glands located?", ["Nose", "Tail", "Mouth", "Paws"], 3 ),
    new DoggyData ("What breed has a black tongue?", ["Chow Chow", "Chihuahua", "Bloodhound", "Rat Terrier"], 0 ),
    new DoggyData ("Which human organ do dogs lack?", ["Prostate", "Pancreas", "Appendix", "Small Intestine"], 2 ),
    new DoggyData ("Why do dogs curl up when they sleep?", ["To make themselves invisibile", "To be warm and comfy", "To protect their organs", "To show submission"], 2 ),
    new DoggyData ("What breed has six toes on each paw?", ["Husky", "Saint Bernard", "Norweigian Lundehund", "Cairn Terrier"], 0 ),
    new DoggyData ("How many muscles do dogs have in their ears?", ["~3", "~8", "Only 1", "18 or more"], 0 ),
    new DoggyData ("Which four colors can a dog see", ["Black, white, blue, yellow", "Gray, gray, gray, gray", "Black, green, red, blue", "Yellow, purple, orange, red"], 0 ),
    new DoggyData ("Which sense are puppies born without?", ["Sight", "Taste", "Hearing", "Smell"], 2 ),
    new DoggyData ("How many taste buds do dogs have?", ["400", "1,700", "900", "100"], 1 ),
];

//testing arrays works
console.log(doggydatas);

//pup-ulate trivia questions, answers and number answered correctly/incorrectly
var area = $('#quiz-space');

var trivia = { 
    correct: 0,
    incorrect: 0,

    start: function() {
        $('#quiz-space').prepend(
            "<h2>Don't labradoodle around, let's get started! </h2>");
        $("#start-trivia").remove();
        
        for (var d = 0; d < doggydatas.length; d++) {
        area.append('<h2>' + doggydatas[d].question + '</h2');
        for (var a = 0; a < doggydatas[d].answer.length; a++) {
        area.append("<input type='radio' name='question: " + d + 
        "'value: '" + doggydatas[d].answer[a] + "''>" + doggydatas[d].answer[a]);    
        }
    }

    area.append("<br><br><button id='done' class='btn btn-danger'>Done</button>");
},
    done: function() {
        var selection = area.children("input:checked");
        for (var s = 0; s < selection.length; s++) {
            if ($(selection[s]).val() === doggydatas[s].rightanswer) {
              trivia.correct++;
            } else {
                trivia.incorrect++;
            }  
        }
        this.result();
        },
        
    result: function() {
        area.html("<h2>Don't Stop Retrieving</h2>");
        area.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        area.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    }
    };

//click events

$(document).on("click", "#start-trivia", function() {
    trivia.start();
  });
  
  $(document).on("click", "#done", function() {
    trivia.done();
  });
  