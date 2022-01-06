import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import AboutUs from './components/About Us/AboutUs';
import Booking from './components/Booking/Booking';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Services from './components/Services/Services';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";

const AppRouter = () => { 
    return (
        <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/aboutus" component={AboutUs}/>
                    <Route exact path="/services" component={Services}/>
                    <Route exact path="/booking" component={Booking}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/gallery" component={Gallery}/>
                </Switch>
            <Footer />
        </Router>
    )
};

export default AppRouter;

