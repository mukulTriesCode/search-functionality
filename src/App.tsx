import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";
import useMobile from "./hooks/useMobile";
import Music from "./pages/Music";
import WorkPage from "./pages/Work";

function App() {
  const isMobile = useMobile();
  return (
    <main className="font-basheq">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/music" element={<Music />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </BrowserRouter>
      {!isMobile && (
        <AnimatedCursor
          innerSize={16}
          outerSize={32}
          color="235, 94, 40"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            "summary",
          ]}
        />
      )}
    </main>
  );
}

export default App;
