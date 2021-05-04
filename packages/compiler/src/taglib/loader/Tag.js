"use strict";
var ok = require("assert").ok;
var path = require("path");
var hasOwnProperty = Object.prototype.hasOwnProperty;

class Tag {
  constructor(filePath) {
    this.filePath = filePath;
    if (filePath) {
      this.dir = path.dirname(filePath);
    }

    this.migrators = [];
    this.attributes = {};
    this.transformers = [];
    this.patternAttributes = [];
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

  hasNestedTags() {
    return this.nestedTags != null;
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
