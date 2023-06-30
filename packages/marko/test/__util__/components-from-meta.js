const path = require("path");

const getComponents = (module.exports = (template, components) => {
  const meta = template.meta;
  components = components || {};
  if (meta) {
    if (!components[meta.id]) {
      const dir = path.dirname(template.path);
      components[meta.id] =
        meta.component && /-browser/.test(meta.component)
          ? path.resolve(dir, meta.component)
          : template.path;

      if (meta.tags) {
        const dir = path.dirname(template.path);
        meta.tags.forEach((tagRelativePath) => {
          var tagPath =
            "." === tagRelativePath[0]
              ? path.resolve(dir, tagRelativePath)
              : tagRelativePath;
          var tagTemplate = require(tagPath);
          tagTemplate = tagTemplate.default || tagTemplate;
          components = getComponents(tagTemplate, components);
        });
      }
    }
  }
  return components;
});
