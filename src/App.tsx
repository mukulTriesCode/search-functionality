import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";
import useMobile from "./hooks/useMobile";

function App() {
  const isMobile = useMobile();
  console.log("isMobile", isMobile);
  return (
    <main className="font-basheq">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
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
          ]}
        />
      )}
    </main>
  );
}

export default App;
