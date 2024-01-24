const baseConfig = require('./webpack.base.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

const envResolver = {
	development: () => ({ ...baseConfig, ...devConfig }),
	production: () => ({ ...baseConfig, ...prodConfig }),
};

module.exports = (env, { mode = 'production' }) => {
	return envResolver[mode]();
};
