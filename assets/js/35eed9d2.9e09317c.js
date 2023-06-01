"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,f=c["".concat(l,".").concat(s)]||c[s]||p[s]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"mutation-mode",title:"Mutation Modes","example-tags":["form"]},i=void 0,m={unversionedId:"examples/mutation-mode",id:"examples/mutation-mode",title:"Mutation Modes",description:"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: pessimistic, optimistic and undoable. You can experience them with this app.",source:"@site/docs/examples/mutation-mode.md",sourceDirName:"examples",slug:"/examples/mutation-mode",permalink:"/docs/examples/mutation-mode",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/mutation-mode.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685623047,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"mutation-mode",title:"Mutation Modes","example-tags":["form"]},sidebar:"someSidebar",previous:{title:"Multi-level Menu",permalink:"/docs/examples/multi-level-menu/"},next:{title:"Next.js",permalink:"/docs/examples/next-js/"}},l={},d=[],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=u("Tabs"),c=u("TabItem"),s=u("CodeSandboxExample"),f={toc:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,r.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"undoable"),". You can experience them with this app."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Mutation Mode")," documentation for more information ","\u2192")),(0,r.kt)(p,{defaultValue:"antd",values:[{label:"Antd Design",value:"antd"},{label:"Chakra UI",value:"chakra-ui"},{label:"Mantine",value:"mantine"},{label:"Material UI",value:"material-ui"}],mdxType:"Tabs"},(0,r.kt)(c,{value:"antd",mdxType:"TabItem"},(0,r.kt)(s,{path:"form-antd-mutation-mode",mdxType:"CodeSandboxExample"})),(0,r.kt)(c,{value:"chakra-ui",mdxType:"TabItem"},(0,r.kt)(s,{path:"form-chakra-ui-mutation-mode",mdxType:"CodeSandboxExample"})),(0,r.kt)(c,{value:"mantine",mdxType:"TabItem"},(0,r.kt)(s,{path:"form-mantine-mutation-mode",mdxType:"CodeSandboxExample"})),(0,r.kt)(c,{value:"material-ui",mdxType:"TabItem"},(0,r.kt)(s,{path:"form-material-ui-mutation-mode",mdxType:"CodeSandboxExample"}))))}b.isMDXComponent=!0}}]);