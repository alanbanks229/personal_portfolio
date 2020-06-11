import React from 'react'
import './resume.css'
import { Link } from 'react-router-dom'
import PDF from '../../images/Alan_Banks_Resume.pdf'
export default function resume() {
    return (
        <div id="main">

            <section class="post">
                <a href={PDF} target="_blank" className="float_link_right button small" download>
                    Download PDF here
                </a>
                <header>
                    <h2>Resumé</h2>
                </header>
                <div style={{border: "2px solid black"}}className="box">
                    <header className="resume_heading">
                        <h2>TECHNICAL SKILLS</h2>
                    </header>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p className="technical_skills_p">
                        • Javascript • Ruby • Java • Python • ReactJS • Redux • Ruby on Rails • Semantic & Material UI • CSS • <br/>
                        •  HTML5 • RESTful Routing • JSON • PostgreSQL • SQLite •
                        </p>
                    </div>
                    <hr/>
                    <header className="resume_heading">
                        <h2>TECHNICAL PROJECTS</h2>
                    </header>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <h2 style={{fontSize: "24px"}}>Current Trends</h2>
                        <ul class="actions small">
                            <li><a className="button small" rel="noopener noreferrer" target="_blank" href="https://github.com/alanbanks229/current_trends_app_frontend"> Github Frontend</a></li>
                            <li><a className="button small" rel="noopener noreferrer" target="_blank" href="https://github.com/alanbanks229/current_trends_app_backend"> Github Backend</a></li>
                            <li><span className="button small disabled">Demo Soon</span></li>
                        </ul>

                        <p>An online web search engine made for accessing news locally and across the globe. </p>
                        <ul>
                            <li>Utilized NEWSAPI and Microsoft Azure’s Bing News Search API to retrieve local/global news.</li>
                            <li>Utilized OpenWeatherMap’s Weather API and Geolocation API to display local weather information.</li>
                            <li>Constructed with RESTful routing in the backend and utilized React-Router for intuitive URLs</li>
                            <li>User information is stored and encrypted within a PostgreSQL database using Ruby’s “bcrypt” gem. This prevents people with access to the database, to obtain private user information.</li>
                        </ul>
                    </div>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <h2 style={{fontSize: "24px"}}>Draw Off</h2>
                        <ul class="actions small">
                            <li><a className="button small" rel="noopener noreferrer" target="_blank" href="https://github.com/IdleScV/mod4_frontend"> Github Frontend</a></li>
                            <li><a className="button small" rel="noopener noreferrer" target="_blank" href="https://github.com/alanbanks229/mod4_backend"> Github Backend</a></li>
                            <li><a className="button small" rel="noopener noreferrer" target="_blank" href="https://draw-off-app.herokuapp.com/"> Live Site</a></li>
                            <li><a className="button small" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=4vn4oCgs-wc&feature=youtu.be"> Demo Video</a></li>
                        </ul>
                        <p>An online multiplayer game where users are given a prompt to draw and the winner has the most likes.</p>
                        <ul>
                            <li>Consists of servers (game lobbies) that allow asynchronous communication, enabling multiple users to interact in a multiplayer setting. </li>
                            <li>Implemented an authentication flow via FireBase Auth, which checks for auth changes client-side.</li>
                            <li>Implemented custom React Component, “react-canvas-draw” which allows for the drawing capabilities displayed within the app.&lt;br></li>
                        </ul>
                    </div>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <h2 style={{fontSize: "24px"}}>Askit</h2>
                        <ul class="actions small">
                            <li><a className="button small" rel="noopener noreferrer" target="_blank" href="https://github.com/alanbanks229/Mod_2_Project">Github</a></li>
                            <li><span className="button small disabled">Demo Soon</span></li>
                        </ul>
                        <p>An online forum for asking and answering questions posted by multiple users.</p>
                        <ul>
                            <li>Rails application constructed with a MVC framework. (Models, Views, Controller)</li>
                            <li>Utilized the ActiveRecord module to construct numerous associations between objects/classes and set up SQlite database. </li>
                            <li>Views are implemented with ERb syntax making the HTML pages more dynamic.&lt;br></li>
                        </ul>
                    </div>
                    <hr/>
                    <header className="resume_heading">
                        <h2>Experience</h2>
                    </header>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p><strong>Mclean Bible Church</strong>  <em>(Vienna, Virginia)  	</em>08/2015 - Present</p>
                        <p>Youth Praise and Worship Leader</p>
                        <ul>
                            <li>Led congregation in song and promoted a fun and moving atmosphere.</li>
                        </ul>
                    </div>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p><strong>Youth With a Mission</strong>  (<em>Kona, Hawaii & Manila, Philippines)</em>	09/2017 - 3/2019</p>
                        <p>Missionary Evangelist, Team Leader</p>
                        <ul>
                            <li>Worked in inner-city homes, mentoring disadvantaged youth.</li>
                        </ul>
                    </div>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p><strong>Bowdoin College</strong>  <em>(Brunswick, Maine) 	</em>08/2015 - 05/2018</p>
                        <p>Resident Proctor/RA	       </p>
                        <ul>
                            <li>Proctored and Counseled underclassmen. Provided assistance and community to First-Years.</li>
                        </ul>
                    </div>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p><strong>Johns Hopkins Medicine<em>  (Sibley Memorial Hospital)  	</em></strong>06/2012 - 08/2014</p>
                        <p>Emergency Room Volunteer</p>
                        <ul>
                            <li>Provided assistance and resources to healthcare workers.</li>
                        </ul>
                    </div>
                    <hr/>
                    <header className="resume_heading">
                        <h2>Education</h2>
                    </header>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p><strong>University of Maryland Global Campus (UMGC)</strong> 	College Park MD</p>
                        <ul>
                            <li>BS in Computer Science  	expected graduation: Dec 2021</li>
                        </ul>
                    </div>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p><strong>Flatiron School 	</strong>Washington, D.C.</p>
                        <ul>
                            <li>Full Stack Web Development, Ruby on Rails and Javascript program 	01/ 2020 - 05/2020</li>
                        </ul>
                    </div>
                    <div style={{borderColor: "rgb(149, 149, 149)"}} className="box">
                        <p> <strong>Bowdoin College 	</strong>Brunswick, ME</p>
                        <ul>
                            <li>BA in Music  	05 / 2018</li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}
