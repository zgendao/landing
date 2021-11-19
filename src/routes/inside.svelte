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
			<img class="object-center lg:hidden" src="static/blockbuilding.svg" />
			<img class="hidden object-center lg:block xl:scale-125" src="static/outdoor.svg" />
		</div>
	</div>
</section>
<section class="flex justify-center w-full bg-blue-medium">
	<div class="container flex flex-col items-center justify-center px-0 pt-12 lg:pt-0 xl:px-28">
		<div class="flex justify-center w-full hatter">
			<div class="mx-8 w-max lg:mx-0">
				<h1 class="mb-8 text-4xl text-center text-white mt-42 lg:text-black lg:text-5xl xl:text-6xl lg:mt-56 2xl:mt-72 ">BUILD WITH US</h1>
				<div class="w-full mb-6">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-name">
						What is your name?
					</label>
					<input id="grid-name" type="text" placeholder="Full name" />
				</div>
				<div class="w-full mb-6">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-describe">
						How would you described yourself in few senteces?
					</label>
					<textarea id="grid-describe" type="text" placeholder="A short introduction..." rows="4" />
				</div>
				<div class="w-full mb-6">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-learn">
						How do you like to learn?
					</label>
					<textarea id="grid-learn" type="text" placeholder="Your learning goals" rows="3" />
				</div>
				<div class="flex flex-col items-start justify-start w-full">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-primary">
						What say'st are your primary skills?
					</label>
					<div class="flex flex-row items-start justify-start w-full mb-6 ">
						<select
							id="grid-primary"
							class="appearance-none w-full bg-white border-2 border-black border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none focus:shadow-outline text-hupi"
						>
							<option>Frontend Dev</option>
							<option>Backend Dev</option>
							<option>BizDev</option>
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
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-secondary">
						And your secondary skills?
					</label>
					<div class="flex flex-row items-start justify-start w-full mb-6 ">
						<select
							id="grid-secondary"
							class="appearance-none w-full bg-white border-2 border-black border-gray-400 hover:border-gray-500 px-2 py-2.5 leading-tight focus:outline-none focus:shadow-outline text-hupi"
						>
							<option>Memes</option>
							<option>Frontend Dev</option>
							<option>Backend Dev</option>
							<option>BizDev</option>
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
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-git">
						Do you have git account?
					</label>
					<input id="grid-git" type="text" placeholder="Github, Gitlab etc.." />
				</div>
				<div class="w-full mb-6">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-project">
						Do you have any passion project out of the school and work?
					</label>
					<textarea id="grid-project" type="text" placeholder="Tell us about your project" rows="4" />
				</div>
				<div class="w-full mb-6">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-hobbies">
						How do you entertain yourself? Tell us about your hobbies.
					</label>
					<textarea id="grid-hobbies" type="text" placeholder="..." rows="3" />
				</div>
				<div class="w-full mb-6">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-us">
						Where are you heard about us?
					</label>
					<input id="grid-us" type="text" placeholder="..." />
				</div>
				<div class="w-full mb-6">
					<label class="block pl-1 mb-2 text-xs font-bold tracking-wide text-white uppercase lg:text-black" for="grid-reach">
						How can we reach you?
					</label>
					<textarea id="grid-reach" type="text" placeholder="..." rows="2" />
				</div>
				<div class="flex items-center justify-center w-full mb-10">
					<a
						href="/inside"
						class="px-10 py-2 mt-6 mb-12 font-bold text-white border-2 border-black bg-blue-light hover:bg-blue-dark square xl:px-14 xl:py-3 xl:text-xl"
					>
						Get in touch
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@media (min-width: 1024px) {
		.hatter {
			background-image: url("static/hatter.svg");
			@apply bg-no-repeat bg-center bg-top;
			background-size: 100% auto;
		}
	}
</style>
