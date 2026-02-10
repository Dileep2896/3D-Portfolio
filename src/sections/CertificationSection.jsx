import { examsImgList, hackathonImgList, techImgList } from "../constants";
import AchievementsMarquee from "../components/AchievementsMarquee";
import TitleHeader from "../components/TitleHeader";

const CertificationSection = () => {
  return (
    <section id="achievements" className="md:my-20 my-0 relative">
      <div className="md:mt-20 mt-5">
        <TitleHeader title="Achievements" sub="Checkout my amazing" />
        <AchievementsMarquee imageList={hackathonImgList} title="Hackathon" />
        <AchievementsMarquee imageList={examsImgList} title="Exams" />
        <AchievementsMarquee imageList={techImgList} title="Technical" />
      </div>
    </section>
  );
};

export default CertificationSection;
