'use client';

import parse from 'html-react-parser';
import { v4 as uuid } from 'uuid';
import Image from "next/image";
import Link from 'next/link';
import { relativeToAbsoluteUrls } from '@/app/lib/utils/relativeToAbsoluteUrls';

const FooterTop = ({items = {}}) => {
    // console.log(items);

    return (
        <>
            <div
                className="
                    pt-8
                    pb-20
                "
            >
                <div className="container">
                    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:flex-wrap">
                        {/* Col 1 */}
                        <div className="lg:max-w-[23.25rem] lg:mr-[4.875rem]">
                            <div className="flex flex-col">
                                {/* Logo */}
                                {!!items?.footerCol1.footerLogo?.node?.sourceUrl && (
                                    <Image
                                        src={items?.footerCol1.footerLogo.node.sourceUrl}
                                        alt={items?.footerCol1.footerLogo.node?.altText}
                                        width={123}
                                        height={41}
                                        className="object-center object-cover mb-4"
                                    />
                                )}
                                {/* Text content */}
                                {!!items?.footerCol1.content && (
                                    <div className="wysiwyg text-gray-600 mb-9">
                                        {parse(items?.footerCol1.content.replace(/\n/g, ''))}
                                    </div>
                                )}
                                {/* Badge */}
                                {!!items?.footerCol1.badge?.node?.sourceUrl && (
                                    <Image
                                        src={items?.footerCol1.badge.node.sourceUrl}
                                        alt={items?.footerCol1.badge.node?.altText}
                                        width={199}
                                        height={53}
                                        className="object-center object-cover"
                                    />
                                )}
                            </div>
                        </div>
                        {/* Col 2 */}
                        <div className="lg:max-w-[8.3125rem] lg:mr-[5.4375rem]">
                            <div className="flex flex-col">
                                {/* Label */}
                                {!!items?.footerCol2.label && (
                                    <p className="h5 mb-5">
                                        {items?.footerCol2.label}
                                    </p>
                                )}
                                {/* Menu items */}
                                <nav>
                                    <ul className="list-none flex flex-col gap-2">
                                        {(items?.footerCol2.links || []).map(item => (
                                            <li key={uuid()}>
                                                <Link
                                                    href={item.link?.url ? relativeToAbsoluteUrls(item.link?.url) : '#'}
                                                    target={item.link?.target || '_self'}
                                                    className="
                                                        block
                                                        text-gray-700 
                                                        lg:px-0
                                                        lg:py-0
                                                        transition 
                                                        duration-150 
                                                        lg:hover:text-primary 
                                                        lg:focus-visible:text-primary
                                                    "
                                                >
                                                    {item.link?.title || ''}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* Col 3 */}
                        <div className="lg:max-w-[19.125rem] lg:mr-[4.375rem]">
                            <div className="flex flex-col">
                                {/* Label */}
                                {!!items?.footerCol3.label && (
                                    <p className="h5 mb-5">
                                        {items?.footerCol3.label}
                                    </p>
                                )}
                                {/* Text content */}
                                {!!items?.footerCol3.content && (
                                    <div className="wysiwyg text-gray-600">
                                        {parse(items?.footerCol3.content.replace(/\n/g, ''))}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Col 4 */}
                        <div className="flex flex-col justify-end">
                            {/* Social items */}
                            <ul className="list-none grid max-w-max grid-cols-4 gap-4">
                                {(items?.footerCol4.socials || []).map(item => (
                                    <li key={uuid()}>
                                        <Link
                                            href={item?.link || '#'}
                                            target="_blank"
                                            className={`
                                                relative
                                                flex
                                                justify-center
                                                items-center
                                                min-w-[2.125rem]
                                                max-w-[2.125rem]
                                                w-[2.125rem]
                                                min-h-[2.125rem]
                                                max-h-[2.125rem]
                                                h-[2.125rem]
                                                rounded-[50%]
                                                shadow-[0px_4px_14px_rgba(0,_0,_0,_0.15)]
                                                transition-[background-color]
                                                duration-150
                                                after:absolute
                                                after:top-[50%]
                                                after:left-[50%]
                                                after:min-w-[0.8125rem]
                                                after:max-w-[0.8125rem]
                                                after:w-[0.8125rem]
                                                after:min-h-[0.8125rem]
                                                after:max-h-[0.8125rem]
                                                after:h-[0.8125rem]
                                                after:transform
                                                after:translate-x-[-50%]
                                                after:translate-y-[-50%]
                                                after:bg-black
                                                after:mask-[var(--icon-url)]
                                                after:mask-position-center 
                                                after:mask-size-cover 
                                                after:mask-no-repeat
                                                after:transition-[background-color]
                                                after:duration-150
                                                lg:hover:bg-secondary
                                                lg:focus-visible:bg-secondary
                                                lg:hover:after:bg-white
                                                lg:focus-visible:after:bg-white
                                            `}
                                            style={{'--icon-url': `url(${item?.icon?.node?.sourceUrl})`}}
                                        >
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FooterTop;