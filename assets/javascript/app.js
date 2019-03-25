//Objective 1: Setting the 8 minute timer & alerts

var TriviaTimer = 0
var CountDown = setInterval(function() {
    var minutes = Math.Floor ((distance % (1000 * 60 * 60)) / 1000 * 60));
    var seconds = Math.Floor ((distance % (1000 * 60)) / 1000));

    document.getElementById("timer").innerHTML = 
}

//Objective 2: defining the Array of Questions! Sally taught me how to use the constructor so kudos & credit to her!
class DoggyData {
    construction (quests, answs, corrs, image=null) {
        this.question = quests;
        this.answer = answs;
        this.correct = corrs;
        this.image = image;
    }
}
// layout of questions using constructor form
const DogData = [
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
    new DoggyData ("What breed of dog is snoopy?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
];

//Variables
var currentAnswer = 0;
var questionsAsked = 0;
var numCorrect = 0;
var numWrong = 0;

//functions
$(#startTrivia).on("click", function() {
    $("#startGame").replaceWith()
} )
