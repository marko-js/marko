var ready = require('./ready');

var idRegExp = /^\#(\S+)( .*)?/;

exports.patchWidget = function(jQuery) {
    /* globals window */

    if (!jQuery) {
        jQuery = window.$;
        if (!jQuery) {
            throw new Error('jQuery not found');
        }
    }

    require('./widgets/Widget').prototype.$ = function jqueryProxy(arg) {
        var args = arguments;
        var self = this;

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
                    var widgetElId = match[1];
                    if (match[2] == null) {
                        return jQuery(self.getEl(widgetElId));
                    } else {
                        return jQuery('#' + self.getElId(widgetElId) + match[2]);
                    }
                } else {
                    var rootEl = self.getEl();
                    if (!rootEl) {
                        throw new Error('Root element is not defined for widget');
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


