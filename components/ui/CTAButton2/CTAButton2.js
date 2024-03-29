import Link from "next/link";

const CTAButton2 = ({children, className, ...rest}) => {
    const singleDecorClasses = `
        absolute
        min-w-[0.4375rem]
        max-w-[0.4375rem]
        w-[0.4375rem]
        min-h-[2rem]
        max-h-[2rem]
        h-[2rem]
        bg-[image:var(--gradient-yellow)]
        rounded-[0.625rem]
    `;

    return (
        <>
            <div 
                className="
                    relative 
                    min-w-[7.5rem] 
                    py-[4.1875rem]
                "
            >
                {/* Decorations top */}
                <span 
                    className="
                        absolute 
                        top-0 
                        left-[50%] 
                        min-w-[7.5rem] 
                        max-w-[7.5rem] 
                        w-[7.5rem] 
                        min-h-[2.5rem] 
                        max-h-[2.5rem] 
                        h-[2.5rem] 
                        transform 
                        translate-x-[-50%]
                    "
                >
                    <span 
                        className={`
                            ${singleDecorClasses} 
                            bottom-0 
                            left-[0.875rem]
                            transform
                            -rotate-[35deg]
                        `}
                    ></span>
                    <span 
                        className={`
                            ${singleDecorClasses} 
                            top-0 
                            left-[50%]
                            transform 
                            translate-x-[-50%]
                        `}
                    ></span>
                    <span 
                        className={`
                            ${singleDecorClasses} 
                            bottom-0 
                            right-[0.875rem]
                            transform 
                            rotate-[35deg]
                        `}
                    ></span>
                </span>
                {/* THE ACTUAL LINK */}
                <Link 
                    {...rest} 
                    className={`
                        ${className ? className : ''} 
                        relative 
                        inline-flex 
                        items-center 
                        justify-center 
                        h5
                        text-gray-50 
                        text-center
                        transition-[color,border-color]
                        duration-150
                        rounded-[0.625rem] 
                        border 
                        border-transparent
                        py-[1.09375rem] 
                        px-[2.6875rem] 
                        overflow-hidden
                        z-[1]
                        lg:hover:text-black 
                        lg:focus-visible:text-black
                        lg:hover:border-black
                        lg:focus-visible:border-black
                        before:absolute 
                        before:top-0 
                        before:left-0
                        before:min-w-full
                        before:max-w-full
                        before:w-full
                        before:min-h-full
                        before:max-h-full
                        before:h-full
                        before:bg-[image:var(--gradient-yellow)]
                        before:z-[-1]
                        before:transform
                        before:transition-[transform,opacity]
                        before:duration-150
                        lg:hover:before:translate-y-full 
                        lg:focus-visible:before:translate-y-full
                        lg:hover:before:opacity-0 
                        lg:focus-visible:before:opacity-0
                    `}
                >
                    {children}
                </Link>
                {/* Decorations bottom */}
                <span 
                    className="
                        absolute 
                        bottom-0 
                        left-[50%] 
                        min-w-[7.5rem] 
                        max-w-[7.5rem] 
                        w-[7.5rem] 
                        min-h-[2.5rem] 
                        max-h-[2.5rem] 
                        h-[2.5rem] 
                        transform 
                        translate-x-[-50%] 
                        -scale-100
                    "
                >
                    <span 
                        className={`
                            ${singleDecorClasses} 
                            bottom-0 
                            left-[0.875rem]
                            transform
                            -rotate-[35deg]
                        `}
                    ></span>
                    <span 
                        className={`
                            ${singleDecorClasses} 
                            top-0 
                            left-[50%]
                            transform 
                            translate-x-[-50%]
                        `}
                    ></span>
                    <span 
                        className={`
                            ${singleDecorClasses} 
                            bottom-0 
                            right-[0.875rem]
                            transform 
                            rotate-[35deg]
                        `}
                    ></span>
                </span>
            </div>
        </>
    )
};

export default CTAButton2;