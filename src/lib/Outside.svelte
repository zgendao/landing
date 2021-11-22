<script>
	export let page;

	const handleClick = () => {
		page = "inside";
	};
</script>

<div class="container flex items-center justify-center w-full min-h-screen">
	<section class="grid lg:grid-cols-[auto,1fr] gap-20 justify-items-stretch xl:gap-24">
		<div class="flex flex-col items-center max-w-lg gap-5 m-0 lg:items-start lg:pb-10 xl:max-w-2xl xl:gap-7">
			<img class="object-center lg:hidden" src="static/logo.svg" />
			<img class="hidden object-left mb-4 stroke-2 lg:block" src="static/logo2.svg" />
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
			<img class="object-center h-full" src="static/indoor.svg" alt="The door of zgen" />
		</div>
	</section>
</div>
