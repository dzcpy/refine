"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||n;return r?o.createElement(h,i(i({ref:t},m),{},{components:r})):o.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});r(67294);var o=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",source:"@site/blog/2022-08-29-usestate-mistakes.md",title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",date:"2022-08-29T00:00:00.000Z",formattedDate:"August 29, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:14.69,hasTruncateMarker:!0,authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],frontMatter:{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},prevItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},nextItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},relatedPosts:[{title:"React Hook Form Validation with Complete Examples",description:"We'll implement React Hook Form custom validations and schema validations using yup.",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:20.11,date:"2022-09-27T00:00:00.000Z"},{title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.505,date:"2022-12-15T00:00:00.000Z"},{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.515,date:"2022-09-24T00:00:00.000Z"}],authorPosts:[{title:"How to become a modern Node.js developer?",description:"The most essential skills to have as a modern Node.js developer",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.815,date:"2022-09-06T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],p={toc:u};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){a(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The most challenging aspect of developing any application is often managing its state. However, we are often required to manage several pieces of state in our application, such as when data is retrieved from an external server or updated in the app. "),(0,o.kt)("p",null,"The difficulty of state management is the reason why so many state management libraries exist today - and more are still being developed. Thankfully, React has several built-in solutions in the form of hooks for state management, which makes managing states in React easier."))}d.isMDXComponent=!0}}]);