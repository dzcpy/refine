"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r=n.p+"assets/images/booleanFieldMui-8343a114fe52316e4b8c1645ac960d12.png",l={id:"boolean",title:"Boolean",swizzle:!0},i=void 0,s={unversionedId:"api-reference/mui/components/fields/boolean",id:"api-reference/mui/components/fields/boolean",title:"Boolean",description:"This field is used to display boolean values. It uses the `` values from Material UI.",source:"@site/docs/api-reference/mui/components/fields/boolean.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/boolean",permalink:"/docs/api-reference/mui/components/fields/boolean",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/fields/boolean.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669898448,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{id:"boolean",title:"Boolean",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/mui/components/buttons/show-button"},next:{title:"Date",permalink:"/docs/api-reference/mui/components/fields/date"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],u=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This field is used to display boolean values. It uses the ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-tooltip/#main-content"},(0,o.kt)("inlineCode",{parentName:"a"},"<Tooltip>"))," values from Material UI."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's see how we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<BooleanField>")," with the example in the post list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\nimport {\n    Table,\n    TableBody,\n    TableCell,\n    TableHead,\n    TableRow,\n    // highlight-next-line\n    BooleanField,\n    List,\n} from "@pankod/refine-mui";\nimport { Check, Close } from "@mui/icons-material";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n    });\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Status</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                // highlight-start\n                                <BooleanField\n                                    value={row.status === "published"}\n                                    trueIcon={<Check />}\n                                    falseIcon={<Close />}\n                                    valueLabelTrue="published"\n                                    valueLabelFalse="unpublished"\n                                />\n                                // highlight-end\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\nexport interface IPost {\n    id: number;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:r,alt:"BooleanField"})),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(u,{module:"@pankod/refine-mui/BooleanField","title-description":"The text shown in the tooltip","title-default":"`value` ? `valueLabelTrue` : `valueLabelFalse`","trueIcon-default":"[`<CheckOutlined />`](https://mui.com/material-ui/material-icons/)","falseIcon-default":"[`<CloseOutlined />`](https://mui.com/material-ui/material-icons/)",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-tooltip/#main-content"},"Tooltip"),".")))}f.isMDXComponent=!0}}]);