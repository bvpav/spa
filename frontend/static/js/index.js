import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/', view: Dashboard },
        { path: '/posts', view: Posts },
        { path: '/settings', view: Settings },
    ];

    // test each route for potential matches
    const matches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path,
        }
    });

    const match = matches.find(m => m.isMatch) || { route: routes[0], isMatch: true };

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHTML();
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
