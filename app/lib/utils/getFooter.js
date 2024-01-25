export const getFooter = async () => {
	const params = {
		query: `
			query FooterQuery {
				footerMenu {
					acfOptionsFooterMenu {
						footerTop {
							footerCol1 {
								footerLogo {
									node {
										altText
										sourceUrl
									}
								}
								content
								badge {
									node {
										altText
										sourceUrl
									}
								}
							}
							footerCol2 {
								label
								links {
									link {
										url
										target
										title
									}
								}
							}
							footerCol3 {
								content
								label
							}
							footerCol4 {
								socials {
									icon {
										node {
											sourceUrl
										}
									}
									link
								}
							}
						}
						footerBottom {
							footerBottomText
						}
					}
				}
			}
        `,
	};

	const response = await fetch(process.env.WP_GRAPHQL_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	});

	const { data } = await response.json();

	return {
		top: data?.footerMenu?.acfOptionsFooterMenu?.footerTop || {},
		bottom: data?.footerMenu?.acfOptionsFooterMenu?.footerBottom || {},
	};
};