import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [],
	build: {
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'AstroFlow',
			fileName: 'astro-flow',
		},
	},
});
