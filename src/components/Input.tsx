import { useState } from "react";
import { validateInput } from "../helpers/ValidateText";

type InputProps = {
  title: string;
  setBody: (map: Map<string, number>) => void;
  hasBody?: boolean;
  setHasBody?: (hasBody: boolean) => void;
};

export const Input = ({ title, setBody, hasBody, setHasBody }: InputProps) => {
  const [value, setvalue] = useState(title);

  const handleChange = (e: { target: { value: string } }) => {
    setvalue(e.target.value);
    const text = e.target.value.split(" ");
    const map = validateInput(text);
    setBody(map);
  };

  const handleClear = () => {
    setvalue(title);
    setBody(new Map());
    if (localStorage.getItem("resume") !== null) {
      localStorage.removeItem("resume");
      setHasBody(false);
    }
  };

  return (
    <div className="flex flex-col">
      <textarea
        className="p-4 w-40 md:w-auto"
        rows={16}
        cols={40}
        value={hasBody ? "Using your last resume 👍" : value}
        onChange={handleChange}
        // @ts-expect-error next line
        onClick={(e) => e.target.select()}
        tabIndex={1}
      />
      <button className="mt-1 bg-blue-800" onClick={handleClear} tabIndex={0}>
        Clear
      </button>
    </div>
  );
};
