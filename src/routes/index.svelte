<script>
	let page = "outside";

	import { onMount } from "svelte";
	import { SvelteToast, toast } from "@zerodevx/svelte-toast";

	let LottiePlayer;

	onMount(async () => {
		const module = await import("@lottiefiles/svelte-lottie-player");
		LottiePlayer = module.LottiePlayer;
	});

	let controlsLayout = [
		"previousFrame",
		"playpause",
		"stop",
		"nextFrame",
		"progress",
		"frame",
		"loop",
		"spacer",
		"background",
		"snapshot",
		"zoom",
		"info"
	];

	const handleClick = () => {
		page = "inside";
	};

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

{#if page === "outside"}
	<div class="container flex items-center justify-center w-full min-h-screen">
		<section class="grid lg:grid-cols-[auto,1fr] gap-20 justify-items-stretch xl:gap-24">
			<div class="flex flex-col items-center max-w-lg gap-5 m-0 lg:items-start lg:pb-10 xl:max-w-2xl xl:gap-7">
				<img class="object-center lg:hidden" src="logo.svg" />
				<img class="hidden object-left mb-4 stroke-2 lg:block" src="logo2.svg" />
				<h1 class="text-5xl text-center text-black lg:text-left xl:text-6xl">A GUILD OF CURIOUS BUILDERS</h1>
				<p class="max-w-md text-lg font-medium text-center lg:text-left lg:text-2xl xl:text-3xl xl:font-normal">
					Building ethereum protocols and web3 applications for DeFi and DAO communitites.
				</p>
				<button
					class="px-10 py-2 mt-10 font-bold text-white border-2 border-black xl:px-14 xl:py-3 xl:text-xl bg-blue-medium hover:bg-blue-dark square"
					on:click={handleClick}
				>
					Build with us
				</button>
			</div>

			<div class="hidden lg:block">
				<img class="object-center h-full" src="indoor.svg" alt="The door of zgen" />
			</div>
		</section>
	</div>
{:else}
	<section class="flex items-center justify-center min-h-screen bg-blue-medium">
		<div class="container flex flex-col items-center justify-center lg:flex-row lg:gap-20 xl:gap-24">
			<div class="flex flex-col items-center justify-center max-w-lg gap-4 mb-3 xl:gap-7 lg:mx-0 mt-14 lg:gap-5 lg:m-0 xl:max-w-2xl">
				<h1 class="mb-1 text-4xl text-center text-white lg:text-left lg:text-5xl xl:text-6xl">A GUILD OF CURIOUS BUILDERS</h1>
				<p class="text-lg font-medium text-center text-white lg:text-2xl xl:text-3xl xl:font-normal lg:text-left">
					Building our own ideas in our unique style without compromise.
				</p>
				<p class="text-lg font-medium text-center text-white lg:text-2xl xl:text-3xl xl:font-normal lg:text-left">
					We are working with ETH, SOL and MATIC technologies.
				</p>
				<p class="text-lg font-medium text-center text-white lg:text-2xl xl:text-3xl xl:font-normal lg:text-left">
					Regularly participating in conferences like Ethcc4, Liscon and the DAOist.
				</p>
			</div>
			<div class="mt-4 mr-3 lg:m-0">
				<img class="object-center lg:hidden" src="blockbuilding.svg" />
				<img class="hidden object-center lg:block xl:scale-125" src="outdoor.svg" />
			</div>
		</div>
	</section>
	<section class="flex justify-center w-full bg-blue-medium">
		<div class="container flex flex-col items-center justify-center px-0 pt-12 lg:pt-0 xl:px-28">
			<div class="flex justify-center w-full hatter">
				<div class="mx-8 w-max lg:mx-0">
					<h1 class="mb-8 text-4xl text-center text-white mt-42 lg:text-black lg:text-5xl xl:text-6xl lg:mt-56 2xl:mt-72 ">
						BUILD WITH US
					</h1>
					<form action="/form" method="post" on:submit|preventDefault={handleSubmit}>
						<div class="w-full mb-6">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="name">
								What is your name?
							</label>
							<input id="name" name="name" type="text" placeholder="Full name" required />
						</div>
						<div class="w-full mb-6">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="describe">
								How do you busy yourself?
							</label>
							<textarea id="describe" name="describe" type="text" placeholder="A short introduction..." rows="4" />
						</div>
						<div class="w-full mb-6">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="learn">
								How do you like to learn?
							</label>
							<textarea id="learn" name="learn" type="text" placeholder="Your learning goals" rows="3" />
						</div>
						<div class="flex flex-col items-start justify-start w-full">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="primary">
								What say'st are your primary skill?
							</label>
							<div class="flex flex-row items-start justify-start w-full mb-6 ">
								<select
									id="primary"
									name="primary"
									class="appearance-none w-full bg-white border-2 border-black border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none focus:shadow-outline text-hupi"
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
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="secondary">
								And your secondary skill?
							</label>
							<div class="flex flex-row items-start justify-start w-full mb-6 ">
								<select
									id="secondary"
									name="secondary"
									class="appearance-none w-full bg-white border-2 border-black border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none focus:shadow-outline text-hupi"
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
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="git">
								Do you have git account?
							</label>
							<input id="git" name="git" type="text" placeholder="Github, Gitlab etc.." />
						</div>
						<div class="w-full mb-6">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="project">
								Do you have any passion project out of the school and work?
							</label>
							<textarea id="project" name="project" type="text" placeholder="Tell us about your project" rows="4" />
						</div>
						<div class="w-full mb-6">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="hobbies">
								How do you entertain yourself? Tell us about your hobbies.
							</label>
							<textarea id="hobbies" name="hobbies" type="text" placeholder="Your freetime activities" rows="3" />
						</div>
						<div class="w-full mb-6">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="us">
								Where are you heard about us?
							</label>
							<input id="us" name="us" type="text" placeholder="Friends, forums" />
						</div>
						<div class="w-full mb-6">
							<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="reach">
								How can we reach you?
							</label>
							<textarea id="reach" name="reach" type="text" placeholder="Email, Discord, Telegram" rows="2" required />
						</div>
						<div class="flex items-center justify-center w-full mb-10">
							<button
								type="submit"
								class="px-10 py-2 mt-6 mb-12 font-bold text-white border-2 border-black bg-blue-light hover:bg-blue-dark square xl:px-14 xl:py-3 xl:text-xl"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
{/if}
<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />

<!-- {#if LottiePlayer}
	<LottiePlayer
		src="https://assets1.lottiefiles.com/packages/lf20_twlz7dr7.json"
		autoplay={true}
		loop={true}
		controls={true}
		renderer="svg"
		background="transparent"
		height={600}
		width={600}
		{controlsLayout}
	/>
{/if} -->
<style>
	@media (min-width: 1024px) {
		.hatter {
			background-image: url("/hatter.svg");
			@apply bg-no-repeat bg-center bg-top;
			background-size: 100% auto;
		}
	}
</style>
