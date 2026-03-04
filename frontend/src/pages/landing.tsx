import { Trans, useTranslation } from "react-i18next";
import BackgroundWave from "../assets/BackgroundWave.svg"
import { H1, H6 } from "../components/typography";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
	const { t } = useTranslation(["common", "landing"]);

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
				className="p-4 md:p-8 lg:p-16 xl:p-24
				w-full
				z-1"
			>
				<article
					className="flex flex-col items-start justify-center
					gap-2"
				>
					<H1
						style={{
							fontWeight: "bold",
							fontSize: "3.25rem",
							maxWidth: "37.5rem"

						}}
					>
						<Trans
							t={t}
							i18nKey="landing:hero.title"
							components={{
								red: <b className="text-red-500 font-bold text-[3rem]" />,
								yellow: <b className="text-yellow-500 font-bold text-[3rem]" />
							}}
						>
						</Trans>
					</H1>
					<H6
						style={{
							maxWidth: "30rem",
							fontWeight: "lighter"
						}}
					>
						{t("landing:hero.subtitle")}
					</H6>
					<div
						className="grid grid-cols-2 gap-3 mt-6"
					>
						<Link to="/sign-in">
							<CTA
								title={t("common:CTA.signIn")}
								buttonStyle="secondary"
							></CTA>
						</Link>
						<Link to="/sign-up">
							<CTA
								title={t("common:CTA.signUp")}
								buttonStyle="primary"
							></CTA>
						</Link>
					</div>
				</article>
			</section>

		</main>
	);
}

export default LandingPage;