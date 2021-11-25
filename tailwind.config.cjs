const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		fontFamily: {
			display: ["Red Hat Display", "sans-serif"],
			body: ["Inter var", "Inter", "sans-serif"]
		},
		extend: {
			colors: {
				black: "#333333",
				white: "#FBFBFB",
				gray: "#252525",
				green: "ABABB3",
				blue: {
					light: "#7577FA",
					medium: "#5053F2",
					dark: "#3C3FDD"
				}
			}
		},
		container: {
			center: true,
			padding: { DEFAULT: "2rem", sm: "3rem", lg: "4rem" }
		}
	},

	plugins: []
};

module.exports = config;
