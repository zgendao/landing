import { useState } from "react";
import Outside from "./components/Outside";
import Inside from "./components/Inside";
import JoinForm from "./components/JoinForm";
import { ToastProvider } from "./components/Toast";

export type Page = "outside" | "inside" | "form";

export default function App() {
	const [page, setPage] = useState<Page>("outside");

	return (
		<ToastProvider>
			{page === "outside" && <Outside onNext={() => setPage("inside")} />}
			{page === "inside" && <Inside onNext={() => setPage("form")} />}
			{page === "form" && <JoinForm />}
		</ToastProvider>
	);
}
