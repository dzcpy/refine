"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},u=Object.keys(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,u=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||u;return r?o.createElement(m,a(a({ref:t},l),{},{components:r})):o.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=r.length,a=new Array(u);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<u;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const u={id:"useResourceWithRoute",title:"useResourceWithRoute"},a=void 0,i={unversionedId:"api-reference/core/hooks/resource/useResourceWithRoute",id:"version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute",title:"useResourceWithRoute",description:"useResourceWithRoute is used to get the resource object in resources array that you defined in `` by route name.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResourceWithRoute",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685623047,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"useResourceWithRoute",title:"useResourceWithRoute"},sidebar:"someSidebar",previous:{title:"useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource"},next:{title:"useShow",permalink:"/docs/3.xx.xx/api-reference/core/hooks/show/useShow"}},s={},c=[{value:"API Reference",id:"api-reference",level:2},{value:"Return value",id:"return-value",level:3}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useResourceWithRoute")," is used to get the resource object in resources array that you defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>")," by route name."),(0,n.kt)("p",null,"The hook is used internal in ",(0,n.kt)("strong",{parentName:"p"},"refine"),". Normally you don't need this hook, but we export it as it may be useful for some use-cases."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResourceWithRoute } from "@pankod/refine-core";\n\nconst resourceWithRoute = useResourceWithRoute();\n\nconst resource = resourceWithRoute("posts");\n')),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceWithRoute"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},(0,n.kt)("inlineCode",{parentName:"a"},"(route: string) => IResourceItem")))))))}p.isMDXComponent=!0}}]);