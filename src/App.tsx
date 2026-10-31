import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const projectsTrackRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    projectsTrackRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      number: "01",
      type: "Backend Development",
      title: "Student Management REST API",
      description:
        "A Java backend project for managing student records through REST API endpoints and a relational database.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST API"],
      url: "https://github.com/AtulmauryaDev/student-management-rest-api",
    },
    {
      number: "02",
      type: "Full-Stack Game Development",
      title: "Tic Tac Toe Next",
      description:
        "An enhanced Tic Tac Toe game featuring AI difficulty levels, local and online multiplayer, a Java Swing desktop edition, themes, sound effects, and match statistics.",
      technologies: [
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "REST API",
      ],
      url: "https://github.com/AtulmauryaDev/tic-tac-toe-next",
    },
    {
      number: "03",
      type: "Data Structures",
      title: "Tree Visualizer",
      description:
        "An interactive project for visualizing tree structures and presenting data structure concepts.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/AtulmauryaDev/tree-visualizer",
    },
    {
      number: "04",
      type: "JavaScript Game",
      title: "Interactive Math Quiz Game",
      description:
        "A timed multiplication quiz with multiple-choice answers, score tracking, and a game-over screen.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/AtulmauryaDev/Math-Game-JavaScript",
    },
    {
      number: "05",
      type: "Arcade Game",
      title: "Fruit Catch Arcade Game",
      description:
        "A fruit-catching game featuring score tracking, lives, animations, sound effects, and a game-over screen.",
      technologies: ["HTML", "CSS", "jQuery"],
      url: "https://github.com/AtulmauryaDev/Fruit-Game-jQuery",
    },
    {
      number: "06",
      type: "Web Development",
      title: "Job Application Form",
      description:
        "A web form project focused on structured input fields, usability, page layout, and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/AtulmauryaDev",
    },
  ];

  const certificates = [
    {
      title: "Java & Object-Oriented Programming",
      date: "23 Dec 2025",
      image: "/certificates/previews/java-certificate.png",
      pdf: "/certificates/1.%20JAVA.pdf",
    },
    {
      title: "Database Management Systems",
      date: "23 Dec 2025",
      image: "/certificates/previews/dbms-certificate.png",
      pdf: "/certificates/2.%20DBMS.pdf",
    },
    {
      title: "Full Stack Developer Course",
      date: "25 Dec 2025",
      image: "/certificates/previews/full-stack-certificate.png",
      pdf: "/certificates/Free%20Full%20Stack%20Developer%20Course.pdf",
    },
    {
      title: "Introduction to SQL",
      date: "14 Feb 2026",
      image: "/certificates/previews/sql-certificate.png",
      pdf: "/certificates/SQL.pdf",
    },
    {
      title: "Introduction to HTML",
      date: "1 Jan 2026",
      image: "/certificates/previews/html-certificate.png",
      pdf: "/certificates/Introduction%20to%20HTML.pdf",
    },
    {
      title: "Front End Development",
      date: "8 Jan 2026",
      image: "/certificates/previews/frontend-certificate.png",
      pdf: "/certificates/Introduction%20to%20Front%20End%20Development.pdf",
    },
    {
      title: "Java Spring Framework 101",
      date: "17 Feb 2026",
      image: "/certificates/previews/spring-framework-certificate.png",
      pdf: "/certificates/Introduction%20to%20Java%20Spring%20framework%20101.pdf",
    },
    {
      title: "Digital Skills: Artificial Intelligence",
      date: "16 Aug 2020",
      image: "/certificates/previews/ai-certificate.png",
      pdf: "/certificates/artificial-intelligence_certificate_of_achievement_jlibbcz.pdf",
    },
    {
      title: "Interview Preparation",
      date: "31 Dec 2025",
      image: "/certificates/previews/interview-preparation.png",
      pdf: "/certificates/Getting%20Started%20with%20Interview%20Preparation.pdf",
    },
  ];

  const certificatesTrackRef = useRef<HTMLDivElement>(null);

  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null,
  );

  const scrollCertificates = (direction: "left" | "right") => {
    certificatesTrackRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const isSubmittingRef = useRef(false);

  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="hero" className="section hero">
          <div className="hero__content">
            <p className="hero__greeting">Hello, I'm</p>

            <h1 className="hero__name">Atul Kumar Maurya</h1>

            <h2 className="hero__role">Aspiring Software Engineer</h2>

            <p className="hero__description">
              MCA student focused on Java, backend development, REST APIs, and
              database fundamentals. I enjoy building practical projects and
              improving my problem-solving skills.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                <span aria-hidden="true">{"</>"} </span>
                View Projects
              </a>

              <a
                className="button button--secondary"
                href="/Atul_Kumar_Maurya_Resume.pdf"
                download="Atul_Kumar_Maurya_Resume.pdf"
              >
                <span className="resume-arrow" aria-hidden="true">
                  ⬇{" "}
                </span>
                Download Resume
              </a>

              <button
                type="button"
                className="button button--secondary"
                onClick={() => setIsContactOpen(true)}
              >
                Contact Me
              </button>
            </div>

            <div className="hero__socials" aria-label="Social profiles">
              <a
                className="hero__social-link"
                href="https://github.com/AtulmauryaDev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.12c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                  />
                </svg>
              </a>

              <a
                className="hero__social-link"
                href="https://www.linkedin.com/in/atul-kumar-maurya-dev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.95V9.3h2.98v9.6ZM6.44 8a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46Zm12.46 10.9h-2.98v-4.67c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.75H9.6V9.3h2.86v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.29Z"
                  />
                </svg>
              </a>

              <a
                className="hero__social-link"
                href="https://t.me/Shivshakti999"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram profile"
                title="Telegram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M21.8 3.2a1.5 1.5 0 0 0-1.55-.23L2.7 9.73a1.5 1.5 0 0 0 .1 2.83l4.52 1.5 1.69 5.2a1.5 1.5 0 0 0 2.7.37l2.55-3.6 4.5 3.3a1.5 1.5 0 0 0 2.36-.9l2.5-13.7a1.5 1.5 0 0 0-1.82-1.53ZM9.1 13.4l8.82-6.1-6.9 7.8-.28 3.08L9.1 13.4Z"
                  />
                </svg>
              </a>

              <a
                className="hero__social-link"
                href="https://wa.me/919140676805"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with me on WhatsApp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.58 0 .25 5.33.25 11.88c0 2.09.55 4.13 1.59 5.93L.15 24l6.35-1.66a11.9 11.9 0 0 0 5.63 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.5-8.41ZM12.13 21.75a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.85 9.85 0 0 1-1.51-5.23c0-5.45 4.44-9.89 9.89-9.89a9.8 9.8 0 0 1 7 2.9 9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.9 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                  />
                </svg>
              </a>

              <a
                className="hero__social-link"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=atulmaurya791@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send me an email"
                title="Send me an email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 6.5h15L12 12.2Zm-8 4.9h16V8l-8 6-8-6v9.1Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* Profile Photo */}
          <div className="hero__image-wrapper">
            <img
              className="hero__image"
              src="/atul-profile.png"
              alt="Atul Kumar Maurya"
              width="260"
              height="260"
            />
          </div>

          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Open to Internship Opportunities
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about">
          <div className="section-heading">
            <p className="section-heading__eyebrow">GET TO KNOW ME</p>

            <h2 className="section-heading__title">About Me</h2>
          </div>

          <div className="about__content">
            <p>
              I'm an MCA student working toward a career in software
              development, with a particular interest in Java backend
              development.
            </p>

            <p>
              I'm building my understanding of Java, Spring Boot, REST APIs, and
              MySQL through practical projects. My goal is to write clean code,
              understand the fundamentals, and create software that solves real
              problems.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects">
          <div className="section-heading">
            <p className="section-heading__eyebrow">WHAT I'VE BUILT</p>

            <h2 className="section-heading__title">Featured Projects</h2>

            <p className="projects__intro">
              A selection of projects where I practice programming, backend
              development, and problem-solving.
            </p>
          </div>

          <div className="projects__toolbar">
            <button
              type="button"
              className="projects__arrow"
              aria-label="Scroll projects left"
              onClick={() => scrollProjects("left")}
            >
              &#10094;
            </button>

            <p className="projects__hint">Scroll to explore projects</p>

            <button
              type="button"
              className="projects__arrow"
              aria-label="Scroll projects right"
              onClick={() => scrollProjects("right")}
            >
              &#10095;
            </button>
          </div>

          <div
            ref={projectsTrackRef}
            className="projects__grid projects__grid--carousel"
            onWheel={(event) => {
              const container = event.currentTarget;
              // Use horizontal touchpad movement when available.
              const movement =
                Math.abs(event.deltaX) > Math.abs(event.deltaY)
                  ? event.deltaX
                  : event.deltaY;

              if (container.scrollWidth > container.clientWidth) {
                container.scrollLeft += movement;

                /*const { deltaX, deltaY, shiftKey } = event;

            // Horizontal touchpad gesture
            if (Math.abs(deltaX) > 0) {
            container.scrollLeft += deltaX;
            }
          // Shift + wheel se horizontal scrolling
            else if (shiftKey) {
          container.scrollLeft += deltaY;*/
              }
            }}
          >
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card__top">
                  <span className="project-card__number">{project.number}</span>
                  <span className="project-card__type">{project.type}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                <ul className="project-card__tech">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  {project.url ? (
                    <a
                      className="project-card__link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Source <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-card__pending">Source</span>
                  )}

                  {project.title === "Tic Tac Toe Next" && (
                    <a
                      className="project-card__link project-card__play"
                      href="/games/tic-tac-toe/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PLAY
                    </a>
                  )}

                  {project.title === "Interactive Math Quiz Game" && (
                    <a
                      className="project-card__link project-card__play"
                      href="/games/math-quiz/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PLAY
                    </a>
                  )}

                  {project.title === "Fruit Catch Arcade Game" && (
                    <a
                      className="project-card__link project-card__play"
                      href="/games/fruit-catch/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PLAY
                    </a>
                  )}

                  {project.title === "Tree Visualizer" && (
                    <a
                      className="project-card__link project-card__play"
                      href="/projects/tree-visualizer/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LIVE
                    </a>
                  )}

                  {project.title === "Job Application Form" && (
                    <a
                      className="project-card__link project-card__play"
                      href="/projects/job-application-form/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LIVE
                    </a>
                  )}

                  {project.title === "Student Management REST API" && (
                    <a
                      className="project-card__link project-card__play"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      title="The API needs a running backend; open the repository for setup instructions"
                    >
                      LIVE
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills">
          <div className="section-heading">
            <p className="section-heading__eyebrow">MY TECHNICAL TOOLKIT</p>

            <h2 className="section-heading__title">Skills & Technologies</h2>

            <p className="skills__intro">
              Technologies and tools I'm learning and using to build practical
              software projects.
            </p>
          </div>

          <div className="skills__grid">
            {/* Frontend Development */}
            <article className="skill-card">
              <div className="skill-card__icon" aria-hidden="true">
                {"UI"}
              </div>

              <h3 className="skill-card__title">Frontend Development</h3>

              <ul className="skill-card__list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Responsive Web Design</li>
              </ul>
            </article>

            {/* Backend Development */}
            <article className="skill-card">
              <div className="skill-card__icon" aria-hidden="true">
                {"</>"}
              </div>

              <h3 className="skill-card__title">Backend Development</h3>

              <ul className="skill-card__list">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>REST APIs</li>
                <li>Object-Oriented Programming</li>
              </ul>
            </article>

            {/* Database */}
            <article className="skill-card">
              <div className="skill-card__icon" aria-hidden="true">
                {"DB"}
              </div>

              <h3 className="skill-card__title">Database</h3>

              <ul className="skill-card__list">
                <li>MySQL</li>
                <li>SQL Queries</li>
                <li>Relational Database Concepts</li>
              </ul>
            </article>

            {/* Tools */}
            <article className="skill-card">
              <div className="skill-card__icon" aria-hidden="true">
                {"⌘"}
              </div>

              <h3 className="skill-card__title">Developer Tools</h3>

              <ul className="skill-card__list">
                <li>Git & GitHub</li>
                <li>IntelliJ IDEA</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Problem Solving Section */}
        <section id="problem-solving" className="section problem-solving">
          <div className="section-heading">
            <p className="section-heading__eyebrow">CODING PRACTICE</p>
            <h2 className="section-heading__title">Problem Solving</h2>
            <p className="problem-solving__intro">
              Building strong problem-solving skills through consistent DSA
              practice and coding challenges.
            </p>
          </div>

          <div className="problem-solving__grid">
            <article className="problem-card">
              <div className="problem-card__top">
                <div className="problem-card__logo problem-card__logo--leetcode">
                  <img src="/logos/leetcode.svg" alt="LeetCode logo" />
                </div>
                <span className="problem-card__tag">DSA Practice</span>
              </div>

              <h3>LeetCode</h3>
              <p className="problem-card__description">
                Practicing data structures, algorithms and coding interview
                problems.
              </p>

              <div className="problem-card__stats">
                <strong>COUNT</strong>
                <span>Problems Solved</span>
              </div>

              <a
                className="problem-card__link"
                href="https://leetcode.com/u/Atul_Kumar_Maurya/"
                target="_blank"
                rel="noreferrer"
              >
                View Profile <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="problem-card">
              <div className="problem-card__top">
                <div className="problem-card__logo problem-card__logo--gfg">
                  <img src="/logos/gfg.svg" alt="GeeksforGeeks logo" />
                </div>
                <span className="problem-card__tag">DSA Practice</span>
              </div>

              <h3>GeeksforGeeks</h3>
              <p className="problem-card__description">
                Strengthening Java and algorithmic problem-solving skills.
              </p>

              <div className="problem-card__stats">
                <strong>COUNT</strong>
                <span>Problems Solved</span>
              </div>

              <a
                className="problem-card__link"
                href="https://www.geeksforgeeks.org/profile/atulmaumwmv?tab=activity"
                target="_blank"
                rel="noreferrer"
              >
                View Profile <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="problem-card">
              <div className="problem-card__top">
                <div className="problem-card__logo problem-card__logo--hackerrank">
                  <img src="/logos/hackerrank.svg" alt="HackerRank logo" />
                </div>
                <span className="problem-card__tag">Coding Challenges</span>
              </div>

              <h3>HackerRank</h3>
              <p className="problem-card__description">
                Solving programming challenges and improving coding
                fundamentals.
              </p>

              <div className="problem-card__stats">
                <strong>COUNT</strong>
                <span>Problems Solved</span>
              </div>

              <a
                className="problem-card__link"
                href="https://www.hackerrank.com/profile/atulmaurya791"
                target="_blank"
                rel="noreferrer"
              >
                View Profile <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>
        {/* ==================== CERTIFICATES SECTION ==================== */}
        <section id="certificates" className="section certificates">
          <div className="section-heading">
            <p className="section-heading__eyebrow">LEARNING & DEVELOPMENT</p>

            <h2 className="section-heading__title">Certificates</h2>

            <p className="certificates__description">
              A collection of courses and certifications supporting my software
              development journey.
            </p>
          </div>

          <div className="certificates__toolbar">
            <button
              type="button"
              className="projects__arrow"
              aria-label="Scroll certificates left"
              onClick={() => scrollCertificates("left")}
            >
              &#10094;
            </button>

            <p className="projects__hint">Scroll to explore certificates</p>

            <button
              type="button"
              className="projects__arrow"
              aria-label="Scroll certificates right"
              onClick={() => scrollCertificates("right")}
            >
              &#10095;
            </button>
          </div>

          <div
            ref={certificatesTrackRef}
            className="certificates__track"
            onWheel={(event) => {
              const container = event.currentTarget;

              if (container.scrollWidth > container.clientWidth) {
                const movement =
                  Math.abs(event.deltaX) > Math.abs(event.deltaY)
                    ? event.deltaX
                    : event.deltaY;

                container.scrollLeft += movement;
              }
            }}
          >
            {certificates.map((certificate) => (
              <article className="certificate-card" key={certificate.title}>
                <button
                  type="button"
                  className="certificate-card__preview"
                  onClick={() => {
                    if (certificate.image) {
                      setSelectedCertificate(certificate.image);
                    }
                  }}
                  disabled={!certificate.image}
                  aria-label={`Enlarge ${certificate.title}`}
                >
                  {certificate.image ? (
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="certificate-card__placeholder">
                      <span aria-hidden="true">▤</span>
                      <span>Certificate preview</span>
                      <small>Preview image not added yet</small>
                    </div>
                  )}
                </button>

                <h3>{certificate.title}</h3>

                <p className="certificate-card__date">
                  Completed: {certificate.date}
                </p>

                <a
                  className="certificate-card__link"
                  href={certificate.pdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          {/* Enlarged Certificate Preview */}
          {selectedCertificate && (
            <div
              className="certificate-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Certificate preview"
              onClick={() => setSelectedCertificate(null)}
            >
              <button
                type="button"
                className="certificate-modal__close"
                aria-label="Close certificate preview"
                onClick={() => setSelectedCertificate(null)}
              >
                &times;
              </button>

              <img
                src={selectedCertificate}
                alt="Enlarged certificate"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}
        </section>
      </main>

      {isContactOpen && (
        <div
          className="contact-modal-overlay"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal__close"
              aria-label="Close contact form"
              onClick={() => setIsContactOpen(false)}
            >
              ×
            </button>

            <p className="section-eyebrow">GET IN TOUCH</p>
            <h2 id="contact-modal-title">Let's Connect</h2>
            <p className="contact-modal__intro">
              Have an opportunity or want to connect? Send me a message.
            </p>

            <form
              className="contact-modal__form"
              onSubmit={async (event) => {
                event.preventDefault();
                console.count("Contact form submit handler");

                if (isSubmittingRef.current) return;

                isSubmittingRef.current = true;
                setIsSending(true);

                const form = event.currentTarget;
                const data = new FormData(form);

                const name = String(data.get("name") || "").trim();
                const email = String(data.get("email") || "").trim();
                const message = String(data.get("message") || "").trim();

                /*setIsSending(true);*/
                setContactStatus("");

                const templateParams = {
                  name,
                  email,
                  message,
                };

                try {
                  await emailjs.send(
                    "service_b0za3p5",
                    "template_84lnl15",
                    templateParams,
                    "PC9QyARW1s65H1N96",
                  );

                  try {
                    console.count("Auto-reply send called");
                    await emailjs.send(
                      "service_b0za3p5",
                      "template_6g92nfm",
                      templateParams,
                      "PC9QyARW1s65H1N96",
                    );

                    setContactStatus(
                      "Message sent successfully! A confirmation email has been sent.",
                    );
                  } catch {
                    setContactStatus(
                      "Message sent successfully, but the confirmation email could not be sent.",
                    );
                  }

                  form.reset();
                } catch (error) {
                  console.error("EmailJS error:", error);
                  setContactStatus(
                    "Message could not be sent. Please try again.",
                  );
                } finally {
                  isSubmittingRef.current = false;
                  setIsSending(false);
                }
              }}
            >
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Write your message..."
                required
              />

              <button
                className="button button--primary"
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="button__spinner" aria-hidden="true" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <svg
                      className="button__icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              <button
                className="button button--secondary"
                type="button"
                onClick={(event) => {
                  const form = event.currentTarget.form;

                  if (!form || !form.reportValidity()) {
                    return;
                  }

                  const data = new FormData(form);

                  const name = String(data.get("name") || "").trim();
                  const email = String(data.get("email") || "").trim();
                  const message = String(data.get("message") || "").trim();

                  const whatsappMessage = [
                    "Hello Atul!",
                    "",
                    "Name: " + name,
                    "Email: " + email,
                    "",
                    "Message:",
                    message,
                  ].join("\n");

                  const whatsappUrl =
                    "https://wa.me/919140676805?text=" +
                    encodeURIComponent(whatsappMessage);

                  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                }}
              >
                <span aria-hidden="true">💬 </span>
                Send via WhatsApp
              </button>

              {contactStatus && (
                <p role="status" aria-live="polite">
                  {contactStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Minimal & Premium Footer */}
      <footer className="site-footer">
        <div className="site-footer__inner">
          <a className="site-footer__brand" href="#" aria-label="Back to top">
            <span className="site-footer__brand-code">&lt;/&gt;</span>
            <span>Atul Maurya</span>
          </a>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#problem-solving">ProblemSolving</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="site-footer__social">
            <a
              href="https://github.com/AtulmauryaDev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.71.78 1.14 1.78 1.14 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.76.54A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/atul-kumar-maurya-dev/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.44 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.1 10.8h-2.97v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.27V9h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.56 1.99 3.56 4.57v5.37Z"
                />
              </svg>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=atulmaurya791@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 6.5h15L12 12.2Zm-8 4.9h16V8l-8 6-8-6v9.1Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Atul Maurya. All rights reserved.</p>

          <a className="site-footer__back-top" href="#">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
