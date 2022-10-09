import React from 'react';
import texteditor from '../../images/ReadMePic.PNG'
import socialNetwork from '../../images/SocialNetwork.PNG'
import techBlog from '../../images/TechBlog.PNG'
import eCommerence from '../../images/eCommerence.PNG'
import employeeTracker from '../../images/EmployeeTracker.png'
import weather from '../../images/weather.png'

export default function Portfolio() {
  return (
    <div>
      <p>
      <div>
      <h1>Portfolio Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card" style= {{width: '18rem'}}>
              <img className="card-img-top" src={texteditor} alt="Text Editor Picture"/>
                <div className="card-body">
                  <h5 className="card-title">PWA Text Editor</h5>
                  <p className="card-text">This program taught us to build a text editor by using methods to get and store data to an IndexedDB database.</p>
                  <a href="https://github.com/tgallagher496/Challenge19-PWATextEditor" className="btn btn-primary">Git Hub Repo</a>
                </div>
            </div>
            <div className="card" style= {{width: '18rem'}}>
              <img className="card-img-top" src={socialNetwork} alt="Social Netowrk Picture"/>
                <div className="card-body">
                  <h5 className="card-title">Social Network</h5>
                  <p className="card-text">This program taught us how to use Mongo DB database and solidified our knowledge with API routes Insomnia. </p>
                  <a href="https://github.com/tgallagher496/Challenge18-SocialNetwork" className="btn btn-primary">GitHub Repo</a>
                  <a href="https://github.com/tgallagher496/Challenge18-SocialNetwork" className="btn btn-primary">Video Demonstration</a>
                </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style= {{width: '18rem'}}>
              <img className="card-img-top" src={techBlog} alt="Tech Blog Image"/>
                <div className="card-body">
                  <h5 className="card-title">Tech Blog</h5>
                  <p className="card-text">This program taught us how to put everything that we have learned in this course into application.</p>
                  <a href="https://github.com/tgallagher496/Challenge14-TechBlog" className="btn btn-primary">GitHub Repo</a>
                </div>
            </div>
            <div className="card" style= {{width: '18rem'}}>
              <img className="card-img-top" src={eCommerence} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">E-Commerence BackEnd</h5>
                  <p className="card-text">This program allowed us to learn ORM and insomnia.</p>
                  <a href="https://github.com/tgallagher496/Challenge13-E-CommerceBackEnd" className="btn btn-primary">GitHub Repo</a>
                  <a href='https://drive.google.com/file/d/1_quixHAzZfFOKyF4TbkWJd8Ca0zM_Ty4/view' className = "btn btn-primary">Video Demonstration</a>
                </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style= {{width: '18rem'}}>
              <img className="card-img-top" src={employeeTracker} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Employee Tracker</h5>
                  <p className="card-text">This project helped us to learn about sql.</p>
                  <a href="https://github.com/tgallagher496/Challenge12EmployeeTracker" className="btn btn-primary">GitHub Repo</a>
                  <a href='https://drive.google.com/file/d/1A2-LzW6pOdRuQ72E4ovVz3Tl2rlETW3d/view' className = "btn btn-primary">Video Demonstration</a>
                </div>
            </div>
            <div className="card" style= {{width: '18rem'}}>
              <img className="card-img-top" src={weather} alt="weather forcast picture"/>
                <div className="card-body">
                  <h5 className="card-title">Weather Forcast</h5>
                  <p className="card-text">This challenge uses weather API's to present the user with the current weather and a 5-day forcast of the city the user searches for.  The cities searched are stored in local storage and the last four searches are stored in a button on the screen for the user to easily access this information again.  </p>
                  <a href="https://github.com/tgallagher496/Challenge6-WeatherForcast" className="btn btn-primary">GitHub Repo</a>
                  <a href="https://tgallagher496.github.io/Challenge6-WeatherForcast/" className="btn btn-primary">Live Site</a>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </p>
    </div>
  );
}