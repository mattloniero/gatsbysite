"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[678],{7732:function(e,t,n){var a=n(7294);t.Z=function(e){return console.log(e.responseObj),a.createElement("div",null,200===e.responseObj.cod?a.createElement("div",null,a.createElement("p",null,a.createElement("strong",null,"This is  the weather where I am at:")),a.createElement("p",null,"It's ",Math.round(e.responseObj.main.temp),"° with ",e.responseObj.weather[0].description,". It feels like ",Math.round(e.responseObj.main.feels_like),"° and the humidity level is ",e.responseObj.main.humidity,"%.")):null)}},6846:function(e,t,n){var a=n(7294);t.Z=function(e){return a.createElement("header",null,a.createElement("h1",null,e.title),e.description?a.createElement("p",null,e.description):0)}},8336:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),c=n(5444),r=function(){return a.createElement("nav",{className:"site-navigation"},a.createElement("div",{className:"site-title"},a.createElement(c.Link,{to:"/"},"Matt Loniero")),a.createElement("ul",null,a.createElement("li",null,a.createElement(c.Link,{to:"/about"},"Work")),a.createElement("li",null,a.createElement(c.Link,{to:"/posts"},"Skills"))))},i=function(e){e.extraClasses;var t=e.children;return a.createElement("section",{className:"site-content"},t)},l=n(2359),s=n(7732),u=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],c=(0,a.useState)("Westlake Village"),r=c[0],i=(c[1],(0,a.useState)("imperial")),l=i[0],u=(i[1],encodeURIComponent(r));return 0===Object.entries(t).length&&fetch("https://community-open-weather-map.p.rapidapi.com/weather?units="+l+"&q="+u,{method:"GET",headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)})),a.createElement("div",null,a.createElement(s.Z,{responseObj:t}))},o=[{text:"Modern Vascular",url:"https://modernvascular.com",description:"Outpatient clinics providing minimally invasive endovascular procedures."},{text:"Semper Solaris",url:"https://sempersolaris.com",description:"California solar panel, roofing, heating, and air conditioning company."},{text:"Kevin Manthei (Composer)",url:"https://kevinmantheimusic.com",description:"Music composer for television, film, and video games."}],m=function(){return a.createElement("aside",{className:"site-sidebar"},a.createElement("h2",null,"Projects"),a.createElement("ul",null,o.map((function(e){return a.createElement("li",{key:e.url},a.createElement("span",null,a.createElement("a",{href:e.url+"?utm_source=sidebar&utm_medium=website&utm_campaign=companies"},e.text),a.createElement("p",null,e.description)))}))),a.createElement(u,null),a.createElement("figure",null,a.createElement(l.S,{alt:"Succulents",src:"https://mattloniero.com/wp-content/uploads/2021/09/succulents.png",__imageData:n(5557)}),a.createElement("figcaption",null,"Illustration by Matt Loniero.")))},p=function(e){var t=e.pageTitle,n=e.children;return a.createElement("div",{className:"layout"},a.createElement("title",null,t),a.createElement(r,null),a.createElement("main",null,a.createElement(i,null,n),a.createElement(m,null)))}},5163:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),c=n(5444),r=n(6846),i=n(8336),l=n(7732),s=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],c=(0,a.useState)(""),r=c[0],i=c[1],s=(0,a.useState)("imperial"),u=s[0],o=s[1],m=encodeURIComponent(r);return a.createElement("div",null,a.createElement("h2",{className:"weather-title"},"Check the weather."),a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://community-open-weather-map.p.rapidapi.com/weather?units="+u+"&q="+m,{method:"GET",headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)}))}},a.createElement("input",{className:"text-input",type:"text",placeholder:"Enter City",maxLength:"64",value:r,onChange:function(e){return i(e.target.value)}}),a.createElement("div",{className:"radios"},a.createElement("label",null,a.createElement("input",{className:"radio",type:"radio",name:"units",checked:"imperial"===u,value:"imperial",onChange:function(e){return o(e.target.value)}}),"Farenheit"),a.createElement("label",null,a.createElement("input",{className:"radio",type:"radio",name:"units",checked:"metric"===u,value:"metric",onChange:function(e){return o(e.target.value)}}),"Celsius")),a.createElement("button",{className:"button",type:"submit"},"Get Forecast")),a.createElement(l.Z,{responseObj:t}))},u=function(){var e=(0,c.useStaticQuery)("2366015245");return a.createElement(i.Z,{pageTitle:e.site.siteMetadata.title},a.createElement(r.Z,{title:"Testing",description:"This is a test."}),a.createElement(s,null))}},5557:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png","srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2b098/succulents.png 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/cbe12/succulents.png 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png 1134w","sizes":"(min-width: 1134px) 1134px, 100vw"},"sources":[{"srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/38854/succulents.webp 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/6c159/succulents.webp 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2de80/succulents.webp 1134w","type":"image/webp","sizes":"(min-width: 1134px) 1134px, 100vw"}]},"width":1134,"height":708}')}}]);
//# sourceMappingURL=component---src-pages-index-js-9b3c0b51fac4c64290fb.js.map