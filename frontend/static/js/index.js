const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: () => console.log('dashboard') },
        { path: '/posts', view: () => console.log('posts') },
        { path: '/settings', view: () => console.log('settings') },
    ];

    // test each route for potential matches
    const matches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path,
        }
    });

    const match = matches.find(m => m.isMatch) || { route: routes[0], isMatch: true };

    console.log(match.route.view());
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    router();

    document.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
});
