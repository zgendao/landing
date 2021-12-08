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
	<section class="bg-white">
		<div class="container flex items-center justify-center w-full min-h-screen">
			<div class="grid lg:grid-cols-[auto,1fr] gap-20 justify-items-stretch lg:gap-24">
				<div class="flex flex-col items-center max-w-md gap-3 m-0 md:gap-5 lg:items-start lg:pb-5 lg:max-w-lg 2xl:max-w-xl lg:gap-7">
					<h1
						class="tracking-tight leading-[0.95] lg:leading-[4rem] 2xl:leading-[5.2rem] text-5xl md:text-6xl md:leading-[3.3rem] text-center text-black lg:text-left lg:text-7xl 2xl:text-8xl"
					>
						A GUILD OF<br /> CURIOUS<br /> BUILDERS
					</h1>
					<p
						class="max-w-md md:text-xl text-lg font-normal text-center text-black 2xl:max-w-lg 2xl:text-3xl lg:leading-7 leading-[1.2] md:leading-[1.4rem] 2xl:leading-[2.2rem] lg:text-left lg:text-2xl lg:font-normal"
					>
						Building <b>smart contracts</b> on<br /> ethereum, <b>web3 applications</b> for<br />DeFi and DAO communitites.
					</p>
					<div class="w-full pt-6 md:pt-8 lg:hidden">
						<img class="object-center w-full" src="indoor.svg" alt="The door of zgen" />
					</div>
					<button
						class="items-center hidden gap-5 mt-10 text-black transition transition-transform duration-500 lg:flex group hover:translate-x-1 2xl:mt-20 hover:text-blue-dark"
						on:click={handleClick}
					>
						<span
							class="tracking-tight hover:tracking-normal lg:leading-1 font-display font-black lg:text-[1.65rem] 2xl:text-[2rem] letterSpacingTransition"
						>
							LEARN MORE
						</span>
						<div class="transition-transform origin-left 2xl:scale-125 group-hover:translate-x-2">
							<svg class=" animate-bounce" width="187" height="20" viewBox="0 0 187 20" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M175.371 2.23431C175.722 1.9219 176.292 1.9219 176.643 2.23431L184.737 9.43432C185.088 9.74673 185.088 10.2533 184.737 10.5657L176.643 17.7657C176.292 18.0781 175.722 18.0781 175.371 17.7657C175.02 17.4533 175.02 16.9467 175.371 16.6343L181.93 10.8L3.13597 11C2.6393 11 2 10.726 2 10.2842C2 9.61437 2.6393 9.4 3.13597 9.4L181.93 9.2L175.371 3.36569C175.02 3.05327 175.02 2.54673 175.371 2.23431Z"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="2.1"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</button>
				</div>
				<div class="hidden lg:block">
					<img class="object-center h-full" src="indoor.svg" alt="The door of zgen" />
				</div>
			</div>
		</div>
	</section>
{:else}
	<section class="flex items-center justify-center min-h-screen bg-blue-medium">
		<div class="container flex flex-col items-center justify-center lg:flex-row lg:gap-20 xl:gap-24">
			<div
				class="flex flex-col items-center justify-center max-w-xs gap-4 mb-3 lg:items-start xl:gap-7 lg:mx-0 mt-14 lg:gap-5 lg:m-0 xl:max-w-xl"
			>
				<h1
					class="tracking-tight lg:leading-[4rem] 2xl:leading-[5.2rem] md:text-6xl md:leading-[3.3rem] lg:text-7xl 2xl:text-8xl mb-1 leading-[0.95] text-5xl text-center text-white lg:text-left lg:text-5xl xl:text-6xl"
				>
					WE ARE<br /> BOOSTING<br /> WEB3
				</h1>
				<p
					class="tracking-tight lg:leading-7 2xl:leading-[2.2rem] md:text-xl md:leading-[1.4rem] lg:text-2xl 2xl:text-3xl text-lg leading-[1.2] font-normal text-center text-white lg:text-2xl xl:font-normal lg:text-left"
				>
					Building our own ideas in our unique style without compromise in <b>Szeged.</b>
				</p>
				<p
					class="tracking-tight lg:leading-7 2xl:leading-[2.2rem] md:text-xl md:leading-[1.4rem] lg:text-2xl 2xl:text-3xl text-lg leading-[1.2] font-normal text-center text-white lg:text-2xl xl:font-normal lg:text-left"
				>
					We are backed by teams like<br /> <b>Polygon • Harmony • Aragon</b>
				</p>
				<img class="object-center w-full pr-4 mt-6 lg:hidden" src="blockbuilding.svg" />
			</div>
			<div class="hidden lg:block">
				<img class="object-center h-full" src="outdoor.svg" />
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
								Where have you heard about us?
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
