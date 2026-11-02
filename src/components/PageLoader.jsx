import { useTheme } from "../context/ThemeContext";

export const PageLoader = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<div
			role="status"
			aria-live="polite"
			className="flex min-h-[60vh] flex-col items-center justify-center gap-3"
		>
			<div
				className={`h-10 w-10 animate-spin rounded-full border-4 border-t-transparent ${
					isDark ? "border-blue-400" : "border-blue-600"
				}`}
			/>
			<span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
				Loading...
			</span>
		</div>
	);
};
