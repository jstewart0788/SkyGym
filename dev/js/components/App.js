import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (

  <div className="container-fluid">
    <h1 id="title" className="fadeInUp">SkyGym</h1>
    <div className="menuPlanet">
      <img src="images/planet.png" />
      <img src="images/GasGiant-Ca04.png" />
      <img src="images/render_saturn.png" />
    </div>
  </div>
);

export default App;
