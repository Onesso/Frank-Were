import React from "react";
import { useState } from "react";
import "./style.css";
import { Toggle } from "./components/toggle.jsx";
import useLocalStorage from "use-local-storage";

export default function App() {
  const preference = window.matchMedia("(prefers-color-schema: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", false); //using local storage to save the theme
  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <div className="major">
          <div>
            <nav className="nav">
              <div>
                <p className="nav frank">FRANK WERE</p>
              </div>

              <div>
                <ul className="stylo">
                  <li>
                    <a id="home-anchor" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a id="stack-anchor" href="#">
                      Tech-stack
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a id="comm-anchor" href="#">
                      Community
                    </a>
                  </li>
                  <li>
                    <a id="Edu-anchor" href="#">
                      Education
                    </a>
                  </li>
                  <li>
                    <a id="Expe-anchor" href="#">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a id="projo-anchor" href="#">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="toggle-div">
          <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        </div>

        <div className="content-section col">
          <div className="profile-Image">
            <img
              src="https://photos.google.com/photo/AF1QipMQgDcbOS38HFRuJZ8gs97pd_itTKKT5SyGgl52"
              className="profileImage"
            />
            <div className="bio-text">
              <h2 className="h2">About Me</h2>
              <span className="span"></span>
              <p className="para">
                React & React Native Developer | Full-Stack Engineer |
                Passionate about building beautiful and performant mobile & web
                experiences.
              </p>
              <p className="para">
                A Fullstack Engineer deeply immersed in the React ecosystem and
                React Native mobile development, with a passion for crafting
                scalable and maintainable software solutions. I am dedicated to
                continuous learning, embracing best practices, and leveraging my
                expertise in architecting applications using React and React
                Native. My proficiency extends to the backend, where I
                specialize in Node.js, Express.js, MongoDB, and Supabase,
                ensuring robust and efficient server-side operations.
              </p>
              <div className="social-media">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/frank-were-707780232/"
                    target="_blank"
                    rel="noopener"
                    className="name"
                  >
                    LinkedIn
                  </a>
                </i>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                  <a
                    href="https://x.com/FrankOdhis1?t=19kDeELapzWcwLSu1Kotxw&s=08 "
                    target="_blank"
                    rel="noopener"
                    className="name"
                  >
                    Twitter
                  </a>
                </i>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  <a
                    href="https://github.com/Onesso"
                    target="_blank"
                    rel="noopener"
                    className="name"
                  >
                    Github
                  </a>
                </i>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-file-earmark-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
                  </svg>
                  <a
                    href="https://docs.google.com/document/d/13EAzGwdQ6GJC6aNRSaWLK0CbmfoDo5BgjBUhkBh4qGk/edit?usp=sharing"
                    target="_blank"
                    rel="noopener"
                    className="name"
                  >
                    Résumé
                  </a>
                </i>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope-at-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                  </svg>
                  <a
                    href="mailto:karaonesso04@gmail.com"
                    target="_blank"
                    rel="noopener"
                    className="name"
                  >
                    Email
                  </a>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
