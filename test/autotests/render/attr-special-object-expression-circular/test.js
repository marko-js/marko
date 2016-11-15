var parent = {
    name: 'parent'
};

var child = {
    parent: parent
};

parent.child = child;

exports.templateData = {
    parent: parent
};
exports.vdomSkip = true;