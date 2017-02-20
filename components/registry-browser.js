var loadComponent = require('./loadComponent');
var defineComponent = require('./defineComponent');

var registered = {};
var loaded = {};
var componentTypes = {};

function register(typeName, def) {
    if (typeof def === 'function') {
        // We do this to kick off registering of nested components
        // but we don't use the return value just yet since there
        // is a good chance that it resulted in a circular dependency
        def();
    }

    registered[typeName] = def;
    delete loaded[typeName];
    delete componentTypes[typeName];
    return typeName;
}

function load(typeName) {
    var target = loaded[typeName];
    if (target === undefined) {
        target = registered[typeName];

        if (typeof target === 'function') {
            target = target();
        }
        if (!target) {
            target = loadComponent(typeName); // Assume the typeName has been fully resolved already
        }
        loaded[typeName] = target || null;
    }

    if (target == null) {
        throw new Error('Unable to load: ' + typeName);
    }
    return target;
}

function getComponentClass(typeName) {
    var ComponentClass = componentTypes[typeName];

    if (ComponentClass) {
        return ComponentClass;
    }

    ComponentClass = load(typeName);

    if (ComponentClass.Component) {
        ComponentClass = ComponentClass.Component;
    }

    if (!ComponentClass.$__isComponent) {
        ComponentClass = defineComponent(ComponentClass, ComponentClass.renderer);
    }

    // Make the component "type" accessible on each component instance
    ComponentClass.prototype.$__type = typeName;

    componentTypes[typeName] = ComponentClass;

    return ComponentClass;
}

function createComponent(typeName, id) {
    var ComponentClass = getComponentClass(typeName);
    var component;
    if (typeof ComponentClass === 'function') {
        // The component is a constructor function that we can invoke to create a new instance of the component
        component = new ComponentClass(id);
    } else if (ComponentClass.initComponent) {
        component = ComponentClass;
    }
    return component;
}

exports.$__register = register;
exports.$__createComponent = createComponent;
