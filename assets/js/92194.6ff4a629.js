"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92194],{92194:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/antd/src/index.tsx","description":"`useCheckboxGroup` hook allows you to manage an Ant Design {@link https://ant.design/components/checkbox/#components-checkbox-demo-group Checkbox.Group} component when records in a resource needs to be used as checkbox options.","displayName":"useCheckboxGroup","props":{"sort":{"defaultValue":null,"description":"Allow us to sort the options","name":"sort","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"deprecated":"Use `sorters` instead"}},"resource":{"defaultValue":null,"description":"Resource name for API data interactions","name":"resource","required":true,"type":{"name":"string"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: GetListResponse<TData>, values?: { config?: UseListConfig; ... 6 more ...; dataProviderName?: string | undefined; } | undefined, resource?: string | undefined) => OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: { config?: UseListConfig; pagination?: Pagination | undefined; ... 5 more ...; dataProviderName?: string | undefined; } | undefined, resource?: string | undefined) => OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"meta":{"defaultValue":null,"description":"Additional meta data to pass to the `useMany` from the data provider","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Additional meta data to pass to the `useMany` from the data provider","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"dataProviderName":{"defaultValue":{"value":"`default`"},"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{"default":"`default`"}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"queryOptions":{"defaultValue":null,"description":"react-query [useQuery](https://react-query.tanstack.com/reference/useQuery) options","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<GetListResponse<TQueryFnData>, TError, GetListResponse<TData>, QueryKey>"},"tags":{}},"onSearch":{"defaultValue":{"value":"`undefined`"},"description":"If defined, this callback allows us to override all filters for every search request.","name":"onSearch","required":false,"type":{"name":"((value: string) => CrudFilters)"},"tags":{"default":"`undefined`"}},"hasPagination":{"defaultValue":{"value":"`false`"},"description":"Disabling pagination option from [`useList()`](/docs/api-reference/core/hooks/data/useList/)","name":"hasPagination","required":false,"type":{"name":"boolean"},"tags":{"type":"boolean","default":"`false`","deprecated":"`hasPagination` is deprecated, use `pagination.mode` instead."}},"pagination":{"defaultValue":{"value":"`undefined`"},"description":"Pagination option from [`useList()`](/docs/api-reference/core/hooks/data/useList/)","name":"pagination","required":false,"type":{"name":"{  current? : number; pageSize?: number;}"},"tags":{"type":"{  current? : number; pageSize?: number;}","default":"`undefined`"}},"filters":{"defaultValue":null,"description":"Resource name for API data interactions","name":"filters","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{}},"sorters":{"defaultValue":null,"description":"Allow us to sort the options","name":"sorters","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{}},"optionLabel":{"defaultValue":{"value":"`\\"title\\"`"},"description":"Set the option\'s value","name":"optionLabel","required":false,"type":{"name":"string"},"tags":{"default":"`\\"title\\"`"}},"optionValue":{"defaultValue":{"value":"`\\"id\\"`"},"description":"Set the option\'s label value","name":"optionValue","required":false,"type":{"name":"string"},"tags":{"default":"`\\"id\\"`"}},"debounce":{"defaultValue":{"value":"`300`"},"description":"The number of milliseconds to delay","name":"debounce","required":false,"type":{"name":"number"},"tags":{"default":"`300`"}},"defaultValueQueryOptions":{"defaultValue":null,"description":"react-query [useQuery](https://react-query.tanstack.com/reference/useQuery) options","name":"defaultValueQueryOptions","required":false,"type":{"name":"UseQueryOptions<GetManyResponse<TQueryFnData>, TError, GetManyResponse<TQueryFnData>, QueryKey>"},"tags":{}},"fetchSize":{"defaultValue":{"value":"`undefined`"},"description":"Amount of records to fetch in select box list.","name":"fetchSize","required":false,"type":{"name":"number"},"tags":{"deprecated":"use [`pagination`](https://refine.dev/docs/api-reference/core/interfaceReferences/#pagination) instead","default":"`undefined`"}},"defaultValue":{"defaultValue":null,"description":"Sets the default value","name":"defaultValue","required":false,"type":{"name":"BaseKey[]"},"tags":{}}},"generatedAt":1685698483613}')}}]);