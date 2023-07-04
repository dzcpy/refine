"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",slug:"navigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-29-router-navigate-component/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/navigate-react-router-redirect",source:"@site/blog/2022-09-29-router-navigate-component.md",title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",date:"2022-09-29T00:00:00.000Z",formattedDate:"September 29, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:3.935,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",slug:"navigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-29-router-navigate-component/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},nextItem:{title:"How to use Docker Build Args and Environment Variables",permalink:"/blog/docker-build-args-and-env-vars"},relatedPosts:[{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.855,date:"2022-07-21T00:00:00.000Z"},{title:"Let's Build an App to Manage Your Hackathons with Refine",description:"We'll be building a demo app to manage hackathons with refine.",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.405,date:"2021-10-04T00:00:00.000Z"},{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.095,date:"2022-04-29T00:00:00.000Z"}],authorPosts:[{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.625,date:"2023-07-02T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",description:"We'll compare the best online IDEs and code editors for web development. We'll also look at the pros and cons of each.",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"November 1, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:16.055,date:"2022-11-01T00:00:00.000Z"},{title:"5 Best Free Platforms for Hosting Hobby Web Projects",description:"A list of the best free platforms for hosting hobby web projects. You can host your static websites, React apps, and more for free.",permalink:"/blog/5-top-free-react-hosting-platforms",formattedDate:"November 23, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.155,date:"2022-11-23T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started with React router",id:"getting-started-with-react-router",level:2},{value:"Installing React router",id:"installing-react-router",level:2},{value:"Setting up React router",id:"setting-up-react-router",level:2},{value:"Setting up routes",id:"setting-up-routes",level:2},{value:"How to use the  <code>Navigate</code> component",id:"how-to-use-the--navigate-component",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const g={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"React Router version 6 shipped recently with several new features and improvements. One such feature is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," component. It is the component equivalent of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook."),(0,r.kt)("p",null,"This article will take a deep dive into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," component."),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-started-with-react-router"},"Getting started with React router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installing-react-router"},"Installing React router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-react-router"},"Setting up React router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-routes"},"Setting up routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-use-the--navigate-component"},"How to use the  ",(0,r.kt)("inlineCode",{parentName:"a"},"Navigate")," component"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To run the examples in this article, you need to have some following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A working React project. Quickly create a React project using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pankod/superplate"},"superplate"),".")),(0,r.kt)("h2",{id:"getting-started-with-react-router"},"Getting started with React router"),(0,r.kt)("p",null,"In this section, you will learn how to set up React router in an existing React project."),(0,r.kt)("h2",{id:"installing-react-router"},"Installing React router"),(0,r.kt)("p",null,"Depending on your package manager, install React router from the NPM package registry using one of the commands below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\n npm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,r.kt)("h2",{id:"setting-up-react-router"},"Setting up React router"),(0,r.kt)("p",null,"Before using React router in the browser environment, import one of the top-level Components and wrap your root Component in it. We will use ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," since we want to run React router in the browser. It is the recommended way for running React router in the browser."),(0,r.kt)("p",null,"If you are using React router version 6, wrap your root component in ",(0,r.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," as in the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>\n);\n')),(0,r.kt)("h2",{id:"setting-up-routes"},"Setting up routes"),(0,r.kt)("p",null,"In React router version 6, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Routes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Route")," Components to set up the routes in your application. You can import and use them like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components"\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,r.kt)("hr",null),(0,r.kt)(m,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-to-use-the--navigate-component"},"How to use the  ",(0,r.kt)("inlineCode",{parentName:"h2"},"Navigate")," component"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," component is one of the several built-in components in React router version 6. It is a wrapper for the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook, and the current location changes when you render it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Navigate } from "react-router-dom";\n')),(0,r.kt)("p",null,"Import ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," to start using it. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," component takes up to three ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),", only one of which is required. The other two are optional. "),(0,r.kt)("p",null,"Below are the explanations for these three ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Navigate to="/dashboard" state={{ todos: []}} replace={true} />\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," - A required prop. Its value should be the path which you want to navigate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replace")," - An optional boolean prop. Setting its value to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," will replace the current entry in the history stack."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," - An optional prop. You can use it to pass data from the component that renders ",(0,r.kt)("inlineCode",{parentName:"li"},"Navigate"),".")),(0,r.kt)("p",null,"The code below illustrates how you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," component for navigation. We are rendering it conditionally after a state update and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," prop to pass a route state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const App = () => {\n  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });\n  const [user, setUser] = useState(null);\n\n  const changeHandler = (e) => {\n    const { name, value } = e.target;\n    setLoginDetails((loginDetails) => ({ ...loginDetails, [name]: value }));\n  };\n\n  const submitHandler = async (e) => {\n    e.preventDefault();\n    const user = await loginUser(loginDetails);\n    setUser(user);\n  };\n\n  return (\n    <div>\n      <form onSubmit={submitHandler}>\n        <label>\n          Email:\n          <input\n            type="email"\n            name="email"\n            value={loginDetails.email}\n            onChange={changeHandler}\n            required\n          />\n        </label>\n        <label>\n          Password:\n          <input\n            type="password"\n            name="password"\n            value={loginDetails.password}\n            onChange={changeHandler}\n            required\n          />\n        </label>\n        <button type="submit"> Login </button>\n      </form>\n      {user && <Navigate to="/dashboard" state={user} replace={true} />}\n    </div>\n  );\n};\n')),(0,r.kt)("p",null,"After navigation, the component rendered by the matching route can access the state prop passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," hook like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const location = useLocation();\nconsole.log(location.state);\n// The default value of location.state is null if you don't pass any data.\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," you pass to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," component are the same as the arguments required by the function returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," component is one of the built-in components that shipped with React router version 6. It is a React component equivalent of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook. It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," internally. The props you pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," are the same as the arguments you pass to the function returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"."),(0,r.kt)("p",null,"Unlike functional components in React, ES6 classes do not support hooks. Therefore,  ",(0,r.kt)("inlineCode",{parentName:"p"},"Navigate")," is a handy equivalent of  ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate")," when working with class-based React components."))}h.isMDXComponent=!0}}]);