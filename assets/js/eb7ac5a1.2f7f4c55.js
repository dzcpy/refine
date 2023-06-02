"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4838],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={id:"boolean",title:"Boolean",swizzle:!0},a=void 0,l={unversionedId:"api-reference/mui/components/fields/boolean",id:"version-3.xx.xx/api-reference/mui/components/fields/boolean",title:"Boolean",description:"This field is used to display boolean values. It uses the `` values from Material UI.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/boolean.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/boolean",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/boolean",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/boolean.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1685698249,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{id:"boolean",title:"Boolean",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/mui/components/buttons/show-button"},next:{title:"Date",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/date"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],p=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This field is used to display boolean values. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-tooltip/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<Tooltip>"))," values from Material UI."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see how we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<BooleanField>")," with the example in the post list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'const IconX = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-x"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        strokeWidth="2"\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <line x1={18} y1={6} x2={6} y2={18}></line>\n        <line x1={6} y1={6} x2={18} y2={18}></line>\n    </svg>\n);\nconst IconCheck = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-check"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        strokeWidth="2"\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <path d="M5 12l5 5l10 -10"></path>\n    </svg>\n);\n// visible-block-start\nimport {\n    useDataGrid,\n    DataGrid,\n    GridColumns,\n    List,\n    // highlight-next-line\n    BooleanField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    { field: "title", headerName: "Title", minWidth: 100, flex: 1 },\n    {\n        field: "status",\n        headerName: "Published",\n        renderCell: function render({ row }) {\n            // highlight-start\n            return (\n                <BooleanField\n                    value={row.status === "published"}\n                    trueIcon={<IconX />}\n                    falseIcon={<IconCheck />}\n                    valueLabelTrue="published"\n                    valueLabelFalse="unpublished"\n                />\n            );\n            // highlight-end\n        },\n        align: "center",\n        headerAlign: "center",\n        minWidth: 100,\n        flex: 1,\n    },\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostsList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(p,{module:"@pankod/refine-mui/BooleanField","title-description":"The text shown in the tooltip","title-default":"`value` ? `valueLabelTrue` : `valueLabelFalse`","trueIcon-default":"[`<CheckOutlined />`](https://mui.com/material-ui/material-icons/)","falseIcon-default":"[`<CloseOutlined />`](https://mui.com/material-ui/material-icons/)",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-tooltip/#main-content"},"Tooltip"),".")))}m.isMDXComponent=!0}}]);