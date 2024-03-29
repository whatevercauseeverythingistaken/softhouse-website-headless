import HeroBanner from "../HeroBanner/HeroBanner";
import ServicesSlider from "../ServicesSlider/ServicesSlider";
import AboutUs from "../AboutUs/AboutUs";
import PartnersSlider from "../PartnersSlider/PartnersSlider";
import OpinionsSlider from "../OpinionsSlider/OpinionsSlider";
import CaseStudies from "../CaseStudies/CaseStudies";
import ClientQuotes from "../ClientQuotes/ClientQuotes";
import Approach from "../Approach/Approach";
import TechStack from "../TechStack/TechStack";
import DevSteps from "../DevSteps/DevSteps";
import BlogPosts from "../BlogPosts/BlogPosts";
import CTA from "../CTA/CTA";

export const BlockRenderer = ({ blocks }) => {
	return blocks.map(block => {
		// Don't render blocks that were marked as hidden, otherwise proceed
		if ( !!block?.attributes?.data?.hidden )
		{
			return;
		}
		else
		{
			// Render blocks based on their name property
			switch(block.name)
			{
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
				// Tech stack
				case 'acf/techstack': {
					console.log('TECH STACK: ', block);
					return (
						<TechStack key={block.id} tabsId={block.id} data={block?.attributes?.data || {}} />
					);
				}
				// Dev steps
				case 'acf/devsteps': {
					console.log('DEV STEPS: ', block);
					return (
						<DevSteps key={block.id} data={block?.attributes?.data || {}} />
					);
				}
				// Blog Posts
				case 'acf/blogposts': {
					console.log('BLOG POSTS: ', block);
					return (
						<BlogPosts key={block.id} data={block?.attributes?.data || {}} />
					);
				}
				// Blog Posts
				case 'acf/cta': {
					console.log('CTA: ', block);
					return (
						<CTA key={block.id} data={block?.attributes?.data || {}} />
					);
				}
				// DEFAULT CASE: UNKNOW BLOCK
				default: {
					console.log('UNKNOWN: ', block);
					return null;
				}
			}
		}
	});
}