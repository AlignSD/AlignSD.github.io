//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../src/style.css";
// Images
import Tonelist from "../pages//assets/Project-Images/Tonelist-homepage.png";
import planIt from "../pages//assets/Project-Images/plan-it-ss.png";
import CastrSS from "../pages//assets/Project-Images/4CastrSS.png";
import NuPassScreenShot from "../pages//assets/Project-Images/NuPassScreenShot.png";
import SocialMediaApp from "../pages//assets/Project-Images/social-media-app-home-page.png";
import CryptickImg from "../pages/assets/Project-Images/cryptick.png";

import React from 'react'

const PortfolioCard = () => {
  const projects = [
    {
      name: "Cryptick",
      image: CryptickImg,
      description: "Blockchain Ticketing Service utilizing the Ethereum blockchain thru deployed smart contracts.",
      liveLink: "https://ticket-bits.herokuapp.com/home",
      githubLink: "https://github.com/AlignSD/Ticket_Bits",
    },
    {
      name: "Social Media App",
      image: SocialMediaApp,
      description: "Simple social media app that allows users to register, post, comment, like/dislike and delete with user permissions",
      liveLink: "https://social-media-merng-app.herokuapp.com/",
      githubLink: "https://github.com/AlignSD/SocialMediaApp",
    },
    {
      name: "Tonelist",
      image: Tonelist,
      description: "A music webapp where you can find and listen to similar bands in your saved list.",
      liveLink: "https://alignsd.github.io/Tonelist/index.html",
      githubLink: "https://github.com/AlignSD/Tonelist",
    },
    {
      name: "Plan.it",
      image: planIt,
      description: "A daily planner webapp utilizing API services from moment.js",
      liveLink: "https://alignsd.github.io/Plan.it/",
      githubLink: "https://github.com/AlignSD/Plan.it",
    },
    {
      name: "4Castr",
      image: CastrSS,
      description: "A live weather and 5 day forecast webapp utilizing API services from openweathermap.org",
      liveLink: "https://alignsd.github.io/4Castr",
      githubLink: "https://github.com/AlignSD/4Castr",
    },
    {
      name: "NuPass",
      image: NuPassScreenShot,
      description: "A Password Generator",
      liveLink: "https://alignsd.github.io/NuPass",
      githubLink: "https://github.com/AlignSD/NuPass",
    },
  ];

  const renderCard = (project, index) => {
    return (
      <div className="card text-center portfolio-card mr-5 ml-5 mb-5  smallScreenPort" key={index}>
          <img src={project.image} className="card-img-top" alt="screen with code" />
          <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.liveLink} className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Live Product</a>
              <a href={project.githubLink} className="portBtn btn btn-primary portfolioButtons" target="_blank" rel="noreferrer">Github Page</a>
          </div>
        </div> 
        
    )
  }

  return (
   <div>
     {projects.map(renderCard)}
   </div>  
  )
  
   
}

export default PortfolioCard

