"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6354],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(a),c=n,k=s["".concat(d,".").concat(c)]||s[c]||m[c]||o;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},57172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={id:"useLog",title:"useLog"},l=void 0,i={unversionedId:"api-reference/core/hooks/audit-log/useLog",id:"api-reference/core/hooks/audit-log/useLog",title:"useLog",description:"Overview",source:"@site/docs/api-reference/core/hooks/audit-log/useLog.md",sourceDirName:"api-reference/core/hooks/audit-log",slug:"/api-reference/core/hooks/audit-log/useLog",permalink:"/docs/api-reference/core/hooks/audit-log/useLog",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/audit-log/useLog.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685020741,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"useLog",title:"useLog"},sidebar:"someSidebar",previous:{title:"useUpdatePassword",permalink:"/docs/api-reference/core/hooks/authentication/useUpdatePassword"},next:{title:"useLogList",permalink:"/docs/api-reference/core/hooks/audit-log/useLogList"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"<code>log</code>",id:"log",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3},{value:"<code>rename</code>",id:"rename",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters-1",level:3},{value:"Return value",id:"return-value-1",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"If you need to create or update an audit log, ",(0,n.kt)("strong",{parentName:"p"},"refine")," provides the ",(0,n.kt)("inlineCode",{parentName:"p"},"useLog")," hook for it. The hook returns two mutations called ",(0,n.kt)("inlineCode",{parentName:"p"},"log")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"rename"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@refinedev/core";\n\nconst { log, rename } = useLog();\n')),(0,n.kt)("h2",{id:"log"},(0,n.kt)("inlineCode",{parentName:"h2"},"log")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"log")," is used to create an audit log event. The mutation uses ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/audit-log-provider#create"},(0,n.kt)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@refinedev/core";\n\nconst { log } = useLog();\nconst { mutate } = log;\n\nmutate({\n    resource: "posts",\n    action: "create",\n    author: {\n        username: "admin",\n    },\n    data: {\n        id: 1,\n        title: "New post",\n    },\n    meta: {\n        id: 1,\n    },\n});\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method is provided.")),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"required-block"},(0,n.kt)("div",null,"resource")," ",(0,n.kt)("div",{className:" required"},"Required"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"required-block"},(0,n.kt)("div",null,"action")," ",(0,n.kt)("div",{className:" required"},"Required"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"author"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"meta"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"previousData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))))),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,n.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,n.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"{ data: TData},"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"TError,"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"}," { id: BaseKey; name: string; },"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"}," unknown>")))))),(0,n.kt)("h2",{id:"rename"},(0,n.kt)("inlineCode",{parentName:"h2"},"rename")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"log")," is used to update an audit log event. The mutation uses ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/audit-log-provider#update"},(0,n.kt)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@refinedev/core";\n\nconst { rename } = useLog();\nconst { mutate } = rename;\n\nmutate({\n    id: 1,\n    name: "Updated Name",\n});\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"update")," method is provided.")),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"BaseKey"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name ",(0,n.kt)("div",{className:" required"},"Required")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h3",{id:"type-parameters-1"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,n.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,n.kt)("h3",{id:"return-value-1"},"Return value"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,n.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useMutation"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,n.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"{ data: TData},"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"TError,"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"}," { id: BaseKey; name: string; },"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"}," unknown>")))))),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can get audit logs with ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/audit-log/useLogList"},(0,n.kt)("inlineCode",{parentName:"a"},"useLogList")),".")))}m.isMDXComponent=!0}}]);