import React from "react";
import Heading from "../components/Heading";
import BannerImage from "../components/BannerImage";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CurrentWork from "../components/CurrentWork";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen h-full relative">
      <div className="min-h-screen w-full h-full bg-dark absolute left-0 top-0 -z-10">
        <div
          className="min-h-screen h-full w-full opacity-60"
          style={{ backgroundImage: "url('./noise.svg')" }}
        ></div>
      </div>
      <Header />
      <Heading />
      <BannerImage />
      <CurrentWork />
      <Work />
      <Footer />
    </main>
  );
};

export default Home;
