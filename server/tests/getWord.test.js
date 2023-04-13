import { describe, expect, test } from "@jest/globals";
import { getWord } from "../src/getWord.js";

/*
	Test strategy.

	There are no depencencies to other parts of application
	do there is no need to mock anything.
	
	I do only unittesting since there are no integrations there
	is no need for integration testing or end 2 end testing.
	
	The tests bellow cover what i think they need to cover for 
	full test coverage. I test so I can get a random word back.
	I test so that I can get a word back even if random function
	has only one word to randomize. I test so I get error when
	there are no words to return. I test for both allowing and
	not allowing same character to appear more than once.
	
*/

const words = ["above","after","number","hi","letters","yo","then","this","go","those","more",];
describe("Test getWord", () => {
	/*
		Test so that we get random word of correct length back
		when list contains different length words.
	*/
	test("get a random word back with the length of two when there are more than one word in list", async () => {
		expect(["hi","yo","go"]).toContain(await getWord(words,2,true));
	});
	/*
		Test so that random function does not crash when there is only
		one word in list.
	*/
	test("get a word back when there are exactly one word in list", async () => {
        const wordList = ["number"];
		expect(wordList).toContain(await getWord(wordList,6,false));
	});
	/*
		Test for when we cannot match any word, the list does
		not contain any 10 letter words. 
	*/
	test("get error message when no words match criterias", async () => {
        const result = await getWord(words,10,true);
		expect(result).toBe("No words match those criterias")
	});
	/*
		Test specifically for not allowing same character 
		more than once. This wordlist contains words with
		same character more than once and words with only
		unique character words so this should test the filter.
	*/
	test("test allow letter only once", async () => {
		const wordList = ["monkey","accept","admire","access","almond","appear","affect","bamboo","choose"]
		expect(["monkey","admire","almond"]).toContain(await getWord(wordList,6,false));
	});
	/*
		Test specifically for allowing same character more
		than once. This wordlist contains only words with
		same character more than once.
	*/
	test("test allow letter more than once", async () => {
		const wordList = ["cannot","accept","follow","access","appear","affect","bamboo","choose"]
		expect(wordList).toContain(await getWord(wordList,6,true));
	});
});