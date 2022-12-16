"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},69485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",slug:"react-router-useparams",authors:"joseph_mawa",tags:["react","react-router","useparams"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-24-router-use-params/social.jpg",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/react-router-useparams",source:"@site/blog/2022-09-24-router-use-params.md",title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",date:"2022-09-24T00:00:00.000Z",formattedDate:"September 24, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"react-router",permalink:"/blog/tags/react-router"},{label:"useparams",permalink:"/blog/tags/useparams"}],readingTime:4.49,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",slug:"react-router-useparams",authors:"joseph_mawa",tags:["react","react-router","useparams"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-24-router-use-params/social.jpg",hide_table_of_contents:!1},prevItem:{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml"},nextItem:{title:"A Quick Start Guide to React Suspense",permalink:"/blog/react-suspense-guide"},relatedPosts:[{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.04,date:"2022-09-05T00:00:00.000Z"},{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.205,date:"2021-10-04T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.99,date:"2022-11-24T00:00:00.000Z"}],authorPosts:[{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect",formattedDate:"September 19, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:5.285,date:"2022-09-19T00:00:00.000Z"},{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome",formattedDate:"August 31, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:15.625,date:"2022-08-31T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"November 1, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:16.565,date:"2022-11-01T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting up React Router",id:"setting-up-react-router",level:2},{value:"Step 1 - Install React Router",id:"step-1---install-react-router",level:3},{value:"Step 2 - How to set up React router",id:"step-2---how-to-set-up-react-router",level:3},{value:"Step 3 - How to set up routes",id:"step-3---how-to-set-up-routes",level:3},{value:"What are URL parameters in React router",id:"what-are-url-parameters-in-react-router",level:2},{value:"How to use the  <code>useParams</code> hook",id:"how-to-use-the--useparams-hook",level:2},{value:"Conclusion",id:"conclusion",level:2}],p=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const c={toc:u};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook is one of the several hooks in React router. It has been available in React router since version 5. You can use it to retrieve route parameters from the component rendered by the matching route. You will explore the React Router ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook and how to use it in this article."),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#introduction"},"Introduction"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#setting-up-react-router"},"Setting up React Router")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-are-url-parameters-in-react-router"},"What are URL parameters in React Router?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#how-to-use-the-useparams-hook"},"How to use the  ",(0,n.kt)("inlineCode",{parentName:"a"},"useParams")," hook"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To try out the examples in this article, you need to have a React project."),(0,n.kt)("p",null,"Quickly create a React project using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npx superplate-cli useparams-example-app\n")),(0,n.kt)("h2",{id:"setting-up-react-router"},"Setting up React Router"),(0,n.kt)("p",null,"The steps below explain how to set up React router version 6 in an existing React project."),(0,n.kt)("h3",{id:"step-1---install-react-router"},"Step 1 - Install React Router"),(0,n.kt)("p",null,"Use one of the commands below to install React router version 6."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\nnpm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,n.kt)("h3",{id:"step-2---how-to-set-up-react-router"},"Step 2 - How to set up React router"),(0,n.kt)("p",null,"To use React router in the browser environment, import ",(0,n.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," and wrap your root component as in the example below. ",(0,n.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," is a top-level Component. Other routers, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeRouter")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"StaticRouter"),", have their use cases you can look up in the documentation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>\n);\n')),(0,n.kt)("h3",{id:"step-3---how-to-set-up-routes"},"Step 3 - How to set up routes"),(0,n.kt)("p",null,"Unlike in earlier versions of React router, you import the ",(0,n.kt)("inlineCode",{parentName:"p"},"Routes")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Route")," components in React router version 6 and then set them up like in the example below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components"\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,n.kt)("hr",null),(0,n.kt)(p,{title:"CRUD apps are just boring!",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",mdxType:"PromotionBanner"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"what-are-url-parameters-in-react-router"},"What are URL parameters in React router"),(0,n.kt)("p",null,"When declaring functions in JavaScript, we use placeholders referred to as parameters. You use the parameters to perform some operations in the function declaration and return a value. The code below is a JavaScript function declaration that takes two numbers and returns their sum."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"function add(a, b){\n  return a + b;\n};\n")),(0,n.kt)("p",null,"In the function declaration above, ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"b")," are placeholders. They are function parameters. The actual values you pass during function invocation are arguments. In the function invocation below, ",(0,n.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"3")," are arguments. The function can take any pair of numbers as arguments and return their sum."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const sum = add(2, 3);\nconsole.log(sum) // 5\n")),(0,n.kt)("p",null,"The concept of parameters is not limited to function declarations. When working with React router, there are URL parameters similar to the function parameters described above. In React router, URL parameters are placeholders you declare in a route, as in the example below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<Routes>\n  <Route path="/blog/:id" element={<Blog />} /> \n</Routes>\n')),(0,n.kt)("p",null,"In the example above, ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," is a placeholder because of the ",(0,n.kt)("inlineCode",{parentName:"p"},":")," in front. The placeholder is known as the URL parameter. Because of the URL parameter, React router will not literally match the route above with the URL. It will dynamically match if you point the browser to a URL that matches the ",(0,n.kt)("inlineCode",{parentName:"p"},"/blog/:id")," pattern in its path."),(0,n.kt)("p",null,"Assuming you are hosting the site on ",(0,n.kt)("inlineCode",{parentName:"p"},"https://refine.dev/"),", pointing the browser to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://refine.dev/blog/use-params")," will match the route above. As a result, the ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," parameter will take the value ",(0,n.kt)("inlineCode",{parentName:"p"},'"use-params"')," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Blog")," component. "),(0,n.kt)("p",null,"The section below will explain how you can access the URL parameter in the rendered Component using the ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook."),(0,n.kt)("h2",{id:"how-to-use-the--useparams-hook"},"How to use the  ",(0,n.kt)("inlineCode",{parentName:"h2"},"useParams")," hook"),(0,n.kt)("p",null,"As explained in the section above, you can declare a route with URL parameters so that React router dynamically captures the corresponding values in the URL when there is a match. It is useful when dynamically rendering the same component for multiple paths."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<Routes>\n  <Route path="/blog/:id" element={<Blog />} /> \n</Routes>\n')),(0,n.kt)("p",null,"Assuming you have the route above in your React router setup, you can retrieve the route parameters in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Blog")," component using the ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook. It returns an object. The object keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook in the rendered component to retrieve the parameters like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParams } from "react-router-dom";\n\nconst Blog = () => {\n  const routeParams = useParams();\n};\n')),(0,n.kt)("p",null,"If the matching route is",(0,n.kt)("inlineCode",{parentName:"p"},"/blog/use-params")," for the example above, the ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook will return the object below. You can then use the returned object in the rendered Component the way you want."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  id: "use-params"\n}\n')),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://discord.gg/refine"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook has been part of React router since version 5. It comes in handy if you want to retrieve route parameters from the functional component rendered by the matching route. The React Router ",(0,n.kt)("inlineCode",{parentName:"p"},"useParams")," hook returns an object whose keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL."))}h.isMDXComponent=!0}}]);