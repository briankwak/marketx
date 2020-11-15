import React, { Component } from 'react'
import './Header.css'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'

class Header extends Component {
    state = {
        activeTop: 0,
        activeBottom: 0
    }
    toggleActive = (top, value) => {
        if(top) this.setState({activeTop: value});
        else this.setState({activeBottom: value});
    }
    render() {
        return (
            <nav class="nav-extended">
                <Router>
                    <div class="nav-wrapper nav-header">
                        <a className={this.state.activeTop===0 ? "header-link active" : "header-link"} onClick={() => {this.toggleActive(true, 0)}}>Buy Shares</a>
                        <a className={this.state.activeTop===1 ? "header-link active" : "header-link"} onClick={() => {this.toggleActive(true, 1)}}>Sell Shares</a>
                        <div className="profile right">
                            <img src="Oval.png" class="profile-pic" alt="" />
                            <i class="material-icons">keyboard_arrow_down</i>
                        </div>
                    </div>
                    <div class="nav-content">
                        <ul class="tabs tabs-transparent">
                            <li class="tab">
                                <a className={this.state.activeBottom===0 ? "active" : null} onClick={() => {this.toggleActive(false,0)}}>Hottest Deals</a>
                                </li>
                            <li class="tab">
                                <a className={this.state.activeBottom===1 ? "active" : null} onClick={() => {this.toggleActive(false,1)}}>New Deals</a>
                                </li>
                            <li class="tab">
                                <a className={this.state.activeBottom===2 ? "active" : null} onClick={() => {this.toggleActive(false,2)}}>Closing Soon</a>
                                </li>
                        </ul>
                    </div>
                </Router>
            </nav>
        )
    }
}

export default Header;