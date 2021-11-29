import { healthController } from './controller';

export default [
    {
        path: '/health',
        method: 'get',
        action: healthController.health,
    },
];
