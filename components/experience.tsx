export default function Experience() {
  const experience = [
    {
      date: "Dec 2024 - Present",
      role: "Frontend developer",
      place: "Oversight",
      image: "/oversight.png",
    },
    {
      date: "Nov 2024",
      role: "Freelance Developer",
      place: "DeDors Collection",
      image: "/dedors.png",
    },

    {
      date: "Jan 2025",
      role: "Solo Developer",
      place: "Spotiplay",
      image:
        "https://spotiplay-nine.vercel.app/_next/image?url=%2Flogo.png&w=48&q=75",
    },
    {
      date: "Oct 2024",
      role: "Solo Developer",
      place: "Rocket Crypto",
      image: "https://rocket-crypto.vercel.app/Frame.png",
    },

    {
      date: "Sept 2024",
      role: "Solo Developer",
      place: "Synny Blotto",
      image: "https://synny-blotto-yugurt.vercel.app/yogurtPe.png",
    },
  ];
  return (
    <div>
      <h4 className="font-medium text-4xl tracking-tighter">
        My work experience
      </h4>
      <div className="space-y-5 mt-5">
        {experience.map((item, key) => {
          return (
            <div
              key={key}
              className="flex sm:flex-row flex-col gap-1 text-sm sm:text-lg sm:items-center sm:gap-32"
            >
              <h4 className="w-48">{item.date}</h4>
              <div className="flex items-center gap-2 sm:gap-3">
                <h4>
                  <span className="text-darkText">
                    {item.role} &nbsp; &nbsp;
                  </span>{" "}
                  at
                </h4>
                {item.image && (
                  <img
                    src={item.image}
                    alt="logo"
                    className="object-cover h-4 sm:h-6 rounded-sm"
                  />
                )}
                <h4 className="text-darkText">{item.place}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
