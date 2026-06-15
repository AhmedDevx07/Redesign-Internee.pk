import React from "react";
import StartupJourneyHero from "../components/startup/StartupJourneyHero";
import StartupAchievements from "../components/startup/StartupAchievements";
import StartupValues from "../components/startup/StartupValues";
import StartupImpact from "../components/startup/StartupImpact";

const StartupJourney = () => {
  return (
    <>
      <StartupJourneyHero />
      <StartupAchievements />
      <StartupValues />
      <StartupImpact />
    </>
  );
};

export default StartupJourney;
