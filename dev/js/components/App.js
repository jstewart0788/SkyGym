import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Skymap from './Skymap'
require('../../scss/style.scss');

const App = () => (
  <div className="body">
    <div className="container-fluid intro">
      <h1 id="title" className="fadeInUp">SkyGym</h1>
      <div className="menuPlanet">
        <img src="images/planet.png" />
        <img src="images/GasGiant-Ca04.png" />
        <img src="images/render_saturn.png" />
      </div>
      <i className="fa fa-angle-down infinitor" aria-hidden="true"></i>
    </div>
    <div className="container-fluid map">
    <Skymap> </Skymap>
    </div>
  </div>

);

export default App;
