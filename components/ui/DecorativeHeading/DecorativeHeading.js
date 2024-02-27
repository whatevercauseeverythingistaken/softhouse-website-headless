const DecorativeHeading = ({children, className, alignment = 'left', ...rest}) => {
    const alignKey = {
        left: 'before:left-0',
        center: 'text-center before:left-[50%] before:transform before:translate-x-[-50%]'
    };

    return (
        <>
            <h2 
                {...rest}
                className={`
                    relative
                    font-normal 
                    pt-[1.5625rem] 
                    before:absolute 
                    before:top-0
                    ${alignKey[alignment]}
                    before:min-w-[4.3125rem] 
                    before:max-w-[4.3125rem] 
                    before:w-[4.3125rem] 
                    before:min-h-[0.3125rem] 
                    before:max-h-[0.3125rem] 
                    before:h-[0.3125rem] 
                    before:bg-[linear-gradient(225deg,_#F76680_0%,_#57007B_100%)] 
                    ${className || ''} 
                `}
            >
                {children}
            </h2>
        </>
    );
};

export default DecorativeHeading;