"use strict";

var ok = require("assert").ok;
var resolveFrom = require("resolve-from").silent;
var propertyHandlers = require("property-handlers");
var isObjectEmpty = require("raptor-util/isObjectEmpty");
var nodePath = require("path");
var createError = require("raptor-util/createError");
var taglibFS = require("../fs");
var types = require("./types");
var loaders = require("./loaders");
var markoModules = require("../../../modules");
var hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveRelative(dirname, value) {
  return value[0] === "." ? resolveFrom(dirname, value) : value;
}

function removeDashes(str) {
  return str.replace(/-([a-z])/g, function (match, lower) {
    return lower.toUpperCase();
  });
}

function hasAttributes(tagProps) {
  if (tagProps.attributes != null) {
    return true;
  }

  for (var name in tagProps) {
    if (hasOwnProperty.call(tagProps, name) && name.startsWith("@")) {
      return true;
    }
  }

  return false;
}

function normalizeHook(dirname, value) {
  if (typeof value === "string") {
    value = resolveRelative(dirname, value);
    return {
      path: value,
      get hook() {
        return markoModules.require(value);
      }
    };
  }
  return { hook: value };
}

/**
 * We load tag definition using this class. Properties in the taglib
 * definition (which is just a JavaScript object with properties)
 * are mapped to handler methods in an instance of this type.
 *
 * @param {Tag} tag The initially empty Tag instance that we populate
 * @param {String} dirname The full file system path associated with the tag being loaded
 * @param {String} path An informational path associated with this tag (used for error reporting)
 */
class TagLoader {
  constructor(tag, dependencyChain) {
    this.tag = tag;
    this.dependencyChain = dependencyChain;

    this.filePath = tag.filePath;
    this.dirname = tag.dir || tag.dirname;
  }

  load(tagProps) {
    if (!hasAttributes(tagProps)) {
      // allow any attributes if no attributes are declared
      tagProps.attributes = {
        "*": {
          type: "string",
          targetProperty: null,
          preserveName: false
        }
      };
    }

    propertyHandlers(tagProps, this, this.dependencyChain.toString());
  }

  _handleVar(value, dependencyChain) {
    var tag = this.tag;

    var nestedVariable;

    if (typeof value === "string") {
      nestedVariable = {
        name: value
      };
    } else {
      nestedVariable = {};

      propertyHandlers(
        value,
        {
          name: function (value) {
            nestedVariable.name = value;
          },

          nameFromAttribute: function (value) {
            nestedVariable.nameFromAttribute = value;
          }
        },
        dependencyChain.toString()
      );

      if (!nestedVariable.name && !nestedVariable.nameFromAttribute) {
        throw new Error(
          'The "name" or "name-from-attribute" attribute is required for a nested variable (' +
            dependencyChain +
            ")"
        );
      }
    }

    tag.addNestedVariable(nestedVariable);
  }

  /**
   * This is handler is for any properties that didn't match
   * one of the default property handlers. This is used to
   * match properties in the form of "@attr_name" or
   * "<nested_tag_name>"
   */
  "*"(name, value) {
    var tag = this.tag;
    var dependencyChain = this.dependencyChain;
    var parts = name.split(/\s+|\s+[,]\s+/);

    var i;
    var part;

    var hasNestedTag = false;
    var hasAttr = false;
    var nestedTagTargetProperty = null;

    // We do one pass to figure out if there is an
    // attribute or nested tag or both
    for (i = 0; i < parts.length; i++) {
      part = parts[i];
      if (part.startsWith("@")) {
        hasAttr = true;

        if (i === 0) {
          // Use the first attribute value as the name of the target property
          nestedTagTargetProperty = part.substring(1);
        }
      } else if (part.startsWith("<")) {
        hasNestedTag = true;
      } else {
        // Unmatched property that is not an attribute or a
        // nested tag
        return false;
      }
    }

    var attrProps = {};
    var tagProps = {};
    var k;

    if (value != null && typeof value === "object") {
      for (k in value) {
        if (hasOwnProperty.call(value, k)) {
          if (k.startsWith("@") || k.startsWith("<")) {
            // Move over all of the attributes and nested tags
            // to the tag definition.
            tagProps[k] = value[k];
            delete value[k];
          } else {
            // The property is not a shorthand attribute or shorthand
            // tag so move it over to either the tag definition
            // or the attribute definition or both the tag definition
            // and attribute definition.
            var propNameDashes = removeDashes(k);

            if (
              isSupportedProperty(propNameDashes) &&
              loaders.isSupportedAttributeProperty(propNameDashes)
            ) {
              // Move over all of the properties that are associated with a tag
              // and attribute
              tagProps[k] = value[k];
              attrProps[k] = value[k];
              delete value[k];
            } else if (isSupportedProperty(propNameDashes)) {
              // Move over all of the properties that are associated with a tag
              tagProps[k] = value[k];
              delete value[k];
            } else if (loaders.isSupportedAttributeProperty(propNameDashes)) {
              // Move over all of the properties that are associated with an attr
              attrProps[k] = value[k];
              delete value[k];
            }
          }
        }
      }

      // If there are any left over properties then something is wrong
      // with the user's taglib.
      if (!isObjectEmpty(value)) {
        throw new Error(
          "Unsupported properties of [" + Object.keys(value).join(", ") + "]"
        );
      }

      var type = attrProps.type;
      if (!type && hasAttr && hasNestedTag) {
        // If we have an attribute and a nested tag then default
        // the attribute type to "expression"
        attrProps.type = "expression";
      }
    } else if (typeof value === "string") {
      if (hasNestedTag && hasAttr) {
        tagProps = attrProps = {
          type: value
        };
      } else if (hasNestedTag) {
        tagProps = {
          type: value
        };
      } else {
        attrProps = {
          type: value
        };
      }
    }

    // Now that we have separated out attribute properties and tag properties
    // we need to create the actual attributes and nested tags
    for (i = 0; i < parts.length; i++) {
      part = parts[i];
      if (part.startsWith("@")) {
        // This is a shorthand attribute
        var attrName = part.substring(1);

        var attr = loaders.loadAttributeFromProps(
          attrName,
          attrProps,
          dependencyChain.append(part)
        );

        tag.addAttribute(attr);
      } else if (part.startsWith("<")) {
        // This is a shorthand nested tag
        let nestedTag = new types.Tag(this.filePath);

        loadTagFromProps(nestedTag, tagProps, dependencyChain.append(part));

        // We use the '[]' suffix to indicate that a nested tag
        // can be repeated
        var isNestedTagRepeated = false;
        if (part.endsWith("[]")) {
          isNestedTagRepeated = true;
          part = part.slice(0, -2);
        }

        var nestedTagName = part.substring(1, part.length - 1);
        nestedTag.name = nestedTagName;
        nestedTag.isRepeated = nestedTag.isRepeated || isNestedTagRepeated;
        // Use the name of the attribute as the target property unless
        // this target property was explicitly provided
        nestedTag.targetProperty =
          attrProps.targetProperty || nestedTagTargetProperty;
        tag.addNestedTag(nestedTag);

        if (!nestedTag.isRepeated) {
          let attr = loaders.loadAttributeFromProps(
            nestedTag.targetProperty,
            { type: "object" },
            dependencyChain.append(part)
          );

          tag.addAttribute(attr);
        }
      } else {
        return false;
      }
    }
  }

  /**
   * The tag name
   * @param {String} value The tag name
   */
  name(value) {
    var tag = this.tag;
    tag.name = value;
  }

  /**
   * The path to the renderer JS module to use for this tag.
   *
   * NOTE: We use the equivalent of require.resolve to resolve the JS module
   * 		 and use the tag directory as the "from".
   *
   * @param {String} value The renderer path
   */
  renderer(value) {
    this.tag.renderer = resolveRelative(this.dirname, value);
  }

  /**
   * A tag can use a renderer or a template to do the rendering. If
   * a template is provided then the value should be the path to the
   * template to use to render the custom tag.
   */
  template(value) {
    var tag = this.tag;
    var dirname = this.dirname;

    var path = nodePath.resolve(dirname, value);

    try {
      taglibFS.curFS.statSync(path);
      tag.template = path;
    } catch (_) {
      throw new Error('Template at path "' + path + '" does not exist.');
    }
  }

  /**
   * An Object where each property maps to an attribute definition.
   * The property key will be the attribute name and the property value
   * will be the attribute definition. Example:
   * {
   *     "attributes": {
   *         "foo": "string",
   *         "bar": "expression"
   *     }
   * }
   */
  attributes(value) {
    var tag = this.tag;

    loaders.loadAttributes(
      value,
      tag,
      this.dependencyChain.append("attributes")
    );
  }

  /**
   * Deprecated
   */
  migrator(value) {
    this.migrate(value);
  }
  /**
   * A custom tag can be mapped to module that is used
   * migrate deprecated features to modern features.
   */
  migrate(value) {
    if (Array.isArray(value)) {
      value.forEach(this.migrate, this);
    } else {
      this.tag.migrators.push(normalizeHook(this.dirname, value));
    }
  }

  /**
   * Deprecated
   */
  codeGenerator(value) {
    this.translate(value);
  }

  /**
   * A custom tag can be mapped to module that is is used
   * to generate compile-time code for the custom tag. A
   * node type is created based on the methods and methods
   * exported by the code codegen module.
   */
  translate(value) {
    this.tag.translator = normalizeHook(this.dirname, value);
  }

  /**
   * Deprecated
   */
  nodeFactory(value) {
    this.parse(value);
  }

  /**
   * A custom tag can be mapped to a compile-time Node that gets
   * added to the parsed Abstract Syntax Tree (AST). The Node can
   * then generate custom JS code at compile time. The value
   * should be a path to a JS module that gets resolved using the
   * equivalent of require.resolve(path)
   */
  parse(value) {
    this.tag.parser = normalizeHook(this.dirname, value);
  }

  /**
   * Deprecated
   */
  transformer(value) {
    this.transform(value);
  }

  /**
   * If a custom tag has an associated transformer then the transformer
   * will be called on the compile-time Node. The transformer can manipulate
   * the AST using the DOM-like API to change how the code gets generated.
   */
  transform(value) {
    if (Array.isArray(value)) {
      value.forEach(this.transform, this);
    } else {
      this.tag.transformers.push(normalizeHook(this.dirname, value));
    }
  }

  /**
   * A custom tag can be mapped to module that is is used
   * to analyze code and cache the result in memory.
   * This analysis data should be read by translate hooks.
   */
  analyze(value) {
    this.tag.analyzer = normalizeHook(this.dirname, value);
  }

  /**
   * The tag type.
   */
  type(value) {
    var tag = this.tag;
    tag.type = value;
  }

  isRepeated(value) {
    var tag = this.tag;
    tag.isRepeated = value;
  }

  targetProperty(value) {
    var tag = this.tag;
    tag.targetProperty = value;
  }

  /**
   * Declare a nested tag.
   *
   * Example:
   * {
   *     ...
   *     "nested-tags": {
   *        "tab": {
   *            "target-property": "tabs",
   *            "is-repeated": true
   *        }
   *     }
   * }
   */
  nestedTags(value) {
    var filePath = this.filePath;
    var tag = this.tag;

    for (const nestedTagName in value) {
      const nestedTagDef = value[nestedTagName];
      var dependencyChain = this.dependencyChain.append(
        `nestedTags["${nestedTagName}"]`
      );
      var nestedTag = new types.Tag(filePath);

      loadTagFromProps(nestedTag, nestedTagDef, dependencyChain);

      nestedTag.name = nestedTagName;
      tag.addNestedTag(nestedTag);

      if (!nestedTag.isRepeated) {
        let attr = loaders.loadAttributeFromProps(
          nestedTag.targetProperty,
          { type: "object" },
          dependencyChain
        );

        tag.addAttribute(attr);
      }
    }
  }

  openTagOnly(value) {
    this.tag.openTagOnly = value;
  }

  /**
   * The description of the tag. Only used for documentation.
   */
  description(value) {
    this.tag.description = value;
  }

  autocomplete(value) {
    this.tag.autocomplete = value;
  }

  parseOptions(value) {
    this.tag.parseOptions = value;
  }

  deprecated(value) {
    this.tag.deprecated = value;
  }

  attributeGroups(value) {
    if (!value) {
      return;
    }

    var attributeGroups =
      this.tag.attributeGroups || (this.tag.attributeGroups = []);
    this.tag.attributeGroups = attributeGroups.concat(value);
  }

  html(value) {
    this.tag.html = value === true;
  }

  htmlType(value) {
    this.tag.htmlType = value;
  }

  featureFlags(value) {
    this.tag.featureFlags = value;
  }
}

function isSupportedProperty(name) {
  return hasOwnProperty.call(TagLoader.prototype, name);
}

function loadTagFromProps(tag, tagProps, dependencyChain) {
  ok(typeof tagProps === "object", 'Invalid "tagProps"');
  ok(dependencyChain, '"dependencyChain" is required');

  var tagLoader = new TagLoader(tag, dependencyChain);

  try {
    tagLoader.load(tagProps);
  } catch (err) {
    throw createError(
      "Unable to load tag (" + dependencyChain + "): " + err,
      err
    );
  }

  return tag;
}

module.exports = loadTagFromProps;

loadTagFromProps.isSupportedProperty = isSupportedProperty;
