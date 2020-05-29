//Navigation index.js


import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

function Index({selection, updateSelection, props}) {

    const [active, setActive ] = useState(selection)
    let phone_in_use = false
    const options = ["About", "Resume", "Projects", "Blogs", "Contact"]

    
    function updatingNavBar(event) {
        event.preventDefault() // This needs to be commented out so url can update
        let nav_bar_link = event.target.text
        setActive(nav_bar_link)
        updateSelection(nav_bar_link)
    }

    useEffect( () => {
        renderNavbar()
  
    }, [])
    
    
    function renderNavbar(event){
 
        if (document.querySelector("#navPanelToggle")){
            phone_in_use = true
            //jquery below... never mixing jquery and reactjs again
            $('div#navPanel nav ul li a').click(function(e) { 
                updatingNavBar(e)
                document.body.classList = ""
                e.stopPropagation();
            });     
        }
        return (
            <ul className="links">
                {options.map ( (value, index) => {
                    if (value === active){
                        return (
                            <li className="active">
                                <Link onClick={(event) => updatingNavBar(event)} to={"/" + selection}>{active}</Link>
                            </li>
                        )
                    } else {
                        return (
                            <li>
                                <Link onClick={(event) => updatingNavBar(event)} to={"/" + value}>{value}</Link>
                            </li> 
                        )
                    }
                })}
            </ul>
        )
    }


    return (
        <>
        {phone_in_use ? 
            <nav id="navPanel">
            {renderNavbar()}
            <ul className="icons">
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/alanbanks229" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alan-banks/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@alanbanks229" className="icon brands fa-medium"><span className="label">Twitter</span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alan_got_banks/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            </ul>
        </nav>
        :
        <nav id="nav">
                {renderNavbar()}
                <ul className="icons">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/alanbanks229" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alan-banks/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@alanbanks229" className="icon brands fa-medium"><span className="label">Twitter</span></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alan_got_banks/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                </ul>
            </nav> }
        </>
    )
}

export default Index
