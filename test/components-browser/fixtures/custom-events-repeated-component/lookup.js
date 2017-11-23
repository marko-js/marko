var componentsById = {};

exports.addComponent = function (itemId, component) {
    componentsById[itemId] = component;
};

exports.componentsById = componentsById;