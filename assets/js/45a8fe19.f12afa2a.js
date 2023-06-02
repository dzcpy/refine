"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"nhost",title:"Nhost","example-tags":["data-provider","live-provider"]},i=void 0,p={unversionedId:"examples/data-provider/nhost",id:"examples/data-provider/nhost",title:"Nhost",description:"refine Nhost GraphQL Data Provider comes out-of-the-box. Thanks to refine, you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with refine project.",source:"@site/docs/examples/data-provider/nhost.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/nhost",permalink:"/docs/examples/data-provider/nhost",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/nhost.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1685698249,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{id:"nhost",title:"Nhost","example-tags":["data-provider","live-provider"]},sidebar:"someSidebar",previous:{title:"Nestjsx Crud",permalink:"/docs/examples/data-provider/nestjsxCrud"},next:{title:"Strapi",permalink:"/docs/examples/data-provider/strapi"}},d={},s=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],l=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," ",(0,a.kt)("a",{parentName:"p",href:"https://nhost.io/"},"Nhost")," GraphQL Data Provider comes out-of-the-box. Thanks to ",(0,a.kt)("strong",{parentName:"p"},"refine"),", you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with ",(0,a.kt)("strong",{parentName:"p"},"refine")," project."),(0,a.kt)("h2",{id:"id-data-type"},"ID Data Type"),(0,a.kt)("p",null,"By default, the data provider assume that your ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," type is ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,a.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,a.kt)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,a.kt)("inlineCode",{parentName:"h4"},"idType")),(0,a.kt)("p",null,"This will allow you to determine the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n    idType: "Int",\n});\n')),(0,a.kt)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,a.kt)("inlineCode",{parentName:"h4"},"idType")),(0,a.kt)("p",null,"This will allow you to determine the ",(0,a.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n    users: "Int",\n    posts: "uuid",\n};\n\nconst myDataProvider = dataProvider(client, {\n    idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,a.kt)("admonition",{title:"Demo Credentials",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Username"),": ",(0,a.kt)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev"),"\n",(0,a.kt)("strong",{parentName:"p"},"Password"),": demodemo")),(0,a.kt)(l,{path:"data-provider-nhost",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);