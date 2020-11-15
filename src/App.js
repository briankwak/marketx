import React, { Component } from 'react';
import './App.css';
import Entry from './components/Entry';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

class App extends Component {
  state = {
    entries: [
      {
        name: "Robinhood",
        tagline: "Robinhood, a pioneer of commission-free investing",
        image: "covers/robinhood.png",
        logo: "logos/robinhood.png",
        opening: "9/21",
        closing: "9/30",
        sale: 20,
      },
      {
        name: "Stripe",
        tagline: "Robinhood, a pioneer of commission-free investing",
        image: "covers/stripe.png",
        logo: "logos/stripe.png",
        opening: "9/22",
        closing: "10/01",
        sale: 15,
      }
    ]
  }
  entryList = () => {
    return this.state.entries.map(entry =>
      (
        <Entry
          name={entry.name}
          tagline={entry.tagline}
          image={entry.image}
          logo={entry.logo}
          opening={entry.opening} closing={entry.closing}
          sale={entry.sale}
        />
      )
    )
  }
  render() {
    return (
      <div className="marketx-app row">
        <Sidebar />
        <div className="header-content">
          <Header />
          <div className="header-sort">
            <div>Found 140 companies</div>
            <div className="sort-dropdown">
              <label className="sort-label">Sort by:</label>
              <select className="browser-default sort-select" id="sort" name="sort">
                <option value="hot">Hottest</option>
                <option value="new">New</option>
                <option value="closing">Closing</option>
              </select>
            </div>
          </div>
          <div className="content row">
            {this.entryList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
