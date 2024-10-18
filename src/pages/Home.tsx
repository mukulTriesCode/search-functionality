import React from "react";
import Heading from "../components/Heading";
import BannerImage from "../components/BannerImage";
import Work from "../components/Work";
import CurrentWork from "../components/CurrentWork";
import { currentWorkData, homepage } from "../helpers/data";
import { workData } from "../helpers/data";

const Home: React.FC = () => {
  return (
    <>
      <Heading title={homepage?.title} />
      <BannerImage src={homepage?.bannerImage} />
      <CurrentWork currentWorkData={currentWorkData} />
      <Work workData={workData} />
    </>
  );
};

export default Home;
