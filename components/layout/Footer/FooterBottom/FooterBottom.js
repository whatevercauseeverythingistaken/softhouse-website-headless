'use client';

const FooterBottom = ({ items }) => {
    // console.log(items);

    // Get cur year
    const curYear = new Date().getFullYear();
    
    return (
        <>
            <div className="border-t border-t-gray-400">
                <div className="container">
                    <div className="flex flex-col justify-center items-center py-9">
                        <p className="text-gray-700 text-sm">© {curYear} {items?.footerBottomText || ''}</p>
                        <p className="text-gray-700 text-sm mt-4">
                            Graphical design by <a href="https://www.figma.com/@pro_designer" target="_blank" rel="noopener noreferrer nofollow">@pro_designer</a> (Figma community)
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FooterBottom;