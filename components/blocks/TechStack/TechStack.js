'use client';

import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import getBlockRepeaterFields from '@/app/lib/utils/getBlockRepeaterFields';
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const TechStack = ({ tabsId, data }) => {
    // Manage state
    const [activeTab, setActiveTab] = useState(`${tabsId}_0`);
    const [animateTabs, setAnimateTabs] = useState(true);

    // Get block fields
    // console.log(data);

    useEffect(() => {
        if ( animateTabs === true )
        {
            setAnimateTabs(false);
        }
    }, [animateTabs, activeTab]);

    const tabs = getBlockRepeaterFields(data, [data?.tabs, 'tabs'], 'logos') || [];
    const labels = getBlockRepeaterFields(data, [data?.tabs, 'tabs'], 'label') || [];
    const logos = tabs.map((val, index) => {
        return getBlockRepeaterFields(data, [data[`tabs_${index}_logos`] || '', `tabs_${index}_logos`], 'logo') || []
    });

    // console.log("LABELS: ", labels);
    // console.log("LOGOS: ", logos);

    // Get em all to one array
    const tabsFixed = Array.from({length: data?.tabs || 0}).map((val, index) => {
        return {
            label: labels[index] || '',
            logos: logos[index] || [],
        }
    });

    // console.log("TABS FIXED: ", tabsFixed);

    return (
        <>
            <section className="tech-stack-section py-10 lg:py-20">
                <div className="container">
                    {/* Heading */}
                    {!!data?.heading && (
                        <motion.div
                            initial={{ opacity: 0, translateY: '-100%' }}
                            whileInView={{ opacity: 1, translateY: '0' }}
                            viewport={{once: true}}
                            transition={{
                                type: "spring",
                                delay: 0,
                                duration: 0.8
                            }}
                        >
                            <DecorativeHeading alignment="center">
                                {safelySetInnerHTML(data.heading)}
                            </DecorativeHeading>
                        </motion.div>
                    )}
                    {/* Tabs */}
                    <ul 
                        className="list-none flex flex-wrap justify-center gap-6 lg:gap-[3.75rem] mt-[2.375rem]"
                    >
                        {!!tabsFixed && tabsFixed.map((item, index) => (
                            <motion.li 
                                initial={ animateTabs ? { opacity: 0, translateX: '-100%' } : {}}
                                whileInView={ animateTabs ? { opacity: 1, translateX: '0' } : {}}
                                viewport={{once: true}}
                                transition={{
                                    type: "spring",
                                    delay: ((index + 1) * 0.1),
                                    duration: 0.8
                                }}
                                key={uuid()}
                            >
                                {!!item?.label && (
                                    <button 
                                        id={`${tabsId}_${index}`}
                                        onClick={() => setActiveTab(`${tabsId}_${index}`)}
                                        type="button"
                                        className={`
                                            relative
                                            text-lg
                                        `}
                                    >
                                        {/* Active text */}
                                        <span
                                            className={`
                                                text-transparent
                                                font-semibold
                                                bg-[image:var(--gradient-primary)]
                                                bg-clip-text
                                                opacity-0

                                                ${`${tabsId}_${index}` === activeTab && `
                                                    opacity-100
                                                `}
                                            `}
                                        >
                                            {item.label}
                                        </span>
                                        {/* Active bar */}
                                        <AnimatePresence>
                                            {`${tabsId}_${index}` === activeTab && (
                                                <motion.div
                                                    initial={{ opacity: 0, scaleX: '0' }}
                                                    whileInView={{ opacity: 1, scaleX: '100%' }}
                                                    exit={{ opacity: 0, scaleX: '0' }}
                                                    viewport={{once: true}}
                                                    transition={{
                                                        type: "spring",
                                                        delay: 0,
                                                        duration: 0.8
                                                    }}
                                                    className="
                                                        absolute
                                                        top-0
                                                        left-0
                                                        min-w-full
                                                        max-w-full
                                                        w-full
                                                        min-h-full
                                                        max-h-full
                                                        h-full
                                                    "
                                                >
                                                    <span
                                                        className={`
                                                            absolute
                                                            bottom-0
                                                            left-[50%]
                                                            min-w-[32.89473684%]
                                                            max-w-[32.89473684%]
                                                            w-[32.89473684%]
                                                            min-h-[0.1875rem]
                                                            max-h-[0.1875rem]
                                                            h-[0.1875rem]
                                                            bg-[image:var(--gradient-primary)] 
                                                            transform
                                                            translate-x-[-50%]
                                                        `}
                                                    ></span>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                        {/* Regular text */}
                                        <span
                                            className={`
                                                absolute
                                                top-[50%]
                                                left-[50%]
                                                transform
                                                translate-x-[-50%]
                                                translate-y-[-50%]
                                                transition-[opacity]
                                                duration-150

                                                ${`${tabsId}_${index}` === activeTab && `
                                                    opacity-0
                                                `}
                                            `}
                                        >
                                            {item.label}
                                        </span>
                                    </button>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                    {/* Tab contents */}
                    {!!tabsFixed && (
                        <motion.ul 
                            key={`${activeTab}_content`}
                            initial={{ opacity: 0, translateY: '-100%', height: '0' }}
                            whileInView={{ opacity: 1, translateY: 0, height: 'auto' }}
                            viewport={{once: true}}
                            transition={{
                                type: "spring",
                                delay: 0.2,
                                duration: 0.8
                            }}
                            className="list-none flex flex-wrap justify-center gap-6 lg:gap-[3.75rem] mt-10 lg:mt-[4.5rem]"
                        >
                            {!!tabsFixed[activeTab.split('_')[1]]?.logos && tabsFixed[activeTab.split('_')[1]]?.logos.map(logo => {
                                if ( !!logo?.url )
                                {
                                    return (
                                        <li key={uuid()} className="flex">
                                            <Image src={logo.url} alt={logo?.alt || ''} width={166} height={94} 
                                                className="
                                                    object-center 
                                                    min-h-[5.875rem] 
                                                    max-h-[5.875rem] 
                                                    h-[5.875rem]
                                                "
                                            />
                                        </li>
                                    )
                                }
                            })}
                        </motion.ul>
                    )}
                </div>
            </section>
        </>
    )
};

export default TechStack;