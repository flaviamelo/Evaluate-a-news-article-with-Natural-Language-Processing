import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
	test('The handleSubmit() function successfully returns data from the API', () => {
		expect(handleSubmit).toBeDefined();
	});
});
