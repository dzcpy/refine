"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[609],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(36660),o=n(15313),d=["components"],s={id:"useEditableTable",title:"useEditableTable"},p=void 0,m={unversionedId:"api-references/hooks/table/useEditableTable",id:"version-2.xx.xx/api-references/hooks/table/useEditableTable",isDocsHomePage:!1,title:"useEditableTable",description:"useEditeableTable allows you to implement edit feature on the table with ease, on top of all the features that useTable provides.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/table/useEditableTable.md",sourceDirName:"api-references/hooks/table",slug:"/api-references/hooks/table/useEditableTable",permalink:"/docs/2.xx.xx/api-references/hooks/table/useEditableTable",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/table/useEditableTable.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"useEditableTable",title:"useEditableTable"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useTable",permalink:"/docs/2.xx.xx/api-references/hooks/table/useTable"},next:{title:"useCheckboxGroup",permalink:"/docs/2.xx.xx/api-references/hooks/field/useCheckboxGroup"}},u=[{value:"Editing with buttons",id:"editing-with-buttons",children:[],level:2},{value:"Editing by clicking to row",id:"editing-by-clicking-to-row",children:[],level:2},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],c={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useEditeableTable")," allows you to implement edit feature on the table with ease, on top of all the features that ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/hooks/table/useTable"},(0,i.kt)("inlineCode",{parentName:"a"},"useTable"))," provides.\n",(0,i.kt)("inlineCode",{parentName:"p"},"useEditableTable")," return properties that can be used on Ant Desing's ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"<Table>"))," and ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"<Form>"))," components."),(0,i.kt)("h2",{id:"editing-with-buttons"},"Editing with buttons"),(0,i.kt)("p",null,"Let's say that we want to make the ",(0,i.kt)("inlineCode",{parentName:"p"},"Post")," data where we show the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," values a listing page:"),(0,i.kt)("p",null,"This time, to add the edit feature, we have to cover the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Table>")," component with a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Form>"),"component and pass the properties coming from ",(0,i.kt)("inlineCode",{parentName:"p"},"useEditableTable")," to the corresponding components:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import { List, Table, useEditableTable, Form, TextField } from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n// highlight-next-line\n    const { tableProps, formProps } = useEditableTable<IPost>();\n\n    return (\n        <List>\n// highlight-start\n            <Form {...formProps}>\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" />\n                    <Table.Column dataIndex="title" title="Title" />\n                </Table>\n            </Form>\n// highlight-end\n        </List>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"Now lets add a column for edit buttons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import {\n    List,\n    Table,\n    Form,\n// highlight-start\n    Space,\n    Button,\n    SaveButton,\n    EditButton,\n// highlight-end\n    useEditableTable,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const {\n        tableProps,\n        formProps,\n        isEditing,\n// highlight-start\n        saveButtonProps,\n        cancelButtonProps,\n        editButtonProps,\n// highlight-end\n    } = useEditableTable<IPost>();\n\n    return (\n        <List>\n            <Form {...formProps}>\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column key="id" dataIndex="id" title="ID" />\n                    <Table.Column key="title" dataIndex="title" title="Title" />\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n                        key="actions"\n// highlight-start\n                        render={(_text, record) => {\n                            if (isEditing(record.id)) {\n                                return (\n                                    <Space>\n                                        <SaveButton\n                                            {...saveButtonProps}\n                                            size="small"\n                                        />\n                                        <Button\n                                            {...cancelButtonProps}\n                                            size="small"\n                                        >\n                                            Cancel\n                                        </Button>\n                                    </Space>\n                                );\n                            }\n                            return (\n                                <Space>\n                                    <EditButton\n                                        {...editButtonProps(record.id)}\n                                        size="small"\n                                    />\n                                </Space>\n                            );\n                        }}\n// highlight-end\n                    />\n                </Table>\n            </Form>\n        </List>\n    );\n};\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"isEditing")," function that returns from ",(0,i.kt)("inlineCode",{parentName:"p"},"useEditableTable")," lets us check whether a line is currently in edit mode or not."))),(0,i.kt)("br",null),(0,i.kt)("p",null,"For now, our post is not editable yet. If a post is being edited, we must show editable columns inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Form.Item>")," using conditional rendering:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import {\n    List,\n    Table,\n    Form,\n    Space,\n    Button,\n    SaveButton,\n    EditButton,\n// highlight-start\n    Input,\n    TextField,\n// highlight-end\n    useEditableTable,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const {\n        tableProps,\n        formProps,\n        isEditing,\n        saveButtonProps,\n        cancelButtonProps,\n        editButtonProps,\n    } = useEditableTable<IPost>();\n\n    return (\n        <List>\n            <Form {...formProps}>\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column key="id" dataIndex="id" title="ID" />\n                    <Table.Column<IPost>\n                        key="title"\n                        dataIndex="title"\n                        title="Title"\n// highlight-start\n                        render={(value, record) => {\n                            if (isEditing(record.id)) {\n                                return (\n                                    <Form.Item\n                                        name="title"\n                                        style={{ margin: 0 }}\n                                    >\n                                        <Input />\n                                    </Form.Item>\n                                );\n                            }\n                            return <TextField value={value} />;\n                        }}\n// highlight-end\n                    />\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n                        key="actions"\n                        render={(_text, record) => {\n                            if (isEditing(record.id)) {\n                                return (\n                                    <Space>\n                                        <SaveButton\n                                            {...saveButtonProps}\n                                            size="small"\n                                        />\n                                        <Button\n                                            {...cancelButtonProps}\n                                            size="small"\n                                        >\n                                            Cancel\n                                        </Button>\n                                    </Space>\n                                );\n                            }\n                            return (\n                                <Space>\n                                    <EditButton\n                                        {...editButtonProps(record.id)}\n                                        size="small"\n                                    />\n                                </Space>\n                            );\n                        }}\n                    />\n                </Table>\n            </Form>\n        </List>\n    );\n};\n')),(0,i.kt)("p",null,"With this, when a user clicks on the edit button, ",(0,i.kt)("inlineCode",{parentName:"p"},"isEditing(lineId)")," will turn ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for the relevant line. This will also cause ",(0,i.kt)("inlineCode",{parentName:"p"},"<TextInput>")," to show up on the line thats being edited. When the editing is finished, new value can be saved by clicking ",(0,i.kt)("inlineCode",{parentName:"p"},"<SaveButton>"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By giving the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Table.Column>")," component a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," property, you can render the value in that column however you want.\nRefer to ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#Column"},(0,i.kt)("inlineCode",{parentName:"a"},"<Table.Column>"))," documentation for more information."))),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:l.Z,alt:"Editing rows with edit button"})),(0,i.kt)("h2",{id:"editing-by-clicking-to-row"},"Editing by clicking to row"),(0,i.kt)("p",null,"A line with the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," value can be put to edit mode programatically by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setEditId")," function that returns from ",(0,i.kt)("inlineCode",{parentName:"p"},"useEditableTable"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onRow")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Table>")," component can be used to put a line to editing mode when its clicked on. Function given to the ",(0,i.kt)("inlineCode",{parentName:"p"},"onRow")," property is called everytime one of these lines are clicked on, with the information of which line was clicked on."),(0,i.kt)("p",null,"We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"setEditId")," to put a line to edit mode whenever its clicked on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/posts/list.tsx"',title:'"/pages/posts/list.tsx"'},'import {\n    List,\n    Table,\n    Form,\n    Input,\n    TextField,\n    useEditableTable,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n// highlight-start\n    const { tableProps, formProps, isEditing, setEditId } =\n        useEditableTable<IPost>();\n// highlight-end\n\n    return (\n        <List>\n            <Form {...formProps}>\n                <Table\n                    {...tableProps}\n                    key="id"\n// highlight-start\n                    onRow={(record) => ({\n                        onClick: (event: any) => {\n                            if (event.target.nodeName === "TD") {\n                                setEditId && setEditId(record.id);\n                            }\n                        },\n                    })}\n// highlight-end\n                >\n                    <Table.Column key="id" dataIndex="id" title="ID" />\n                    <Table.Column<IPost>\n                        key="title"\n                        dataIndex="title"\n                        title="Title"\n                        render={(value, data: any) => {\n                            if (isEditing(data.id)) {\n                                return (\n                                    <Form.Item\n                                        name="title"\n                                        style={{ margin: 0 }}\n                                    >\n                                        <Input />\n                                    </Form.Item>\n                                );\n                            }\n                            return <TextField value={value} />;\n                        }}\n                    />\n                </Table>\n            </Form>\n        </List>\n    );\n};\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:o.Z,alt:"Row click edit functionality in action"})),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permanentFilter"),(0,i.kt)("td",{parentName:"tr",align:null},"Default and unchangeable filter."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialCurrent"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial page index."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialPageSize"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of records shown per initial number of pages."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialSorter"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial sorting."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#crudsorting"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudSorting")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"initialFilter"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial filtering."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"syncWithLocation"),(0,i.kt)("td",{parentName:"tr",align:null},"Sortings, filters, page index and records shown per page are tracked by browser history."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,i.kt)("td",{parentName:"tr",align:null},"When the search form is submitted, it creates the 'CrudFilters' object. Refer to ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/guides-and-concepts/search/table-search"},"search form")," to learn how to create a search form."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Function"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"useQuery")," options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"}," UseQueryOptions<"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"{ data: TData[]; },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"TError>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,i.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,i.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"off"')))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,i.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,i.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,i.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void")))))),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for params"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TSearchVariables"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for search params"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,i.kt)("h3",{id:"return-values"},"Return values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"searchFormProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"<Form>"))," props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"FormProps<TSearchVariables>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tableProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/table/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"<Table>"))," props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/table/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"TableProps<TData>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tableQueryResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," data: TData[];"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," total: number; },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," TError>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sorter"),(0,i.kt)("td",{parentName:"tr",align:null},"Current sorting state"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#crudsorting"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudSorting")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filters"),(0,i.kt)("td",{parentName:"tr",align:null},"Current filters state"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"form"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"<Form>"))," instance"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,i.kt)("inlineCode",{parentName:"a"},"FormInstance")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"<Form>"))," props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"FormProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cancelButtonProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Props for a cancel button"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ onClick: () => void; }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"editButtonProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Props for an edit button"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ onClick: () => void; }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<T>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by submitting the form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,i.kt)("inlineCode",{parentName:"a"},"UseMutationResult<T>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,i.kt)("td",{parentName:"tr",align:null},"Loading state of form request"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cloneId"),(0,i.kt)("td",{parentName:"tr",align:null},"Record id for clone action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"string"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"number"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setCloneId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cloneId")," setter"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"editId"),(0,i.kt)("td",{parentName:"tr",align:null},"Record id for edit action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"string"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"number"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setEditId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"editId")," setter"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isEditing"),(0,i.kt)("td",{parentName:"tr",align:null},"Check if is editing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(id: string) => boolean"))))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-editable-table-example-7ynu4?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-editable-table-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}k.isMDXComponent=!0},36660:function(e,t,n){t.Z=n.p+"assets/images/edit-button-a9bfb96fddb98429dac5101a29afe491.gif"},15313:function(e,t,n){t.Z=n.p+"assets/images/row-click-edit-1d437b96ebbb5063cd0acda5ce4cf838.gif"}}]);