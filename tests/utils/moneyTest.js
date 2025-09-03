import {formatCurrency} from "../../scripts/utils/money.js"
/*
unit test
*/
//flaky test. test that passes or fail depends on the input
describe('test suite: formatCurrency', () => {
    it('converts cents to dollar', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('converts cents to dollar', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});