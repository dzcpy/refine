"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"useGetToPath",title:"useGetToPath",sidebar_label:"useGetToPath \ud83c\udd95"},s=void 0,u={unversionedId:"api-reference/core/hooks/navigation/useGetToPath",id:"api-reference/core/hooks/navigation/useGetToPath",title:"useGetToPath",description:"useGetToPath is a hook that returns a function that composes the URL for the given resource and the action by using the URL parameters and the meta property if provided.",source:"@site/docs/api-reference/core/hooks/navigation/useGetToPath.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useGetToPath",permalink:"/docs/api-reference/core/hooks/navigation/useGetToPath",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useGetToPath.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1695367609,formattedLastUpdatedAt:"Sep 22, 2023",frontMatter:{id:"useGetToPath",title:"useGetToPath",sidebar_label:"useGetToPath \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useLink \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useLink"},next:{title:"useNavigation",permalink:"/docs/api-reference/core/hooks/navigation/useNavigation"}},l={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>legacy</code>",id:"legacy",level:3}],d={toc:p};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useGetToPath")," is a hook that returns a function that composes the URL for the given ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," by using the URL parameters and the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property if provided."),(0,r.kt)("p",null,"This is useful when you want to navigate to a specific action of a resource and you want to have the URL to be composed automatically."),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGetToPath, useGo } from "@refinedev/core";\n\n// Let\'s assume that we have a resource named `posts` and the `edit` action path is `/:authorId/posts/:id/edit`\n\nconst MyComponent = () => {\n    const getToPath = useGetToPath();\n\n    const go = useGo();\n\n    return (\n        <Button\n            onClick={() => {\n                go({\n                    to: getToPath({\n                        resource: "posts",\n                        action: "edit",\n                        meta: {\n                            id: 1,\n                            authorId: 2,\n                        },\n                    }),\n                });\n            }}\n        >\n            Go To Edit Post\n        </Button>\n    );\n\n    /* ... */\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"authorId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," parameters will be inferred from the route if they are present in the URL. If you want to explicitly set the value of a parameter, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," property.")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"This is the name of the resource that you want to navigate to."),(0,r.kt)("h3",{id:"action"},(0,r.kt)("inlineCode",{parentName:"h3"},"action")),(0,r.kt)("p",null,"This is the name of the action that you want to navigate to."),(0,r.kt)("h3",{id:"meta"},(0,r.kt)("inlineCode",{parentName:"h3"},"meta")),(0,r.kt)("p",null,"This is the meta object that you want to use to compose the URL. It will be merged with the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," object that is parsed from the URL."),(0,r.kt)("h3",{id:"legacy"},(0,r.kt)("inlineCode",{parentName:"h3"},"legacy")),(0,r.kt)("p",null,"This is a boolean value that indicates whether the legacy URL format should be used or not. If it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the URL will be composed for the legacy routers. Default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."))}h.isMDXComponent=!0}}]);