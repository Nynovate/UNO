import { useState, type HTMLInputTypeAttribute } from "react";
import EmailIcon from "../assets/Email.svg?react";
import EyeOpenIcon from "../assets/EyeOpen.svg?react";
import EyeClosedIcon from "../assets/EyeClosed.svg?react";

interface InputProps {
	title: string;
	placeholder: string;
	type: HTMLInputTypeAttribute;
	name: string;
}

const iconStyle: string = "w-6.5 h-6.5 text-background opacity-50";

export const InputText: React.FC<InputProps> = ({
	title = "Title",
	placeholder = "placeholder",
	type = "text",
	name = "InputTextName"
}) => {
	const [focused, setFocused] = useState<boolean>(false);

	return (
		<div
			className="flex flex-col items-center justify-center
			gap-1
			w-full"
		>
			<label
				className="mr-auto text-sm"
				htmlFor={name}
			>
				{title}
			</label>
			<div
				className="grid grid-cols-[auto_1fr] grid-rows-1
				bg-foreground
				p-2
				rounded-lg
				gap-3"
				style={{
					outlineStyle: "solid",
					outlineWidth: focused ? "3px" : "1px",
					outlineColor: "color-mix(in srgb, var(--color-background) 25%, transparent)"
				}}
			>
				<EmailIcon
					className={iconStyle}
				/>
				<input
					className="focus:outline-none font-light
					caret-secondary"
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				/>
			</div>
		</div>
	);
}

export const InputPassword: React.FC<Omit<InputProps, "type">> = ({
	title = "Title",
	placeholder = "placeholder",
	name = "InputTextName"
}) => {
	const [focused, setFocused] = useState<boolean>(false);
	const [showInput, setShowInput] = useState<boolean>(false);

	return (
		<div
			className="flex flex-col items-center justify-center
			gap-1
			w-full"
		>
			<label
				className="mr-auto text-sm"
				htmlFor={name}
			>
				{title}
			</label>
			<div
				className="grid grid-cols-[1fr_auto] grid-rows-1
				bg-foreground
				p-2
				rounded-lg
				gap-3"
				style={{
					outlineStyle: "solid",
					outlineWidth: focused ? "3px" : "1px",
					outlineColor: "color-mix(in srgb, var(--color-background) 25%, transparent)"
				}}
			>
				<input
					className="focus:outline-none font-light
					caret-secondary"
					type={showInput ? "text" : "password"}
					name={name}
					id={name}
					placeholder={placeholder}
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				/>
				<button
					type="button"
					className="cursor-pointer"
					onClick={() => setShowInput(showInput ? false : true)}
				>
					{
						showInput ?
							<EyeClosedIcon
								className={iconStyle}
							/>
							:
							<EyeOpenIcon
								className={iconStyle}
							/>
					}
				</button>
			</div>
		</div>
	);
}