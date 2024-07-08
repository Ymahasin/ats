import "./index.css";
import { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { Stats } from "./components/Stats";
import { MatchGauge } from "./components/MatchGauge";
import { getMatchScore } from "./helpers/CalculateMatch";
import { Values, wordObject } from "./types/Words";
import { Tips } from "./components/Tips";
import { Credits } from "./components/Credits";

function App() {
  // contains the resume body as a map of words (that have been cleaned and validated) and their count
  const [resumeBody, setResumeBody] = useState(new Map());
  // contains the job description body as a map of words (that have been cleaned and validated) and their count
  const [descriptionBody, setDescriptionBody] = useState(new Map());
  // contains the match score between the resume and the job description as a percentage
  const [match, setMatch] = useState(0);
  // contains the all the words from the Resume, sorted in descending order of count
  const [topResumeWords, setTopResumeWords] = useState<[string, wordObject][]>(
    []
  );
  // contains the all the words from the Job Description, sorted in descending order of count
  const [topDescriptionWords, setTopDescriptionWords] = useState<
    [string, wordObject][]
  >([]);
  const [values, setValues] = useState<Values>({} as Values);

  useEffect(() => {
    const resume = Array.from(resumeBody).sort(
      (a, b) => b[1].count - a[1].count
    );
    const description = Array.from(descriptionBody).sort(
      (a, b) => b[1].count - a[1].count
    );

    setTopResumeWords(resume);
    setTopDescriptionWords(description);
    const [score, rank] = getMatchScore(resumeBody, descriptionBody);
    setMatch(score);
    setValues(rank as Values);
  }, [resumeBody, descriptionBody]);

  return (
    <div className="">
      <h1 className="flex justify-center w-screen mt-10">The Free ATS</h1>

      <div className="flex flex-row justify-center w-screen mt-10">
        <div className="mr-2">
          <Input title={"Paste Your resume here"} setBody={setResumeBody} />
        </div>
        <div className="ml-2">
          <Input
            title={"Paste the Job Description here"}
            setBody={setDescriptionBody}
          />
        </div>
      </div>

      {resumeBody.size > 0 && descriptionBody.size > 0 && match && (
        <div className="flex justify-center mt-14 mx-14 bg-white text-black rounded-lg">
          <MatchGauge match={match} />
          <Tips values={values} match={match} />
        </div>
      )}
      {resumeBody.size > 0 && descriptionBody.size > 0 && (
        <div className="flex justify-center w-screen mt-14">
          <Stats
            topResumeWords={topResumeWords}
            topDescriptionWords={topDescriptionWords}
          />
        </div>
      )}

      <div className="flex flex-row w-screen absolute bottom-0 justify-center p-4">
        <Credits />
      </div>
    </div>
  );
}

export default App;

/**
 * ideas:
 *  - add button to use last Resume (saved to localstorage)
 *  - Estimate salary based on the job description (look for $ signs)
 *  - add education requirement
 *  - change how we check the score for education from (bs === bachelors) to (education.includes("bs") || education.includes("bachelors"))
 *  - add tips on how to improve the resume
 *    - add a list of missing words. "Try mentioning XXX"
 *    - add a list of low count words. "Try increasing XXX"
 *    - For educaiton. If BS vs Bachelors, tell them that they meet the requirement but may want to change the wording
 *  - add AI to say if they may be a good fit?
 */
