const createType = require('./../createType');
const { isString } = require('./../lib/checks/types');

const string = (options = {}) =>
	createType({
		name: 'string',
		parse: (key, value) => {
			if (options.length) {
				return `${value}`.slice(0, options.length);
			}

			return `${value}`;
		},
		strictCheck: (key, value) => {
			if (isString(value)) {
				if (options.length && value.length > options.length) {
					throw new Error(`NativeModels - Property ${key} is longer than ${options.length}`);
				}
				return true;
			}

			throw new Error(`NativeModels - Property ${key} is not a string`);
		},
		validCheck: (key, value) => {
			if (value === null) {
				throw new Error(`NativeModels - Property ${key} is not a string`);
			}

			return true;
		},
	});

module.exports = string;