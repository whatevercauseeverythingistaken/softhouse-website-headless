'use client';

import getBlockRepeaterFields from '@/app/lib/utils/getBlockRepeaterFields';
import safelySetInnerHTML from "@/app/lib/utils/safelySetInnerHTML";
import { relativeToAbsoluteUrls } from '@/app/lib/utils/relativeToAbsoluteUrls';
import DecorativeHeading from "@/components/ui/DecorativeHeading/DecorativeHeading";
import Image from 'next/image';
import Link from 'next/link';

const BlogPosts = ({ data }) => {
	console.log(data);

	// const bgs = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'icon_bg') || [];
	// const icons = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'icon') || [];
	// const labels = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'label') || [];
	// const contents = getBlockRepeaterFields(data, [data?.blocks, 'blocks'], 'content') || [];

	// // Get em all to one array
	// const blocksFixed = Array.from({length: data?.blocks || 0}).map((val, index) => {
	//     return {
	//         icon_bg: bgs[index] || '',
	//         icon: icons[index] || '',
	//         label: labels[index] || '',
	//         content: contents[index] || ''
	//     }
	// });

	return (
		<>
			<section className="approach-section py-10 lg:py-[5.5625rem]">
				<div className="container">
					{/* Heading */}
					{!!data?.heading && (
						<DecorativeHeading alignment="center">
							{safelySetInnerHTML(data.heading)}
						</DecorativeHeading>
					)}
					{/* Posts */}
					{!!data?.posts && (
						<ul className="list-none grid grid-cols-1 lg:grid-cols-4 gap-10 mt-[4.125rem]">
							{Array.isArray(data.posts) && data.posts.map(post => (
								<li key={post?.ID || null}>
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
													group-hover:text-transparent
													group-focus-within:text-transparent
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
													group-hover:before:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
													group-focus-within:before:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
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
								</li>
							))}
						</ul>
					)}
				</div>
			</section>
		</>
	)
};

export default BlogPosts;