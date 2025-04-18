import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
	{ files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: ['markdown/recommended'] },
	{ files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },

	tseslint.configs.recommended,
	  { 
	    files: ['**/*.json'], 
	    plugins: { json }, 
	    language: 'json/json', 
	    extends: ['json/recommended'],
	  },
	pluginReact.configs.flat.recommended,
	{

		'settings': {
			'react': {
				'createClass': 'createReactClass',
				'pragma': 'React', 
				'fragment': 'Fragment',  
				'version': 'detect',
				'defaultVersion': '',
				'flowVersion': '0.53'
			},
		}
	},
	{ 
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], 
		rules: {
			'semi': ['error', 'never'],
			'quotes': ['warn', 'single'],
			'object-curly-spacing': ['error', 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'max-statements': ['warn', 10],
			'indent': ['error', 'tab'],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'space-before-blocks': ['error', 'always'],
			'lines-between-class-members': ['error', 'always'],
			'padding-line-between-statements': [
				'error',
				{ 
					blankLine: 'always', 
					prev: '*', 
					next: 'return' 
				},
				{
					blankLine: 'always',
					prev: 'export',
					next: 'export'
				}
			]
		} 
	}
])