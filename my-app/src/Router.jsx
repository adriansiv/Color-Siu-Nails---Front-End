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
                    <Route exact path="/nosotros" component={AboutUs}/>
                    <Route exact path="/servicios" component={Services}/>
                    <Route exact path="/reserva" component={Booking}/>
                    <Route exact path="/contacto" component={Contact}/>
                    <Route exact path="/galeria" component={Gallery}/>
                </Switch>
            <Footer />
        </Router>
    )
};

export default AppRouter;

