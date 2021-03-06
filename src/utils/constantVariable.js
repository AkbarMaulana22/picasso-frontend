export const ResponseRequest = {
    TIMEOUT: 'ECONNABORTED',
    NETWORKERROR: 'Network Error',
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOTFOUND: 404,
    UNPROCESSABLE: 422,
    SERVERERROR: 500,
}

export const menuItems = [
    {
        icon: 'mdi-view-dashboard',
        title: 'dashboard',
        to: '/',
    },
    {
        icon: 'mdi-account',
        title: 'hero_jds',
        group: '/user',
        children: [
            {
                icon: '',
                title: 'asn',
                to: 'asn',
            },
            {
                icon: '',
                title: 'non_asn',
                to: 'non-asn',
            },
            {
                icon: '',
                title: 'magang',
                to: 'magang',
            },
            {
                icon: '',
                title: 'alumni',
                to: 'alumni',
            },
        ],
    },
    {
        icon: 'mdi-book',
        title: 'report',
        group: '/report',
        children: [{
                icon: '',
                title: 'monthly',
                to: 'monthly',
            },
            {
                icon: '',
                title: 'spj',
                to: 'spj',
            },
        ],
    },
    {
        icon: 'mdi-microsoft',
        title: 'master',
        group: '/master',
        children: [{
                icon: '',
                title: 'divisi',
                to: 'divisi',
            },
            {
                icon: '',
                title: 'jabatan',
                to: 'jabatan',
            },
            {
                icon: '',
                title: 'project',
                to: 'project',
            },
        ],
    },
    {
        icon: 'mdi-send',
        title: 'broadcast_message',
        to: '/broadcast-message',
    },
]
