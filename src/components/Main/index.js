//Main index.js   aka the main content

//Maybe put state in here to see what state clientside the user 
//is looking at.

import React, {useState, useEffect} from 'react'
import About from './about.js'
import Resume from './resume.js'
import Blogs from './blogs.js'
import Projects from './projects.js'
import Contact from './contact.js'
import Navigation from '../Navigation/index.js'
import Intro from '../intro.js'
import './about.css'
import { withRouter, Link } from 'react-router-dom';

function Index(props) {

    const [currentSelection, setCurrentSelection] = useState("About")

    useEffect( () => {
        renderMainContent()
    }, [currentSelection])

    function updateNavBar(choice) {
        // if (choice === "About"){
        //     props.history.push("/")
        // }
        setCurrentSelection(choice)
        if (document.body.offsetWidth >= 980 ){
            // debugger
            props.nav_selection(choice)
        }
    }

    function renderMainContent(choice){
        switch (currentSelection){
            case "About":
                return (
                    <>
                        <About />
                    </>
                    )
            case "Resume":
                return (
                <>
                    <Resume />
                </>
                )
            case "Projects":
                return (
                    <>
                        <Projects />
                    </>
                    )
            case "Blogs":
                return (
                    <>
                        <Blogs />
                    </>
                )
            case "Contact":
                return (
                    <>
                        <Contact />
                    </>
                )
            default:
                return (
                    <>
                        <About />
                    </>
                    )
        }
    }

    return (
        <>
        {currentSelection === "About" ?
        <>
        <Intro />
        <header id="header">
             {/* Here we need to use personal_portfolio for github website, if not we need a href="/about" */}
            <a href='/personal_portfolio/' className="logo">My Portfolio</a>
        </header>
        <Navigation props={props} selection={currentSelection} updateSelection={updateNavBar}/>        
        {renderMainContent()}
        </>
        : 
        <>
        <header id="header">
            {/* Here we need to use personal_portfolio for github website, if not we need a href="/about" */}
            <a href='/personal_portfolio/' className="logo">My Portfolio</a>
        </header>
        <Navigation props={props} selection={currentSelection} updateSelection={updateNavBar}/>        
        {renderMainContent()}
        </>
        }
        </>
    )
}

export default withRouter(Index)