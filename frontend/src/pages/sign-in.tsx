import { Trans, useTranslation } from "react-i18next";
import BackgroundWave from "../assets/BackgroundWave.svg"
import { InputPassword, InputText } from "../components/input";
import CTA from "../components/CTA";
import { Link, Links } from "react-router-dom";

const SignInPage: React.FC = () => {
	const { t } = useTranslation(["common", "signIn"]);

	const submitForms = async (e: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());
		e.preventDefault();
		console.log(data);
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
				blur-[124px]
				w-full h-full object-cover"
				src={BackgroundWave}
				alt="Background Wave"
			/>
			<section
				className="z-1
				w-full max-w-100"
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
					<Link
						to="/sign-in/forgot-pass"
						className="font-normal text-sm
						mr-auto
						cursor-pointer
						hover:underline
						"
					>
						{t("signIn:buttons.forgotPass")}
					</Link>
					<CTA
						title={t("CTA.signIn")}
						type="submit"
					/>
					<div
						className="w-full h-px bg-background my-4"
					>
					</div>
					<CTA
						title={t("CTA.google")}
						buttonStyle="secondary"
						type="submit"
					/>
					<Trans
						t={t}
						i18nKey="signIn:buttons.alreadyHaveAnAccount"
						components={{
							simple: <b className="font-normal text-sm" />,
							redirect: <Link to="/sign-up" className="hover:underline font-bold" />
						}}
					>
					</Trans>
				</form>
			</section>
		</main>
	);
}

export default SignInPage;