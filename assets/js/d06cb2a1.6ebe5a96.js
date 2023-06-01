"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98041],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},28879:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication."},i=void 0,u={unversionedId:"api-reference/core/hooks/auth/useLogout",id:"version-3.xx.xx/api-reference/core/hooks/auth/useLogout",title:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useLogout.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useLogout",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useLogout.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1685623047,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication."},sidebar:"someSidebar",previous:{title:"useLogin",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useLogin"},next:{title:"usePermissions",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/usePermissions"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after logout",id:"redirection-after-logout",level:2}],p={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood.",(0,r.kt)("br",{parentName:"p"}),"\n","It unauthenticates the app if the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects, it keeps authentication state the same."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"useMutation")),".\nData that is resolved from the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"By default, Refine already provides a logout button on the sider and if you want to use this default button you won't need to handle the logout flow manually.\nIf you want to build a custom logout button instead of the default one, ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," can be used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/customLogoutButton"',title:'"components/customLogoutButton"'},'import { useLogout } from "@pankod/refine-core";\n\nexport const LogoutButton = () => {\n    const { mutate: logout } = useLogout();\n\n    return <button onClick={() => logout()}>Logout</button>;\n};\n')),(0,r.kt)("h2",{id:"redirection-after-logout"},"Redirection after logout"),(0,r.kt)("p",null,"We have 3 options to manage the redirection after logout process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If promise returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," is resolved with nothing, app will be redirected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/login")," route by default.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A custom url can be resolved from the promise returned from the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    logout: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,r.kt)("p",null,"A custom url can be given to mutate function from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," hook if you want to redirect yourself to a certain url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogout } from "@pankod/refine-core";\n\nconst { mutate: logout } = useLogout<{ redirectPath: string }>();\n\nlogout({ redirectPath: "/custom-url" });\n')),(0,r.kt)("p",null,"Then, you can handle this url in your ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    logout: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If promise returned from the ",(0,r.kt)("inlineCode",{parentName:"li"},"logout")," method of the ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider")," gets resolved with ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    logout: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Custom url given to mutate function from ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," overrides the one on the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," can accept any kind of object for values since the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}c.isMDXComponent=!0}}]);