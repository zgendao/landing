import { useRef } from "react";
import Outside from "./components/Outside";
import Inside from "./components/Inside";
import JoinForm from "./components/JoinForm";
import { ToastProvider } from "./components/Toast";

export default function App() {
	const insideRef = useRef<HTMLDivElement>(null);
	const joinRef = useRef<HTMLDivElement>(null);

	const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => () => ref.current?.scrollIntoView({ behavior: "smooth" });

	return (
		<ToastProvider>
			<Outside onNext={scrollTo(insideRef)} />
			<div ref={insideRef}>
				<Inside onNext={scrollTo(joinRef)} />
			</div>
			<div ref={joinRef}>
				<JoinForm />
			</div>
		</ToastProvider>
	);
}
