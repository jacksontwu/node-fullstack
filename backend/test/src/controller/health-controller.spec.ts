import { HealthController } from '../../../src/controller';

describe('healthController', () => {
    it('health', () => {
        const ctx = {
            body: null,
        };
        const healthController = new HealthController();
        healthController.health(ctx);
        expect(ctx.body).toMatchSnapshot();
    });
});
