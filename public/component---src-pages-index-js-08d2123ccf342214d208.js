(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0cVI":function(e,A,t){e.exports=t.p+"static/juneau-957121dd46dfd9a5f42fe25e7c526c9e.jpg"},"3t9p":function(e,A,t){e.exports=t.p+"static/noora-984eb0eeff0bf6f07d73cc2835e5ee99.jpg"},"3wVn":function(e,A,t){e.exports=t.p+"static/alaska-970f39407ee0bfab8fab15c4e867dbbe.jpg"},"9HbH":function(e,A,t){e.exports=t.p+"static/columbus-791aa61317c465551efe0bb25411dd2a.jpg"},RXBc:function(e,A,t){"use strict";t.r(A);var a=t("q1tI"),n=t.n(a),c=t("Wbzz"),i=t("Bl7J"),l=t("vrFN"),s=t("j5T7"),r=t.n(s),u=t("zYEW"),o=t.n(u),m=t("0cVI"),d=t.n(m),g=t("9HbH"),p=t.n(g),E=t("3t9p"),B=t.n(E),I=t("3wVn"),C=t.n(I),v=[{title:"Columbus",image:p.a,link:"columbus"},{title:"Alaska",image:C.a,link:"alaska"},{title:"Juneau",image:d.a,link:"juneau"},{title:"Noora",image:B.a,link:"noora"}];var b={slideIndex:0},f=function(e,A){return"NEXT"===A.type?Object.assign({},e,{slideIndex:(e.slideIndex+1)%v.length}):"PREVIOUS"===A.type?Object.assign({},e,{slideIndex:0===e.slideIndex?v.length-1:e.slideIndex-1}):void 0};function k(e){var A=e.slide,t=e.offset,a=0===t||null,i=function(e){var A=n.a.useRef(null);return n.a.useEffect((function(){if(A.current&&e){var t={rect:void 0,mouseX:void 0,mouseY:void 0},a=A.current,n=function(e){if(a){t.rect||(t.rect=a.getBoundingClientRect()),t.mouseX=e.clientX,t.mouseY=e.clientY;var A=(t.mouseX-t.rect.left)/t.rect.width,n=(t.mouseY-t.rect.top)/t.rect.height;a.style.setProperty("--px",A),a.style.setProperty("--py",n)}};return a.addEventListener("mousemove",n),function(){a.removeEventListener("mousemove",n)}}}),[A,e]),A}(a);return n.a.createElement("div",{ref:i,className:"slide","data-active":a,style:{"--offset":t,"--dir":0===t?0:t>0?1:-1}},n.a.createElement("div",{className:"slideBackground",style:{backgroundImage:"url('"+A.image+"')"}}),n.a.createElement("div",{className:"slideContent"},n.a.createElement("div",{className:"slideContentInner"},n.a.createElement(c.Link,{to:A.link}," ",n.a.createElement("h1",{className:"slide-title"},A.title)))))}A.default=function(){var e=n.a.useReducer(f,b),A=e[0],t=e[1];return n.a.createElement("div",{className:"workBody"},n.a.createElement(i.a,null,n.a.createElement("div",{className:"work-wrapper"},n.a.createElement(l.a,{title:"Web Designer and Developer based in London"}),n.a.createElement("div",{className:"slides"},n.a.createElement("button",{className:"slideButton prev",onClick:function(){return t({type:"PREVIOUS"})}},n.a.createElement("img",{src:r.a})),[].concat(v,v,v).map((function(e,t){var a=v.length+(A.slideIndex-t);return n.a.createElement(k,{slide:e,offset:a,key:t})})),n.a.createElement("button",{className:"slideButton next",onClick:function(){return t({type:"NEXT"})}},n.a.createElement("img",{src:o.a}))))))}},j5T7:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAD6klEQVR4nO3dN48dVRyH4XPJEi1RwkZkqEgSItrknEQ0GSxMBpucoUIUIChJhhJMKJBIJZS0CEMDCAqSRBAGY5Zldx+KuVcyI7y21zPzP7P3PB9gZn565bV97rUnpaIoiqIoiqJoDHbGKnyCW6KfZ6xhF3zqvx6Lfq6xtIEYI49GP99Ywa5YvYEYI49EP+dYGMb4bCMxRh6Oft55DbttRoyRh6Kfe14axvh8M2OMPBj9/PMK9sAXc4wx8kD0jnkBCxqIMXJ/9J5eG8b4sqEYMIPbo3f1EhY2HGP9KLdF7+uVYYyvWoixfpRbo3f2AvbCNy3GWD/KsrZ2DNq6cJewd0rpw5TSwo5uOZlS2nMwGPzY9IW3avqCXcM+KaWPUncxUkppu5TSTm1cuNdBsG+qYizo+NZvDwaD1R3fM2/YD9928HtG3QfYIXp/VrB/iZEJHIDvAmK8X2LUBMZ4D9tH788KDsT3ATHeLTFqAmO8U2LU4CD8EBDjLWwbvT8rgTHeLDFqcDB+CojxBraJ3p8VHBIU4/USo2YY4+cSIwM4NCjGqhKjJjDGayVGDQ7DLwExXsXW0fuzgsODYryCXn/80LhhjF8DYrxcYtTgKKwJiLGyxKjB0UExXioxanAMfg+I8WKJUYNjg2K8gHnxDZvGBMZ4vsSowXH4IyDGcyVGDRYFxXi2xKgJjPFM9Pbs4BSsC4jxdPT27ODUoBhPRW/PDhbjr4AYT0ZvzxI+DojxRPTuprTxN9eJFq65MV8H3LMfVB80/dbxr5BpLI3eni0cqfvDwxncGL09W2KO16dxTfT2bKmO2bs+v5rG1dHbsxUUZQpXRW/PlpjPQKZwZfT2bKmO37s+15rCFdHbsxUY5fLo7dlSfTayNiDKZdHbs6U6lo+IsiR6e7bEHM+XKLNRHdN3fTI8ifOjt2crMMp50duzhdMCovyNc6O3ZwunlyiZwRmYCIhyTvT2bAVGOTt6e7ZwZlCUs6K3ZwsXqP401KWJEmUWQVHW4eTo7dnChfgnIMpJ0duzhYsCovyJE6O3ZwsXB0U5IXp7tnBJiZIZXBoU5fjo7dnCEtVRepfWYnH09mzhWtVXfrqOsih6e7awNCDKGhwRvT1buD4gSmv/q3Xv/932YDBYmVK6OaWkw9vu3uG9+gk3qb5w3YUV0Xt7QfXjq+0oj0fv7BUsazFKeV/uXOCGFqKU9+RuCSxvMEZ5P24TsKKBGOUVrE3CnVsQo7x6tQ24aw4xyitX24S7NzHEDJZHP+9YwD2bEOOO6OccK7h3lhjlfbcRcN//xCjvuY00jDKp+jTwuujnKVJK2FF5pVFRFEVRFG34FzuG47klqlj6AAAAAElFTkSuQmCC"},zYEW:function(e,A){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-js-08d2123ccf342214d208.js.map