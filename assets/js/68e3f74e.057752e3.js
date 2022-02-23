"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6689],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(n),m=o,x=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(x,i(i({ref:e},u),{},{components:n})):r.createElement(x,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1411:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(13520),p=["components"],l={id:"export-button",title:"Export"},s=void 0,u={unversionedId:"api-references/components/buttons/export-button",id:"version-2.xx.xx/api-references/components/buttons/export-button",isDocsHomePage:!1,title:"Export",description:'` is an Ant Design ` with a default export icon and a default text with "Export". It only has presentational value.',source:"@site/versioned_docs/version-2.xx.xx/api-references/components/buttons/export.md",sourceDirName:"api-references/components/buttons",slug:"/api-references/components/buttons/export-button",permalink:"/docs/2.xx.xx/api-references/components/buttons/export-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/components/buttons/export.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"export-button",title:"Export"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Import",permalink:"/docs/2.xx.xx/api-references/components/buttons/import-button"},next:{title:"Custom Inputs",permalink:"/docs/2.xx.xx/api-references/components/inputs/custom-inputs"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>hideText</code>",id:"hidetext",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],c={toc:d};function m(t){var e=t.components,n=(0,o.Z)(t,p);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<ExportButton>")," is an Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>")),' with a default export icon and a default text with "Export". It only has presentational value.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/import-export/useExport"},"Refer to the for more detailed information about ",(0,a.kt)("inlineCode",{parentName:"a"},"useExport"),". ","\u2192")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Use it like any other Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>")),". You can use it with ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/import-export/useExport"},"useExport"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/posts/list.tsx"',title:'"/src/pages/posts/list.tsx"'},'import {\n    List,\n    Table,\n    useTable,\n    useExport,\n    // highlight-next-line\n    ExportButton,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const { triggerExport, isLoading: exportLoading } = useExport<IPost>();\n\n    return (\n        <List\n            pageHeaderProps={{\n                extra: (\n                    // highlight-start\n                    <ExportButton\n                        onClick={triggerExport}\n                        loading={exportLoading}\n                    />\n                    // highlight-end\n                ),\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,a.kt)("p",null,"It looks like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"Default export button"})),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"hidetext"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,a.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ExportButton } from "@pankod/refine";\n\nexport const MyRefreshComponent = () => {\n    return <ExportButton hideText />;\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design button properties"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/button/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonProps"))," & ",(0,a.kt)("inlineCode",{parentName:"td"},"{ hideText?: boolean; }")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hideText"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"Export"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"icon"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,a.kt)("inlineCode",{parentName:"a"},"<ExportOutlined />")))))))}m.isMDXComponent=!0},13520:function(t,e,n){e.Z=n.p+"assets/images/export-cdaca6638d83b9ef7f50a5ec8eb04875.png"}}]);