"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68424],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/dateFieldMui-489a808c974280814b761a8a5b97fbce.png",i={id:"date",title:"Date",swizzle:!0},l=void 0,s={unversionedId:"api-reference/mui/components/fields/date",id:"api-reference/mui/components/fields/date",title:"Date",description:"This field is used to display dates. It uses Day.js to display date format.",source:"@site/docs/api-reference/mui/components/fields/date.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/date",permalink:"/docs/api-reference/mui/components/fields/date",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/fields/date.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669898448,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{id:"date",title:"Date",swizzle:!0},sidebar:"someSidebar",previous:{title:"Boolean",permalink:"/docs/api-reference/mui/components/fields/boolean"},next:{title:"Email",permalink:"/docs/api-reference/mui/components/fields/email"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const u={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field is used to display dates. It uses ",(0,a.kt)("a",{parentName:"p",href:"https://day.js.org/docs/en/display/format"},(0,a.kt)("inlineCode",{parentName:"a"},"Day.js"))," to display date format."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<DateField>")," with the example in the post list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@pankod/refine-core";\nimport {\n    Table,\n    TableBody,\n    TableCell,\n    TableHead,\n    TableRow,\n    List,\n    // highlight-next-line\n    DateField,\n} from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n    });\n\n    const { data } = tableQueryResult;\n\n    return (\n        <List>\n            <Table aria-label="simple table">\n                <TableHead>\n                    <TableRow>\n                        <TableCell>Title</TableCell>\n                        <TableCell align="center">Created At</TableCell>\n                    </TableRow>\n                </TableHead>\n                <TableBody>\n                    {data?.data.map((row) => (\n                        <TableRow key={row.id}>\n                            <TableCell component="th" scope="row">\n                                {row.title}\n                            </TableCell>\n                            <TableCell align="center">\n                                // highlight-next-line\n                                <DateField value={row.createdAt} />\n                            </TableCell>\n                        </TableRow>\n                    ))}\n                </TableBody>\n            </Table>\n        </List>\n    );\n};\n\nexport interface IPost {\n    id: number;\n    title: string;\n    createdAt: string;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o,alt:"DateField"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(d,{module:"@pankod/refine-mui/DateField","format-default":"`L`",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},"Typography"),".")))}f.isMDXComponent=!0}}]);