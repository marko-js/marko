var componentsUtil = require('./util');
var events = require('../runtime/events');
var Component = require('./Component');

function onInitComponent(listener) {
    events.on('initComponent', listener);
}

exports.onInitComponent = onInitComponent;
exports.Component = Component;
exports.getComponentForEl = componentsUtil.$__getComponentForEl;
exports.init = require('./init-components').$__initServerRendered;

exports.c = require('./defineComponent'); // Referenced by compiled templates
exports.r = require('./renderer'); // Referenced by compiled templates
exports.rc = require('./registry').$__register;  // Referenced by compiled templates

window.$__MARKO_COMPONENTS = exports; // Helpful when debugging... WARNING: DO NOT USE IN REAL CODE!
