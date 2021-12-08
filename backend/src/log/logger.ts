import { formatError, formatRes, formatReq } from './log-format';
import { getLogger } from 'log4js';

const errorLogger = getLogger('error');
const logger = getLogger('default');

const errLogger = (ctx: any, error: any) => {
    if (ctx && error) {
        errorLogger.error(formatError(ctx, error));
    }
};
const resLogger = (ctx: any, resTime: number) => {
    if (ctx) {
        logger.info(formatRes(ctx, resTime));
    }
};

const reqLogger = (ctx: any) => {
    if (ctx) {
        logger.info(formatReq(ctx));
    }
};

export { errLogger, resLogger, reqLogger };
