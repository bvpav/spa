import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Settings');
    }

    async getHTML() {
        return `
            <h1>Posts</h1>
            <p>Manage your settings</p>
        `
    }
}
