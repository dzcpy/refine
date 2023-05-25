"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26235],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,g=s["".concat(l,".").concat(m)]||s[m]||c[m]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},83126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={id:"audit-log-provider",title:"Audit Log Provider","example-tags":["audit-log-provider"],"example-title":"Audit Log with Headless"},i=void 0,d={unversionedId:"examples/audit-log/audit-log-provider",id:"examples/audit-log/audit-log-provider",title:"Audit Log Provider",description:"refine allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. This example demonstrates how to create an audit log provider.",source:"@site/docs/examples/audit-log/audit-log-provider.md",sourceDirName:"examples/audit-log",slug:"/examples/audit-log/audit-log-provider",permalink:"/docs/examples/audit-log/audit-log-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/audit-log/audit-log-provider.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685020741,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"audit-log-provider",title:"Audit Log Provider","example-tags":["audit-log-provider"],"example-title":"Audit Log with Headless"},sidebar:"someSidebar",previous:{title:"Audit Log with Antd",permalink:"/docs/examples/audit-log/audit-log-antd"},next:{title:"Monorepo with Turbo",permalink:"/docs/examples/build-systems/turbo"}},l={},p=[],u=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," allows you to track changes and who made them in your data by sending a new log event record whenever a new record is created, updated or deleted. This example demonstrates how to create an audit log provider."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/audit-log-provider/"},"Refer to the refine Audit Log Provider documentation for more information. \u2192")),(0,n.kt)(u,{path:"audit-log-provider",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);