import classes from "./recommendation-card.module.css";

export default function RecommendationCard({
  reviewText,
  reviewerName,
  reviewerDescription,
}) {
  const renderDescription = (description) => {
    if (typeof description === "string") {
      return description;
    }
    return (
      <>
        {description.text}
        <a href={description.link} target="_blank" rel="noopener noreferrer">
          {description.linkText}
        </a>
      </>
    );
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Recommendation from{" "}
          <span className={classes.highlight}>{reviewerName}</span>
        </h1>
        <p>{renderDescription(reviewerDescription)}</p>
      </header>
      <main className={classes.main}>
        <div className={classes.form}>
          <div className={classes.recommendationText}>{reviewText}</div>
        </div>
      </main>
    </>
  );
}
