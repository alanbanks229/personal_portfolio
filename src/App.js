import React, { useEffect, useState} from 'react';
import Copyright from './components/copyright.js'
import Main from './components/Main'

var loadjs = require('loadjs');

let arr_of_scripts = ["/assets/js/jquery.min.js",
"/assets/js/jquery.scrollex.min.js",
"/assets/js/jquery.scrolly.min.js",
"/assets/js/browser.min.js",
"/assets/js/breakpoints.min.js",
"/assets/js/util.js",
"/assets/js/main.js"]

function App(props) {

  const [ currentSelection, setCurrentSelection ] = useState("About")


  // weird predicament where using the below keeps animations going on navigation
  // change but, if I comment this out the navPanel for mobile will show up... but it
  // doesn't redirect... or it does but we need to event.preventDefault()

  //So what we have to do is... some how... check the screen to see if it is a certain size,
  // If it is under 980px width then do not run this function...? so mobile users can use menu
  
  useEffect( () => {
    if (document.body.offsetWidth >= 980 ){
      // debugger
        var initial_panel = document.getElementById('navPanel')
        var initial_nav_panel_toggle = document.getElementById('navPanelToggle')
        var initial_bg_div = document.getElementsByClassName('bg')[0]

        //noticed that introducing jquery into this website causes duplicate html
        // tags to be constructed this is a hacky attempt to git rid of some of the duplicates.
        if (initial_panel){
          initial_panel.parentNode.removeChild(initial_panel)
        }
        for(let index = 0; index < arr_of_scripts.length; index++){
          loadjs(arr_of_scripts[index])
        }
        if (initial_bg_div){
          initial_bg_div.parentNode.removeChild(initial_bg_div)
        }
        if (initial_nav_panel_toggle){
          initial_nav_panel_toggle.parentNode.removeChild(initial_nav_panel_toggle)
        }
      console.log("Rendering display for labtop/desktop/monitor usage")
    } else {
      console.log("Rendering display for phone/tablet usage")
    }
  }, [currentSelection])


  return (
    <>
        <Main props={props} nav_selection={setCurrentSelection}/>
        <Copyright />
    </>
  );
}

export default App;
