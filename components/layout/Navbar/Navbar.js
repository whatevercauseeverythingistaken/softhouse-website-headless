import { getMenu } from "@/app/lib/utils/getMenu";

import Image from "next/image";
import NavbarMenuGroup from "./NavbarMenuGroup/NavbarMenuGroup";
import CTAButton from "@/components/ui/CTAButton/CTAButton";

const Navbar = async () => {
    const { logo, links, ctaButton } = await getMenu();

    return (
        <>
            <header 
                className="
                    fixed
                    top-0
                    left-0
                    w-full
                    bg-white
                    shadow-[0_4px_40px_0px_rgba(0,0,0,0.1)]
                    z-[var(--navbar-z-index)]
                "
            >
                <div className="relative flex justify-between items-center py-2 px-2 lg:py-[1.0625rem] lg:px-[1.5625rem]">
                    {/* Logo */}
                    <div className="flex">
                        {!!logo && (
                            <Image
                                src={logo?.sourceUrl}
                                alt={logo?.altText || 'Site Logo'}
                                width={180}
                                height={59}
                                className="object-center object-cover"
                            />
                        )}
                    </div>
                    {/* Items */}
                    <NavbarMenuGroup items={links || []} ctaButton={ctaButton || {}} />
                    {/* CTA Button */}
                    <div className="hidden lg:flex">
                        <CTAButton 
                            href={ctaButton?.url || ''}
                            target={ctaButton?.target || '_self'}
                            type={1}
                        >
                            {ctaButton?.title || ''}
                        </CTAButton>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Navbar;