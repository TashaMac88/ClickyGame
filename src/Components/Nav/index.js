import React from "react";
import "./index.css";
//import css if you have it.  

function Nav(props) {
    return (
       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
             Clicky Game
            </li>
            <li className="nav-item" centered element>
            {props.message}
            </li>
            
            <li className="nav-item">
            Score:  {props.score}
            </li>
            <li className="nav-item">Top Score: 
             {props.topscore}
            </li>
          </ul>
         
        </div>
      </nav>
  
  
  );
}

export default Nav;



            // you can use a navbar from bootstrap look at activity 19-20 css Demo
            // your going to want to have spots for your score, top score and game instrutions in your navb
            