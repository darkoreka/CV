import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Hi, I&apos;m a Fullstack Developer</h1>
            <p>
              Passionate about building engaging and user-friendly web
              applications.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/contact">Contact</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/recommendations">Recommendations</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>About Me</h2>
          <p>
            I&apos;m a frontend developer with experience in Next.js, React,
            JavaScript, CSS, Tailwind and HTML. Currently expanding my knowledge
            in fullstack development and AI-driven web applications.
          </p>
          <p>
            Passionate about creating seamless and visually appealing user
            interfaces that enhance user experiences.
          </p>
        </section>

        <section className={classes.section}>
          <h2>
            Why Work With <Link href="/contact">Me?</Link>
          </h2>
          <p>
            I have a strong foundation in modern web technologies and a keen eye
            for design.
          </p>
          <p>
            Constantly learning and improving, I bring dedication,
            problem-solving skills, and a collaborative mindset to every
            project.
          </p>
        </section>
      </main>
    </>
  );
}
