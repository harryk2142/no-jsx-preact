import { div, h1, h2, hr, render, span } from './../src/nojsxpreact.js';

const main = () => {
    const helloWorld =
        div(
            h1("Hello World"),
            hr(
                {
                    style: {
                        "color": "grey",
                    }
                }),
            h2("This is H2"),
            hr(
                {
                    style: {
                        "color": "grey",
                    }
                }),
            span(
                {
                    style: {
                        "color": "grey",
                        "font-size": "50px"
                    }
                },
                div("Simple DIV")
            )
        );

    render(helloWorld, document.body);
}

main();
