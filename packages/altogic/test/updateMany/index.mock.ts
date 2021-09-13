import nock from "nock";

nock("https://dev001.na-dev-engine.altogic.com:443", {
    encodedQueryParams: true,
})
    .options("/post/613f445c1550aa001b0a8de7")
    .reply(204, "", [
        "Date",
        "Mon, 13 Sep 2021 12:31:01 GMT",
        "Content-Length",
        "0",
        "Connection",
        "keep-alive",
        "X-Powered-By",
        "Express",
        "Access-Control-Allow-Origin",
        "*",
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Vary",
        "Access-Control-Request-Headers",
        "Access-Control-Allow-Headers",
        "Authorization",
        "Strict-Transport-Security",
        "max-age=15724800; includeSubDomains",
    ]);

nock("https://dev001.na-dev-engine.altogic.com:443", {
    encodedQueryParams: true,
})
    .options("/post/613f445e97d1370019b25a60")
    .reply(204, "", [
        "Date",
        "Mon, 13 Sep 2021 12:31:40 GMT",
        "Content-Length",
        "0",
        "Connection",
        "keep-alive",
        "X-Powered-By",
        "Express",
        "Access-Control-Allow-Origin",
        "*",
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Vary",
        "Access-Control-Request-Headers",
        "Access-Control-Allow-Headers",
        "Authorization",
        "Strict-Transport-Security",
        "max-age=15724800; includeSubDomains",
    ]);

nock("https://dev001.na-dev-engine.altogic.com:443", {
    encodedQueryParams: true,
})
    .put("/post/613f445c1550aa001b0a8de7", { title: "foo", content: "bar" })
    .reply(
        200,
        {
            _id: "613f445c1550aa001b0a8de7",
            createdAt: "2021-09-13T12:30:20.012Z",
            updatedAt: "2021-09-13T12:31:01.222Z",
            title: "foo",
            categoryId: "61373e585d65d30019e2b0a2",
            status: "published",
            content: "bar",
            image: "613a13c865f20500124106ac",
        },
        [
            "Date",
            "Mon, 13 Sep 2021 12:31:01 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "238",
            "Connection",
            "keep-alive",
            "X-Powered-By",
            "Altogic",
            "Access-Control-Allow-Origin",
            "*",
            "Surrogate-Control",
            "no-store",
            "Cache-Control",
            "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma",
            "no-cache",
            "Expires",
            "0",
            "Access-Control-Expose-Headers",
            "X-Service-Id, X-Duration, X-Validated-Duration, Content-Length, Content-Type, Content-Disposition, X-Powered-By",
            "X-Service-Id",
            "61373d5361cf2c001a1e27f9",
            "X-Duration",
            "12",
            "X-Validated-Duration",
            "14",
            "Strict-Transport-Security",
            "max-age=15724800; includeSubDomains",
        ],
    );

nock("https://dev001.na-dev-engine.altogic.com:443", {
    encodedQueryParams: true,
})
    .put("/post/613f445e97d1370019b25a60", { title: "foo", content: "bar" })
    .reply(
        200,
        {
            _id: "613f445e97d1370019b25a60",
            createdAt: "2021-09-13T12:30:22.976Z",
            updatedAt: "2021-09-13T12:31:01.225Z",
            title: "foo",
            categoryId: "61373e585d65d30019e2b0a2",
            status: "published",
            content: "bar",
            image: "613a13c865f20500124106ac",
        },
        [
            "Date",
            "Mon, 13 Sep 2021 12:31:01 GMT",
            "Content-Type",
            "application/json; charset=utf-8",
            "Content-Length",
            "238",
            "Connection",
            "keep-alive",
            "X-Powered-By",
            "Altogic",
            "Access-Control-Allow-Origin",
            "*",
            "Surrogate-Control",
            "no-store",
            "Cache-Control",
            "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma",
            "no-cache",
            "Expires",
            "0",
            "Access-Control-Expose-Headers",
            "X-Service-Id, X-Duration, X-Validated-Duration, Content-Length, Content-Type, Content-Disposition, X-Powered-By",
            "X-Service-Id",
            "61373d5361cf2c001a1e27f9",
            "X-Duration",
            "12",
            "X-Validated-Duration",
            "18",
            "Strict-Transport-Security",
            "max-age=15724800; includeSubDomains",
        ],
    );
