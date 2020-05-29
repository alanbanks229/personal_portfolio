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
            <a className="project-git-links-back-end button small" href="#">Back-End</a>
            <a className="project-git-links-front-end button small" href="#">Front-End</a>
        </li>
    </ul>
    <a href="#" class="image main"><img src="images/current_trends_screenshot.png" alt="" /></a>
    <ul class="actions special">
        <li><a target="_blank" href="https://current-trends-app.herokuapp.com/" className="button large">Live Site</a></li>
    </ul>
</article>

{/* <!-- Posts --> */}
<section class="posts">
    <article>
        <header>
            <h2><a href="#">Mod 4 Project<br />
            "Draw Off"</a></h2>
        </header>
        <ul className="project-git-logo-ul-smaller">
            <li>
                <h3 className="project-git-logo-smaller icon brands fa-github">Github: </h3>
                <a className="project-git-links-back-end button small" href="#">Back-End</a>
                <a className="project-git-links-front-end button small" href="#">Front-End</a>
            </li>
        </ul>
        <a href="#" class="image fit"><img src="images/mod4_pic_in_action.png" alt="" /></a>
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
        <ul class="actions special">
            <li><a target="_blank" href="https://draw-off-app.herokuapp.com/" class="button">Live Site</a></li>
        </ul>
    </article>
    <article>
        <header>
            <h2><a href="#">Primis eget<br />
            imperdiet lorem</a></h2>
        </header>
        <a href="#" class="image fit"><img src="images/pic03.jpg" alt="" /></a>
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
        <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
        </ul>
    </article>
    <article>
        <header>
            <h2><a href="#">Ante mattis<br />
            interdum dolor</a></h2>
        </header>
        <a href="#" class="image fit"><img src="images/pic04.jpg" alt="" /></a>
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
        <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
        </ul>
    </article>
    <article>
        <header>
            <h2><a href="#">Tempus sed<br />
            nulla imperdiet</a></h2>
        </header>
        <a href="#" class="image fit"><img src="images/pic05.jpg" alt="" /></a>
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
        <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
        </ul>
    </article>
    <article>
        <header>
            <h2><a href="#">Odio magna<br />
            sed consectetur</a></h2>
        </header>
        <a href="#" class="image fit"><img src="images/pic06.jpg" alt="" /></a>
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
        <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
        </ul>
    </article>
    <article>
        <header>
            <h2><a href="#">Augue lorem<br />
            primis vestibulum</a></h2>
        </header>
        <a href="#" class="image fit"><img src="images/pic07.jpg" alt="" /></a>
        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
        <ul class="actions special">
            <li><a href="#" class="button">Full Story</a></li>
        </ul>
    </article>
</section>

</div>
    )
}
