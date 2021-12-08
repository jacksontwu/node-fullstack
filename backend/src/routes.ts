import { HealthController } from './controller';

export default [
    {
        path: '/health',
        method: 'get',
        action: new HealthController().health,
    },
];
