"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"How to implement a date picker in React",description:"We\u2019ll show you how to implement a date picker using the \u2018react-datepicker\u2019 library and how to customize the functionality for your use case.",slug:"react-date-picker",authors:"irakli_tchigladze",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/social.png",hide_table_of_contents:!1},i=void 0,p={permalink:"/blog/react-date-picker",source:"@site/blog/2023-05-03-react-date-picker.md",title:"How to implement a date picker in React",description:"We\u2019ll show you how to implement a date picker using the \u2018react-datepicker\u2019 library and how to customize the functionality for your use case.",date:"2023-05-03T00:00:00.000Z",formattedDate:"May 3, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:12.08,hasTruncateMarker:!1,authors:[{name:"Irakli Tchigladze",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"irakli_tchigladze"}],frontMatter:{title:"How to implement a date picker in React",description:"We\u2019ll show you how to implement a date picker using the \u2018react-datepicker\u2019 library and how to customize the functionality for your use case.",slug:"react-date-picker",authors:"irakli_tchigladze",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use Material UI Modal",permalink:"/blog/material-ui-modal"},nextItem:{title:"Adding PDF Renderer",permalink:"/blog/refine-react-invoice-generator-5"},relatedPosts:[{title:"Framer Motion examples for React animations",description:"Framer Motion tutorial - Create text and image animations in React apps easily.",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.285,date:"2022-09-01T00:00:00.000Z"},{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"June 12, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:15.27,date:"2023-06-12T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.625,date:"2023-07-02T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Create a Datepicker",id:"create-a-datepicker",level:2},{value:"Setup",id:"setup",level:3},{value:"Create a basic date picker",id:"create-a-basic-date-picker",level:3},{value:"Implement Common Features",id:"implement-common-features",level:2},{value:"Set initial date",id:"set-initial-date",level:3},{value:"Select a range of dates",id:"select-a-range-of-dates",level:3},{value:"Select range within one component",id:"select-range-within-one-component",level:4},{value:"Using two separate components",id:"using-two-separate-components",level:4},{value:"Select time",id:"select-time",level:3},{value:"Conditionally disable dates",id:"conditionally-disable-dates",level:3},{value:"Other options",id:"other-options",level:3},{value:"className",id:"classname",level:4},{value:"calendarClassName",id:"calendarclassname",level:4},{value:"highlightDates",id:"highlightdates",level:4},{value:"isClearable",id:"isclearable",level:4},{value:"locale",id:"locale",level:4},{value:"dayClassName",id:"dayclassname",level:4},{value:"timeClassName",id:"timeclassname",level:4},{value:"dateFormat",id:"dateformat",level:4},{value:"minDate",id:"mindate",level:4},{value:"excludeDates",id:"excludedates",level:4},{value:"includeDates",id:"includedates",level:4},{value:"excludeDateIntervals",id:"excludedateintervals",level:4},{value:"includeDateIntervals",id:"includedateintervals",level:4},{value:"disabled",id:"disabled",level:4},{value:"shouldCloseOnSelect",id:"shouldcloseonselect",level:4},{value:"showMonthDropdown and showYearDropdown",id:"showmonthdropdown-and-showyeardropdown",level:4},{value:"showMonthYearPicker",id:"showmonthyearpicker",level:4},{value:"monthsShown",id:"monthsshown",level:4},{value:"Conclusion",id:"conclusion",level:2}],u=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const h={toc:d};function k(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Having a date picker that is simple, intuitive and consistent may be necessary to ensure users have a good experience using your web application."),(0,n.kt)("p",null,"Building a date picker in React is more difficult than it looks. Even a simple calendar that lets users choose a date is fairly difficult to build from scratch. Task gets especially difficult when you want to include advanced features like selecting a range of dates."),(0,n.kt)("p",null,"Fortunately, the React community has come up with various libraries that provide easy-to-use, customizable, and consistent date pickers for your projects."),(0,n.kt)("p",null,"In this article, we\u2019ll show you how to implement a date picker using the \u2018react-datepicker\u2019 library and how to customize the date picker\u2019s appearance and functionality for your use case."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-datepicker"},(0,n.kt)("inlineCode",{parentName:"a"},"react-datepicker"))," is a lightweight library with a lot of features."),(0,n.kt)("p",null,"To build a simple React date picker, all you need to do is import the custom component and set two props. Advanced features require only a little more time. "),(0,n.kt)("h2",{id:"create-a-datepicker"},"Create a Datepicker"),(0,n.kt)("h3",{id:"setup"},"Setup"),(0,n.kt)("p",null,"In this article, we\u2019ll use ",(0,n.kt)("strong",{parentName:"p"},"react-datepicker")," in a live environment CodeSandbox. "),(0,n.kt)("p",null,"You can use npm to install the package in an existing project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-datepicker\n")),(0,n.kt)("p",null,"Once installed, import the custom ",(0,n.kt)("strong",{parentName:"p"},"DatePicker")," component in the file where you want to use it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import DatePicker from 'react-datepicker'\n")),(0,n.kt)("p",null,"You also need to import CSS styles to display elements in all their beauty."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import 'react-datepicker/dist/react-datepicker.css'\n")),(0,n.kt)("h3",{id:"create-a-basic-date-picker"},"Create a basic date picker"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"DatePicker")," is a controlled component. In other words, the selected date is stored in the state and the date picker gets its value from the state. So we need to initialize the state. "),(0,n.kt)("p",null,"In class components, we initialize a state object and use the ",(0,n.kt)("strong",{parentName:"p"},"setState()")," method to update it."),(0,n.kt)("p",null,"In functional components, we have the ",(0,n.kt)("strong",{parentName:"p"},"useState()")," hook that creates a state variable and the function to update it. In this case, a state variable will hold the selected date."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"react-datepicker")," library exports a custom component by default. When you import it, you can choose any name you want. In this case, we named it ",(0,n.kt)("strong",{parentName:"p"},"DatePicker"),"."),(0,n.kt)("p",null,"Every ",(0,n.kt)("strong",{parentName:"p"},"DatePicker")," component must have at least two props to work:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"selected")," - set to the selected date, stored in the state. It is similar to ",(0,n.kt)("strong",{parentName:"li"},"value")," prop on ",(0,n.kt)("inlineCode",{parentName:"li"},"**<input>**")," elements. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"onChange")," - set to a callback function with one argument, which stands for the date selected by the user. The function body should call the updater function returned by the ",(0,n.kt)("strong",{parentName:"li"},"useState")," hook to update the state. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  return (\n    <div>\n      <DatePicker selected={date} onChange={(date) => setDate(date)} />\n    </div>\n  );\n}\n')),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/first.gif",alt:"react date picker"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"As simple as that, users can select a date. Try it yourself on ",(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/white-fast-3ewybj?file=/src/App.js"},"CodeSandbox"),"."),(0,n.kt)("h2",{id:"implement-common-features"},"Implement Common Features"),(0,n.kt)("h3",{id:"set-initial-date"},"Set initial date"),(0,n.kt)("p",null,"In class components, you set a default date when the state object is initialized. "),(0,n.kt)("p",null,"In functional components, we can set a default date by passing a date value as an argument to the ",(0,n.kt)("strong",{parentName:"p"},"useState()")," hook. For example, ",(0,n.kt)("strong",{parentName:"p"},"useState(new Date())")," will set it to today (the current date). "),(0,n.kt)("p",null,"Sometimes it\u2019s better to have no default date at all. You can add a placeholder text to help users pick the right date. Simply set the ",(0,n.kt)("strong",{parentName:"p"},"placeholderText")," prop on the custom component."),(0,n.kt)("p",null,"When the user picks a date, the ",(0,n.kt)("strong",{parentName:"p"},"onChange")," event handler will update the state."),(0,n.kt)("h3",{id:"select-a-range-of-dates"},"Select a range of dates"),(0,n.kt)("p",null,"Selecting a range of dates is a very common and useful feature - for booking accommodation, a round-trip, or any other purpose."),(0,n.kt)("h4",{id:"select-range-within-one-component"},"Select range within one component"),(0,n.kt)("p",null,"By default, one DatePicker component selects a single date value."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  return (\n    <div>\n      <DatePicker selected={date} onChange={(date) => setDate(date)} />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"You can modify the event handler to select a range of dates. The function will accept an array of two values - ",(0,n.kt)("strong",{parentName:"p"},"startDate")," and ",(0,n.kt)("strong",{parentName:"p"},"endDate")," and select the dates between them."),(0,n.kt)("p",null,"So far we\u2019ve only created one state variable. So our component is not equipped to store two dates. We need to create new ",(0,n.kt)("strong",{parentName:"p"},"startDate")," and ",(0,n.kt)("strong",{parentName:"p"},"endDate")," state variables to store the beginning and end of the range of dates. We\u2019ll also create functions to update them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  const [startDate, setStartDate] = useState()\n  const [endDate, setEndDate] = useState()\n  return (\n    <div>\n      <DatePicker selected={date} onChange={(date) => setDate(date)} />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"We\u2019ll need to change the event handler as well. When users select a range of values, the argument passed to the function won\u2019t be a single value - but an array of two dates."),(0,n.kt)("p",null,"We need to destructure the array to get both the start and end of the range. Then we can update their corresponding state variables."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  const [startDate, setStartDate] = useState();\n  const [endDate, setEndDate] = useState();\n\n  const handleChange = (range) => {\n    const [startDate, endDate] = range;\n    setStartDate(startDate);\n    setEndDate(endDate);\n  };\n\n  return (\n    <div>\n      <DatePicker selected={date} onChange={handleChange} />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"When selecting a single date, it was possible to write an inline event handler, like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  return (\n    <div>\n      <DatePicker selected={date} onChange={(date) => setDate(date)} />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"Selecting a range of dates makes ",(0,n.kt)("strong",{parentName:"p"},"handleChange")," a bit more complex, so it can\u2019t be an inline event handler. You\u2019ll need to define it outside the tsx and reference it as the value of the ",(0,n.kt)("strong",{parentName:"p"},"onChange")," prop."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  const [startDate, setStartDate] = useState();\n  const [endDate, setEndDate] = useState();\n\n  const handleChange = (range) => {\n    const [startDate, endDate] = range;\n    setStartDate(startDate);\n    setEndDate(endDate);\n  };\n\n  return (\n    <div>\n      <DatePicker selected={date} onChange={handleChange} />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"Next, we need to add ",(0,n.kt)("strong",{parentName:"p"},"startDate"),", ",(0,n.kt)("strong",{parentName:"p"},"endDate"),", and ",(0,n.kt)("strong",{parentName:"p"},"selectsRange")," props to the custom component."),(0,n.kt)("p",null,"Set ",(0,n.kt)("strong",{parentName:"p"},"startDate")," and ",(0,n.kt)("strong",{parentName:"p"},"endDate")," props to their respective state values. ",(0,n.kt)("strong",{parentName:"p"},"selectsRange")," is simply a boolean prop."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  const [startDate, setStartDate] = useState();\n  const [endDate, setEndDate] = useState();\n\n  const handleChange = (range) => {\n    const [startDate, endDate] = range;\n    setStartDate(startDate);\n    setEndDate(endDate);\n  };\n\n  return (\n    <div>\n      <DatePicker\n        selected={startDate}\n        onChange={onChange}\n        startDate={startDate}\n        endDate={endDate}\n        selectsRange\n    />\n    </div>\n  );\n}\n')),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/select_range%20.gif",alt:"react date picker"}),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"using-two-separate-components"},"Using two separate components"),(0,n.kt)("p",null,"You can also use two DatePicker components to select the range. One component will select the start, and another the end."),(0,n.kt)("p",null,"We still need to create state variables ",(0,n.kt)("strong",{parentName:"p"},"startDate")," and ",(0,n.kt)("strong",{parentName:"p"},"endDate"),"."),(0,n.kt)("p",null,"Let\u2019s say the first component selects a start date. Set the ",(0,n.kt)("strong",{parentName:"p"},"selectsStart")," prop to specify its purpose. Set ",(0,n.kt)("strong",{parentName:"p"},"selected")," and ",(0,n.kt)("strong",{parentName:"p"},"startDate")," props to values from the state, and ",(0,n.kt)("strong",{parentName:"p"},"onChange")," to a simple handler that updates the ",(0,n.kt)("strong",{parentName:"p"},"startDate")," state variable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  const [startDate, setStartDate] = useState();\n  const [endDate, setEndDate] = useState();\n\n  return (\n    <div>\n      <DatePicker\n        selectsStart\n        selected={startDate}\n        onChange={date => setStartDate(date)}\n        startDate={startDate}\n      />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"Next, we need a second ",(0,n.kt)("strong",{parentName:"p"},"DatePicker")," component with a ",(0,n.kt)("strong",{parentName:"p"},"selectsEnd")," prop to specify that it selects the end of the range. "),(0,n.kt)("p",null,"The component should get its values from the state. So ",(0,n.kt)("strong",{parentName:"p"},"selected")," and ",(0,n.kt)("strong",{parentName:"p"},"endDate")," props should be set to the ",(0,n.kt)("strong",{parentName:"p"},"endDate")," state variable.\nThe ",(0,n.kt)("strong",{parentName:"p"},"onChange")," function should update the ",(0,n.kt)("strong",{parentName:"p"},"endDate")," state variable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n  const [startDate, setStartDate] = useState();\n  const [endDate, setEndDate] = useState();\n\n  return (\n    <div>\n      <DatePicker\n        selectsStart\n        selected={startDate}\n        onChange={date => setStartDate(date)}\n        startDate={startDate}\n      />\n      <DatePicker\n        selectsEnd\n        selected={endDate}\n        onChange={date => setEndDate(date)}\n        endDate={endDate}\n        startDate={startDate}\n        minDate={startDate}\n     />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"The React date picker that selects the end should have a ",(0,n.kt)("strong",{parentName:"p"},"startDate")," prop as well. "),(0,n.kt)("p",null,"Also, have the ",(0,n.kt)("strong",{parentName:"p"},"minDate")," prop set to the start date. This will ensure that users can\u2019t select an end date that comes earlier than the start date."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/two-datepickers.png",alt:"react date picker"}),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"select-time"},"Select time"),(0,n.kt)("p",null,"Allow users to select both date and time by adding the ",(0,n.kt)("strong",{parentName:"p"},"showTimeSelect")," prop to your DatePicker."),(0,n.kt)("p",null,"This could be a useful use case for booking appointments or meetings. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"showTimeSelect")," will allow users to select time intervals (9:00, 9:30, 10:00, etc). Set the ",(0,n.kt)("strong",{parentName:"p"},"timeIntervals")," prop to show 15-minute or 5-minute intervals instead."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"minTime")," and ",(0,n.kt)("strong",{parentName:"p"},"maxTime")," props allow you to disable times before or after a certain time."),(0,n.kt)("p",null,"For example, set ",(0,n.kt)("strong",{parentName:"p"},"minTime")," to 12:30, and ",(0,n.kt)("strong",{parentName:"p"},"maxTime")," to 19:00. Users will only be able to select times from 12:30 to 7 pm."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n\n  return (\n    <div>\n      <DatePicker\n        showTimeSelect\n        minTime={new Date(0, 0, 0, 12, 30)}\n        maxTime={new Date(0, 0, 0, 19, 0)}\n        selected={date}\n        onChange={date => setDate(date)}\n      />\n    </div>\n  );\n}\n')),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/time-mintime.png",alt:"react date picker"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"Set the ",(0,n.kt)("strong",{parentName:"p"},"dateFormat")," prop to display both date and time within the field."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n\n  return (\n    <div>\n      <DatePicker\n        showTimeSelect\n        minTime={new Date(0, 0, 0, 12, 30)}\n        maxTime={new Date(0, 0, 0, 19, 0)}\n        selected={date}\n        onChange={date => setDate(date)}\n        dateFormat="MMMM d, yyyy h:mmaa"\n      />\n    </div>\n  );\n}\n')),(0,n.kt)("p",null,"If you want users to enter their own time instead of selecting it, replace the ",(0,n.kt)("strong",{parentName:"p"},"showTimeSelect")," with the ",(0,n.kt)("strong",{parentName:"p"},"showTimeInput")," boolean prop."),(0,n.kt)("hr",null),(0,n.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"conditionally-disable-dates"},"Conditionally disable dates"),(0,n.kt)("p",null,"Use ",(0,n.kt)("strong",{parentName:"p"},"filterDate")," prop to conditionally disable dates in the calendar. Set its value to a callback function that returns a condition. "),(0,n.kt)("p",null,"Users will be able to select only dates that meet the condition. Dates that do not meet the condition will be disabled. "),(0,n.kt)("p",null,"For example, here\u2019s a function that returns ",(0,n.kt)("strong",{parentName:"p"},"false")," for dates less than (earlier than) today, and ",(0,n.kt)("strong",{parentName:"p"},"true")," for higher (later) dates."),(0,n.kt)("p",null,"You can similarly check if the date is a weekend, a weekday, or a holiday, or disable dates based on any other condition."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport DatePicker from "react-datepicker";\n\nexport default function App() {\n  const [date, setDate] = useState(new Date());\n\n  const weekend = (date) => new Date() < date;\n\n  return (\n    <div>\n      <DatePicker\n        showTimeSelect\n        filterDate={weekend}\n        selected={date}\n        onChange={date => setDate(date)}\n      />\n    </div>\n  );\n}\n')),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/disable_dates.png",alt:"react date picker"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"For example, you might want to disable past dates so users can\u2019t select them when booking accommodation or flights."),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("strong",{parentName:"p"},"minDate")," and ",(0,n.kt)("strong",{parentName:"p"},"maxDate")," props to disable all dates before or after a certain date. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"filterTime")," prop allows you to conditionally disable time values. For example, disable out-of-office hours."),(0,n.kt)("h3",{id:"other-options"},"Other options"),(0,n.kt)("p",null,"Let\u2019s see how to implement various other features."),(0,n.kt)("h4",{id:"classname"},"className"),(0,n.kt)("p",null,"You can set ",(0,n.kt)("strong",{parentName:"p"},"className")," to customize the appearance of the custom DatePicker component."),(0,n.kt)("h4",{id:"calendarclassname"},"calendarClassName"),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("strong",{parentName:"p"},"calendarClassName")," prop to customize the appearance of the calendar itself. Increase font size, padding, background color, etc."),(0,n.kt)("h4",{id:"highlightdates"},"highlightDates"),(0,n.kt)("p",null,"Set the ",(0,n.kt)("strong",{parentName:"p"},"highlightDates")," prop to an array of date values that should be highlighted."),(0,n.kt)("h4",{id:"isclearable"},"isClearable"),(0,n.kt)("p",null,"Simply add the ",(0,n.kt)("strong",{parentName:"p"},"isClearable")," prop to the date picker to display a button to reset the selected date. "),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/is_clearable.png",alt:"react date picker"}),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"locale"},"locale"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("strong",{parentName:"p"},"locale")," prop to specify the date locale. For example, use English (British) instead of the default US locale."),(0,n.kt)("h4",{id:"dayclassname"},"dayClassName"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"dayClassName")," prop allows you to customize the appearance of each day in the calendar. "),(0,n.kt)("p",null,"You can pass it a callback function that returns a ternary operator. ",(0,n.kt)("strong",{parentName:"p"},"dayClassName")," will apply the className only if the day meets a condition."),(0,n.kt)("h4",{id:"timeclassname"},"timeClassName"),(0,n.kt)("p",null,"This prop allows you to customize the appearance of time selections."),(0,n.kt)("p",null,"Set the ",(0,n.kt)("strong",{parentName:"p"},"timeClassName")," prop to a callback function that returns a ternary operator. It will apply the ",(0,n.kt)("strong",{parentName:"p"},"className")," value if the time meets a condition."),(0,n.kt)("h4",{id:"dateformat"},"dateFormat"),(0,n.kt)("p",null,"The value of the ",(0,n.kt)("strong",{parentName:"p"},"dateFormat")," prop specifies the format of date values."),(0,n.kt)("h4",{id:"mindate"},"minDate"),(0,n.kt)("p",null,"Set the minimum date, all dates earlier than ",(0,n.kt)("strong",{parentName:"p"},"minDate")," will be disabled. "),(0,n.kt)("h4",{id:"excludedates"},"excludeDates"),(0,n.kt)("p",null,"Set ",(0,n.kt)("strong",{parentName:"p"},"excludeDates")," prop to an array of date values that should be excluded. All other dates will be included."),(0,n.kt)("h4",{id:"includedates"},"includeDates"),(0,n.kt)("p",null,"Set ",(0,n.kt)("strong",{parentName:"p"},"includeDates")," prop to an array of date values that should be included. All other dates will be excluded."),(0,n.kt)("h4",{id:"excludedateintervals"},"excludeDateIntervals"),(0,n.kt)("p",null,"Set the value of the ",(0,n.kt)("strong",{parentName:"p"},"excludeDateIntervals")," prop to an array of objects with two properties: ",(0,n.kt)("strong",{parentName:"p"},"start")," and ",(0,n.kt)("strong",{parentName:"p"},"end"),".  The array can have multiple intervals. All dates outside of intervals will be included."),(0,n.kt)("h4",{id:"includedateintervals"},"includeDateIntervals"),(0,n.kt)("p",null,"Just like the previous prop, the value of ",(0,n.kt)("strong",{parentName:"p"},"includeDateIntervals")," should be an array of objects (intervals) with two properties: ",(0,n.kt)("strong",{parentName:"p"},"start")," and ",(0,n.kt)("strong",{parentName:"p"},"end"),". "),(0,n.kt)("p",null,"Date intervals specified in the array will be included. All dates outside of these intervals will be disabled."),(0,n.kt)("h4",{id:"disabled"},"disabled"),(0,n.kt)("p",null,"Add this boolean prop to disable your datepicker. It works similarly to HTML elements\u2019 ",(0,n.kt)("strong",{parentName:"p"},"disabled")," attribute."),(0,n.kt)("h4",{id:"shouldcloseonselect"},"shouldCloseOnSelect"),(0,n.kt)("p",null,"By default, the calendar closes when the user selects a date. If you want the calendar to stay open, set the ",(0,n.kt)("strong",{parentName:"p"},"shouldCloseOnSelect")," prop to true. "),(0,n.kt)("h4",{id:"showmonthdropdown-and-showyeardropdown"},"showMonthDropdown and showYearDropdown"),(0,n.kt)("p",null,"Sometimes users need to select dates far ahead of time. ",(0,n.kt)("strong",{parentName:"p"},"showMonthDropdown")," and ",(0,n.kt)("strong",{parentName:"p"},"showYearDropdown")," props allow users to select dates from specific months or years in the future."),(0,n.kt)("h4",{id:"showmonthyearpicker"},"showMonthYearPicker"),(0,n.kt)("p",null,"Allow users to pick months and years instead of specific dates."),(0,n.kt)("h4",{id:"monthsshown"},"monthsShown"),(0,n.kt)("p",null,"By default, a date picker shows a calendar where users can select a date. Use the ",(0,n.kt)("strong",{parentName:"p"},"monthsShown")," prop to specify the number of months that should display simultaneously. For example, setting ",(0,n.kt)("strong",{parentName:"p"},"monthsShown")," to 3 will allow users to select dates (or ranges) from 90 days."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-03-react-date-picker/monthsshown.png",alt:"react date picker"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://discord.gg/refine"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Date pickers are sometimes a web application\u2019s most important feature. In this article, we showed how to create basic React date picker using ",(0,n.kt)("strong",{parentName:"p"},"react-datepicker")," package, implementing advanced features and their possible use cases."),(0,n.kt)("p",null,"Hopefully our article has helped you make best use of the \u2018react-datepicker\u2019 package to create datepickers in a short time."))}k.isMDXComponent=!0}}]);