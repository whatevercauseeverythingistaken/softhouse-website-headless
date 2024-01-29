'use client';

import { v4 as uuid } from 'uuid';
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '@/components/ui/ArrowButton/ArrowButton';

const CaseStudies = ({ data }) => {
    // console.log(data);

    return (
        <>
            <section className="case-studies-section py-10 lg:py-[5.5625rem] bg-shade-light border-t border-b border-t-shade border-b-shade">
                <div className="container">
                    {/* Heading */}
                    {!!data?.heading && (
                        <DecorativeHeading alignment="center">
                            {safelySetInnerHTML(data.heading)}
                        </DecorativeHeading>
                    )}
                    {/* Case Studies */}
                    <ul className="list-none flex flex-col gap-[2.1875rem] mt-20 [&>li:nth-child(1)>article]:bg-shadebg [&>li:nth-child(2)>article]:bg-shade-green [&>li:nth-child(3)>article]:bg-shade-pink">
                        {!!data?.case_studies && data?.case_studies.map(item => (
                            <li key={uuid()}>
                                <article className="grid grid-cols-1 lg:grid-cols-2 border border-shade rounded-[0.625rem] lg:rounded-tr-[1.875rem] lg:rounded-br-[1.875rem] overflow-hidden">
                                    {/* Image col */}
                                    <div className="relative flex pb-[69.21797004%]">
                                        {!!item?.featuredImage?.url && (
                                            <Image
                                                src={item.featuredImage.url}
                                                alt={item.featuredImage?.alt}
                                                fill
                                                className="object-center object-cover"
                                            />
                                        )}
                                    </div>
                                    {/* Content col */}
                                    <div className="flex flex-col p-6 lg:px-[3.125rem] lg:py-[4.125rem] lg:max-h-full overflow-hidden">
                                        {/* Post title */}
                                        {!!item?.post_title && (
                                            
                                            <h3 className="line-clamp-1 text-ellipsis">
                                                <Link href={item.uri} target="_self">
                                                    {item.post_title}
                                                </Link>
                                            </h3>
                                        )}
                                        {/* Post excerpt */}
                                        {!!item?.post_excerpt && (
                                            <p className="text-gray-700 text-sm line-clamp-5 text-ellipsis">
                                                {item.post_excerpt}
                                            </p>
                                        )}
                                        {/* Read more text */}
                                        {!!item?.uri && (
                                            <div className="flex justify-end mt-14">
                                                <ArrowButton type="gradient-primary" href={item.uri} target="_self" className="smaller">
                                                    Read more
                                                </ArrowButton>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                    {/* Archive link button */}
                    {!!data?.link && (
                        <div className="flex justify-end mt-10">
                            <ArrowButton type="gradient-primary" href={data.link?.url || '/'} target={`${data.link?.target || '_self'}`}>
                                {data.link?.title || ''}
                            </ArrowButton>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
};

export default CaseStudies;