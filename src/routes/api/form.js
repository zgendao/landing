export async function get({ params }) {
	console.log(params);

	return {
		body: {
			params
		}
	};
}
