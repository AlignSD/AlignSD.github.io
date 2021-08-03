import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../src/style.css";
import Typed from 'react-typed';
import Technologies from "../../components/Technologies/Technologies"
// const styles = {
//     float: 'left',
//     width: '250px',
//     height: '250px',
//     marginRight: "10px"
// };

const aquaText = {
    color: '#06f0d1',
    fontFamily: 'Lobster',
    fontSize: "4rem",
    textShadow: "1px 0px black"
}
const aboutMeExlamation = {

    fontFamily: 'Lobster',
    fontSize: "4rem",
    textShadow: "1px 0px black"
}

function HomePage() {
    return (
        <>
            <div className='header-wraper '>
                <div className='main-info'>
                    <h1 className="header-title">Hi, I'm Evan!</h1>
                    <Typed
                        className='typed-text'
                        strings={['Web Design', 'Web Development', 'Anything']}
                        typeSpeed={60}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
            </div>
            <Technologies />
            <div className="d-flex align-items-center vertical-center scrollTop scrollTopSmall" id="home">
                <div className="container col-12 aboutMe">

                    <main role="main" className="col-12 noPadding">
                        <div className="row">
                            <div className="col-md-12 backgroundCard ">

                                <div className='row justify-content-center '>

                                    <h1 className="text-center" style={aquaText}>About Me</h1>
                                    <h1 className="text-center" style={aboutMeExlamation}>!</h1>
                                </div>


                                <p className="lead">Hey! I'm Evan Alioto and I am a recent UCSD Extension Bootcamp Graduate. I've always had a great interest in technology and knew deep down inside that I should work towards a career in programming but I never knew where to start, so I've decided to just jump right in by taking a cooding bootcamp hoping I would come out of it with a deeper knowlege of not only what is required to work in the programming field but a better understanding of what I would want to do as a programmer. So far I've been having a blast and the content I've been learning has helped affirm my desires to get into coding. My goals with all of this is to switch careers in order to pursue something I'm passionate about. I hope you enjoy my portfolio page and please don't be afraid to reach out! Thank you for your time. </p>
                                <br /><br />
                                <p className="lead">Phone Number: (619) 277-1629 <br />Email: <a href="mailto: EvanJAlioto@gmail.com" className="text-center">EvanJAlioto@gmail.com</a> <br />Resume: <a href="https://docs.google.com/document/d/15uS24K2SOu1fZxyA79FWfMy_Ids6xsWN8KZsOETqkNc/export?format=pdf">Click Here For PDF</a></p>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default HomePage;