"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"antd",title:"Ant Design","example-title":"Authentication with Ant Design","example-tags":["antd","authentication"]},i=void 0,c={unversionedId:"examples/authentication/antd",id:"version-3.xx.xx/examples/authentication/antd",title:"Ant Design",description:"You can create your own Authentication approach using refine. You can customize the AuthProvider methods according to your needs and control the privileges of your users. This example is a simple example of custom authentication with refine.",source:"@site/versioned_docs/version-3.xx.xx/examples/authentication/antd.md",sourceDirName:"examples/authentication",slug:"/examples/authentication/antd",permalink:"/docs/3.xx.xx/examples/authentication/antd",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/authentication/antd.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685020741,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"antd",title:"Ant Design","example-title":"Authentication with Ant Design","example-tags":["antd","authentication"]},sidebar:"someSidebar",previous:{title:"Headless",permalink:"/docs/3.xx.xx/examples/authentication/headless"},next:{title:"Material UI",permalink:"/docs/3.xx.xx/examples/authentication/mui"}},s={},p=[],u=(l="CodeSandboxExample",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var l;const d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can create your own Authentication approach using ",(0,a.kt)("strong",{parentName:"p"},"refine"),". You can customize the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},"AuthProvider")," methods according to your needs and control the privileges of your users. This example is a simple example of custom authentication with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)(u,{path:"auth-antd",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);