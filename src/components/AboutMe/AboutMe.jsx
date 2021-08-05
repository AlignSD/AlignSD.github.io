import React from 'react'
const aquaText = {
  color: '#06f0d1',
  fontFamily: 'Roboto',
  fontWeight: 900,
  fontSize: "4rem",
}
const aboutMeExlamation = {
  
  fontFamily: 'Roboto',
  fontSize: "4rem",
  color:"black",
  textShadow: "1px 0px black"
}
const AboutMe = () => {
  return (
    <div className="d-flex align-items-center vertical-center scrollTop scrollTopSmall" id="home">
      <div className="container col-12 aboutMe">
          <main role="main" className="noPadding">
              <div className="">
                {/* <div className="row justify-content-center AboutMeHeader">
                <h1 className="text-center" style={aquaText}>About Me</h1><h1 className="text-center" style={aboutMeExlamation}>!</h1>
              </div> */}
              <div className="aboutMeContainer left">
                <div className="row-lg-5  aboutMeSection mx-auto my-5">
                  <h3 className="col-md-3">
                    Who am I?
                  </h3>
                  <p className="col-md-9 col-lg-6 ml-10">My name is Evan Alioto and I am a Full-Stack Web Developer from San Diego, California. </p>
                 </div>
                 <hr></hr>
              </div>
              <div className="aboutMeContainer right">
                <div className="row-lg-5  aboutMeSection mx-auto my-5">
                <p className="col-md-9 col-lg-6 ml-10">I am currently looking for a position as a Front-End or Full-Stack Developer. I code in JavaScript and primarly use the React framework but I am always willing to learn new technologies.</p>
                  <h3 className="col-md-3">
                    What I am Looking for.
                  </h3>
                </div>
                <hr></hr>
              </div>
              <div className="aboutMeContainer left">
                <div className="row-lg-5  aboutMeSection mx-auto my-5">
                  <h3 className="col-md-3">
                    My Experience.
                  </h3>
                  <p className="col-md-9 col-lg-6 ml-10">I have been consistently coding for one year now. I've created a handful of full stack applications, games, and static sites! </p>
                </div>
                <hr></hr>
              </div>
              <div className="aboutMeContainer right">
                <div className="row-lg-5  aboutMeSection mx-auto my-5">
                <p className="col-md-9 col-lg-6 ml-9">I bring to the table a lifetime of troubleshooting and debugging expirence and I believe those skill translate well into the developer role.</p>
                  <h3 className="col-md-3">
                    What I can do for you.
                  </h3>
                </div>
                <hr></hr>
              </div>
                <p className="lead">Phone Number: (619) 277-1629 <br />Email: <a href="mailto: EvanJAlioto@gmail.com" className="text-center">EvanJAlioto@gmail.com</a> <br />Resume: <a href="https://docs.google.com/document/d/15uS24K2SOu1fZxyA79FWfMy_Ids6xsWN8KZsOETqkNc/export?format=pdf">Click Here For PDF</a></p>
              </div>
          </main>
      </div>
  </div>
  )
}

export default AboutMe
