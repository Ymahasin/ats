import "./index.css";
import { Credits } from "./components/Credits";
import { ATS } from "./components/ATS";

function App() {
  return (
    <div className="w-screen">
      <header className="flex justify-center mt-10">
        Web Dev's Resume Scanner
      </header>

      <ATS />

      <footer className="flex flex-row h-8 mt-12 bottom-0 justify-center">
        <Credits />
      </footer>
    </div>
  );
}

export default App;

// pickup here: add Titles. So we can choose between a tech stack word and a job title
