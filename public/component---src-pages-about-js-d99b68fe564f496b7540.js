(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3XHS":function(M,N,D){"use strict";D.r(N);var T=D("q1tI"),e=D.n(T),j=D("Wbzz"),z=D("ZMKu"),E=D("Bl7J"),O=D("vrFN"),t=D("HF/j"),i=D.n(t),g=D("jAjb"),c=D.n(g);var n=function(M,N){if(!M)throw new Error("Invariant failed")};function L(M,N,D){return N in M?Object.defineProperty(M,N,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[N]=D,M}function a(){return(a=Object.assign||function(M){for(var N=1;N<arguments.length;N++){var D=arguments[N];for(var T in D)Object.prototype.hasOwnProperty.call(D,T)&&(M[T]=D[T])}return M}).apply(this,arguments)}function I(M){if(void 0===M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}var y=new Map,w=new Map,u=new Map,s=0;function r(M,N,D){void 0===D&&(D={}),D.threshold||(D.threshold=0);var T=D,e=T.root,j=T.rootMargin,z=T.threshold;if(y.has(M)&&n(!1),M){var E=function(M){return M?u.has(M)?u.get(M):(s+=1,u.set(M,s.toString()),u.get(M)+"_"):""}(e)+(j?z.toString()+"_"+j:z.toString()),O=w.get(E);O||(O=new IntersectionObserver(o,D),E&&w.set(E,O));var t={callback:N,element:M,inView:!1,observerId:E,observer:O,thresholds:O.thresholds||(Array.isArray(z)?z:[z])};return y.set(M,t),O.observe(M),t}}function x(M){if(M){var N=y.get(M);if(N){var D=N.observerId,T=N.observer,e=T.root;T.unobserve(M);var j=!1,z=!1;D&&y.forEach((function(N,T){T!==M&&(N.observerId===D&&(j=!0,z=!0),N.observer.root===e&&(z=!0))})),!z&&e&&u.delete(e),T&&!j&&T.disconnect(),y.delete(M)}}}function o(M){M.forEach((function(M){var N=M.isIntersecting,D=M.intersectionRatio,T=M.target,e=y.get(T);if(e&&D>=0){var j=e.thresholds.some((function(M){return e.inView?D>M:D>=M}));void 0!==N&&(j=j&&N),e.inView=j,e.callback(j,M)}}))}var l=function(M){var N,D;function e(){for(var N,D=arguments.length,T=new Array(D),e=0;e<D;e++)T[e]=arguments[e];return L(I(N=M.call.apply(M,[this].concat(T))||this),"state",{inView:!1,entry:void 0}),L(I(N),"node",null),L(I(N),"handleNode",(function(M){N.node&&(x(N.node),M||N.props.triggerOnce||N.props.skip||N.setState({inView:!1,entry:void 0})),N.node=M||null,N.observeNode()})),L(I(N),"handleChange",(function(M,D){(M!==N.state.inView||M)&&N.setState({inView:M,entry:D}),N.props.onChange&&N.props.onChange(M,D)})),N}D=M,(N=e).prototype=Object.create(D.prototype),N.prototype.constructor=N,N.__proto__=D;var j=e.prototype;return j.componentDidMount=function(){this.node||n(!1)},j.componentDidUpdate=function(M,N){M.rootMargin===this.props.rootMargin&&M.root===this.props.root&&M.threshold===this.props.threshold&&M.skip===this.props.skip||(x(this.node),this.observeNode()),N.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(x(this.node),this.node=null)},j.componentWillUnmount=function(){this.node&&(x(this.node),this.node=null)},j.observeNode=function(){if(this.node&&!this.props.skip){var M=this.props,N=M.threshold,D=M.root,T=M.rootMargin;r(this.node,this.handleChange,{threshold:N,root:D,rootMargin:T})}},j.render=function(){var M=this.state,N=M.inView,D=M.entry;if(!function(M){return"function"!=typeof M.children}(this.props))return this.props.children({inView:N,entry:D,ref:this.handleNode});var e=this.props,j=e.children,z=e.as,E=e.tag,O=(e.triggerOnce,e.threshold,e.root,e.rootMargin,e.onChange,function(M,N){if(null==M)return{};var D,T,e={},j=Object.keys(M);for(T=0;T<j.length;T++)D=j[T],N.indexOf(D)>=0||(e[D]=M[D]);return e}(e,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange"]));return Object(T.createElement)(z||E||"div",a({ref:this.handleNode},O),j)},e}(T.Component);L(l,"displayName","InView"),L(l,"defaultProps",{threshold:0,triggerOnce:!1});var Q={inView:!1,entry:void 0};N.default=function(){var M=Object(z.b)(),N=function(M){void 0===M&&(M={});var N=Object(T.useRef)(),D=Object(T.useState)(Q),e=D[0],j=D[1],z=Object(T.useCallback)((function(D){N.current&&x(N.current),M.skip?N.current=void 0:(D&&r(D,(function(N,T){j({inView:N,entry:T}),N&&M.triggerOnce&&x(D)}),M),N.current=D)}),[M.threshold,M.root,M.rootMargin,M.triggerOnce,M.skip]);return Object(T.useEffect)((function(){N.current||e===Q||M.triggerOnce||M.skip||j(Q)})),[z,e.inView,e.entry]}({triggerOnce:!0}),D=N[0],t=N[1];return Object(T.useEffect)((function(){t&&M.start("visible")}),[M,t]),e.a.createElement(E.a,null,e.a.createElement("div",{className:"about-container"},e.a.createElement("div",{className:"about-upper-container"},e.a.createElement("div",{className:"about-upper-inner"},e.a.createElement(O.a,{title:"About"}),e.a.createElement(z.a.p,{animate:{y:0,opacity:1},initial:{y:-400,opacity:0},transition:{duration:1.8,ease:[.6,.05,-.01,.9]},className:"about-intro"},"Hi! I'm Wolfgang D'Invilliers-Saint-Laurent, a web designer from London."),e.a.createElement(z.a.p,{animate:{x:0,opacity:1},initial:{x:-500,opacity:0},transition:{duration:2.8,ease:[.6,.05,-.01,.9],delay:1},className:"about-main"},"I am a recent Computer Science graduate from London South Bank University"))),e.a.createElement(z.a.div,{ref:D,animate:M,initial:"hidden",variants:{visible:{opacity:1,y:0,transition:{duration:.8,ease:[.6,.05,-.01,.9]}},hidden:{opacity:0,y:72}},className:"about-transition"},e.a.createElement("p",{className:"about-skill"},"Skills"),e.a.createElement("ul",{className:"about-skill-list"},e.a.createElement("li",null,"HTML"),e.a.createElement("li",null,"CSS"),e.a.createElement("li",null,"JavaScript"),e.a.createElement("li",null,"React JS")),e.a.createElement("p",{className:"about-skill learning"},"Learning"),e.a.createElement("ul",{className:"about-skill-list"},e.a.createElement("li",null,"Node JS"),e.a.createElement("li",null,"React Native"),e.a.createElement("li",null,"Swift")),e.a.createElement("p",{className:"about-skill"},"Pronunciation"),e.a.createElement("ul",{className:"about-skill-list"},e.a.createElement("li",null,"Don-vil-yay"))),e.a.createElement("h3",{className:"university-title"},"Computer Science BSc - London South Bank University"),e.a.createElement("div",{className:"university"},e.a.createElement("ul",null,e.a.createElement("li",null,"Skills for Academic Study"),e.a.createElement("li",null,"The Digital Age"),e.a.createElement("li",null,"Using Numeracy, Data and IT"),e.a.createElement("li",null,"Computers in Society"),e.a.createElement("li",null,"Computing Fundamentals"),e.a.createElement("li",null,"Research Skills"),e.a.createElement("li",null,"Professional Development"),e.a.createElement("li",null,"Computer Technology"),e.a.createElement("li",null,"Website Design"),e.a.createElement("li",null,"Database Design"),e.a.createElement("li",null,"Software Engineering"),e.a.createElement("li",null,"Information Systems in Organisations"),e.a.createElement("li",null,"Advanced Programming"),e.a.createElement("li",null,"Big Data and Database Systems "),e.a.createElement("li",null,"Object-Oriented Programming"),e.a.createElement("li",null,"Operating Systems"),e.a.createElement("li",null,"Principles of Data Networks")),e.a.createElement("div",{className:"date-wrapper"},e.a.createElement("p",{className:"date"},"2021"))),e.a.createElement("p",{className:"about-more"},"Although, I have been designing websites since a teenager - I would like to improve my skills by challenging myself with real world applications. I have a keen eye for detail and I love working on new projects."),e.a.createElement("div",{className:"about-image-wrapper"},e.a.createElement("img",{alt:"Me",className:"about-image",src:i.a}),e.a.createElement("p",{className:"about-career"},"I am seeking full time employment abroad from October 2021 onwards.",e.a.createElement("br",null),e.a.createElement("span",{className:"about-note"},"P.S. I am based in London."),e.a.createElement("br",null),e.a.createElement(j.Link,{to:"/contact"},e.a.createElement("img",{alt:"get in touch hand icon",className:"getintouchsvg",src:c.a}))))))}},"HF/j":function(M,N,D){M.exports=D.p+"static/me-e090c40b0337c5e5caba83d0bf006383.jpg"},jAjb:function(M,N){M.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTQ1cHgiIHZpZXdCb3g9IjAgMCAxNTAgMTQ1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPmdldGludG91Y2gtY3RhPC90aXRsZT4KICAgIDxnIGlkPSJFc3NhaXMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik01Ni40MzI5NTM0LDEzMi43MzM4MjkgQzUzLjU4MDgwNDEsMTMxLjc5MTM4OSA1MS44NjE4NjMzLDEzMi4zODAxMzkgNTAuOTkwNDUxOSwxMzMuNzMwOTE1IEw1MC45NTU2Njk2LDEzMy43MTk0MjIgQzUxLjIzMTcwMTIsMTMyLjg4NTIzOCA1MS41NzExMjkzLDEzMS45MTc3NjkgNTEuNzU1Mjg5NiwxMzEuNDE5NTMgTDQ5LjE4MTM5ODcsMTMwLjU2OTAzNSBMNDcuMjI2MTc0NiwxMzYuNDc3ODM5IEw1NC4yNTIyMDExLDEzOC43OTk0NiBMNTQuODM4NzY4MywxMzcuMDI2ODE5IEw1MS4xNTE4NDM1LDEzNS44MDg1NDIgTDUxLjE2OTA5NTUsMTM1Ljc1NjQwNiBDNTEuNDM5Mzc2NSwxMzQuOTM5NjAxIDUyLjc2MzUxNDYsMTMzLjk2OTc2OCA1NS4xNDYxMDI4LDEzNC43NTcwNSBDNTcuOTQ2MDc4NywxMzUuNjgyMjUxIDU4LjQ1NDczNjcsMTM3LjY0MzI3NyA1Ny44MTY0MTM1LDEzOS41NzIzMjggQzU3LjEzNzgzNTgsMTQxLjYyMzAzMSA1NS4zNDQ5NzE1LDE0Mi43ODUwMDQgNTIuNzE4OTA3MiwxNDEuOTE3MjcgQzUwLjE3OTc5ODYsMTQxLjA3ODI2OCA0OS42NjA4OTE5LDEzOS42NzI5NDcgNDkuOTU0MTc1NSwxMzguNzg2NjI2IEw0OS45OTQ0MzAxLDEzOC42NjQ5NzQgTDQ3LjAyMDU0MjcsMTM3LjY4MjMwOCBDNDYuOTYyODk2OSwxMzcuNzk4MjE0IDQ2LjkzOTg5NDMsMTM3Ljg2NzcyOSA0Ni45MjI2NDIzLDEzNy45MTk4NjUgQzQ2LjIxNTMxMTMsMTQwLjA1NzQ2MiA0Ni45OTgwMDgsMTQyLjc2NDUyNyA1Mi4wMDY2NjA1LDE0NC40MTk1NDQgQzU2Ljk4MDUzMDcsMTQ2LjA2MzA2NyA2MC4xNDQwOTUxLDE0NC4wMjM3NjMgNjEuMjM2NzIwMywxNDAuNzIxNzg0IEM2Mi4yMzE1ODQzLDEzNy43MTUyNDYgNjEuMzE5ODY3OCwxMzQuMzQ4NjE5IDU2LjQzMjk1MzQsMTMyLjczMzgyOSBaIE0zNi42NDI2MjI2LDEyMy4wODkyOTIgTDM1LjIzMjIwODEsMTI1LjI3MzE5NyBMNDIuMDA0MDMzLDEyOS42NDA0IEw0MC42ODMwMTA5LDEzMS42ODU4ODggTDM1LjYwNDE0MjIsMTI4LjQxMDQ4NSBMMzQuNDkxNzAyNSwxMzAuMTMzMDAyIEwzOS41NzA1NzEzLDEzMy40MDg0MDQgTDM4LjI4OTI3OTEsMTM1LjM5MjM3NCBMMzEuNjcxMzU5MywxMzEuMTI0NDI1IEwzMC4yNjA5NDQ3LDEzMy4zMDgzMyBMMzkuODMzODQyNywxMzkuNDgxOTY3IEw0Ni4zNjk0MjU4LDEyOS4zNjIxODQgTDM2LjY0MjYyMjYsMTIzLjA4OTI5MiBaIE0yOS4wMjMyOTU2LDExNS43NzE1MDUgTDIyLjE5NDY0NjEsMTIyLjMwMTczNSBMMTguOTE0NTUyMiwxMTguODc2NjA0IEwxNy4wMzUzNTAyLDEyMC42NzM2ODMgTDI2LjAyNzExMzQsMTMwLjA2MzAzNyBMMjcuOTA2MzE1NCwxMjguMjY1OTU5IEwyNC42MjYyMjE1LDEyNC44NDA4MjggTDMxLjQ1NDg3MSwxMTguMzEwNTk4IEwyOS4wMjMyOTU2LDExNS43NzE1MDUgWiBNMTguNjM1OTM2OSwxMDEuMzU5MTUgTDcuOTQ4MzgyOTYsMTA2LjkyNzAzMiBMOS41NzQyMDU1MSwxMTAuMDQzMzggTDIwLjI2MTc1OTUsMTA0LjQ3NTQ5OCBMMTguNjM1OTM2OSwxMDEuMzU5MTUgWiBNMTYuMjk3ODQzLDk0Ljk2MDAzMjcgTDcuNzc3MTI5MjEsOTcuNDA2ODgwNiBMNy43NzIwNzAxNSw5Ny4zODkyODgzIEwxNC4xMjI0NDk2LDg3LjM5NTMzOTEgTDEzLjE2MTIyOTIsODQuMDUyODAwMSBMMS41NzcyODM1NCw4Ny4zNzkzMDAxIEwyLjUxODI2NzY5LDkwLjY1MTQ2OTggTDkuNDg5NzYwODIsODguNjQ5NTAzMyBMOS40OTQ4MTk4OCw4OC42NjcwOTU2IEw0LjI5OTA1NDksOTYuODQzOTYzMSBMNS42NTQ4ODE1MiwxMDEuNTU4NzAyIEwxNy4yMzg4MjcyLDk4LjIzMjIwMjQgTDE2LjI5Nzg0Myw5NC45NjAwMzI3IFogTTEyLjcwMDgxMDcsNjYuNDQ3ODE3MiBMMy4yODIxNDQ0Niw2NS42NTg3MTgyIEwzLjY3ODUwNCw2MC45MzQ0ODA1IEwxLjA4NjU0NTQ1LDYwLjcxNzMyNTQgTDAsNzMuNjY3OTM4MiBMMi41OTE5NTg1NSw3My44ODUwOTM0IEwyLjk4ODMxODA5LDY5LjE2MDg1NTcgTDEyLjQwNjk4NDQsNjkuOTQ5OTU0OCBMMTIuNzAwODEwNyw2Ni40NDc4MTcyIFogTTE2LjI4MzA5OCw1Mi43NjU4NjMyIEMxOC4xODM5ODE2LDQ3LjQ3NzIzMiAxNi4yNTE0MzA1LDQ0LjM1MjQ1NiAxMy4wMjc3MzMyLDQzLjE5NTQwODkgQzkuODkwMjMxMSw0Mi4wNjkyOTkgNi4zNjUwNTAwOSw0My40Mjk2ODE0IDQuNTI2MDg0NDgsNDguNTQ2MDQ0NSBDMi42ODcxMTg4Nyw1My42NjI0MDc2IDQuNTQwNTEyOTUsNTYuOTUzMjY0MyA3LjY3ODAxNTA5LDU4LjA3OTM3NDMgQzExLjA3NDEwMjYsNTkuMjk4Mjk1NSAxNC40Mzc5NDA2LDU3Ljg5OTQ1MzEgMTYuMjgzMDk4LDUyLjc2NTg2MzIgWiBNMTMuODM1MTU2OCw1MS44ODcyNDk5IEMxMi44NjMwNDM2LDU0LjU5MTg1OTQgMTAuOTgwMjAzMSw1NS4zMzU4NjEgOC45NDU5OTg0LDU0LjYwNTc0NTcgQzcuMTAxNDIyOTcsNTMuOTQzNjkyIDYuMDA4MTA0MzgsNTIuMTEyMDQwNCA2Ljk3NDAyNTcxLDQ5LjQyNDY1NzggQzcuOTM5OTQ3MDQsNDYuNzM3Mjc1MSA5Ljk0OTY1MjU0LDQ2LjAxOTM1ODcgMTEuNzk0MjI4LDQ2LjY4MTQxMjMgQzEzLjc0MjIzNzUsNDcuMzgwNTkwNSAxNC44MzIwMzcxLDQ5LjExMzczMzMgMTMuODM1MTU2OCw1MS44ODcyNDk5IFogTTI0LjI4MjI0MjUsMzcuMTI5ODE1MiBDMjYuODc2MTc0OSwzMy41NjAzNzI5IDI2Ljk5NTA5OTQsMzAuMzQzOTI1MiAyMy45MTIyMzUyLDI4LjEwNjc2NDQgTDE4LjUxNzIyMjgsMjQuMTkxNzMyOSBMMTYuNjY1OTUxNiwyNi43MzkyMTg4IEwyMS43NDk3MTMyLDMwLjQyODM4MyBDMjMuNjE3MjE3NSwzMS43ODM1ODYyIDIzLjUwMzkzOTIsMzMuNDY1ODY0OSAyMi4xMjYyNDksMzUuMzYxNjY4MyBDMjAuNzQ4NTU4OCwzNy4yNTc0NzE3IDE5LjE4Mjc3NzEsMzcuODg1NzAzNCAxNy4zMTUyNzI4LDM2LjUzMDUwMDIgTDEyLjIzMTUxMTEsMzIuODQxMzM1OSBMMTAuMTY0OTc1OCwzNS42ODUwNDEgTDE1LjU1OTk4ODIsMzkuNjAwMDcyNSBDMTguNjQyODUyNCw0MS44MzcyMzMzIDIxLjY5OTA3MzMsNDAuNjg0NDQ2NiAyNC4yODIyNDI1LDM3LjEyOTgxNTIgWiBNMzYuMTE4NjA4OSwyNC41OTExMTQ1IEM0MC4xNTAxMjYyLDIxLjM5MzM3MzggNDAuMDM2NTIwNCwxOC4xODgzNjkxIDM4LjU3ODg2NTgsMTYuMzUzMjQ5MiBDMzguNTU2MDksMTYuMzI0NTc1NCAzOC40NzYzNzQ1LDE2LjIyNDIxNzMgMzguNDA1MDg3OCwxNi4xNjM5MTI4IEwzNS45NTE3NDQ1LDE4LjEwOTg2ODkgTDM2LjAyMDA3MjEsMTguMTk1ODkwMSBDMzYuODUxMzkwNywxOS4yNDI0ODE5IDM2LjU2NzQ5NjYsMjAuOTE2NTc4NSAzNC42MTYyOTk2LDIyLjQ2NDIzOTQgQzMyLjMzNTEyMDcsMjQuMjczNjM3MiAzMC4zODY1MjczLDIzLjY0NTg1OTIgMjkuMTkwNzk1LDIyLjE0MDQ4NzQgQzI3LjkwMzk1OTMsMjAuNTIwNDIwNiAyOC4wMDM1ODQ1LDE4LjQwODI0MzIgMzAuMDY5NTU3OCwxNi43Njk1NDMzIEMzMi4xMDY4MzcxLDE1LjE1MzYwMzIgMzMuODU4ODc2NiwxNS41NjMzNzExIDM0LjU1MzU0MDIsMTYuNDM3OTIwNCBMMzQuNTk5MDkxOSwxNi40OTUyNjc5IEwzNy4wNTI0MzUyLDE0LjU0OTMxMTkgQzM2Ljk5ODQ1NDYsMTQuNDUxOTEwNyAzNi45MDczNTEyLDE0LjMzNzIxNTggMzYuODg0NTc1NCwxNC4zMDg1NDIgQzM1LjYzMTkwMzUsMTIuNzMxNDg1OCAzMi40ODM5ODk2LDExLjUzNTk2NjUgMjguMzIzMzQ4OSwxNC44MzYxMjU5IEMyNC4zOTIyNjA5LDE3Ljk1NDIwNzUgMjQuMDcyMDQ3OSwyMS42NDM1Mjg2IDI2LjI5MjY5MzYsMjQuNDM5MjE5MSBDMjguMjI4NjQxMSwyNi44NzY0ODc3IDMxLjY0MjMzMzQsMjguMTQxNjMwOCAzNi4xMTg2MDg5LDI0LjU5MTExNDUgWiBNNDcuMTgwMDM4OCwxNy4xNDY5NTAzIEw0NS4zMDkzNzEyLDEyLjYxMTUzNTYgTDUyLjQ1NjAxOTQsOS42NjgwMTg2MiBMNTQuMzI2Njg3LDE0LjIwMzQzMzQgTDU3LjU3ODI0MjUsMTIuODY0MjAyOSBMNTIuOTg1MzM0OCwxLjcyODc0NDMgTDQ5LjczMzc3OTMsMy4wNjc5NzQ3NiBMNTEuNDY0ODQ0OCw3LjI2NDkyNTcyIEw0NC4zMTgxOTY2LDEwLjIwODQ0MjcgTDQyLjU4NzEzMTEsNi4wMTE0OTE2OSBMMzkuMzM1NTc1NSw3LjM1MDcyMjE1IEw0My45Mjg0ODMyLDE4LjQ4NjE4MDggTDQ3LjE4MDAzODgsMTcuMTQ2OTUwMyBaIE03MS45OTcyNDk5LDYuMDE5NDA5MDQgTDcxLjg1NjYwMjUsNC4xNTc2Njg2OSBMNjYuNTk2MTk3Nyw0LjU1NDUwOTY2IEw2Ni43MzY4NDUyLDYuNDE2MjUwMDEgTDcxLjk5NzI0OTksNi4wMTk0MDkwNCBaIE04OC41NDYxNjkzLDEyLjM1MDg0MjYgQzkxLjQ3MDQzMTcsMTMuMDM4MDMxOCA5My4xMzA2NTkxLDEyLjI5OTk2MTYgOTMuODc5MzU1OCwxMC44Nzc1OTUzIEw5My45MTUwMTc1LDEwLjg4NTk3NTcgQzkzLjcxMzc0NjQsMTEuNzQxMjUxMSA5My40NjEwOTkyLDEyLjczNDg4MjIgOTMuMzIxNjY3MSwxMy4yNDc0MjA5IEw5NS45NjA2MzU1LDEzLjg2NzU2NzIgTDk3LjM4NjMwNTgsNy44MDkzNjY0OCBMOTAuMTgyNjM1Miw2LjExNjUzNDY0IEw4OS43NTQ5MzQyLDcuOTMzOTk0ODYgTDkzLjUzNTA3ODEsOC44MjIzMTI1NiBMOTMuNTIyNDk4Nyw4Ljg3NTc2NzI3IEM5My4zMjU0MjA3LDkuNzEzMjI0NDMgOTIuMDkyMTE1OCwxMC43OTYwNjY1IDg5LjY0OTI4NjksMTAuMjIyMDEyMiBDODYuNzc4NTE3Miw5LjU0NzM5MzUzIDg2LjA5ODYyNzksNy42Mzg4ODY3NyA4Ni41NjQwNjczLDUuNjYxMDYyNDEgQzg3LjA1ODg1ODgsMy41NTg1MTAzOSA4OC43NDIwODg2LDIuMjQyOTMzNzcgOTEuNDM0NTQ5NiwyLjg3NTY1MDYyIEM5NC4wMzc4NTYzLDMuNDg3NDE2NTggOTQuNjc4ODY5MSw0Ljg0MTQ4Mjg1IDk0LjQ2NTAxODYsNS43NTAyMTI5NiBMOTQuNDM1NjY2NSw1Ljg3NDk0MDYyIEw5Ny40ODQ3NDQ5LDYuNTkxNDYxMDMgQzk3LjUzMTkyNzgsNi40NzA5MjM1NSA5Ny41NDg3MDA0LDYuMzk5NjUwNiA5Ny41NjEyNzk4LDYuMzQ2MTk1ODggQzk4LjA3NzAzNyw0LjE1NDU1MjY4IDk3LjA1ODI4MTQsMS41MjcwOTEwNSA5MS45MjI5OTE0LDAuMzIwMzE5ODMyIEM4Ni44MjMzNjMzLC0wLjg3ODA3MTAyOCA4My44NTIyNzc2LDEuNDMyMzE0MDMgODMuMDU1NTc5NSw0LjgxNzc3OTE0IEM4Mi4zMzAxNjQ5LDcuOTAwMzM0MjMgODMuNTM1Njk1NSwxMS4xNzM0MDI3IDg4LjU0NjE2OTMsMTIuMzUwODQyNiBaIE0xMDkuMTE2MzQ2LDIwLjIxNzcyNjIgTDExMC4zMjkyNjUsMTcuOTE4NDIxNCBMMTAzLjE5OTYwOSwxNC4xNjI3NDM1IEwxMDQuMzM1NjUyLDEyLjAwOTE2OTMgTDEwOS42ODI4OTUsMTQuODI1OTI3NyBMMTEwLjYzOTU2MywxMy4wMTIzOTE1IEwxMDUuMjkyMzIxLDEwLjE5NTYzMzEgTDEwNi4zOTQxOTgsOC4xMDY4MjgwMiBMMTEzLjM2MTgxNywxMS43NzcxNDk2IEwxMTQuNTc0NzM2LDkuNDc3ODQ0OCBMMTA0LjQ5NTk5NCw0LjE2ODY4MTk1IEw5OC44NzU1NjY5LDE0LjgyMzIwNyBMMTA5LjExNjM0NiwyMC4yMTc3MjYyIFogTTExNy4zNTAzMzMsMjYuODQ4NDA5MyBMMTIzLjU4Mzk0MSwxOS43NDg3MjcyIEwxMjcuMTUwMDY3LDIyLjg3NTM5NTQgTDEyOC44NjU1MTcsMjAuOTIxNjA2OSBMMTE5LjA4OTY1LDEyLjM1MDQzMTYgTDExNy4zNzQyLDE0LjMwNDIyMDEgTDEyMC45NDAzMjYsMTcuNDMwODg4MyBMMTE0LjcwNjcxOCwyNC41MzA1NzAzIEwxMTcuMzUwMzMzLDI2Ljg0ODQwOTMgWiBNMTI4Ljk0NTAxOCw0MC4yNzk1NTg5IEwxMzkuMTAxMzcyLDMzLjc5NDM1MTQgTDEzNy4yMDc2OSwzMC44MzI4OTQzIEwxMjcuMDUxMzM2LDM3LjMxODEwMTkgTDEyOC45NDUwMTgsNDAuMjc5NTU4OSBaIE0xMzEuODUyOTMzLDQ2LjQ3MDU4ODIgTDE0MC4xMjM5NjUsNDMuMjgwOTYxNyBMMTQwLjEzMDU2LDQzLjI5ODAzODUgTDEzNC42ODg3MDEsNTMuODEzNjE0MyBMMTM1Ljk0MTcxNCw1Ny4wNTgyMDczIEwxNDcuMTg2MjE3LDUyLjcyMTg5NjggTDE0NS45NTk1ODIsNDkuNTQ1NjExMSBMMTM5LjE5MjM3NCw1Mi4xNTUzMDU1IEwxMzkuMTg1Nzc5LDUyLjEzODIyODcgTDE0My42MzgyMSw0My41MzQ1NzU4IEwxNDEuODcwODAxLDM4Ljk1Nzk5MjEgTDEzMC42MjYyOTgsNDMuMjk0MzAyNSBMMTMxLjg1MjkzMyw0Ni40NzA1ODgyIFogTTEzNy45MzIyNzUsNzQuNTU5MzE2NSBMMTQ3LjM4MzkzOCw3NC41Mjk0MDc5IEwxNDcuMzk4OTYxLDc5LjI3MDE5NjIgTDE1MCw3OS4yNjE5NjU2IEwxNDkuOTU4ODE3LDY2LjI2NTk4MiBMMTQ3LjM1Nzc3OCw2Ni4yNzQyMTI3IEwxNDcuMzcyODAxLDcxLjAxNTAwMTEgTDEzNy45MjExMzgsNzEuMDQ0OTA5NyBMMTM3LjkzMjI3NSw3NC41NTkzMTY1IFogTTEzNS41Njc0MDksODguNDg4Mjg4IEMxMzQuMTQyODkxLDkzLjkyNDQxNTkgMTM2LjM0NDg4Niw5Ni44NjU4MDYgMTM5LjY1ODQ5LDk3LjczMjg5NCBDMTQyLjg4MzQ5NSw5OC41NzY3OTc5IDE0Ni4yNzQyMDIsOTYuOTA5NjY0NSAxNDcuNjUyMzE4LDkxLjY1MDYwOTIgQzE0OS4wMzA0MzQsODYuMzkxNTU0IDE0Ni44OTI1Niw4My4yNzc3MjgxIDE0My42Njc1NTUsODIuNDMzODI0MiBDMTQwLjE3Njc1Myw4MS41MjAzNjc4IDEzNi45NTAxNjUsODMuMjExNTI1NSAxMzUuNTY3NDA5LDg4LjQ4ODI4OCBaIE0xMzguMDgzNjIyLDg5LjE0NjcxODUgQzEzOC44MTIxMjEsODYuMzY2Njc5MiAxNDAuNjIxNTk0LDg1LjQ1ODkwNjggMTQyLjcxMjUzMSw4Ni4wMDYwNTMyIEMxNDQuNjA4NTUsODYuNTAyMTk0NSAxNDUuODU5OTY0LDg4LjIyOTg0NjYgMTQ1LjEzNjEwNSw5MC45OTIxNzg3IEMxNDQuNDEyMjQ2LDkzLjc1NDUxMDggMTQyLjQ3NDA5NSw5NC42NDc1MzI2IDE0MC41NzgwNzUsOTQuMTUxMzkxMyBDMTM4LjU3NTczNyw5My42Mjc0MjkgMTM3LjMzNjU2Miw5MS45OTc1ODY5IDEzOC4wODM2MjIsODkuMTQ2NzE4NSBaIE0xMjguOTc2ODQ4LDEwNC43NTk4NzMgQzEyNi43MDU5MTQsMTA4LjU0MjczNCAxMjYuODY5NTExLDExMS43NTcyMjIgMTMwLjEzNjcwMSwxMTMuNzE1ODEgTDEzNS44NTQyODQsMTE3LjE0MzMzOCBMMTM3LjQ3NTAzMywxMTQuNDQzNTM3IEwxMzIuMDg3MzExLDExMS4yMTM3NSBDMTMwLjEwODE0OCwxMTAuMDI3Mjk4IDEzMC4wNzM0NjQsMTA4LjM0MTU3MiAxMzEuMjc5NjA0LDEwNi4zMzI0MTcgQzEzMi40ODU3NDMsMTA0LjMyMzI2MyAxMzMuOTkwNDA4LDEwMy41NjAzMzIgMTM1Ljk2OTU3MiwxMDQuNzQ2Nzg1IEwxNDEuMzU3Mjk0LDEwNy45NzY1NzEgTDE0My4xNjY1MDMsMTA0Ljk2Mjg0IEwxMzcuNDQ4OTIsMTAxLjUzNTMxMSBDMTM0LjE4MTczLDk5LjU3NjcyMzIgMTMxLjIzODM1OSwxMDAuOTkyNzA4IDEyOC45NzY4NDgsMTA0Ljc1OTg3MyBaIE0xMTguMjc2NjAzLDExOC4yOTUzNjggQzExNC41MzkzODcsMTIxLjgzMjEyNyAxMTQuOTMyMTQ5LDEyNS4wMTUwMzQgMTE2LjU0NDM0MSwxMjYuNzE2MTkgQzExNi41Njk1MzIsMTI2Ljc0Mjc3IDExNi42NTc2OTksMTI2LjgzNTgwMiAxMTYuNzMzOTc1LDEyNi44ODk2NjcgTDExOS4wMDgyMjMsMTI0LjczNzQwNSBMMTE4LjkzMjY1MiwxMjQuNjU3NjYzIEMxMTguMDEzMTk4LDEyMy42ODc0NzMgMTE4LjE0OTk3MiwxMjEuOTk1MDE5IDExOS45NTg3MzEsMTIwLjI4MzI3OCBDMTIyLjA3MzM4MywxMTguMjgyMDUyIDEyNC4wNjkzMjMsMTE4LjczNzY5NSAxMjUuMzkxODI0LDEyMC4xMzMxNzQgQzEyNi44MTUwODcsMTIxLjYzNDk3NiAxMjYuOTAwMDk3LDEyMy43NDc3OTEgMTI0Ljk4NDk0LDEyNS41NjAyMjIgQzEyMy4wOTYzODMsMTI3LjM0NzQ4MSAxMjEuMzE1MjY3LDEyNy4wOTE4OTYgMTIwLjU0Njk1NywxMjYuMjgxMTg5IEwxMjAuNDk2NTc2LDEyNi4yMjgwMjggTDExOC4yMjIzMjgsMTI4LjM4MDI5IEMxMTguMjg0NTk5LDEyOC40NzI2MTggMTE4LjM4NTM2MSwxMjguNTc4OTQgMTE4LjQxMDU1MiwxMjguNjA1NTIxIEMxMTkuNzk2MDI5LDEzMC4wNjc0NTIgMTIzLjAzNjI1MSwxMzAuOTg0MjAxIDEyNi44OTMxNjMsMTI3LjMzNDE2NSBDMTMwLjUzNzI4MSwxMjMuODg1NTExIDEzMC41MzQ0MzcsMTIwLjE4MjM0IDEyOC4wNzgzNjMsMTE3LjU5MDczNiBDMTI1LjkzNzE3LDExNS4zMzEzODkgMTIyLjQyNjEwOSwxMTQuMzY4NDMzIDExOC4yNzY2MDMsMTE4LjI5NTM2OCBaIE0xMDcuOTA2MjQ4LDEyNi42ODA3ODYgTDExMC4xNjkwMTUsMTMxLjAzNDEyNiBMMTAzLjMwOTI3LDEzNC41OTQ2MTYgTDEwMS4wNDY1MDMsMTMwLjI0MTI3NiBMOTcuOTI1NDgyMiwxMzEuODYxMjE1IEwxMDMuNDgxMDgxLDE0Mi41NDk2MzggTDEwNi42MDIxMDMsMTQwLjkyOTY5OSBMMTA0LjUwODE5OSwxMzYuOTAxMjM2IEwxMTEuMzY3OTQzLDEzMy4zNDA3NDYgTDExMy40NjE4NDcsMTM3LjM2OTIxIEwxMTYuNTgyODY4LDEzNS43NDkyNzEgTDExMS4wMjcyNjksMTI1LjA2MDg0OCBMMTA3LjkwNjI0OCwxMjYuNjgwNzg2IFogTTg0LjE3MjM1MzcsMTM5Ljk0Mzk1MiBMODQuNDc1NTg3OSwxNDEuNzg2MjM2IEw4OS42ODEwMTc5LDE0MC45MzA2NTEgTDg5LjM3Nzc4MzcsMTM5LjA4ODM2OCBMODQuMTcyMzUzNywxMzkuOTQzOTUyIFoiIGlkPSJnZXRpbnRvdWNoLWN0YSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-about-js-d99b68fe564f496b7540.js.map