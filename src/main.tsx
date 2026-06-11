import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-500.css";
import "@fontsource/red-hat-display/latin-900.css";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);

// Analytics load after mount and only in production, so a slow or dead
// stats server can never delay first paint
if (import.meta.env.PROD) {
	const script = document.createElement("script");
	script.src = "https://stat.zgen.hu/js/plausible.js";
	script.async = true;
	script.dataset.domain = "zgen.hu";
	document.head.appendChild(script);
}
