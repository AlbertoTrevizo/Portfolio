/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"Geist Mono Variable"', 'ui-monospace', 'monospace'],
			},
		},
	},
}
