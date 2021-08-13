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

// TODO: Rename to MainBanner or something along those lines to better describe what it is.

function HomePage() {
    return (
        <>
            <div className='header-wraper row'>
                <div className='main-info '>
                    <h1 className="header-title">Hi, I'm Evan!</h1>
                    <Typed
                        className='typed-text'
                        strings={['Web Design', 'Web Development', 'Anything']}
                        typeSpeed={60}
                        backSpeed={50}
                        loop={true}
                    />
                    <div className="div header-btn-container">
                        <a className="header-btn my-20"href="https://docs.google.com/document/d/15uS24K2SOu1fZxyA79FWfMy_Ids6xsWN8KZsOETqkNc/export?format=pdf">Resume</a>
                        <a className="header-btn my-20"href="mailto: EvanJAlioto@gmail.com">Email</a>
                        <a className="header-btn my-20"href="tel:+1619-277-1629">Phone</a>
                    </div> 
                </div>
            </div>
            {/* <Technologies className="icon"/> */}
            
        </>
    );
}

export default HomePage;