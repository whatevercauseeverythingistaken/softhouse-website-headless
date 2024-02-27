'use client';

import { v4 as uuid } from 'uuid';
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import he from 'he';
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";
import getBlockRepeaterFields from "@/app/lib/utils/getBlockRepeaterFields";
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientQuotes = ({ data }) => {
    // console.log(data);

    const titles = getBlockRepeaterFields(data, [data?.quotes, 'quotes'], 'quote_title') || [];
    const contents = getBlockRepeaterFields(data, [data?.quotes, 'quotes'], 'quote_content') || [];
    const avatars = getBlockRepeaterFields(data, [data?.quotes, 'quotes'], 'quote_author_avatar') || [];
    const names = getBlockRepeaterFields(data, [data?.quotes, 'quotes'], 'quote_author_name') || [];
    const roles = getBlockRepeaterFields(data, [data?.quotes, 'quotes'], 'quote_author_role') || [];
    const images = getBlockRepeaterFields(data, [data?.quotes, 'quotes'], 'quote_image') || [];

    // Get em all to one array
    const quotesFixed = Array.from({length: data?.quotes || 0}).map((val, index) => {
        return {
            title: titles[index] || '',
            content: contents[index] || '',
            author: {
                avatar: avatars[index] || {},
                name: names[index] || '',
                role: roles[index] || ''
            },
            image: images[index] || {}
        }
    });

    return (
        <>
            <section className="client-quotes-section py-10 lg:py-20 overflow-hidden">
                <div className="container">
                    {/* Heading */}
                    {!!data?.heading && (
                        <motion.div
                            initial={{ opacity: 0, translateY: '-100%' }}
                            whileInView={{ opacity: 1, translateY: '0' }}
                            viewport={{once: true}}
                            transition={{
                                type: "spring",
                                delay: 0,
                                duration: 0.8
                            }}
                        >
                            <DecorativeHeading alignment="center">
                                {safelySetInnerHTML(data.heading)}
                            </DecorativeHeading>
                        </motion.div>
                    )}
                    {/* Quotes */}
                    <ul className="list-none flex flex-col gap-16 lg:gap-[5.9375rem] pt-[2.0625rem] mt-10">
                        {!!quotesFixed && quotesFixed.map((item, index) => (
                            <li 
                                key={uuid()}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
                                    {/* Content col */}
                                    <div className={`order-2 ${index%2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex flex-col ${index%2 === 0 ? 'lg:pr-20' : 'lg:pl-20'}`}>
                                        {/* Title */}
                                        {!!item?.title && (
                                            <motion.h3
                                                initial={{ opacity: 0, translateY: '-100%' }}
                                                whileInView={{ opacity: 1, translateY: '0' }}
                                                viewport={{once: true}}
                                                transition={{
                                                    type: "spring",
                                                    delay: ((index + 1) * 0.1),
                                                    duration: 0.8
                                                }}
                                            >
                                                {item.title}
                                            </motion.h3>
                                        )}
                                        {/* Content (WYSIWYG) */}
                                        {!!item?.content && (
                                            <motion.article 
                                                initial={{ opacity: 0, translateY: '-100%' }}
                                                whileInView={{ opacity: 1, translateY: '0' }}
                                                viewport={{once: true}}
                                                transition={{
                                                    type: "spring",
                                                    delay: ((index + 1) * 0.2),
                                                    duration: 0.8
                                                }}
                                                className="wysiwyg mt-[1.875rem]"
                                            >
                                                {safelySetInnerHTML(he.decode(item.content))}
                                            </motion.article>
                                        )}
                                        {/* Author */}
                                        {!!item?.author && (
                                            <motion.div 
                                                initial={{ opacity: 0, translateY: '-100%' }}
                                                whileInView={{ opacity: 1, translateY: '0' }}
                                                viewport={{once: true}}
                                                transition={{
                                                    type: "spring",
                                                    delay: ((index + 1) * 0.3),
                                                    duration: 0.8
                                                }}
                                                className="flex gap-[0.625rem] mt-[1.5625rem]"
                                            >
                                                {/* Avatar col */}
                                                {!!item.author?.avatar?.url && (
                                                    <div className="relative min-w-[2.5625rem] max-w-[2.5625rem] w-[2.5625rem] min-h-[2.5625rem] max-h-[2.5625rem] h-[2.5625rem] rounded-[50%] overflow-hidden">
                                                        <Image
                                                            src={item.author.avatar.url}
                                                            alt={item.author.avatar?.alt || ''}
                                                            fill
                                                            className="object-center object-cover"
                                                        />
                                                    </div>
                                                )}
                                                {/* Texts col */}
                                                <div className="flex flex-col gap-1">
                                                    {/* Author name */}
                                                    {!!item.author?.name && (
                                                        <p>
                                                            {item.author.name}
                                                        </p>
                                                    )}
                                                    {/* Author role */}
                                                    {!!item.author?.role && (
                                                        <p className="text-gray-600 text-sm">
                                                            {item.author.role}
                                                        </p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                    {/* Image col */}
                                    <div 
                                        className={`order-1 ${index%2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex ${index%2 === 0 ? 'lg:pl-10' : 'lg:pr-10'}`}
                                    >
                                        {/* Image */}
                                        {!!item?.image?.url && (
                                            <div 
                                                className={`
                                                    relative 
                                                    min-w-full 
                                                    max-w-full 
                                                    w-full 
                                                    pb-[82.26086956%] 
                                                    ${index%2 === 0 ? 
                                                        `
                                                            before:absolute
                                                            before:top-[-0.95rem]
                                                            lg:before:top-[-1.5rem]
                                                            before:left-[-0.5rem]
                                                            lg:before:left-[-2rem]
                                                            before:min-w-[4rem]
                                                            before:max-w-[4rem]
                                                            before:w-[4rem]
                                                            before:min-h-[4rem]
                                                            before:max-h-[4rem]
                                                            before:h-[4rem]
                                                            before:bg-[image:var(--gradient-yellow)]
                                                            before:rounded-[50%]
                                                            before:-z-10
                                                            after:absolute
                                                            after:bottom-[-1rem]
                                                            after:left-[45%]
                                                            after:min-w-[2rem]
                                                            after:max-w-[2rem]
                                                            after:w-[2rem]
                                                            after:min-h-[2rem]
                                                            after:max-h-[2rem]
                                                            after:h-[2rem]
                                                            after:bg-[image:var(--gradient-primary)]
                                                            after:rounded-[50%]
                                                            after:-z-10
                                                        ` 
                                                        : 
                                                        `
                                                            before:absolute
                                                            before:bottom-[-2rem]
                                                            before:left-[20%]
                                                            before:min-w-[4rem]
                                                            before:max-w-[4rem]
                                                            before:w-[4rem]
                                                            before:min-h-[4rem]
                                                            before:max-h-[4rem]
                                                            before:h-[4rem]
                                                            before:bg-[image:var(--gradient-yellow)]
                                                            before:rounded-[50%]
                                                            before:-z-10
                                                            after:absolute
                                                            after:top-[-0.65rem]
                                                            after:right-[-0.3rem]
                                                            after:min-w-[2rem]
                                                            after:max-w-[2rem]
                                                            after:w-[2rem]
                                                            after:min-h-[2rem]
                                                            after:max-h-[2rem]
                                                            after:h-[2rem]
                                                            after:bg-[image:var(--gradient-primary)]
                                                            after:rounded-[50%]
                                                            after:-z-10
                                                        `
                                                    }
                                                `}
                                            >
                                                <motion.div 
                                                    initial={{ opacity: 0, translateX: `${index%2 === 0 ? '100%' : '-100%'}` }}
                                                    whileInView={{ opacity: 1, translateX: '0' }}
                                                    viewport={{once: true}}
                                                    transition={{
                                                        type: "spring",
                                                        delay: ((index + 1) * 0.4),
                                                        duration: 0.8
                                                    }}
                                                    className="absolute min-w-full max-w-full w-full min-h-full max-h-full h-full"
                                                >
                                                    <Image
                                                        src={item.image.url}
                                                        alt={item.image?.alt || ''}
                                                        fill
                                                        className="object-center object-cover rounded-[0.625rem]"
                                                    />
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
};

export default ClientQuotes;