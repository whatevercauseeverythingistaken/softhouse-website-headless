import Link from "next/link";

const ArrowButton = ({children, type = 'regular', className, ...rest}) => {
    const buttonClasses = {
        regular: '',
        ['gradient-primary']: 'arrow-btn-gradient-primary'
    };

    return (
        <>
            <Link 
                {...rest} 
                className={`arrow-btn ${buttonClasses[type]} ${className ? className : ''}`}
            >
                {children}
            </Link>
        </>
    )
};

export default ArrowButton;