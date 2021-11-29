import { healthController } from '../../../src/controller';

describe('healthController', () => {
    it('health', async () => {
        const ctx = {
            body: null,
        };
        await healthController.health(ctx);
        expect(ctx.body).toMatchSnapshot();
    });
});
