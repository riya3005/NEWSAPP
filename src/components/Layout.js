
import Toolbar from './Toolbar'
import './../cssfiles/DisplayPage.css'
import React, { Component } from 'react'
import SideDrawer from './SideDrawer'

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }
    toogleButtonHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            }
        })
    }
    render() {
        return (
            <div>
                <SideDrawer show={this.state.sideDrawerOpen} />
                <Toolbar onClickHandle = {this.toogleButtonHandler} />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;
