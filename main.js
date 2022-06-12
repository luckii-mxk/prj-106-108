
function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/25rhzVdxN/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

dog = 0;
cat = 0;
cow = 0;
lion = 0;



function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        
        console.log(results)

        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        
        if (results[0].label == "Barking") {

            dog = dog + 1;

            document.getElementById("img").src = "puppy.png"

        } else if (results[0].label == "Meowing") {

            cat = cat + 1; 

            document.getElementById("img").src = "black cat.jpeg"

        }else if (results[0].label == "Mooing") {

            cow = cow + 1

            document.getElementById("img").src = "cow.png"

        } else {

            lion = lion + 1

            document.getElementById("img").src = "lion.png"

        }


        document.getElementById("sound_count").innerHTML = "Detected Dog : " + dog + " / Detected Cat : " + cat + " / Detected Cow : " + cow

    }
}