<script>
	import Inside from "./inside.svelte";

	export let page;
	const handleClick = () => {
		page = "inside";
	};
</script>

<section class="bg-white">
	<div class="container flex items-center justify-center w-full min-h-screen py-12 lg:py-16">
		<div class="grid lg:grid-cols-[1fr,auto] gap-20 justify-items-stretch lg:gap-24 xl:w-[977px]">
			<div class="flex flex-col items-center max-w-md gap-3 m-0 md:gap-5 lg:items-start lg:pb-5 lg:max-w-lg xl:max-w-xl lg:gap-7">
				<h1
					class="tracking-tight leading-[0.95] lg:leading-[4rem] xl:leading-[5.2rem] text-5xl md:text-6xl md:leading-[3.3rem] text-center text-black lg:text-left lg:text-7xl xl:text-8xl"
				>
					A GUILD OF<br /> CURIOUS<br /> BUILDERS
				</h1>
				<p
					class="max-w-md md:text-xl text-lg font-normal text-center text-black xl:max-w-lg xl:text-3xl lg:leading-7 leading-[1.2] md:leading-[1.4rem] xl:leading-[2.2rem] lg:text-left lg:text-xl lg:font-normal"
				>
					Building <b>smart contracts</b> on<br /> ethereum, <b>web3 applications</b> for<br />DeFi and DAO communitites.
				</p>
				<div class="w-full pt-6 md:pt-8 lg:hidden">
					<img class="object-center w-full" src="indoor.svg" alt="The door of zgen" />
				</div>
				<button
					class="items-center hidden gap-5 mt-auto text-black transition-transform duration-500 lg:flex group hover:translate-x-1 hover:text-blue-dark"
					on:click={handleClick}
				>
					<span
						class="tracking-tight hover:tracking-normal lg:leading-1 font-display font-black lg:text-[1.65rem] xl:text-[2rem] letterSpacingTransition"
					>
						LEARN MORE
					</span>
					<div class="transition-transform origin-left xl:scale-125 group-hover:translate-x-2">
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
				<img class="object-center h-[423px] xl:h-[560px]" src="indoor.svg" alt="Indoor graphic of zgen" />
			</div>
		</div>
	</div>
</section>
<div class="lg:hidden">
	<Inside />
</div>
