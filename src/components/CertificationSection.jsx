import { examsImgList, hackathonImgList, techImgList } from "../constants";
import AchievementsMarquee from "./AchievementsMarquee";
import TitleHeader from "./TitleHeader";

const CertificationSection = () => {
  return (
    <section id="achievements" className="md:my-20 my-10 relative">
      <div className="md:mt-60 mt-20">
        <TitleHeader title="Achievements" sub="Checkout my amazing" />
        <AchievementsMarquee imageList={hackathonImgList} title="Hackathon" />
        <AchievementsMarquee imageList={examsImgList} title="Exams" />
        <AchievementsMarquee imageList={techImgList} title="Technical" />
      </div>
    </section>
  );
};

export default CertificationSection;
