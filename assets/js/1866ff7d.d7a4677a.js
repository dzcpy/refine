"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"list",title:"List",sidebar_label:"List",swizzle:!0},p=void 0,l={unversionedId:"api-reference/antd/components/basic-views/list",id:"version-3.xx.xx/api-reference/antd/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/basic-views/list.md",sourceDirName:"api-reference/antd/components/basic-views",slug:"/api-reference/antd/components/basic-views/list",permalink:"/docs/3.xx.xx/api-reference/antd/components/basic-views/list",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/basic-views/list.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1695367609,formattedLastUpdatedAt:"Sep 22, 2023",frontMatter:{id:"list",title:"List",sidebar_label:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/antd/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/antd/components/basic-views/show"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const h={toc:d};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode url=http://localhost:3000/posts",live:!0,hideCode:!0,url:"http://localhost:3000/posts"},'interface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n\n// visible-block-start\nimport { useMany } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    TextField,\n    TagField,\n    useTable,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>({\n        syncWithLocation: true,\n    });\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="Category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <Table.Column\n                    dataIndex="status"\n                    title="Status"\n                    render={(value: string) => <TagField value={value} />}\n                />\n            </Table>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"It allows adding a title for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props, it uses plural form of resource name by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List title="Custom Title">\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component in a custom page, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/custom",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/custom"},'setInitialRoutes(["/custom"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { List } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List resource="posts">\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n// visible-block-end\n\nrender(<App />);\n')),(0,r.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,r.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,r.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'const { Create } = RefineAntd;\nconst { default: simpleRest } = RefineSimpleRest;\n\nconst dataProvider = simpleRest("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n    ...dataProvider,\n    create: async ({ resource, variables }) => {\n        return {\n            data: {},\n        };\n    },\n};\n\nconst authProvider = {\n    login: () => Promise.resolve(),\n    logout: () => Promise.resolve(),\n    checkAuth: () => Promise.resolve(),\n    checkError: () => Promise.resolve(),\n    getPermissions: () => Promise.resolve("admin"),\n    getUserIdentity: () => Promise.resolve(),\n};\n\n// visible-block-start\nimport { List } from "@pankod/refine-antd";\nimport { usePermissions } from "@pankod/refine-core";\n\nconst PostList: React.FC = () => {\n    const { data: permissionsData } = usePermissions();\n    return (\n        <List\n            /* highlight-start */\n            canCreate={permissionsData?.includes("admin")}\n            createButtonProps={{ size: "small" }}\n            /* highlight-end */\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        authProvider={authProvider}\n        dataProvider={customDataProvider}\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n                create: () => {\n                    return <Create>Create Page</Create>;\n                },\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,r.kt)("h3",{id:"breadcrumb"},(0,r.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,r.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," package."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/components/breadcrumb"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-antd";\n\nconst CustomBreadcrumb: React.FC = () => {\n    return (\n        <p\n            style={{\n                padding: "3px 6px",\n                border: "2px dashed cornflowerblue",\n            }}\n        >\n            My Custom Breadcrumb\n        </p>\n    );\n};\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            breadcrumb={<CustomBreadcrumb />}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"wrapperprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,r.kt)("p",null,"If you want to customize the wrapper of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," wrapper elements are simple ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>")," can get."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            wrapperProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,r.kt)("p",null,"If you want to customize the header of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://procomponents.ant.design/en-US/components/page-header"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"PageHeader")," documentation from Ant Design for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerProps={{\n                subTitle: "This is a subtitle",\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"contentprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,r.kt)("p",null,"If you want to customize the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," property. ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," components content is wrapped with a ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," can get every attribute that ",(0,r.kt)("inlineCode",{parentName:"p"},"<div/>")," can get."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List } from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            contentProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,r.kt)("p",null,"You can customize the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List, Button } from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"headerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,r.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/space/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Space")," documentation from Ant Design for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=280px url=http://localhost:3000/posts",live:!0,disableScroll:!0,previewHeight:"280px",url:"http://localhost:3000/posts"},'// visible-block-start\nimport { List, Button } from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerButtonProps={{\n                style: {\n                    backgroundColor: "cornflowerblue",\n                    padding: "16px",\n                },\n            }}\n            // highlight-end\n            headerButtons={<Button type="primary">Custom Button</Button>}\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(u,{module:"@pankod/refine-antd/List","headerProps-type":"[`PageHeaderProps`](https://procomponents.ant.design/en-US/components/page-header)","headerButtonProps-type":"[`SpaceProps`](https://ant.design/components/space/)","createButtonProps-type":"[`ButtonProps`](https://ant.design/components/button/#API) & `{ resourceName: string }`","breadcrumb-default":"[`<Breadcrumb>`](https://ant.design/components/breadcrumb/)","canCreate-default":"If the resource is passed a create component, `true` else `false`",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);