import React from 'react'
import './Entry.css'

const Entry = ({ name, tagline, logo, image, opening, closing, sale, valuation, share, total, available }) => {
    return (
        // <div className="entry card">
        //     <span className="name">{name}</span>
        //     <span className="tagline">{tagline}</span>
        // </div>
        <div className="col s12 xl4 entry-container">
            <div className="entry card">
                <div className="card-image">
                    <img src={image} alt=""></img>
                </div>
                <div className="card-content">
                    <div className="entry-header">
                        <div className="company-name column">{name}</div>
                        <div className="company-logo"><img src={logo} alt=""></img></div>
                    </div>
                    <div><span className="company-tagline">{tagline}</span></div>
                    <div>
                        <span className="dates">{opening}-{closing}</span>
                        <span className="sale">{sale}% off</span>
                        <span className="closing-soon">closing soon</span>
                    </div>
                    <div className="values">
                        <div>
                            <p className="value-header">Total Valuation</p>
                            <p className="value-body">$5.5B</p>
                        </div>
                        <div>
                            <p className="value-header">Share Price</p>
                            <p className="value-body">$26.0</p>
                        </div>
                        <div>
                            <p className="value-header">Total Amount</p>
                            <p className="value-body">$520.0k</p>
                        </div>
                    </div>
                    <div className="final">
                        <div>
                            <a className="view-deal" href="https://www.google.com/">View Deal</a>
                        </div>
                        <div className="company-tagline">
                            <p>Subscribed: 0%</p>
                            <p>Available: 200MM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entry;