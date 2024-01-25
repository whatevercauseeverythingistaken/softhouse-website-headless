'use client';

const FooterBottom = ({ items }) => {
    // console.log(items);

    // Get cur year
    const curYear = new Date().getFullYear();
    
    return (
        <>
            <div className="border-t border-t-gray-400">
                <div className="container">
                    <div className="flex justify-center items-center py-9">
                        <p className="text-gray-700 text-sm">© {curYear} {items?.footerBottomText || ''}</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FooterBottom;