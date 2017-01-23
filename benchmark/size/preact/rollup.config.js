import commonjsPlugin from 'rollup-plugin-commonjs';
import browserifyPlugin from 'rollup-plugin-browserify-transform';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import babelPlugin from 'rollup-plugin-babel';
import envify from 'envify';
import path from 'path';

process.env.NODE_ENV = 'production';

// NODE_ENV=production browserify -t envify -t markoify --extension='.marko' --global-transform minprops/browserify -o build/bundles/marko.js marko/client.js


export default {
    entry: path.join(__dirname, 'client.jsx'),
    format: 'iife',
    moduleName: 'app',
    plugins: [
        babelPlugin({
            // include: ['node_modules/**', '**/*.js', '**/*.jsx']
        }),
        browserifyPlugin(envify),
        nodeResolvePlugin({
            jsnext: false,  // Default: false
            main: true,  // Default: true
            browser: true,  // Default: false
            preferBuiltins: false,
            extensions: [ '.js', '.jsx' ]
        }),
        commonjsPlugin({
            include: [ 'node_modules/**', '**/*.js', '**/*.jsx'],
            extensions: [ '.js', '.jsx' ]
        })
    ],
    dest: path.join(__dirname, '../build/bundles/preact.js')
};