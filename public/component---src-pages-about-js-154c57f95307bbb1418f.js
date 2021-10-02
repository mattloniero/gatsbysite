"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[682],{6474:function(e,t){var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},6846:function(e,t,n){var a=n(7294);t.Z=function(e){return a.createElement("header",null,a.createElement("h1",null,e.title),e.description?a.createElement("p",null,e.description):0)}},8276:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),c=n(5444),r=function(){return a.createElement("nav",{className:"site-navigation"},a.createElement("div",{className:"site-title"},a.createElement(c.Link,{to:"/"},"Matt Loniero")),a.createElement("ul",null,a.createElement("li",null,a.createElement(c.Link,{to:"/about"},"Work")),a.createElement("li",null,a.createElement(c.Link,{to:"/posts"},"Skills"))))},l=function(e){e.extraClasses;var t=e.children;return a.createElement("section",{className:"site-content"},t)},i=n(2359),s=n(6474),o=n.n(s),u=function(e){return console.log(e.responseObj),a.createElement(a.Fragment,null,"success"===e.responseObj.status?a.createElement("div",{id:e.responseObj.data.coin.slug},a.createElement("h3",null,e.responseObj.data.coin.symbol),a.createElement("p",null,"$",Number(e.responseObj.data.coin.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))):null)},d=function(e){var t=(0,a.useState)({}),n=t[0],c=t[1];return(0,a.useEffect)((function(){0===Object.entries(n).length&&o()(e.apiUrl,{method:"GET",headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1"}}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.error(e)}))})),a.createElement("div",null,a.createElement(u,{responseObj:n}))},m=function(){return a.createElement("div",{className:"site-sidebar"},a.createElement("aside",{className:"card text-center"},a.createElement("h3",null,"Cryptocurrency"),a.createElement("p",null,a.createElement("small",null,"Current Prices")),a.createElement("div",{class:"row-2"},a.createElement(d,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/1"}),a.createElement(d,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/2"}),a.createElement(d,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/71983"}),a.createElement(d,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/12606"}))),a.createElement("figure",null,a.createElement(i.S,{alt:"Succulents",src:"https://mattloniero.com/wp-content/uploads/2021/09/succulents.png",__imageData:n(5557)}),a.createElement("figcaption",null,a.createElement("p",{className:"text-center"},"Illustration by Matt Loniero."))))},p=function(e){var t=e.pageTitle,n=e.children;return a.createElement("div",{className:"layout"},a.createElement("title",null,t),a.createElement(r,null),a.createElement("main",null,a.createElement(l,null,n),a.createElement(m,null)))}},8678:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),c=n(8276),r=n(6846),l=n(6474),i=n.n(l),s=function(){var e=(0,a.useState)(""),t=e[0],n=e[1];return""===t&&i()("https://www.reddit.com/r/MadeMeSmile/hot.json?limit=1&raw_json=1",{method:"GET",headers:{"User-Agent":"web:localhost:8000:v1.0 (by /u/matt_loniero)"}}).then((function(e){return e.json()})).then((function(e){n(e),console.log(e)})).catch((function(e){console.error(e)})),a.createElement("div",{className:"row-3"},t&&a.createElement("figure",{className:"card"},a.createElement("img",{alt:"Reddit Made Me Smile Post Preview Image",src:t.data.children[0].data.thumbnail}),a.createElement("figcaption",null,a.createElement("p",null,a.createElement("a",{className:"card-link",href:"https://reddit.com"+t.data.children[0].data.permalink},""+t.data.children[0].data.title))),a.createElement("p",{className:"subtitle"},a.createElement("a",{href:"https://reddit.com/"+t.data.children[0].data.subreddit_name_prefixed},t.data.children[0].data.subreddit_name_prefixed))))},o=[{text:"Modern Vascular",url:"https://modernvascular.com",description:"Outpatient clinics providing minimally invasive endovascular procedures."},{text:"Semper Solaris",url:"https://sempersolaris.com",description:"California solar panel, roofing, heating, and air conditioning company."},{text:"Kevin Manthei (Composer)",url:"https://kevinmantheimusic.com",description:"Music composer for television, film, and video games."}],u=function(){return a.createElement(c.Z,{pageTitle:"About Matt Loniero"},a.createElement(r.Z,{title:"This is some of the work that I have done.",description:"Custom website development as part of a team, the leader of a team, or as an individual."}),a.createElement("h2",null,"Projects"),a.createElement("ul",null,o.map((function(e){return a.createElement("li",{key:e.url},a.createElement("span",null,a.createElement("a",{href:e.url+"?utm_source=sidebar&utm_medium=website&utm_campaign=companies"},e.text),a.createElement("p",null,e.description)))}))),a.createElement(s,null))}},5557:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png","srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2b098/succulents.png 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/cbe12/succulents.png 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png 1134w","sizes":"(min-width: 1134px) 1134px, 100vw"},"sources":[{"srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/38854/succulents.webp 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/6c159/succulents.webp 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2de80/succulents.webp 1134w","type":"image/webp","sizes":"(min-width: 1134px) 1134px, 100vw"}]},"width":1134,"height":708}')}}]);
//# sourceMappingURL=component---src-pages-about-js-154c57f95307bbb1418f.js.map