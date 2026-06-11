import { renderContactForm } from "./components/contactForm"
import "./style/style.scss"
import { generateSummary } from "./api/ai";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>

    <nav>
      <a href="#hero">Hero</a>
      <a href="#about">About</a>
      <a href="#work">How I work</a>
      <a href="#projects">Projects</a>
      <a href="#ai">AI Tools</a>
      <a href="#contact">Contact</a>
    </nav>

    <section id="hero" class="hero">
      <div class="container">
        <h1>Fullstack JavaScript Developer</h1>
        <p>Frontend, Backend, API Integrations, AI Tools</p>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <h2>About</h2>

        <p>
          I build web applications and work with frontend interfaces,
          API integrations and backend logic.
          I’m interested in practical use of AI tools in development workflows.
        </p>

        <ul>
          <li>JavaScript / TypeScript</li>
          <li>Node.js / Express</li>
          <li>REST APIs</li>
          <li>SCSS</li>
          <li>Vite</li>
        </ul>
      </div>
    </section>

    <section id="work" class="work">
      <div class="container">
        <h2>How I Work</h2>

        <ol>
          <li>Task analysis</li>
          <li>Planning</li>
          <li>Development</li>
          <li>Testing</li>
          <li>Refactoring</li>
        </ol>
      </div>
    </section>

    <section id="projects" class="projects">
      <div class="container">
        <h2>Projects</h2>

        <div class="project-card">
          <h3>Crudlog</h3>
          <p>Fullstack CRUD application</p>
        </div>

        <div class="project-card">
          <h3>AskAI</h3>
          <p>AI integration experiments</p>
        </div>
      </div>
    </section>

    <section id="ai" class="ai">
      <div class="container">

        <h2>AI Tools</h2>

        <textarea id="text" placeholder="Write something..."></textarea>

        <div class="ai-buttons">
          <button id="summaryBtn">Generate summary</button>
          <button id="improveBtn">Improve my profile</button>
        </div>

        <div id="result" class="result"></div>

      </div>
    </section>    
    
    <section id="contact" class="contact">
      <div class="container">
        <h2>Contact</h2>
        <div id="contact-root"></div>
      </div>
    </section>

  </main>
  `
  renderContactForm(document.querySelector("#contact-root")!)
  const input = document.querySelector("#text") as HTMLTextAreaElement;

  const summaryBtn = document.querySelector("#summaryBtn") as HTMLButtonElement;
  const improveBtn = document.querySelector("#improveBtn") as HTMLButtonElement;

  const result = document.querySelector("#result") as HTMLDivElement;

  summaryBtn.addEventListener("click", () => {
    if (!input.value) return;
    result.innerText = "Mock summary: " + input.value.split(" ").slice(0, 3).join(" ");
  });

  improveBtn.addEventListener("click", () => {
    result.innerText = "Improved version: " + input.value.toUpperCase();
  });