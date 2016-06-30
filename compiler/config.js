var NODE_ENV = process.env.NODE_ENV;
var config;

/* globals window */
var g = typeof window === 'undefined' ? global : window;

if (g.__MARKO_CONFIG) {
    config = g.__MARKO_CONFIG;
} else {
    config = g.__MARKO_CONFIG = {
        /**
         * If true, then the compiler will check the disk to see if a previously compiled
         * template is the same age or newer than the source template. If so, the previously
         * compiled template will be loaded. Otherwise, the template will be recompiled
         * and saved to disk.
         *
         * If false, the template will always be recompiled. If `writeToDisk` is false
         * then this option will be ignored.
         */
        checkUpToDate: process.env.MARKO_CLEAN ? false : true,
        /**
         * If true (the default) then compiled templates will be written to disk. If false,
         * compiled templates will not be written to disk (i.e., no `.marko.js` file will
         * be generated)
         */
        writeToDisk: true,

        /**
         * If true, then the compiled template on disk will assumed to be up-to-date if it exists.
         */
        assumeUpToDate: process.env.MARKO_CLEAN != null || process.env.hasOwnProperty('MARKO_HOT_RELOAD') ? false : ( NODE_ENV == null ? false : (NODE_ENV !== 'development' && NODE_ENV !== 'dev')),

        /**
         * If true, whitespace will be preserved in templates. Defaults to false.
         * @type {Boolean}
         */
        preserveWhitespace: false
    };
}

module.exports = config;