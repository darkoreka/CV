import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./page.module.css";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Get in <span className={classes.highlight}>Touch</span>
        </h1>
        <p>Feel free to reach out for collaborations or any inquiries!</p>
      </header>
      <main className={classes.main}>
        <h2>Contact Information</h2>

        <ul className={classes.perks}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>
              {" "}
              Email:{" "}
              <a href="mailto:rekadarko@gmail.com"> rekadarko@gmail.com </a>
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <p>Phone: +40 742 209 480</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Location: Romania, Cluj Napoca</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
            <p>
              Facebook:{" "}
              <a href="https://www.facebook.com/rekakatalin.darko">
                Darkó Réka
              </a>
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
            <p>
              Instagram:{" "}
              <a href="https://www.instagram.com/darkoreka/">
                darkoreka
              </a>
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}
