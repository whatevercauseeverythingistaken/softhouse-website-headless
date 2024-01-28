'use client';

import Image from "next/image";
import PlayIcon from "@/public/icons/icon-play.svg";
import { useState, useRef } from "react";

const Video = ({ url = '', thumb = {} }) => {
    const [maskOn, setMaskOn] = useState(true);
    const videoRef = useRef(null);

    // Play video on fake play button click
    const playClickHandler = () => {
        setMaskOn(false);

        if ( videoRef !== null )
        {
            videoRef?.current.play();
        }
    };

    return (
        <>
            <div className="relative min-w-full max-w-full pb-[76.53910149%] rounded-[1.25rem] overflow-hidden">
                {maskOn && (
                    <>
                        {/* Thumbnail & mask */}
                        <div 
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
                                z-10
                                after:absolute
                                after:top-0
                                after:left-0
                                after:min-w-full 
                                after:max-w-full 
                                after:w-full 
                                after:min-h-full 
                                after:max-h-full 
                                after:h-full 
                                after:bg-[rgba(0,_0,_0,_0.01)]
                                after:backdrop-blur-[2px]
                            " 
                        >
                            {/* Thumbnail */}
                            {!!thumb?.url && !!thumb?.alt && (
                                <Image 
                                    src={thumb.url}
                                    alt={thumb.alt}
                                    fill
                                    className="object-center object-cover"
                                />
                            )}
                        </div>
                        {/* Play button */}
                        <button 
                            type="button"
                            onClick={playClickHandler}
                            className="
                                absolute 
                                top-[50%]
                                left-[50%]
                                min-w-[4.875rem] 
                                max-w-[4.875rem]
                                w-[4.875rem]
                                min-h-[4.875rem]
                                max-h-[4.875rem]
                                h-[4.875rem]
                                bg-white
                                bg-opacity-[0.43]
                                rounded-[50%]
                                transform
                                translate-x-[-50%]
                                translate-y-[-50%]
                                cursor-pointer
                                z-20
                                lg:hover:bg-opacity-[0.15]
                                lg:focus-visible:bg-opacity-[0.15]
                                transition
                                duration-150
                                before:absolute
                                before:top-[50%]
                                before:left-[50%]
                                before:min-w-[74.35897435%] 
                                before:max-w-[74.35897435%]
                                before:w-[74.35897435%]
                                before:min-h-[74.35897435%]
                                before:max-h-[74.35897435%]
                                before:h-[74.35897435%]
                                before:bg-[image:var(--bg-url)]
                                before:bg-center
                                before:bg-cover
                                before:bg-no-repeat
                                before:transform
                                before:translate-x-[-50%]
                                before:translate-y-[-50%]
                            "
                            style={{'--bg-url': `url(${PlayIcon?.src || ''})`}}
                        ></button>
                    </>
                )}
                {/* Video */}
                <video 
                    ref={videoRef}
                    controls 
                    preload="none" 
                    className="absolute top-0 left-0 min-w-full max-w-full w-full min-h-full max-h-full h-full object-center object-cover"
                >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                    Video from https://file-examples.com/
                </video>
            </div>
        </>
    );
};

export default Video;