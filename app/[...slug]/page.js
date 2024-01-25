import { getPage } from "../lib/utils/getPage";
import { getSEO } from "../lib/utils/getSEO";
import { BlockRenderer } from "@/components/blocks/BlockRenderer/BlockRenderer";
import { notFound } from "next/navigation";

export default async function Home({ params }) {
	const data = await getPage(params.slug.join('/'));
    
    if ( !data )
    {
        notFound();
    }

	return (
		<main className="flex flex-col min-h-screen">
			<BlockRenderer blocks={data} />
		</main>
	);
};

// GENERATE SEO RELATED THINGS
export async function generateMetadata({ params }) {
    const seo = await getSEO(params.slug.join('/'));

    return {
        title: seo?.title || '',
        description: seo?.metaDesc || '',
    }
};