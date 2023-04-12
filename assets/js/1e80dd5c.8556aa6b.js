"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"email",title:"Email",swizzle:!0},o=void 0,l={unversionedId:"api-reference/mui/components/fields/email",id:"version-3.xx.xx/api-reference/mui/components/fields/email",title:"Email",description:"This field is used to display email values. It uses the ` component of ` from Material UI.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/email.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/email",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/email",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/email.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681317196,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"email",title:"Email",swizzle:!0},sidebar:"someSidebar",previous:{title:"Date",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/date"},next:{title:"File",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/file"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],m=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This field is used to display email values. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<Link>"))," component of ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<Typography>"))," from Material UI."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see how we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<EmailField>")," with the example in the user list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n    useDataGrid,\n    DataGrid,\n    GridColumns,\n    List,\n    // highlight-next-line\n    EmailField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    { field: "firstName", headerName: "First Name", minWidth: 80 },\n    { field: "lastName", headerName: "Last Name", minWidth: 80 },\n    {\n        field: "email",\n        headerName: "Email Address",\n        renderCell: function render({ row }) {\n            // highlight-start\n            return (\n                <EmailField value={row.email} />\n            );\n            // highlight-end\n        },\n        minWidth: 100,\n        flex: 1,\n    },\n];\n\nconst UsersList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IUser>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IUSer {\n    id: number;\n    firstName: string;\n    lastName: string;\n    email: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        resources={[\n            {\n                name: "users",\n                list: UsersList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<EmailField>"),' uses "mailto:" in the href prop of the ',(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<Link>"))," component. For this reason, clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"<EmailField>")," opens your device's default mail application.")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(m,{module:"@pankod/refine-mui/EmailField",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},"Link"),".")))}u.isMDXComponent=!0}}]);