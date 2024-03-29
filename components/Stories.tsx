import StoryCard from "./StoryCard";

const stories = [
  // {
  //   name: "Elon Musk",
  //   src: "https://links.papareact.com/4zn",
  //   profile: "https://links.papareact.com/kxk",
  // },
  // {
  //   name: "Mark Zuckerberg",
  //   src: "https://links.papareact.com/xql",
  //   profile: "https://links.papareact.com/snf",
  // },
  // {
  //   name: "Bill Gates",
  //   src: "https://links.papareact.com/4u4",
  //   profile: "https://links.papareact.com/zvy",
  // },
  // {
  //   name: "Fadhil Radhian",
  //   src: "/1.jpeg",
  //   profile: "/fadh.jpeg",
  // },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto pr-8 sm:pr-0">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
