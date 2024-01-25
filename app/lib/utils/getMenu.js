export const getMenu = async () => {
    const params = {
        query: `
            query MenuQuery {
                mainMenu {
                    acfOptionsMainMenu {
                        ctaButton {
                            target
                            title
                            url
                        }
                        logo {
                            node {
                                altText
                                sourceUrl
                            }
                        }
                        navLinks {
                            link {
                                target
                                title
                                url
                            }
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

    const {data} = await response.json();

    return {
        logo: data?.mainMenu?.acfOptionsMainMenu?.logo?.node || {},
        links: data?.mainMenu?.acfOptionsMainMenu?.navLinks || {},
        ctaButton: data?.mainMenu?.acfOptionsMainMenu?.ctaButton || {}
    };
};