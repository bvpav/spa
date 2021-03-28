import AbstractView from './AbstractView';

export default class extends AbstractView {
    constructor() {
        this.setTitle('Dashboard');
    }

    async getHTML() {
        return `
            <h1>Welcome back, Dom</h1>

            <p>
                Donec ut fringilla mi. Duis commodo, purus vel venenatis egestas, libero mauris
                consequat nunc, vel suscipit quam velit sit amet libero. Sed cursus, urna sed
                dictum interdum, enim diam accumsan velit, porttitor semper nibh nulla in
                tortor. Mauris vel lacinia velit.
            </p>
            <p>
                <a href='/posts' data-link>View recent posts</a>/
            </p>
        `
    }
}
