import './style/style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>

    <nav>
      <a href="#hero">Hero</a>
      <a href="#about">About</a>
      <a href="#work">How I work</a>
      <a href="#projects">Projects</a>
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
          JavaScript / TypeScript developer.
          Interested in frontend, backend and AI integrations.
        </p>

        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>SCSS</li>
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

    <section id="contact" class="contact">
      <div class="container">
        <h2>Contact</h2>

        <form>

          <input
            type="text"
            placeholder="Name"
          >

          <input
            type="email"
            placeholder="Email"
          >

          <input
            type="tel"
            placeholder="Phone"
          >

          <textarea
            placeholder="Comment"
          ></textarea>

          <button type="submit">
            Send
          </button>

        </form>
      </div>
    </section>

  </main>
  `