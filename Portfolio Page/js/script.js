window.addEventListener('popstate', handleRouteChange);

function showHome() {
  return `
  <h2>Timothy Magno</h2>
  <p id="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <section>
    <h3>Tech Stack</h3>
    <div id="stack-container">
      <div>
        <h4>Knowledgeable</h4>
        <ul class="stack">
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>Arduino</li>
          <li>C</li>
          <li>C++</li>
          <li>Assembly Language</li>
        </ul>
      </div>
      <div>
        <h4>Learning</h4>
        <ul class="stack">
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div>
        <h4>Tools</h4>
        <ul class="stack">
          <li>Visual Studio Code</li>
          <li>Figma</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  </section>
  <a href="pdf/Magno_Timothy_CV.pdf" download="Magno_Timothy_CV">
    <button id="download">Download CV</button>
  </a>`;
}

function showEducation() {
  return `
  <h2>Education</h2>
  <ul>
    <li class="educ-port-exp">
      <img src="DTRepo/DTRepo/Portfolio Page/img/UP-Seal.png" class="school-seal"  alt="Seal of the University of the Philippines Diliman" />
      <h3>University of the Philippines Diliman</h3>
      <p class="educ-p course">Bachelor of Science in Computer Science</p>
      <p class="educ-p">2018-2025</p>
    </li>
    <li class="educ-port-exp">
      <img src="DTRepo/DTRepo/Portfolio Page/img/QueSci-Seal.png" class="school-seal" alt="Seal of Quezon City Science High School" />
      <h3>Quezon City Science High School</h3>
      <p class="educ-p">2012-2018</p>
    </li>
  </ul>`;
}

function showPortfolio() {
  return `
  <h2>Portfolio</h2>
  <ul>
    <li class="educ-port-exp">
      <article class="project-tile">
        <h3>Alumni Details Form</h3>
        <p>A form-answering webpage to keep track of Alumni credentials. After 
          submission, respondents receive unique IDs that they can use to update 
          their credentials. Cloud Firestore Database houses the data collected 
          and is exclusively accessible by the department's admin. The admin is 
          capable of editing and deleting entries, but only with the owner's 
          consent. Additionally, they can query existing entries for purposes such 
          as data analysis and back up the database into a Google Sheets file for 
          safekeeping. Firebase Authentication handles the admin's login logistics.
        </p>
      </article>
    </li>
    <li class="educ-port-exp">
      <article class="project-tile">
        <h3>Fun'iki</h3>          
        <p>An IoT solution designed to optimize an infant's sleep environment 
          effortlessly. It features wireless control of: lighting intensity and 
          color, sound playback for soothing music or white noise, rotation of 
          nursery toy for entertainment and stimulation, as well as issuing 
          parental alerts for abnormal environmental conditions or disturbances 
          detected during sleep.
        </p>
      </article> 
    </li>
  </ul>`;
}

function showExperiences() {
  return `
  <h2>Work Experiences</h2>
  <ul>
    <li class="educ-port-exp">
      <h3>Web Development Intern July 2024 - August 2024</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </li>
  </ul>`;
}

function showContacts() {
  return `
  <h2>Contacts</h2>
  <div class="contact-container">
    <h5>Gmail</h5>
    <a href="mailto:ichimaruichiyon@gmail.com?subject=[PORTFOLIO VISITOR] --INSERT DESIRED TOPIC HERE--" target="_blank" class="fab fa-google">tmmagno9675@gmail.com</a>
  </div>
  <div class="contact-container">
    <h5>Github</h5>
    <a href="https://github.com/108-Tim" class="fab fa-github" target="_blank">108-Tim</a>
  </div>
  <div class="contact-container">
    <h5>LinkedIn</h5>
    <a href="https://www.linkedin.com/in/timothy-john-m-9057ab380/" class="fab fa-linkedin" target="_blank">Timothy John Magno</a>
  </div>`;
}

function handleRouteChange() {
  const path = window.location.pathname;
  let view;

  switch (path) {
    case '/education':
      view = showEducation();
      break;

    case '/portfolio':
      view = showPortfolio();
      break;

    case '/experiences':
      view = showExperiences();
      break;

    case '/contacts':
      view = showContacts();
      break;

    default:
        view = showHome();
  }

  document.getElementById('container').innerHTML = view;
}

document.querySelectorAll('.route').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        history.pushState(null, '', this.href);
        handleRouteChange();
    });
});