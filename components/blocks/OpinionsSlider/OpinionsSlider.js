'use client';

import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";

// TODO
const OpinionsSlider = ({data}) => {
    // console.log(data);

    return (
        <>
            <section className="opinions-slider-section pt-[7.8125rem] pb-[8.75rem]">
                <div className="container">
                    {/* Wrapper */}
                    <div className="flex flex-col max-w-[59.0625rem] mx-auto">
                        {/* Heading */}
                        {!!data?.heading && (
                            <DecorativeHeading alignment="center">
                                {safelySetInnerHTML(data.heading)}
                            </DecorativeHeading>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
};

export default OpinionsSlider;