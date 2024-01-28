import { getPage } from "./lib/utils/getPage";
import { getSEO } from "./lib/utils/getSEO";
import { BlockRenderer } from "@/components/blocks/BlockRenderer/BlockRenderer";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

export default async function Home() {
	const data = await getPage('/');
    
    if ( !data )
    {
        notFound();
    }

	return (
        <>
            {/* Page content */}
            <main className="flex flex-col mt-[75px] lg:mt-[93px]">
                <BlockRenderer blocks={data} />
            </main>
        </>
	);
};

// GENERATE SEO RELATED THINGS
export async function generateMetadata() {
    const seo = await getSEO('/');

    return {
        title: seo?.title || '',
        description: seo?.metaDesc || '',
    }
};