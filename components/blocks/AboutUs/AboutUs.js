'use client';

import safelySetInnerHTML from '@/app/lib/utils/safelySetInnerHTML';
import DecorativeHeading from '@/components/ui/DecorativeHeading/DecorativeHeading';
import { motion } from 'framer-motion';

import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';
import Video from '@/components/functional/Video/Video';

const AboutUs = ({ data }) => {

    return (
        <>
            <section className="about-us-section relative py-16 lg:pt-[11.5625rem] lg:pb-[5.21875rem] overflow-hidden">
                <div className="container">
                    {/* Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1.75rem]">
                        {/* Content col */}
                        <div className="flex flex-col pr-[4.125rem]">
                            {/* Heading */}
                            {!!data?.heading && (
                                <motion.div
                                    initial={{ opacity: 0, translateX: '-100%' }}
                                    whileInView={{ opacity: 1, translateX: '0' }}
                                    viewport={{once: true}}
                                    transition={{
                                        type: "spring",
                                        delay: 0,
                                        duration: 0.8
                                    }}
                                >
                                    <DecorativeHeading>
                                        {safelySetInnerHTML(data?.heading)}
                                    </DecorativeHeading>
                                </motion.div>
                            )}
                            {/* Description */}
                            {!!data?.description && (
                                <motion.div
                                    initial={{ opacity: 0, translateX: '-100%' }}
                                    whileInView={{ opacity: 1, translateX: '0' }}
                                    viewport={{once: true}}
                                    transition={{
                                        type: "spring",
                                        delay: 0.1,
                                        duration: 0.8
                                    }}
                                >
                                    <p className="text-gray-600 text-lg leading-9 mt-8">
                                        {safelySetInnerHTML(data.description)}
                                    </p>
                                </motion.div>
                            )}
                            {/* Button */}
                            {!!data?.link && (
                                <motion.div 
                                    initial={{ opacity: 0, translateX: '-100%' }}
                                    whileInView={{ opacity: 1, translateX: '0' }}
                                    viewport={{once: true}}
                                    transition={{
                                        type: "spring",
                                        delay: 0.2,
                                        duration: 0.8
                                    }}
                                    className="flex mt-12"
                                >
                                    <ArrowButton
                                        href={data?.link?.url || '#'}
                                        target={data?.link?.target || '_self'}
                                    >
                                        {data?.link?.title || ''}
                                    </ArrowButton>
                                </motion.div>
                            )}
                        </div>
                        {/* Video col */}
                        <motion.div 
                            initial={{ opacity: 0, translateX: '100%' }}
                            whileInView={{ opacity: 1, translateX: '0' }}
                            viewport={{once: true}}
                            transition={{
                                type: "spring",
                                delay: 0.4,
                                duration: 0.8
                            }}
                            className="flex"
                        >
                            {!!data?.video?.url && (
                                <Video url={data.video.url} thumb={data?.video_thumbnail} />
                            )}
                        </motion.div>
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