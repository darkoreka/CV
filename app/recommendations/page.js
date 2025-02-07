import RecommendationCard from "./components/recommendation-card";

export default function ReviewPage() {
  const reviewText = [
    // "This is an amazing platform that has truly revolutionized the way we work with AI and web development!",
    // "Very impressed with the quality of the content and the knowledge shared by the instructors. Highly recommended for anyone interested in learning web development and AI.",
  ];
  const reviewerName = ["Szabó W. Péter", "Sulyok Csaba"];

  const reviewerDescription = [
    {
      text: "Founder of ",
      link: "https://tengr.ai",
      linkText: "Tengr.ai",
    },
    "Babes Bolyai Rector",
  ];

  return (
    <>
      {reviewerName.map((name, index) => (
        <RecommendationCard
          key={index}
          reviewText={reviewText[index]}
          reviewerName={name}
          reviewerDescription={reviewerDescription[index]}
        />
      ))}
    </>
  );
}
