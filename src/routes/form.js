export async function post(request) {
	const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_TOKEN}/sendMessage`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(
			{
				chat_id: -643540672,
				text: JSON.parse(request.body)
			},
			null,
			2
		)
	});
	const json = await response.json();

	return { status: json.ok ? 200 : 500, body: {} };
}
