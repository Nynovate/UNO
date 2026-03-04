import type { CSSProperties, ReactNode } from "react";

interface HeaderProps {
	style?: CSSProperties;
	children: ReactNode;
}

export const H1: React.FC<HeaderProps> = ({
	style = {},
	children
}) => {
	return (
		<h1
			className="text-4xl"
			style={style}
		>
			{children}
		</h1>
	);
}

export const H2: React.FC<HeaderProps> = ({
	style = {},
	children
}) => {
	return (
		<h2
			className="text-3xl"
			style={style}
		>
			{children}
		</h2>
	);
}

export const H3: React.FC<HeaderProps> = ({
	style = {},
	children
}) => {
	return (
		<h3
			className="text-2xl"
			style={style}
		>
			{children}
		</h3>
	);
}

export const H4: React.FC<HeaderProps> = ({
	style = {},
	children
}) => {
	return (
		<h4
			className="text-xl"
			style={style}
		>
			{children}
		</h4>
	);
}

export const H5: React.FC<HeaderProps> = ({
	style = {},
	children
}) => {
	return (
		<h5
			className="text-lg"
			style={style}
		>
			{children}
		</h5>
	);
}

export const H6: React.FC<HeaderProps> = ({
	style = {},
	children
}) => {
	return (
		<h6
			className="text-md"
			style={style}
		>
			{children}
		</h6>
	);
}