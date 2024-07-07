import { wordObject } from "../types/Words";

type StatsProps = {
  topResumeWords: [string, wordObject][];
  topDescriptionWords: [string, wordObject][];
};
export const Stats = ({ topResumeWords, topDescriptionWords }: StatsProps) => {
  const topWords = () => {
    return (
      <div className="flex flex-col mt-4 w-96">
        <h2>Top mentioned words</h2>

        <div className="flex flex-row justify-between mt-4">
          <ul className="w-48">
            <h2 className="font-bold pb-1">Resume</h2>
            {topResumeWords.slice(0, 10).map((word, i) => (
              <li key={i} className="flex items-center mt-1">
                {word[0]}: {word[1].count}
              </li>
            ))}
          </ul>

          <ul className="w-48">
            <h2 className="font-bold pb-1">Job Description</h2>
            {topDescriptionWords.slice(0, 10).map((word, i) => (
              <li key={i} className="flex items-center mt-1">
                {word[0]}: {word[1].count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const topTechWords = () => {
    return (
      <div className="flex flex-col mt-4 w-96">
        <h2>Top tech words</h2>

        <div className="flex flex-row justify-between mt-4">
          <ul>
            <h2 className="font-bold pb-1">Resume</h2>
            {topResumeWords
              .filter((word) => word[1].category === "tech")
              .map((word, i) => (
                <li key={i}>
                  {word[0]}: {word[1].count}
                </li>
              ))}
          </ul>
          <ul>
            <h2 className="font-bold pb-1">Job Description</h2>
            {topDescriptionWords
              .filter((word) => word[1].category === "tech")
              .map((word, i) => (
                <li key={i}>
                  {word[0]}: {word[1].count}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <p className="font-xs">Skill Comparison</p>
      <br />
      {topWords()}
      <br />
      <br />
      <br />
      {topTechWords()}
    </div>
  );
};
