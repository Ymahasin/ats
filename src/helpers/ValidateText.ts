import { CATEGORY } from "./Constants";
import {
  achievementWords,
  actionWords,
  educationWords,
  qualities_or_traitWords,
  seniorityWords,
  techWords,
  wordsToIgnore,
} from "./common";

const isProbablyAllNumbers = (word: string) => {
  return word.replace(/[^0-9]/g, "").length > 1 && word !== "a11y";
};

const getWordCategory = (word: string) => {
  if (techWords.has(word)) {
    return CATEGORY.TECH;
  } else if (actionWords.has(word)) {
    return CATEGORY.ACTION;
  } else if (qualities_or_traitWords.has(word)) {
    return CATEGORY.QUALITY_OR_TRAIT;
  } else if (seniorityWords.has(word)) {
    return CATEGORY.SENIORITY;
  } else if (achievementWords.has(word)) {
    return CATEGORY.ACHIEVEMENT;
  } else if (educationWords.has(word)) {
    return CATEGORY.EDUCATION;
  } else {
    return CATEGORY.UNKNOWN;
  }
};

const stripNewlines = (text: string) => {
  const cleanedText = [];
  let tempWord = text;
  while (tempWord.includes("\n")) {
    const index = tempWord.indexOf("\n");
    const word = tempWord.substring(0, index);
    cleanedText.push(word.replace(/[.,;()]/g, "").toLowerCase());
    tempWord = tempWord.substring(index + 1);
  }
  // don't forget to add the last word after stripping newlines
  cleanedText.push(tempWord.replace(/[.,;()]/g, "").toLowerCase());
  return cleanedText;
};

/**
 * Helps clean the text by removing special characters and newlines, then converts to lowercase
 * @param text
 * @returns
 */
const cleanText = (text: string[]) => {
  const cleanedText = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i].includes("\n")) {
      cleanedText.push(...stripNewlines(text[i]));
    } else {
      cleanedText.push(text[i].replace(/[.,;()]/g, "").toLowerCase());
    }
  }
  return cleanedText;
};

export const validateInput = (text: string[]) => {
  const map = new Map();
  const cleanedText = cleanText(text);

  for (let i = 0; i < cleanedText.length; i++) {
    let word = cleanedText[i];
    let hasIncremented = false;

    // catch hyphenated words
    if (
      (cleanedText[i] === "front" && cleanedText[i + 1] === "end") ||
      (cleanedText[i] === "back" && cleanedText[i + 1] === "end")
    ) {
      const [increment, fullword] = checkIfEngineerOrDeveloper(
        cleanedText.slice(i, i + 4)
      );
      word = word + "end" + fullword;
      i = i + increment + 1;
      hasIncremented = true;
    }

    if (
      (!hasIncremented &&
        cleanedText[i] === "back" &&
        cleanedText[i + 2] === "end") ||
      (cleanedText[i] === "front" && cleanedText[i + 2] === "end")
    ) {
      const [increment, fullword] = checkIfEngineerOrDeveloper(
        cleanedText.slice(i, i + 4)
      );
      word = word + fullword;
      i = i + increment + 1;
      hasIncremented = true;
    }

    if (
      !hasIncremented &&
      (cleanedText[i] === "frontend" ||
        cleanedText[i] === "front-end" ||
        cleanedText[i] === "backend" ||
        cleanedText[i] === "back-end")
    ) {
      // check if full stack enginer or developer
      const [increment, fullword] = checkIfEngineerOrDeveloper(
        cleanedText.slice(i, i + 4)
      );
      word = word + fullword;
      i = i + increment;
      hasIncremented = true;
    }

    if (!hasIncremented && cleanedText[i + 1] === "stack") {
      const [increment, fullword] = checkIfEngineerOrDeveloper(
        cleanedText.slice(i, i + 4)
      );
      word = word + fullword;
      i = i + increment + 1;
      hasIncremented = true;
    }
    if (
      !hasIncremented &&
      (cleanedText[i] === "fullstack" || cleanedText[i] === "full-stack")
    ) {
      // check if full stack enginer or developer
      const [increment, fullword] = checkIfEngineerOrDeveloper(
        cleanedText.slice(i, i + 4)
      );
      word = word + fullword;
      i = i + increment;
      hasIncremented = true;
    }

    // remove dates as they often appear more than once
    if (isProbablyAllNumbers(word)) {
      continue;
    }

    // and now we actually update the map with a word and a count
    if (!wordsToIgnore.has(word) && word.length > 1) {
      if (map.has(word)) {
        const wordToUpdate = map.get(word);
        wordToUpdate.count = wordToUpdate.count + 1;
        map.set(word, wordToUpdate);
      } else {
        const category = getWordCategory(word);
        map.set(word, { count: 1, category: category });
      }
    }
  }
  return map;
};

/**
 *
 * @param text[] array of words that may contain engineer or developer
 * @returns array of the amount increment to increment index and the word
 */
const checkIfEngineerOrDeveloper = (
  text: string[]
): [number, string | undefined] => {
  let increment = 0;
  let word = "";

  if (text.includes("software") && text.includes("engineer")) {
    word = " software engineer";
    increment = 2;
  } else if (text.includes("software") && text.includes("developer")) {
    word = " software developer";
    increment = 2;
  } else if (text.includes("engineer")) {
    word = " engineer";
    increment = 1;
  } else if (text.includes("developer")) {
    word = " developer";
    increment = 1;
  }

  return [increment, word];
};
