import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import eslint from "@rollup/plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: function (element) {
						const customElements = ["inner-column"];

						return customElements.includes(element);
					},
				},
			},
		}),
		// {
		// 	...eslint({
		// 		include: "src/**/*.+{js}",
		// 	}),
		// 	enforce: "pre",
		// 	apply: "build",
		// },
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
