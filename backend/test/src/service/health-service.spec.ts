import { HealthService } from '../../../src/service';

describe('HealthService', () => {
    const service: HealthService = new HealthService();
    it('health', () => {
        expect(service.health()).toEqual('success');
    });
});
