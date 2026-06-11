interface Env {
	ASSETS: Fetcher;
}

const CAREERS_URL = "https://guildxyz.notion.site/Careers-at-ZGEN-7ffd822c4d7749cb9c1adb525c858ae1";

export default {
	async fetch(request, env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === "/careers") {
			return Response.redirect(CAREERS_URL, 302);
		}

		return env.ASSETS.fetch(request);
	}
} satisfies ExportedHandler<Env>;
