import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	format: 'esm',
	splitting: true,
	sourcemap: true,
	dts: true,
	clean: false,
	loader: {
		'.graphql': 'text',
	},
	tsconfig: './tsconfig.json',
});
