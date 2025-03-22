import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function createPlugin(): StarlightPlugin {
	return {
		name: "starlight-minimalistic-theme",
		hooks: {
			setup: ({ config, updateConfig }) => {
				// Update the Starlight config to inject your custom css
				updateConfig({
					customCss: [
						"starlight-minimalistic-theme/styles/theme.css",
						"starlight-minimalistic-theme/styles/asides.css",
						"starlight-minimalistic-theme/styles/markdown.css",
						"starlight-minimalistic-theme/styles/nav.css",
						"starlight-minimalistic-theme/styles/sidebar.css",
						"starlight-minimalistic-theme/styles/toc.css",
						...(config.customCss ?? []),
					],
				});
			},
		},
	};
}
