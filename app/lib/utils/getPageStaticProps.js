import client from "./client";
import { gql } from "@apollo/client";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPageStaticProps = async (context) => {
	console.log('CONTEXT: ', context);
	const uri = context.params?.slug ? `/${context.params.slug.join('/')}/` : '/';

	const { data } = await client.query({
		query: gql`
			query PageQuery($uri: String!) {
				nodeByUri(uri: $uri) {
					... on Page {
						id
						title
						blocks(postTemplate: false)
						seo {
							title
							metaDesc
						}
					}
					... on Property {
						id
						title
						blocks(postTemplate: false)
						seo {
							title
							metaDesc
						}
					}
				}
				acfOptionsMainMenu {
					mainMenu {
						ctaButton {
                            destination {
								... on Page {
									uri
								}
                            }
                            label
                        }
						menuItems {
							menuItem {
								destination {
									... on Page {
										uri
									}
								}
								label
								}
								items {
									destination {
										... on Page {
											uri
										}
									}
									label
								}
							}
						}
					}
				}
		`,
		variables: {
			uri,
		}
	});

	return {
		props: {
			seo: data.nodeByUri.seo,
			mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
			cta: {label: data.acfOptionsMainMenu.mainMenu.ctaButton?.label || '', destination: data.acfOptionsMainMenu.mainMenu.ctaButton?.destination?.uri || ''},
			blocks: cleanAndTransformBlocks(data?.nodeByUri?.blocks) || []
		}
	}
}