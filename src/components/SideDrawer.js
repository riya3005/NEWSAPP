import React from 'react'
import './../cssfiles/SideDrawer.css'
import {connect} from 'react-redux'

const SideDrawer = (props) => {
    let sidedrawerclass = "side_drawer"
    if(props.show){
        sidedrawerclass = "side_drawer open"
    }
    let category = '';
    const onClickHandler = (event) => {
        if(event.target.name === 'business'){
            category = 'business';
        }
        else if(event.target.name === 'bitcoin'){
            category = 'bitcoin';
        }
        if(event.target.name === 'wallStreet'){
            category = 'wallStreet';
        }
        if(event.target.name === 'tech'){
            category = 'tech';
        }
        props.updateCategory(category);
    }
    return (
        <div className={sidedrawerclass}>
            <nav className="NavigationItem" >
                <ul>
                    <li> <button name='business'onClick={onClickHandler}>Business</button></li>
                    <li> <button name='bitcoin'onClick={onClickHandler}>Bitcoin</button></li>
                    <li> <button name='tech'onClick={onClickHandler}>Tech Crunch</button></li>
                    <li> <button name='wallStreet'onClick={onClickHandler}>Wall Street Journal</button></li>
                </ul>
            </nav>
        </div>

    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        updateCategory: (category) => dispatch({ type: 'UPDATE NEWS CATEGORY', category }),
       
    };
}

export default connect(null, mapDispatchToProps)(SideDrawer);