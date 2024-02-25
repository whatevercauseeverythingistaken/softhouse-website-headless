// 'use client';

import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import CTAButton2 from "@/components/ui/CTAButton2/CTAButton2";

const CTA = ({ data }) => {
	// console.log(data);

	return (
		<>
			<section className="approach-section py-10 lg:py-[5.5625rem]">
				<div className="container">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-100 rounded-[1.25rem] p-4 lg:py-[2.9375rem] lg:px-[5.25rem]">
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
					</div>
				</div>
			</section>
		</>
	)
};

export default CTA;