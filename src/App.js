import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueInfo from './components/venueinfo';
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Footer from './components/header_footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '1500px'}}>
        <Element name='countdown'>
          <Header />
        </Element>
        <Featured />
        <Element name='info'>
          <VenueInfo />
        </Element>
        <Element name='highlights'>
          <Highlights />
        </Element>
        <Element name='pricing'>
          <Pricing />
        </Element>
        <Element name='location'>
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;