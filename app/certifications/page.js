import classes from "./page.module.css";

export default function CertificationsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Professional <span className={classes.highlight}>Certifications</span>
        </h1>
        <p>Continuous learning and skill development</p>
      </header>
      <main className={classes.main}>
        <section className={classes.certification}>
          <h2>Full Stack Development Certifications</h2>
          <ul>
            <li>
              <h3>Spring Boot 3, Spring 6 & Hibernate for Beginners </h3>
              <p>Udemy - 2024</p>
              <a href="https://www.udemy.com/certificate/UC-b31d708d-a605-4079-ae45-5ffd05d92157/">
                udemy.com/certificate/UC-b31d708d-a605-4079-ae45-5ffd05d92157/{" "}
              </a>
              <p>
                Core, Annotations, Java Config, Spring REST, Spring MVC, AOP,
                Hibernate/JPA and Maven
              </p>
            </li>
            <li>
              <h3>
                Full Stack: React and Java Spring Boot - The Developer Guide{" "}
              </h3>
              <p>Udemy - 2024</p>
              <a href="https://www.udemy.com/certificate/UC-349170c2-f889-4efd-8bfe-2ff2fffb1355/">
                udemy.com/certificate/UC-349170c2-f889-4efd-8bfe-2ff2fffb1355/{" "}
              </a>
              <p>
                Develop a Full Stack web application with React front-end and
                Spring Boot back-end, develop a Spring Boot back-end using REST
                APIs and MySQL database, apply security with JWT, OAuth2, OIDC
                and HTTPS/SSL/TLS
              </p>
            </li>
          </ul>
        </section>

        {/* <section className={classes.certification}>
          <h2>Additional Skills</h2>
          <ul>
            <li>
              <h3>Web Accessibility</h3>
              <p>W3C - 2023</p>
              <p>WCAG guidelines, inclusive design principles</p>
            </li>
          </ul>
        </section> */}
      </main>
    </>
  );
}
