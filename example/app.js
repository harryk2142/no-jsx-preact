import { div, h1, h2, hr, render } from './nojsxpreact.js';

const main = () => {
    const helloWorld = div(h1("Hello World"), hr(), h2("TEST"));

    render(helloWorld, document.body);
}

main();
