"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=s,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const o={title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},r=void 0,i={permalink:"/blog/react-usecallback-guide",source:"@site/blog/2022-09-20-react-use-callback.md",title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",date:"2022-09-20T00:00:00.000Z",formattedDate:"September 20, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.37,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Memoization in React - How useCallback Works",description:"Improve the APP performance with React useCallback() hook",slug:"react-usecallback-guide",authors:"abdullah_numan",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/social.png",hide_table_of_contents:!1},prevItem:{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react"},nextItem:{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect"},relatedPosts:[{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.9,date:"2022-08-24T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.335,date:"2022-09-16T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.675,date:"2021-11-12T00:00:00.000Z"}],authorPosts:[{title:"Adding CRUD Pages",permalink:"/blog/refine-react-invoice-generator-3",formattedDate:"April 12, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:27.265,date:"2023-04-12T00:00:00.000Z"},{title:"Pilot & refine architecture",permalink:"/blog/refine-pixels-1",formattedDate:"February 14, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.73,date:"2023-02-14T00:00:00.000Z"},{title:"Creating Mission and Invoice Pages",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:18.55,date:"2023-04-13T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Pass Callback from Parent to Child",id:"pass-callback-from-parent-to-child",level:2},{value:"Referential Integrity",id:"referential-integrity",level:2},{value:"Memoizing Event Listeners with <code>useCallback()</code>",id:"memoizing-event-listeners-with-usecallback",level:2},{value:"Other Cases",id:"other-cases",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},d=p("PromotionBanner"),m=p("CodeSandboxExample"),u={toc:c};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"This post is about using the ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook in React. This is the third part of the series titled Memoization in React."),(0,s.kt)("p",null,"In React, callback functions like event handlers inside a component are re-created as unique function objects at every re-render of the component. When a callback is passed from a parent to a child as a prop, the child component re-renders just because of the absence of referential integrity of the callback. ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps maintain the callback's referential integrity and prevent these re-renders."),(0,s.kt)("p",null,"We'll look at the details of the ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook with an example demonstrated in the previous post titled ",(0,s.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-usememo/"},"Memoization in React - How ",(0,s.kt)("inlineCode",{parentName:"a"},"useMemo()")," Works"),". "),(0,s.kt)("p",null,"Steps we'll cover:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#referential-integrity"},"Referential Integrity")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,s.kt)("inlineCode",{parentName:"a"},"useCallback()"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#other-cases"},"Other Cases"))),(0,s.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,s.kt)("p",null,"The app is based on the idea of a list of posts on a blog."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"The example app live code")),(0,s.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing callback functions that are passed as a prop from a parent component to a child. We are going to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook for this."),(0,s.kt)("h2",{id:"pass-callback-from-parent-to-child"},"Pass Callback from Parent to Child"),(0,s.kt)("p",null,"In this example, we'll consider the ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPosts />")," components."),(0,s.kt)("p",null,"As you can see below, ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," fetches and sets ",(0,s.kt)("inlineCode",{parentName:"p"},"userPosts")," when the compnent renders:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'import React, { useEffect, useState } from "react";\nimport fetchUserPosts from "../fetch/fetchUserPosts";\nimport UserPostsList from "./UserPostsList";\n\nconst UserPostsIndex = ({ signedIn }) => {\n  const [userPosts, setUserPosts] = useState([]);\n\n  const deletePost = e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n  };\n\n  useEffect(() => {\n    const posts = fetchUserPosts();\n    setUserPosts(posts);\n  }, []);\n\n\n  return (\n    <div className="my-1 p-2 box">\n      <div className="m-1 py-1">\n        <h2 className="heading-md">Your Posts</h2>\n        <p className="m-1 p-1">{signedIn ? `Signed in`: `Signed out `}</p>\n        {\n          userPosts &&\n          (\n            <div className="px-1">\n              {\n                <UserPostsList userPosts={userPosts}\n                  deletePost={deletePost}\n                />\n              }\n            </div>\n          )\n        }\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,s.kt)("p",null,"In the JSX, we have a ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," function passed on to ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, along with ",(0,s.kt)("inlineCode",{parentName:"p"},"userPosts"),". Prior to that, ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex>")," receives ",(0,s.kt)("inlineCode",{parentName:"p"},"signedIn")," as a prop from ",(0,s.kt)("inlineCode",{parentName:"p"},"<Blog />"),"."),(0,s.kt)("p",null,"In the ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," component, we receive ",(0,s.kt)("inlineCode",{parentName:"p"},"userPosts")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," function and display a ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPost />")," for each post in ",(0,s.kt)("inlineCode",{parentName:"p"},"userPosts")," array:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"import React from 'react';\nimport UserPost from './UserPost';\n\nconst UserPostsList = ({ userPosts, deletePost }) => {\n\n  console.log('Rendering UserPostsList component');\n\n  return (\n    (\n      <div className=\"px-1\">\n        {\n          userPosts.map(post => (\n            <div key={post.id} className=\"my-1 box flex-row\">\n              <UserPost post={post} />\n              <button className=\"btn btn-danger\" data-post-id={post.id} onClick={deletePost}>Delete</button>\n            </div>\n        ))\n        }\n      </div>\n    )\n  );\n};\n\nexport default React.memo(UserPostsList);\n")),(0,s.kt)("p",null,"Inside ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," is used to remove an item from the list."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is just a presentational component where we display the title as a link. Feel free to go over it in your editor."),(0,s.kt)("p",null,"Now let's add following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},"console.log('Rendering UserPostsIndex component');\n")),(0,s.kt)("p",null,"and this one in ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostList.jsx"',title:'"components/UserPostList.jsx"'},"console.log('Rendering UserPostsList component');\n")),(0,s.kt)("p",null,"If we check our console, we can see the logs for the inital rendering of the components.",(0,s.kt)("br",{parentName:"p"}),"\n","Then if we click the ",(0,s.kt)("inlineCode",{parentName:"p"},"SignOut")," button on the navbar, we see batches of renders from ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPost />"),":"),(0,s.kt)("div",{class:"img-container","align-items":"center"},(0,s.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback1.png",alt:"usecallback1"})),(0,s.kt)("br",null),(0,s.kt)("p",null,"We can account for the re-render of ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," because the value of the ",(0,s.kt)("inlineCode",{parentName:"p"},"signedIn")," prop changed. However, re-rendering ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," does not make sense because ",(0,s.kt)("inlineCode",{parentName:"p"},"userPosts")," does not change with the change in the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"signedIn"),".  "),(0,s.kt)("p",null,"We already memoized ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"React.memo()"),". We don't see any reason why it should re-render due changes in any ancestor's state."),(0,s.kt)("p",null," Does ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," change ?"),(0,s.kt)("hr",null),(0,s.kt)(d,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"referential-integrity"},"Referential Integrity"),(0,s.kt)("p",null,"Well, ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," changes, and it changes due to breaking of ",(0,s.kt)("strong",{parentName:"p"},"referential integrity"),". And this change triggers a re-render in ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," which we don't expect to see."),(0,s.kt)("p",null,"In React, a function passed to a component as a prop fails to maintain referential integrity because a new function object is created at every render from a function declared inside a parent component. So the value of the prop in the receiver component is different at every re-render of the parent. As a result, the receiver also re-renders, unexpectedly."),(0,s.kt)("p",null,"In our example, ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," is not expected to be re-rendered, but it does because referential integrity fails as ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," is a different function object at every re-render of ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),", i.e. they are not equal. So, when we change ",(0,s.kt)("inlineCode",{parentName:"p"},"signedIn"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," re-renders, and so ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," also re-renders."),(0,s.kt)("h2",{id:"memoizing-event-listeners-with-usecallback"},"Memoizing Event Listeners with ",(0,s.kt)("inlineCode",{parentName:"h2"},"useCallback()")),(0,s.kt)("p",null,"Now, memoizing ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," produces the same function at every re-render. Let's memoize it with ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," by making the following changes in ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/UserPostIndex.jsx"',title:'"components/UserPostIndex.jsx"'},'  // highlight-next-line\nimport React, { useCallback, useEffect, useState } from "react";\n\nconst UserPostsIndex = ({ signedIn }) => {\n\n// highlight-next-line\n  const deletePost = useCallback(e => {\n    const { postId } = e.currentTarget.dataset;\n    const remainingPosts = userPosts.filter(post => post.id !== parseInt(postId));\n    setUserPosts(remainingPosts);\n    // highlight-next-line\n  }, [userPosts]);\n\n  ...\n\n};\n\nexport default React.memo(UserPostsIndex);\n')),(0,s.kt)("p",null,"Now, if we click the ",(0,s.kt)("inlineCode",{parentName:"p"},"Sign Out")," button a few times, we'll see in the console that ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsIndex />")," is re-rendered, but ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPost />")," is not:"),(0,s.kt)("div",{class:"img-container","align-items":"center"},(0,s.kt)("img",{style:{alignSelf:"center",width:"400px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-20-react-use-callback/usecallback2.png",alt:"usecallback2"})),(0,s.kt)("br",null),(0,s.kt)("p",null,"This is because ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," caches and produces the same copy of ",(0,s.kt)("inlineCode",{parentName:"p"},"deletePost()")," at every render of ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />"),", until its dependencies change. "),(0,s.kt)("p",null,"Here, a change in ",(0,s.kt)("inlineCode",{parentName:"p"},"userPosts")," triggers renewal of the memo of the function, so everytime the value of ",(0,s.kt)("inlineCode",{parentName:"p"},"userPosts")," changes, ",(0,s.kt)("inlineCode",{parentName:"p"},"<UserPostsList />")," will be re-rendered."),(0,s.kt)("br",null),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://discord.gg/refine"},(0,s.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,s.kt)("h2",{id:"other-cases"},"Other Cases"),(0,s.kt)("p",null,"Memoized callbacks are very important to maintain referential integrity so that the same function object is made available every time a component re-renders. ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," is also used to cache callbacks in debouncing, as well as dependencies in hooks like ",(0,s.kt)("inlineCode",{parentName:"p"},"useEffect()"),"."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"In this article, we looked at how re-renders of a parent component lead to violation of referential integrity of callback functions passed in as props to child components, which causes unnecessary re-renders of a child. ",(0,s.kt)("inlineCode",{parentName:"p"},"useCallback()")," helps us produce the same function object at every re-render of the parent, and be pass it to the child. This prevents the unnecessary re-renders of child components."),(0,s.kt)("br",null),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://discord.gg/refine"},(0,s.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)(m,{path:"blog-react-memoization-memo",mdxType:"CodeSandboxExample"}))}h.isMDXComponent=!0}}]);