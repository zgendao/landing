import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

type Kind = "success" | "error";
type Toast = { id: number; kind: Kind };

const STYLES: Record<Kind, { background: string; color: string }> = {
	success: { background: "#B0D8C1", color: "#305140" },
	error: { background: "#D8B0B0", color: "#743636" }
};

const LABELS: Record<Kind, string> = { success: "Success", error: "Error" };

const ToastContext = createContext<(kind: Kind) => void>(() => {});

export function useToast() {
	return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
	const [toasts, setToasts] = useState<Toast[]>([]);
	const nextId = useRef(0);

	const push = useCallback((kind: Kind) => {
		const id = ++nextId.current;
		setToasts((current) => [...current, { id, kind }]);
		setTimeout(() => setToasts((current) => current.filter((toast) => toast.id !== id)), 4000);
	}, []);

	return (
		<ToastContext.Provider value={push}>
			{children}
			<div className="fixed bottom-16 left-1/2 z-50 flex w-64 -translate-x-1/2 flex-col-reverse gap-2">
				{toasts.map((toast) => (
					<div
						key={toast.id}
						className="rounded px-4 py-2 text-center font-medium shadow-md"
						style={{ ...STYLES[toast.kind], animation: "toast-in 300ms ease-out" }}
					>
						{LABELS[toast.kind]}
					</div>
				))}
			</div>
		</ToastContext.Provider>
	);
}
