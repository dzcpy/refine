"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39190],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},21937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"list",title:"List",swizzle:!0},p=void 0,l={unversionedId:"api-reference/chakra-ui/components/basic-views/list",id:"api-reference/chakra-ui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/docs/api-reference/chakra-ui/components/basic-views/list.md",sourceDirName:"api-reference/chakra-ui/components/basic-views",slug:"/api-reference/chakra-ui/components/basic-views/list",permalink:"/docs/api-reference/chakra-ui/components/basic-views/list",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/basic-views/list.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1688477172,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"list",title:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/api-reference/chakra-ui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/api-reference/chakra-ui/components/basic-views/show"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],u=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const h={toc:d};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    Layout: RefineChakra.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n            {children}\n        </ChakraUI.ChakraProvider>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List, DateField } from "@refinedev/chakra-ui";\nimport {\n    TableContainer,\n    Table,\n    Thead,\n    Tr,\n    Th,\n    Tbody,\n    Td,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n            },\n            {\n                id: "createdAt",\n                header: "Created At",\n                accessorKey: "createdAt",\n                cell: function render({ getValue }) {\n                    return (\n                        <DateField value={getValue() as string} format="LLL" />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <List>\n            <TableContainer>\n                <Table variant="simple" whiteSpace="pre-line">\n                    <Thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <Tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => {\n                                    return (\n                                        <Th key={header.id}>\n                                            {!header.isPlaceholder &&\n                                                flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                        </Th>\n                                    );\n                                })}\n                            </Tr>\n                        ))}\n                    </Thead>\n                    <Tbody>\n                        {getRowModel().rows.map((row) => {\n                            return (\n                                <Tr key={row.id}>\n                                    {row.getVisibleCells().map((cell) => {\n                                        return (\n                                            <Td key={cell.id}>\n                                                {flexRender(\n                                                    cell.column.columnDef.cell,\n                                                    cell.getContext(),\n                                                )}\n                                            </Td>\n                                        );\n                                    })}\n                                </Tr>\n                            );\n                        })}\n                    </Tbody>\n                </Table>\n            </TableContainer>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={RefineChakra.notificationProvider()}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"It allows adding a title for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props, it uses plural form of resource name by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\nimport { Heading } from "@chakra-ui/react";\n\nconst PostList: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List title={<Heading size="lg">Custom Title</Heading>}>\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. If you want to use a custom resource for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/custom previewHeight=280px",live:!0,url:"http://localhost:3000/custom",previewHeight:"280px"},'setInitialRoutes(["/custom"]);\n\nimport { Refine } from "@refinedev/core";\nimport { Layout } from "@refinedev/chakra-ui";\nimport routerProvider from "@refinedev/react-router-v6/legacy";\nimport dataProvider from "@refinedev/simple-rest";\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List resource="categories">\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            legacyRouterProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            Layout={Layout}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,r.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,r.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\nimport { usePermissions } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n    const { data: permissionsData } = usePermissions();\n    return (\n        <List\n            /* highlight-start */\n            canCreate={permissionsData?.includes("admin")}\n            createButtonProps={{ colorScheme: "red", variant: "solid" }}\n            /* highlight-end */\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    const simpleRestDataProvider = dataProvider(\n        "https://api.fake-rest.refine.dev",\n    );\n\n    const customDataProvider = {\n        ...simpleRestDataProvider,\n        deleteOne: async ({ resource, id, variables }) => {\n            return {\n                data: {},\n            };\n        },\n    };\n\n    const authProvider = {\n        login: async () => {\n            return {\n                success: true,\n                redirectTo: "/",\n            };\n        },\n        register: async () => {\n            return {\n                success: true,\n            };\n        },\n        forgotPassword: async () => {\n            return {\n                success: true,\n            };\n        },\n        updatePassword: async () => {\n            return {\n                success: true,\n            };\n        },\n        logout: async () => {\n            return {\n                success: true,\n                redirectTo: "/",\n            };\n        },\n        check: async () => ({\n            authenticated: true,\n        }),\n        onError: async (error) => {\n            console.error(error);\n            return { error };\n        },\n        getPermissions: async () => ["admin"],\n        getIdentity: async () => null,\n    };\n\n    return (\n        <RefineHeadlessDemo\n            dataProvider={customDataProvider}\n            authProvider={authProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"breadcrumb"},(0,r.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,r.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/breadcrumb"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\nimport { Box } from "@chakra-ui/react";\n\nconst CustomBreadcrumb: React.FC = () => {\n    return (\n        <Box borderColor="blue" borderStyle="dashed" borderWidth="2px" p="2">\n            My Custom Breadcrumb\n        </Box>\n    );\n};\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            breadcrumb={<CustomBreadcrumb />}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"wrapperprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,r.kt)("p",null,"If you want to customize the wrapper of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," wrapper element is ",(0,r.kt)("inlineCode",{parentName:"p"},"<Box>"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,r.kt)("inlineCode",{parentName:"p"},"<Box>")," can get."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            wrapperProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                p: "2",\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"headerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,r.kt)("p",null,"If you want to customize the header of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                p: "2",\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"contentprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,r.kt)("p",null,"If you want to customize the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            contentProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                padding: 2,\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"headerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component has a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/buttons/create-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<CreateButton>"))," at the header."),(0,r.kt)("p",null,"You can customize the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons, createButtonProps}) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'If "create" resource is not defined or ',(0,r.kt)("a",{parentName:"p",href:"#cancreate-and-createbuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"canCreate"))," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/buttons/create-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<CreateButton>"))," will not render and ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\nimport { Button } from "@chakra-ui/react";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button colorScheme="red" variant="solid">\n                        Custom Button\n                    </Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Or, instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultButtons"),", you can create your own buttons. If you want, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," to utilize the default values of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/buttons/create-button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<CreateButton>"))," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\nimport { Button, CreateButton } from "@chakra-ui/react";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerButtons={({ createButtonProps }) => (\n                <>\n                    {createButtonProps && (\n                        <CreateButton\n                            {...createButtonProps}\n                            meta={{ foo: "bar" }}\n                        />\n                    )}\n                    <Button colorScheme="red" variant="solid">\n                        Custom Button\n                    </Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h3",{id:"headerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,r.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { List } from "@refinedev/chakra-ui";\nimport { Button } from "@chakra-ui/react";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerButtonProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                p: "2",\n            }}\n            // highlight-end\n            headerButtons={\n                <Button colorScheme="red" variant="solid">\n                    Custom Button\n                </Button>\n            }\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <RefineHeadlessDemo\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(u,{module:"@refinedev/chakra-ui/List","title-default":"`<Title order={3}>{resource.name}</Title>`",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);