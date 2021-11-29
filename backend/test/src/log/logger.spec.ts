import { errLogger, reqLogger, resLogger } from '../../../src/log';
import { formatError, formatReq, formatRes } from '../../../src/log/log-format';

jest.mock('../../../src/log/log-format');

describe('logger', () => {
    it('errLogger', () => {
        errLogger(1, 1);
        expect(formatError).toHaveBeenCalled();
    });
    it('reqLogger', () => {
        reqLogger(1);
        expect(formatReq).toHaveBeenCalled();
    });
    it('errLogger', () => {
        resLogger(1, 1);
        expect(formatRes).toHaveBeenCalled();
    });
});
