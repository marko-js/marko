const path = require("path");

const getComponents = (module.exports = (template, components) => {
    var meta = template.meta;
    components = components || {};
    if (meta) {
        if (!components[meta.id]) {
            if (meta.id && meta.component) {
                components[meta.id] = path.resolve(
                    path.dirname(template.path),
                    meta.component
                );
            }
            if (meta.tags) {
                meta.tags.forEach(tagRelativePath => {
                    var tagPath =
                        "." === tagRelativePath[0]
                            ? path.resolve(
                                  path.dirname(template.path),
                                  tagRelativePath
                              )
                            : tagRelativePath;
                    var tagTemplate = require(tagPath);
                    components = getComponents(tagTemplate, components);
                });
            }
        }
    }
    return components;
});
