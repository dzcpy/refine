"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6255],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(23216),s=["components"],p={id:"csv-export",title:"CSV Export"},c=void 0,l={unversionedId:"guides-and-concepts/import-export/csv-export",id:"guides-and-concepts/import-export/csv-export",isDocsHomePage:!1,title:"CSV Export",description:"With refine, you can easily add export functionality to dump resources' records to a CSV file from anywhere, including buttons. By using the useExport hook with desired configurations, you can turn any button into an export button.  Which resources' records to export can be configured. But by default, unless explicitly specified, it is inferred from current route of browser.",source:"@site/docs/guides-and-concepts/import-export/csv-export.md",sourceDirName:"guides-and-concepts/import-export",slug:"/guides-and-concepts/import-export/csv-export",permalink:"/docs/guides-and-concepts/import-export/csv-export",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/import-export/csv-export.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"csv-export",title:"CSV Export"},sidebar:"someSidebar",previous:{title:"CSV Import",permalink:"/docs/guides-and-concepts/import-export/csv-import"},next:{title:"Custom Form Validation",permalink:"/docs/guides-and-concepts/forms/custom-form-validation"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With ",(0,a.kt)("strong",{parentName:"p"},"refine"),", you can easily add export functionality to dump resources' records to a ",(0,a.kt)("inlineCode",{parentName:"p"},"CSV")," file from anywhere, including buttons. By using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/import-export/useExport"},(0,a.kt)("inlineCode",{parentName:"a"},"useExport"))," hook with desired configurations, you can turn any button into an export button.  Which resources' records to export can be configured. But by default, unless explicitly specified, it is inferred from current route of browser."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"To make this example more visual, we used the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks or helpers imported from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/refine-antd"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,a.kt)("p",null,"Let's see an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import {\n    // highlight-next-line\n    useExport,\n} from "@pankod/refine-core";\nimport {\n    List,\n    Table,\n    useTable,\n// highlight-next-line\n    ExportButton,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const { triggerExport, isLoading } = useExport<IPost>();\n\n    return (\n        <List\n            pageHeaderProps={{\n                extra: (\n// highlight-next-line\n                    <ExportButton onClick={triggerExport} loading={isLoading} />\n                ),\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"Export button"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"After this setup is done, when the user clicks the button, download process will initialize."),(0,a.kt)("p",null,"Manually running the ",(0,a.kt)("inlineCode",{parentName:"p"},"triggerExport")," function is another option."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useExport")," returns two properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"isLoading: boolean")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"triggerExport: async () => void"),". These properties can be used with Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," components to create an export button. In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"<ExportButton>")," is used and it's just an Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," with default icon and children, serving only presentational purposes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/import-export/useExport"},"Refer to the useExport docs for more detailed information and export settings. ","\u2192"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/components/buttons/export-button"},"Refer to the ExportButton docs for more detailed information. ","\u2192"))),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-import-export-example-2ftcf?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-import-export-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0},23216:function(e,t,n){t.Z=n.p+"assets/images/export-button-cdaca6638d83b9ef7f50a5ec8eb04875.png"}}]);