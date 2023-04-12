"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||s[c]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"chakra-ui-themed-layout",title:"<ThemedLayout>",sidebar_label:"<ThemedLayout>",description:"<ThemedLayout> component from refine, defines the overall structure and layout of a web page.",swizzle:!0,source:"packages/chakra-ui/src/components/themedLayout/index.tsx"},i=void 0,l={unversionedId:"api-reference/chakra-ui/components/chakra-ui-themed-layout",id:"api-reference/chakra-ui/components/chakra-ui-themed-layout",title:"<ThemedLayout>",description:"<ThemedLayout> component from refine, defines the overall structure and layout of a web page.",source:"@site/docs/api-reference/chakra-ui/components/themed-layout.md",sourceDirName:"api-reference/chakra-ui/components",slug:"/api-reference/chakra-ui/components/chakra-ui-themed-layout",permalink:"/docs/api-reference/chakra-ui/components/chakra-ui-themed-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/themed-layout.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1681317196,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"chakra-ui-themed-layout",title:"<ThemedLayout>",sidebar_label:"<ThemedLayout>",description:"<ThemedLayout> component from refine, defines the overall structure and layout of a web page.",swizzle:!0,source:"packages/chakra-ui/src/components/themedLayout/index.tsx"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/api-reference/chakra-ui/components/chakra-auth-page"},next:{title:"Inferencer",permalink:"/docs/api-reference/chakra-ui/components/inferencer"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"<code>Sider</code>",id:"sider",level:3},{value:"<code>Sider Props</code>",id:"sider-props",level:4},{value:"<code>Header</code>",id:"header",level:3},{value:"<code>Title</code>",id:"title",level:3},{value:"<code>Footer</code>",id:"footer",level:3},{value:"<code>OffLayoutArea</code>",id:"offlayoutarea",level:3},{value:"Customizing with swizzle",id:"customizing-with-swizzle",level:2},{value:"Usage",id:"usage-1",level:3}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const authProvider = {\n    login: async () => ({\n        success: true,\n        redirectTo: "/",\n    }),\n    logout: async () => ({\n        success: true,\n        redirectTo: "/login",\n    }),\n    onError: async (error) => {\n        console.error(error);\n        return { error };\n    },\n    check: async () => ({\n        authenticated: true,\n    }),\n    getIdentity: async () => ({\n        id: 1,\n        name: "Jane Doe",\n        avatar: "https://unsplash.com/photos/IWLOvomUmWU/download?force=true&w=640",\n    }),\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>")," component that uses the ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/drawer"},(0,r.kt)("inlineCode",{parentName:"a"},"<Drawer>"))," from Chakra UI library to define the layout and structure of a web page. It includes customizable components for the header, sidebar, title, footer, and off-layout area, which can be replaced or customized as needed."),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>"),", developers can create a consistent look and feel across multiple pages or sections of a website, while also improving code maintainability and reusability. The customizable sections of ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>")," include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/header/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedHeader>")),": displayed at the top of the page and can display the user's name and avatar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/sider/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedSider>")),": displayed on the left side of the page and can display menu items."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/title/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedTitle>")),": displayed at the top of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/sider/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedSider>"))," and includes an icon and text."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<Footer>"),": displayed at the bottom of the page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<OffLayoutArea>"),": rendered outside of the main layout component and can be placed anywhere on the page while still being part of the overall layout.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Footer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OffLayoutArea")," do not have any default components.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=600px hideCode url=http://localhost:3000/samples",live:!0,previewHeight:"600px",hideCode:!0,url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\n\nimport { Refine } from "@refinedev/core";\n// highlight-next-line\nimport { ThemedLayout, RefineThemes } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { authProvider } from "./authProvider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    authProvider={authProvider}\n                    resources={[\n                        {\n                            name: "samples",\n                            list: "/samples",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                // highlight-next-line\n                                <ThemedLayout>\n                                    <Outlet />\n                                </ThemedLayout>\n                            }\n                        >\n                            {/* highlight-next-line */}\n                            <Route\n                                path="/samples"\n                                element={<ChakraUIInferencer />}\n                            />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>")," is designed to be responsive. In the live-preview, it appears in tablet mode and toggle ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/drawer"},(0,r.kt)("inlineCode",{parentName:"a"},"<Drawer>")),". On larger screens, it will use fixed open ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/drawer"},(0,r.kt)("inlineCode",{parentName:"a"},"<Drawer>")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Example of above showing how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>")," with ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/react-router-v6/"},(0,r.kt)("inlineCode",{parentName:"a"},"React Router v6")),". You can see these examples for other routers:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/examples/auth-chakra-ui/src/App.tsx#L171"},"React Router v6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/examples/with-nextjs-auth/pages/_app.tsx#L31"},"Next.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/examples/with-remix-auth/app/routes/_protected.tsx"},"Remix"))),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Next.js and Remix examples are using ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout"),"> from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/antd")," package. But you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," as same."))),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"sider"},(0,r.kt)("inlineCode",{parentName:"h3"},"Sider")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>"),", the sidebar section is rendered using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/sider/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedSider>"))," component by default. This component is specifically designed to generate menu items based on the resources defined in ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," components, using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu/"},(0,r.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook. However, if desired, it's possible to replace the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/sider/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedSider>"))," component by passing a custom component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayout } from "@refinedev/chakra-ui";\n\nimport { CustomSider } from "./CustomSider";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n        // ...\n        >\n            <ThemedLayout\n                // highlight-next-line\n                Sider={() => <CustomSider />}\n            >\n                {/* ... */}\n            </ThemedLayout>\n        </Refine>\n    );\n};\n')),(0,r.kt)("p",null,"Also, you can customize the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/sider/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedSider>"))," component either by using its props or with the ",(0,r.kt)("a",{parentName:"p",href:"#customizing-with-swizzle"},"swizzle")," feature."),(0,r.kt)("p",null,"Here is an example of how to customize the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/sider/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedSider>"))," component using the ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Title")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayout, ThemedSider } from "@refinedev/chakra-ui";\n\nimport { CustomTitle } from "./CustomTitle";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n        // ...\n        >\n            <ThemedLayout\n                // highlight-start\n                Sider={() => (\n                    <ThemedSider\n                        Title={({ collapsed }) => (\n                            <CustomTitle collapsed={collapsed} />\n                        )}\n                        render={({ items, logout, collapsed }) => {\n                            return (\n                                <>\n                                    <div>My Custom Element</div>\n                                    {items}\n                                    {logout}\n                                </>\n                            );\n                        }}\n                    />\n                )}\n                // highlight-end\n            >\n                {/* ... */}\n            </ThemedLayout>\n        </Refine>\n    );\n};\n')),(0,r.kt)("h4",{id:"sider-props"},(0,r.kt)("inlineCode",{parentName:"h4"},"Sider Props")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#title"},(0,r.kt)("inlineCode",{parentName:"a"},"Title"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.FC")),(0,r.kt)("td",{parentName:"tr",align:null},"Component to render at the top")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"render")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#siderrenderfunction"},(0,r.kt)("inlineCode",{parentName:"a"},"SiderRenderFunction"))),(0,r.kt)("td",{parentName:"tr",align:null},"Function to render the menu items and other elements inside the ",(0,r.kt)("inlineCode",{parentName:"td"},"<ThemedSider>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"meta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Record<string,any>")),(0,r.kt)("td",{parentName:"tr",align:null},"Meta data to use when creating routes for the menu items")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type SiderRenderFunction = (props: {\n    items: JSX.Element[];\n    logout: React.ReactNode;\n    dashboard: React.ReactNode;\n    collapsed: boolean;\n}) => React.ReactNode;\n")),(0,r.kt)("h3",{id:"header"},(0,r.kt)("inlineCode",{parentName:"h3"},"Header")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>"),", the header section is rendered using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/header/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedHeader>"))," component by default. It uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/useGetIdentity/"},(0,r.kt)("inlineCode",{parentName:"a"},"useGetIdentity"))," hook to display the user's name and avatar on the right side of the header. However, if desired, it's possible to replace the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/header/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedHeader>"))," component by passing a custom component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," prop."),(0,r.kt)("p",null,"Here is an example of how to replace the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/header/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedHeader>"))," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayout } from "@refinedev/chakra-ui";\n\n// highlight-next-line\nimport { CustomHeader } from "./CustomHeader";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n        // ...\n        >\n            <ThemedLayout\n                // highlight-next-line\n                Header={() => <CustomHeader />}\n            >\n                {/* ... */}\n            </ThemedLayout>\n        </Refine>\n    );\n};\n')),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"Title")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>"),", the title section is rendered using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/title/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedTitle>"))," component by default. However, if desired, it's possible to replace the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/title/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedTitle>"))," component by passing a custom component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Title")," prop."),(0,r.kt)("p",null,"Here is an example of how to replace the default ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/components/themedLayout/title/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"<ThemedTitle>"))," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n// highlight-next-line\nimport { ThemedLayout, ThemedTitle } from "@refinedev/chakra-ui";\n\n// highlight-next-line\nimport { MyLargeIcon, MySmallIcon } from "./MyIcon";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n        // ...\n        >\n            <ThemedLayout\n                // highlight-start\n                Title={({ collapsed }) => (\n                    <ThemedTitle\n                        // collapsed is a boolean value that indicates whether the <Sidebar> is collapsed or not\n                        collapsed={collapsed}\n                        icon={collapsed ? <MySmallIcon /> : <MyLargeIcon />}\n                        text="My Project"\n                    />\n                )}\n                // highlight-end\n            >\n                {/* ... */}\n            </ThemedLayout>\n        </Refine>\n    );\n};\n')),(0,r.kt)("h3",{id:"footer"},(0,r.kt)("inlineCode",{parentName:"h3"},"Footer")),(0,r.kt)("p",null,"The footer section of the layout is displayed at the bottom of the page. ",(0,r.kt)("strong",{parentName:"p"},"refine")," doesn't provide a default footer component. However, you can pass a custom component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Footer")," prop to display a footer section."),(0,r.kt)("p",null,"Here is an example of how to display a footer section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=600px hideCode url=http://localhost:3000/samples",live:!0,previewHeight:"600px",hideCode:!0,url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\n\nimport { Refine } from "@refinedev/core";\n// highlight-next-line\nimport { ThemedLayout, RefineThemes } from "@refinedev/chakra-ui";\nimport { ChakraProvider, Flex } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { authProvider } from "./authProvider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ChakraProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    authProvider={authProvider}\n                    resources={[\n                        {\n                            name: "samples",\n                            list: "/samples",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                // highlight-next-line\n                                <ThemedLayout\n                                    Footer={() => (\n                                        <Flex\n                                            justifyContent="center"\n                                            alignItems="center"\n                                            bg="teal.500"\n                                            h="64px"\n                                        >\n                                            My Custom Footer\n                                        </Flex>\n                                    )}\n                                >\n                                    <Outlet />\n                                </ThemedLayout>\n                            }\n                        >\n                            <Route path="samples">\n                                <Route index element={<ChakraUIInferencer />} />\n                            </Route>\n                        </Route>\n                    </Routes>\n                </Refine>\n            </ChakraProvider>\n        </BrowserRouter>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayout } from "@refinedev/chakra-ui";\nimport { Flex } from "@chakra-ui/react";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n        // ...\n        >\n            <ThemedLayout\n                // highlight-start\n                Footer={() => (\n                    <Flex\n                        justifyContent="center"\n                        alignItems="center"\n                        bg="teal.500"\n                        h="64px"\n                    >\n                        My Custom Footer\n                    </Flex>\n                )}\n                // highlight-end\n            >\n                {/* ... */}\n            </ThemedLayout>\n        </Refine>\n    );\n};\n')),(0,r.kt)("h3",{id:"offlayoutarea"},(0,r.kt)("inlineCode",{parentName:"h3"},"OffLayoutArea")),(0,r.kt)("p",null,"Used to component is rendered outside of the main layout component, allowing it to be placed anywhere on the page while still being part of the overall layout .",(0,r.kt)("strong",{parentName:"p"},"refine")," doesn't provide a default off-layout area component. However, you can pass a custom component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"OffLayoutArea")," prop to display a custom off-layout area."),(0,r.kt)("p",null,"Here is an example of how to display a custom off-layout area:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=600px hideCode url=http://localhost:3000/samples",live:!0,previewHeight:"600px",hideCode:!0,url:"http://localhost:3000/samples"},'setInitialRoutes(["/samples"]);\n\n// visible-block-start\n\nimport { Refine } from "@refinedev/core";\n// highlight-next-line\nimport { ThemedLayout, RefineThemes } from "@refinedev/chakra-ui";\nimport { ChakraProvider, Button } from "@chakra-ui/react";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { authProvider } from "./authProvider";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ChakraProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(API_URL)}\n                    authProvider={authProvider}\n                    resources={[\n                        {\n                            name: "samples",\n                            list: "/samples",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayout\n                                    OffLayoutArea={() => (\n                                        <Button\n                                            onClick={() =>\n                                                alert("Off layout are clicked")\n                                            }\n                                            colorScheme="brand"\n                                            size="sm"\n                                            sx={{\n                                                position: "fixed",\n                                                left: "8px",\n                                                bottom: "8px",\n                                                zIndex: 1000,\n                                            }}\n                                        >\n                                            Send us Feedback \ud83d\udc4b\n                                        </Button>\n                                    )}\n                                >\n                                    <Outlet />\n                                </ThemedLayout>\n                            }\n                        >\n                            <Route path="samples">\n                                <Route index element={<ChakraUIInferencer />} />\n                            </Route>\n                        </Route>\n                    </Routes>\n                </Refine>\n            </ChakraProvider>\n        </BrowserRouter>\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayout } from "@refinedev/chakra-ui";\nimport { Button } from "@chakra-ui/react";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n        // ...\n        >\n            <ThemedLayout\n                // highlight-start\n                OffLayoutArea={() => (\n                    <Button\n                        onClick={() => alert("Off layout are clicked")}\n                        colorScheme="brand"\n                        size="sm"\n                        sx={{\n                            position: "fixed",\n                            left: "8px",\n                            bottom: "8px",\n                            zIndex: 1000,\n                        }}\n                    >\n                        Send us Feedback \ud83d\udc4b\n                    </Button>\n                )}\n                // highlight-end\n            >\n                {/* ... */}\n            </ThemedLayout>\n        </Refine>\n    );\n};\n')),(0,r.kt)("h2",{id:"customizing-with-swizzle"},"Customizing with swizzle"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udea8 This feature is available with ",(0,r.kt)("inlineCode",{parentName:"p"},"@refine/cli"),". Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli/#swizzle"},"CLI documentation")," for more information.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>")," component source code can be ejecting using the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command. This will create a copy of the component in your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory, allowing you to customize as your needs."),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"Let's create a new component by swizzling the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayout>")," components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> npm run refine swizzle\n\n? Which package do you want to swizzle? (Use arrow keys or type to search)\n\nData Provider\n \u25ef @refinedev/simple-rest\nUI Framework\n \u25c9 @refinedev/chakra-ui\n")),(0,r.kt)("p",null,"First, you need to select the package you want to swizzle. In this example, we will swizzle the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," CLI will only show the packages that are installed in your project.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Which component do you want to swizzle?\n\n \u25ef TagField\n \u25ef TextField\n \u25ef UrlField\nOther\n \u25ef Breadcrumb\n\u276f\u25c9 ThemedLayout\nPages\n \u25ef ErrorPage\n \u25ef AuthPage\n(Move up and down to reveal more choices)\n")),(0,r.kt)("p",null,"Then, you need to select the component you want to swizzle. In this example, we will swizzle the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemedLayout")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Successfully swizzled Themed Layout\nFiles created:\n - src/components/themedLayout/sider.tsx\n - src/components/themedLayout/header.tsx\n - src/components/themedLayout/title.tsx\n - src/components/themedLayout/index.tsx\n\nWarning:\nIf you want to change the default layout;\nYou should pass layout related components to the <ThemedLayout/> component\'s props.\n\n    \u256d App.tsx \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n    \u2502                                                                                                \u2502\n    \u2502   import { ThemedLayout } from "components/themedLayout";                                      \u2502\n    \u2502   import { ThemedHeader } from "components/themedLayout/header";                               \u2502\n    \u2502   import { ThemedSider } from "components/themedLayout/sider";                                 \u2502\n    \u2502   import { ThemedTitle } from "components/themedLayout/title";                                 \u2502\n    \u2502                                                                                                \u2502\n    \u2502   const App = () => {                                                                          \u2502\n    \u2502       return (                                                                                 \u2502\n    \u2502           <Refine                                                                              \u2502\n    \u2502               /* ... */                                                                        \u2502\n    \u2502           >                                                                                    \u2502\n    \u2502               <ThemedLayout Header={ThemedHeader} Sider={ThemedSider} Title={ThemedTitle} />   \u2502\n    \u2502                   /* ... */                                                                    \u2502\n    \u2502               </ThemedLayout>                                                                  \u2502\n    \u2502           </Refine>                                                                            \u2502\n    \u2502       );                                                                                       \u2502\n    \u2502   }                                                                                            \u2502\n    \u2502                                                                                                \u2502\n    \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n')),(0,r.kt)("p",null,"Finally, the swizzle command will create a new folder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/layout")," directory and generate the layout components of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package in it."),(0,r.kt)("p",null,"You can use these components in your project as you wish."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayout } from "components/themedLayout";\nimport { ThemedHeader } from "components/themedLayout/header";\nimport { ThemedSider } from "components/themedLayout/sider";\nimport { ThemedTitle } from "components/themedLayout/title";\n\nconst App = () => {\n    return (\n        <Refine\n        /* ... */\n        >\n            <ThemedLayout\n                Header={ThemedHeader}\n                Sider={ThemedSider}\n                Title={ThemedTitle}\n            >\n                /* ... */\n            </ThemedLayout>\n        </Refine>\n    );\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," CLI determines the path to create a new folder according to the framework you are using. For example, if you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"remix"),", the path will be ",(0,r.kt)("inlineCode",{parentName:"p"},"app/components/layout"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If there is already a file with the same name in the directory, the swizzle command will not overwrite it.")))}s.isMDXComponent=!0}}]);