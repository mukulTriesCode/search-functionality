import React, { Suspense } from "react";
import Heading from "../components/Heading";
import BannerImage from "../components/BannerImage";
import Work from "../components/Work";
import { currentWorkData, homepage } from "../helpers/data";
import { workData } from "../helpers/data";
import { lazy } from "react";

const CurrentWork = lazy(() => import("../components/CurrentWork"));

const Home: React.FC = () => {
  return (
    <>
      <Heading title={homepage?.title} />
      <BannerImage src={homepage?.bannerImage} />
      <Suspense fallback={<></>}>
        <CurrentWork currentWorkData={currentWorkData} />
      </Suspense>
      <Work workData={workData} />
    </>
  );
};

export default Home;
