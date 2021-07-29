import { div, render } from 'nojsxpreact.js';

const main = () => {
    const helloWorld = div(null, "Hello World");

    render(helloWorld, document.body);
}

main();
