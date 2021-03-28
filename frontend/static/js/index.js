import Dashboard from './views/Dashboard.js';
import PostList from './views/PostList.js';
import PostView from './views/PostView.js';
import Settings from './views/Settings.js';

const pathToRegex = (path) => new RegExp(`^${path.replace(/\//g, '\\/').replace(/:\w+/g, '(\\w+)')}$`);

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map((result) => result[1]);

  return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
};

const router = async () => {
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/posts', view: PostList },
    { path: '/posts/:id', view: PostView },
    { path: '/settings', view: Settings },
  ];

  // test each route for potential matches
  const potentialMatches = routes.map((route) => ({
    route,
    result: window.location.pathname.match(pathToRegex(route.path)),
  }));

  let match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [window.location.pathname],
    };
  }

  // eslint-disable-next-line new-cap
  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.getHTML();
};

const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  router();

  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
});
