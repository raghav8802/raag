import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto">
      {abilities.map(({ imgPath, title, desc }, index) => (
        <div
          key={title}
          className={`flex items-center gap-12 mb-20 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {/* Text content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
              Raag Publishing
            </div>
            <h3 className="text-white text-5xl font-bold uppercase">{title}</h3>
            <p className="text-white text-xl">{desc}</p>
            <p className="text-gray-300 text-lg">
              Focus on creating amazing music and leave the hassle of collecting royalties to RAAG .
            </p>
            <button className="bg-purple-400 text-black px-8 py-4 rounded-lg font-semibold text-lg w-fit">
              Join Waitlist
            </button>
          </div>
          
          {/* Visual element */}
          <div className="flex-1 flex justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <img src={imgPath} alt={title} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;