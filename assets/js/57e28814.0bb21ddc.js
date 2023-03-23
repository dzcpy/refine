"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/chakra-ui/add-edit-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/chakra-ui/add-edit-page",title:"2. Adding Edit Page",description:"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the products resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/add-edit-page.md",sourceDirName:"tutorial/4-adding-crud-pages/chakra-ui",slug:"/tutorial/adding-crud-pages/chakra-ui/add-edit-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/chakra-ui/add-edit-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/chakra-ui/add-edit-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679564005,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}}},d={},l=[{value:"Creating Edit Page",id:"creating-edit-page",level:2},{value:"Understanding the Edit Component",id:"understanding-the-edit-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Edit Page to the App",id:"adding-the-edit-page-to-the-app",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=c("Checklist"),u=c("ChecklistItem"),m={toc:l};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource."),(0,a.kt)("h2",{id:"creating-edit-page"},"Creating Edit Page"),(0,a.kt)("p",null,"First, let's create our file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,a.kt)("inlineCode",{parentName:"p"},"edit.tsx"),". Then, we will copy the edit page code generated by Inferencer and paste it into the file."),(0,a.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'To open the edit page, click any "Edit" button in the "Actions" column of the table.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'On the edit page, click on the "Show Code" button in the bottom right corner of the page.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You can see the edit page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,a.kt)("inlineCode",{parentName:"p"},"edit.tsx")," file."))),(0,a.kt)("p",null,"You can see the edit page code generated by Inferencer below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/edit/123"},'setInitialRoutes(["/products/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n                resources={[\n                    {\n                        name: "products",\n                        list: ChakraUIInferencer,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                        edit: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("p",null,"Instead of coding the edit page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,a.kt)("h2",{id:"understanding-the-edit-component"},"Understanding the Edit Component"),(0,a.kt)("p",null,"We will go through the edit page components and hooks one by one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<Edit/>")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button, refresh button etc."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/basic-views/edit"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<Edit/>")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form")," package, has been developed by using the ",(0,a.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package."),(0,a.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," package as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,a.kt)("strong",{parentName:"p"},"React Hook Form"),"."),(0,a.kt)("p",{parentName:"li"},"It also provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,a.kt)("p",{parentName:"li"},"When you use ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," in the edit page, it automatically fetches the data of the record by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," in the URL, then fills the form with the data. It sends the form data to ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," method when the form is submitted."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"@pankod/refine-react-hook-form")," ",(0,a.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All other components provided by ",(0,a.kt)("strong",{parentName:"p"},"Chakra UI")," are used to display the form fields."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"Chakra UI")," documentation for more information ","\u2192")))),(0,a.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,a.kt)("p",null,"In the edit page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the product to the category. In this case, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useSelect/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/select/usage"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"Chakra UI")," ",(0,a.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"In the auto-generated edit page code, Inferencer used the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n    resource: "categories",\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," returns 10 record by default, but the category of the product may not be in the first 10 records. To solve this problem, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop to set the default value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n    resource: "categories",\n    defaultValue: productsData?.category?.id,\n});\n')),(0,a.kt)("h2",{id:"adding-the-edit-page-to-the-app"},"Adding the Edit Page to the App"),(0,a.kt)("p",null,"Now that we have created the edit page, we need to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the created ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductEdit")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraUIInferencer")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductEdit")," component."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    refineTheme,\n    ReadyPage,\n    notificationProvider,\n} from "@pankod/refine-chakra-ui";\nimport { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";\n\nimport { ProductList } from "pages/products/list";\n//highlight-next-line\nimport { ProductEdit } from "pages/products/edit";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                notificationProvider={notificationProvider()}\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                catchAll={<ErrorComponent />}\n                resources={[\n                    {\n                        name: "products",\n                        list: ProductList,\n                        //highlight-next-line\n                        edit: ProductEdit,\n                        show: ChakraUIInferencer,\n                        create: ChakraUIInferencer,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"Now, we can see the edit page in the browser at ",(0,a.kt)("a",{href:"http://localhost:3000/products/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/products/edit/123")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(s,{mdxType:"Checklist"},(0,a.kt)(u,{id:"add-edit-page-chakra-ui",mdxType:"ChecklistItem"},"I added the edit page to the app."),(0,a.kt)(u,{id:"add-edit-page-chakra-ui-2",mdxType:"ChecklistItem"},"I understood the edit page components and hooks."),(0,a.kt)(u,{id:"add-edit-page-chakra-ui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);