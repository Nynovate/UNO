import { Trans, useTranslation } from "react-i18next";
import BackgroundWave from "../assets/BackgroundWave.svg"
import { InputPassword, InputText } from "../components/input";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import { H1, H5 } from "../components/typography";

const SignUpPage: React.FC = () => {
	const { t } = useTranslation(["common", "signUp"]);

	const submitForms = async (e: React.FormEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());
		e.preventDefault();
		console.log(data);
	}
	return (
		<main
			className="flex items-center justify-center
			gap-7
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
			<header
				className="hidden
				lg:flex flex-col items-end justify-center
				z-1
				p-4"
			>
				<H1
					style={{
						fontWeight: "bold",
						fontSize: "2.5rem"
					}}
				>
					<Trans
						t={t}
						i18nKey="signUp:headers.connect.title"
						components={{
							one: <b className="text-primary text-shadow-lg" style={{ fontWeight: "bold" }} />,
							two: <b className="text-secondary text-shadow-lg" style={{ fontWeight: "bold" }} />,
						}}
					>
					</Trans>
				</H1>
				<H5>
					{t("signUp:headers.connect.subtitle")}
				</H5>
			</header>
			<section
				className="z-1
				w-full max-w-125"
			>
				<form
					className="flex flex-col items-center justify-center
					p-4
					gap-4
					w-full"
					onSubmit={submitForms}
				>
					<InputText
						title={t("signUp:forms.username.title")}
						placeholder={t("signUp:forms.username.placeholder")}
						type="text"
						name="username"
					/>
					<InputText
						title={t("signUp:forms.mail.title")}
						placeholder={t("signUp:forms.mail.placeholder")}
						type="mail"
						name="mail"
					/>
					<InputPassword
						title={t("signUp:forms.password.title")}
						placeholder={t("signUp:forms.password.placeholder")}
						name="password"
					/>
					<CTA
						title={t("CTA.signUp")}
						type="submit"
					/>
					<div
						className="text-left text-sm"
					>
						<Trans
							t={t}
							i18nKey="signUp:notice.terms"
							components={{
								one: <Link to="/terms-of-service" className="hover:underline" style={{ fontWeight: "bold" }} />,
								two: <Link to="/privacy-policy" className="hover:underline" style={{ fontWeight: "bold" }} />
							}}
						>
						</Trans>
					</div>
					<div
						className="grid grid-cols-[1fr_auto_1fr]
						gap-3
						place-items-center
						w-full"
					>
						<div
							className="w-full h-px bg-linear-to-l from-background to-transparent my-4"
						>
						</div>
						<div>
							{t("or")}
						</div>
						<div
							className="w-full h-px bg-linear-to-r from-background to-transparent my-4"
						>
						</div>
					</div>
					<CTA
						title={t("CTA.google")}
						buttonStyle="secondary"
						type="submit"
					/>

					<div
						className="text-sm"
					>
						<Trans
							t={t}
							i18nKey="signUp:buttons.dontHaveAnAccount"
							components={{
								simple: <b className="font-normal" />,
								redirect: <Link to="/sign-in" className="hover:underline" style={{ fontWeight: "bold" }} />
							}}
						>
						</Trans>
					</div>
				</form>
			</section>
		</main>
	);
}

export default SignUpPage;