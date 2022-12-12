/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				arimo: ["Arimo"],
				"ibm-sans": ["IBM Plex Sans"],
			},
		},
	},
	plugins: [],
};
