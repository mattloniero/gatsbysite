"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[986],{6474:function(e,t){var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},8276:function(e,t,n){n.d(t,{Z:function(){return f}});var c=n(7294),a=n(5444),l=function(){return c.createElement("nav",{className:"site-navigation"},c.createElement("div",{className:"site-title"},c.createElement(a.Link,{to:"/"},"Matt Loniero")),c.createElement("ul",null,c.createElement("li",null,c.createElement(a.Link,{to:"/about"},"Work")),c.createElement("li",null,c.createElement(a.Link,{to:"/posts"},"Skills"))))},r=function(e){e.extraClasses;var t=e.children;return c.createElement("section",{className:"site-content"},t)},i=n(2359),s=n(6474),o=n.n(s),u=function(e){return console.log(e.responseObj),c.createElement(c.Fragment,null,"success"===e.responseObj.status?c.createElement("div",{className:"crypto-section",id:e.responseObj.data.coin.slug},c.createElement("h3",null,e.responseObj.data.coin.symbol),c.createElement("p",null,"$",Number(e.responseObj.data.coin.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))):null)},m=function(e){var t=(0,c.useState)({}),n=t[0],a=t[1];return(0,c.useEffect)((function(){0===Object.entries(n).length&&o()(e.apiUrl,{method:"GET",headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1"}}).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.error(e)}))})),c.createElement("div",null,c.createElement(u,{responseObj:n}))},d=[{text:"Modern Vascular",url:"https://modernvascular.com",description:"Outpatient clinics providing minimally invasive endovascular procedures."},{text:"Semper Solaris",url:"https://sempersolaris.com",description:"California solar panel, roofing, heating, and air conditioning company."},{text:"Kevin Manthei (Composer)",url:"https://kevinmantheimusic.com",description:"Music composer for television, film, and video games."}],p=function(){return c.createElement("aside",{className:"site-sidebar"},c.createElement("h2",null,"Projects"),c.createElement("ul",null,d.map((function(e){return c.createElement("li",{key:e.url},c.createElement("span",null,c.createElement("a",{href:e.url+"?utm_source=sidebar&utm_medium=website&utm_campaign=companies"},e.text),c.createElement("p",null,e.description)))}))),c.createElement("div",{className:"side-card"},c.createElement("h3",null,"Crypto Corner"),c.createElement("p",null,c.createElement("small",null,"Current Prices")),c.createElement(m,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/1"}),c.createElement(m,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/2"}),c.createElement(m,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/71983"}),c.createElement(m,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/12606"})),c.createElement("figure",null,c.createElement(i.S,{alt:"Succulents",src:"https://mattloniero.com/wp-content/uploads/2021/09/succulents.png",__imageData:n(5557)}),c.createElement("figcaption",null,"Illustration by Matt Loniero.")))},f=function(e){var t=e.pageTitle,n=e.children;return c.createElement("div",{className:"layout"},c.createElement("title",null,t),c.createElement(l,null),c.createElement("main",null,c.createElement(r,null,n),c.createElement(p,null)))}},7253:function(e,t,n){n.r(t);var c=n(7294),a=n(5444),l=n(8276);t.default=function(e){var t=e.data;return c.createElement(l.Z,{pageTitle:"Posts Page"},c.createElement("ul",null,t.allWpPost.nodes.map((function(e){return c.createElement("li",{key:e.id},c.createElement("p",null,c.createElement("strong",null,e.slug)),c.createElement("h2",null,c.createElement(a.Link,{to:"/"+e.slug},e.title)),c.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))}))))}},5557:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png","srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2b098/succulents.png 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/cbe12/succulents.png 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png 1134w","sizes":"(min-width: 1134px) 1134px, 100vw"},"sources":[{"srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/38854/succulents.webp 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/6c159/succulents.webp 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2de80/succulents.webp 1134w","type":"image/webp","sizes":"(min-width: 1134px) 1134px, 100vw"}]},"width":1134,"height":708}')}}]);
//# sourceMappingURL=component---src-pages-posts-js-236cdfae5fe641092568.js.map