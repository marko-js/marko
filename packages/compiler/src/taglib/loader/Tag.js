"use strict";
var forEachEntry = require("raptor-util/forEachEntry");
var ok = require("assert").ok;
var path = require("path");
var hasOwnProperty = Object.prototype.hasOwnProperty;

class Tag {
  constructor(filePath) {
    this.filePath = filePath;
    if (filePath) {
      this.dir = path.dirname(filePath);
    }

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

  forEachTransformer(callback, thisObj) {
    forEachEntry(this.transformers, function(key, transformer) {
      callback.call(thisObj, transformer);
    });
  }
  hasTransformers() {
    /*jshint unused:false */
    for (var k in this.transformers) {
      if (hasOwnProperty.call(this.transformers, k)) {
        return true;
      }
    }
    return false;
  }

  addAttribute(attr) {
    attr.filePath = this.filePath;

    if (attr.pattern) {
      this.patternAttributes.push(attr);
    } else {
      if (attr.name === "*") {
        attr.dynamicAttribute = true;

        if (attr.targetProperty === undefined || attr.targetProperty === "") {
          attr.targetProperty = null;
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
      if (hasOwnProperty.call(this.attributes, attrName)) {
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
    return hasOwnProperty.call(this.attributes, attrName);
  }

  addTransformer(transformer) {
    var key = transformer.path;
    transformer.taglibId = this.taglibId;
    this.transformers[key] = transformer;
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
    this.migratorPaths.forEach(callback, thisObj);
  }

  toJSON() {
    return this;
  }

  setTaglib(taglib) {
    this.taglibId = taglib ? taglib.id : null;
    this.taglibPath = taglib ? taglib.path : null;
  }
}

module.exports = Tag;
