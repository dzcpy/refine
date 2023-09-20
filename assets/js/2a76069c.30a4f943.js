"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>p});n(67294);var i=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const r={title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concept of the two most popular CSS layout methods - Grid and Flexbox.",slug:"css-grid-vs-flexbox",authors:"muhammed_arslan",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/social.png",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/css-grid-vs-flexbox",source:"@site/blog/2022-08-30-flexbox-vs-grid.md",title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concept of the two most popular CSS layout methods - Grid and Flexbox.",date:"2022-08-30T00:00:00.000Z",formattedDate:"August 30, 2022",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:6.225,hasTruncateMarker:!1,authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],frontMatter:{title:"CSS Grid vs Flexbox - A brief guide",description:"In this brief guide, we compare some concept of the two most popular CSS layout methods - Grid and Flexbox.",slug:"css-grid-vs-flexbox",authors:"muhammed_arslan",tags:["css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/social.png",hide_table_of_contents:!1},prevItem:{title:"Using Google Lighthouse to improve app performance",permalink:"/blog/lighthouse-google-chrome"},nextItem:{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid"},relatedPosts:[{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",permalink:"/blog/heroicons-with-tailwind",formattedDate:"September 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.15,date:"2023-09-18T00:00:00.000Z"},{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.475,date:"2022-08-20T00:00:00.000Z"},{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",permalink:"/blog/how-to-add-darkmode-in-ant-design",formattedDate:"February 12, 2022",authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],readingTime:5.045,date:"2022-02-12T00:00:00.000Z"}],authorPosts:[{title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",permalink:"/blog/temporal-date-api",formattedDate:"August 19, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.82,date:"2022-08-19T00:00:00.000Z"},{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.485,date:"2022-10-07T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Control of Child Elements",id:"control-of-child-elements",level:2},{value:"Intrinsic and Extrinsic Sizing",id:"intrinsic-and-extrinsic-sizing",level:2},{value:"Box Alignment",id:"box-alignment",level:2},{value:"Behavior of Flexbox and Grid",id:"behavior-of-flexbox-and-grid",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Browser Support",id:"browser-support",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var m;const g={toc:p};function h(e){var{components:t}=e,n=l(e,["components"]);return(0,i.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Flexbox helps in creating one-dimensional layouts through space distribution and alignment capabilities. Flexbox makes it easier to design responsive layouts without using float or positioning. It has made life much easier for people that use CSS."),(0,i.kt)("p",null,"Grid is a two-dimensional layout model that helps in creating a layout and aligning items in it. It offers a layout system with rows and columns, making it easier to design web pages without using floats and positioning.  "),(0,i.kt)("p",null,"Creating layouts with CSS can be tricky, and it's complicated by the fact that both flexbox and grid are used for designing the page layouts. This guide includes the some differences between flexbox and grid. We'll see how to decide which one of these to use while designing a layout.    "),(0,i.kt)("p",null,"In this guide, we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#control-of-child-elements"},"Control of Child Elements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#intrinsic-and-extrinsic-sizing"},"Intrinsic and Extrinsic Sizing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#box-alignment"},"Box Alignment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#behavior-of-flexbox-and-grid"},"Behavior of Flexbox and Grid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#use-cases"},"Use cases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#browser-support"},"Browser Support"))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fundamentals of CSS layout"),(0,i.kt)("li",{parentName:"ul"},"Basic understanding of CSS flexbox"),(0,i.kt)("li",{parentName:"ul"},"Basic understanding of CSS grid ")),(0,i.kt)("h2",{id:"control-of-child-elements"},"Control of Child Elements"),(0,i.kt)("p",null,"Flexbox gives children a lot of control. You have three child elements in the following example."),(0,i.kt)("p",null,"If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"display: flex"),", it creates a flex layout. You'll notice that you don't have three equal columns. It comes as a default with flexbox when things are calculated for sizing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="parent">\n  <div class="child">\n    <h3>Lorem ipsum</h3>\n    <p>Lorem ipsum dolor sit.</p>\n  </div>\n  <div class="child">\n    <h3>Lorem ipsum</h3>\n    <p>Aestiae voluptatum expedita minima doloribus nemo ipsa vel. Ducimus nam, vel rerum quisquam illum maxime cumque.</p>\n  </div>\n  <div class="child">\n    <h3>Lorem ipsum</h3>\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae molestiae voluptatum expedita minima doloribus nemo ipsa vel. Ducimus nam, </p>\n  </div>\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".parent {\n  display: flex;\n  width: 100%;\n  max-width: 50rem;\n  margin: 0 auto;\n  padding: 1rem;\n  border: 3px solid lime;\n}\n\n.child {\n  padding: 1rem;\n  border: 3px dashed red;\n  background: white;\n}\n")),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-1.png",alt:"Control of Child Elements"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"If you want to make three equal columns, you can't do this in a parent element. You need to do this in the child element as  ",(0,i.kt)("inlineCode",{parentName:"p"},"width:100%")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"flex:1"),". It will create three equal child elements in width."),(0,i.kt)("p",null,"Basically, child elements have control because the parent element delegates it to child elements in a flexbox. If child elements have equal content, they will be equal in size without doing ",(0,i.kt)("inlineCode",{parentName:"p"},"width:100%")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"flex:1"),". "),(0,i.kt)("p",null,"So, we need to be careful while using flexbox."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-2.png",alt:"Control of Child Elements"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Unlike flexbox, a parent is completely in control of a grid. Let's create the above layout using a grid:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".parent {\n  display: grid;\n  width: 100%;\n  max-width: 50rem;\n  margin: 0 auto;\n  padding: 1rem;\n  border: 3px solid lime;\n}\n")),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-3.png",alt:"Control of Child Elements"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Nothing will happen if we change ",(0,i.kt)("inlineCode",{parentName:"p"},"display: flex")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"display: grid")," You have to do something else to actually get things in the right place."),(0,i.kt)("p",null," So, add this line ",(0,i.kt)("inlineCode",{parentName:"p"},"grid-template-columns: 1fr 1fr 1fr")," in parent element. Then, the content will fit into those columns that are created. When you create a grid, children of the grid fit into those cells."),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-4.png",alt:"Control of Child Elements"}),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"intrinsic-and-extrinsic-sizing"},"Intrinsic and Extrinsic Sizing"),(0,i.kt)("p",null,"In CSS, you have intrinsic and extrinsic sizing, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".intrinsic-size {\n    width: auto;\n}\n.extrinsic-size {\n    width: 500px;\n}\n")),(0,i.kt)("p",null,"It's a really important part of how layouts work in CSS. In intrinsic sizing, the browser figures out the size of an element."),(0,i.kt)("p",null," In extrinsic sizing, you declare a specific width. Flexbox relies heavily on the intrinsic sizing of elements while growing and shrinking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="product">\n  <img src="https://assets.codepen.io/308367/betteroutreach-logo.avif">\n  <div class="product__info">\n    <h2>Product One</h2>\n    <p>A collection of the best cold email templates ever sent</p>\n    <div class="product__meta">\n      <div>Free Options</div>\n      <div>Email</div>\n    </div>\n  </div>\n</div>\n\n<div class="product">\n  <img src="https://assets.codepen.io/308367/sliderule-logo.avif">\n  <div class="product__info">\n    <h2>Product two</h2>\n    <p>The no-code rules engine for risk & fraud</p>\n    <div class="product__meta">\n      <div>Free</div>\n      <div>Social Network</div>\n    </div>\n  </div>\n</div>\n\n<div class="product">\n  <img src="https://assets.codepen.io/308367/warmy-logo.avif">\n  <div class="product__info">\n    <h2>Product three</h2>\n    <p>Auto all-in-one tool to make your email channel reliable</p>\n    <div class="product__meta">\n      <div>Free Options</div>\n      <div>Email</div>\n    </div>\n  </div>\n</div>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".product__meta {\n  font-size: 12px;\n  outline: 3px solid red;\n  display: flex;\n  gap: 1rem;\n}\n\n.product__meta > * {\n  border: 3px solid lime;\n}\n\nbody {\n  display: grid;\n  padding: var(--size-9);\n  align-content: start;\n  gap: var(--size-9);\n  background: white;\n}\n\n.product {\n  display: grid;\n  gap: var(--size-5);\n  grid-template-columns: 5rem 1fr;\n}\n\n.product__info {\n  display: grid;\n  grid-template-rows: min-content;\n}\n")),(0,i.kt)("p",null,"Flexbox figures out content size in the first place. When you do ",(0,i.kt)("inlineCode",{parentName:"p"},"display:flex"),", element size is based completely on the size of content. "),(0,i.kt)("p",null,"If you display flex in the product meta, two columns will take width according to the content size. It will help in creating the desired layout. So, dynamic columns can fit into this layout. "),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-5.png",alt:"Control of Child Elements"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Unlike grid, where each column will take full width, or you need to specify the size in the parent element. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".product__meta {\n  font-size: 12px;\n  outline: 3px solid red;\n  // highlight-next-line\n  display: grid;\n  gap: 1rem;\n}\n")),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/pic-6.png",alt:"Control of Child Elements"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Hence, flexbox will provide more flexibility in this case. Grid helps in creating a more controlled layout."),(0,i.kt)("h2",{id:"box-alignment"},"Box Alignment"),(0,i.kt)("p",null,"Let's not forget about box alignment. Because flexbox holds the ability to align elements very easily. Before flexbox, it was very difficult to align items properly. Different hacks and tricks were used to align elements in the desired layout."),(0,i.kt)("p",null," Flexbox can be used in a grid layout as well. Whenever you need to create a layout that has specific alignment or space distribution, you might want to go for a flexbox."),(0,i.kt)("h2",{id:"behavior-of-flexbox-and-grid"},"Behavior of Flexbox and Grid"),(0,i.kt)("p",null,"Grid is useful in creating more complex and organized layouts. When you design the layout of a page, you can use a grid for the combined layout. Whereas flexbox helps in creating individual elements. "),(0,i.kt)("p",null,"Since flexbox is based on intrinsic sizing, you can use flexbox when the layout depends upon the content. On the other hand, the grid is useful when content depends upon the layout. "),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Flexbox can be a great to help align content and move blocks around and great option for app components and small-scale layouts, while grid can be more appropriate when you have large areas layouts."),(0,i.kt)("p",null,"Flex directions allows you to vertically or horizontally align your content, which is useful when developing reverse rows or columns."),(0,i.kt)("p",null,"Use flexbox:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have items in a single dimension either in a row or a column."),(0,i.kt)("li",{parentName:"ul"},"If content shapes the layout, it takes a content-first approach."),(0,i.kt)("li",{parentName:"ul"},"If you want to keep container items independent of each other.   ")),(0,i.kt)("p",null,"Use grid:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the items need to go into rows and columns."),(0,i.kt)("li",{parentName:"ul"},"When layout shapes the content, it takes a layout-first approach. "),(0,i.kt)("li",{parentName:"ul"},"When you want to design the combined layout of the page.")),(0,i.kt)("h2",{id:"browser-support"},"Browser Support"),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/grid.png",alt:"grid"}),(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-30-flex-vs-grid/flex.png",alt:"flex"}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Grids can be your best friend when you need to create the outer layout of a webpage. With these, complex designs are not out-of reach and responsive too!"),(0,i.kt)("p",null,"To summarise, when you should use flexbox and when you should use the grid. Although you can design any layout with both flexbox and grid, you need to follow a path of least resistance.   "),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))))}h.isMDXComponent=!0}}]);