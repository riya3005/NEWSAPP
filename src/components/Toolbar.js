import React from 'react'
import './../cssfiles/Toolbar.css'
import DrawerToggleButton from './DrawerToggleButton'
import logo from './../logo.PNG'; 
import search from './../search.png'; 

const Toolbar = (props) => {
    return (
        <header className="toolbar">
            <div>
            <DrawerToggleButton onClickHandler={props.onClickHandle}/>
            
            </div>
            <div className="newsheader">
                {/*News: Stay Updated */}
                <img src={logo} width={150} height={60} mode='fit' alt="Logo" />
            </div>
            <div className="searchBar">
                {/*News: Stay Updated */}
                <img src={search} width={30} height={30} mode='fit' alt="Search" />
                <input type='text'></input>
            </div>
        </header>
    )
}

export default Toolbar;