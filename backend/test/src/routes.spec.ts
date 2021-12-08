import AppRoutes from '../../src/routes';

describe('AppRoutes', () => {
    it('routes', () => {
        expect(AppRoutes).toMatchSnapshot();
    });
});
