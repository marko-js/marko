"use strict";

var ok = require("assert").ok;
var taglibTypes = require("../loader/types");
var extend = require("raptor-util/extend");
var hasOwnProperty = Object.prototype.hasOwnProperty;

function TAG_COMPARATOR(a, b) {
  return a.name.localeCompare(b.name);
}

function merge(target, source) {
  const descs = Object.getOwnPropertyDescriptors(source);
  for (const key in descs) {
    const desc = descs[key];
    if (desc.writable) {
      const sourceVal = desc.value;
      const targetVal = target[key];

      if (
        sourceVal &&
        typeof sourceVal === "object" &&
        targetVal &&
        typeof targetVal === "object"
      ) {
        target[key] = Array.isArray(targetVal)
          ? targetVal.concat(sourceVal)
          : Array.isArray(sourceVal)
          ? [targetVal].concat(sourceVal)
          : merge(merge(new targetVal.constructor(), targetVal), sourceVal);
        continue;
      }
    }

    Object.defineProperty(target, key, desc);
  }

  return target;
}

/**
 * A taglib lookup merges in multiple taglibs so there is a single and fast lookup
 * for custom tags and custom attributes.
 */
class TaglibLookup {
  constructor() {
    this.merged = {
      attributeGroups: {}
    };
    this.taglibsById = {};

    this._sortedTags = undefined;
  }

  hasTaglib(taglib) {
    return hasOwnProperty.call(this.taglibsById, taglib.id);
  }

  _mergeNestedTags(taglib) {
    var Tag = taglibTypes.Tag;
    // Loop over all of the nested tags and register a new custom tag
    // with the fully qualified name

    var merged = this.merged;

    function handleNestedTags(tag, parentTagName) {
      for (const key in tag.nestedTags) {
        const nestedTag = tag.nestedTags[key];

        var fullyQualifiedName = parentTagName + ":" + nestedTag.name;
        // Create a clone of the nested tag since we need to add some new
        // properties
        var clonedNestedTag = new Tag();
        extend(clonedNestedTag, nestedTag);
        // Record the fully qualified name of the parent tag that this
        // custom tag is associated with.
        clonedNestedTag.parentTagName = parentTagName;
        clonedNestedTag.name = fullyQualifiedName;
        merged.tags[fullyQualifiedName] = clonedNestedTag;
        handleNestedTags(clonedNestedTag, fullyQualifiedName);
      }
    }

    for (const key in taglib.tags) {
      const tag = taglib.tags[key];
      handleNestedTags(tag, tag.name);
    }
  }

  addTaglib(taglib) {
    ok(taglib, '"taglib" is required');
    ok(taglib.id, '"taglib.id" expected');

    if (hasOwnProperty.call(this.taglibsById, taglib.id)) {
      return;
    }

    // console.log("TAGLIB:", taglib);

    this._sortedTags = undefined;

    this.taglibsById[taglib.id] = taglib;

    merge(this.merged, {
      tags: taglib.tags,
      attributes: taglib.attributes,
      patternAttributes: taglib.patternAttributes,
      attributeGroups: taglib.attributeGroups || {}
    });

    this._mergeNestedTags(taglib);
  }

  getTagsSorted() {
    var sortedTags = this._sortedTags;

    if (sortedTags === undefined) {
      sortedTags = this._sortedTags = [];
      var tags = this.merged.tags;
      for (var tagName in tags) {
        sortedTags.push(tags[tagName]);
      }
      sortedTags.sort(TAG_COMPARATOR);
    }

    return sortedTags;
  }

  forEachAttribute(tagName, callback) {
    var tags = this.merged.tags;
    if (!tags) {
      return;
    }

    var globalAttributes = this.merged.attributes;
    var taglibAttributeGroups = this.merged.attributeGroups;

    function findAttributesForTagName(tagName) {
      var tag = tags[tagName];
      if (!tag) {
        return;
      }

      function handleAttr(attrDef) {
        if (attrDef.ref) {
          attrDef = globalAttributes[attrDef.ref];
        }
        callback(attrDef, tag);
      }

      var attributes = tag.attributes;
      if (!attributes) {
        return;
      }

      for (var attrName in attributes) {
        if (hasOwnProperty.call(attributes, attrName)) {
          handleAttr(attributes[attrName], tag);
        }
      }

      if (tag.attributeGroups) {
        for (let i = 0; i < tag.attributeGroups.length; i++) {
          let attributeGroupName = tag.attributeGroups[i];
          let attributeGroup = taglibAttributeGroups[attributeGroupName];
          if (attributeGroup) {
            for (let attrName in attributeGroup) {
              handleAttr(attributeGroup[attrName]);
            }
          }
        }
      }

      if (tag.patternAttributes) {
        tag.patternAttributes.forEach(handleAttr);
      }
    }

    findAttributesForTagName(tagName); // Look for an exact match at the tag level
    findAttributesForTagName("*"); // Including attributes that apply to all tags
  }

  getTag(element) {
    var tags = this.merged.tags;
    if (!tags) {
      return;
    }

    return tags[element.tagName || element];
  }

  getAttribute(element, attr) {
    if (typeof element === "string") {
      element = {
        tagName: element
      };
    }

    if (typeof attr === "string") {
      attr = {
        name: attr
      };
    }

    var tags = this.merged.tags;
    if (!tags) {
      return;
    }

    var taglibAttributeGroups = this.merged.attributeGroups;

    var tagName = element.tagName;
    var attrName = attr.name;

    function findAttributeForTag(tag, attributes, attrName) {
      // try by exact match first
      var attribute = attributes[attrName];
      if (attribute === undefined) {
        if (tag.attributeGroups) {
          for (let i = 0; i < tag.attributeGroups.length; i++) {
            let attributeGroupName = tag.attributeGroups[i];
            let attributeGroup = taglibAttributeGroups[attributeGroupName];
            if (attributeGroup) {
              attribute = attributeGroup[attrName];
              if (attribute !== undefined) {
                break;
              }
            }
          }
        }
      }

      if (attribute === undefined && attrName !== "*") {
        if (tag.patternAttributes) {
          // try searching by pattern
          for (var i = 0, len = tag.patternAttributes.length; i < len; i++) {
            var patternAttribute = tag.patternAttributes[i];
            if (patternAttribute.pattern.test(attrName)) {
              attribute = patternAttribute;
              break;
            }
          }
        }
      }

      return attribute;
    }

    var globalAttributes = this.merged.attributes;

    function tryAttribute(tagName, attrName) {
      var tag = tags[tagName];
      if (!tag) {
        return undefined;
      }

      return findAttributeForTag(tag, tag.attributes, attrName);
    }

    var attrDef =
      tryAttribute(tagName, attrName) || // Look for an exact match at the tag level
      tryAttribute("*", attrName) || // If not there, see if there is a exact match on the attribute name for attributes that apply to all tags
      tryAttribute(tagName, "*"); // Otherwise, see if there is a splat attribute for the tag

    if (attrDef && attrDef.ref) {
      attrDef = globalAttributes[attrDef.ref];
    }

    return attrDef;
  }

  toString() {
    return "lookup: " + Object.keys(this.taglibsById).join(", ");
  }
}

module.exports = TaglibLookup;
