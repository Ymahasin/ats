import {
  neutralRankReplies,
  negativeRankReplies,
  positiveRankReplies,
} from "../helpers/common";
import { Values } from "../types/Words";

const getTextForMatch = (match: number) => {
  const negEmojis = ["😬", "🫠", "🥶", "🫣"];
  const neutralEmojis = ["😐", "🤔", "🤨"];
  const posEmojis = ["😊", "🥳", "🎉", "😎", "🤠", "🫶", "🤌", "💪"];
  if (match > 90) {
    return (
      <div className="flex flex-row text-4xl mt-14">
        <p className="mr-2">
          {posEmojis[Math.floor(Math.random() * posEmojis.length)]}{" "}
        </p>
        <p>
          {
            positiveRankReplies[
              Math.floor(Math.random() * positiveRankReplies.length)
            ]
          }
        </p>
      </div>
    );
  } else if (match > 60) {
    return (
      <>
        <div className="flex flex-row">
          <p className="mr-2">
            {neutralEmojis[Math.floor(Math.random() * neutralEmojis.length)]}
          </p>
          <p>
            {
              neutralRankReplies[
                Math.floor(Math.random() * neutralRankReplies.length)
              ]
            }
          </p>
        </div>
        <p className="font-normal text-sm pt-3 pr-14">
          Note: some resume tools fail to match subtle differences (ex. frontend
          & front end, BS & Bachelor's). Try to match the job description as
          closely as possible.
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className="flex flex-row">
          <p className="mr-2">
            {negEmojis[Math.floor(Math.random() * negEmojis.length)]}
          </p>
          <p>
            {
              negativeRankReplies[
                Math.floor(Math.random() * negativeRankReplies.length)
              ]
            }
          </p>
        </div>
        <p className="font-normal text-sm pt-3 pr-14">
          Note: some resume tools fail to match subtle differences (ex. frontend
          & front end, BS & Bachelor's). Try to match the job description as
          closely as possible.
        </p>
      </>
    );
  }
};

type TipsProps = {
  values: Values;
  match: number;
};
export const Tips = ({ values, match }: TipsProps) => {
  const needsTips = match < 90;

  return (
    <div>
      <h3 className="text-lg font-bold pt-2 pb-4">{getTextForMatch(match)}</h3>

      <div className="flex flex-row pt-4 flex-wrap">
        {needsTips && values.missingTitles.length > 0 && (
          <div className="pr-4">
            <p className="text-sm font-bold">Include relavent titles:</p>
            <ul>
              {values.missingTitles.map((word: string, index: number) => (
                <li key={index}>👉 {word}</li>
              ))}
            </ul>
          </div>
        )}

        {needsTips && values.missingTechWords.length > 0 && (
          <div className="pr-4">
            <p className="text-sm font-bold">Add missing Tech Stack:</p>
            <ul>
              {values.missingTechWords.map((word: string, index: number) => (
                <li key={index}>👉 {word}</li>
              ))}
            </ul>
          </div>
        )}

        {needsTips && values.missingAchievementWords.length > 0 && (
          <div className="pr-4">
            <p className="text-sm font-bold">Include achievements such as:</p>
            <ul>
              {values.missingAchievementWords.map(
                (word: string, index: number) => (
                  <li key={index}>👉 {word}</li>
                )
              )}
            </ul>
          </div>
        )}

        {needsTips && values.missingEducation.length > 0 && (
          <div className="pr-4">
            <p className="text-sm font-bold">Highlight your education:</p>
            <ul>
              {values.missingEducation.map((word: string, index: number) => (
                <li key={index}>👉 {word}</li>
              ))}
            </ul>
          </div>
        )}

        {needsTips && values.missingSeniorityWords.length > 0 && (
          <div className="pr-4">
            <p className="text-sm font-bold">Show off your experience:</p>
            <ul>
              {values.missingSeniorityWords.map(
                (word: string, index: number) => (
                  <li key={index}>👉 {word}</li>
                )
              )}
            </ul>
          </div>
        )}

        {/* // ==== words to increase */}

        {needsTips && values.seniorityWordsToIncrease.length > 0 && (
          <div className="pr-4">
            <p className="text-sm font-bold">They want to see more:</p>
            <ul>
              {values.seniorityWordsToIncrease.map(
                (word: string, index: number) => (
                  <li key={index}>👉 {word}</li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
