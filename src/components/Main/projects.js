import React from 'react'
import './projects.css'

export default function projects() {
    return (
        <div id="main">

        {/* <!-- Featured Post --> */}
        <article class="post featured">
            <header class="major">
                <h2><a href="#">Projects</a></h2>
            </header>
            <hr/>
            <h2>My latest project<br/>"Current Trends"</h2>
            <ul className="project-git-logo-ul">
                <li>
                    <h2 className="project-git-logo icon brands fa-github large">Github: </h2>
                    <a rel="noopener noreferrer" target="_blank" className="project-git-links-front-end button small" href="https://github.com/alanbanks229/current_trends_app_frontend">Front-End</a>
                    <a rel="noopener noreferrer" target="_blank" className="project-git-links-back-end button small" href="https://github.com/alanbanks229/current_trends_app_backend">Back-End</a>
                </li>
            </ul>
            <a href="#" class="image main"><img src="images/current_trends_screenshot.png" alt="" /></a>
            <ul class="actions special">
                <li><a rel="noopener noreferrer" target="_blank" href="https://current-trends-app.herokuapp.com/" className="button large">Live Site</a></li>
            </ul>
            <p style={{color: 'red'}}><b>Update: 6/3/20</b>
                <br/>
                Unfortunately due to changes in NEWSAPI developer plan, the live site will not be able to fetch the articles. You can only fetch articles from
                your local servers :(
            </p>
            <p>An online search engine where users can get news around the world.<br/>
                <li>Filter news by categories and languages</li>
                <li>Get your local news</li>
                <li>Get your local 5-day weather forecast</li>
            </p>
        </article>

        {/* <!-- Posts --> */}
        <section class="posts">
            <article>
                <header>
                {document.body.offsetWidth >= 980 ? 
                (<h2><a href="#">Mod 4 Project<br />
                "Draw Off"</a></h2>) : 
                (<h2><a href="#">Mod 4 <br/>Project
				<p style={{textAlign: "center"}}>"Draw Off"</p></a></h2>)
                }
                </header>
                <ul className="project-git-logo-ul-smaller">
                    <li>
                        <h3 className="project-git-logo-smaller icon brands fa-github">Github: </h3>
                        <a rel="noopener noreferrer" target="_blank" className="project-git-links-front-end button small" href="https://github.com/IdleScV/mod4_frontend">Front-End</a>
                        <a rel="noopener noreferrer" target="_blank" className="project-git-links-back-end button small" href="https://github.com/alanbanks229/mod4_backend">Back-End</a>
                    </li>
                </ul>
                <a href="#" class="image fit"><img src="images/mod4_pic_in_action.png" alt="" /></a>
                <p>An online multiplayer game where users are given a prompt to draw and the winner has the most likes.<br/>
                <li> Multiple game lobbies!</li>
                <li>Play to get the highest rating!</li>
                </p>
                <ul class="actions special">
                    <li><a rel="noopener noreferrer" target="_blank" href="https://draw-off-app.herokuapp.com/" class="button">Live Site</a></li>
                </ul>
            </article>
            <article>
                <header>
                {document.body.offsetWidth >= 980 ? 
                (<h2><a href="#">Mod 2 Project<br />
                "Askit"</a></h2>) : 
                (<h2><a href="#">Mod 2 <br/>Project
				<p style={{textAlign: "center"}}>"Askit"</p></a></h2>)
                }
                </header>
                <ul className="project-git-logo-ul-smaller">
                    <li>
                        <h3 className="project-git-logo-smaller icon brands fa-github">Github: </h3>
                        <a rel="noopener noreferrer" target="_blank" className="project-git-links-front-end button small" href="https://github.com/alanbanks229/Mod_2_Project">Github</a>
                    </li>
                </ul>
                {document.body.offsetWidth >= 980 ? (null) : (<div style={{paddingBottom: "4.4rem",position: "absolute;"}}></div>)}
                <a href="#" class="image fit"><img src="images/mod2_pic_in_action.png" alt="" /></a>
                <p>An online forum where you can post any kind of question under specific categories and receive responses from other users who use this app!
                    <br/>
                    Users can also add additional categories with validations from admins.
                </p>
                <ul className="live_link_ul actions special">
                    <li><span className="button disabled">Coming Soon</span></li>
                </ul>
            </article>
        </section>

            <header className="major">
                <span className="date">More to come 😊</span>
            </header>

        </div>
    )
}
