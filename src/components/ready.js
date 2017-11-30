/*
    jQuery's doc.ready/$(function(){}) should
    you wish to use a cross-browser domReady solution
    without opting for a library.

    Demo: http://jsfiddle.net/zKLpb/

    usage:
    $(function(){
        // your code
    });

    Parts: jQuery project, Diego Perini, Lucent M.
    Previous version from Addy Osmani (https://raw.github.com/addyosmani/jquery.parts/master/jquery.documentReady.js)

    This version: Patrick Steele-Idem
    - Converted to CommonJS module
    - Code cleanup
    - Fixes for IE <=10
*/

/* globals window */

var isReady = false;
var readyBound = false;

var defaultWindow = typeof window != 'undefined' && window;
var defaultDocument = typeof document != 'undefined' && document;

var listeners = [];

function domReadyCallback() {
    for (var i = 0, len = listeners.length; i < len; i++) {
        var listener = listeners[i];
        listener[0].call(listener[1]);
    }
    listeners = null;
}

function bindReady(doc) {
    var toplevel = false;
    var win = doc.defaultView || defaultWindow || doc;

    // Handle when the DOM is ready
    function domReady() {
        // Make sure that the DOM is not already loaded
        if (!isReady) {
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if (!doc.body) {
                return setTimeout(domReady, 1);
            }
            // Remember that the DOM is ready
            isReady = true;
            // If there are functions bound, to execute
            domReadyCallback();
            // Execute all of them
        }
    } // /ready()

    // The ready event handler
    function domContentLoaded() {
        if (doc.addEventListener) {
            doc.removeEventListener("DOMContentLoaded", domContentLoaded, false);
            doc.removeEventListener("load", domContentLoaded, false);
        } else {
            // we're here because readyState !== "loading" in oldIE
            // which is good enough for us to call the dom ready!
            doc.detachEvent("onreadystatechange", domContentLoaded);
            doc.detachEvent("onload", domContentLoaded);
        }
        domReady();
    }

    // The DOM ready check for Internet Explorer
    function doScrollCheck() {
        if (isReady) {
            return;
        }

        try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            doc.documentElement.doScroll("left");
        } catch (error) {
            setTimeout(doScrollCheck, 1);
            return;
        }
        // and execute any waiting functions
        domReady();
    }

    // Catch cases where $ is called after the
    // browser event has already occurred. IE <= 10 has a bug that results in 'interactive' being assigned
    // to the readyState before the DOM is really ready
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        // We will get here if the browser is IE and the readyState === 'complete' or the browser
        // is not IE and the readyState === 'interactive' || 'complete'
        domReady(doc);
    } else if (doc.addEventListener) { // Standards-based browsers support DOMContentLoaded
        // Use the handy event callback
        doc.addEventListener("DOMContentLoaded", domContentLoaded, false);
        // A fallback to win.onload, that will always work
        win.addEventListener("load", domContentLoaded, false);
        // If IE event model is used
    } else if (doc.attachEvent) {
        // ensure firing before onload,
        // maybe late but safe also for iframes
        doc.attachEvent("onreadystatechange", domContentLoaded);
        // A fallback to win.onload, that will always work
        win.attachEvent("onload", domContentLoaded);
        // If IE and not a frame
        // continually check to see if the document is ready
        try {
            toplevel = win.frameElement == null;
        } catch (e) {}
        if (doc.documentElement.doScroll && toplevel) {
            doScrollCheck();
        }
    }
}

function ready(callback, thisObj, doc) {
    if (isReady) {
        return callback.call(thisObj);
    }

    listeners.push([callback, thisObj]);

    if (!readyBound) {
        readyBound = true;
        bindReady(doc || defaultDocument);
    }
}

module.exports = ready;

module.exports.patchComponent = function(proto) {
    (proto || require('./Component').prototype).ready = function (callback) {
        var document = this.el.ownerDocument;
        ready(callback, this, document);
    };
};
