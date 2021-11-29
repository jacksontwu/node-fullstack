const formatError = (ctx: any, err: any) => {
    const method = ctx.method;
    const url = ctx.url;
    const body = ctx.request.body;
    const userAgent = ctx.header.userAgent;
    return { method, url, userAgent, body, err };
};

const formatReq = (ctx: any) => {
    const method = ctx.method;
    const url = ctx.url;
    const body = ctx.query;
    const header = ctx.header;
    return { method, url, header, body };
};

const formatRes = (ctx: any, costTime: number) => {
    const method = ctx.method;
    const url = ctx.url;
    const body = ctx.request.body;
    const header = ctx.header;
    const response = ctx.response;
    return { method, url, header, body, costTime, response };
};

export { formatError, formatReq, formatRes };
