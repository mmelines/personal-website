export interface NavLink {
    'id': String,
    'text': String,
    'routerlink': String,
}

export const nav_links = [
    {
        id: 'projects-link',
        text: 'Projects',
        routerlink: '/projects'
    },
    {
        id: 'resume-link',
        text: 'Resume',
        routerlink: '/resume'
    },
    {
        id: 'writing-link',
        text: 'Writing',
        routerlink: '/writing'
    },
    {
        id: 'visual-link',
        text: 'Visual',
        routerlink: '/visual'
    },
    {
        id: 'about-link',
        text: 'About',
        routerlink: '/about'
    }
]