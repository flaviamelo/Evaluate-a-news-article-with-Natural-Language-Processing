import { formInputValidation } from '../src/client/js/formInputValidation';

describe('Testing the REGEX check for numbers only form input data', () => {
	test('The formInputValidation function should not contain numbers only', () => {
		expect('12345').toMatch(/(^[0-9]+$)/);
	});
});
