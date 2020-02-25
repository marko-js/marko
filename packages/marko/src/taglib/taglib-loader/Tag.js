"use strict";
var forEachEntry = require("raptor-util/forEachEntry");
var ok = require("assert").ok;
var CustomTag;
var path = require("path");
var markoModules = require("../../compiler/modules");
var complain = require("complain");
var coreTagsPath = path.join(__dirname, "../../core-tags");

function createCustomTag(el, tagDef) {
  CustomTag = CustomTag || require("../../compiler/ast/CustomTag");
  return new CustomTag(el, tagDef);
}

function createCustomTagNodeFactory(tagDef) {
  return function nodeFactory(el) {
    return createCustomTag(el, tagDef);
  };
}

class Tag {
  constructor(filePath) {
    this.filePath = filePath;
    if (filePath) {
      this.dir = path.dirname(filePath);
    }

    this.migrators = {};
    this.migratorPaths = [];
    this.attributes = {};
    this.transformers = {};
    this.patternAttributes = [];

    // NOTE: We don't set this properties since
    //       it breaks merging of tags when the same
    //       tag is declared at multiple levels

    // this.taglibId = null;
    // this.taglibPath = null;
    // this.name = undefined;
    // this.renderer = null;
    // this.codeGeneratorModulePath = null;
    // this.nodeFactoryPath = null;
    // this.template = null;
    // this.nestedVariables = null;
    // this.importedVariables = null;
    // this.bodyFunction = null;
    // this.nestedTags = null;
    // this.isRepeated = null;
    // this.isNestedTag = false;
    // this.parentTagName = null;
    // this.openTagOnly = null;
    // this.body = null;
    // this.type = null; // Only applicable for nested tags
    // this._nodeFactory = undefined;
  }

  /**
   * DEPRECATED
   */
  forEachVariable(callback, thisObj) {
    if (!this.nestedVariables) {
      return;
    }

    this.nestedVariables.vars.forEach(callback, thisObj);
  }

  /**
   * DEPRECATED
   */
  forEachImportedVariable(callback, thisObj) {
    if (!this.importedVariables) {
      return;
    }

    forEachEntry(this.importedVariables, function(key, importedVariable) {
      callback.call(thisObj, importedVariable);
    });
  }

  forEachTransformer(callback, thisObj) {
    forEachEntry(this.transformers, function(key, transformer) {
      callback.call(thisObj, transformer);
    });
  }
  hasTransformers() {
    /*jshint unused:false */
    for (var k in this.transformers) {
      if (this.transformers.hasOwnProperty(k)) {
        return true;
      }
    }
    return false;
  }

  checkDeprecatedAttr(attr) {
    attr.filePath = this.filePath;
    if (attr.name === "key" && !this.isCoreTag()) {
      complain("@key property is deprecated", {
        location: this.filePath
      });
    }
    //
    if (attr.setFlag && attr.setFlag !== "hasComponentEvents") {
      complain(`${attr.name} - : set-flag property is deprecated`, {
        location: this.filePath
      });
    }
    if (attr.type === "template") {
      complain(`${attr.name} - attribute template type is deprecated`, {
        location: this.filePath
      });
    }

    if (attr.type === "path") {
      complain(`${attr.name} - attribute path type is deprecated`, {
        location: this.filePath
      });
    }
  }

  addAttribute(attr) {
    attr.filePath = this.filePath;
    this.checkDeprecatedAttr(attr);

    if (attr.pattern) {
      this.patternAttributes.push(attr);
    } else {
      if (attr.name === "*") {
        attr.dynamicAttribute = true;

        if (attr.targetProperty === null || attr.targetProperty === "") {
          attr.targetProperty = null;
        } else if (!attr.targetProperty) {
          !this.isCoreTag() &&
            complain(
              'The default "targetProperty" for "@*" attribute definitions is changing from "*" to "null" (merged in with the rest of the input) in a future Marko release. In order to avoid an issue upgrading, please explicitly define the "targetProperty".',
              {
                location: this.filePath
              }
            );
          attr.targetProperty = "*";
        }
      }

      this.attributes[attr.name] = attr;
    }
  }
  toString() {
    return "[Tag: <" + this.name + "@" + this.taglibId + ">]";
  }
  forEachAttribute(callback, thisObj) {
    for (var attrName in this.attributes) {
      if (this.attributes.hasOwnProperty(attrName)) {
        callback.call(thisObj, this.attributes[attrName]);
      }
    }
  }
  getAttribute(attrName) {
    var attributes = this.attributes;

    // try by exact match first
    var attribute = attributes[attrName] || attributes["*"];

    if (attribute === undefined && this.patternAttributes) {
      // try searching by pattern
      for (var i = 0, len = this.patternAttributes.length; i < len; i++) {
        var patternAttribute = this.patternAttributes[i];
        if (patternAttribute.pattern.test(attrName)) {
          attribute = patternAttribute;
          break;
        }
      }
    }

    return attribute;
  }

  hasAttribute(attrName) {
    return this.attributes.hasOwnProperty(attrName);
  }

  /**
   * DEPRECATED
   */
  addNestedVariable(nestedVariable) {
    complain("addNestedVariable is deprecated. Use tag parameters instead.", {
      location: this.filePath
    });

    if (!this.nestedVariables) {
      this.nestedVariables = {
        __noMerge: true,
        vars: []
      };
    }

    this.nestedVariables.vars.push(nestedVariable);
  }
  /**
   * DEPRECATED
   */
  addImportedVariable(importedVariable) {
    if (!this.importedVariables) {
      this.importedVariables = {};
    }
    var key = importedVariable.targetProperty;
    this.importedVariables[key] = importedVariable;
  }
  addTransformer(transformer) {
    var key = transformer.path;
    transformer.taglibId = this.taglibId;
    this.transformers[key] = transformer;
  }
  /**
   * DEPRECATED
   */
  setBodyFunction(name, params) {
    this.bodyFunction = {
      __noMerge: true,
      name: name,
      params: params
    };
  }
  /**
   * DEPRECATED
   */
  setBodyProperty(propertyName) {
    this.bodyProperty = propertyName;
  }
  addNestedTag(nestedTag) {
    ok(nestedTag.name, '"nestedTag.name" is required');

    if (!this.nestedTags) {
      this.nestedTags = {};
    }

    nestedTag.isNestedTag = true;

    if (!nestedTag.targetProperty) {
      nestedTag.targetProperty = nestedTag.name;
    }

    this.nestedTags[nestedTag.name] = nestedTag;
  }
  forEachNestedTag(callback, thisObj) {
    if (!this.nestedTags) {
      return;
    }

    forEachEntry(this.nestedTags, function(key, nestedTag) {
      callback.call(thisObj, nestedTag);
    });
  }
  hasNestedTags() {
    return this.nestedTags != null;
  }

  forEachMigrator(callback, thisObj) {
    this.migratorPaths
      .map(function(path) {
        return (this.migrators[path] =
          this.migrators[path] || markoModules.require(path));
      }, this)
      .forEach(callback, thisObj);
  }

  getNodeFactory() {
    var nodeFactory = this._nodeFactory;
    if (nodeFactory !== undefined) {
      return nodeFactory;
    }

    let codeGeneratorModulePath = this.codeGeneratorModulePath;

    if (this.codeGeneratorModulePath) {
      var loadedCodeGenerator = markoModules.require(
        this.codeGeneratorModulePath
      );
      nodeFactory = function(elNode) {
        elNode.setType(codeGeneratorModulePath);
        elNode.setCodeGenerator(loadedCodeGenerator);
        return elNode;
      };
    } else if (this.nodeFactoryPath) {
      nodeFactory = markoModules.require(this.nodeFactoryPath);
      if (typeof nodeFactory !== "function") {
        throw new Error(
          'Invalid node factory exported by module at path "' +
            this.nodeFactoryPath +
            '"'
        );
      }
    } else if (this.renderer || this.template || this.isNestedTag) {
      nodeFactory = createCustomTagNodeFactory(this);
    } else {
      return null;
    }

    return (this._nodeFactory = nodeFactory);
  }

  toJSON() {
    return this;
  }

  setTaglib(taglib) {
    this.taglibId = taglib ? taglib.id : null;
    this.taglibPath = taglib ? taglib.path : null;
  }

  isCoreTag() {
    return this.filePath && this.filePath.startsWith(coreTagsPath);
  }
}

module.exports = Tag;
