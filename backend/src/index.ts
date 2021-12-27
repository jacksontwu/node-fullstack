import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as  cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';
import { PORT } from './config';
import AppRoutes from './routes';
import { configure } from 'log4js';
import { config, reqLogger, resLogger } from 'src/log';

const app = new Koa();
const router = new Router();

AppRoutes.forEach((route) => router[route.method](route.path, route.action));

configure(config);
app.use(async (ctx, next) => {
    const start = new Date();
    reqLogger(ctx);
    await next();
    const end = new Date();
    resLogger(ctx, end.getTime() - start.getTime());
});

app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);

console.log(`Backend start successfully, port:${PORT}`);
