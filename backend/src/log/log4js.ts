import { Configuration } from 'log4js';
import { join } from 'path';
import { logDir } from 'src/constants';

const config: Configuration = {
    appenders: {
        error: {
            type: 'file',
            category: 'errLogger',
            filename: join(logDir, 'error.log'),
            maxLogSize: 104800,
            backups: 100,
        },
        default: {
            type: 'file',
            category: 'defaultLogger',
            filename: join(logDir, 'default'),
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            maxLogSize: 104800,
            backups: 100,
        },
    },
    categories: {
        error: { appenders: ['error'], level: 'error' },
        default: { appenders: ['default'], level: 'info' },
    },
};

export default config;
