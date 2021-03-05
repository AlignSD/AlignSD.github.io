import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style.css";

const styles = {
    float: 'left',
    width: '200px',
    height: '200px',
    "margin-right": "10px"
};
function HomePage() {
    return (
        <div className="d-flex align-items-start vertical-center">
            <div className="container aboutMe">
                <main role="main" className="col-12">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">About Me!</h1>
                                <img src="https://images.unsplash.com/photo-1602258522657-52c0bd1e6f3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80" className="smallImage" style={styles} alt="..." />
                                <p className="lead">Hey! I'm Evan Alioto. I'm currently enrolled in a Coding Bootcamp provided by UCSD Extension. I've always had the desire to learn how to code but never had anyone around me to help direct me, so I decided to just jump straight into it. So far I've been having a blast and the content I've been learning has helped affirm my desires to get into coding. My goals with all of this is to switch careers in order to pursue something I'm passionate about. I hope you enjoy my portfolio page and please don't be afraid to reach out! Thank you for your time. </p>
                                    <br /><br />
                                <p className="lead">Phone Number: (619) 277-1629 <br />Email: <a href="mailto: EvanJAlioto@gmail.com" className="text-center">EvanJAlioto@gmail.com</a> <br />Resume: <a href="https://docs.google.com/document/d/14YUydyfDVNHCzf1o1zdv9Au_PWP2n4Ya6CEdGt3-7Fs/export?format=pdf">Click Here For PDF</a></p>
                        
                            </div>
                    </div>
                </main>
            </div>      
        </div>
    );
}

export default HomePage;