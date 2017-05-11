import commonjsPlugin from 'rollup-plugin-commonjs';
import browserifyPlugin from 'rollup-plugin-browserify-transform';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import vueify from 'vueify';
import envify from 'envify';
import minpropsify from 'minprops/browserify';
import path from 'path';

process.env.NODE_ENV = 'production';


export default {
    entry: path.join(__dirname, 'client.js'),
    format: 'iife',
    moduleName: 'app',
    plugins: [
        browserifyPlugin(vueify),
        browserifyPlugin(envify),
        browserifyPlugin(minpropsify),
        nodeResolvePlugin({
            jsnext: true,  // Default: false
            main: true,  // Default: true
            browser: true,  // Default: false
            preferBuiltins: false,
            extensions: [ '.js', '.vue' ]
        }),
        commonjsPlugin({
            include: [],
            extensions: [ '.js', '.vue' ]
        })
    ],
    dest: path.join(__dirname, '../build/bundles/vue.js')
};
