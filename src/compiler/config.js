var config;

/* globals window */
var g = typeof window === 'undefined' ? global : window;

function shouldAssumeUpToDate() {
    if (process.env.MARKO_CLEAN != null) {
        return false;
    }

    if (process.env.MARKO_ASSUME_UP_TO_DATE != null) {
        return true;
    }

    return false;
}

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
        assumeUpToDate: shouldAssumeUpToDate(),

        /**
         * If true, whitespace will be preserved in templates. Defaults to false.
         * @type {Boolean}
         */
        preserveWhitespace: false,

        // The default output mode for compiled templates
        output: 'html',

        /**
         * Whether the version should be written to the template as a comment e.g.
         * // Compiled using marko@4.0.0 - DO NOT EDIT
         */
        writeVersionComment: true,

        /**
         * Whether unrecognized tags should be ignored or not. This flag will
         * be enabled by default when compiling XML.
         */
        ignoreUnrecognizedTags: false,

        /**
         * Whether <@tags> should error when are used outside a custom component.
         */
        escapeAtTags: false,

        /**
         * Controls whether or not a key should be assigned to all HTML
         * and custom tags at compile-time. The default is `true`
         */
        autoKeyEnabled: true
    };

    if (process.env.MARKO_CONFIG) {
        Object.assign(config, JSON.parse(process.env.MARKO_CONFIG));
    }
}

module.exports = config;
