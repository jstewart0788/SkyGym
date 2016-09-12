import React from 'react'
import ReactDOM from 'react'


const Skymap = React.createClass({
  getInitialState: function(){
    return {wwt: null};
  },
  componentDidMount: function() {

    function wwtReady() {
        wwtControl.loadImageCollection("http://www.worldwidetelescope.org/COMPLETE/wwtcomplete.wtml");
        // Put your custom initialization code here.
    }

    this.state.wwt = wwtlib.WWTControl.initControl("WWTCanvas");
    wwtControl.add_ready(wwtReady);
  },

  render: function() {
    return <div id="WWTCanvas" style={{width:'750px', height:'750px', borderStyle: 'none', borderWidth: '0px'}}></div>;
  }
});

export default Skymap;
