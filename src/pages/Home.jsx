import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const practicejavascript = () => {
    navigate("/learn-javascript");
  };
  return (
    <div className="home-container">
      <h1>Frontend Web Developer</h1>
      <p>Step by step guide to becoming a modern frontend developer in 2024</p>
      <p>
        <a href="https://roadmap.sh/frontend">https://roadmap.sh/frontend</a>
      </p>
      <p>
        <a href="https://roadmap.sh/design-system">
          https://roadmap.sh/design-system
        </a>
      </p>
      <br />
      <h2 className="main-head">Frontend</h2>
      <br />
      <a href="#button-container">Go down</a>
      <div className="topics-container">
        <h3>
          <span>1</span>Internet
        </h3>
        <div>
          <p>How does the Internet works?</p>
          <p>What is HTTP?</p>
          <p>What is Domain Name?</p>
          <p>What is Hosting?</p>
          <p>DNS and How it works?</p>
          <p>Browser and How they work?</p>
        </div>
        <h3>
          <span>2</span>HTML
        </h3>
        <div>
          <p>Learn the Basics</p>
          <p>Writing Semantic HTML</p>
          <p>Forms and Validations</p>
          <p>Accessibility</p>
          <p>SEO Basics</p>
        </div>
        <h3>
          <span>3</span>CSS
        </h3>
        <div>
          <p>Learn the Basics</p>
          <p>Making Layouts</p>
          <p>Responsive Design</p>
        </div>
        <h3>
          <span>4</span>Javascript
        </h3>
        <div>
          <p>Learn the Basics</p>
          <p>Learn DOM Manipulation</p>
          <p>Fetch API / Ajax (XHR)</p>
        </div>
        <h3>
          <span>5</span>Version Control Systems
        </h3>
        <div>
          <p>Git</p>
        </div>
        <h3>
          <span>6</span>VCS Hosting
        </h3>
        <div>
          <p>GitHub</p>
          <p>GitLab</p>
          <p>BitBucket</p>
        </div>
        <h3>
          <span>7</span>Package Managers
        </h3>
        <div>
          <p>npm</p>
          <p>pnpm</p>
          <p>yarn</p>
        </div>
        <h3>
          <span>8</span>Pick a Framework
        </h3>
        <div>
          <p>React JS</p>
          <p>Vue JS</p>
          <p>Angular</p>
          <p>Svelte</p>
          <p>Solid JS</p>
          <p>Qwik</p>
        </div>
        <h3>
          <span>9</span>Writing CSS
        </h3>
        <div>
          <p>Tailwind CSS</p>
          <p>Radix UI</p>
          <p>Shadcn UI</p>
        </div>
        <h3>
          <span>10</span>CSS Architecture
        </h3>
        <div>
          <p>BEM</p>
        </div>
        <h3>
          <span>11</span>CSS Preprocessors
        </h3>
        <div>
          <p>Sass</p>
          <p>Post Sass</p>
        </div>
        <h3>
          <span>12</span>Build Tools
        </h3>
        <h3>
          <span>13</span>Module Bundlers
        </h3>
        <div>
          <p>Vite</p>
          <p>ESBuild</p>
          <p>Webpack</p>
          <p>Rollup</p>
          <p>Parcel</p>
        </div>
        <h3>
          <span>14</span>Task Runners
        </h3>
        <div>
          <p>npm scripts</p>
        </div>
        <h3>
          <span>15</span>Linters and Formatters
        </h3>
        <div>
          <p>Prettier</p>
          <p>ESLint</p>
        </div>
        <h3>
          <span>16</span>Testing your apps
        </h3>
        <div>
          <p>Vitest</p>
          <p>Jest</p>
          <p>Playwrite </p>
          <p>Cyress</p>
        </div>
        <h3>
          <span>17</span>
          Authentication Strategies (JWT, oAuth, SSO, Basic Auth, Session Auth
          etc.)
        </h3>
        <h3>
          <span>18</span>Web Security Basics
        </h3>
        <div>
          <p>CORS</p>
          <p>HTTPS</p>
          <p>Content Security Policy</p>
          <p>OWASP Security Risks</p>
        </div>
        <h3>
          <span>19</span>Web Components
        </h3>
        <div>
          <p>HTML Templates</p>
          <p>Custom Elements</p>
          <p>Shadow DOM</p>
        </div>
        <h3>
          <span>20</span>Type Checkers
        </h3>
        <div>
          <p>Typescript</p>
        </div>
        <h3>
          <span>21</span>Server Side Rendering (SSR)
        </h3>
        <h3>
          <span>22</span>GraphQL
        </h3>
        <div>
          <p>Apollo</p>
          <p>Relay Modern</p>
        </div>
        <h3>
          <span>23</span>Static Site Generators
        </h3>
        <h3>
          <span>24</span>Progressive Web Apps
        </h3>
        <div>
          <p>Vuepress</p>
          <p>Astro</p>
          <p>Jekyll</p>
          <p>Eleventy</p>
          <p>Hugo</p>
          <p>Next JS</p>
          <p>NUXT jss</p>
          <p></p>
        </div>
        <h3>
          <span>25</span>Mobile Applications
        </h3>
        <div>
          <p>React Native</p>
          <p>Flutter</p>
          <p>Ionic</p>
          <p>NativeScript</p>
        </div>
        <h3>
          <span>26</span>Desktop Applications
        </h3>
        <div>
          <p>Electron</p>
          <p>Tauri</p>
          <p>Flutter</p>
        </div>
        <h3>
          <span>27</span>Bonus Content
        </h3>
        <div>
          <p>Continue Learning : Typescipt Roadmap</p>
          <p>Continue Learning : Node.JS Roadmap</p>
        </div>
        <div className="button-container" id="button-container">
          <button onClick={practicejavascript}>Practice Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
