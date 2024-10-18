import React from "react";
import Skills from "../components/Skills";
import BannerImage from "../components/BannerImage";
import Heading from "../components/Heading";

const data = {
  title: "<u>Skills</u> and<br />Work",
  bannerImage:
    "https://images.unsplash.com/photo-1599680756838-307f6d3c4ada?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const WorkPage: React.FC = () => {
  return (
    <>
      <Heading title={data?.title} />
      <BannerImage src={data?.bannerImage} />
      <Skills />
    </>
  );
};

export default WorkPage;
