import clear from 'rollup-plugin-clear';
import copy from "rollup-plugin-copy";

export default {
    input: 'example/app.js',
    output: [
        {
            file: 'example-output/app.js',
            format: 'esm'
        }
    ],
    plugins: [
        copy({
            targets: [
                { src: 'example/index.html', dest: 'example-output' },
                { src: 'src/nojsxpreact.js', dest: 'example-output' },
            ]
        }),
        clear({
            targets: ['example-output'],
            watch: true
        })
    ]
};