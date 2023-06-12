"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6208,98575],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=s(t),p=a,b=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,d={unversionedId:"partials/tutorial/headless-layout",id:"partials/tutorial/headless-layout",title:"headless-layout",description:"",source:"@site/docs/partials/tutorial/headless-layout.md",sourceDirName:"partials/tutorial",slug:"/partials/tutorial/headless-layout",permalink:"/docs/partials/tutorial/headless-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/partials/tutorial/headless-layout.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1682666298,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{}},l={},s=[],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},'body {\n    margin: 0px;\n}\n\ntable {\n    border-spacing: 0;\n    border: 1px solid black;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n    border-bottom: 0;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n    border-right: 0;\n}\n\n.layout {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 751px) {\n    .layout {\n        display: block;\n    }\n}\n\n.layout .content {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.breadcrumb {\n    display: flex;\n    gap: 24px;\n    list-style-type: "/  ";\n    padding: 8px 16px;\n    border-bottom: 1px solid lightgray;\n}\n\n.breadcrumb a {\n    color: blue;\n    text-decoration: none;\n}\n\n.menu {\n    flex-shrink: 0;\n    padding: 8px 16px;\n    border-right: 1px solid lightgray;\n}\n\n.menu a {\n    color: black;\n}\n\n.menu .active {\n    font-weight: bold;\n}\n\n@media screen and (max-width: 751px) {\n    .menu {\n        border-right: none;\n        border-bottom: 1px solid lightgray;\n    }\n}\n\n.menu ul {\n    padding-left: 16px;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { PropsWithChildren } from "react";\nimport { useMenu, useBreadcrumb } from "@refinedev/core";\nimport { NavLink, Link } from "react-router-dom";\n\nconst Breadcrumb = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul className="breadcrumb">\n            {breadcrumbs.map((breadcrumb) => (\n                <li key={`breadcrumb-${breadcrumb.label}`}>\n                    {breadcrumb.href ? (\n                        <Link to={breadcrumb.href}>{breadcrumb.label}</Link>\n                    ) : (\n                        <span>{breadcrumb.label}</span>\n                    )}\n                </li>\n            ))}\n        </ul>\n    );\n};\n\nconst Menu = () => {\n    const { menuItems } = useMenu();\n\n    return (\n        <nav className="menu">\n            <ul>\n                {menuItems.map((item) => (\n                    <li key={item.key}>\n                        <NavLink to={item.route}>{item.label}</NavLink>\n                    </li>\n                ))}\n            </ul>\n        </nav>\n    );\n};\n\nconst Layout: React.FC<PropsWithChildren> = ({ children }) => {\n    return (\n        <div className="layout">\n            <Menu />\n            <div className="content">\n                <Breadcrumb />\n                <div>{children}</div>\n            </div>\n        </div>\n    );\n};\n')))}c.isMDXComponent=!0},55319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905)),o=t(47425);const i={id:"layout-menu-breadcrumb",title:"7. Layout, Menu and Breadcrumb",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters",next:"tutorial/understanding-authprovider/index"}},d=void 0,l={unversionedId:"tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",id:"tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",title:"7. Layout, Menu and Breadcrumb",description:"In Unit 2.4, we created the CRUD pages automatically with Inferencer and wrapped them with a `` component.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/layout-menu-breadcrumb.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",permalink:"/docs/tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/layout-menu-breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1682666298,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"layout-menu-breadcrumb",title:"7. Layout, Menu and Breadcrumb",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters",next:"tutorial/understanding-authprovider/index"}}},s={},u=[{value:"Layout",id:"layout",level:2},{value:"Menu",id:"menu",level:2},{value:"Breadcrumb",id:"breadcrumb",level:2}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},m=c("Checklist"),p=c("ChecklistItem"),b={toc:u};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.default,{mdxType:"SharedComponents"}),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Unit 2.4"),", we created the CRUD pages automatically with Inferencer and wrapped them with a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Layout>")," component."),(0,a.kt)("p",null,"This component is provided when you create a new application using ",(0,a.kt)("inlineCode",{parentName:"p"},"create-refine-app")," to help you get started quickly by providing simple implementations of ",(0,a.kt)("inlineCode",{parentName:"p"},"Menu")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," components using ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s hooks, ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"useMenu"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,a.kt)("inlineCode",{parentName:"a"},"useBreadcrumb")),"."),(0,a.kt)("p",null,"Here is the preview for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Menu")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        element={\n                            <Layout>\n                                <Outlet />\n                            </Layout>\n                        }\n                    >\n                        <Route\n                            index\n                            element={\n                                <NavigateToResource resource="blog_posts" />\n                            }\n                        />\n\n                        <Route path="/blog-posts">\n                            <Route index element={<HeadlessInferencer />} />\n                            <Route\n                                path="show/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="edit/:id"\n                                element={<HeadlessInferencer />}\n                            />\n                            <Route\n                                path="create"\n                                element={<HeadlessInferencer />}\n                            />\n                        </Route>\n\n                        <Route path="*" element={<div>Error!</div>} />\n                    </Route>\n                </Routes>\n\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("h2",{id:"layout"},"Layout"),(0,a.kt)("p",null,"When you create a new application with the ",(0,a.kt)("strong",{parentName:"p"},"refine"),", it creates a default layout under the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/layout.tsx")," file and it looks like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout.tsx"',title:'"src/components/layout.tsx"'},'import { PropsWithChildren } from "react";\n\nimport { Menu } from "../menu";\nimport { Breadcrumb } from "../breadcrumb";\n\nexport const Layout: React.FC<PropsWithChildren> = ({ children }) => {\n    return (\n        <div className="layout">\n            <Menu />\n            <div className="content">\n                <Breadcrumb />\n                <div>{children}</div>\n            </div>\n        </div>\n    );\n};\n')),(0,a.kt)("p",null,"It has a ",(0,a.kt)("inlineCode",{parentName:"p"},"Menu")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component and it renders the children. You can completely customize this component to your needs."),(0,a.kt)("h2",{id:"menu"},"Menu"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Menu")," component is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/menu.tsx")," file and it looks like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/menu.tsx"',title:'"src/components/menu.tsx"'},'import { useMenu } from "@refinedev/core";\nimport { NavLink } from "react-router-dom";\n\nexport const Menu = () => {\n    const { menuItems } = useMenu();\n\n    return (\n        <nav className="menu">\n            <ul>\n                {menuItems.map((item) => (\n                    <li key={item.key}>\n                        <NavLink to={item.route}>{item.label}</NavLink>\n                    </li>\n                ))}\n            </ul>\n        </nav>\n    );\n};\n')),(0,a.kt)("p",null,"It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMenu")," hook to get the menu items and renders them as a list. Also, it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"NavLink")," component from the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-router-dom")," package to render the links."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"useMenu")," documentation ","\u2192"))),(0,a.kt)("h2",{id:"breadcrumb"},"Breadcrumb"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/breadcrumb.tsx")," file and it looks like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/breadcrumb.tsx"',title:'"src/components/breadcrumb.tsx"'},'import { useBreadcrumb } from "@refinedev/core";\nimport { Link } from "react-router-dom";\n\nexport const Breadcrumb = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul className="breadcrumb">\n            {breadcrumbs.map((breadcrumb) => (\n                <li key={`breadcrumb-${breadcrumb.label}`}>\n                    {breadcrumb.href ? (\n                        <Link to={breadcrumb.href}>{breadcrumb.label}</Link>\n                    ) : (\n                        <span>{breadcrumb.label}</span>\n                    )}\n                </li>\n            ))}\n        </ul>\n    );\n};\n')),(0,a.kt)("p",null,"It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumb")," hook to get the breadcrumb items and renders them as a list. Also, it uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Link")," component from the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-router-dom")," package to render the links."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,a.kt)("inlineCode",{parentName:"a"},"useBreadcrumb")," documentation ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)(m,{mdxType:"Checklist"},(0,a.kt)(p,{id:"layout-menu-breadcrumb",mdxType:"ChecklistItem"},"I have learned about the Layout, Menu and Breadcrumb components."),(0,a.kt)(p,{id:"layout-menu-breadcrumb",mdxType:"ChecklistItem"},"I understood the usage of `useMenu` and `useBreadcrumb` hooks.")))}h.isMDXComponent=!0}}]);