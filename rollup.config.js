import clear from 'rollup-plugin-clear';

export default {
    input: 'src/nojsxpreact.js',
    output: [
        {
            file: 'public/nojsxpreact.js',
            format: 'esm'
        }
    ],
    plugins: [
        clear({
            targets: ['public'],
            watch: true
        })
    ]
};