"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import photo from "@/assets/photoBack.jpg";
import presentation from "@/assets/bemutato.jpg";
import bachelor from "@/assets/Bachelor.jpg";
import bachelorPhoto from "@/assets/Bachelor2.jpg";
import mountains from "@/assets/Mountains.jpg";
import slam from "@/assets/slam.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: slam, alt: "slam" },
  { image: photo, alt: "tengrai1" },
  { image: presentation, alt: "presentation" },
  { image: bachelor, alt: "bachelor" },
  { image: bachelorPhoto, alt: "bachelor" },
  { image: mountains, alt: "mountains" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
