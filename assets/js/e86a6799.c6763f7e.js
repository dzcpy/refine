"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const l={id:"useModal",title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},r=void 0,i={unversionedId:"api-reference/core/hooks/ui/useModal",id:"api-reference/core/hooks/ui/useModal",title:"useModal",description:"useModal hook allows you to manage a modal. Since it is designed as headless, it returns the show and close functions, and the visible state. It expects you to handle the UI.",source:"@site/docs/api-reference/core/hooks/ui/useModal.md",sourceDirName:"api-reference/core/hooks/ui",slug:"/api-reference/core/hooks/ui/useModal",permalink:"/docs/api-reference/core/hooks/ui/useModal",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/ui/useModal.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679564005,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"useModal",title:"useModal",source:"packages/core/src/hooks/modal/useModal/index.tsx"},sidebar:"someSidebar",previous:{title:"useTranslate",permalink:"/docs/api-reference/core/hooks/translate/useTranslate"},next:{title:"useMenu",permalink:"/docs/api-reference/core/hooks/ui/useMenu"}},s={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>defaultVisible</code>",id:"defaultvisible",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>visible</code>",id:"visible",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("PropsTable"),c=p("CodeSandboxExample"),m={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. Since it is designed as headless, it returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," functions, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," state. It expects you to handle the UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { show, close, visible } = useModal();\n")),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," state to show or hide the modal. The ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," functions allow changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," state. It does not provide any functionality besides this. You can use this hook anywhere."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"Let's see an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n    // highlight-next-line\n    useModal,\n} from "@refinedev/core";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { visible, show, close } = useModal();\n\n    return (\n        <>\n            // highlight-start\n            <button onClick={show}>Show Modal</button>\n            {visible && (\n                <YourModalComponent>\n                    <p>Dummy Modal Content</p>\n                    <button onClick={close}>Close Modal</button>\n                </YourModalComponent>\n            )}\n            // highlight-end\n        </>\n    );\n};\n')),(0,o.kt)("p",null,"Here, we show a button somewhere on the page and use ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," on its ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," callback to trigger the opening of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>"),". When the user clicks on the button, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>")," appears."),(0,o.kt)("p",null,"We also created a ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," to close the ",(0,o.kt)("inlineCode",{parentName:"p"},"<YourModalComponent>")," and gave the onClick function ",(0,o.kt)("inlineCode",{parentName:"p"},"close"),", the modal dialog will be closed. We do this to demonstrate ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," function."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"defaultvisible"},(0,o.kt)("inlineCode",{parentName:"h3"},"defaultVisible")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"defaultVisible")," is a boolean value that determines whether the modal is visible by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useModal({\n    defaultVisible: true,\n});\n")),(0,o.kt)("h2",{id:"return-values"},"Return Values"),(0,o.kt)("h3",{id:"visible"},(0,o.kt)("inlineCode",{parentName:"h3"},"visible")),(0,o.kt)("p",null,"Visible state of the modal."),(0,o.kt)("h3",{id:"show"},(0,o.kt)("inlineCode",{parentName:"h3"},"show")),(0,o.kt)("p",null,"A function that can change the ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," state to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"close"},(0,o.kt)("inlineCode",{parentName:"h3"},"close")),(0,o.kt)("p",null,"A function that can change the ",(0,o.kt)("inlineCode",{parentName:"p"},"visible")," state to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(u,{module:"@refinedev/core/useModal",mdxType:"PropsTable"}),(0,o.kt)("h3",{id:"return-value"},"Return Value"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"visible"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the ",(0,o.kt)("inlineCode",{parentName:"td"},"visible")," state of the modal."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"show"),(0,o.kt)("td",{parentName:"tr",align:null},"A function that can open the modal."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"close"),(0,o.kt)("td",{parentName:"tr",align:null},"A function that can close the modal."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(c,{path:"core-use-modal",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);