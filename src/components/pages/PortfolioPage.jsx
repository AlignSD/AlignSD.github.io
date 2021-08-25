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

                </main>
            </div>
        </div>
        </>
    );
}

export default PortfolioPage;