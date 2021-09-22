import React from 'react';
import TypedComponent  from "../components/TypedComponent";

const Home = props => {
    return (
        <div id="intro">
            <section id="front" class="d-flex flex-column justify-content-center align-items-center px-3">
    <div class="front-container aos-init aos-animate" data-aos="fade-in">
      <h1>ABITRIBE</h1>
      <p className="type-text">The oomph of style :  <TypedComponent /></p>
    </div>

  </section>
        </div>
    );
};

export default Home;