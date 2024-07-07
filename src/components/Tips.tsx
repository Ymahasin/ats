import {
  neutralRankReplies,
  negativeRankReplies,
  positiveRankReplies,
} from "../helpers/common";

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
    );
  } else {
    return (
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
    );
  }
};

export const Tips = ({ values, match }) => {
  const needsTips = match < 90;

  return (
    <div>
      <h3 className="text-lg font-bold pt-2 pb-4">{getTextForMatch(match)}</h3>

      <div className="flex flex-row space-x-4">
        <div>
          {needsTips && values.missingTechWords.length > 0 && (
            <div>
              <p className="text-sm font-bold">
                Try adding these missing tech words:
              </p>
              <ul>
                {values.missingTechWords.map((word: string) => (
                  <li>👉{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {needsTips && values.missingAchievementWords.length > 0 && (
            <div>
              <p className="text-sm font-bold">Include achievements such as:</p>
              <ul>
                {values.missingAchievementWords.map((word: string) => (
                  <li>👉{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {needsTips && values.missingEducation.length > 0 && (
            <div>
              <p className="text-sm font-bold">
                Make sure you included your education:
              </p>
              <ul>
                {values.missingEducation.map((word: string) => (
                  <li>👉{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {needsTips && values.missingSeniorityWords.length > 0 && (
            <div>
              <p className="text-sm font-bold">
                They value words that describe experience, like:
              </p>
              <ul>
                {values.missingSeniorityWords.map((word: string) => (
                  <li>👉{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* // ==== words to increase */}

        <div>
          {needsTips && values.seniorityWordsToIncrease.length > 0 && (
            <div>
              <p className="text-sm font-bold">
                Sweet, you mentioned these but they may want to see more
                examples of it
              </p>
              <ul>
                {values.seniorityWordsToIncrease.map((word: string) => (
                  <li>👉{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
