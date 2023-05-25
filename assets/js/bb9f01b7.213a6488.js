"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),d=n(7094),s=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:k,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,l.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,d.U)(),[C,w]=(0,r.useState)(f),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&h.some((t=>t.value===e))&&w(e)}const L=e=>{const t=e.currentTarget,n=P.indexOf(t),a=h[n].value;a!==C&&(x(t),w(a),null!=k&&b(k,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>P.push(e),onKeyDown:T,onFocus:L,onClick:L},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},99463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"audit-log-provider",title:"Audit Log Provider"},d=void 0,s={unversionedId:"api-reference/core/providers/audit-log-provider",id:"version-3.xx.xx/api-reference/core/providers/audit-log-provider",title:"Audit Log Provider",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/providers/audit-log-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/audit-log-provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/providers/audit-log-provider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685020741,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"audit-log-provider",title:"Audit Log Provider"},sidebar:"someSidebar",previous:{title:"Auth Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},next:{title:"Data Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/data-provider"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Creating an Audit Log Provider",id:"creating-an-audit-log-provider",level:2},{value:"<code>get</code>",id:"get",level:3},{value:"Parameter Types",id:"parameter-types",level:4},{value:"<code>create</code>",id:"create",level:3},{value:"Parameter Types",id:"parameter-types-1",level:4},{value:"<code>update</code>",id:"update",level:3},{value:"Parameter Types",id:"parameter-types-2",level:4},{value:"Supported Hooks",id:"supported-hooks",level:2},{value:"<code>useCreate</code>",id:"usecreate",level:3},{value:"<code>useUpdate</code>",id:"useupdate",level:3},{value:"<code>useDelete</code>",id:"usedelete",level:3},{value:"Enable/Disable to Audit Log by Mutation Type for a Resource",id:"enabledisable-to-audit-log-by-mutation-type-for-a-resource",level:2},{value:"Example",id:"example",level:2}],m=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const k={toc:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," allows you to track changes in your data and keep track of who made the changes. This is done by sending a new log event record whenever a new record is created, updated or deleted. Mutations made with data hooks are automatically sent the ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," as an event. You can also manually send events to the ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," via hooks."),(0,r.kt)("p",null,"An audit log provider must have the following three methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create"),": Logs an event to the audit log."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get"),": Returns a list of events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update"),": Updates an event in the audit log.")),(0,r.kt)("p",null,"Below are the corresponding interfaces for each of these methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const auditLogProvider = {\n    create: (params: {\n        resource: string;\n        action: string;\n        data?: any;\n        author?: {\n            name?: string;\n            [key: string]: any;\n        };\n        previousData?: any;\n        meta?: Record<string, any>;\n    }) => void;\n    get: (params: {\n        resource: string;\n        action?: string;\n        meta?: Record<string, any>;\n        author?: Record<string, any>;\n        metaData?: MetaDataQuery;\n    }) => Promise<any>;\n    update: (params: {\n        id: BaseKey;\n        name: string;\n    }) => Promise<any>;\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLog")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogList")," hooks to access your ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," methods from anywhere in your application.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You just need to pass your ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," object to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\n\nimport auditLogProvider from "./auditLogProvider";\n\nconst App: React.FC = () => {\n    return <Refine auditLogProvider={auditLogProvider} />;\n};\n')),(0,r.kt)("h2",{id:"creating-an-audit-log-provider"},"Creating an Audit Log Provider"),(0,r.kt)("p",null,"Let's create an ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," to understand better. In this example, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," to handle events. But you can handle events whatever you want because ",(0,r.kt)("strong",{parentName:"p"},"refine")," provides an agnostic API. So, If you want to use a third-party library, of course, you can."),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get")),(0,r.kt)("p",null,"This method is used to list audit log events."),(0,r.kt)("p",null,"For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogList")," hook to list all resource activities by a specific record id creates an event like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "resource": "posts",\n    "meta": {\n        "id": "1"\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The event is create with parameters passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogList")," hook.")),(0,r.kt)("p",null,"Now let's see how we can handle these events in our audit log provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auditLogProvider.ts"',title:'"auditLogProvider.ts"'},'import refineSimpleRestDataProvider from "@pankod/refine-simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst dataProvider = refineSimpleRestDataProvider(API_URL);\n\nconst auditLogProvider: AuditLogProvider = {\n    get: async ({ resource, meta }) => {\n        const { data } = await dataProvider(API_URL).getList({\n            resource: "logs",\n            filters: [\n                {\n                    field: "resource",\n                    operator: "eq",\n                    value: resource,\n                },\n                {\n                    field: "meta.id",\n                    operator: "eq",\n                    value: meta?.id,\n                },\n            ],\n        });\n\n        return data;\n    },\n};\n')),(0,r.kt)("h4",{id:"parameter-types"},"Parameter Types"),(0,r.kt)("p",null,"This method can take the following parameters via hooks. You can use these parameters to filter the events."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"update"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"delete"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"author"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))))),(0,r.kt)("h3",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h3"},"create")),(0,r.kt)("p",null,"This method is used to create an audit log event. It is triggered when a new successful mutation or when you use ",(0,r.kt)("inlineCode",{parentName:"p"},"useLog"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," method. The incoming parameters show the values of the new record to be created."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We recommend you create audit logs on the API side for security concerns because data can be changed on the client side.")),(0,r.kt)("p",null,"When the mutations is successful, the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method is called with the following parameters, depending on the mutation type:"),(0,r.kt)(o.Z,{defaultValue:"create",values:[{label:"Create event",value:"create"},{label:"Update event",value:"update"},{label:"Delete event",value:"delete"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"create",mdxType:"TabItem"},(0,r.kt)("p",null,"When a record is created, refine automatically sends an event to ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "create",\n    "resource": "posts",\n    "data": {\n        "id": "1",\n        "title": "Hello World",\n        "content": "Hello World"\n    },\n    "meta": {\n        "dataProviderName": "simple-rest",\n        // If request response has a `id` field, it will be add in the `meta` field.\n        "id": "1"\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the created record is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," object. It can be used for filtering purposes."))),(0,r.kt)(i.Z,{value:"update",mdxType:"TabItem"},(0,r.kt)("p",null,"When a record is updated, refine automatically sends an event to ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "update",\n    "resource": "posts",\n    "data": {\n        "id": "1",\n        "title": "New Hello World",\n        "content": "New Hello World"\n    },\n    "previousData": {\n        "id": "1",\n        "title": "Hello World",\n        "content": "Hello World"\n    },\n    "meta": {\n        "dataProviderName": "simple-rest",\n        "id": "1"\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"previousData")," from the react-query cache. So, if it cannot find the previous data, it will return ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."))),(0,r.kt)(i.Z,{value:"delete",mdxType:"TabItem"},(0,r.kt)("p",null,"When a record is deleted, refine automatically sends an event to ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "delete",\n    "resource": "posts",\n    "meta": {\n        "dataProviderName": "simple-rest",\n        "id": "1"\n    }\n}\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"getUserIdentity"))," is defined in your auth provider, the ",(0,r.kt)("inlineCode",{parentName:"p"},"author")," object is added to the event with the value returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserIdentity"),".")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Now let's see how we can handle these events in our audit log provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auditLogProvider.ts"',title:'"auditLogProvider.ts"'},'import refineSimpleRestDataProvider from "@pankod/refine-simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst dataProvider = refineSimpleRestDataProvider(API_URL);\n\nconst auditLogProvider: AuditLogProvider = {\n    create: (params) => {\n        return dataProvider(API_URL).create({\n            resource: "logs",\n            variables: params,\n        });\n    },\n};\n')),(0,r.kt)("h4",{id:"parameter-types-1"},"Parameter Types"),(0,r.kt)("p",null,"This method can take the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"update"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"delete"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"author"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string, any>"))))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," will use this ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"},(0,r.kt)("inlineCode",{parentName:"a"},"useLog"))," hook."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useLog")," documentation for more information. ","\u2192"))),(0,r.kt)("h3",{id:"update"},(0,r.kt)("inlineCode",{parentName:"h3"},"update")),(0,r.kt)("p",null,"This method is used to update an audit log event."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to name an event, this is the way to do it. You can create a milestone by naming it.")),(0,r.kt)("p",null,"For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"useLog"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," method creates an event like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1",\n    "name": "event name"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="auditLogProvider.ts"',title:'"auditLogProvider.ts"'},'import refineSimpleRestDataProvider from "@pankod/refine-simple-rest";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst dataProvider = refineSimpleRestDataProvider(API_URL);\n\nconst auditLogProvider: AuditLogProvider = {\n    update: async ({ id, name }) => {\n        const { data } = await dataProvider(API_URL).update({\n            resource: "logs",\n            id,\n            variables: { name },\n        });\n        return data;\n    },\n};\n')),(0,r.kt)("h4",{id:"parameter-types-2"},"Parameter Types"),(0,r.kt)("p",null,"This method can take the following parameters."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BaseKey"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," will use this ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"},(0,r.kt)("inlineCode",{parentName:"a"},"useLog"))," hook."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useLog")," documentation for more information. ","\u2192"))),(0,r.kt)("h2",{id:"supported-hooks"},"Supported Hooks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," creates an audit log event when the mutation is successful on hooks that ",(0,r.kt)("inlineCode",{parentName:"p"},"useCreate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hooks. The ",(0,r.kt)("inlineCode",{parentName:"p"},"useCreateMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdateMany")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," hooks are not create audit log events."),(0,r.kt)("h3",{id:"usecreate"},(0,r.kt)("inlineCode",{parentName:"h3"},"useCreate")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"useCreate")," is called, ",(0,r.kt)("inlineCode",{parentName:"p"},"refine")," sends the following parameters to audit log provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreate();\n\nmutate({\n    resource: "posts",\n    values: {\n        title: "New Post",\n        status: "published",\n        content: "New Post Content",\n    },\n    metaData: {\n        foo: "bar",\n    },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Create event"',title:'"Create','event"':!0},'{\n    "action": "create",\n    "resource": "posts",\n    "data": {\n        "title": "Title",\n        "status": "published",\n        "content": "New Post Content"\n    },\n    "meta": {\n        "id": "1",\n        // `metaData` is included in `meta`.\n        "foo": "bar"\n    }\n}\n')),(0,r.kt)("h3",{id:"useupdate"},(0,r.kt)("inlineCode",{parentName:"h3"},"useUpdate")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdate")," is called, ",(0,r.kt)("inlineCode",{parentName:"p"},"refine")," sends the following parameters to audit log provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdate();\n\nmutate({\n    id: 1,\n    resource: "posts",\n    values: {\n        title: "Updated New Title",\n    },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Update event"',title:'"Update','event"':!0},'{\n    "action": "update",\n    "resource": "posts",\n    "data": {\n        "title": "Updated New Title",\n        "status": "published",\n        "content": "New Post Content"\n    },\n    "previousData": {\n        "title": "Title",\n        "status": "published",\n        "content": "New Post Content"\n    },\n    "meta": {\n        "id": 1\n    }\n}\n')),(0,r.kt)("h3",{id:"usedelete"},(0,r.kt)("inlineCode",{parentName:"h3"},"useDelete")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," is called, ",(0,r.kt)("inlineCode",{parentName:"p"},"refine")," sends the following parameters to audit log provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDelete();\n\nmutate({\n    id: 1,\n    resource: "posts",\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Delete event"',title:'"Delete','event"':!0},'{\n    "action": "delete",\n    "resource": "posts",\n    "meta": {\n        "id": 1\n    }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"enabledisable-to-audit-log-by-mutation-type-for-a-resource"},"Enable/Disable to Audit Log by Mutation Type for a Resource"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," allows you to manage the audit log events for a resource. In addition, it can be managed in which type of mutations an event will be created. ",(0,r.kt)("strong",{parentName:"p"},"If no definition is made, it works in all actions"),"."),(0,r.kt)("p",null,"In this case, only events will be created for the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," mutation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine\n    dataProvider={dataProvider(API_URL)}\n    resources={[\n        {\n            name: "posts",\n            list: PostList,\n            create: PostCreate,\n            edit: PostEdit,\n            show: PostShow,\n            canDelete: true,\n            // highlight-start\n            options: {\n                auditLog: {\n                    permissions: ["create"],\n                },\n            },\n            // highlight-end\n        },\n    ]}\n/>\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(m,{path:"audit-log-provider",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);