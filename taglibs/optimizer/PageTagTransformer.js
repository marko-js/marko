'use strict';
module.exports = {
    process: function (node, compiler, template) {
        var templatePath = template.makeExpression(JSON.stringify(template.getPath()));
        node.setProperty('templatePath', templatePath);
        function convertDependencyTags(parent) {
            parent.forEachChild(function (child) {
                if (child.isElementNode() && !child.namespace) {
                    // Convert unnamespaced element nodes to "DependencyTag" nodes
                    child.tag = compiler.taglibs.getTag('optimizer', 'dependency');
                    if (child.localName !== 'dependency') {
                        child.setProperty('type', child.localName);
                    }
                    child.forEachAttributeNS('', function (attr) {
                        var value = attr.value;
                        if (value === 'true') {
                            value = true;
                        } else if (value === 'false') {
                            value = false;
                        } else {
                            value = compiler.convertType(value, 'string', true);
                        }
                        child.setProperty(attr.localName, value);
                    });
                    child.removeAttributesNS('');
                } else {
                    convertDependencyTags(child);
                }
            });
        }
        node.forEachChild(function (child) {
            if (!child.namespace && (child.tagName === 'dependencies' || child.tagName === 'includes')) {
                child.tag = compiler.taglibs.getTag('optimizer', 'dependencies');
                convertDependencyTags(child);
            }
        }, this);
    }
};