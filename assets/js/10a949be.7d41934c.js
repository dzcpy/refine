"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9415],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92755:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"useMany",title:"useMany",siderbar_label:"useMany",description:"useMany data hook from refine is a modified version of react-query's useQuery for retrieving multiple items from a resource"},d=void 0,s={unversionedId:"core/hooks/data/useMany",id:"core/hooks/data/useMany",isDocsHomePage:!1,title:"useMany",description:"useMany data hook from refine is a modified version of react-query's useQuery for retrieving multiple items from a resource",source:"@site/docs/core/hooks/data/useMany.md",sourceDirName:"core/hooks/data",slug:"/core/hooks/data/useMany",permalink:"/docs/core/hooks/data/useMany",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/data/useMany.md",tags:[],version:"current",lastUpdatedBy:"Ayd\u0131n",lastUpdatedAt:1645020877,formattedLastUpdatedAt:"2/16/2022",frontMatter:{id:"useMany",title:"useMany",siderbar_label:"useMany",description:"useMany data hook from refine is a modified version of react-query's useQuery for retrieving multiple items from a resource"},sidebar:"someSidebar",previous:{title:"useOne",permalink:"/docs/core/hooks/data/useOne"},next:{title:"useCustom",permalink:"/docs/core/hooks/data/useCustom"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useMany")," is a modified version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/queries"},(0,i.kt)("inlineCode",{parentName:"a"},"useQuery"))," used for retrieving multiple items from a ",(0,i.kt)("inlineCode",{parentName:"p"},"resource"),"."),(0,i.kt)("p",null,"It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"getMany")," method as query function from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's say that we have a resource named ",(0,i.kt)("inlineCode",{parentName:"p"},"categories"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/categories"',title:'"https://api.fake-rest.refine.dev/categories"'},'{\n    [\n        {\n            id: 1,\n            title: "E-business",\n        },\n        {\n            id: 2,\n            title: "Virtual Invoice Avon",\n        },\n        {\n            id: 3,\n            title: "Powerful Crypto",\n        },\n    ];\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@pankod/refine-core";\n\ntype ICategory = {\n    id: string;\n    title: string;\n};\n\nconst categoryQueryResult = useMany<ICategory>({\n    resource: "categories",\n    ids: ["1", "2"],\n});\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"useMany")," can also accept all ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," options.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192")),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"For example, to disable query from running automatically you can set ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const categoryQueryResult = useMany<ICategory>({\n    resource: "categories",\n    ids: ["1", "2"],\n    queryOptions: { enabled: false },\n});\n')))),(0,i.kt)("br",null),(0,i.kt)("p",null,"After query runs, the ",(0,i.kt)("inlineCode",{parentName:"p"},"categoryQueryResult")," will include the retrieved data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="categoryQueryResult.data"',title:'"categoryQueryResult.data"'},'{\n    "data": [\n        {\n            "id": 1,\n            "title": "E-business"\n        },\n        {\n            "id": 2,\n            "title": "Virtual Invoice Avon"\n        }\n    ]\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"useMany")," returns the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes properties such as ",(0,i.kt)("inlineCode",{parentName:"p"},"isLoading")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isFetching"),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},"Refer to react-query docs for further information. ","\u2192")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"required-block"},(0,i.kt)("div",null,"resource")," ",(0,i.kt)("div",{className:" required"},"Required"))),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ids ",(0,i.kt)("div",{className:"required"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"ids of the item in the resource"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string[]")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"{ data: TData[]; },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TError>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful Query notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsuccessful Query notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"Error (status code: ',(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,i.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"default"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,i.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,i.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,i.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,i.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,i.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,i.kt)("h3",{id:"return-values"},"Return values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData[]; }>")))))))}m.isMDXComponent=!0}}]);