(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(e,t,a){"use strict";a.r(t);a(36),a(161),a(148);var n=a(34),i=a.n(n),l=a(7),s=a.n(l),r=a(0),o=a.n(r),c=a(150),h=a(147),u=o.a.createElement("div",{style:{textAlign:"left"}},"Legend:",o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("i",{className:"em-svg em-man-raising-hand"}),": Has male toilet"),o.a.createElement("li",null,o.a.createElement("i",{className:"em-svg em-woman-raising-hand"}),": Has female toilet"),o.a.createElement("li",null,o.a.createElement("i",{className:"em-svg em-wheelchair"}),": Is handicapped accessible (Includes seperate handicapped toilets or those inside toilets as a larger cubicle)"))),m=function(){return o.a.createElement(h.a,{content:u})},d=o.a.createElement("div",{style:{textAlign:"left"}},"Choosing an option will remove any toilet without the chosen feature from the list. Multiple selections will make criteria more stringent.",o.a.createElement("br",null),'E.g. Selecting "Male" and "Has Water Cooler" will only show toilets that has Male toilets and has a water cooler nearby.'),g=function(){return o.a.createElement(h.a,{content:d})},p=a(153),f=function(e){function t(t){var a;(a=e.call(this,t)||this).pageSize=a.props.pageSize>a.props.children.length?a.props.children.length:a.props.pageSize,a.pageButtons=[];for(var n=0;n<Math.ceil(a.props.children.length/a.pageSize);n++)a.pageButtons.push(n+1);return a.pages=a.props.children.reduce(function(e,t,n){return n%a.pageSize==0?(e.push([t]),e):(e[e.length-1].push(t),e)},[]),a}return s()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement("tbody",null,this.pages[this.props.pageNumber-1],this.pageSize<this.props.children.length&&o.a.createElement("tr",null,o.a.createElement("td",{colSpan:2,style:{border:"0",textAlign:"center"}},this.pageButtons.map(function(t,a){return o.a.createElement("button",{onClick:e.props.handlePageChange,id:a+1,key:a+1,disabled:e.props.pageNumber===a+1},t)}))))},t}(o.a.Component),S=a(151),C=a(146),E=a(149);a.d(t,"default",function(){return b}),a.d(t,"query",function(){return y});var b=function(e){function t(t){var a;return(a=e.call(this,t)||this).paginateKey=0,a.state={isLocationAvailable:!1,toilets:a.props.data.allToilets.nodes.slice(0),myLat:null,myLon:null,sortBy:"name",isFilterHidden:!0,maleChecked:!1,femaleChecked:!1,handicappedChecked:!1,waterCoolerChecked:!1,showerHeadsChecked:!1,hoseChecked:!1,pageSize:10,pageNumber:1},a.sortByDistance=a.sortByDistance.bind(i()(a)),a.compareDistance=a.compareDistance.bind(i()(a)),a.sortByName=a.sortByName.bind(i()(a)),a.getLocation=a.getLocation.bind(i()(a)),a.handleChange=a.handleChange.bind(i()(a)),a.handleClick=a.handleClick.bind(i()(a)),a.handleFilterChange=a.handleFilterChange.bind(i()(a)),a.isShown=a.isShown.bind(i()(a)),a.handlePageSize=a.handlePageSize.bind(i()(a)),a.handlePageChange=a.handlePageChange.bind(i()(a)),a.getState=a.getState.bind(i()(a)),a.storeState=a.storeState.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("beforeunload",this.storeState),this.getState(),this.getLocation()},a.componentWillUnmount=function(){this.storeState(),window.removeEventListener("beforeunload",this.storeState)},a.getState=function(){sessionStorage.length>1&&this.setState({sortBy:JSON.parse(sessionStorage.getItem("sortBy")),maleChecked:JSON.parse(sessionStorage.getItem("maleChecked")),femaleChecked:JSON.parse(sessionStorage.getItem("femaleChecked")),handicappedChecked:JSON.parse(sessionStorage.getItem("handicappedChecked")),waterCoolerChecked:JSON.parse(sessionStorage.getItem("waterCoolerChecked")),showerHeadsChecked:JSON.parse(sessionStorage.getItem("showerHeadsChecked")),hoseChecked:JSON.parse(sessionStorage.getItem("hoseChecked")),pageSize:JSON.parse(sessionStorage.getItem("pageSize")),pageNumber:JSON.parse(sessionStorage.getItem("pageNumber")),isFilterHidden:JSON.parse(sessionStorage.getItem("isFilterHidden"))})},a.storeState=function(){sessionStorage.setItem("sortBy",JSON.stringify(this.state.sortBy)),sessionStorage.setItem("maleChecked",JSON.stringify(this.state.maleChecked)),sessionStorage.setItem("femaleChecked",JSON.stringify(this.state.femaleChecked)),sessionStorage.setItem("handicappedChecked",JSON.stringify(this.state.handicappedChecked)),sessionStorage.setItem("waterCoolerChecked",JSON.stringify(this.state.waterCoolerChecked)),sessionStorage.setItem("showerHeadsChecked",JSON.stringify(this.state.showerHeadsChecked)),sessionStorage.setItem("hoseChecked",JSON.stringify(this.state.hoseChecked)),sessionStorage.setItem("pageSize",JSON.stringify(this.state.pageSize)),sessionStorage.setItem("pageNumber",JSON.stringify(this.state.pageNumber)),sessionStorage.setItem("isFilterHidden",JSON.stringify(this.state.isFilterHidden))},a.handleChange=function(e){this.setState({sortBy:e.target.value,pageNumber:1}),"name"===e.target.value?this.sortByName():this.sortByDistance()},a.handlePageSize=function(e){this.setState({pageSize:parseInt(e.target.value),pageNumber:1})},a.handleClick=function(){this.setState({isFilterHidden:!this.state.isFilterHidden})},a.handleFilterChange=function(e){var t;this.setState(((t={pageNumber:1})[e.target.name]=!this.state[e.target.name],t))},a.sortByDistance=function(){var e=this.state.toilets.slice(0);e.sort(this.compareDistance),this.setState({toilets:e})},a.compareDistance=function(e,t){return C.g(e.lat,e.lon,this.state.myLat,this.state.myLon)-C.g(t.lat,t.lon,this.state.myLat,this.state.myLon)},a.sortByName=function(){var e=this.state.toilets.slice(0);e.sort(function(e,t){return e.name.localeCompare(t.name)}),this.setState({toilets:e})},a.isShown=function(e){return(!this.state.maleChecked||C.e(e))&&(!this.state.femaleChecked||C.c(e))&&(!this.state.handicappedChecked||C.d(e))&&(!this.state.showerHeadsChecked||C.i(e))&&(!this.state.hoseChecked||C.h(e))&&(!this.state.waterCoolerChecked||C.j(e))},a.getLocation=function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){e.setState({myLat:t.coords.latitude,myLon:t.coords.longitude,isLocationAvailable:!0}),"distance"===e.state.sortBy&&e.sortByDistance()},function(){e.setState({isLocationAvailable:!1})},{enableHighAccuracy:!0}):this.setState({isLocationAvailable:!1})},a.handlePageChange=function(e){this.setState({pageNumber:parseInt(e.target.id)})},a.render=function(){var e=this,t={fontSize:"calc(0.6em + 0.5vw)"};return o.a.createElement(c.a,{main:!0},o.a.createElement(E.Helmet,null,o.a.createElement("title",null,"Let It Go")),o.a.createElement("h1",null,"Let It Go"),o.a.createElement("div",{style:{float:"right",marginLeft:"10px"}},o.a.createElement("label",null,"Show:"," ",o.a.createElement("select",{value:this.state.pageSize,onChange:this.handlePageSize},o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"15"},"15"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"25"},"25"),o.a.createElement("option",{value:"30"},"30"),o.a.createElement("option",{value:"35"},"35"),o.a.createElement("option",{value:"40"},"40")))),o.a.createElement("div",{style:{float:"right"}},o.a.createElement("label",null,"Sort by:"," ",o.a.createElement("select",{value:this.state.sortBy,onChange:this.handleChange},o.a.createElement("option",{value:"name"},"Name"),this.state.isLocationAvailable&&o.a.createElement("option",{value:"distance"},"Distance")))),o.a.createElement("button",{onClick:this.handleClick},this.state.isFilterHidden?"Filter":"Hide"),!this.state.isFilterHidden&&o.a.createElement("div",null,o.a.createElement("p",null,"Show only",o.a.createElement(g,null),":"),o.a.createElement("label",null,o.a.createElement("input",{name:"maleChecked",type:"checkbox",checked:this.state.maleChecked,onChange:this.handleFilterChange}),"Male"),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{name:"femaleChecked",type:"checkbox",checked:this.state.femaleChecked,onChange:this.handleFilterChange}),"Female"),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{name:"handicappedChecked",type:"checkbox",checked:this.state.handicappedChecked,onChange:this.handleFilterChange}),"Handicapped accessible"),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{name:"showerHeadsChecked",type:"checkbox",checked:this.state.showerHeadsChecked,onChange:this.handleFilterChange}),"Has Shower Heads"),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{name:"hoseChecked",type:"checkbox",checked:this.state.hoseChecked,onChange:this.handleFilterChange}),"Has Hoses"),o.a.createElement("br",null),o.a.createElement("label",null,o.a.createElement("input",{name:"waterCoolerChecked",type:"checkbox",checked:this.state.waterCoolerChecked,onChange:this.handleFilterChange}),"Has Water Cooler"),o.a.createElement("br",null)),!this.state.isLocationAvailable&&o.a.createElement(p.a,null),o.a.createElement("table",{style:{tableLayout:"fixed"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name",this.state.isLocationAvailable&&o.a.createElement("div",{style:{color:"gray",fontSize:"80%"}},"Distance")),o.a.createElement("th",{style:{textAlign:"center"}},"Types",o.a.createElement(m,null)))),o.a.createElement(f,{key:this.paginateKey++,pageSize:this.state.pageSize,pageNumber:this.state.pageNumber,handlePageChange:this.handlePageChange},this.state.toilets.filter(this.isShown).map(function(a,n){return o.a.createElement("tr",{key:n},o.a.createElement("td",null,o.a.createElement(S.a,{to:"/"+a.name.replace(/\s/g,"")},a.name),o.a.createElement("br",null),e.state.isLocationAvailable&&o.a.createElement("span",{style:{color:"gray",fontSize:"80%"}},C.a(C.g(e.state.myLat,e.state.myLon,a.lat,a.lon)))),o.a.createElement("td",{style:{textAlign:"center"}},C.e(a)&&o.a.createElement("i",{className:"em-svg em-man-raising-hand",style:t}),C.c(a)&&o.a.createElement("i",{className:"em-svg em-woman-raising-hand",style:t}),C.d(a)&&o.a.createElement("i",{className:"em-svg em-wheelchair",style:t})))}))))},t}(o.a.Component),y="2088500780"},145:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},146:function(e,t,a){"use strict";a.d(t,"g",function(){return n}),a.d(t,"e",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"d",function(){return r}),a.d(t,"f",function(){return o}),a.d(t,"h",function(){return c}),a.d(t,"i",function(){return h}),a.d(t,"j",function(){return u}),a.d(t,"a",function(){return i}),a.d(t,"b",function(){return m});a(157),a(159);function n(e,t,a,n){if(null===e||null===a||null===t||null===n)return"Location not available";var i=(a-e)*(Math.PI/180),l=(n-t)*(Math.PI/180),s=Math.sin(i/2)*Math.sin(i/2)+Math.cos(e*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(l/2)*Math.sin(l/2),r=6371e3*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)));return Math.round(r)}function i(e){return Number.isInteger(e)?e+"m":e}function l(e){return null!=e.paranoma.maleYaw}function s(e){return null!=e.paranoma.femaleYaw}function r(e){return e.facilities.handicapped}function o(e){return null!=e.paranoma.handicappedYaw}function c(e){return e.facilities.hose}function h(e){return e.facilities.showerHeads}function u(e){return null!=e.paranoma.waterCoolerYaw}function m(e,t){return{backgroundColor:"transparent",border:"none",cursor:"pointer",textDecoration:"underline",display:"inline",margin:"0",padding:"0",color:e,fontSize:t}}},147:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(156);t.a=function(e){return i.a.createElement(l.a,{content:e.content,arrow:!0,trigger:"click",placement:"bottom",interactive:!0},i.a.createElement("img",{style:{verticalAlign:"middle"},src:"https://material.io/tools/icons/static/icons/baseline-help_outline-24px.svg",alt:""}))}},150:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},e.children)}},151:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(4),s=a.n(l),r=a(33),o=a.n(r);a.d(t,"a",function(){return o.a});a(145),i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),i=a.n(n),l=a(4),s=a.n(l),r=a(58),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},153:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(147),s=i.a.createElement("div",{style:{textAlign:"left"}},"Check that you have:",i.a.createElement("ul",null,i.a.createElement("li",null,"Enabled your device's GPS settings",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{style:{textShadow:"none"},href:"https://support.google.com/accounts/answer/3467281",rel:"noopener noreferrer",target:"_blank"},"Android")),i.a.createElement("li",null,i.a.createElement("a",{style:{textShadow:"none"},href:"https://support.apple.com/en-us/HT207092",rel:"noopener noreferrer",target:"_blank"},"iOS")),i.a.createElement("li",null,"Reload this page after enabling GPS settings"))),i.a.createElement("li",null,"Allowed your browser and this website the neccessary permissions to read your location",i.a.createElement("ul",null,i.a.createElement("li",null,"Press allow when a similar prompt as below appears"),i.a.createElement("li",null,"If such a prompt does not appear, reload the page")))),i.a.createElement("img",{src:"https://raw.githubusercontent.com/nelsontky/let-it-go/master/assets/misc/locationHelp.png",alt:""}));t.a=function(){return i.a.createElement("p",null,"Location loading/not available ",i.a.createElement(l.a,{content:s}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-7a6abb7ce7105b14ca15.js.map