"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30836],{77577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>p,toc:()=>c});t(67294);var r=t(3905),a=t(53787),o=t(50551);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const m={id:"faq",title:"FAQ"},u=void 0,p={unversionedId:"faq",id:"faq",title:"FAQ",description:"How can I change the form data before submitting it to the API?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/faq.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1691594795,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"faq",title:"FAQ"},sidebar:"someSidebar",previous:{title:"Sign in with Ethereum Web3 Wallet",permalink:"/docs/advanced-tutorials/web3/ethereum-signin"},next:{title:"Contributing",permalink:"/docs/contributing"}},d={},c=[{value:"How can I change the form data before submitting it to the API?",id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api",level:2},{value:"How can I refetch data?",id:"how-can-i-refetch-data",level:2},{value:"How can I request an API with nested route?",id:"how-can-i-request-an-api-with-nested-route",level:2},{value:"How can I ensure a query is only run after a certain variable is available and not on load?",id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load",level:2},{value:"Can I work with JavaScript?",id:"can-i-work-with-javascript",level:2},{value:"How I can override specific function of Data Providers?",id:"how-i-can-override-specific-function-of-data-providers",level:2},{value:"Why are API calls triggering twice",id:"why-are-api-calls-triggering-twice",level:2},{value:"How can I add an item to the Sider component?",id:"how-can-i-add-an-item-to-the-sider-component",level:2},{value:"How can I remove GitHub Banner?",id:"how-can-i-remove-github-banner",level:2},{value:"Module &quot;X&quot; has no exported member &quot;Y&quot;",id:"module-x-has-no-exported-member-y",level:2},{value:"How to use React Query DevTools with refine?",id:"how-to-use-react-query-devtools-with-refine",level:2}],h={toc:c};function f(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)("wrapper",s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api"},"How can I change the form data before submitting it to the API?"),(0,r.kt)("p",null,"You may need to modify the form data before it is sent to the API."),(0,r.kt)("p",null,"For example, Let's send the values we received from the user in two separate inputs, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"surname"),", to the API as ",(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"."),(0,r.kt)(a.Z,{defaultValue:"core",values:[{label:"Core Form",value:"core"},{label:"Ant Design Form",value:"antd"},{label:"React Hook Form",value:"react-hook-form"},{label:"Material UI + React Hook Form",value:"mui-react-hook-form"},{label:"Chakra UI + React Hook Form",value:"chakra-ui-react-hook-form"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"core",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useForm } from "@refinedev/core";\n\nexport const UserCreate: React.FC = () => {\n    const [name, setName] = useState();\n    const [surname, setSurname] = useState();\n\n    const { onFinish } = useForm();\n\n    const onSubmit = (e) => {\n        e.preventDefault();\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            fullName: fullName,\n            name,\n            surname,\n        });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <input onChange={(e) => setName(e.target.value)} />\n            <input onChange={(e) => setSurname(e.target.value)} />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n'))),(0,r.kt)(o.Z,{value:"antd",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm } from "@refinedev/antd";\nimport { Form, Input } from "antd";\n\nexport const UserCreate: React.FC = () => {\n    const { formProps } = useForm();\n\n    return (\n        <Form\n            {...formProps}\n            onFinish={(values) => {\n                const { name, surname } = values;\n                const fullName = `${name} ${surname}`;\n\n                return (\n                    formProps.onFinish &&\n                    formProps.onFinish({\n                        ...values,\n                        fullName,\n                    })\n                );\n            }}\n        >\n            <Form.Item label="Name" name="name">\n                <Input />\n            </Form.Item>\n            <Form.Item label="Surname" name="surname">\n                <Input />\n            </Form.Item>\n        </Form>\n    );\n};\n'))),(0,r.kt)(o.Z,{value:"react-hook-form",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm } from "@refinedev/react-hook-form";\n\nexport const UserCreate: React.FC = () => {\n    const {\n        refineCore: { onFinish, formLoading },\n        register,\n        handleSubmit,\n    } = useForm();\n\n    const handleSubmitPostCreate = (values) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <form onSubmit={handleSubmit(handleSubmitPostCreate)}>\n            <input {...register("name")} />\n            <input {...register("surname")} />\n        </form>\n    );\n};\n'))),(0,r.kt)(o.Z,{value:"mui-react-hook-form",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Button, Box, TextField } from "@mui/material";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        refineCore: { onFinish },\n        register,\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <Box component="form" onSubmit={handleSubmit(handleSubmitPostCreate)}>\n            <TextField\n                {...register("name", {\n                    required: "This field is required",\n                })}\n                name="name"\n                label="Name"\n                error={!!errors.name}\n                helperText={errors.name?.message}\n            />\n            <TextField\n                {...register("surname", {\n                    required: "This field is required",\n                })}\n                name="surname"\n                label="Surname"\n                error={!!errors.surname}\n                helperText={errors.surname?.message}\n            />\n            <Button type="submit">Submit</Button>\n        </Box>\n    );\n};\n')),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/create/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"<Create>"))," component, you can override the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"saveButtonProps"))," prop to modify the form data before submitting it to the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { Create } from "@refinedev/mui";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Button, Box, TextField } from "@mui/material";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        saveButtonProps,\n        refineCore: { onFinish },\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <Create\n            saveButtonProps={{\n                ...saveButtonProps,\n                onClick: handleSubmit(handleSubmitForm),\n            }}\n        >\n            <Box component="form">\n                <TextField\n                    {...register("name", {\n                        required: "This field is required",\n                    })}\n                    name="name"\n                    label="Name"\n                    error={!!errors.name}\n                    helperText={errors.name?.message}\n                />\n                <TextField\n                    {...register("surname", {\n                        required: "This field is required",\n                    })}\n                    name="surname"\n                    label="Surname"\n                    error={!!errors.surname}\n                    helperText={errors.surname?.message}\n                />\n            </Box>\n        </Create>\n    );\n};\n'))),(0,r.kt)(o.Z,{value:"chakra-ui-react-hook-form",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { useForm } from "@refinedev/react-hook-form";\nimport {\n    FormControl,\n    FormErrorMessage,\n    FormLabel,\n    Input,\n    Button,\n} from "@chakra-ui/react";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        refineCore: { onFinish },\n        register,\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <form onSubmit={handleSubmit(handleSubmitPostCreate)}>\n            <FormControl mb="3" isInvalid={!!errors?.name}>\n                <FormLabel>Name</FormLabel>\n                <Input\n                    id="name"\n                    type="text"\n                    {...register("name", { required: "Name is required" })}\n                />\n                <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>\n            </FormControl>\n            <FormControl mb="3" isInvalid={!!errors?.surname}>\n                <FormLabel>Surname</FormLabel>\n                <Input\n                    id="surname"\n                    type="text"\n                    {...register("surname", {\n                        required: "Surname is required",\n                    })}\n                />\n                <FormErrorMessage>\n                    {`${errors.title?.surname}`}\n                </FormErrorMessage>\n                <Button type="submit">Submit</Button>\n            </FormControl>\n        </form>\n    );\n};\n')),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/basic-views/create/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"<Create>"))," component, you can override the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"saveButtonProps"))," prop to modify the form data before submitting it to the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { Create } from "@refinedev/chakra-ui";\nimport { useForm } from "@refinedev/react-hook-form";\nimport {\n    FormControl,\n    FormErrorMessage,\n    FormLabel,\n    Input,\n    Button,\n} from "@chakra-ui/react";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        saveButtonProps,\n        refineCore: { onFinish },\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <Create\n            saveButtonProps={{\n                ...saveButtonProps,\n                onClick: handleSubmit(handleSubmitForm),\n            }}\n        >\n            <form>\n                <FormControl mb="3" isInvalid={!!errors?.name}>\n                    <FormLabel>Name</FormLabel>\n                    <Input\n                        id="name"\n                        type="text"\n                        {...register("name", { required: "Name is required" })}\n                    />\n                    <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>\n                </FormControl>\n                <FormControl mb="3" isInvalid={!!errors?.surname}>\n                    <FormLabel>Surname</FormLabel>\n                    <Input\n                        id="surname"\n                        type="text"\n                        {...register("surname", {\n                            required: "Surname is required",\n                        })}\n                    />\n                    <FormErrorMessage>\n                        {`${errors.title?.surname}`}\n                    </FormErrorMessage>\n                </FormControl>\n            </form>\n        </Create>\n    );\n};\n')))),(0,r.kt)("h2",{id:"how-can-i-refetch-data"},"How can I refetch data?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," automatically invalidates the affected resources after mutations. However, in some cases you may want to refetch manually."),(0,r.kt)(a.Z,{defaultValue:"refetch",values:[{label:"React Query Refetch",value:"refetch"},{label:"useInvalidate Hook",value:"useinvalidate"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"refetch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useForm, useShow } from "@refinedev/core";\n\n// All "data" related hooks provided by refine can use queryResult\' refetch function\nconst { tableQueryResult: { refetch } } = useTable();\nconst { queryResult: { refetch } } = useForm();\n...\n...\nconst { queryResult: { refetch } } = useShow();\n...\n...\n'))),(0,r.kt)(o.Z,{value:"useinvalidate",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useInvalidate } from "@refinedev/core";\n\nconst invalidate = useInvalidate();\n\n// To invalidate the list and many states of the Posts resource\ninvalidate({\n    resource: "posts",\n    invalidates: ["list", "many"],\n});\n\n// To invalidate the state of a Posts with an id of 1\ninvalidate({\n    resource: "posts",\n    invalidates: ["detail"],\n    id: 1,\n});\n\n// To invalidate the list and many states of the Posts resource of the dataProvider named "second-data-provider"\ninvalidate({\n    resource: "posts",\n    dataProviderName: "second-data-provider",\n    invalidates: ["list"],\n});\n\n// To invalidate all states of dataprovider named "second-data-provider"\ninvalidate({\n    dataProviderName: "second-data-provider",\n    invalidates: ["all"],\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useInvalidate hook documentation for more information. \u2192")))),(0,r.kt)("h2",{id:"how-can-i-request-an-api-with-nested-route"},"How can I request an API with nested route?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine"),"'s way of doing this is with the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property on all data hooks. You can think of the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property as the URL."),(0,r.kt)("p",null,"For example, If you want to make a request of the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/1/posts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useOne } from "@refinedev/core";\n\nuseTable({\n    resource: "/users/1/posts",\n});\n')),(0,r.kt)("h2",{id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load"},"How can I ensure a query is only run after a certain variable is available and not on load?"),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," related hooks (",(0,r.kt)("inlineCode",{parentName:"p"},"useMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne"),", etc.) can also accept all ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," options, which allows you to implement dependent queries whereby a query is only run after a certain data is available. This is particularly useful if you want ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," to only run after a certain data is available and not on load."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/dependent-queries"},"Refer to react-query docs on ",(0,r.kt)("strong",{parentName:"a"},"dependent queries")," for more information \u2192 ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suppose you want this query to run after ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched by a preceding query, you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds.length > 0"),". This will ensure that ",(0,r.kt)("inlineCode",{parentName:"li"},"useMany")," is only run after ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    resource: "categories",\n    ids: categoryIds,\n    // highlight-next-line\n    queryOptions: { enabled: categoryIds.length > 0 },\n});\n')),(0,r.kt)("h2",{id:"can-i-work-with-javascript"},"Can I work with JavaScript?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Yes!")," You can work with JavaScript!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/with-javascript"},"Refer to ",(0,r.kt)("strong",{parentName:"a"},"refine JavaScript")," example \u2192 ")),(0,r.kt)("h2",{id:"how-i-can-override-specific-function-of-data-providers"},"How I can override specific function of Data Providers?"),(0,r.kt)("p",null,"In some cases, you may need to override functions of refine data providers. The simplest way to do this is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Spread syntax")),(0,r.kt)("p",null,"For example, Let's override the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," function of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/simple-rest"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/simple-rest")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/simple-rest")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," HTTP method for ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", let's change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," without forking the whole data provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import dataProvider from "@refinedev/simple-rest";\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n    ...simpleRestProvider,\n    update: async ({ resource, id, variables }) => {\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        const { data } = await httpClient.put(url, variables);\n\n        return {\n            data,\n        };\n    },\n};\n\n<Refine dataProvider={myDataProvider} />;\n')),(0,r.kt)("p",null,"What if we want to select ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," on a request basis?"),(0,r.kt)("p",null,"\ud83d\udca5 We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," for this. Remember, ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," can be used in all ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," hooks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// PATCH Request\nuseUpdate({\n    resource: "this-is-patch",\n    id: 1,\n    variables: {\n        foo: "bar",\n    },\n    meta: {\n        httpMethod: "patch",\n    },\n});\n\n// PUT Request\nuseUpdate({\n    resource: "this-is-put",\n    id: 1,\n    variables: {\n        foo: "bar",\n    },\n    meta: {\n        httpMethod: "put",\n    },\n});\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n    ...simpleRestProvider,\n    update: async ({ resource, id, variables, meta }) => {\n        const method = meta.httpMethod ?? "patch";\n\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        const { data } = await httpClient[method](url, variables);\n\n        return {\n            data,\n        };\n    },\n};\n')),(0,r.kt)("h2",{id:"why-are-api-calls-triggering-twice"},"Why are API calls triggering twice"),(0,r.kt)("p",null,"This is the expected behavior if you use ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")),". In this mode, React will render the components twice in development mode to identify unsafe life cycles, unexpected side effects, and legacy or deprecated APIs. It's used for highlighting possible problems."),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>"))," checks are run in development mode only; they do not impact the production build.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")," documentation")," for more information. ","\u2192")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TanStack/query/issues/3633"},"TanStack Query issue")," for more information. ","\u2192")),(0,r.kt)("h2",{id:"how-can-i-add-an-item-to-the-sider-component"},"How can I add an item to the Sider component?"),(0,r.kt)("p",null,"There are three ways to add an extra navigation link to the sider."),(0,r.kt)("p",null,"The first and simplest way is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," component shows the resources whose ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," property is set. So, you can have an extra navigation link by adding a resource with the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\n<Refine\n    ...\n    resources={[\n        {\n            name: "dashboard",\n            list: "/",\n            meta: {\n                label: "Dashboard",\n                icon: "\ud83c\udfe0",\n            },\n        },\n    ]}\n/>;\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"The second way is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," property is a function that receives an object with the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," properties. The ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property is the list of navigation items and the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," property is the logout button."),(0,r.kt)(a.Z,{defaultValue:"antd",values:[{label:"Ant Design",value:"antd"},{label:"Material UI",value:"mui"},{label:"Mantine",value:"mantine"},{label:"Chakra UI",value:"chakra-ui"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"antd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/antd";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,r.kt)(o.Z,{value:"mui",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/mui";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,r.kt)(o.Z,{value:"mantine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/mantine";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,r.kt)(o.Z,{value:"chakra-ui",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/chakra-ui";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n')))),(0,r.kt)("br",null),(0,r.kt)("p",null,"The third way is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command."),(0,r.kt)("p",null,"You can use the command to copy the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component to your project. This will allow you to customize the sider as you want."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli/#swizzle"},"Refer to the swizzle documentation for more information. ","\u2192")),(0,r.kt)("h2",{id:"how-can-i-remove-github-banner"},"How can I remove GitHub Banner?"),(0,r.kt)("p",null,"To remove the GitHub Banner, you need to find and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"<GitHubBanner />")," component from your React application. The specific location of this component may vary depending on the React platform you are using."),(0,r.kt)("p",null,"Here are the locations where you can find and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"<GitHubBanner />")," component based on different React platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vite: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/examples/auth-antd/src/App.tsx#L161"},(0,r.kt)("inlineCode",{parentName:"a"},"src/App.tsx"))),(0,r.kt)("li",{parentName:"ul"},"Next.js: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/examples/with-nextjs/pages/_app.tsx#L47"},(0,r.kt)("inlineCode",{parentName:"a"},"pages/_app.tsx"))),(0,r.kt)("li",{parentName:"ul"},"Remix: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/next/examples/with-remix-antd/app/root.tsx#L37"},(0,r.kt)("inlineCode",{parentName:"a"},"app/root.tsx")))),(0,r.kt)("h2",{id:"module-x-has-no-exported-member-y"},'Module "X" has no exported member "Y"'),(0,r.kt)("p",null,"The error message \"Module 'X' has no exported member 'Y'\" typically occurs when using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," due to its cache system. We are aware of this issue and are actively working on resolving it by updating our peer dependencies with each version release. However, this is still a work in progress. In the meantime, you can resolve this error by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i <module-name>@latest")," command."),(0,r.kt)("p",null,"Here are a couple of examples of reported errors and their corresponding fix:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Error: \"Module '@refinedev/mantine' has no exported member 'HamburgerMenu'\""),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Solution: Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm i @refinedev/mantine@latest")," to install the latest version of the ",(0,r.kt)("inlineCode",{parentName:"li"},"@refinedev/mantine")," module."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Error: \"Module '@refinedev/antd' has no exported member 'ThemedLayoutV2'\""),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Solution: Execute ",(0,r.kt)("inlineCode",{parentName:"li"},"npm i @refinedev/antd@latest")," to install the latest version of the ",(0,r.kt)("inlineCode",{parentName:"li"},"@refinedev/antd")," module.")))),(0,r.kt)("p",null,'By following these steps and updating to the latest module versions, you should be able to resolve the "not exported" error.'),(0,r.kt)("h2",{id:"how-to-use-react-query-devtools-with-refine"},"How to use React Query DevTools with refine?"),(0,r.kt)("p",null,"Until ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),"'s version ",(0,r.kt)("inlineCode",{parentName:"p"},"4.28.2"),", refine had the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query-devtools")," package available by default. However, this package has been removed from the core package and is no longer available by default. If you want to use the dev tools, you can install the package (",(0,r.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query-devtools"),") and use it in your app directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n// highlight-next-line\nimport { ReactQueryDevtools } from "@tanstack/react-query-devtools";\n\nconst App = () => {\n    return (\n        <Refine>\n            ...\n            // highlight-next-line\n            <ReactQueryDevtools />\n        </Refine>\n    );\n};\n')))}f.isMDXComponent=!0}}]);