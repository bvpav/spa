import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    AbstractView.setTitle('Post');
  }

  async getHTML() {
    const res = await fetch(`/api/posts/${this.params.id}`);
    if (res.ok) {
      const { data: post } = await res.json();
      return `
        <a href="/posts" data-link>&lt; Back</a>
        <h1>${post.title}</h1>
        <p>${post.content}</p>
      `;
    }
    return '<a href="/posts" data-link>&lt; Back</a> <h1>404 NOT Found ;-;';
  }
}
