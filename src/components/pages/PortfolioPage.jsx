import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../src/style.css"
// import Tonelist from "./assets/Project-Images/Tonelist-homepage.png";
// import planIt from "./assets/Project-Images/plan-it-ss.png";
// import CastrSS from "./assets/Project-Images/4CastrSS.png";
// import NuPassScreenShot from "./assets/Project-Images/NuPassScreenShot.png";
// import SocialMediaApp from "./assets/Project-Images/social-media-app-home-page.png";
// import Cryptick from "./assets/Project-Images/cryptick.png";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

// TODO: [] move to components folder and into own folder from there.
// TODO: [] add pagination.
// TODO: [] improve styling on cards.

const styles = {
    // background: 'red',
    marginTop: '20'
};

// const buttons = {
//     background: "orange"
// }

function PortfolioPage() {
    return (
        <>
    <div id='portfolio'></div>
        <div style={styles}  className="vertical-center d-flex align-items-center safari10" >
            <div className="container col-12 portfoliomargin">
                <main role="main" className="row justify-content-center align-items-stretch portfoliomargin">
                    <PortfolioCard />
                    {/* <div className="card text-center portfolio-card mr-5 ml-5 mb-5  smallScreenPort col-lg-5 col-sm" >
                        <img src={SocialMediaApp} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">Social Media App</h5>
                            <p className="card-text">Simple social media app that allows users to register, post, comment, like/dislike and delete with user
permissions. </p>
                            <a href="https://social-media-merng-app.herokuapp.com/" className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Live Product</a>
                            <a href="https://github.com/AlignSD/SocialMediaApp" className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Github Page</a>
                        </div>
                    </div>
                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5  smallScreenPort col-lg-5 col-sm">
                        <img src={Cryptick} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">Cryptick</h5>
                            <p className="card-text">Blockchain Ticketing Service utilizing the Ethereum blockchain thru deployed smart contracts.</p>
                            <a href="https://alignsd.github.io/Plan.it/" className="portBtn btn btn-primary margin-right-20 portfolioButtons" target="_blank" rel="noreferrer">Live Product</a>
                            <a href="https://github.com/AlignSD/Ticket_Bits" className="portBtn btn btn-primary mx-20 portfolioButtons" target="_blank" rel="noreferrer">Github Page</a>
                        </div>
                    </div>
                    <div className="w-100"></div>

                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5  smallScreenPort col-lg-5 col-sm" >
                        <img src={Tonelist} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">Tonelist</h5>
                            <p className="card-text">A music webapp where you can find and listen to similar bands in your saved list</p>
                            <a href="https://alignsd.github.io/Tonelist/index.html" className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Live Product</a>
                            <a href="https://github.com/AlignSD/Tonelist" className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Github Page</a>
                        </div>
                    </div>
                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5  smallScreenPort col-lg-5 col-sm">
                        <img src={planIt} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">Plan.it</h5>
                            <p className="card-text">A daily planner webapp utilizing API services from moment.js</p>
                            <a href="https://alignsd.github.io/Plan.it/" className="portBtn btn btn-primary margin-right-20 portfolioButtons" target="_blank" rel="noreferrer">Live Product</a>
                            <a href="https://github.com/AlignSD/Plan.it" className="portBtn btn btn-primary mx-20 portfolioButtons" target="_blank" rel="noreferrer">Github Page</a>
                        </div>
                    </div>
                    <div className="w-100"></div>

                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5  smallScreenPort col-lg-5 col-sm" >
                        <img src={CastrSS} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">4Castr</h5>
                            <p className="card-text">A live weather and 5 day forecast webapp utilizing API services from openweathermap.org</p>
                            <a href="https://alignsd.github.io/4Castr" className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Live Product</a>
                            <a href="https://github.com/AlignSD/4Castr" className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Github Page</a>
                        </div>
                    </div>

                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5 smallScreenPort col-lg-5 col-sm" >
                        <img src={NuPassScreenShot} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">NuPass</h5>
                            <p className="card-text">A Password Generator</p>
                            <a href="https://alignsd.github.io/NuPass" className="btn btn-primary portBtn portfolioButtons" target="_blank" rel="noreferrer">Live Product</a>
                            <a href="https://github.com/AlignSD/NuPass" className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Github Page</a>
                        </div>
                    </div> */}

                </main>
            </div>
        </div>
        </>
    );
}

export default PortfolioPage;