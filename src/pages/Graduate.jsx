import React from "react";
import GraduateHero from "../components/graduate/GraduateHero";
import WhyChooseGrad from "../components/graduate/WhyChooseGrad";
import ExploreCategories from "../components/graduate/ExploreCategories";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";

const Graduate = () => {
  return (
    <>
      <GraduateHero />
      <WhyChooseGrad />
      <ExploreCategories />
      <HowItWorks />
      <FAQ />
    </>
  );
};

export default Graduate;
