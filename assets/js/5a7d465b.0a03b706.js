"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"authenticated",title:"<Authenticated>"},o=void 0,l={unversionedId:"api-reference/core/components/auth/authenticated",id:"version-3.xx.xx/api-reference/core/components/auth/authenticated",title:"<Authenticated>",description:"` is the component form of useAuthenticated`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/auth/authenticated.md",sourceDirName:"api-reference/core/components/auth",slug:"/api-reference/core/components/auth/authenticated",permalink:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/auth/authenticated.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679564005,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"authenticated",title:"<Authenticated>"},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/3.xx.xx/api-reference/core/components/inferencer"},next:{title:"<CanAccess>",permalink:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access"}},c={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"<code>loading</code>",id:"loading",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(s="PropsTable",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Authenticated>")," is the component form of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"useAuthenticated")),"."),(0,r.kt)("p",null,"It internally uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"},(0,r.kt)("inlineCode",{parentName:"a"},"useAuthenticated")),"'s return values (",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading"),", and, ",(0,r.kt)("inlineCode",{parentName:"p"},"isError"),") to provide its functionality."),(0,r.kt)("p",null,"When:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isSuccess")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", it renders to children."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isLoading")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", it renders ",(0,r.kt)("a",{parentName:"li",href:"#loading"},(0,r.kt)("inlineCode",{parentName:"a"},"loading"))," prop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isError")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", it renders ",(0,r.kt)("a",{parentName:"li",href:"#fallback"},(0,r.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it redirects to ",(0,r.kt)("inlineCode",{parentName:"li"},"/login")," page.")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Authenticated } from "@pankod/refine-core";\n\nconst MyPage = () => (\n    <Authenticated>\n        <YourComponent />\n    </Authenticated>\n);\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/examples/customPages"},"Custom Pages Example")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages#authenticated-custom-pages"},"it's explanation")," to learn how to use it with custom pages. ","\u2192")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"fallback"},(0,r.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,r.kt)("p",null,"Component to render if the user is not logged in. If ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", the page will be redirected to ",(0,r.kt)("inlineCode",{parentName:"p"},"/login"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</Authenticated>\n")),(0,r.kt)("h3",{id:"loading"},(0,r.kt)("inlineCode",{parentName:"h3"},"loading")),(0,r.kt)("p",null,"Component to render while checking whether the user is logged in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<Authenticated loading={<div>loading...</div>}>\n    <YourComponent />\n</Authenticated>\n")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(d,{module:"@pankod/refine-core/Authenticated",mdxType:"PropsTable"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fallback"),(0,r.kt)("td",{parentName:"tr",align:null},"Component to render if the user is not logged in. If ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"),", the page will be redirected to ",(0,r.kt)("inlineCode",{parentName:"td"},"/login")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"Component to render while checking whether user is logged in"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);