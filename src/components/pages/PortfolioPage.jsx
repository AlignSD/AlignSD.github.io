import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../src/style.css"
import Tonelist from "./assets/Project-Images/Tonelist-homepage.png";
import planIt from "./assets/Project-Images/plan-it-ss.png";
import CastrSS from "./assets/Project-Images/4CastrSS.png";
import NuPassScreenShot from "./assets/Project-Images/NuPassScreenShot.png";

const styles = {
    // background: 'red',
    marginTop: '20'
};

function PortfolioPage() {
    return (
        <div style={styles} className="vertical-center d-flex align-items-center" id="portfolio" >
            <div className="container col-12 portfoliomargin">
                <main role="main" className="row justify-content-center align-items-stretch portfoliomargin">
                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5 mt-5 smallScreenPort col-lg-5 col-sm" >
                        <img src={Tonelist} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">Tonelist</h5>
                            <p className="card-text">A music webapp where you can find and listen to similar bands in your saved list</p>
                            <a href="https://alignsd.github.io/Tonelist/index.html" className="portBtn btn btn-primary">Live Product</a>
                            <a href="https://github.com/AlignSD/Tonelist" className="portBtn btn btn-primary">Github Page</a>
                        </div>
                    </div>
                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5 mt-5 smallScreenPort col-lg-5 col-sm">
                        <img src={planIt} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">Plan.it</h5>
                            <p className="card-text">A daily planner webapp utilizing API services from moment.js</p>
                            <a href="https://alignsd.github.io/Plan.it/" className="portBtn btn btn-primary margin-right-20">Live Product</a>
                            <a href="https://github.com/AlignSD/Plan.it" className="portBtn btn btn-primary mx-20">Github Page</a>
                        </div>
                    </div>
                    <div className="w-100"></div>

                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5 mt-5 smallScreenPort col-lg-5 col-sm" >
                        <img src={CastrSS} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">4Castr</h5>
                            <p className="card-text">A live weather and 5 day forecast webapp utilizing API services from openweathermap.org</p>
                            <a href="https://alignsd.github.io/4Castr" className="portBtn btn btn-primary">Live Product</a>
                            <a href="https://github.com/AlignSD/4Castr" className="portBtn btn btn-primary">Github Page</a>
                        </div>
                    </div>

                    <div className="card text-center portfolio-card mr-5 ml-5 mb-5 mt-5 smallScreenPort col-lg-5 col-sm" >
                        <img src={NuPassScreenShot} className="card-img-top" alt="screen with code" />
                        <div className="card-body">
                            <h5 className="card-title">NuPass</h5>
                            <p className="card-text">A Password Generator</p>
                            <a href="https://alignsd.github.io/NuPass" className="btn btn-primary portBtn ">Live Product</a>
                            <a href="https://github.com/AlignSD/NuPass" className="portBtn btn btn-primary">Github Page</a>
                        </div>
                    </div>

                </main>
            </div>
        </div>

    );
}

export default PortfolioPage;