"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58149],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(t),d=o,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},65918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>m,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"theming",title:"Theme",sidebar_label:"Theme"},l=void 0,m={unversionedId:"api-reference/chakra-ui/theming",id:"api-reference/chakra-ui/theming",title:"Theme",description:"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more. You can either create your own theme object or use theme that provide from refine. You can find more information about theme in Chakra UI documentation.",source:"@site/docs/api-reference/chakra-ui/theming.md",sourceDirName:"api-reference/chakra-ui",slug:"/api-reference/chakra-ui/theming",permalink:"/docs/api-reference/chakra-ui/theming",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/theming.md",tags:[],version:"current",lastUpdatedBy:"pankod-bot",lastUpdatedAt:1687125435,formattedLastUpdatedAt:"Jun 18, 2023",frontMatter:{id:"theming",title:"Theme",sidebar_label:"Theme"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/api-reference/chakra-ui/components/fields/url"},next:{title:"Mantine API",permalink:"/docs/api-reference/mantine"}},c={},u=[{value:"Predefined Themes",id:"predefined-themes",level:2},{value:"Theme customization",id:"theme-customization",level:2},{value:"Theme switching",id:"theme-switching",level:2}],p={toc:u};function d(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},p,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { List, Edit, Create, EditButton } from "@refinedev/chakra-ui";\nimport {\n    TableContainer,\n    Table,\n    Thead,\n    Tbody,\n    Tr,\n    Th,\n    Td,\n    Text,\n    FormControl,\n    FormErrorMessage,\n    FormLabel,\n    Input,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\nimport { useForm } from "@refinedev/react-hook-form";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        <EditButton\n                            hideText\n                            recordItemId={getValue() as number}\n                        />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const { getHeaderGroups, getRowModel } = useTable({\n        columns,\n        refineCoreProps: {\n            initialPageSize: 5,\n        },\n    });\n\n    return (\n        <List>\n            <TableContainer whiteSpace="pre-line">\n                <Table variant="simple">\n                    <Thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <Tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => (\n                                    <Th key={header.id}>\n                                        {!header.isPlaceholder && (\n                                            <Text>\n                                                {flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                            </Text>\n                                        )}\n                                    </Th>\n                                ))}\n                            </Tr>\n                        ))}\n                    </Thead>\n                    <Tbody>\n                        {getRowModel().rows.map((row) => (\n                            <Tr key={row.id}>\n                                {row.getVisibleCells().map((cell) => (\n                                    <Td key={cell.id}>\n                                        {flexRender(\n                                            cell.column.columnDef.cell,\n                                            cell.getContext(),\n                                        )}\n                                    </Td>\n                                ))}\n                            </Tr>\n                        ))}\n                    </Tbody>\n                </Table>\n            </TableContainer>\n        </List>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const {\n        refineCore: { formLoading },\n        saveButtonProps,\n        register,\n        formState: { errors },\n    } = useForm<IPost>();\n\n    return (\n        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <FormControl mb="3" isInvalid={!!errors?.title}>\n                <FormLabel>Title</FormLabel>\n                <Input\n                    {...register("title", { required: "Title is required" })}\n                />\n                <FormErrorMessage>\n                    {`${errors.title?.message}`}\n                </FormErrorMessage>\n            </FormControl>\n        </Edit>\n    );\n};\n\nconst PostCreate = () => {\n    const {\n        refineCore: { formLoading },\n        saveButtonProps,\n        register,\n        formState: { errors },\n    } = useForm<IPost>();\n\n    return (\n        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <FormControl mb="3" isInvalid={!!errors?.title}>\n                <FormLabel>Title</FormLabel>\n                <Input\n                    {...register("title", { required: "Title is required" })}\n                />\n                <FormErrorMessage>\n                    {`${errors.title?.message}`}\n                </FormErrorMessage>\n            </FormControl>\n        </Create>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,r.kt)("p",null,"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more. You can either create your own theme object or use theme that provide from ",(0,r.kt)("strong",{parentName:"p"},"refine"),". You can find more information about theme in Chakra UI documentation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme"},"Refer to the Chakra UI documentation for more information about theme. ","\u2192")),(0,r.kt)("h2",{id:"predefined-themes"},"Predefined Themes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/theme/index.ts#L92"},(0,r.kt)("inlineCode",{parentName:"a"},"RefineThemes"))," has predefined themes for you. You can use them by importing them from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package. It is not required if you decide to use the default chakra-ui theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Blue, Purple, Magenta, Red, Orange, Yellow } = RefineThemes;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/chakra-ui";\n\nimport { ChakraProvider } from "@chakra-ui/react";\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <Refine\n            /* ... */\n            >\n                <ThemedLayoutV2>{/* ... */}</ThemedLayoutV2>\n            </Refine>\n        </ChakraProvider>\n    );\n};\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/examples/themes/refine-themes-chakra-ui/"},"You can see how themes change the look of the application in this example."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"<ThemedLayoutV2>")," you have to wrap your application with ",(0,r.kt)("inlineCode",{parentName:"p"},"<ChakraProvider>")," component and should give ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," prop to it."),(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineThemes")," provided by ",(0,r.kt)("strong",{parentName:"p"},"refine")," or you can create your own theme object."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme"},"Refer to the Chakra UI documentation for more information about theme. ","\u2192"))),(0,r.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<ChakraProvider/>")," component can be used to change the theme and other global settings. It is not required if you decide to use the default theme. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineThemes")," provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=450px",live:!0,url:"http://localhost:3000",previewHeight:"450px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    notificationProvider,\n    // highlight-next-line\n    RefineThemes,\n} from "@refinedev/chakra-ui";\nimport {\n    ChakraProvider,\n    // highlight-next-line\n    extendTheme,\n} from "@chakra-ui/react";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    // highlight-start\n    const customTheme = extendTheme({\n        ...RefineThemes.Blue,\n        colors: {\n            sider: {\n                background: "#4A5568",\n                collapseButton: "#1a202c",\n            },\n        },\n    });\n    // highlight-end\n\n    return (\n        // highlight-next-line\n        <ChakraProvider theme={customTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider()}\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            edit: "/posts/edit/:id",\n                            create: "/posts/create",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route path="posts">\n                                <Route index element={<PostList />} />\n                                <Route path="create" element={<PostCreate />} />\n                                <Route path="edit/:id" element={<PostEdit />} />\n                            </Route>\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/types/theme.ts"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"refineTheme")," object in the source code to see the default theme values.. ","\u2192"))),(0,r.kt)("h2",{id:"theme-switching"},"Theme switching"),(0,r.kt)("p",null,"Chakra UI comes with built-in support for managing color mode in your apps. You can manage the color mode on refine applications such as Chakra UI applications."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Chakra stores the color mode in ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," and appends a className to the body to ensure the color mode is persistent.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/color-mode"},"Refer to the Chakra UI documentation for more information about color mode. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=500px",live:!0,url:"http://localhost:3000",previewHeight:"500px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    notificationProvider,\n    // highlight-next-line\n    RefineThemes,\n} from "@refinedev/chakra-ui";\nimport {\n    ChakraProvider,\n    Box,\n    IconButton,\n    Icon,\n    // highlight-start\n    useColorMode,\n    extendTheme,\n    // highlight-end\n} from "@chakra-ui/react";\nimport { IconSun, IconMoonStars } from "@tabler/icons";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst Header = () => {\n    const { colorMode, toggleColorMode } = useColorMode();\n    return (\n        <Box\n            py="2"\n            px="4"\n            display="flex"\n            justifyContent="flex-end"\n            w="full"\n            bg="chakra-body-bg"\n        >\n            <IconButton\n                variant="ghost"\n                aria-label="Toggle theme"\n                onClick={toggleColorMode}\n            >\n                <Icon\n                    as={colorMode === "light" ? IconMoonStars : IconSun}\n                    w="18px"\n                    h="18px"\n                />\n            </IconButton>\n        </Box>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    // highlight-start\n    const customTheme = extendTheme({\n        ...RefineThemes.Blue,\n        config: {\n            initialColorMode: "dark",\n            useSystemColorMode: false,\n        },\n    });\n    // highlight-end\n\n    return (\n        // highlight-next-line\n        <ChakraProvider theme={customTheme}>\n            <BrowserRouter>\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider()}\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            edit: "/posts/edit/:id",\n                            create: "/posts/create",\n                        },\n                    ]}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                // highlight-next-line\n                                <ThemedLayoutV2 Header={Header}>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route path="posts">\n                                <Route index element={<PostList />} />\n                                <Route path="create" element={<PostCreate />} />\n                                <Route path="edit/:id" element={<PostEdit />} />\n                            </Route>\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to customize the default layout elements provided with ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/chakra-ui")," package, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-layout"},"Custom Layout")," tutorial.")))}d.isMDXComponent=!0}}]);