(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7dnC":function(e,t,n){"use strict";var a=n("PJYZ"),i=n("VbXa"),r=n("TqRt");t.__esModule=!0,t.default=t.ArenguForm=void 0;var l=r(n("q1tI")),o=r(n("17x9")),c=function(e){function t(){var t;return(t=e.call(this)||this).ref=null,t.saveRef=t.saveRef.bind(a(t)),t}i(t,e);var n=t.prototype;return n.setHiddenFields=function(e){var t=this.props.hiddenFields;return t?t.forEach((function(t){e.setHiddenField(t.key,t.value)})):null},n.initSdk=function(){var e=this,t=this.props.id;return window.ArenguForms.embed(t,this.ref).then((function(t){return e.setHiddenFields(t)}))},n.removeListeners=function(){document.removeEventListener("af-init",this.initSdk())},n.waitLoadEventAndInitSdk=function(){document.addEventListener("af-init",this.initSdk())},n.saveRef=function(e){this.ref=e},n.componentDidMount=function(){window.ArenguForms?this.initSdk():this.waitLoadEventAndInitSdk()},n.componentWillUnmount=function(){this.removeListeners()},n.render=function(){return l.default.createElement("div",{ref:this.saveRef})},t}(l.default.Component);t.ArenguForm=c,c.propTypes={id:o.default.string.isRequired,hiddenFields:o.default.arrayOf(o.default.shape({key:o.default.string,value:o.default.string}))};var s=c;t.default=s},"Cuy+":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=(n("Wbzz"),n("S4hm"),n("Bl7J")),l=n("vrFN");t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"Contact"}),i.a.createElement("div",{className:"contact-wrapper"},i.a.createElement("div",{className:"contact"},"Talk to ",i.a.createElement("span",null,i.a.createElement("a",{className:"contact-me-link",href:"mailto:hey@dinvillers.com"},"me")),i.a.createElement("form",{method:"post",action:"https://getform.io/f/f29b6f46-2289-4c12-b67c-fd7bab1d212c",class:"contact-form"},i.a.createElement("label",null,"Email*",i.a.createElement("input",{type:"email",name:"email",placeholder:"Email address",required:!0})),i.a.createElement("label",null,"Name*",i.a.createElement("input",{type:"text",name:"name",placeholder:"Full name",required:!0})),i.a.createElement("label",{class:"project-class"},"Project",i.a.createElement("select",{name:"project"},i.a.createElement("option",{value:"static"},"Static website"),i.a.createElement("option",{value:"ecommerce"},"E-commerce website"),i.a.createElement("option",{value:"iphone"},"iPhone application"),i.a.createElement("option",{value:"uiux"},"UI/UX Design"),i.a.createElement("option",{value:"other"},"Other"))),i.a.createElement("label",null,"Budget",i.a.createElement("input",{type:"text",name:"budget",placeholder:"£GBP"})),i.a.createElement("label",{class:"message-box"},"Message*",i.a.createElement("input",{type:"text",name:"message",placeholder:"Message",required:!0})),i.a.createElement("button",{type:"submit"},"Send")))))}},S4hm:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0;var i=a(n("7dnC"));t.ArenguForm=i.default}}]);
//# sourceMappingURL=component---src-pages-contact-js-f1cea8b62a98a2e73ccd.js.map