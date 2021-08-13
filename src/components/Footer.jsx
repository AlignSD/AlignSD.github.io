import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../src/style.css"

function Footer() {


  return (

    // <footer className="footer">
    //   <div className="container text-center ">
    //     <ul className=" row justify-content-center footerLinks">
    //       <li>
    //         <a className="nav-link" href="https://www.github.com/AlignSD" aria-label="GitHub" target="_blank" rel="noreferrer">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="#ffa500" fillRule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></a>
    //       </li>
    //       <li>
    //         <a className="nav-link" href="https://www.twitter.com/AlignSD" aria-label="Twitter" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="navbar-nav-svg" viewBox="0 0 512 416.32" role="img"><title>Twitter</title><path fill="#ffa500" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></a>
    //       </li>
    //       <li>
    //         <a className="nav-link" href="https://www.linkedin.com/in/evan-alioto-442b05b/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" role="img"><title>Linkedin</title><path fill="#ffa500" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>


    //       </li>
    //     </ul>
    //     <small>Copyright &copy; AlignSD.github.io</small>
    //   </div>
    // </footer>

    <footer className="footer" id="contact">
      <div className="container contact">
        <div className="row">
          {/*content for phone */}
          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex justify-content-lg-center">
            <div className="contact-box__icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  <path d="M15 7a2 2 0 0 1 2 2" />
  <path d="M15 3a6 6 0 0 1 6 6" />
</svg></div>
            <div className="contact-box__info">
              <a href="" className="contact-box__info--title">+1 (619)277-1629</a>
              <p className="contact-box__info--subtitle">Monday-Friday 9am-8pm</p>
            </div>
          </div>
          {/*content for email */}
          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex justify-content-lg-center">
            <div className="contact-box__icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="3 9 12 15 21 9 12 3 3 9" />
  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <line x1="3" y1="19" x2="9" y2="13" />
  <line x1="15" y1="13" x2="21" y2="19" />
</svg></div>
            <div className="contact-box__info">
              <a href="" className="contact-box__info--title">EvanJAlioto@gmail.com</a>
              <p className="contact-box__info--subtitle">Contact Me!</p>
            </div>
          </div>
          {/*content for location */}
          <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex justify-content-lg-center">
            <div className="contact-box__icon"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="18" y1="6" x2="18" y2="6.01" />
  <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
  <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
  <line x1="9" y1="4" x2="9" y2="17" />
  <line x1="15" y1="15" x2="15" y2="20" />
</svg></div>
            <div className="contact-box__info">
              <a href="" className="contact-box__info--title">San Diego, CA</a>
              <p className="contact-box__info--subtitle">CA 92020, US</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-sm" style={{backgroundColor: "#212121"}}>
        <div className="container">
          <div className="row py-4 text-center">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              Connect with me on social media
            </div>
            <div className="col-lg-6 col-md-6 d-lg-flex justify-content-end">
              <a className="footerIcons" href="https://www.github.com/AlignSD" aria-label="GitHub" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="#ffa500" fillRule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></a>
              <a className="footerIcons" href="https://www.twitter.com/AlignSD" aria-label="Twitter" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="navbar-nav-svg" viewBox="0 0 512 416.32" role="img"><title>Twitter</title><path fill="#ffa500" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></a>
              <a className="footerIcons" href="https://www.linkedin.com/in/evan-alioto-442b05b/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" role="img"><title>Linkedin</title><path fill="#ffa500" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
