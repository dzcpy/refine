"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50937],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={id:"markdown",title:"Markdown",swizzle:!0},i=void 0,s={unversionedId:"api-reference/antd/components/fields/markdown",id:"version-3.xx.xx/api-reference/antd/components/fields/markdown",title:"Markdown",description:"This field lets you display markdown content. It supports GitHub Flavored Markdown.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/markdown.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/markdown",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/markdown",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/markdown.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680876198,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"markdown",title:"Markdown",swizzle:!0},sidebar:"someSidebar",previous:{title:"Image",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/image"},next:{title:"Number",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/number"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Example",id:"example",level:2}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},c=l("PropsTable"),m=l("CodeSandboxExample"),u={toc:p};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This field lets you display markdown content. It supports ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Let's see how we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"<MarkdownField>")," in a show page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'import { useShow, IResourceComponentsProps } from "@pankod/refine-core";\nimport {\n    Show,\n    Typography,\n    // highlight-next-line\n    MarkdownField,\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show isLoading={isLoading}>\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Content</Title>\n\n            {/* highlight-next-line */}\n            <MarkdownField value={record?.content} />\n        </Show>\n    );\n};\n\ninterface IPost {   \n    id: number;    \n    title: string;\n    content: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/123"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <RefineAntd.List>\n                        <p>List page here...</p>\n                    </RefineAntd.List>\n                ),\n                show: PostShow\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(c,{module:"@pankod/refine-antd/MarkdownField","value-description":"Markdown data to render",mdxType:"PropsTable"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(m,{path:"input-custom",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);