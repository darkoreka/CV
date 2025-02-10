import Image from "next/image";
import Link from "next/link";
import tengrai from "@/assets/icons/tengrai.svg";
import bolyai from "@/assets/icons/bolyai.jpg";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function ProjectsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Professional <span className={classes.highlight}>Experience</span>
        </h1>
        <p>Projects and companies I&apos;ve contributed to</p>
      </header>
      <main className={classes.main}>
        <ul className={classes.perks}>
          <li>
            <Image src={tengrai} alt="Tengrai AI Platform" />
            <h3>Tengrai.com</h3>
            <p>Frontend Developer at Tengr.ai</p>
            <p>Contributed to UI development and feature implementation</p>
            <Link
              href="https://tengr.ai/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Company →
            </Link>
          </li>
          <li>
            <Image src={bolyai} alt="SConES Project" />
            <h3>SConES - Student Conference Management System</h3>
            <p>Diploma Thesis Project</p>
            <p>
              A comprehensive web application for managing Transylvanian student
              conferences. Features include student registration, essay
              submissions, teacher approvals, and conference management. Built
              with a three-tier architecture: central server, web application,
              and database. The backend was developed using Spring Boot, and the
              frontend was built with React. The design was created in Figma,
              and the database used was MySQL, with MinIO for document storage.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
