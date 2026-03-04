import { useState } from "react";
// import LoadingIcon from "../assets/Loading.svg"
import LoadingIcon from '../assets/Loading.svg?react';

type CTAButtonStyle = "primary" | "secondary" | "disabled";

interface CTAProps {
	title: string;
	buttonStyle?: CTAButtonStyle;
	processing?: boolean;
	type?: "button" | "submit" | "reset";
}

const CTA: React.FC<CTAProps> = ({
	title = "Title",
	buttonStyle = "primary",
	processing = false,
	type = "button"
}) => {
	const buttonColor: Record<CTAButtonStyle, string> = {
		primary: "var(--color-primary)",
		secondary: "var(--color-foreground)",
		disabled: "color-mix(in srgb, var(--color-gray-500) 25%, var(--color-foreground))",
	}
	const [hovered, setHovered] = useState<boolean>(false);

	return (
		<button
			className="py-3 px-6
			flex items-center justify-center
			gap-3
			min-w-6 min-h-3
			flex-none
			rounded-lg
			shadow-lg
			w-full"
			type={type}
			style={{
				backgroundColor: hovered ? `color-mix(in srgb, ${buttonColor[buttonStyle]} 75%, var(--color-foreground))` : buttonColor[buttonStyle],
				cursor: buttonStyle === "disabled" ? "not-allowed" : "pointer",
				border: buttonStyle === "secondary" ? `1px solid color-mix(in srgb, var(--color-background) 25%, transparent)` : "none",
			}}
			onPointerEnter={() => setHovered(true)}
			onPointerLeave={() => setHovered(false)}
		>
			<div
				style={{
					opacity: buttonStyle === "disabled" ? "25%" : "100%"
				}}
			>{title}</div>
			{
				processing &&
				<div
					className="w-6.5 h-6.5
				flex items-center justify-center
				relative"
				>
					<LoadingIcon className="absolute text-background w-6.5 h-6.5 animate-spin"></LoadingIcon>
					<LoadingIcon className="absolute delay-75 text-background w-3 h-3 animate-spin"></LoadingIcon>
				</div>
			}
		</button>

	);
}

export default CTA;