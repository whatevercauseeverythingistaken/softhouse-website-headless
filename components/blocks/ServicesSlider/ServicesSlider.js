'use client';

import getBlockRepeaterFields from "@/app/lib/utils/getBlockRepeaterFields";
import { SwiperSlider, SwiperSlide } from "@/components/functional/SwiperSlider/SwiperSlider";

const ServicesSlider = ({ data }) => {
	const icons = getBlockRepeaterFields(data, [data?.services_slider_slides, 'services_slider_slides'], 'icon') || [];
	const labels = getBlockRepeaterFields(data, [data?.services_slider_slides, 'services_slider_slides'], 'label') || [];
	const texts = getBlockRepeaterFields(data, [data?.services_slider_slides, 'services_slider_slides'], 'text') || [];

	return (
		<>
			<section className="services-slider bg-shade-light py-[2.875rem] border-t border-b border-shadebg">
				<div className="container">
					{/* Heading */}
					{!!data?.services_slider_heading && (
						<h2 className="text-center mb-[4.5625rem]">
							{data.services_slider_heading}
						</h2>
					)}
				</div>
				<SwiperSlider
					css-mode={true}
					slidesPerView={3.5}
					centeredSlides="true"
					pagination="true"
					breakpoints={{ 1023: { slidesPerView: 1 } }}
					on={{
						slideChange: () => {
							// console.log('slide changed')
						},
						progress: (s, progress) => {
							// console.log(`progress is ${progress}`)
						},
					}}
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
				</SwiperSlider>
			</section>
		</>
	)
};

export default ServicesSlider;