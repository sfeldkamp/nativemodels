import base from './base';

const float = () => ({
	...base,
	parse(value, name) {
		if (value === true || value === false || value === '') {
			throw new Error(`Property ${name} is not a float`);
		}

		if (!isNaN(parseFloat(value))) {
			return parseFloat(value);
		}

		throw new Error(`Property ${name} is not a float`);
	},
});

export default float;