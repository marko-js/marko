var defineComponent = require('./defineComponent');

var registered = {};
var loaded = {};
var componentTypes = {};

function register(componentId, def) {
    // We do this to kick off registering of nested components
    // but we don't use the return value just yet since there
    // is a good chance that it resulted in a circular dependency
    def();

    registered[componentId] = def;
    delete loaded[componentId];
    delete componentTypes[componentId];
    return componentId;
}

function load(typeName, isLegacy) {
    var target = loaded[typeName];
    if (!target) {
        target = registered[typeName];

        if (target) {
            target = target();
        } else if(isLegacy) {
            target = window.$markoLegacy.load(typeName);
        }

        if (!target) {
            throw Error('Component not found: ' + typeName);
        }

        loaded[typeName] = target;
    }

    return target;
}

function getComponentClass(typeName, isLegacy) {
    var ComponentClass = componentTypes[typeName];

    if (ComponentClass) {
        return ComponentClass;
    }

    ComponentClass = load(typeName, isLegacy);

    ComponentClass = ComponentClass.Component || ComponentClass;

    if (!ComponentClass.___isComponent) {
        ComponentClass = defineComponent(ComponentClass, ComponentClass.renderer);
    }

    // Make the component "type" accessible on each component instance
    ComponentClass.prototype.___type = typeName;

    componentTypes[typeName] = ComponentClass;

    return ComponentClass;
}

function createComponent(typeName, id, isLegacy) {
    var ComponentClass = getComponentClass(typeName, isLegacy);
    return new ComponentClass(id);
}

exports.___register = register;
exports.___createComponent = createComponent;
