'use client';

import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import CTAButton2 from "@/components/ui/CTAButton2/CTAButton2";
import { motion } from "framer-motion";

const CTA = ({ data }) => {
	// console.log(data);

	return (
		<>
			<section className="approach-section py-10 lg:py-[5.5625rem] overflow-hidden">
				<div className="container">
					<motion.div 
						initial={{ opacity: 0, translateY: '-100%' }}
						whileInView={{ opacity: 1, translateY: '0' }}
						viewport={{once: true}}
						transition={{
							type: "spring",
							delay: 0,
							duration: 0.8
						}}
						className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-100 rounded-[1.25rem] p-4 lg:py-[2.9375rem] lg:px-[5.25rem]"
					>
						{/* Heading col */}
						<div className="flex items-center justify-center lg:justify-start">	
							{!!data?.heading && (
								<h2 className="text-center lg:text-left">
									{safelySetInnerHTML(data.heading)}
								</h2>
							)}
						</div>
						{/* Buttons col */}
						<div className="flex items-center justify-center lg:justify-end">	
							{!!data?.button && (
								<CTAButton2
									href={!!data.button?.url ? data.button?.url : '#' } 
									target={!!data.button?.target ? data.button?.target : '#' }
								>
									{!!data.button?.title && data.button?.title}
								</CTAButton2>
							)}
						</div>
					</motion.div>
				</div>
			</section>
		</>
	)
};

export default CTA;