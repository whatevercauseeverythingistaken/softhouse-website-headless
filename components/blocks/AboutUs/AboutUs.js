'use client';

import safelySetInnerHTML from '@/app/lib/utils/safelySetInnerHTML';
import DecorativeHeading from '@/components/ui/DecorativeHeading/DecorativeHeading';
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';
import Video from '@/components/functional/Video/Video';

const AboutUs = ({ data }) => {

    return (
        <>
            <section className="about-us-section relative py-16 lg:pt-[11.5625rem] lg:pb-[5.21875rem]">
                <div className="container">
                    {/* Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.75rem]">
                        {/* Content col */}
                        <div className="flex flex-col pr-[4.125rem]">
                            {/* Heading */}
                            {!!data?.heading && (
                                <DecorativeHeading>
                                    {safelySetInnerHTML(data?.heading)}
                                </DecorativeHeading>
                            )}
                            {/* Description */}
                            {!!data?.description && (
                                <p className="text-gray-600 text-lg leading-9 mt-8">
                                    {safelySetInnerHTML(data.description)}
                                </p>
                            )}
                            {/* Button */}
                            {!!data?.link && (
                                <div className="flex mt-12">
                                    <ArrowButton
                                        href={data?.link?.url || '#'}
                                        target={data?.link?.target || '_self'}
                                    >
                                        {data?.link?.title || ''}
                                    </ArrowButton>
                                </div>
                            )}
                        </div>
                        {/* Video col */}
                        <div className="flex">
                            {!!data?.video?.url && (
                                <Video url={data.video.url} thumb={data?.video_thumbnail} />
                            )}
                        </div>
                    </div>
                </div>
                {/* Decorative sphere */}
                <div 
                    className="
                        decorative-sphere top right-[10%]
                    "
                ></div>
            </section>
        </>
    );
};

export default AboutUs;