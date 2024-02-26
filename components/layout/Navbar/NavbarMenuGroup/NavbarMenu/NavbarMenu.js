'use client';
import { v4 as uuid } from "uuid";
import Link from "next/link";

import CTAButton from "@/components/ui/CTAButton/CTAButton";
import { relativeToAbsoluteUrls } from "@/app/lib/utils/relativeToAbsoluteUrls";

const NavbarMenu = ({ items, ctaButton, expanded }) => {

	return (
		<>
            <nav
                className={`
                    absolute 
                    top-full
                    left-0
                    w-full
                    lg:w-auto
                    h-[calc(100vh-75px)]
                    lg:static 
                    lg:h-auto
                    bg-white
                    pt-4
                    lg:pt-0
                    transition-[transform]
                    duration-300
                    transform
                    ${expanded ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
                `}
            >
                <ul
                    className={`
                        list-none 
                        flex 
                        flex-col
                        lg:flex-row
                        gap-0
                        lg:gap-8 
                        xl:gap-12 
                    `}
                >
                    {items.map(item => (
                        <li key={uuid()}>
                            <Link
                                href={item.link?.url ? relativeToAbsoluteUrls(item.link?.url) : '#'}
                                target={item.link?.target || '_self'}
                                className="
                                    block
                                    text-gray-700 
                                    px-8
                                    py-2
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
                    <li className="lg:hidden px-8 pt-6">
                        <CTAButton 
                            href={ctaButton?.url ? relativeToAbsoluteUrls(ctaButton?.url) : '#'}
                            target={ctaButton?.target || '_self'}
                            type={1}
                            className="w-full"
                        >
                            {ctaButton?.title || ''}
                        </CTAButton>
                    </li>
                </ul>
            </nav>
		</>
	)
};

export default NavbarMenu;