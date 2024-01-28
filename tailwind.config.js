/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'primary': '#F7666F',
				'secondary': '#3D63EA',
				'tertiary': '#57007B',
				'white': '#ffffff',
				'black': '#000000',
				'gray': {
					400: '#CBD5E0',
					700: '#4A5568',
					900: '#1A202C',
				},
				'shade': '#E7DAED',
				'shade-light': '#F9F9FF',
				'shade-green': '#F0FFF7',
				'shade-pink': '#FFF4F4',
				'shadebg': '#E7DAED',
			},
		}
	},
	plugins: [
		require('@pyncz/tailwind-mask-image'),
	],
};
