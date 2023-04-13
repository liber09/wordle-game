import { describe, expect, test } from "@jest/globals";
import { checkGuess } from "../src/checkGuess.js";

/*
    My test stategy is to test all possible outcomes that 
    i can think of and in the tests below I test for too short
    words, too long words. I also test do that there are no spaces
    or special characters and that the function can return all
    three types of results (correct, incorrect and misplaced).
    I also check so that case does not matter in the test for
    correct word. This is done by unit testing since there is no
    connections to anything else there is nothing to integration
    test or end 2 end test. There is no need to isolate anything
    either since there is no dependencies so no need to mock anything.
*/
const correctWord = "above"; 
describe("Test checkGuess", () => {
	test("user has entered too few letters", async () => {
        const userGuess = "hi";
		const result = await checkGuess(userGuess,correctWord);
        //Check so that we get an error message
		expect(result).toEqual("Wrong number of letters in guess");
	});
    test("user has entered too many letters", async () => {
        const userGuess = "definition";
		const result = await checkGuess(userGuess,correctWord);
        //Check so that we get an error message
		expect(result).toEqual("Wrong number of letters in guess");
	});
    test("user has entered a space in the word", async () => {
        const userGuess = "for ge";
        const rightWord = "forget"
		const result = await checkGuess(userGuess,rightWord);
        //Check so that we get an error message
		expect(result).toEqual("Wrong input, special characters or space is not allowed");
	});
    test("user has entered a special character in the word", async () => {
        const userGuess = "for!ge";
        const rightWord = "forget"
		const result = await checkGuess(userGuess,rightWord);
        //Check so that we get an error message
		expect(result).toEqual("Wrong input, special characters or space is not allowed");
	});
    test("user has entered a correct word", async () => {
        const userGuess = "ABOVE";
		const result = await checkGuess(userGuess,correctWord);
        //Check so all array positions is correct
		for(let i = 0; i<result.length;i++){
            expect(result[0]).toEqual({letter:"a",result:"correct"});
            expect(result[1]).toEqual({letter:"b",result:"correct"});
            expect(result[2]).toEqual({letter:"o",result:"correct"});
            expect(result[3]).toEqual({letter:"v",result:"correct"});
            expect(result[4]).toEqual({letter:"e",result:"correct"});
        }
	});
    test("user has entered an incorrect word with no correct or misplaced letters", async () => {
        const userGuess = "which";
		const result = await checkGuess(userGuess,correctWord);
        //Check so all array positions is incorrect
		for(let i = 0; i<result.length;i++){
            expect(result[0]).toEqual({letter:"w",result:"incorrect"});
            expect(result[1]).toEqual({letter:"h",result:"incorrect"});
            expect(result[2]).toEqual({letter:"i",result:"incorrect"});
            expect(result[3]).toEqual({letter:"c",result:"incorrect"});
            expect(result[4]).toEqual({letter:"h",result:"incorrect"});
        }
	});
    test("user has entered an incorrect word but with misplaced letter", async () => {
        const userGuess = "their";
		const result = await checkGuess(userGuess,correctWord);
        /*
            Check so all array positions is incorrect except the 
            third which should be misplaced
        */
		for(let i = 0; i<result.length;i++){
            expect(result[0]).toEqual({letter:"t",result:"incorrect"});
            expect(result[1]).toEqual({letter:"h",result:"incorrect"});
            expect(result[2]).toEqual({letter:"e",result:"misplaced"});
            expect(result[3]).toEqual({letter:"i",result:"incorrect"});
            expect(result[4]).toEqual({letter:"r",result:"incorrect"});
        }
	});
    test("user has entered an incorrect word but with correct letter", async () => {
        const userGuess = "while";
		const result = await checkGuess(userGuess,correctWord);
        /*
            Check so all array positions is incorrect except the 
            last which should be correct
        */
		for(let i = 0; i<result.length;i++){
            expect(result[0]).toEqual({letter:"w",result:"incorrect"});
            expect(result[1]).toEqual({letter:"h",result:"incorrect"});
            expect(result[2]).toEqual({letter:"i",result:"incorrect"});
            expect(result[3]).toEqual({letter:"l",result:"incorrect"});
            expect(result[4]).toEqual({letter:"e",result:"correct"});
        }
	});
    test("user has entered an incorrect word but with both correct and missplaced letters", async () => {
        const userGuess = "after";
		const result = await checkGuess(userGuess,correctWord);
        /*
            Check so all array positions is incorrect except the 
            first which should be correct and the fourth which
            should be misplaced
        */
		for(let i = 0; i<result.length;i++){
            expect(result[0]).toEqual({letter:"a",result:"correct"});
            expect(result[1]).toEqual({letter:"f",result:"incorrect"});
            expect(result[2]).toEqual({letter:"t",result:"incorrect"});
            expect(result[3]).toEqual({letter:"e",result:"misplaced"});
            expect(result[4]).toEqual({letter:"r",result:"incorrect"});
        }
	})
});