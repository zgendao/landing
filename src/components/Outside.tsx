import Arrow from "./Arrow";
import Inside from "./Inside";

export default function Outside({ onNext }: { onNext: () => void }) {
	return (
		<>
			<section className="bg-white">
				<div className="container flex items-center justify-center w-full min-h-screen py-12 lg:py-16">
					<div className="grid lg:grid-cols-[1fr_auto] gap-20 justify-items-stretch lg:gap-24 xl:w-[977px]">
						<div className="flex flex-col items-center max-w-md gap-3 m-0 md:gap-5 lg:items-start lg:pb-5 lg:max-w-lg xl:max-w-xl lg:gap-7">
							<h1 className="tracking-tight leading-[0.95] lg:leading-[4rem] xl:leading-[5.2rem] text-5xl md:text-6xl md:leading-[3.3rem] text-center text-black lg:text-left lg:text-7xl xl:text-8xl">
								A GUILD OF
								<br /> CURIOUS
								<br /> BUILDERS
							</h1>
							<p className="max-w-md md:text-xl text-lg font-normal text-center text-black xl:max-w-lg xl:text-3xl lg:leading-7 leading-[1.2] md:leading-[1.4rem] xl:leading-[2.2rem] lg:text-left lg:text-xl lg:font-normal">
								Building <b>smart contracts</b> on
								<br /> ethereum, <b>web3 applications</b> for
								<br />
								DeFi and DAO communitites.
							</p>
							<div className="w-full pt-6 md:pt-8 lg:hidden">
								<img className="object-center w-full" src="/indoor.svg" alt="The door of zgen" />
							</div>
							<button
								className="items-center hidden gap-5 mt-auto text-black transition-transform duration-500 lg:flex group hover:translate-x-1 hover:text-blue-dark"
								onClick={onNext}
							>
								<span className="tracking-tight hover:tracking-normal font-display font-black lg:text-[1.65rem] xl:text-[2rem] letterSpacingTransition">
									LEARN MORE
								</span>
								<div className="transition-transform origin-left xl:scale-125 group-hover:translate-x-2">
									<Arrow width={187} />
								</div>
							</button>
						</div>
						<div className="hidden lg:block">
							<img className="object-center h-[423px] xl:h-[560px]" src="/indoor.svg" alt="Indoor graphic of zgen" />
						</div>
					</div>
				</div>
			</section>
			<div className="lg:hidden">
				<Inside />
			</div>
		</>
	);
}
