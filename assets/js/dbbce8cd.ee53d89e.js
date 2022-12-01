"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(17979);const i={id:"number",title:"Number",swizzle:!0},l=void 0,s={unversionedId:"api-reference/antd/components/fields/number",id:"api-reference/antd/components/fields/number",title:"Number",description:"This field is used to display a number formatted according to the browser locale, right aligned. and uses Intl to display date format.",source:"@site/docs/api-reference/antd/components/fields/number.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/number",permalink:"/docs/api-reference/antd/components/fields/number",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/fields/number.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669898448,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{id:"number",title:"Number",swizzle:!0},sidebar:"someSidebar",previous:{title:"Markdown",permalink:"/docs/api-reference/antd/components/fields/markdown"},next:{title:"Tag",permalink:"/docs/api-reference/antd/components/fields/tag"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const u={toc:c};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field is used to display a number formatted according to the browser locale, right aligned. and uses ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},(0,a.kt)("inlineCode",{parentName:"a"},"Intl"))," to display date format."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<NumberField>")," uses Intl.NumberFormat() if available, passing the locales and options props as arguments. This allows a perfect display of decimals, currencies, percentages, etc. See ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat"},"Intl.NumberFormat documentation")," for the options prop syntax."),(0,a.kt)("p",null,"If Intl is not available, ",(0,a.kt)("inlineCode",{parentName:"p"},"<NumberField>")," outputs numbers as is (and ignores the locales and options props)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-next-line\nimport { List, Table, NumberField } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List>\n            <Table rowKey="id">\n                <Table.Column dataIndex="title" title="Title" key="title" />\n                <Table.Column<IPost>\n                    key="hit"\n                    title="Hit"\n                    dataIndex="hit"\n                    render={(value) => (\n                        // highlight-start\n                        <NumberField\n                            value={value}\n                            options={{\n                                notation: "compact",\n                            }}\n                        />\n                        // highlight-end\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    hit: number;\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o.Z,alt:"NumberField"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(d,{module:"@pankod/refine-antd/NumberField","value-description":"Number value",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/typography/#Typography.Text"},"Text"),".")))}f.isMDXComponent=!0},17979:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/numberField-3931f6146b693f18cb53ff1b96c5aa2b.png"}}]);