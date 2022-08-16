import React from "react";
import Header from "./components/Header";
import './components/Header.css'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Service from "./components/Service";
import './components/Service.css'
import ServiceII from "./components/ServiceII";
import './components/ServiceII.css'
import Cargo from "./components/Cargo";
import './components/Cargo.css'
import Additional from "./components/Additional";
import './components/Additional.css'

function App() {
  return (
    <div className="App">
      <Header />
      <section>
      <span><FontAwesomeIcon icon={faArrowLeft} /></span>
      <span className="heading">
      <h2 className="head">New Booking</h2>
      <p className="head-p">Fill in the information below to get a quote or create a new booking</p>
      </span>
      </section>
      <Service />
      <ServiceII />
      <Cargo />
      <Additional />
    </div>
  );
}

export default App;
