import { div, render } from '../src/nojxspreact.js';

const main = () => {
    const helloWorld = div(null, "Hello World");

    render(helloWorld, document.body);
}

main();
