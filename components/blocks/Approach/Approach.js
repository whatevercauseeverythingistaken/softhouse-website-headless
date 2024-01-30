'use client';

import { v4 as uuid } from 'uuid';
import getBlockRepeaterFields from '@/app/lib/utils/getBlockRepeaterFields';
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";

const Approach = ({ data }) => {
    // console.log(data);

    const bgs = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'icon_bg') || [];
    const icons = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'icon') || [];
    const labels = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'label') || [];
    const contents = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'content') || [];

    // Get em all to one array
    const blocksFixed = Array.from({length: data?.blocks || 0}).map((val, index) => {
        return {
            icon_bg: bgs[index] || '',
            icon: icons[index] || '',
            label: labels[index] || '',
            content: contents[index] || ''
        }
    });

    const gradientClasses = {
        purple: 'bg-[image:var(--gradient-primary)]',
        yellow: 'bg-[image:var(--gradient-yellow)]',
        black: 'bg-[image:var(--gradient-dark)]',
        blue: 'bg-[image:var(--gradient-blue)]',
        pink: 'bg-[image:var(--gradient-pink)]',
        green: 'bg-[image:var(--gradient-green)]',
    };

    return (
        <>
            <section className="approach-section py-10 lg:py-[5.5625rem] bg-shade-light border-t border-b border-t-shade border-b-shade">
                <div className="container">
                    {/* Heading */}
                    {!!data?.heading && (
                        <DecorativeHeading alignment="center">
                            {safelySetInnerHTML(data.heading)}
                        </DecorativeHeading>
                    )}
                    {/* Blocks */}
                    <ul className="list-none grid grid-cols-1 lg:grid-cols-2 gap-[1.5625rem] mt-20">
                        {!!blocksFixed && blocksFixed.map(item => (
                            <li key={uuid()}>
                                <div className="flex gap-[1.5625rem] bg-gray-50 border border-shade px-[2.125rem] py-[3.75rem] h-full">
                                    {/* Icon col */}
                                    <div className="flex">
                                        <div 
                                            className={`
                                                relative 
                                                min-w-[3.6875rem]
                                                max-w-[3.6875rem]
                                                w-[3.6875rem]
                                                min-h-[3.5rem]
                                                max-h-[3.5rem]
                                                h-[3.5rem]
                                                ${gradientClasses[item?.icon_bg] || 'bg-[image:var(--gradient-primary)]'}
                                                rounded-[0.625rem]
                                                before:absolute
                                                before:top-[50%]
                                                before:left-[50%]
                                                before:min-w-[50%]
                                                before:max-w-[50%]
                                                before:w-[50%]
                                                before:min-h-[50%]
                                                before:max-h-[50%]
                                                before:h-[50%]
                                                before:bg-[image:var(--bg-url)]
                                                before:bg-center
                                                before:bg-cover
                                                before:bg-no-repeat
                                                before:translate-x-[-50%]
                                                before:translate-y-[-50%]
                                            `}
                                            style={{'--bg-url': `url(${item?.icon || ''})`}}
                                        ></div>
                                    </div>
                                    {/* Texts col */}
                                    <div className="flex flex-col gap-[0.625rem]">
                                        {/* Label */}
                                        {!!item?.label && (
                                            <h4>
                                                {item.label}
                                            </h4>
                                        )}
                                        {/* Content */}
                                        {!!item?.content && (
                                            <article className="wysiwyg text-gray-700 text-sm">
                                                {item.content}
                                            </article>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Approach;