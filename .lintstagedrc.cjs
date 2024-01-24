module.exports = {
	'*.{js,jsx,ts,tsx}': ['eslint', 'prettier --write'],
	// '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
	'package.json': ['prettier --write'],
	'*.{css,scss,less,styl}': ['stylelint', 'prettier --write'],
	'*.md': ['prettier --write'],
};
