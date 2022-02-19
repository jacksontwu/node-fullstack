import { PORT } from '../../src/config';

describe('config', () => {
    it('port', () => {
        expect(PORT).toBe('8080');
    });
});
