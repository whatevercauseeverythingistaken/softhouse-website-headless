'use client';

import { useState, useEffect, useRef, useMemo } from "react";
import { useBreakpoint } from "use-breakpoint";
import { BREAKPOINTS } from "@/app/lib/utils/breakpoints";
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import getBlockRepeaterFields from "@/app/lib/utils/getBlockRepeaterFields";
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";

const DevSteps = ({ data }) => {
    const [equalHeight, setEqualHeight] = useState(null);
    const { breakpoint } = useBreakpoint(BREAKPOINTS, 'sm');

    const labels = getBlockRepeaterFields(data, [data?.steps, 'steps'], 'label') || [];
    const contents = getBlockRepeaterFields(data, [data?.steps, 'steps'], 'content') || [];
    const goalIcon = data?.goal_icon || '';

    // Get em all to one array
    const stepsFixed = Array.from({length: data?.steps || 0}).map((val, index) => {
        return {
            label: labels[index] || '',
            content: contents[index] || [],
        }
    });

    // Create array of block refs
    const blockRefs = useRef([]);

    // Equalize object height
    useEffect(() => {
        // Equalize heights >= lg
        if ( breakpoint !== 'md' && breakpoint !== 'sm' )
        {
            let targetHeight = equalHeight;
    
            blockRefs.current = blockRefs.current.slice(0, stepsFixed.length);
            // console.log('blockRefs after: ', blockRefs.current);

            blockRefs.current.forEach(ref => {
                if ( ref?.getBoundingClientRect()?.height > targetHeight )
                {
                    targetHeight = ref.getBoundingClientRect().height;
                }
            });
    
            setEqualHeight(targetHeight);
        }
        // Reset heights on < lg
        else
        {
            setEqualHeight(null);
        }
    }, [breakpoint, stepsFixed]);

    // Get block fields
    const renderSteps = () => {
        if ( !Array.isArray(stepsFixed) )
        {
            return ;
        }

        const columns = (stepsFixed?.length / 2);
        let output = [];
        let curIndex = 0;

        (Array.from({length: columns}) || []).map(column => {
            output.push(
                <div 
                    key={curIndex}
                    className="
                        relative
                        flex 
                        flex-col
                        gap-10 
                        lg:gap-[5.625rem]
                        lg:before:absolute
                        lg:before:top-[50%]
                        lg:before:left-[calc(50%-1.71875rem)]
                        lg:before:min-w-[0.125rem]
                        lg:before:max-w-[0.125rem]
                        lg:before:w-[0.125rem]
                        lg:before:min-h-[1.875rem]
                        lg:before:max-h-[1.875rem]
                        lg:before:h-[1.875rem]
                        lg:before:bg-[linear-gradient(225deg,_#F76680_0%,_#57007B_100%)]
                        lg:before:transform
                        lg:before:translate-x-[-50%]
                        lg:before:translate-y-[-100%]
                        lg:after:absolute
                        lg:after:top-[50%]
                        lg:after:left-[calc(50%+1.71875rem)]
                        lg:after:min-w-[0.125rem]
                        lg:after:max-w-[0.125rem]
                        lg:after:w-[0.125rem]
                        lg:after:min-h-[1.875rem]
                        lg:after:max-h-[1.875rem]
                        lg:after:h-[1.875rem]
                        lg:after:bg-[linear-gradient(225deg,_#F76680_0%,_#57007B_100%)]
                        lg:after:transform
                        lg:after:translate-x-[-50%]
                        lg:after:-scale-y-100
                    "
                >
                    {/* Col item 1 */}
                    <div 
                        ref={el => blockRefs.current.push(el)}
                        className="flex flex-col gap-[1.375rem] bg-white border border-shade rounded-[0.5625rem] p-[1.59375rem] lg:mr-[3.4375rem]"
                        style={{minHeight: `${!!equalHeight ? equalHeight + 'px' : '0'}`, maxHeight: `${!!equalHeight ? equalHeight + 'px' : 'initial'}`, height: `${!!equalHeight ? equalHeight + 'px' : 'auto'}`}}
                    >
                        <h3 className="h5 text-gray-900">
                            <span className="inline-block primary-gradient-text mr-[0.625rem]">#{curIndex+1}</span>{stepsFixed[curIndex]?.label}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-4 text-ellipsis">
                            {stepsFixed[curIndex]?.content}
                        </p>
                    </div>
                    {/* Col item 2 */}
                    <div 
                        ref={el => blockRefs.current.push(el)}
                        className="flex flex-col gap-[1.375rem] bg-white border border-shade rounded-[0.5625rem] p-[1.59375rem] lg:ml-[3.4375rem]"
                        style={{minHeight: `${!!equalHeight ? equalHeight + 'px' : '0'}`, maxHeight: `${!!equalHeight ? equalHeight + 'px' : 'initial'}`, height: `${!!equalHeight ? equalHeight + 'px' : 'auto'}`}}
                    >
                        <h3 className="h5 text-gray-900">
                            <span className="inline-block primary-gradient-text mr-[0.625rem]">#{curIndex+2}</span>{stepsFixed[curIndex+1]?.label}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-4 text-ellipsis">
                            {stepsFixed[curIndex+1]?.content}
                        </p>
                    </div>
                </div>
            );

            curIndex = curIndex + 2;
            return output;
        });

        return output;
    };

    return (
        <>
            <section className="dev-steps py-10 lg:py-20">
                <div className="container">
                    {/* Heading */}
                    {!!data?.heading && (
                        <DecorativeHeading alignment="center">
                            {safelySetInnerHTML(data.heading)}
                        </DecorativeHeading>
                    )}
                    {/* Steps */}
                    <div 
                        className="
                            relative
                            list-none 
                            grid 
                            grid-cols-1 
                            lg:grid-cols-3 
                            gap-10
                            lg:gap-[5.0625rem] 
                            pt-[2.375rem]
                            pb-[5rem]
                            lg:py-0
                            lg:px-[2.375rem]
                            mt-[2.375rem]
                            lg:mt-[5.5rem]
                            before:absolute
                            before:top-0
                            lg:before:top-[50%]
                            before:left-[50%]
                            lg:before:left-0
                            before:min-w-[0.125rem]
                            before:max-w-[0.125rem]
                            before:w-[0.125rem]
                            before:min-h-full
                            before:max-h-full
                            before:h-full
                            lg:before:min-w-full
                            lg:before:max-w-full
                            lg:before:w-full
                            lg:before:min-h-[0.125rem]
                            lg:before:max-h-[0.125rem]
                            lg:before:h-[0.125rem]
                            before:bg-[linear-gradient(225deg,_#F76680_0%,_#57007B_100%)]
                            before:transform
                            before:translate-x-[-50%]
                            lg:before:translate-x-0
                            lg:before:translate-y-[-50%]
                            before:z-[-1]
                            after:absolute
                            after:bottom-0
                            lg:after:bottom-[inital]
                            lg:after:top-[50%]
                            after:left-[50%]
                            lg:after:left-[initial]
                            lg:after:right-0
                            after:min-w-[2.625rem]
                            after:max-w-[2.625rem]
                            after:w-[2.625rem]
                            after:min-h-[2.625rem]
                            after:max-h-[2.625rem]
                            after:h-[2.625rem]
                            after:bg-[image:var(--bg-url)]
                            after:bg-center
                            after:bg-cover
                            after:bg-no-repeat
                            after:transform
                            after:translate-x-[-50%]
                            lg:after:translate-x-0
                            lg:after:translate-y-[-50%]
                            z-[1]
                        "
                        style={{'--bg-url': `url(${goalIcon})`}}
                    >
                        {renderSteps()}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DevSteps;