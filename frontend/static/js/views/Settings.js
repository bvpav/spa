import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    AbstractView.setTitle('Settings');
  }

  async getHTML() {
    return `
      <h1>Settings</h1>

      <article>
        <input type="checkbox" name="foobar" id="foobar" />
        <label for="foobar">Use Foobar</label>
      </article>

      <article>
        <label for="theme">Theme</label>
        <select name="theme" id="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </article>
    `;
  }
}
