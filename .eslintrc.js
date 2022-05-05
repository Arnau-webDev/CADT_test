module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": 0,
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
	}
};
