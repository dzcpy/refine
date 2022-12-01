"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||l[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),a=n(18703);const i={id:"show-button",title:"Show",swizzle:!0},s=void 0,p={unversionedId:"api-reference/antd/components/buttons/show-button",id:"api-reference/antd/components/buttons/show-button",title:"Show",description:"` uses Ant Design's  component. It uses the show method from useNavigation` under the hood. It can be useful when redirecting the app to the show page with the record id route of resource.",source:"@site/docs/api-reference/antd/components/buttons/show.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/show-button",permalink:"/docs/api-reference/antd/components/buttons/show-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/buttons/show.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669898448,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{id:"show-button",title:"Show",swizzle:!0},sidebar:"someSidebar",previous:{title:"Save",permalink:"/docs/api-reference/antd/components/buttons/save-button"},next:{title:"Boolean",permalink:"/docs/api-reference/antd/components/fields/boolean"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const m={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the show page with the record id route of resource."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    useTable,\n    // highlight-next-line\n    ShowButton,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        // highlight-next-line\n                        <ShowButton size="small" recordItemId={record.id} />\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,r.kt)("p",null,"Will look like this:"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:a.Z,alt:"Default show button"})),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@pankod/refine-antd";\n\nexport const MyShowComponent = () => {\n    return <ShowButton resourceName="posts" recordItemId="1" />;\n};\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/show/1"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," component reads the id information from the route by default.")),(0,r.kt)("h3",{id:"resourcenameorroutename"},(0,r.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,r.kt)("p",null,"Redirection endpoint(",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/show"),") is defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"<ShowButton>")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as an endpoint to redirect after clicking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@pankod/refine-antd";\n\nexport const MyShowComponent = () => {\n    return <ShowButton resourceNameOrRouteName="categories" recordItemId="2" />;\n};\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories/show/2"),"."),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@pankod/refine-antd";\n\nexport const MyShowComponent = () => {\n    return <ShowButton hideText />;\n};\n')),(0,r.kt)("h3",{id:"accesscontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ShowButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return <ShowButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />;\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(l,{module:"@pankod/refine-antd/ShowButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),".")))}h.isMDXComponent=!0},18703:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/show-55c5701825c44d160f410a7a8e9b55ee.png"}}]);