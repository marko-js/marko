var ready = require('./ready');

var idRegExp = /^\#(\S+)( .*)?/;

exports.patchComponent = function(jQuery, proto, delayThrow) {
    /* globals window */

    if (!(jQuery || (jQuery = window.$)) && !delayThrow) {
        throw new Error('jQuery not found');
    }

    (proto || require('./Component').prototype).$ = function jqueryProxy(arg) {
        var args = arguments;
        var self = this;

        if (!jQuery) {
            throw new Error('jQuery not found');
        }

        if (args.length === 1) {
            //Handle an "ondomready" callback function
            if (typeof arg === 'function') {
                return ready(function() {
                    arg.call(self);
                });
            } else if (typeof arg === 'string') {
                var match = idRegExp.exec(arg);
                //Reset the search to 0 so the next call to exec will start from the beginning for the new string
                if (match != null) {
                    var key = match[1];
                    if (match[2] == null) {
                        return jQuery(self.getEl(key));
                    } else {
                        return jQuery(match[2].trim(), self.getEl(key));
                    }
                } else {
                    var rootEl = self.getEl();
                    if (!rootEl) {
                        throw new Error('Root element is not defined for component');
                    }
                    if (rootEl) {
                        return jQuery(arg, rootEl);
                    }
                }
            }
        } else if (args.length === 2 && typeof args[1] === 'string') {
            return jQuery(arg, self.getEl(args[1]));
        } else if (args.length === 0) {
            return jQuery(self.el);
        }
        return jQuery.apply(window, arguments);
    };
};
