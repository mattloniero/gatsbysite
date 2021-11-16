"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[678],{6474:function(e,t){var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=t=n.fetch,n.fetch&&(t.default=n.fetch.bind(n)),t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response},6846:function(e,t,n){var c=n(7294);t.Z=function(e){return c.createElement("header",null,c.createElement("h1",null,e.title),e.description?c.createElement("p",null,e.description):0)}},8276:function(e,t,n){n.d(t,{Z:function(){return p}});var c=n(7294),a=n(5444),l=function(){return c.createElement("nav",{className:"site-navigation"},c.createElement("div",{className:"site-title"},c.createElement(a.Link,{to:"/"},"Matt Loniero")),c.createElement("ul",null,c.createElement("li",null,c.createElement(a.Link,{to:"/work"},"Work")),c.createElement("li",null,c.createElement(a.Link,{to:"/about"},"Skills"))))},i=function(e){e.extraClasses;var t=e.children;return c.createElement("section",{className:"site-content"},t)},r=n(2359),s=n(6474),o=n.n(s),d=function(e){return console.log(e.responseObj),c.createElement(c.Fragment,null,"success"===e.responseObj.status?c.createElement("div",{id:e.responseObj.data.coin.slug},c.createElement("h3",null,e.responseObj.data.coin.symbol),c.createElement("p",null,"$",Number(e.responseObj.data.coin.price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))):null)},u=function(e){var t=(0,c.useState)({}),n=t[0],a=t[1];return(0,c.useEffect)((function(){0===Object.entries(n).length&&o()(e.apiUrl,{method:"GET",headers:{"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"9445d8809dmsh3dd64d168da9a7ep12b8e2jsn5ee4c33053b1"}}).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.error(e)}))})),c.createElement("div",null,c.createElement(d,{responseObj:n}))},m=function(){return c.createElement("div",{className:"site-sidebar"},c.createElement("aside",{className:"card text-center"},c.createElement("h3",null,"Cryptocurrency"),c.createElement("p",null,c.createElement("small",null,"Current Prices")),c.createElement("div",{className:"row-2"},c.createElement(u,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/1"}),c.createElement(u,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/2"}),c.createElement(u,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/71983"}),c.createElement(u,{apiUrl:"https://coinranking1.p.rapidapi.com/coin/12606"}))),c.createElement("figure",null,c.createElement(r.S,{alt:"Succulents",src:"https://mattloniero.com/wp-content/uploads/2021/09/succulents.png",__imageData:n(5557)}),c.createElement("figcaption",null,c.createElement("p",{className:"text-center"},"Illustration by Matt Loniero."))))},p=function(e){var t=e.pageTitle,n=e.children;return c.createElement("div",{className:"layout"},c.createElement("title",null,t),c.createElement(l,null),c.createElement("main",null,c.createElement(i,null,n),c.createElement(m,null)))}},7859:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var c=n(7294),a=n(5444),l=n(6846),i=n(8276),r=n(2359),s=function(){return c.createElement("div",{className:"grid"},c.createElement("div",{id:"projects"},c.createElement("div",{className:"grid-item"},c.createElement(r.S,{src:"../images/web-development.png",alt:"Web Development",width:128,height:128,className:"grid-item--image",__imageData:n(5494)}),c.createElement("div",{class:"grid-item--body"},c.createElement("h2",null,c.createElement(a.Link,{to:"/about",className:"grid-item--link"},"Projects"))))),c.createElement("div",{id:"skills"}),c.createElement("div",{id:"graphic"}),c.createElement("div",{id:"audio"}))},o=function(){var e=(0,a.useStaticQuery)("2366015245");return c.createElement(i.Z,{pageTitle:e.site.siteMetadata.title},c.createElement(l.Z,{title:"Matt Loniero",description:"Web Developer in Los Angeles."}),c.createElement(s,null),c.createElement("aside",null,c.createElement("p",null,c.createElement("small",null,"Icons made by ",c.createElement("a",{href:"https://www.freepik.com",title:"Freepik"},"Freepik")," from ",c.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))))}},5494:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/10192270b58f9d2b035fc003c13fe247/bf8e1/web-development.png","srcSet":"/static/10192270b58f9d2b035fc003c13fe247/914ee/web-development.png 32w,\\n/static/10192270b58f9d2b035fc003c13fe247/1c9ce/web-development.png 64w,\\n/static/10192270b58f9d2b035fc003c13fe247/bf8e1/web-development.png 128w,\\n/static/10192270b58f9d2b035fc003c13fe247/acb7c/web-development.png 256w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/static/10192270b58f9d2b035fc003c13fe247/ef6ff/web-development.webp 32w,\\n/static/10192270b58f9d2b035fc003c13fe247/8257c/web-development.webp 64w,\\n/static/10192270b58f9d2b035fc003c13fe247/6766a/web-development.webp 128w,\\n/static/10192270b58f9d2b035fc003c13fe247/22bfc/web-development.webp 256w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')},5557:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png","srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2b098/succulents.png 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/cbe12/succulents.png 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/dcb23/succulents.png 1134w","sizes":"(min-width: 1134px) 1134px, 100vw"},"sources":[{"srcSet":"/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/38854/succulents.webp 284w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/6c159/succulents.webp 567w,\\n/static/80c81fc411707bd5d1cc3a1fe8b8b7d5/2de80/succulents.webp 1134w","type":"image/webp","sizes":"(min-width: 1134px) 1134px, 100vw"}]},"width":1134,"height":708}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f8f270ecbf820aa4065c.js.map