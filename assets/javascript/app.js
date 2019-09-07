// //mercy
// class DoggyData {
//     constructor (quests, answs, corrs, image) {
//         this.question = quests;
//         this.answer = answs;
//         this.correct = corrs;
//         this.image = image;
//     }
// }
// // layout of questions using constructor form
// const DogData = [
//     new DoggyData ("What breed of dog is Snoopy (from Charlie Brown)?", ["Beagle", "Hound", "Border Collie", "Boston Terrier"], 0 ),
//     new DoggyData ("What's the WORLDS most popular dog breed?", ["Golden Retriever", "German Shepherds", "Rottweiler", "Labrador"], 3 ),
//     new DoggyData ("What breed of dog is the favourite of Queen Elizabeth?", ["King Charles Cavalier Spaniel", "Pug", "Corgi", "ChowChow"], 2 ),
//     new DoggyData ("Where are a dog's sweat glands located?", ["Nose", "Tail", "Mouth", "Paws"], 3 ),
//     new DoggyData ("What breed has a black tongue?", ["Chow Chow", "Chihuahua", "Bloodhound", "Rat Terrier"], 0 ),
//     new DoggyData ("Which human organ do dogs lack?", ["Prostate", "Pancreas", "Appendix", "Small Intestine"], 2 ),
//     new DoggyData ("Why do dogs curl up when they sleep?", ["To make themselves invisibile", "To be warm and comfy", "To protect their organs", "To show submission"], 2 ),
//     new DoggyData ("What breed has six toes on each paw?", ["Husky", "Saint Bernard", "Norweigian Lundehund", "Cairn Terrier"], 0 ),
//     new DoggyData ("How many muscles do dogs have in their ears?", ["~3", "~8", "Only 1", "18 or more"], 0 ),
//     new DoggyData ("Which four colors can a dog see", ["Black, white, blue, yellow", "Gray, gray, gray, gray", "Black, green, red, blue", "Yellow, purple, orange, red"], 0 ),
//     new DoggyData ("Which sense are puppies born without?", ["Sight", "Taste", "Hearing", "Smell"], 2 ),
//     new DoggyData ("How many taste buds do dogs have?", ["400", "1,700", "900", "100"], 1 ),
// ];

var area = $('#quiz-space');

var trivia = { 
    correct: 0,
    incorrect: 0,

    start: function() {
        $('#quiz-space').prepend("<h2>Good Luck!</h2>");
        $("#start-trivia").remove();
        
        for (var i = 0; i < doggydata.length; i++) {
        area.append('<h2>' + doggydata[i].question + '</h2');
        for (var a = 0; a < doggydata[i].answer.length; a++) {
        area.append("<input type='radio' name='question: " + i + 
        "'value: '" + doggydata[i].answer[j] + "''>" + doggydata[i].answer[j]);    
        }
    }
    card.append("<button id='done'>Done</button>");
},
    done: function() {
        var selection = area.children("input:checked");
        for (var i = 0; i < selection.length; i++) {
            if ($(selection[i]).val() === doggydata[i].answer) {
              trivia.correct++;
            } else {
                trivia.incorrect++;
            }  
            }
            this.result();
        },
    result: function() {
        area.html('<h2>You did it!</h2>');
        area.append('<h3>Correct Answers: ' + this.correct + '</h3>');
        area.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    }
    };

//click events

$(document).on("click", "#start", function() {
    game.start();
  });
  
  $(document).on("click", "#done", function() {
    game.done();
  });
  