import "./index.css";
import { Credits } from "./components/Credits";
import { ATS } from "./components/ATS";

function App() {
  return (
    <div className="w-screen">
      <header className="flex justify-center mt-10">
        <h1 className="text-xl font-bold">Web Dev's Resume Scanner</h1>
      </header>

      <ATS />

      <footer className="flex flex-row h-8 mt-12 bottom-0 justify-center">
        <Credits />
      </footer>
    </div>
  );
}

export default App;
