export default class {
  constructor(params) {
    this.params = params;

    console.log(this.params);
  }

  static setTitle(title) {
    document.title = `SPA / ${title}`;
  }

  async getHTML() {
    return '';
  }
}
