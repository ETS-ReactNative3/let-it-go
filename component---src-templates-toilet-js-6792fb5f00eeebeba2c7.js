(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(t,n,e){"use strict";e.r(n);e(145);var a=e(0),o=e.n(a),i=e(146),r=e(7),l=e.n(r),s=function(t){function n(n){return t.call(this,n)||this}l()(n,t);var e=n.prototype;return e.componentWillUnmount=function(){clearInterval(this.timerID)},e.getGeoLocation=function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(n){t.locationMarker.setPosition({lat:n.coords.latitude,lng:n.coords.longitude}),t.accuracyRadius.setCenter({lat:n.coords.latitude,lng:n.coords.longitude}),t.accuracyRadius.setRadius(n.coords.accuracy)},function(){},{enableHighAccuracy:!0})},e.componentDidMount=function(){var t=this;this.timerID=setInterval(function(){return t.getGeoLocation()},1e3),this.map=new window.google.maps.Map(document.getElementById("map"),{center:{lat:this.props.lat,lng:this.props.lon},zoom:17}),new window.google.maps.Marker({position:{lat:this.props.lat,lng:this.props.lon},map:this.map}),this.locationMarker=new window.google.maps.Marker({map:this.map,icon:"https://i.imgur.com/Rw0L7jC.png",position:{lat:this.props.lat,lng:this.props.lon}}),this.accuracyRadius=new window.google.maps.Circle({map:this.map,center:this.locationMarker.getPosition(),radius:0,fillColor:"#00F",fillOpacity:.2,strokeWeight:0})},e.render=function(){return o.a.createElement("div",{id:"map",style:{width:"100%",height:200}})},n}(o.a.Component),c=e(149),p=function(t){function n(n){return t.call(this,n)||this}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){window.pannellum.viewer("panorama",{type:"equirectangular",panorama:"https://i.imgur.com/hLOKpXy.jpg",yaw:this.props.startingYaw,vaov:45,maxPitch:0,minPitch:0,autoLoad:!0,hotSpots:[{pitch:0,yaw:this.props.startingYaw,type:"info",text:this.props.name}]})},e.render=function(){return o.a.createElement("div",null,o.a.createElement(c.Helmet,null,o.a.createElement("link",{rel:"stylesheet",href:"https://cdn.pannellum.org/2.4/pannellum.css"})),o.a.createElement("div",{id:"panorama",style:{width:"100%",height:200}}))},n}(o.a.Component);e.d(n,"query",function(){return u});n.default=function(t){var n=t.data,e=n.toilets.name,a=n.toilets.lat,r=n.toilets.lon,l=n.toilets.paranomaUrl,c=n.toilets.startingYaw;return o.a.createElement(i.a,null,o.a.createElement("h1",null,e),o.a.createElement(s,{lat:a,lon:r}),o.a.createElement(p,{name:e,paranomaUrl:l,startingYaw:c}),o.a.createElement("p",null,"Todo"))};var u="1515141901"},146:function(t,n,e){"use strict";var a=e(0),o=e.n(a);n.a=function(t){var n=t.children;return o.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},n)}}}]);
//# sourceMappingURL=component---src-templates-toilet-js-6792fb5f00eeebeba2c7.js.map