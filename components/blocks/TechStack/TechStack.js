'use client';

import { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import getBlockRepeaterFields from '@/app/lib/utils/getBlockRepeaterFields';
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";
import Image from 'next/image';

const TechStack = ({ tabsId, data }) => {
    // Manage state
    const [activeTab, setActiveTab] = useState(`${tabsId}_0`);

    // Get block fields
    // console.log(data);

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

    console.log("TABS FIXED: ", tabsFixed);

    return (
        <>
            <section className="approach-section py-10 lg:py-20">
                <div className="container">
                    {/* Heading */}
                    {!!data?.heading && (
                        <DecorativeHeading alignment="center">
                            {safelySetInnerHTML(data.heading)}
                        </DecorativeHeading>
                    )}
                    {/* Tabs */}
                    <ul className="list-none flex flex-wrap justify-center gap-6 lg:gap-[3.75rem] mt-[2.375rem]">
                        {!!tabsFixed && tabsFixed.map((item, index) => (
                            <li key={uuid()}>
                                {!!item?.label && (
                                    <button 
                                        id={`${tabsId}_${index}`}
                                        onClick={() => setActiveTab(`${tabsId}_${index}`)}
                                        type="button"
                                        className={`
                                            relative
                                            text-lg
                                            
                                            ${(`${tabsId}_${index}` === activeTab) && `
                                                text-transparent
                                                font-semibold
                                                bg-[image:var(--gradient-primary)]
                                                bg-clip-text
                                                before:absolute
                                                before:bottom-0
                                                before:left-[50%]
                                                before:min-w-[32.89473684%]
                                                before:max-w-[32.89473684%]
                                                before:w-[32.89473684%]
                                                before:min-h-[0.1875rem]
                                                before:max-h-[0.1875rem]
                                                before:h-[0.1875rem]
                                                before:bg-[image:var(--gradient-primary)] 
                                                before:transform
                                                before:translate-x-[-50%]
                                            `}
                                        `}
                                    >
                                        {item.label}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                    {/* Tab contents */}
                    {!!tabsFixed && tabsFixed.map((item, index) => {
                        if ( `${tabsId}_${index}` === activeTab )
                        {
                            return (
                                <ul 
                                    key={uuid()} 
                                    className="list-none flex flex-wrap justify-center gap-6 lg:gap-[3.75rem] mt-10 lg:mt-[4.5rem]"
                                >
                                    {!!item?.logos && item?.logos.map(logo => {
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
                                </ul>
                            )
                        }
                    })}
                </div>
            </section>
        </>
    )
};

export default TechStack;