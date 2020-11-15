import React from 'react'
import './Sidebar.css'
import { RangeSliderValue, RangeSliderYear } from './RangeSlider'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo"><img class="logo" src="logo.png" alt="" size="33%" /> MARKETX</div>
            <div className="sidebar-header">Filter Companies<i class="material-icons">tune</i></div>
            <form>
                <div className="sidebar-option">
                    <label className="sidebar-label">Search By Name</label>
                    <input value="Enter a company name" />
                </div>
                <div className="sidebar-option">
                    <label className="sidebar-label">Valuation</label>
                    <RangeSliderValue />
                </div>
                <div className="sidebar-option">
                    <label className="sidebar-label">Location</label>

                    <select className="browser-default dropdown" id="location" name="location">
                        <span><i class="material-icons">keyboard_arrow_down</i></span>
                        <option value="all">All Countries</option>
                        <option value="us">United States</option>
                        <option value="china">China</option>
                    </select>
                </div>
                <div className="sidebar-option">
                    <label className="sidebar-label">Year Founded</label>
                    <div className="slider-test">
                        <RangeSliderYear />
                    </div>
                </div>
                <div className="sidebar-option">
                    <label className="sidebar-label">Industries</label>
                    <select className="browser-default dropdown" id="location" name="location">
                        <option value="all">All Industries</option>
                        <option value="unknown1">???</option>
                        <option value="unknown2">???</option>
                    </select></div>
                <div className="sidebar-option">
                    <label className="sidebar-label">Funding Stage</label>
                    <select className="browser-default dropdown" id="location" name="location">
                        <option value="all">All Stages</option>
                        <option value="unknown1">???</option>
                        <option value="unknown2">???</option>
                    </select></div>
                <div>
                    <a className="apply-filters" href="https://www.google.com/">Apply Filters</a>
                </div>
            </form>
        </div>
    )
}

export default Sidebar;