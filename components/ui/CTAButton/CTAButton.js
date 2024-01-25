import Link from "next/link";

const CTAButton = ({children, type = 1, className, ...rest}) => {
    const buttonTypes = {
        1: 'btn btn-1',
        2: 'btn btn-2',
        3: 'btn btn-3'
    };

    return (
        <>
            <Link 
                {...rest} 
                className={`${buttonTypes[type]} ${className ? className : ''}`}
            >
                {children}
            </Link>
        </>
    )
};

export default CTAButton;