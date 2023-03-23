"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),l=n(67392),p=n(7094),s=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:f,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,l.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,p.U)(),[N,T]=(0,a.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=f){const e=b[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=C.indexOf(t),r=g[n].value;r!==N&&(j(t),T(r),null!=f&&w(f,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:x,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},63411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"create-project",title:"3. Creating your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}},p=void 0,s={unversionedId:"tutorial/getting-started/mantine/create-project",id:"tutorial/getting-started/mantine/create-project",title:"3. Creating your refine project",description:"Launch the refine CLI setup",source:"@site/docs/tutorial/1-getting-started/mantine/2-create-project.md",sourceDirName:"tutorial/1-getting-started/mantine",slug:"/tutorial/getting-started/mantine/create-project",permalink:"/docs/tutorial/getting-started/mantine/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/mantine/2-create-project.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1679577517,formattedLastUpdatedAt:"Mar 23, 2023",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Creating your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},u={},c=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("Checklist"),f=m("ChecklistItem"),h={toc:c};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,a.kt)("p",null,"The easiest way to create a new project is using the ",(0,a.kt)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Launch your terminal and type the following command using your preferred package manager:"),(0,a.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest -- -o refine-mantine tutorial\n"))),(0,a.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create refine-app@latest -- -o refine-mantine tutorial\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create refine-app -- -o refine-mantine tutorial\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Only supports yarn@1 version."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,a.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-o refine-mantine")," flag in the command above tells the CLI to install the project with the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine-mantine")," preset. This preset selects some of the options for you in accordance with this tutorial. Outside of this tutorial, you can skip this flag and select your own options.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The CLI will then ask if you agree to share your selection anonymously with the ",(0,a.kt)("strong",{parentName:"p"},"refine")," team. This is for measuring community preferences. You can learn more about it here: ",(0,a.kt)("a",{parentName:"p",href:"docs/further-readings/telemetry/"},"Telemetry"),"."))),(0,a.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey."),(0,a.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open VS Code and select the directory that was generated during your setup process.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,a.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal."),(0,a.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,a.kt)("p",null,"Previewing your project while you work on it is important. To open it as a webpage, the project must be running in development(dev) mode."),(0,a.kt)("h4",null,"Start the dev server"),(0,a.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,a.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,a.kt)(i.Z,{value:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,a.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,a.kt)("p",null,"You should see confirmation in the terminal that the ",(0,a.kt)("strong",{parentName:"p"},"refine")," app is running in dev mode."),(0,a.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,a.kt)("p",null,"Your project files contain all the code you need to run your app. To see a preview of your app in the browser:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet. We will take care of that in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages"},"Next section")))),(0,a.kt)("p",null,"Here's what you should see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ErrorComponent,\n    WelcomePage,\n} from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\nimport { MantineProvider, Global } from "@mantine/core";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                    >\n                        <Routes>\n                            <Route index element={<WelcomePage />} />\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)(d,{mdxType:"Checklist"},(0,a.kt)(f,{id:"getting-started-mantine",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,a.kt)(f,{id:"getting-started-mantine-2",mdxType:"ChecklistItem"},"I have run the dev server and previewed my app.")))}v.isMDXComponent=!0}}]);