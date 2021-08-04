import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../src/style.css";
import Typed from 'react-typed';
// import Technologies from "../../components/Technologies/Technologies"
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
            {/* <Technologies className="icon"/> */}
            
        </>
    );
}

export default HomePage;