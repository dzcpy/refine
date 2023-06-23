"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7223],{99090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});r(67294);var n=r(3905),a=r(53787),o=r(50551);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const u={id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}},s=void 0,d={unversionedId:"tutorial/getting-started/antd/create-project",id:"version-3.xx.xx/tutorial/getting-started/antd/create-project",title:"3. Create your refine project",description:"Launch the refine CLI setup",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/antd/2-create-project.md",sourceDirName:"tutorial/1-getting-started/antd",slug:"/tutorial/getting-started/antd/create-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/antd/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/antd/2-create-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1687505727,formattedLastUpdatedAt:"Jun 23, 2023",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Create your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},c={},m=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},h=g("Checklist"),f=g("ChecklistItem"),y={toc:m};function k(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,n.kt)("p",null,"The easiest way to create a new project is to use the ",(0,n.kt)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Launch your terminal and type the following command using your preferred package manager:"),(0,n.kt)(a.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest -- -o refine-antd tutorial\n"))),(0,n.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create refine-app@latest -- -o refine-antd tutorial\n"))),(0,n.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create refine-app -- -o refine-antd tutorial\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Only support yarn@1 version."))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,n.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We are using ",(0,n.kt)("inlineCode",{parentName:"p"},"-o refine-antd")," flag to bootstrap the app with pre-selected CLI options. The tutorial will proceed according to these selections."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"We use a preset here to sync the tutorial content with the code. Outside of the tutorial, you can skip this flag and select your own options."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The CLI will ask if you agree to share your choices anonymously with the ",(0,n.kt)("strong",{parentName:"p"},"refine")," team. This is for measuring community preferences. You are free to share or not."))),(0,n.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey."),(0,n.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Visual Studio Code and select the directory that was generated during your setup process.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,n.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal."),(0,n.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,n.kt)("p",null,"To preview your project as a web page while you work on it, the project must be running in development (dev) mode."),(0,n.kt)("h4",null,"Start the dev server"),(0,n.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,n.kt)(a.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,n.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,n.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,n.kt)("p",null,"You should see confirmation in the terminal that the ",(0,n.kt)("strong",{parentName:"p"},"refine")," app is running in dev mode."),(0,n.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,n.kt)("p",null,"Your project files contain all the code you need to run your app. To see a preview of your app in the browser:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet."),(0,n.kt)("p",{parentName:"li"},"(",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages"},"Next section")," will guide you through adding pages to your app.)"))),(0,n.kt)("p",null,"Here's what you should see:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nrender(<App />);\n')),(0,n.kt)(h,{mdxType:"Checklist"},(0,n.kt)(f,{id:"getting-started-antd",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,n.kt)(f,{id:"getting-started-antd-2",mdxType:"ChecklistItem"},"I run the dev server and previewed my app.")))}k.isMDXComponent=!0}}]);