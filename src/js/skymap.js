var wwt;

 function initialize() {
     wwt = wwtlib.WWTControl.initControl("WWTCanvas");
     wwtControl.add_ready('wwtReady')
 }

 function wwtReady() {
     wwtControl.loadImageCollection("http://www.worldwidetelescope.org/COMPLETE/wwtcomplete.wtml");
     // Put your custom initialization code here.
 }
