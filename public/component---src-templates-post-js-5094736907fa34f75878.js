"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[851],{7732:function(e,t,n){var c=n(7294);t.Z=function(e){return console.log(e.responseObj),c.createElement("div",null,200===e.responseObj.cod?c.createElement("div",null,c.createElement("p",null,c.createElement("strong",null,"This is  the weather where I am at:")),c.createElement("p",null,"It's ",Math.round(e.responseObj.main.temp),"° with ",e.responseObj.weather[0].description,". It feels like ",Math.round(e.responseObj.main.feels_like),"° and the humidity level is ",e.responseObj.main.humidity,"%.")):null)}},8336:function(e,t,n){n.d(t,{Z:function(){return d}});var c=n(7294),a=n(5444),l=function(){return c.createElement("nav",{className:"site-navigation"},c.createElement("div",{className:"site-title"},c.createElement(a.Link,{to:"/"},"Matt Loniero")),c.createElement("ul",null,c.createElement("li",null,c.createElement(a.Link,{to:"/about"},"Work")),c.createElement("li",null,c.createElement(a.Link,{to:"/posts"},"Skills"))))},i=function(e){e.extraClasses;var t=e.children;return c.createElement("section",{className:"site-content"},t)},r=n(2359),s=n(7732),u=function(){var e=(0,c.useState)({}),t=e[0],n=e[1],a=(0,c.useState)("Westlake Village"),l=a[0],i=(a[1],(0,c.useState)("imperial")),r=i[0],u=(i[1],encodeURIComponent(l));return 0===Object.entries(t).length&&fetch("https://community-open-weather-map.p.rapidapi.com/weather?units="+r+"&q="+u,{method:"GET",headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1"}}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.error(e)})),c.createElement("div",null,c.createElement(s.Z,{responseObj:t}))},o=[{text:"Modern Vascular",url:"https://modernvascular.com",description:"Outpatient clinics providing minimally invasive endovascular procedures."},{text:"Semper Solaris",url:"https://sempersolaris.com",description:"California solar panel, roofing, heating, and air conditioning company."},{text:"Kevin Manthei (Composer)",url:"https://kevinmantheimusic.com",description:"Music composer for television, film, and video games."}],m=function(){return c.createElement("aside",{className:"site-sidebar"},c.createElement("h2",null,"Projects"),c.createElement("ul",null,o.map((function(e){return c.createElement("li",{key:e.url},c.createElement("span",null,c.createElement("a",{href:e.url+"?utm_source=sidebar&utm_medium=website&utm_campaign=companies"},e.text),c.createElement("p",null,e.description)))}))),c.createElement(u,null),c.createElement("figure",null,c.createElement(r.S,{alt:"Succulents",src:"https://mattloniero.com/wp-content/uploads/2021/09/succulents.png",__imageData:n(5557)}),c.createElement("figcaption",null,"Illustration by Matt Loniero.")))},d=function(e){var t=e.pageTitle,n=e.children;return c.createElement("div",{className:"layout"},c.createElement("title",null,t),c.createElement(l,null),c.createElement("main",null,c.createElement(i,null,n),c.createElement(m,null)))}},9857:function(e,t,n){n.r(t);var c=n(7294),a=n(8336);t.default=function(e){var t=e.data.wpPost,n=t.title;t.content,t.id;return c.createElement(a.Z,{pageTitle:n},c.createElement("h1",null,n))}},5557:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png","srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2b098/succulents.png 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/cbe12/succulents.png 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png 1134w","sizes":"(min-width: 1134px) 1134px, 100vw"},"sources":[{"srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/38854/succulents.webp 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/6c159/succulents.webp 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2de80/succulents.webp 1134w","type":"image/webp","sizes":"(min-width: 1134px) 1134px, 100vw"}]},"width":1134,"height":708}')}}]);
//# sourceMappingURL=component---src-templates-post-js-5094736907fa34f75878.js.map