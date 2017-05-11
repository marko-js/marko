process.env.NODE_ENV = 'production';

import commonjsPlugin from 'rollup-plugin-commonjs';
import browserifyPlugin from 'rollup-plugin-browserify-transform';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import markoify from 'markoify';
import envify from 'envify';
import minpropsify from 'minprops/browserify';
import path from 'path';

// NODE_ENV=production browserify -t envify -t markoify --extension='.marko' --global-transform minprops/browserify -o build/bundles/marko.js marko/client.js


export default {
    entry: path.join(__dirname, 'client.js'),
    format: 'iife',
    moduleName: 'app',
    plugins: [
        browserifyPlugin(markoify),
        browserifyPlugin(envify),
        browserifyPlugin(minpropsify),
        nodeResolvePlugin({
            jsnext: false,  // Default: false
            main: true,  // Default: true
            browser: true,  // Default: false
            preferBuiltins: false,
            extensions: [ '.js', '.marko' ]
        }),
        commonjsPlugin({
            include: [],
            extensions: [ '.js', '.marko' ]
        })
    ],
    dest: path.join(__dirname, '../build/bundles/marko.js')
};
