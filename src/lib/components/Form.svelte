<script>
	import { toast } from "@zerodevx/svelte-toast";

	const handleSubmit = (event) => {
		const form = event.target;
		const data = new FormData(form);
		const json = JSON.stringify(Object.fromEntries(data));
		fetch(form.action, { method: "post", body: json }).then((response) => (response.ok ? onSuccess() : onError()));
	};

	function onError() {
		toast.push("Error", {
			theme: {
				"--toastColor": "#743636",
				"--toastBackground": "#D8B0B0",
				"--toastBarBackground": "#743636",
				"--toastPadding": "0.5rem 1rem"
			}
			// duration: 40000
		});
	}

	function onSuccess() {
		toast.push("Success", {
			theme: {
				"--toastColor": "#305140",
				"--toastBackground": "#B0D8C1",
				"--toastBarBackground": "#305140",
				"--toastPadding": "0.5rem 1rem"
			}
			// duration: 40000
		});
	}
</script>

<section class="flex justify-center w-full bg-blue-medium">
	<div class="container flex flex-col items-center justify-center px-0 pt-6 mt-16 md:mt-0 lg:mt-24 lg:pt-0 xl:px-28">
		<div class="flex justify-center w-full hatter">
			<div class="mx-8 w-max lg:mx-0">
				<h1 class="mb-8 text-4xl text-center text-white mt-42 lg:text-black lg:text-5xl xl:text-6xl lg:mt-56 2xl:mt-72 ">BUILD WITH US</h1>
				<form action="/form" method="post" on:submit|preventDefault={handleSubmit}>
					<div class="w-full mb-6 ">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="name">
							What is your name?
						</label>
						<input id="name" name="name" type="text" placeholder="Full name" required />
					</div>
					<div class="w-full mb-6">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="describe">
							How do you busy yourself?
						</label>
						<textarea id="describe" name="describe" type="text" placeholder="A short introduction..." rows="4" />
					</div>
					<div class="w-full mb-6">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="learn">
							How do you like to learn?
						</label>
						<textarea id="learn" name="learn" type="text" placeholder="Your learning goals" rows="3" />
					</div>
					<div class="flex flex-col items-start justify-start w-full">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="primary">
							What say'st are your primary skill?
						</label>
						<div class="flex flex-row items-start justify-start w-full mb-6 ">
							<select
								id="primary"
								name="primary"
								class="appearance-none w-full bg-input  border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none focus:shadow-outline text-gray"
							>
								<option>Frontend Dev</option>
								<option>Backend Dev</option>
								<option>BizDev</option>
								<option>Smart contracts</option>
								<option>Community</option>
								<option>Project management</option>
								<option>Finance</option>
								<option>Product design</option>
								<option>DevOps</option>
								<option>Content</option>
								<option>Memes</option>
								<option>UX/UI Design</option>
								<option>Illustration</option>
								<option>Legal</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col items-start justify-start w-full">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="secondary">
							And your secondary skill?
						</label>
						<div class="flex flex-row items-start justify-start w-full mb-6 ">
							<select
								id="secondary"
								name="secondary"
								class="appearance-none w-full bg-input border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none focus:shadow-outline text-hupi"
							>
								<option>Memes</option>
								<option>Frontend Dev</option>
								<option>Backend Dev</option>
								<option>BizDev</option>
								<option>Smart contracts</option>
								<option>Community</option>
								<option>Project management</option>
								<option>Finance</option>
								<option>Product design</option>
								<option>DevOps</option>
								<option>Content</option>
								<option>UX/UI Design</option>
								<option>Illustration</option>
								<option>Legal</option>
							</select>
						</div>
					</div>
					<div class="w-full mb-6">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="git">
							Do you have git account?
						</label>
						<input id="git" name="git" type="text" placeholder="Github, Gitlab etc.." />
					</div>
					<div class="w-full mb-6">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="project">
							Do you have any passion project out of school and work?
						</label>
						<textarea id="project" name="project" type="text" placeholder="Tell us about your project" rows="4" />
					</div>
					<div class="w-full mb-6">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="hobbies">
							How do you entertain yourself? Tell us about your hobbies.
						</label>
						<textarea id="hobbies" name="hobbies" type="text" placeholder="Your freetime activities" rows="3" />
					</div>
					<div class="w-full mb-6">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="us">
							Where have you heard about us?
						</label>
						<input id="us" name="us" type="text" placeholder="Friends, forums" />
					</div>
					<div class="w-full mb-6">
						<label class="block pl-1 mb-1 text-sm font-black text-white uppercase font-display lg:text-black" for="reach">
							How can we reach you?
						</label>
						<textarea id="reach" name="reach" type="text" placeholder="Email address, Discord or Telegram account" rows="2" required />
					</div>
					<div class="flex items-center justify-center w-full mb-10">
						<button
							type="submit"
							class="py-4 mt-6 mb-12 font-black text-white transition-transform duration-500 border-black rounded-md px-14 drop-shadow-md hover:scale-105 font-display bg-blue-light active:bg-blue-medium xl:px-16 xl:py-3 xl:text-xl"
						>
							SUBMIT
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	@media (min-width: 1024px) {
		.hatter {
			background-image: url("/hatter.svg");
			@apply bg-no-repeat bg-top;
			background-size: 100% auto;
		}
	}
</style>
