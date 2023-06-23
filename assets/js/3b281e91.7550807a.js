"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/react-usecallback-guide",source:"@site/blog/2022-09-20-react-use-callback.md",title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.4,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},prevItem:{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react"},nextItem:{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect"},relatedPosts:[{title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",permalink:"/blog/simple-web-application-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:9.445,date:"2021-10-04T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:25.65,date:"2023-01-17T00:00:00.000Z"},{title:"React Admin Panel Tutorial with Chakra UI and Strapi",description:"We'll build a React admin tutorial app with refine",permalink:"/blog/react-admin-tutorial",formattedDate:"March 3, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:24.98,date:"2023-03-03T00:00:00.000Z"}],authorPosts:[{title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",permalink:"/blog/refine-pixels-4",formattedDate:"February 17, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.36,date:"2023-02-17T00:00:00.000Z"},{title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",permalink:"/blog/refine-react-invoice-generator-5",formattedDate:"April 14, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.835,date:"2023-04-14T00:00:00.000Z"},{title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.02,date:"2022-09-16T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Pass Callback from Parent to Child",id:"pass-callback-from-parent-to-child",level:2},{value:"Referential Integrity",id:"referential-integrity",level:2},{value:"Memoizing Event Listeners with <code>useCallback()</code>",id:"memoizing-event-listeners-with-usecallback",level:2},{value:"Other Cases",id:"other-cases",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("PromotionBanner"),h=m("CodeSandboxExample"),k={toc:d};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook in React. This is the third part of the series titled Memoization in React."),(0,a.kt)("p",null,"In React, callback functions like event handlers inside a component are re-created as unique function objects at every re-render of the component. When a callback is passed from a parent to a child as a prop, the child component re-renders just because of the absence of referential integrity of the callback. ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps maintain the callback's referential integrity and prevent these re-renders."),(0,a.kt)("p",null,"We'll look at the details of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook with an example demonstrated in the previous post titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-usememo/"},"Memoization in React - How ",(0,a.kt)("inlineCode",{parentName:"a"},"useMemo()")," Works"),". "),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#referential-integrity"},"Referential Integrity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,a.kt)("inlineCode",{parentName:"a"},"useCallback()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#other-cases"},"Other Cases"))),(0,a.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,a.kt)("p",null,"The app is based on the idea of a list of posts on a blog."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"The example app live code")),(0,a.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing callback functions that are passed as a prop from a parent component to a child. We are going to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook for this."),(0,a.kt)("h2",{id:"pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child"),(0,a.kt)("p",null,"In this example, we'll consider the ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPosts />")," components."),(0,a.kt)("p",null,"As you can see below, ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," fetches and sets ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," when the compnent renders:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'import React, { useEffect, useState } from "react";\nimport fetchUserPosts from "../fetch/fetchUserPosts";\nimport UserPostsList from "./UserPostsList";\n\nconst UserPostsIndex = ({ signedIn }) => {\n  const [userPosts, setUserPosts] = useState([]);\n\n  const deletePost = e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n  };\n\n  useEffect(() => {\n    const posts = fetchUserPosts();\n    setUserPosts(posts);\n  }, []);\n\n\n  return (\n    <div className="my-1 p-2 box">\n      <div className="m-1 py-1">\n        <h2 className="heading-md">Your Posts</h2>\n        <p className="m-1 p-1">{signedIn ? `Signed in`: `Signed out `}</p>\n        {\n          userPosts &&\n          (\n            <div className="px-1">\n              {\n                <UserPostsList userPosts={userPosts}\n                  deletePost={deletePost}\n                />\n              }\n            </div>\n          )\n        }\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,a.kt)("p",null,"In the JSX, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," function passed on to ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, along with ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts"),". Prior to that, ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex>")," receives ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," as a prop from ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, we receive ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," function and display a ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />")," for each post in ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"import React from 'react';\nimport UserPost from './UserPost';\n\nconst UserPostsList = ({ userPosts, deletePost }) => {\n\n  console.log('Rendering UserPostsList component');\n\n  return (\n    (\n      <div className=\"px-1\">\n        {\n          userPosts.map(post => (\n            <div key={post.id} className=\"my-1 box flex-row\">\n              <UserPost post={post} />\n              <button className=\"btn btn-danger\" data-post-id={post.id} onClick={deletePost}>Delete</button>\n            </div>\n        ))\n        }\n      </div>\n    )\n  );\n};\n\nexport default React.memo(UserPostsList);\n")),(0,a.kt)("p",null,"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," is used to remove an item from the list."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is just a presentational component where we display the title as a link. Feel free to go over it in your editor."),(0,a.kt)("p",null,"Now let's add following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},"console.log('Rendering UserPostsIndex component');\n")),(0,a.kt)("p",null,"and this one in ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"console.log('Rendering UserPostsList component');\n")),(0,a.kt)("p",null,"If we check our console, we can see the logs for the inital rendering of the components.",(0,a.kt)("br",{parentName:"p"}),"\n","Then if we click the ",(0,a.kt)("inlineCode",{parentName:"p"},"SignOut")," button on the navbar, we see batches of renders from ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />"),":"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback1.png",alt:"usecallback1"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"We can account for the re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," because the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn")," prop changed. However, re-rendering ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," does not make sense because ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," does not change with the change in the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),".  "),(0,a.kt)("p",null,"We already memoized ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.memo()"),". We don't see any reason why it should re-render due changes in any ancestor's state."),(0,a.kt)("p",null," Does ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," change ?"),(0,a.kt)("hr",null),(0,a.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"referential-integrity"},"Referential Integrity"),(0,a.kt)("p",null,"Well, ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," changes, and it changes due to breaking of ",(0,a.kt)("strong",{parentName:"p"},"referential integrity"),". And this change triggers a re-render in ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," which we don't expect to see."),(0,a.kt)("p",null,"In React, a function passed to a component as a prop fails to maintain referential integrity because a new function object is created at every render from a function declared inside a parent component. So the value of the prop in the receiver component is different at every re-render of the parent. As a result, the receiver also re-renders, unexpectedly."),(0,a.kt)("p",null,"In our example, ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," is not expected to be re-rendered, but it does because referential integrity fails as ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," is a different function object at every re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", i.e. they are not equal. So, when we change ",(0,a.kt)("inlineCode",{parentName:"p"},"signedIn"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," re-renders, and so ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," also re-renders."),(0,a.kt)("h2",{id:"memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,a.kt)("inlineCode",{parentName:"h2"},"useCallback()")),(0,a.kt)("p",null,"Now, memoizing ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," produces the same function at every re-render. Let's memoize it with ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," by making the following changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'  // highlight-next-line\nimport React, { useCallback, useEffect, useState } from "react";\n\nconst UserPostsIndex = ({ signedIn }) => {\n\n// highlight-next-line\n  const deletePost = useCallback(e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n    // highlight-next-line\n  }, [userPosts]);\n\n  ...\n\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,a.kt)("p",null,"Now, if we click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sign Out")," button a few times, we'll see in the console that ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," is re-rendered, but ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is not:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback2.png",alt:"usecallback2"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," caches and produces the same copy of ",(0,a.kt)("inlineCode",{parentName:"p"},"deletePost()")," at every render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", until its dependencies change. "),(0,a.kt)("p",null,"Here, a change in ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," triggers renewal of the memo of the function, so everytime the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"userPosts")," changes, ",(0,a.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," will be re-rendered."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"other-cases"},"Other Cases"),(0,a.kt)("p",null,"Memoized callbacks are very important to maintain referential integrity so that the same function object is made available every time a component re-renders. ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," is also used to cache callbacks in debouncing, as well as dependencies in hooks like ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we looked at how re-renders of a parent component lead to violation of referential integrity of callback functions passed in as props to child components, which causes unnecessary re-renders of a child. ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps us produce the same function object at every re-render of the parent, and be pass it to the child. This prevents the unnecessary re-renders of child components."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(h,{path:"blog-react-memoization-memo",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);