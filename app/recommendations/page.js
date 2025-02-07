import RecommendationCard from "./components/recommendation-card";

export default function ReviewPage() {
  const reviewText = [
    "I am writing to enthusiastically recommend Darkó Réka for a front-end developer position. As the founder of Tengr.ai, I have had the pleasure of watching Réka grow from a junior developer into a highly capable professional over our time working together. During her tenure, Réka has demonstrated exceptional aptitude in Next.js development and front-end technologies. She has consistently shown remarkable dedication to expanding her technical expertise, taking initiative to learn new skills and staying current with modern web development practices. Her solutions to complex challenges have been thorough and have enhanced our team's overall performance.",
  ];
  const reviewerName = ["Szabó W. Péter", "Dr. Sulyok Csaba"];

  const reviewerDescription = [
    {
      text: "Founder of ",
      link: "https://tengr.ai",
      linkText: "Tengr.ai",
    },
    "Babeș Bolyai University Lecturer",
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
