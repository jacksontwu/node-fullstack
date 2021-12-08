import { formatError, formatReq, formatRes } from '../../../src/log/log-format';

describe('logger', () => {
    it('formatError', () => {
        const ctx = {
            method: 'a',
            url: 'b',
            query: 'c',
            header: 'd',
        };
        expect(formatError(ctx, 1)).toMatchSnapshot();
    });
    it('formatReq', () => {
        const ctx = {
            method: 'a',
            url: 'b',
            query: 'c',
            header: 'd',
        };
        expect(formatReq(ctx)).toMatchSnapshot();
    });
    it('formatRes', () => {
        const ctx = {
            method: 'a',
            url: 'b',
            query: 'c',
            header: 'd',
            response: 'e',
        };
        expect(formatRes(ctx, 1)).toMatchSnapshot();
    });
});
