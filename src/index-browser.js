var EventEmitter = require('events').EventEmitter;
exports = module.exports = new EventEmitter();

var dom = require('marko-dom');
var ready = dom.ready;
var EMPTY_OBJ = {};
var Widget = require('./Widget');
var initWidgets = require('./init-widgets');
var updateManager = require('./update-manager');

var WidgetsContext = exports.WidgetsContext = require('./WidgetsContext');
exports.getWidgetsContext = WidgetsContext.getWidgetsContext;
exports.Widget = Widget;
exports.ready = ready;
exports.onInitWidget = function(listener) {
    exports.on('initWidget', listener);
};
exports.attrs = function() {
    return EMPTY_OBJ;
};

exports.writeDomEventsEl = function() {
    /* Intentionally empty in the browser */
};

function getWidgetForEl(id, document) {
    if (!id) {
        return undefined;
    }

    var node = typeof id === 'string' ? (document || window.document).getElementById(id) : id;
    return (node && node.__widget) || undefined;
}

exports.get = exports.getWidgetForEl = getWidgetForEl;

exports.initAllWidgets = function() {
    initWidgets.initServerRendered(true /* scan DOM */);
};

// Subscribe to DOM manipulate events to handle creating and destroying widgets

dom.on('beforeRemove', function(eventArgs) {
        var el = eventArgs.el;
        var widget = el.id ? getWidgetForEl(el) : null;
        if (widget) {
            widget.destroy({
                removeNode: false,
                recursive: true
            });
        }
    })
    .on('renderedToDOM', function(eventArgs) {
        var out = eventArgs.out;
        var widgetsContext = out.global.widgets;
        if (widgetsContext) {
            widgetsContext.initWidgets(eventArgs.document);
        }
    });

exports.initWidgets = window.$markoWidgets = function(ids) {
    initWidgets.initServerRendered(ids);
};

var JQUERY = 'jquery';
var jquery = window.$;

if (!jquery) {
    try {
        jquery = require(JQUERY);
    }
    catch(e) {}
}

exports.$ = jquery;

exports.registerWidget = require('./registry').register;
exports.defineComponent = require('./defineComponent');
exports.defineWidget = require('./defineWidget');
exports.defineRenderer = require('./defineRenderer');
exports.makeRenderable = exports.renderable = require('./renderable');

exports.batchUpdate = updateManager.batchUpdate;
exports.onAfterUpdate = updateManager.onAfterUpdate;

window.$MARKO_WIDGETS = exports; // Helpful when debugging... WARNING: DO NOT USE IN REAL CODE!
