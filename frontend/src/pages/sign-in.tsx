import { useTranslation } from "react-i18next";
import BackgroundWave from "../assets/BackgroundWave.svg"
import { InputPassword, InputText } from "../components/input";
import CTA from "../components/CTA";

const SignInPage: React.FC = () => {
	const { t } = useTranslation(["common", "signIn"]);

	const submitForms = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Hello");
	}
	return (
		<main
			className="flex items-center justify-center
			relative
			w-full h-full"
		>
			<img
				className="absolute top-0 left-0
				opacity-75
				select-none
				blur-xl
				w-full h-full object-cover"
				src={BackgroundWave}
				alt="Background Wave"
			/>
			<section
				className="z-1"
			>
				<form
					className="flex flex-col items-center justify-center
					gap-3
					w-full"
					onSubmit={submitForms}
				>
					<InputText
						title={t("signIn:forms.usernameOrEmail.title")}
						placeholder={t("signIn:forms.usernameOrEmail.placeholder")}
						type="text"
						name="usernameOrEmail"
					/>
					<InputPassword
						title={t("signIn:forms.password.title")}
						placeholder={t("signIn:forms.password.placeholder")}
						name="password"
					/>
					<CTA
						title={t("CTA.signIn")}
					/>
				</form>
			</section>
		</main>
	);
}

export default SignInPage;