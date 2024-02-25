'use client';

import getBlockRepeaterFields from "@/app/lib/utils/getBlockRepeaterFields";
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";

// TODO
const PartnersSlider = ({ data }) => {
    // console.log(data);

    const logos = getBlockRepeaterFields(data, [data?.partners, 'partners'], 'logo') || [];
    // console.log(logos);

    return (
        <>
            <section className="partners-slider pt-[2.875rem] lg:pt-[5.21875rem]">
                <div className="container">
                    {/* Heading */}
                    {!!data?.heading && (
                        <DecorativeHeading>
                            {safelySetInnerHTML(data.heading)}
                        </DecorativeHeading>
                    )}
                </div>
            </section>
        </>
    );
};

export default PartnersSlider;