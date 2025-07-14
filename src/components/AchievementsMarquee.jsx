const ImageIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center marquee-item w-auto object-contain h-[150px] sm:h-[170px] md:h-[200px]">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="w-auto object-contain h-[150px] sm:h-[170px] md:h-[200px]"
      />
    </div>
  );
};

const AchievementsMarquee = ({ imageList, title }) => {
  return (
    <>
      <h2 className="md:pl-40 text-3xl md:mt-10 mt-10 flex justify-center items-center md:justify-start md:items-start">
        {title}
      </h2>
      <div className="mt-10">
        <div className="gradient-edge"></div>
        <div className="gradient-edge"></div>

        <div className="marquee h-[150px] sm:h-[170px] md:h-[200px]">
          <div className="marquee-box md:gap-12 gap-5">
            {imageList.map((img, index) => (
              <ImageIcon key={index} icon={img} />
            ))}
            {imageList.map((img, index) => (
              <ImageIcon key={index} icon={img} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementsMarquee;
