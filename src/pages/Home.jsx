import React from "react";
import Hero from "../components/home/Hero";
import TrustedBrands from "../components/home/TrustedBrands";
import InternshipCategories from "../components/home/InternshipCategories";
import TaskPortalShowcase from "../components/home/TaskPortalShowcase";
import InstructorPortal from "../components/home/InstructorPortal";
import CareerLaunchpad from "../components/home/CareerLaunchpad";
import Testimonials from "../components/home/Testimonials";
import AICareerHub from "../components/home/AICareerHub";
const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <InternshipCategories />
      <TaskPortalShowcase />
      <InstructorPortal />
      <CareerLaunchpad />
      <AICareerHub />
      <Testimonials />
    </>
  );
};

export default Home;
