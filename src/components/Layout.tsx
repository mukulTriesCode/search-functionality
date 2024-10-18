import React from "react";
import Header from "./Header";
import AnimatedCursor from "react-animated-cursor";
import useMobile from "../hooks/useMobile";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout: React.FC = () => {
  const isMobile = useMobile();

  return (
    <main className="font-basheq min-h-screen h-full relative text-light">
      <div className="min-h-screen w-full h-full bg-dark absolute left-0 top-0 -z-10">
        <div
          className="min-h-screen h-full w-full opacity-60"
          style={{ backgroundImage: "url('./noise.svg')" }}
        ></div>
      </div>
      <Header />
      <Outlet />
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
      <Footer />
    </main>
  );
};

export default Layout;
