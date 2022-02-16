import { HealthController } from './controller';

export default [
    {
        path: '/api/health',
        method: 'get',
        action: new HealthController().health,
    },
];
