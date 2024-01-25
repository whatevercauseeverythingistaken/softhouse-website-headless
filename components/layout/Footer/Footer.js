import { getFooter } from "@/app/lib/utils/getFooter";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = async () => {
	const { top, bottom } = await getFooter();

	return (
		<>
			<footer
				className="
					mt-auto
            	"
			>
				<FooterTop items={top || {}} />
				<FooterBottom items={bottom || {}} />
			</footer>
		</>
	);
};

export default Footer;