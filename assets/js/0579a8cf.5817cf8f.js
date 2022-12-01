"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(29403);const o={id:"image",title:"Image",swizzle:!0},s=void 0,l={unversionedId:"api-reference/antd/components/fields/image",id:"api-reference/antd/components/fields/image",title:"Image",description:"This field is used to display images and uses `` from Ant Design.",source:"@site/docs/api-reference/antd/components/fields/image.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/image",permalink:"/docs/api-reference/antd/components/fields/image",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/fields/image.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669898448,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{id:"image",title:"Image",swizzle:!0},sidebar:"someSidebar",previous:{title:"File",permalink:"/docs/api-reference/antd/components/fields/file"},next:{title:"Markdown",permalink:"/docs/api-reference/antd/components/fields/markdown"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const f={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field is used to display images and uses ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/image/#header"},(0,a.kt)("inlineCode",{parentName:"a"},"<Image>"))," from Ant Design."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImageField>")," with the example in the edit page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { \n    List,\n    Table,\n    // highlight-next-line\n    ImageField,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List>\n            <Table<IPost> rowKey="id">\n                <Table.Column<IPost>\n                    title="Image"\n                    dataIndex="image"\n                    render={(_, record) => (\n                        // highlight-start\n                        <ImageField\n                            value={record.image[0].url}\n                            title={record.image[0].name}\n                            width={200}\n                        />\n                        // highlight-end\n                    )}\n                />\n                <Table.Column\n                    dataIndex="title"\n                    title="Title"\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    image: [\n        {\n            url: string;\n            name: string;\n        },\n    ];\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"ImageField"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(d,{module:"@pankod/refine-antd/ImageField","value-description":"Image path",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/image/#API"},"Image"),".")))}u.isMDXComponent=!0},29403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/imageField-1065b6dc66dba6244394c79cc4164a6c.png"}}]);