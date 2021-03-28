export default class {
  constructor(params) {
    this.params = params;

    console.log(this.params);
  }

  static setTitle(title) {
    document.title = title;
  }

  async getHTML() {
    return '';
  }
}
