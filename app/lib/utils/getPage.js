import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri) => {
    const params = {
        query: `
            query PageQuery($uri: String!) {
                nodeByUri(uri: $uri) {
                    ... on Page {
                        blocks(postTemplate: false)
                    }
                    ... on CaseStudy {
                        blocks(postTemplate: false)
                    }
                }
            }
        `,
        variables: {
            uri
        }
    };

    const response = await fetch(process.env.WP_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const {data} = await response.json();

    console.log(data);

    if ( !data?.nodeByUri )
    {
        return null;
    }

    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);

    return blocks;
};