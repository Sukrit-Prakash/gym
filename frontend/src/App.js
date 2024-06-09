import React from "react";
import { HashRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import './components/Navbar.css'
import './components/Banner.css'

import './components/About.css'
import './components/ChoseUs.css'

import './components/Subscribe.css'
// import './components/MonthlyPlan.css'
import './components/BMI.css'
// import './components/Testimonial.css'
import './components/Footer.css'
import './components/PageHeader.css'
import './components/Features.css'
import './components/Services.css'
import './components/Contact.css'

import './responsive.css'

import Navbar from './components/Navbar';
import HomeNav from "./routes/HomeNav";
// import AboutNav from "./routes/AboutNav";
import FeaturesNav from "./routes/FeaturesNav";
import ContactNav from "./routes/ContactNav";
import Footer from './components/Footer';
import SignUp from "./components/loginsignup/signup";
import Login from "./components/loginsignup/login";
import Profile from "./components/profile/profile";


function App() {
  return (
    <Router basename="/Gym-Website"> 
      <Navbar />

      <Switch>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={HomeNav}></Route>
        {/* <Redirect exact from="/Gym-Website/" to="/home" /> */}
        {/* <Route exact path="/about" component={AboutNav}></Route> */}
        <Route exact path="/features" component={FeaturesNav}></Route>
        <Route exact path="/contact" component={ContactNav}></Route>
        <Route exact path="/profile" component={Profile}></Route>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
