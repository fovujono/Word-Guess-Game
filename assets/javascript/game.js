//Creat an array of the Fast Food names
window.onload = function () {

    var fastFoodName = ["tacobell", "kfc", "arbys", "burgerking", "mcdonalds", "wendys", "dairyqueen", "subway", "chickfila"];



    //Choose a random fast food name 
    var fastFoodRandom = Math.floor(Math.random() * fastFoodName.length);
    var incorrectFood = [];
    var correctFood = [];
    var fastFoodChosen = fastFoodName[fastFoodRandom];
    var underScore = [];
    console.log(fastFoodChosen)
    var docUnderScore = document.getElementsByClassName('underscoreParagraph');

    // Create underscore length to replicate length of name
    var generateUnderscore = () => {
        for (var i = 0; i < fastFoodChosen.length; i++) {
            underScore.push('_');
           
        }
        return underScore;
    }
    console.log(generateUnderscore());
    //Recieve users guess
    document.onkeypress = function (event) {
        var guessNumber = event.keyCode;
        var guessWord = String.fromCharCode(guessNumber);
        //if correct 
        if (fastFoodChosen.indexOf(guessWord) > -1) {
            correctFood.push(guessWord);

            underScore[fastFoodChosen.indexOf(guessWord)] = guessWord;
            console.log(underScore);
            docUnderScore[0].innerHTML = underScore.join(' ');
            docRightGuess[0].innerHTML = correctFood.join

            console.log 
        }   
        if (underScore.join('') == fastFoodChosen) {
            alert('You Are Victorious!')

        } else {
            incorrectFood.push(guessWord);
            console.log(incorrectFood);
        }
        };
     docUnderScore[0].innerHTML = generateUnderscore().join(' ')
}