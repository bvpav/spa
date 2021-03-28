import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    AbstractView.setTitle('Posts');
  }

  async getHTML() {
    const res = await fetch('/api/posts');
    const { data: posts } = await res.json();
    const postsHTML = Object.entries(posts).reduce((value, [id, post]) => value + `
      <article>
        <h3><a href="/posts/${id}" data-link>${post.title}</a></h3>
      </article>
    `, '');
    console.log(postsHTML);

    return `
            <h1>Posts</h1>
            ${postsHTML}
    `;
  }
}
