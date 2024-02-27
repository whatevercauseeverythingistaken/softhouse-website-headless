'use client';

import { useEffect, useState, useRef } from "react";

import { v4 as uuid } from "uuid";
import CTAButton from "@/components/ui/CTAButton/CTAButton";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import TypingAnimation from "@/components/ui/TypingAnimation/TypingAnimation";
import CursorBlinker from "@/components/ui/CursorBlinker/CursorBlinker";

// ATTENTION: This is very dirty and unnecessarily complicated just for the text segments to work. Don't do this at home (or work)
const HeroBanner = ({ data }) => {
    // Get segments for heading
    const getHeadingSegments = () => {
        let segments = [];

        const segmentClasses = {
            light: 'font-light',
            bold: 'font-extrabold',
            gradient_1: 'text-transparent font-extrabold bg-[linear-gradient(180deg,_#DE4396_0%,_rgba(13,_28,_159,_0.00)_100%)] bg-clip-text',
            gradient_2: 'text-transparent font-extrabold bg-[linear-gradient(225deg,_#F7666F_0%,_#406AFF_100%)] bg-clip-text'
        };

        // Get rows
        if (!!data?.heading_segments_row) {
            for (let i = 0; i < data.heading_segments_row; i++) {
                // Draw heading segments
                if (!!data[`heading_segments_row_${i}_heading_segments`]) {
                    for (let j = 0; j < data[`heading_segments_row_${i}_heading_segments`]; j++) {
                        if (data[`heading_segments_row_${i}_heading_segments_${j}_text`] && data[`heading_segments_row_${i}_heading_segments_${j}_text_type`]) {
                            segments.push({
                                type: data[`heading_segments_row_${i}_heading_segments_${j}_text_type`],
                                lite: (data[`heading_segments_row_${i}_heading_segments_${j}_text_lite`] === '1') ? true : false,
                                text: data[`heading_segments_row_${i}_heading_segments_${j}_text`]
                            });
                        }
                    }
                }
            }
        }

        // Used to delay new text segment animation by the duration of previous text segment animation
        let curDelay = 0;
        let prevSegmentText = '';
        let callback = undefined;

        return segments.map((segment, index) => {
            curDelay = curDelay + ((prevSegmentText.length / 40) || 0);
            prevSegmentText = segment.text;

            if (index === (segments.length - 1)) {
                callback = () => setSegmentsAnimationFinished(true);
            }

            return (
                <span key={uuid()} className={`${segmentClasses[segment.type] || ''} ${segment.text_lite ? 'lite' : ''}`}>
                    <TypingAnimation delay={curDelay} duration={(segment.text.length / 40)} useBlinker={false} finishedCallback={callback}>
                        {segment.text || ''}
                    </TypingAnimation>
                </span>
            );
        });
    };

    // STATES AND SUCH
    const [segmentsAnimationFinished, setSegmentsAnimationFinished] = useState(false);
    const [descAnimationFinished, setDescAnimationFinished] = useState(false);
    const [headingSegments, setHeadingSegments] = useState([]);
    // console.log('segments animation finished: ', segmentsAnimationFinished);

    useEffect(() => {
        setHeadingSegments(getHeadingSegments);
    }, []);

    // Used for hearo image animation
    const sectionScrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionScrollRef,
        offset: ['end end', 'start start']
    });

    const targetScale = useTransform(
        scrollYProgress,
        // Map x from these values:
        [0, 1],
        // Into these values:
        [1, 1.15]
    );

    return (
        <>
            <section className="relative hero-banner-section py-10 lg:pt-[4.3125rem] lg:pb-[6.6875rem]" ref={sectionScrollRef}>
                <div className="container">
                    {/* Cols */}
                    <div className="flex flex-col lg:flex-row">
                        {/* Content col */}
                        <div className="lg:min-w-[43.17073170%] lg:max-w-[43.17073170%] lg:w-[43.17073170%]">
                            <div className="flex flex-col">
                                {/* Heading */}
                                <h1>
                                    {headingSegments}{!segmentsAnimationFinished && <CursorBlinker />}
                                </h1>
                                {/* Description */}
                                {!!data?.description && (
                                    <p className="text-gray-700 text-lg mt-7">
                                        {segmentsAnimationFinished && (
                                            <TypingAnimation 
                                                duration={data.description.length / 80}
                                                finishedCallback={() => setDescAnimationFinished(true)}
                                            >
                                                {data.description}
                                            </TypingAnimation>
                                        )}
                                    </p>
                                )}
                                {/* Button */}
                                {!!data?.button && (
                                    <div className="flex mt-10 lg:mt-[4.6875rem]">
                                        {!!descAnimationFinished && (
                                            <motion.div
                                                initial={{ opacity: 0, translateY: '100%' }}
                                                whileInView={{ opacity: 1, translateY: '0' }}
                                                viewport={{once: true}}
                                                transition={{
                                                    type: "spring",
                                                    delay: 0,
                                                    duration: 0.8
                                                }}
                                            >
                                                <CTAButton
                                                    href={data.button?.url || ''}
                                                    target={data.button?.target || '_self'}
                                                    type={2}
                                                    className="w-full lg:w-max"
                                                >
                                                    {data.button?.title || ''}
                                                </CTAButton>
                                            </motion.div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Image col */}
                        <div className="relative lg:min-w-[56.82926829%] lg:max-w-[56.82926829%] lg:w-[56.82926829%] lg:pr-[5.3125rem] z-[-1]">
                            <div className="relative flex min-w-full max-w-full w-full pb-[88.92508143%]">
                                {/* Image animated by scroll */}
                                <motion.div
                                    className="absolute top-0 left-0 flex min-w-full max-w-full w-full min-h-full max-h-full h-full"
                                    style={{ scale: targetScale }}
                                >
                                    {!!data?.image && (
                                        <Image
                                            src={data.image?.url || ''}
                                            alt={data.image?.alt || ''}
                                            fill
                                            className="object-center object-cover"
                                        />
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Decorative eclipse */}
                <div
                    className="
                        decorative-sphere bottom left-[33.54166666%]
                    "
                ></div>
            </section>
        </>
    );
};

export default HeroBanner;