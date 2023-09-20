"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},l=void 0,u={unversionedId:"examples/table/mui/useDataGrid",id:"version-3.xx.xx/examples/table/mui/useDataGrid",title:"useDataGrid",description:"You may use the useDataGrid hook to process your data with features compatible with the MUI X DataGrid and DataGridPro component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination.",source:"@site/versioned_docs/version-3.xx.xx/examples/table/mui/useDataGrid.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/useDataGrid",permalink:"/docs/3.xx.xx/examples/table/mui/useDataGrid",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/table/mui/useDataGrid.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1695244331,formattedLastUpdatedAt:"Sep 20, 2023",frontMatter:{id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},sidebar:"someSidebar",previous:{title:"Table Filter",permalink:"/docs/3.xx.xx/examples/table/mui/filter"},next:{title:"useDeleteMany",permalink:"/docs/3.xx.xx/examples/table/mui/useDeleteMany"}},c={},s=[{value:"With <code>DataGrid</code> Component",id:"with-datagrid-component",level:2},{value:"With <code>DataGridPro</code> Component",id:"with-datagridpro-component",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const f={toc:s};function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You may use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to process your data with features compatible with the MUI X ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGrid")," and ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGridPro")," component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useDataGrid"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useDataGrid")," hook documentation for more information. \u2192")),(0,n.kt)("h2",{id:"with-datagrid-component"},"With ",(0,n.kt)("inlineCode",{parentName:"h2"},"DataGrid")," Component"),(0,n.kt)(d,{path:"table-material-ui-use-data-grid",mdxType:"CodeSandboxExample"}),(0,n.kt)("h2",{id:"with-datagridpro-component"},"With ",(0,n.kt)("inlineCode",{parentName:"h2"},"DataGridPro")," Component"),(0,n.kt)(d,{path:"table-material-ui-data-grid-pro",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);