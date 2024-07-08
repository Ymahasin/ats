import { Values, wordObject } from "../types/Words";
import { CATEGORY } from "./Constants";

/**
 * Calculate weighted sum of values.
 * @param {Array<number>} values - Array of values to be weighted.
 * @param {Array<number>} weights - Array of weights corresponding to each value.
 * @returns {number} Weighted sum of the values.
 */
export const calculateWeightedSum = (
  values: number[],
  weights: number[]
): number => {
  if (values.length !== weights.length) {
    throw new Error("Values and weights arrays must have the same length.");
  }

  let weightedSum = 0;
  for (let i = 0; i < values.length; i++) {
    weightedSum += values[i] * weights[i];
  }
  return weightedSum;
};

export const getMatchScore = (
  resume: Map<string, wordObject>,
  description: Map<string, wordObject>
): [number, object] => {
  // values: [Tech, education, seniority, resume length]
  const values = [0, 0, 0, 0];
  // Tech has the highest weight, followed by education, seniority, and resume length
  const weights = [0.55, 0.2, 0.2, 0.05];

  const rank: Values = {
    missingTechWords: [] as string[],
    techWordsToIncrease: [] as string[],
    missingActionWords: [] as string[],
    actionWordsToIncrease: [] as string[],
    missingAchievementWords: [] as string[],
    achievementWordsToIncrease: [] as string[],
    missingEducation: [] as string[],
    educationWordsToIncrease: [] as string[],
    missingQualityWords: [] as string[],
    qualityWordsToIncrease: [] as string[],
    missingSeniorityWords: [] as string[],
    seniorityWordsToIncrease: [] as string[],
  };

  let hasTech = false;
  for (const [word, obj] of description) {
    if (obj.category === CATEGORY.UNKNOWN) {
      continue;
    }
    if (!resume.has(word)) {
      if (obj.category === CATEGORY.TECH) {
        rank.missingTechWords.push(word);
      } else if (obj.category === CATEGORY.ACTION) {
        rank.missingActionWords.push(word);
      } else if (obj.category === CATEGORY.ACHIEVEMENT) {
        rank.missingAchievementWords.push(word);
      } else if (obj.category === CATEGORY.EDUCATION) {
        rank.missingEducation.push(word);
      } else if (obj.category === CATEGORY.QUALITY_OR_TRAIT) {
        rank.missingQualityWords.push(word);
      } else if (obj.category === CATEGORY.SENIORITY) {
        rank.missingSeniorityWords.push(word);
      }
    } else if (resume.has(word) && (resume.get(word)?.count ?? 0) < obj.count) {
      hasTech = true;
      if (obj.category === CATEGORY.TECH) {
        rank.techWordsToIncrease.push(word);
      } else if (obj.category === CATEGORY.ACTION) {
        rank.actionWordsToIncrease.push(word);
      } else if (obj.category === CATEGORY.ACHIEVEMENT) {
        rank.achievementWordsToIncrease.push(word);
      } else if (obj.category === CATEGORY.EDUCATION) {
        rank.educationWordsToIncrease.push(word);
      } else if (obj.category === CATEGORY.QUALITY_OR_TRAIT) {
        rank.qualityWordsToIncrease.push(word);
      } else if (obj.category === CATEGORY.SENIORITY) {
        rank.seniorityWordsToIncrease.push(word);
      }
    }
  }

  // ======== Values ======
  let techValue = 100;
  let educationValue = 100;
  let seniorityValue = 100;
  let resumeLengthValue = 100;

  // look for missing or low tech words
  const missingTech = rank.missingTechWords.length;
  const lowTech = rank.techWordsToIncrease.length;
  if (missingTech > 0) {
    if (missingTech > 10) {
      techValue = techValue - 60;
    } else if (missingTech > 5) {
      techValue = techValue - 8;
    } else {
      techValue = techValue - 3;
    }
    if (!hasTech) techValue = 0;
  }
  if (lowTech > 0) {
    if (lowTech > 10) {
      techValue = techValue - 5;
    } else {
      techValue = techValue - 2;
    }
  }

  // look for missing or low education words. Education won't have as many mentions
  // so we can add the legnths of the missing and low words to get a score
  const missingEd =
    rank.missingEducation.length + rank.educationWordsToIncrease.length;
  if (missingEd > 0) {
    if (missingEd > 2) {
      educationValue = educationValue - 80;
    } else {
      educationValue = educationValue - 50;
    }
  }

  // look for missing or low seniority words
  const missingSeniority =
    rank.missingSeniorityWords.length + rank.seniorityWordsToIncrease.length;
  if (missingSeniority > 0) {
    if (missingSeniority > 2) {
      seniorityValue = seniorityValue - 90;
    } else {
      seniorityValue = seniorityValue - 75;
    }
  }

  if (resume.size > 1000) {
    resumeLengthValue = resumeLengthValue - 80;
  } else if (resume.size > 800) {
    resumeLengthValue = resumeLengthValue - 50;
  }

  values[0] = techValue;
  values[1] = educationValue;
  values[2] = seniorityValue;
  values[3] = resumeLengthValue;

  const score = calculateWeightedSum(values, weights);
  return [score, rank];
};
