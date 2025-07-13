import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map((ability, idx) => {
          const Icon = ability.icon;
          return (
            <div
              key={idx}
              className="card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <div className={`flex ${ability.iconColor}`}>
                <Icon className="size-7" />
              </div>
              <h3 className="text-2xl font-semibold mt-2 text-white">
                {ability.title}
              </h3>
              <p className="text-lg text-white-50">{ability.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
