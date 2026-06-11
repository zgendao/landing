import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import JoinForm from "./JoinForm";

function BuildingAnimation() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let animation: { destroy(): void } | undefined;
		let cancelled = false;
		import("lottie-web").then((lottie) => {
			if (cancelled || !containerRef.current) return;
			animation = lottie.default.loadAnimation({
				container: containerRef.current,
				renderer: "svg",
				loop: true,
				autoplay: true,
				path: "/building.json"
			});
		});
		return () => {
			cancelled = true;
			animation?.destroy();
		};
	}, []);

	return <div ref={containerRef} className="h-[250px] w-[250px]" />;
}

export default function Inside({ onNext }: { onNext?: () => void }) {
	return (
		<>
			<section className="pt-12 transition-colors duration-1000 bg-blue-medium lg:pt-0">
				<div className="container flex items-center justify-center w-full min-h-screen">
					<div className="grid lg:grid-cols-[1fr_auto] gap-20 justify-items-stretch lg:gap-24 xl:w-[977px]">
						<div className="flex flex-col items-center max-w-md gap-3 m-0 md:gap-5 lg:items-start lg:pb-5 lg:max-w-lg xl:max-w-xl lg:gap-7">
							<h1 className="tracking-tight leading-[0.95] lg:leading-[4rem] xl:leading-[5.2rem] text-5xl md:text-6xl md:leading-[3.3rem] text-center text-white lg:text-left lg:text-7xl xl:text-8xl">
								WE ARE
								<br /> BOOSTING
								<br /> WEB3
							</h1>
							<div className="flex flex-col gap-2 xl:gap-3">
								<p className="max-w-md md:text-xl text-lg font-normal text-center text-white xl:max-w-lg xl:text-3xl lg:leading-6 leading-[1.2] md:leading-[1.4rem] xl:leading-[2.2rem] lg:text-left lg:text-xl lg:font-normal">
									Building our own ideas in our unique
									<br /> style without compromise in <b>Szeged.</b>
								</p>
								<p className="max-w-md md:text-xl text-lg font-normal text-center text-white xl:max-w-lg xl:text-3xl lg:leading-6 leading-[1.2] md:leading-[1.4rem] xl:leading-[2.2rem] lg:text-left lg:text-xl lg:font-normal">
									We are backed by teams like
									<br />
									<b className="inline-flex justify-center">
										<a href="https://polygon.technology">Polygon</a>
										<span className="px-2">•</span>
										<a href="https://www.harmony.one">Harmony</a>
										<span className="px-2">•</span>
										<a href="https://aragon.org">Aragon</a>
									</b>
								</p>
							</div>
							<div className="w-full h-[300px] ml-6 lg:hidden">
								<BuildingAnimation />
							</div>
							<button
								className="items-center hidden gap-5 mt-auto text-white transition-transform duration-700 lg:flex group hover:translate-x-1"
								onClick={onNext}
							>
								<span className="tracking-tight hover:tracking-normal font-display font-black lg:text-[1.65rem] xl:text-[2rem] letterSpacingTransition">
									BUILD WITH US
								</span>
								<div className="transition-transform origin-left scale-[1.2] group-hover:translate-x-2">
									<Arrow width={147} className="hidden lg:block xl:hidden" />
									<Arrow width={187} className="hidden xl:block" />
								</div>
							</button>
						</div>
						<div className="hidden lg:block">
							<img className="object-center h-[423px] xl:h-[560px]" src="/outdoor.svg" alt="Outdoor graphic of zgen" />
						</div>
					</div>
				</div>
			</section>
			<div className="lg:hidden">
				<JoinForm />
			</div>
		</>
	);
}
