import React from 'react'
import AboutPage from './AboutPage'
import ContactUs from './ContactUs'
import HomePage from './HomePage'
import LandingHeader from "./LandingHeader"
import Services from './Services'
// import SideBars from './SideBars'

const LandingPage = () => {
    const [toggle, setToggle] = React.useState(false);

  const onToggle = () => {

    if (window.scrollY >= 100) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  
  window.addEventListener("scroll", onToggle);
    return (
        <div>
            <LandingHeader/>
            <HomePage/>
            <AboutPage/>
            <Services/>
            <ContactUs/>
        </div>
    )
}

export default LandingPage
