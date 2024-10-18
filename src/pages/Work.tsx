import React from "react";
import Skills from "../components/Skills";
import BannerImage from "../components/BannerImage";
import Heading from "../components/Heading";
import { skillData, workPage } from "../helpers/data";

const WorkPage: React.FC = () => {
  return (
    <>
      <Heading title={workPage?.title} />
      <BannerImage src={workPage?.bannerImage} />
      <Skills skillData={skillData} />
    </>
  );
};

export default WorkPage;
