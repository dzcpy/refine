"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={id:"export-button",title:"Export",swizzle:!0},a=void 0,p={unversionedId:"api-reference/mantine/components/buttons/export-button",id:"version-3.xx.xx/api-reference/mantine/components/buttons/export-button",title:"Export",description:'` is an Mantine ` with a default export icon and a default text with "Export". It only has presentational value.',source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/buttons/export.md",sourceDirName:"api-reference/mantine/components/buttons",slug:"/api-reference/mantine/components/buttons/export-button",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/export-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/buttons/export.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685020741,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"export-button",title:"Export",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/edit-button"},next:{title:"Import",permalink:"/docs/3.xx.xx/api-reference/mantine/components/buttons/import-button"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    notificationProvider: RefineMantine.notificationProvider,\n    Layout: RefineMantine.Layout,\n    Sider: () => null,\n    catchAll: <RefineMantine.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineMantine.MantineProvider\n            theme={RefineMantine.LightTheme}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <RefineMantine.Global\n                styles={{ body: { WebkitFontSmoothing: "auto" } }}\n            />\n            <RefineMantine.NotificationsProvider position="top-right">\n                {children}\n            </RefineMantine.NotificationsProvider>\n        </RefineMantine.MantineProvider>\n    );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ExportButton>")," is an Mantine ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/core/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>")),' with a default export icon and a default text with "Export". It only has presentational value.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\n\n// visible-block-start\n//highlight-next-line\nimport { useExport } from "@pankod/refine-core";\nimport {\n    List,\n    Table,\n    Pagination,\n    //highlight-next-line\n    ExportButton,\n} from "@pankod/refine-mantine";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    //highlight-start\n    const { triggerExport, isLoading: exportLoading } = useExport<IPost>({\n        mapData: (item) => {\n            return {\n                id: item.id,\n                post_title: item.title,\n            };\n        },\n        pageSize: 10,\n        maxItemCount: 50,\n    });\n    //highlight-end\n\n    return (\n        <List\n            headerButtons={\n                // highlight-next-line\n                <ExportButton loading={exportLoading} onClick={triggerExport} />\n            }\n        >\n            <Table>\n                <thead>\n                    {getHeaderGroups().map((headerGroup) => (\n                        <tr key={headerGroup.id}>\n                            {headerGroup.headers.map((header) => (\n                                <th key={header.id}>\n                                    {header.isPlaceholder\n                                        ? null\n                                        : flexRender(\n                                              header.column.columnDef.header,\n                                              header.getContext(),\n                                          )}\n                                </th>\n                            ))}\n                        </tr>\n                    ))}\n                </thead>\n                <tbody>\n                    {getRowModel().rows.map((row) => (\n                        <tr key={row.id}>\n                            {row.getVisibleCells().map((cell) => (\n                                <td key={cell.id}>\n                                    {flexRender(\n                                        cell.column.columnDef.cell,\n                                        cell.getContext(),\n                                    )}\n                                </td>\n                            ))}\n                        </tr>\n                    ))}\n                </tbody>\n            </Table>\n            <br />\n            <Pagination\n                position="right"\n                total={pageCount}\n                page={current}\n                onChange={setCurrent}\n            />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\n\n// visible-block-start\nimport { ExportButton } from "@pankod/refine-mantine";\n\nconst MyExportComponent = () => {\n    return <ExportButton hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    list: MyExportComponent,\n                },\n            ]}\n        />\n    );\n};\n\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(c,{module:"@pankod/refine-mantine/ExportButton",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);