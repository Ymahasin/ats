import { useEffect, useState } from "react";
import { Input } from "./Input";
import { Stats } from "./Stats";
import { MatchGauge } from "./MatchGauge";
import { getMatchScore } from "../helpers/CalculateMatch";
import { Values, wordObject } from "../types/Words";
import { Tips } from "./Tips";

export const ATS = () => {
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

  // useEffect(() => {
  //   // get from localstorage
  //   if (
  //     localStorage.getItem("resume") !== null &&
  //     localStorage.getItem("resume") !== undefined
  //   ) {
  //     const resume = JSON.parse(localStorage.getItem("resume")!);
  //     setResumeBody(new Map(resume));
  //   }
  // }, []);

  // useEffect(() => {
  //   // save to localstorage
  //   if (resumeBody.size > 0) {
  //     localStorage.setItem(`resume`, JSON.stringify(Array.from(resumeBody)));
  //     localStorage.getItem("resume");
  //   }
  // }, [resumeBody]);

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
    <div>
      <div className="flex flex-row justify-center mt-10 space-4 flex-wrap">
        <div className="mx-1">
          <Input title={"Paste Your resume here"} setBody={setResumeBody} />
        </div>
        <div className="mx-1">
          <Input
            title={"Paste the Job Description here"}
            setBody={setDescriptionBody}
          />
        </div>
      </div>

      {resumeBody.size > 0 && descriptionBody.size > 0 && match && (
        <div className="flex justify-center mt-14 w-auto mx-4 p-4 bg-white text-black rounded-lg pr-12 flex-wrap">
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
    </div>
  );
};
