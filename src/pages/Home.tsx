import React from "react";
import Heading from "../components/Heading";
import BannerImage from "../components/BannerImage";
import Work from "../components/Work";
import CurrentWork from "../components/CurrentWork";

const data = {
  title: "Enter the <u>Realm</u><br />Of Frontend",
  bannerImage:
    "https://images.unsplash.com/photo-1598559411608-e6dddb68e5f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const Home: React.FC = () => {
  return (
    <>
      <Heading title={data?.title} />
      <BannerImage src={data?.bannerImage} />
      <CurrentWork />
      <Work />
    </>
  );
};

export default Home;
