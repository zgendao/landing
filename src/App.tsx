function Lab({ href, children }: { href: string; children: string }) {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			{children}
		</a>
	);
}

function Dot({ className = "" }: { className?: string }) {
	return <span aria-hidden className={`size-1.5 rounded-full bg-white/40 ${className}`} />;
}

export default function App() {
	return (
		<div className="flex flex-col items-center min-h-screen px-8">
			<main className="flex flex-col items-center justify-center flex-1 gap-10 py-16 text-center md:gap-12">
				<img className="h-28 md:h-36 fade-up logo-glow" src="/logo.svg" alt="ZGEN" />
				<h1 className="tracking-tight leading-[0.95] text-5xl md:text-7xl xl:text-8xl xl:leading-[0.95] text-white fade-up fade-up-1">
					A GUILD OF
					<br /> CURIOUS
					<br /> BUILDERS
				</h1>
				<div className="flex flex-col items-center gap-4 text-lg md:text-xl xl:text-2xl fade-up fade-up-2 md:gap-5">
					<p className="text-white/75">Since 2019, the labs behind</p>
					<div className="flex flex-wrap items-center justify-center font-bold text-white gap-x-4 gap-y-3">
						<span className="flex items-center gap-4 whitespace-nowrap">
							<Lab href="https://guild.xyz">guild.xyz</Lab>
							<Dot />
							<Lab href="https://score.xyz">score.xyz</Lab>
						</span>
						<Dot className="hidden md:block" />
						<span className="flex items-center gap-4 whitespace-nowrap">
							<Lab href="https://bank.xyz">bank.xyz</Lab>
							<Dot />
							<Lab href="https://founder.xyz">founder.xyz</Lab>
						</span>
					</div>
				</div>
			</main>
			<footer className="pb-7 fade-up fade-up-3">
				<a className="text-sm text-white/60 transition-colors hover:text-white md:text-base" href="mailto:hey@zgen.hu">
					hey@zgen.hu
				</a>
			</footer>
		</div>
	);
}
