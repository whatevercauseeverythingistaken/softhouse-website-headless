'use client';

import { v4 as uuid } from "uuid";
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import { relativeToAbsoluteUrls } from '@/app/lib/utils/relativeToAbsoluteUrls';
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const BlogPosts = ({ data }) => {
	// console.log(data);

	return (
		<>
			<section className="approach-section py-10 lg:py-[5.5625rem]">
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
					{/* Posts */}
					<div className="overflow-hidden">
						{!!data?.posts && (
							<ul className="list-none flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-center mt-[4.125rem] lg:-mx-5">
								{Array.isArray(data.posts) && data.posts.map((post, index) => (
									<motion.li 
										initial={{ opacity: 0, translateY: '-100%' }}
										whileInView={{ opacity: 1, translateY: '0' }}
										viewport={{once: true}}
										transition={{
											type: "spring",
											delay: ((index + 1) * 0.1),
											duration: 0.8
										}}
										key={post?.ID || uuid()} 
										className="lg:min-w-[25%] lg:max-w-[25%] lg:w-[25%] lg:px-5"
									>
										<Link 
											href={!!post?.uri ? relativeToAbsoluteUrls(post?.uri) : '#'}
											className="flex flex-col gap-5 group cursor-pointer"
										>
											{/* Image */}
											<div 
												className="
													relative 
													min-w-full 
													max-w-full 
													w-full 
													pb-[68.89763779%] 
													bg-gray-300
													rounded-[0.625rem] 
													overflow-hidden 
												"
											>
												{!!post?.featuredImage && (
													<Image
														src={post.featuredImage?.url} 
														alt={post.featuredImage?.alt} 
														fill 
														className="object-center object-cover transition-[transform] duration-500 lg:transform lg:group-hover:scale-105 lg:group-focus-within:scale-105"
													/>
												)}
											</div>
											{/* Post title */}
											{!!post?.post_title && (
												<h4 
													className="
														relative
														h6 
														text-gray-800 
														line-clamp-3 
														text-ellipsis 
														transition-[color] 
														duration-500
														lg:group-hover:text-transparent
														lg:group-focus-within:text-transparent
														before:content-[var(--text-content)]
														before:absolute 
														before:top-0
														before:left-0
														before:min-w-full
														before:max-w-full
														before:w-full
														before:min-h-full
														before:max-h-full
														before:h-full
														before:text-transparent
														before:bg-[image:var(--gradient-primary)]
														before:bg-clip-text
														before:transition-[clip-path]
														before:duration-500
														before:z-[1]
														before:[clip-path:polygon(0_0,_0_0,_0_100%,_0_100%)]
														lg:group-hover:before:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
														lg:group-focus-within:before:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
													"
													style={{'--text-content': `'${post.post_title}'`}}
												>
													{post.post_title}
												</h4>
											)}
											<div className="flex justify-end">
												<p className="arrow-btn">
													Read more
												</p>
											</div>
										</Link>
									</motion.li>
								))}
							</ul>
						)}
					</div>
				</div>
			</section>
		</>
	)
};

export default BlogPosts;