import { Helmet } from "react-helmet-async";
import BannerSection from "../../Banner/BannerSection";
import AboutMe from "../../AboutMe/AboutMe";
import MySkill from "../../MySkill/MySkill";
// import ClientFeedback from "../../ClientFeedback/ClientFeedback";
import Projects from "../../Projects/Projects";
import Contact from "../../Contact/Contact";
import BuildTogether from "../../BuildTogether/BuildTogether";
import FAQ from "../../FAQ/FAQ";
import Education from "../../Education/Education";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio | Home</title>
      </Helmet>

      {/*  */}
      <BannerSection></BannerSection>
      <AboutMe></AboutMe>
      <MySkill></MySkill>
      <Projects></Projects>
      <Education></Education>
      {/* <ClientFeedback></ClientFeedback> */}
      <FAQ></FAQ>
      <Contact></Contact>
      <BuildTogether></BuildTogether>
    </div>
  );
};

export default Home;
