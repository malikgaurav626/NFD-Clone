import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import "./navbar.css";

export default function Navbar({ scrollPosition }) {
  const hasRun = useRef(false);
  const togglerRect1Ref = useRef(null);
  const togglerRect2Ref = useRef(null);
  useEffect(() => {
    if (scrollPosition <= 0) {
      let disappearingBtns = document.getElementById("disappearing-btns");
      if (window.innerWidth > 1200) {
        anime({
          targets: disappearingBtns,
          opacity: [1, 0],
          duration: 500,
          easing: "easeInOutQuad",
          delay: 0,
          direction: "normal",
          loop: false,
          width: [380, 0],
        });
      } else {
        anime({
          targets: disappearingBtns,
          opacity: [0, 1],
          duration: 500,
          easing: "easeInOutQuad",
          delay: 0,
          direction: "normal",
          loop: false,
          width: [280, 0],
        });
      }
      hasRun.current = false;
      togglerRect1Ref.current.style.fill = "black";
      togglerRect2Ref.current.style.fill = "black";
    } else if (!hasRun.current) {
      let disappearingBtns = document.getElementById("disappearing-btns");
      if (window.innerWidth > 1200) {
        anime({
          targets: disappearingBtns,
          opacity: [0, 1],
          duration: 500,
          easing: "easeInOutQuad",
          delay: 0,
          direction: "normal",
          loop: false,
          width: [0, 380],
        });
      } else {
        anime({
          targets: disappearingBtns,
          opacity: [0, 1],
          duration: 500,
          easing: "easeInOutQuad",
          delay: 0,
          direction: "normal",
          loop: false,
          width: [0, 200],
        });
      }
      togglerRect1Ref.current.style.fill = "white";
      togglerRect2Ref.current.style.fill = "white";
      hasRun.current = true;
    }
  }, [scrollPosition]);
  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg bg-body-tertiary " +
          (scrollPosition <= 0 ? "navbar-top" : "navbar-normal")
        }
      >
        <div
          className={
            "container-fluid " +
            (scrollPosition <= 0 ? " container-fluid-active" : " ")
          }
        >
          <a className="navbar-brand" href="#">
            <svg
              width="56"
              height="43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 21.061h11.205v10.97H0V21.06Z" fill="#D6B0FF"></path>
              <path
                d="m17.928 25.449-6.723 6.582L22.41 42.78 34.51 30.934l-1.793-17.551h-14.79v12.066Z"
                fill="url(#Logo_svg__a)"
              ></path>
              <path
                d="M11.205 32.03H22.41V43H11.205V32.03Z"
                fill="#D6B0FF"
              ></path>
              <path
                d="M48.63 17.332v9.653L32.717 11.408 43.923 0l10.981 10.97-6.275 6.362Z"
                fill="url(#Logo_svg__b)"
              ></path>
              <path
                d="M43.923 0h11.205v10.97H43.923V0ZM11.653 10.828 22.428.279l32.644 31.957-10.776 10.549-32.643-31.957Z"
                fill="#D6B0FF"
              ></path>
              <defs>
                <linearGradient
                  id="Logo_svg__a"
                  x1="29.059"
                  y1="52.563"
                  x2="13.838"
                  y2="-7.019"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.031" stopColor="#848AFF"></stop>
                  <stop offset="1" stopColor="#EA8CFF"></stop>
                </linearGradient>
                <linearGradient
                  id="Logo_svg__b"
                  x1="29.059"
                  y1="52.563"
                  x2="13.838"
                  y2="-7.019"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.031" stopColor="#848AFF"></stop>
                  <stop offset="1" stopColor="#EA8CFF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="navbar-title">
              <svg
                width="69"
                height="20"
                viewBox="0 0 69 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.9214 0.128174H27.3516H21.4079H21.2905L21.4079 11.86V14.7671H20.8218L10.603 0.128174H0.179443V19.7746H6.24051L6.09383 5.13559H6.73815L17.0153 19.7746H21.4075H27.3512V18.3955V13.0001V11.91H32.9211H34.7045H37.6953H41.3068V7.60979H37.6953H34.7045H32.9211H27.3516V7.04225V4.75267H32.9214H34.7049H37.6957H48.6272H57.2062C61.8033 4.75267 62.6816 5.04742 62.6816 10.0253C62.6816 11.1151 62.7106 13.324 61.8029 14.0898C61.1296 14.6495 59.812 14.679 58.9917 14.7085C58.2891 14.738 57.6154 14.7671 56.9128 14.7671H48.6265V6.22532H42.7704V19.7746H57.4104C59.9576 19.7746 64.6424 19.9808 66.663 18.1252C67.8633 17.006 68.3026 15.0914 68.4196 13.5007C68.5072 12.2343 68.5369 10.938 68.5369 9.67156C68.5369 7.75698 68.5952 5.69521 67.981 3.83965C66.8691 0.481579 63.7069 0.216705 60.6617 0.157684C59.5491 0.128174 58.4365 0.128174 57.3239 0.128174H48.6276H42.7715H41.3076H37.696H34.7052H32.9214Z"
                  fill={scrollPosition <= 0 ? "#171717" : "white"}
                ></path>
              </svg>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="nav-toggler-icon">
              <svg
                
                width="30"
                height="13"
                viewBox="0 0 30 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect ref={togglerRect1Ref} width="30" height="3" rx="1.5" fill="#171717"></rect>
                <rect
                  y="10"
                  width="15"
                  height="3"
                  rx="1.5"
                  fill="#171717"
                  ref={togglerRect2Ref}
                ></rect>
              </svg>
            </div>
          </button>
          <div className={"collapse navbar-collapse " + (scrollPosition <=0 ? "navbar-collapse-top" : 'navbar-collapse-normal')} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-lg-0 d-lg-static d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a
                  href="#about"
                  className={
                    "nav-link " +
                    (scrollPosition > 0 ? "nav-link-normal" : "nav-link-top")
                  }
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#aggregator"
                  className={
                    "nav-link " +
                    (scrollPosition > 0 ? "nav-link-normal" : "nav-link-top")
                  }
                >
                  Aggregator
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#features"
                  className={
                    "nav-link " +
                    (scrollPosition > 0 ? "nav-link-normal" : "nav-link-top")
                  }
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#roadmap"
                  className={
                    "nav-link " +
                    (scrollPosition > 0 ? "nav-link-normal" : "nav-link-top")
                  }
                >
                  Roadmap
                </a>
              </li>
              <li className="nav-item me-5" id="contact-nav">
                <a
                  href="#contact"
                  className={
                    "nav-link " +
                    (scrollPosition > 0 ? "nav-link-normal" : "nav-link-top")
                  }
                >
                  Contact us
                </a>
              </li>
            </ul>
            <div className="socials-container">
              <a href="/#">
                <div className="social-icon" id="social-discord">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1423_21393)">
                      <path
                        d="M3.06911 3.6415C4.34384 3.05662 5.71079 2.62568 7.14005 2.37884C7.16606 2.37408 7.19208 2.38599 7.20548 2.40978C7.3813 2.72248 7.57602 3.13037 7.71239 3.45099C9.24962 3.22084 10.779 3.22084 12.2847 3.45099C12.4211 3.12326 12.6229 2.72248 12.7995 2.40978C12.8129 2.38677 12.8389 2.37486 12.8649 2.37884C14.2934 2.62486 15.6603 3.0558 16.9359 3.6415C16.9469 3.64627 16.9564 3.65419 16.9627 3.66451C19.5555 7.53814 20.2658 11.3166 19.9174 15.0481C19.9158 15.0664 19.9055 15.0838 19.8913 15.0949C18.1807 16.3512 16.5236 17.1139 14.8973 17.6194C14.8713 17.6274 14.8437 17.6179 14.8271 17.5964C14.4424 17.0711 14.0995 16.5171 13.8055 15.9346C13.7881 15.9005 13.8047 15.86 13.8402 15.8465C14.3841 15.6402 14.902 15.3886 15.4003 15.1029C15.4397 15.0799 15.4429 15.0235 15.4066 14.9965C15.3017 14.918 15.1968 14.8362 15.0967 14.7537C15.0786 14.7386 15.0534 14.7354 15.0321 14.7449C11.759 16.2394 8.2154 16.2394 4.98091 14.7449C4.95962 14.7346 4.93438 14.7378 4.91548 14.7529C4.81532 14.8354 4.71048 14.9179 4.60485 14.9965C4.5686 15.0235 4.57098 15.0799 4.61036 15.1029C5.1086 15.3941 5.62653 15.6401 6.17126 15.8457C6.20673 15.8592 6.22251 15.9004 6.20512 15.9345C5.90477 16.5163 5.56184 17.0702 5.18427 17.5956C5.16848 17.6178 5.14013 17.6274 5.11411 17.6194C3.47993 17.1139 1.82282 16.3512 0.112156 15.0949C0.0971565 15.0838 0.0877018 15.0671 0.0861397 15.0489C-0.330891 10.7348 0.784616 6.98732 3.04317 3.66525C3.04864 3.65419 3.05809 3.64627 3.06911 3.6415ZM13.3166 12.776C14.302 12.776 15.114 11.8713 15.114 10.7602C15.114 9.64912 14.3178 8.74443 13.3166 8.74443C12.3076 8.74443 11.5034 9.65709 11.5192 10.7602C11.5192 11.8713 12.3155 12.776 13.3166 12.776ZM6.67102 12.776C7.65641 12.776 8.46841 11.8713 8.46841 10.7602C8.46841 9.64912 7.6722 8.74443 6.67102 8.74443C5.66196 8.74443 4.85786 9.65709 4.8736 10.7602C4.8736 11.8713 5.66192 12.776 6.67102 12.776Z"
                        fill="#6C52EE"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1423_21393">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="matrix(-1 0 0 1 20 0)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/NFD_gg">
                <div className="social-icon" id="social-twitter">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1423_21396)">
                      <path
                        d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
                        fill="#6C52EE"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1423_21396">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
            <div id="disappearing-btns">
              <a
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Platform"
                href="https://combine.nfd.gg/"
                id="combine-btn"
              >
                <button className="aesthetic-btn">
                  <div>
                    <pre className="pre">&quot;Combine&quot;{"\n"}Software</pre>
                  </div>
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Platform"
                href="https://app.nfd.gg/"
                id="platform-btn"
              >
                <button className="aesthetic-btn">
                  <div>Platform</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
