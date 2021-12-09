<script>
	import Form from "./form.svelte";

	export let page = "";
	const handleClick = () => {
		page = "form";
	};
</script>

<section class="pt-12 transition-colors duration-1000 bg-blue-medium lg:pt-0">
	<div class="container flex items-center justify-center w-full min-h-screen">
		<div class="grid lg:grid-cols-[1fr,auto] gap-20 justify-items-stretch lg:gap-24 xl:w-[977px]">
			<div class="flex flex-col items-center max-w-md gap-3 m-0 md:gap-5 lg:items-start lg:pb-5 lg:max-w-lg xl:max-w-xl lg:gap-7">
				<h1
					class="tracking-tight leading-[0.95] lg:leading-[4rem] xl:leading-[5.2rem] text-5xl md:text-6xl md:leading-[3.3rem] text-center text-white lg:text-left lg:text-7xl xl:text-8xl"
				>
					WE ARE<br /> BOOSTING<br /> WEB3
				</h1>
				<div class="flex flex-col gap-2 xl:gap-3">
					<p
						class="max-w-md md:text-xl text-lg font-normal text-center text-white xl:max-w-lg xl:text-3xl lg:leading-6 leading-[1.2] md:leading-[1.4rem] xl:leading-[2.2rem] lg:text-left lg:text-xl lg:font-normal"
					>
						Building our own ideas in our unique<br /> style without compromise in <b>Szeged.</b>
					</p>
					<p
						class="max-w-md md:text-xl text-lg font-normal text-center text-white xl:max-w-lg xl:text-3xl lg:leading-6 leading-[1.2] md:leading-[1.4rem] xl:leading-[2.2rem] lg:text-left lg:text-xl lg:font-normal"
					>
						We are backed by teams like<br />
						<b class="inline-flex justify-center"
							><a href="https://polygon.technology">Polygon</a>
							<span class="px-2">•</span>
							<a href="https://www.harmony.one">Harmony </a>
							<span class="px-2">•</span>
							<a href="https://aragon.org">Aragon</a></b
						>
					</p>
				</div>
				<div class="w-full pt-6 md:pt-8 lg:hidden">
					<img class="object-center w-full pl-6 pr-12 lg:mt-6 md:pl-0 md:pr-4 " src="blockbuilding.svg" alt="building graphic" />
				</div>
				<button
					class="items-center hidden gap-5 mt-auto text-white transition-transform duration-700 lg:flex group hover:translate-x-1 "
					on:click={handleClick}
				>
					<span
						class="tracking-tight hover:tracking-normal lg:leading-1 font-display font-black lg:text-[1.65rem] xl:text-[2rem] letterSpacingTransition"
					>
						BUILD WITH US
					</span>
					<div class="transition-transform origin-left scale-120 group-hover:translate-x-2">
						<svg
							class="hidden lg:block xl:hidden animate-bounce"
							width="147"
							height="20"
							viewBox="0 0 147 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M135.502 2.23431C135.853 1.9219 136.423 1.9219 136.774 2.23431L144.867 9.43432C145.219 9.74673 145.219 10.2533 144.867 10.5657L136.774 17.7657C136.423 18.0781 135.853 18.0781 135.502 17.7657C135.151 17.4533 135.151 16.9467 135.502 16.6343L142.06 10.8L3.13597 11C2.6393 11 2 10.726 2 10.2842C2 9.61437 2.6393 9.4 3.13597 9.4L142.06 9.2L135.502 3.36569C135.151 3.05327 135.151 2.54673 135.502 2.23431Z"
								fill="currentColor"
								stroke="currentColor"
								stroke-width="2.1"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						<svg class="hidden xl:block animate-bounce" width="187" height="20" viewBox="0 0 187 20" xmlns="http://www.w3.org/2000/svg">
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
				<img class="object-center h-[423px] xl:h-[560px]" src="outdoor.svg" alt="Indoor graphic of zgen" />
			</div>
		</div>
	</div>
</section>
<div class="lg:hidden">
	<Form />
</div>
