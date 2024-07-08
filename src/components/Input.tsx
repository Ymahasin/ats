import { useState } from "react";
import { validateInput } from "../helpers/ValidateText";

type InputProps = {
  title: string;
  setBody: (map: Map<string, number>) => void;
};
export const Input = ({ title, setBody }: InputProps) => {
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
  };

  return (
    <div className="flex flex-col">
      <textarea
        className="p-4 w-40 md:w-auto"
        rows={16}
        cols={40}
        value={value}
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
