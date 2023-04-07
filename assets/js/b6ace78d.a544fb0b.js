"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=o,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={id:"contributing",title:"Contributing"},i=void 0,l={unversionedId:"contributing",id:"version-3.xx.xx/contributing",title:"Contributing",description:"We follow a code of conduct when participating in the community. Please read it before you make any contributions.",source:"@site/versioned_docs/version-3.xx.xx/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/3.xx.xx/contributing",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/contributing.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1680876198,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"someSidebar",previous:{title:"FAQ",permalink:"/docs/3.xx.xx/faq"},next:{title:"Testing",permalink:"/docs/3.xx.xx/testing"}},p={},s=[{value:"Ways to contribute",id:"ways-to-contribute",level:2},{value:"Commit convention",id:"commit-convention",level:2},{value:"Git branches",id:"git-branches",level:2},{value:"Changeset",id:"changeset",level:2},{value:"Running in development mode",id:"running-in-development-mode",level:2},{value:"Starting the packages you work in watch mode",id:"starting-the-packages-you-work-in-watch-mode",level:3},{value:"Starting documentation in watch mode",id:"starting-documentation-in-watch-mode",level:3},{value:"Running tests",id:"running-tests",level:2},{value:"Creating Live Previews in Documentation",id:"creating-live-previews-in-documentation",level:2},{value:"Properties",id:"properties",level:3},{value:"Hiding Boilerplate Code",id:"hiding-boilerplate-code",level:3},{value:"Rendering the Preview",id:"rendering-the-preview",level:3},{value:"Defined Scope",id:"defined-scope",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We follow a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/CODE_OF_CONDUCT.md"},"code of conduct")," when participating in the community. Please read it before you make any contributions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you plan to work on an issue, mention so in the issue page before you start working on it."),(0,o.kt)("li",{parentName:"ul"},"If you plan to work on a new feature, create an issue and discuss it with other community members/maintainers."),(0,o.kt)("li",{parentName:"ul"},"Ask for help in our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/refine"},"community room"),".")),(0,o.kt)("h2",{id:"ways-to-contribute"},"Ways to contribute"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stars on GitHub"),": If you're a refine user and enjoy using our platform, don't forget to star it on ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine"},"GitHub"),"! \ud83c\udf1f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Improve documentation"),": Good documentation is imperative to the success of any project. You can make our documents the best they need to be by improving their quality or adding new ones."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Give feedback"),": We're always looking for ways to make refine better, please share how you use refine, what features are missing and what is done good via ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/discussions"},"GitHub Discussions")," or ",(0,o.kt)("a",{parentName:"li",href:"http://discord.gg/refine"},"Discord"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Share refine"),": Help us reach people. Share ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine"},"refine repository")," with everyone who can be interested."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contribute to codebase"),": your help is needed to make this project the best it can be! You could develop new features or fix ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/issues"},"existing issues")," - every contribution will be welcomed with great pleasure!")),(0,o.kt)("h2",{id:"commit-convention"},"Commit convention"),(0,o.kt)("p",null,"refine is a monorepo. For a monorepo, commit messages are essential to keep everything clear. We use ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits")," to keep our commit messages consistent and easy to understand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<type>(optional scope): <description>\n")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"feat: allow provided config object to extend other configs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fix: array parsing issue when multiple spaces were contained in string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs: correct spelling of CHANGELOG"))),(0,o.kt)("h2",{id:"git-branches"},"Git branches"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"next")," \u2013 contains next version (1.x.0), most likely you would want to create a PR to this branch"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"master")," \u2013 current stable version")),(0,o.kt)("h2",{id:"changeset"},"Changeset"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," are designed to make your workflows easier, by allowing the person making contributions to make key decisions when they are making their contribution. Changesets hold two key bits of information: a version type (following semver), and change information to be added to a changelog."),(0,o.kt)("p",null,"Follow the steps below to create a changeset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run changeset\n")),(0,o.kt)("p",null,"After that you need to,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"select the package(s) you are modifying"),(0,o.kt)("li",{parentName:"ul"},"choose one of ",(0,o.kt)("inlineCode",{parentName:"li"},"major/patch/minor")," according to your change"),(0,o.kt)("li",{parentName:"ul"},"some explanation about the changes")),(0,o.kt)("p",null,"and then you are done!"),(0,o.kt)("h2",{id:"running-in-development-mode"},"Running in development mode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node")," version 16 is required."),(0,o.kt)("p",null,"This project has multiple packages and uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna")," to manage packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/"),"."),(0,o.kt)("p",null,"First, install dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,o.kt)("p",null,"From now on, depending on the packages you plan to work on, (they are located under ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"examples/")," directories - see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/lerna.json"},"lerna.json"),") you will need to bootstrap them and start them in watch mode. Instead of running ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna bootstrap")," directly, read on to see how ",(0,o.kt)("strong",{parentName:"p"},"refine")," team handles it."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Refer to ",(0,o.kt)("strong",{parentName:"a"},"lerna")," docs to learn more about it. ","\u2192")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org/#command-bootstrap"},"Refer to ",(0,o.kt)("strong",{parentName:"a"},"lerna")," docs to learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"lerna bootstrap"),". ","\u2192")),(0,o.kt)("h3",{id:"starting-the-packages-you-work-in-watch-mode"},"Starting the packages you work in watch mode"),(0,o.kt)("p",null,"You can either bootstrap all packages or only the packages you plan to work on."),(0,o.kt)("p",null,"To bootstrap all packages (all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples")," and under ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages")," whose names start with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine*"),"), you should run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run bootstrap\n")),(0,o.kt)("p",null,"To bootstrap the specific packages/examples only (all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages")," whose names start with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine*")," and specified packages):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run bootstrap -- --scope refine-use-select-example\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna/blob/main/core/filter-options/README.md#--scope-glob"},"Refer to ",(0,o.kt)("strong",{parentName:"a"},"lerna")," docs to learn more about ",(0,o.kt)("inlineCode",{parentName:"a"},"scope")," flag. ","\u2192")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run bootstrap")," command bootstraps all packages whose name start with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine*")," and all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples"),". If you add filters with ",(0,o.kt)("inlineCode",{parentName:"p"},"--scope")," flag, you can avoid bootstrapping all packages under ",(0,o.kt)("inlineCode",{parentName:"p"},"/examples"),"."),(0,o.kt)("p",null,"At this point, all/required packages are bootstrapped. Now you can start the packages you plan to work on in development mode. If you don't want to start all packages in development mode, you should filter them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm run start -- --scope @pankod/refine-core --scope @pankod/refine-antd --scope refine-use-select-example\n")),(0,o.kt)("p",null,"This command starts the example named ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-use-select-example")," in dev mode. The value of the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--scope")," is the name that is defined in it's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"--scope")," flag should be used for every package that should be filtered. If you should start two packages:"),(0,o.kt)("p",null,"Now all filtered packages are running in watch mode. They should re-compile when you make a change in any of them."),(0,o.kt)("h3",{id:"starting-documentation-in-watch-mode"},"Starting documentation in watch mode"),(0,o.kt)("p",null,"Our documentation is built with ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". To start it in development mode, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd documentation\nnpm install\nDISABLE_DOCGEN=true npm run start\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"DISABLE_DOCGEN")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to skip generate type documentation for the packages. If you want to generate documentation for the packages, you can set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,o.kt)("admonition",{title:"Docgen plugin and Props Table",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are working on type generation and props tables for specific packages, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"INCLUDED_PACKAGES")," environment variable to run the scripts for only the packages you are working on by providing comma delimited list of package directories."),(0,o.kt)("p",{parentName:"admonition"},"For example, if you are working on ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," packages, which are located under ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/antd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/core")," directories, you can run the following command to generate type documentation for only these packages:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"INCLUDED_PACKAGES=antd,core npm run start\n")),(0,o.kt)("p",{parentName:"admonition"},"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"<PropsTable />")," component, you should pass ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," prop as ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," to the component in form of ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd/MyComponent"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<PropsTable module="@pankod/refine-antd/Create" />\n'))),(0,o.kt)("h2",{id:"running-tests"},"Running tests"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm run test")," command runs tests for all packages. If you're working on a package (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core"),"), you can run tests only for that package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/core\nnpm run test\n")),(0,o.kt)("p",null,"Or you can do it for a specific file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"Also, to run a specific file's tests in watch mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- --watch /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"Get coverage report for that file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test -- --coverage /src/hooks/export/index.spec.ts\n")),(0,o.kt)("p",null,"When you run the command that produces coverage report, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"/coverage/lcov-report/index.html")," file to see coverage results. If you run this command in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core")," directory, then coverage report will be generated in ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/core/coverage"),"."),(0,o.kt)("p",null,"Please make sure you contribute well tested code."),(0,o.kt)("h2",{id:"creating-live-previews-in-documentation"},"Creating Live Previews in Documentation"),(0,o.kt)("p",null,"We're using live previews powered with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-live"},(0,o.kt)("inlineCode",{parentName:"a"},"react-live"))," to demonstrate our components and logic with ",(0,o.kt)("inlineCode",{parentName:"p"},"refine")," running at full functionality. To create a live preview, you should add ",(0,o.kt)("inlineCode",{parentName:"p"},"live")," property to your code blocks in markdown files."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements to show them in the code block but they will be ignored when running the code. Instead all import statements related to ",(0,o.kt)("strong",{parentName:"p"},"refine")," will be converted into object destructures and prepended into code. This will allow you to do the import in the visible part of the code and also use them before the import statements. Check out ",(0,o.kt)("a",{parentName:"p",href:"#defined-scope"},"Defined Scope")," section to learn more about the available packages and variables.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Refine Live Previews has an independent package apart from the documentation and the previews are rendered through this package via iframe. ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-live-previews")," runs on ",(0,o.kt)("inlineCode",{parentName:"p"},"3030")," port by default and the fallback value for ",(0,o.kt)("inlineCode",{parentName:"p"},"LIVE_PREVIEW_URL")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3030")," for development purposes. If you want to run both the previews package and the documentation at the same time, use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start:doc")," command.")),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"You can use the following properties to adjust your live blocks:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hideCode")),(0,o.kt)("td",{parentName:"tr",align:null},"Adds title"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disableScroll")),(0,o.kt)("td",{parentName:"tr",align:null},"Disables the scroll in the preview"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"previewHeight")),(0,o.kt)("td",{parentName:"tr",align:null},"Height of the preview"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"400px"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"url")),(0,o.kt)("td",{parentName:"tr",align:null},"URL to be shown in the header of the preview"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"http://localhost:3000"))))),(0,o.kt)("h3",{id:"hiding-boilerplate-code"},"Hiding Boilerplate Code"),(0,o.kt)("p",null,"There are two ways to hide/show code sections in your live code blocks; either you can wrap your visible code to ",(0,o.kt)("inlineCode",{parentName:"p"},"// visible-block-start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"// visible-block-end")," comments, or you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"// hide-next-line"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"// hide-start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"// hide-end")," comments. You can use both of them in the same code block."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"// visible-block-start")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"// visible-block-end"))),(0,o.kt)("p",null,"This wrapper can be used to show only the desired part of the code in the code block and will not affect the live preview. Copy code button will only copy the code inside this block. This is the recommended way to hide boilerplate/unwanted code."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," ",(0,o.kt)("inlineCode",{parentName:"strong"},"// hide-next-line")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"// hide-start")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"// hide-end"))),(0,o.kt)("p",null,"These magic comments will hide the next line or the wrapped code block. You can use these to hide the code that you want to show in the code blocks. These will also not affect the live preview but those lines will be copied with the copy button. Use these to hide the required code pieces for the live preview but are out of scope for the example. Such as while showing how a property of a component works in live preview, you can hide the required but not relevant props."),(0,o.kt)("h3",{id:"rendering-the-preview"},"Rendering the Preview"),(0,o.kt)("p",null,"To render the live preview you should call the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function with your component. ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function is specific to ",(0,o.kt)("inlineCode",{parentName:"p"},"react-live")," and it will render the preview in the browser; therefore not needed to be visible in the codeblock, it's recommended to leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," part outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"// visible-block")," wrapper."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'```tsx live hideCode url=http://localhost:3000/posts/create\n// You can use object destructuring to import the necessary functions and components which you don\'t want to show in the code block.\n// highlight-start\nconst { CreateButton } = RefineAntd;\n// highlight-end\n\ninterface ICategory {\nid: number;\ntitle: string;\n}\n\ninterface IPost {\nid: number;\ntitle: string;\ncontent: string;\nstatus: "published" | "draft" | "rejected";\ncategory: { id: number };\n}\n\n// visible-block-start\n// Import statements will be replaced with the object destructuring but visible code block will not be affected.\n// highlight-start\nimport {\n    Create,\n    Form,\n    Input,\n    Select,\n    useForm,\n    useSelect,\n} from "@pankod/refine-antd";\n// highlight-end\n\nconst PostCreate: React.FC = () => {\nconst { formProps, saveButtonProps } = useForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name={["category", "id"]}\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Status"\n                    name="status"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select\n                        options={[\n                            {\n                                label: "Published",\n                                value: "published",\n                            },\n                            {\n                                label: "Draft",\n                                value: "draft",\n                            },\n                            {\n                                label: "Rejected",\n                                value: "rejected",\n                            },\n                        ]}\n                    />\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n\n};\n// visible-block-end\n\n// This part is required to render the preview.\n// highlight-start\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n// highlight-end\n```;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Result ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode disableScroll url=http://localhost:3000/posts/create",live:!0,hideCode:!0,disableScroll:!0,url:"http://localhost:3000/posts/create"},'// You can use object destructuring to import the necessary functions and components which you don\'t want to show in the code block.\n// highlight-start\nconst { CreateButton } = RefineAntd;\n// highlight-end\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n\n// visible-block-start\n// Import statements will be replaced with the object destructuring but visible code block will not be affected.\n// highlight-start\nimport {\n    Create,\n    Form,\n    Input,\n    Select,\n    useForm,\n    useSelect,\n} from "@pankod/refine-antd";\n// highlight-end\n\nconst PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name={["category", "id"]}\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Status"\n                    name="status"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select\n                        options={[\n                            {\n                                label: "Published",\n                                value: "published",\n                            },\n                            {\n                                label: "Draft",\n                                value: "draft",\n                            },\n                            {\n                                label: "Rejected",\n                                value: "rejected",\n                            },\n                        ]}\n                    />\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n// visible-block-end\n\n// This part is required to render the preview.\n// highlight-start\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/create"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => (\n                    <div>\n                        <p>This page is empty.</p>\n                        <CreateButton />\n                    </div>\n                ),\n                create: PostCreate,\n            },\n        ]}\n    />,\n);\n// highlight-end\n')),(0,o.kt)("h3",{id:"defined-scope"},"Defined Scope"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React")),(0,o.kt)("td",{parentName:"tr",align:null},"React 17")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineCore")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-core"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineSimpleRest")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-simple-rest"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineAntd")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-antd"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineMui")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-mui"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineMantine")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-mantine"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineReactRouterV6")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-react-router-v6"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineReactHookForm")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-react-hook-form"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineReactTable")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"@pankod/refine-react-table"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineHeadlessDemo")),(0,o.kt)("td",{parentName:"tr",align:null},"Predefined ",(0,o.kt)("inlineCode",{parentName:"td"},"<Refine/>")," component with simple-rest and react-router-v6 props for easier use")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineMuiDemo")),(0,o.kt)("td",{parentName:"tr",align:null},"Predefined ",(0,o.kt)("inlineCode",{parentName:"td"},"<Refine/>")," component with Material UI, simple-rest and react-router-v6 props for easier use")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RefineAntdDemo")),(0,o.kt)("td",{parentName:"tr",align:null},"Predefined ",(0,o.kt)("inlineCode",{parentName:"td"},"<Refine/>")," component with Ant Design, simple-rest and react-router-v6 props for easier use")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"setInitialRoutes")),(0,o.kt)("td",{parentName:"tr",align:null},"For live previews, we use ",(0,o.kt)("inlineCode",{parentName:"td"},"MemoryRouter")," from ",(0,o.kt)("inlineCode",{parentName:"td"},"react-router-v6")," and to set the initial entries of the history, you can use this function.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"setRefineProps")),(0,o.kt)("td",{parentName:"tr",align:null},"For live previews, you may need to set some props to ",(0,o.kt)("inlineCode",{parentName:"td"},"<Refine />")," component that are unrelated to the code block you're writing. In those cases, you can use ",(0,o.kt)("inlineCode",{parentName:"td"},"setRefinProps")," outside of the visible code block to set props or override the existing props.")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Demo components are recommended to be used whenever possible to avoid unnecessary configuration at every code block. They are equipped with the ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-react-router-v6")," setup with ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryRouter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"refine-simple-rest")," data provider and the preferred UI Integration.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineCore")," has the default prop ",(0,o.kt)("inlineCode",{parentName:"p"},"reactQueryDevtoolConfig")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to disable the React Query Dev Tools since it doesn't work with the production version of the React.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"setInitialRoutes")," is a function to set the initial routes of the preview for ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-react-router-v6")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryRouter"),". This function takes one argument ",(0,o.kt)("inlineCode",{parentName:"p"},"initialRoutes")," which is an array of routes to be rendered initially. For example, if your component is rendered at ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/create"),", you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},'["/posts/create"]')," as the argument.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you use ",(0,o.kt)("inlineCode",{parentName:"p"},"setInitialRoutes")," function before rendering the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component. Otherwise, ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryRouter")," will not be able to set the initial routes. For some cases, you might find setting ",(0,o.kt)("inlineCode",{parentName:"p"},"initialRoutes")," prop of demo ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," (",(0,o.kt)("inlineCode",{parentName:"p"},"RefineHeadlessDemo"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineMuiDemo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineAntdDemo"),") components easier. There's no difference between the two approaches.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"setRefineProps")," is a function to set additional props to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine />")," or override existing props of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine />"),". Make sure you don't conflict with the props you set in the visible block while overriding; which may cause unwanted results.")))}m.isMDXComponent=!0}}]);