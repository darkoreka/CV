import RecommendationCard from "./components/recommendation-card";

export default function ReviewPage() {
  const reviewText = [
    "I am writing to enthusiastically recommend Darkó Réka for a front-end developer position. As the founder of Tengr.ai, I have had the pleasure of watching Réka grow from a junior developer into a highly capable professional over our time working together. During her tenure, Réka has demonstrated exceptional aptitude in Next.js development and front-end technologies. She has consistently shown remarkable dedication to expanding her technical expertise, taking initiative to learn new skills and staying current with modern web development practices. Her solutions to complex challenges have been thorough and have enhanced our team's overall performance.",
    "It is my pleasure to recommend Reka, an outstanding student with whom I had the privilege of working in various capacities, including as her professor, group project mentor, and license thesis coordinator. Réka demonstrated dedication, technical expertise and collaborative skills during our work on a web-based conference management project. She consistently exhibited strong technical and communication qualities, fostering a productive and creative team environment. I am confident that her talent and work ethic will enable her to excel in future professional endeavors.",
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
