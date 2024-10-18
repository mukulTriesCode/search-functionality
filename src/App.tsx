import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import WorkPage from "./pages/Work";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/music" element={<Music />} />
            <Route path="*" element={<>404</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
