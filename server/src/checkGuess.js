import { checkResult } from "../data/checkResult";
/*
    Function that checks the users guess and returns an array 
    with information about each guessed letter if it is
    correct, incorrect or misplaced
*/
export async function checkGuess(guessWord, correctWord){
    let resultArray = new Array(guessWord.length);
    let letterResult = "";
    for(let i = 0;i<correctWord.length;i++){
        //Check that user guessed correct number of letters
        if(guessWord.length != correctWord.length){
            //Return message if too many or too few letters
            return "Wrong number of letters in guess";
        }
        //Check so that user has not entered a space or any special characters
        if(checkForSpecialCharsOfSpace(guessWord)){
            return "Wrong input, special characters or space is not allowed"
        }

        let positionOfLetter = correctWord.indexOf(guessWord[i].toLowerCase())
        //Check if guessed letter is in the word
        if(positionOfLetter === -1){
            //Letter is not in the word
            letterResult = "incorrect";
        }else{
            //Letter is in the word, check if it is correctly placed
            if(guessWord[i].toLowerCase() === correctWord[i]){
                //Letter is in the word and correctly placed
                letterResult = "correct";
            }else{
                //Letter is in the word but not at the correct position
                letterResult = "misplaced";
            }
        }
        const result = new checkResult(guessWord[i].toLowerCase(),letterResult);
        resultArray[i] = result;
    }   
    return resultArray;
}

function checkForSpecialCharsOfSpace(input) {
    const regex = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/;

    if (input.match(regex)) {
        return true;
    }
    return false;
}