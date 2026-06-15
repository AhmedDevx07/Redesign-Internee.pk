import React from "react";
import StudentAmbassadorHero from "../components/student/StudentAmbassadorHero";
import AmbassadorBenefits from "../components/student/AmbassadorBenefits";
import AmbassadorPerksGrid from "../components/student/AmbassadorPerksGrid";
import AmbassadorImpactStats from "../components/student/AmbassadorImpactStats";
import FAQ from "../components/FAQ";
import AmbassadorResponsibilities from "../components/student/AmbassadorResponsibilities";
import HowItWorks from "../components/HowItWorks";

const Ambassador = () => {
  return (
    <>
      <StudentAmbassadorHero />
      <AmbassadorBenefits />
      <AmbassadorPerksGrid />
      <AmbassadorImpactStats />
      <AmbassadorResponsibilities />
      <HowItWorks />
      <FAQ />
    </>
  );
};

export default Ambassador;
