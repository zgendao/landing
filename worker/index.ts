interface Env {
	ASSETS: Fetcher;
	TELEGRAM_TOKEN: string;
}

const TELEGRAM_CHAT_ID = -1001326079708;
const CAREERS_URL = "https://guildxyz.notion.site/Careers-at-ZGEN-7ffd822c4d7749cb9c1adb525c858ae1";

const FIELD_LABELS: Record<string, string> = {
	name: "Name",
	describe: "How do you busy yourself?",
	learn: "How do you like to learn?",
	primary: "Primary skill",
	secondary: "Secondary skill",
	git: "Git account",
	project: "Passion project",
	hobbies: "Hobbies",
	us: "Heard about us from",
	reach: "Contact"
};

async function handleForm(request: Request, env: Env): Promise<Response> {
	if (!env.TELEGRAM_TOKEN) {
		return new Response("Telegram token is not configured", { status: 503 });
	}

	let fields: Record<string, unknown>;
	try {
		fields = await request.json();
	} catch {
		return new Response("Invalid JSON body", { status: 400 });
	}

	const text = Object.entries(fields)
		.filter(([, value]) => typeof value === "string" && value.trim() !== "")
		.map(([key, value]) => `${FIELD_LABELS[key] ?? key}:\n${value}`)
		.join("\n\n");

	const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/sendMessage`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: `New application 🎉\n\n${text}` })
	});

	return new Response(null, { status: response.ok ? 200 : 502 });
}

export default {
	async fetch(request, env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === "/careers") {
			return Response.redirect(CAREERS_URL, 302);
		}

		if (url.pathname === "/form" && request.method === "POST") {
			return handleForm(request, env);
		}

		return env.ASSETS.fetch(request);
	}
} satisfies ExportedHandler<Env>;
