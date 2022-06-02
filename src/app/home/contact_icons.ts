export interface ContactIcon {
    website_name: string,
    link: string,
    link_type: string,
    color_icon_link: string,
    gray_icon_link: string
}

export const contact_links = [
    {
        website_name: 'github',
        link: 'https://github.com/mmelines',
        link_type: 'https://i.imgur.com/5tM5CWR.png',
        color_icon_link: 'https://i.imgur.com/TPplrjf.png',
        gray_icon_link: 'https://i.imgur.com/5tM5CWR.png'
    },
    {
        website_name: 'linkedin',
        link: 'https://www.linkedin.com/in/mary-perry-0b5850240/',
        link_type: 'external',
        color_icon_link: 'https://i.imgur.com/KQ9XHUu.png',
        gray_icon_link: 'https://i.imgur.com/klTR9rl.png'
    },
    {
        website_name: 'twitter',
        link: 'https://twitter.com/mmelines',
        link_type: 'external',
        color_icon_link: 'https://i.imgur.com/W7Yb5Bn.png',
        gray_icon_link: 'https://i.imgur.com/oiWDHFu.png'
    },
    {
        website_name: 'email',
        link: 'contacts',
        link_type: 'router',
        color_icon_link: 'https://i.imgur.com/4TiLkGH.png',
        gray_icon_link: 'https://i.imgur.com/8qa4CsD.png'
    },
]