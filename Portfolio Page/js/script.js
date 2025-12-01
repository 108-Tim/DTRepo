window.addEventListener('popstate', handleRouteChange);
const appBarButton = document.getElementById("app-bar-button");
const navWrapper = document.getElementById("nav-wrapper");

appBarButton.addEventListener("click", () => {
  navWrapper.classList.toggle("active");
  toggleNavBar();
});

function toggleNavBar() {
  document.querySelector("html").classList.toggle("hidden");
  document.querySelector("body").classList.toggle("hidden");
};

function showHome() {
  toggleNavBar();
  return `
  <h2>Timothy Magno</h2>
  <p id="home-description">
    Greetings! I am an aspiring full-stack developer currently learning the fundamentals of front-end development to kick-start my 
    developer journey. Although I do not possess the creativity for UI/UX design, my passion lies in having the scrupulousness and 
    determination to produce correct and satisfactory results, as well as to perfectly and cleanly materialize the designer's 
    vision of the product. Still, passion and perseverance can only take me part of the way without the relevant experiences, which 
    is why I am also open to being trained. If you are interested, let's talk! 
  </p>
  <section>
    <h3>Tech Stack</h3>
    <div id="stack-container">
      <div>
        <h4>Knowledgeable</h4>
        <ul class="stack">
          <li id="html">
            <img src="img/html5-logo.svg" class="tech-logo" alt="HTML5 Logo">
            <span>HTML</span>
          </li>
          <li>
            <img src="img/css3-logo.svg" class="tech-logo" alt="CSS3 Logo">
            <span>CSS</span>
          </li>
          <li>
            <img src="img/python-logo.svg" class="tech-logo" alt="Python Logo">
            <span>Python</span>
          </li>
          <li>
            <img src="img/arduino-logo.svg" class="tech-logo" alt="Arduino Logo">
            <span>Arduino</span></li>
          <li>
            <img src="img/c-logo.svg" class="tech-logo big" alt="C Programming Language Logo">
            <span>C</span>                  
          </li>
          <li>
            <img src="img/cpp-logo.svg" class="tech-logo" alt="C++ Logo">
            <span>C++</span>                  
          </li>
        </ul>
      </div>
      <div>
        <h4>Learning</h4>
        <ul class="stack">
          <li class="h">
            <img src="img/javascript-logo.svg" class="tech-logo big" alt="JavaScript Logo">
            <span>JavaScript</span>
          </li>
          <li>
            <img src="img/tailwindcss-logo.svg" class="tech-logo big" alt="Tailwind CSS Logo">
            <span>Tailwind CSS</span>
          </li>
          <li>
            <img src="img/react-logo.svg" class="tech-logo big" alt="React JS Logo">
            <span>React</span>
          </li>
          <li>
            <img src="img/nodejs-logo.svg" class="tech-logo big" alt="Node JS Logo">
            <span>Node.js</span>
          </li>
        </ul>
      </div>
      <div>
        <h4>Tools</h4>
        <ul class="stack">
          <li>
            <img src="img/visual-studio-code-logo.svg" class="tech-logo big" alt="Visual Studio Code Logo">
            <span>Visual Studio Code</span>
          </li>
          <li>
            <img src="img/figma-logo.svg" class="tech-logo big" alt="Figma Logo">
            <span>Figma</span>
          </li>
          <li>
            <img src="img/github-logo.svg" class="tech-logo big" alt="Github Logo">
            <span>Github</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <a href="pdf/Magno_Timothy_CV.pdf" id="download" download="Magno_Timothy_CV">
    <button>Download CV</button>
  </a>`;
}

function showEducation() {
  toggleNavBar();
  return `
  <h2>Education</h2>
  <ul>
    <li class="educ-port-exp">
      <img src="img/UP-Seal.png" class="school-seal"  alt="Seal of the University of the Philippines Diliman" />
      <h3 class="school">University of the Philippines Diliman</h3>
      <p class="educ-p course">Bachelor of Science in Computer Science</p>
      <p class="educ-p">2018-2025</p>
    </li>
    <li class="educ-port-exp">
      <img src="img/QueSci-Seal.png" class="school-seal" alt="Seal of Quezon City Science High School" />
      <h3 class="school">Quezon City Science High School</h3>
      <p class="educ-p">2012-2018</p>
    </li>
  </ul>`;
}

function showPortfolio() {
  toggleNavBar();
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
        <div class="techs-used">
          <ul>
            <li>
              <img src="img/html5-logo.svg" class="tech-logo" alt="HTML5 Logo">
            </li>
            <li>
              <img src="img/css3-logo.svg" class="tech-logo" alt="CSS3 Logo">
            </li>
            <li>
              <img src="img/javascript-logo.svg" class="tech-logo big" alt="JavaScript Logo">
            </li>
            <li>
              <img src="img/firebase-logo.svg" class="tech-logo big" alt="Firebase Logo">
            </li>
          </ul>
        </div>
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
        <div class="techs-used">
          <ul>
            <li>
              <img src="img/arduino-logo.svg" class="tech-logo" alt="Arduino Logo">
            </li>
            <li>
              <img src="img/firebase-logo.svg" class="tech-logo big" alt="Firebase Logo">
            </li>
          </ul>
        </div>
      </article> 
    </li>
  </ul>`;
}

function showExperiences() {
  toggleNavBar();
  return `
  <h2>Work Experiences</h2>
  <ul>
    <li class="educ-port-exp">
      <h3>Web Development Intern July 2024 - August 2024</h3>
      <p>Before this internship, I had little to no background in web development. We had different projects to choose from, and quite frankly, I decided to work on web development, thinking it was the easiest for me to complete despite my lack of knowledge in the field. Due to time constraints, I learned things as I developed.</p>
      <p>The project specifications required redirection of form submissions on the web page to another database management system. Fortunately, I encountered Google Firebase for a previous project, which greatly helped when connecting the database to the web page. WordPress hosts the website, which is new to me as well. I used Firestore to house user data and Firebase Authentication to restrict availability to the admin. </p>
      <p>After this experience, I understood the importance of wireframing and discovered frameworks. I came to appreciate the intricacies of client-server data transfer. I started with the mindset of completing course requirements, but left wanting to learn more. Although my work is yet to meet quality standards, I genuinely enjoyed the process of doing it.</p>
    </li>
  </ul>`;
}

function showContacts() {
  toggleNavBar();
  return `
  <h2>Contacts</h2>
  <div class="contact-container">
    <h5>Gmail</h5>
    <a href="mailto:tmmagno9675@gmail.com?subject=[PORTFOLIO VISITOR] --INSERT DESIRED TOPIC HERE--" target="_blank" class="fab fa-google"></a>
    <a href="mailto:tmmagno9675@gmail.com?subject=[PORTFOLIO VISITOR] --INSERT DESIRED TOPIC HERE--" target="_blank">tmmagno9675@gmail.com</a>
  </div>
  <div class="contact-container">
    <h5>Github</h5>
    <a href="https://github.com/108-Tim" class="fab fa-github" target="_blank"></a>
    <a href="https://github.com/108-Tim" target="_blank">108-Tim</a>
  </div>
  <div class="contact-container">
    <h5>LinkedIn</h5>
    <a href="https://www.linkedin.com/in/timothy-john-m-9057ab380/" class="fab fa-linkedin" target="_blank"></a>
    <a href="https://www.linkedin.com/in/timothy-john-m-9057ab380/" target="_blank">Timothy John Magno</a>
  </div>`;
}

function handleRouteChange() {
  const path = window.location.pathname;
  let view;

  switch (path) {
    case '/education':
      view = showEducation();
      navWrapper.classList.toggle("active");
      break;

    case '/portfolio':
      view = showPortfolio();
      navWrapper.classList.toggle("active");
      break;

    case '/experiences':
      view = showExperiences();
      navWrapper.classList.toggle("active");
      break;

    case '/contacts':
      view = showContacts();
      navWrapper.classList.toggle("active");
      break;

    default:
        view = showHome();
        navWrapper.classList.toggle("active");
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