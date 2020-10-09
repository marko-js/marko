"use strict";

const Node = require("../../Node");
const vdomUtil = require("../../../util/vdom");

const FLAG_SIMPLE_ATTRS = 1;
// const FLAG_CUSTOM_ELEMENT = 2;
const FLAG_SPREAD_ATTRS = 4;

let CREATE_ARGS_COUNT = 0;
const INDEX_TAG_NAME = CREATE_ARGS_COUNT++;
const INDEX_ATTRS = CREATE_ARGS_COUNT++;
const INDEX_KEY = CREATE_ARGS_COUNT++;
const INDEX_COMPONENT = CREATE_ARGS_COUNT++;
const INDEX_CHILD_COUNT = CREATE_ARGS_COUNT++;
const INDEX_FLAGS = CREATE_ARGS_COUNT++;
const INDEX_PROPS = CREATE_ARGS_COUNT++;

function finalizeCreateArgs(createArgs, builder) {
  var length = createArgs.length;
  var lastArg;

  for (var i = length - 1; i >= 0; i--) {
    var arg = createArgs[i];
    if (arg) {
      lastArg = arg;
    } else {
      if (lastArg != null) {
        if (i === INDEX_FLAGS) {
          // Use a literal 0 for the flags
          createArgs[i] = builder.literal(0);
        } else {
          createArgs[i] = builder.literalNull();
        }
      } else {
        length--;
      }
    }
  }

  createArgs.length = length;
  return createArgs;
}

const SIMPLE_ATTRS = {
  class: true,
  style: true,
  id: true
};

function isStaticProperties(properties) {
  for (var k in properties) {
    var v = properties[k];
    if (v.type !== "Literal") {
      return false;
    }

    if (typeof v.value === "object") {
      return false;
    }
  }

  return true;
}

class HtmlElementVDOM extends Node {
  constructor(def) {
    super("HtmlElementVDOM");
    this.tagName = def.tagName;
    this.isStatic = def.isStatic;
    this.isAttrsStatic = def.isAttrsStatic;
    this.isHtmlOnly = def.isHtmlOnly;
    this.attributes = def.attributes;
    this.properties = def.properties;
    this.body = def.body;
    this.key = def.key;
    this.runtimeFlags = def.runtimeFlags;
    this.isAutoKeyed = def.isAutoKeyed;

    this.hasAttributes = false;
    this.hasSimpleAttrs = false; // This will be set to true if the HTML element
    // only attributes in the following set:
    // ['id', 'style', 'class']

    this.isChild = false;
    this.createElementId = undefined;
    this.attributesArg = undefined;
    this.propertiesArg = undefined;
  }

  generateCode(codegen) {
    let context = codegen.context;
    let builder = codegen.builder;

    vdomUtil.registerOptimizer(context);

    const tagName = this.tagName;

    if (tagName.type === "Literal" && typeof tagName.value === "string") {
      const tagDef = context.getTagDef(tagName.value);
      this.isLiteralTag = true;

      if (tagDef && tagDef.html && !tagDef.htmlType) {
        tagName.value = tagName.value.toLowerCase();
      }
    }

    let attributes = this.attributes;
    let properties = this.properties;

    let attributesArg = null;

    var hasNamedAttributes = false;
    var hasSpreadAttributes = false;

    var hasSimpleAttrs = true;

    if (properties && properties.pa) {
      // Preserving attributes requires extra logic that we cannot
      // shortcircuit
      hasSimpleAttrs = false;
    }

    if (attributes != null && attributes.length !== 0) {
      let explicitAttrs = null;
      let attrs = [];
      let addAttr = function(name, value) {
        hasNamedAttributes = true;

        if (!SIMPLE_ATTRS[name]) {
          hasSimpleAttrs = false;
        }

        if (!explicitAttrs) {
          explicitAttrs = {};
        }

        if (value.type === "Literal") {
          let literalValue = value.value;
          if (literalValue == null || literalValue === false) {
            return;
          } else if (typeof literalValue === "number") {
            value.value = literalValue.toString();
          }
        } else if (value.type === "AttributePlaceholder") {
          value = codegen.builder.functionCall(context.helper("str"), [value]);
        }

        explicitAttrs[name] = value;
      };

      attributes.forEach((attr, i) => {
        if (attr.spread) {
          let isFirstOfMany = i === 0 && attributes.length > 1;
          if (explicitAttrs || isFirstOfMany) {
            attrs.push(builder.literal(explicitAttrs || {}));
          }
          attrs.push(
            codegen.builder.functionCall(context.helper("attrs"), [attr.value])
          );
          explicitAttrs = null;
          hasSpreadAttributes = true;
        } else {
          let value = attr.value;

          if (value == null) {
            value = builder.literal(true);
          }

          addAttr(attr.name, value);
        }
      });

      if (explicitAttrs) {
        attrs.push(builder.literal(explicitAttrs));
      }

      attributesArg =
        attrs.length > 1
          ? builder.functionCall(context.helper("assign"), attrs)
          : attrs[0];
    }

    if (
      !this.isAttrsStatic &&
      hasNamedAttributes &&
      hasSimpleAttrs &&
      !hasSpreadAttributes
    ) {
      this.hasSimpleAttrs = true;
    }

    this.hasSpreadAttributes = hasSpreadAttributes;

    this.hasAttributes = hasNamedAttributes;

    this.attributesArg = attributesArg;

    this.properties = builder.literal(this.properties || {});

    return this;
  }

  walk(walker) {
    this.tagName = walker.walk(this.tagName);
    this.attributes = walker.walk(this.attributes);
    this.body = walker.walk(this.body);
  }

  writeCode(writer) {
    let builder = writer.builder;

    let body = this.body;
    let attributesArg = this.attributesArg;

    let tagName = this.tagName;

    let key = this.key;

    let childCount = body && body.length;

    let createArgs = new Array(CREATE_ARGS_COUNT);

    createArgs[INDEX_TAG_NAME] = tagName;

    if (attributesArg) {
      createArgs[INDEX_ATTRS] = attributesArg;
    }

    if (key && (!this.isAutoKeyed || !this.isStatic || this.createElementId)) {
      createArgs[INDEX_KEY] = key;

      if (!this.isStatic) {
        createArgs[INDEX_COMPONENT] = builder.identifier("component");
      }
    }

    if (childCount != null) {
      createArgs[INDEX_CHILD_COUNT] = builder.literal(childCount);
    }

    var flags = 0;

    if (this.hasSimpleAttrs) {
      flags |= FLAG_SIMPLE_ATTRS;
    }

    if (this.hasSpreadAttributes) {
      flags |= FLAG_SPREAD_ATTRS;
    }

    if (this.runtimeFlags) {
      flags |= this.runtimeFlags;
    }

    if (flags) {
      createArgs[INDEX_FLAGS] = builder.literal(flags);
    }

    let properties = this.properties;

    if (
      this.properties &&
      properties.type === "Literal" &&
      Object.keys(properties.value).length === 0
    ) {
      properties = null;
    }
    if (properties) {
      createArgs[INDEX_PROPS] = properties;
    }

    // Remove trailing undefined arguments and convert non-trailing
    // undefined elements to a literal null node
    createArgs = finalizeCreateArgs(createArgs, builder);

    let funcCall;

    if (this.isChild) {
      writer.write(".");

      funcCall = builder.functionCall(builder.identifier("e"), createArgs);
    } else if (this.isStatic && this.createElementId) {
      funcCall = builder.functionCall(this.createElementId, createArgs);
    } else if (this.isHtmlOnly) {
      writer.write("out.");
      funcCall = builder.functionCall(builder.identifier("e"), createArgs);
    } else {
      writer.write("out.");
      funcCall = builder.functionCall(builder.identifier("be"), createArgs);
    }

    writer.write(funcCall);

    if (body && body.length) {
      writer.incIndent();
      for (let i = 0; i < body.length; i++) {
        let child = body[i];
        child.isChild = true;
        writer.write("\n");
        writer.writeLineIndent();
        writer.write(child);
      }
      writer.decIndent();
    }
  }

  setConstId(value) {
    this.properties.value.i = value;
  }

  finalizeProperties(context) {
    if (
      this.properties.type === "Literal" &&
      isStaticProperties(this.properties.value)
    ) {
      if (Object.keys(this.properties.value).length === 0) {
        this.properties = null;
      } else {
        this.properties = context.addStaticVar("props", this.properties);
      }
    }
  }
}

module.exports = HtmlElementVDOM;
