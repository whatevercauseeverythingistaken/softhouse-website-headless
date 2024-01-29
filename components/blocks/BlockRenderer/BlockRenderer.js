import HeroBanner from "../HeroBanner/HeroBanner";
import ServicesSlider from "../ServicesSlider/ServicesSlider";
import AboutUs from "../AboutUs/AboutUs";
import PartnersSlider from "../PartnersSlider/PartnersSlider";
import OpinionsSlider from "../OpinionsSlider/OpinionsSlider";
import CaseStudies from "../CaseStudies/CaseStudies";
import ClientQuotes from "../ClientQuotes/ClientQuotes";
import Approach from "../Approach/Approach";

export const BlockRenderer = ({ blocks }) => {
	return blocks.map(block => {
		// Render blocks based on their name property
		switch(block.name)
		{
			// Test block
			case 'acf/test2block': {
				// console.log('BLOCK: ', block);
				return (
					<div key={block.id} >
                        test2Block
                    </div>
				);
			}
			// Hero banner
			case 'acf/herobanner': {
				console.log('HERO BANNER: ', block);
				return (
					<HeroBanner key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// Services slider
			case 'acf/servicesslider': {
				console.log('SERVICES SLIDER: ', block);
				return (
					<ServicesSlider key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// About us
			case 'acf/aboutus': {
				console.log('ABOUT US: ', block);
				return (
					<AboutUs key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// Partners slider
			case 'acf/partnersslider': {
				console.log('PARTNERS SLIDER: ', block);
				return (
					<PartnersSlider key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// Opinions slider
			case 'acf/opinionsslider': {
				console.log('OPINIONS SLIDER: ', block);
				return (
					<OpinionsSlider key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// Case studies
			case 'acf/casestudies': {
				console.log('CASE STUDIES: ', block);
				return (
					<CaseStudies key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// Client quotes
			case 'acf/clientquotes': {
				console.log('CLIENT QUOTES: ', block);
				return (
					<ClientQuotes key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// Development & Design approach
			case 'acf/approach': {
				console.log('APPROACH: ', block);
				return (
					<Approach key={block.id} data={block?.attributes?.data || {}} />
				);
			}
			// DEFAULT CASE: UNKNOW BLOCK
			default: {
				console.log('UNKNOWN: ', block);
				return null;
			}
		}
	});
}