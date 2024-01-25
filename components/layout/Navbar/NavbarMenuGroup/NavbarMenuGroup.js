'use client';

import NavbarMenu from "./NavbarMenu/NavbarMenu";
import { useState } from "react";

const NavbarMenuGroup = ({ items, ctaButton }) => {
    const [expanded, setExpanded] = useState(false)

    const togglerHandler = () => {
        setExpanded(prevState => !prevState);
    };

    return (
        <>
            <NavbarMenu items={items} ctaButton={ctaButton} expanded={expanded} />
            <button 
                onClick={togglerHandler}
                className={`
                    flex 
                    justify-center 
                    items-center 
                    lg:hidden
                    min-w-[3rem]
                    max-w-[3rem]
                    w-[3rem]
                    min-h-[3rem]
                    max-h-[3rem]
                    h-[3rem]
                    ${expanded ? 'bg-secondary' : ''}
                    bg-opacity-50
                    rounded-[50%]
                    transition-[background-color]
                    duration-150
                `}
            >
                <span className="relative min-w-[1.5rem] max-w-[1.5rem] w-[1.5rem] min-h-[1.125rem] max-h-[1.125rem] h-[1.125rem]">
                    <span className="absolute top-0 left-0 min-w-full max-w-full w-full min-h-[3px] max-h-[3px] h-[3px] bg-[linear-gradient(180deg,_#DE4396_0%,_rgba(13,_28,_159,_0.00)_100%)]"></span>
                    <span className="absolute top-[50%] left-0 min-w-full max-w-full w-full min-h-[3px] max-h-[3px] h-[3px] bg-[linear-gradient(180deg,_#DE4396_0%,_rgba(13,_28,_159,_0.00)_100%)] transform translate-y-[-50%]"></span>
                    <span className="absolute bottom-0 left-0 min-w-full max-w-full w-full min-h-[3px] max-h-[3px] h-[3px] bg-[linear-gradient(180deg,_#DE4396_0%,_rgba(13,_28,_159,_0.00)_100%)]"></span>
                </span>
            </button>
        </>
    );
};

export default NavbarMenuGroup;