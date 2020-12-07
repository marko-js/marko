"use strict";
var ok = require("assert").ok;
var extend = require("raptor-util/extend");
var Normalizer = require("./Normalizer");
var Migrator = require("./Migrator");

var COMPILER_ATTRIBUTE_HANDLERS = {
  "preserve-whitespace": function(attr, context) {
    context.setPreserveWhitespace(true);
  },
  "preserve-comments": function(attr, context) {
    context.setPreserveComments(true);
  }
};

function getSimplifiedValue(node) {
  if (node.type === "Literal") return node.value;
  return node;
}

function getParserStateForTag(parser, el, tagDef) {
  var attributes = el.attributes;
  if (attributes) {
    for (var i = 0; i < attributes.length; i++) {
      var attr = attributes[i];
      var attrName = attr.name;
      if (attrName === "marko-body") {
        var parseMode;

        if (attr.literalValue) {
          parseMode = attr.literalValue;
        }

        if (
          parseMode === "static-text" ||
          parseMode === "parsed-text" ||
          parseMode === "html"
        ) {
          return parseMode;
        } else {
          parser.context.addError({
            message:
              'Value for "marko-body" should be one of the following: "static-text", "parsed-text", "html"',
            code: "ERR_INVALID_ATTR"
          });
          return;
        }
      } else if (attrName === "template-helpers" || attrName === "marko-init") {
        // deprecated
        return "static-text";
      }
    }
  }

  if (tagDef) {
    var body = tagDef.body;
    if (body) {
      return body; // 'parsed-text' | 'static-text' | 'html'
    }
  }

  return null; // Default parse state
}

class Parser {
  constructor(parserImpl, options) {
    ok(parserImpl, '"parserImpl" is required');

    this.parserImpl = parserImpl;

    this.prevTextNode = null;
    this.stack = null;

    this.defaultOptions = options;

    // The context gets provided when parse is called
    // but we store it as part of the object so that the handler
    // methods have access
    this.context = null;
  }

  _reset() {
    this.prevTextNode = null;
    this.stack = [];
  }

  parse(src, context, options) {
    ok(typeof src === "string", '"src" should be a string');
    ok(context, '"context" is required');

    this._reset();

    var builder = context.builder;
    var rootNode = builder.templateRoot();
    var mergedOptions = Object.assign({}, this.defaultOptions, options);
    var raw = mergedOptions.raw === true;
    var migrate = mergedOptions.migrate === true;

    context.root = rootNode;
    this.context = context;

    this.stack.push({
      node: rootNode
    });

    this.parserImpl.parse(src, this, context.filename, mergedOptions);

    if (migrate) {
      var migrator = new Migrator();
      rootNode = migrator.migrate(rootNode, context);
    }

    if (!raw) {
      var normalizer = new Normalizer();
      rootNode = normalizer.normalize(rootNode, context);
    }

    return rootNode;
  }

  handleCharacters(text, parseMode) {
    var builder = this.context.builder;

    if (parseMode === "cdata") {
      this.context.deprecate("CDATA is deprecated");
    }

    var escape = parseMode !== "html";
    // NOTE: If parseMode is 'static-text' or 'parsed-text' then that means that special
    //       HTML characters may not have been escaped on the way in so we need to escape
    //       them on the way out

    if (
      this.prevTextNode &&
      this.prevTextNode.isLiteral() &&
      this.prevTextNode.escape === escape
    ) {
      this.prevTextNode.argument.value += text;
    } else {
      this.prevTextNode = builder.text(builder.literal(text), escape);
      this.parentNode.appendChild(this.prevTextNode);
    }
  }

  handleStartElement(el, tagString) {
    var context = this.context;
    var builder = context.builder;

    var tagName = el.tagName;
    var attributes = el.attributes;
    var argument = el.argument; // e.g. For <for(color in colors)>, argument will be "color in colors"
    var params = el.params;

    if (argument) {
      argument = argument.value;
    }

    if (params) {
      params = builder.parseJavaScriptParams(params.value);
    }

    if (tagName === "marko-compiler-options") {
      context.deprecate("<marko-compiler-options> is deprecated.");

      this.parentNode.setTrimStartEnd(true);

      attributes.forEach(function(attr) {
        let attrName = attr.name;
        let handler = COMPILER_ATTRIBUTE_HANDLERS[attrName];

        if (!handler) {
          context.addError({
            code: "ERR_INVALID_COMPILER_OPTION",
            message:
              'Invalid Marko compiler option of "' +
              attrName +
              '". Allowed: ' +
              Object.keys(COMPILER_ATTRIBUTE_HANDLERS).join(", "),
            pos: el.pos,
            node: el
          });
          return;
        }

        handler(attr, context);
      });
    }

    this.prevTextNode = null;

    var tagDef = el.tagName ? this.context.getTagDef(el.tagName) : null;

    var shouldParseAttributes = !tagDef || tagDef.parseAttributes !== false;

    var parsedAttributes = shouldParseAttributes
      ? this.parseAttributes(attributes)
      : [];
    var attributeParseErrors = parsedAttributes.errors;

    var elDef = {
      tagName: tagName,
      argument: argument,
      params: params,
      tagString,
      openTagOnly: el.openTagOnly === true,
      selfClosed: el.selfClosed === true,
      pos: el.pos,
      attributes: parsedAttributes
    };

    var node = builder.htmlElement(elDef);
    node.pos = elDef.pos;
    node.tagDef = tagDef;

    if (attributeParseErrors && attributeParseErrors.length) {
      attributeParseErrors.forEach(e => {
        context.addError(node, e);
      });
    }

    if (el.shorthandId) {
      let parsed = builder.parseExpression(el.shorthandId.value);
      node.rawShorthandId = getSimplifiedValue(parsed);
    }

    if (el.shorthandClassNames) {
      node.rawShorthandClassNames = el.shorthandClassNames.map(className => {
        let parsed = builder.parseExpression(className.value);
        return getSimplifiedValue(parsed);
      });
    }

    if (el.tagNameExpression) {
      node.rawTagNameExpression = el.tagNameExpression;
    }

    this.parentNode.appendChild(node);

    this.stack.push({
      node: node,
      tag: null
    });
  }

  parseAttributes(attributes) {
    var context = this.context;
    var builder = context.builder;
    var attributeParseErrors = [];
    // <div class="foo"> -> "div class=foo"
    var parsedAttributes = [];

    attributes.forEach(attr => {
      var attrName = attr.name;
      var attrRawValue = attr.value;
      var attrSpread;
      var attrValue;

      if (attr.hasOwnProperty("literalValue")) {
        attrValue = builder.literal(attr.literalValue);
      } else if (/^\.\.\./.test(attrName)) {
        attrRawValue = attrName;
        attrValue = attrRawValue.slice(3);
        attrName = undefined;
        attrSpread = true;
        if (attr.argument) {
          attrValue += "(" + attr.argument.value + ")";
        }
      } else if (attr.value == null) {
        attrValue = undefined;
      } else {
        attrValue = attrRawValue;
      }

      if (typeof attrValue === "string") {
        let parsedExpression;
        let valid = true;
        try {
          parsedExpression = builder.parseExpression(attrValue);
        } catch (e) {
          valid = false;
          attributeParseErrors.push(
            'Invalid JavaScript expression for attribute "' +
              attr.name +
              '": ' +
              e
          );
        }

        if (valid) {
          attrValue = parsedExpression;
        } else {
          attrValue = null;
        }
      }

      var attrDef = {
        name: attrName,
        value: attrValue,
        rawValue: attrRawValue
      };

      if (attr.argument) {
        // TODO Do something with the argument pos
        attrDef.argument = attr.argument.value;
      }

      if (attrSpread) {
        attrDef.spread = true;
      }

      parsedAttributes.push(attrDef);
    });

    parsedAttributes.errors = attributeParseErrors;

    return parsedAttributes;
  }

  handleEndElement() {
    this.prevTextNode = null;
    this.stack.pop();
  }

  handleComment(comment) {
    this.prevTextNode = null;

    var builder = this.context.builder;
    var commentNode = builder.htmlComment(builder.literal(comment));
    this.parentNode.appendChild(commentNode);
  }

  handleDeclaration(value) {
    this.prevTextNode = null;

    var builder = this.context.builder;

    var declarationNode = builder.declaration(builder.literal(value));
    this.parentNode.appendChild(declarationNode);
  }

  handleDocumentType(value) {
    this.prevTextNode = null;

    var builder = this.context.builder;

    var docTypeNode = builder.documentType(builder.literal(value));
    this.parentNode.appendChild(docTypeNode);
  }

  handleBodyTextPlaceholder(expression, escape) {
    this.prevTextNode = null;
    var builder = this.context.builder;
    var parsedExpression = builder.parseExpression(expression);
    var preserveWhitespace = true;

    var text = builder.text(parsedExpression, escape, preserveWhitespace);
    this.parentNode.appendChild(text);
  }

  handleScriptlet(event) {
    this.prevTextNode = null;
    var builder = this.context.builder;
    var scriptlet = builder.scriptlet(event);
    this.parentNode.appendChild(scriptlet);
  }

  handleError(event) {
    this.context.addError({
      message: event.message,
      code: event.code,
      pos: event.pos,
      endPos: event.endPos
    });
  }

  get parentNode() {
    var last = this.stack[this.stack.length - 1];
    return last.node;
  }

  getTagParseOptions(el) {
    var tagName = el.tagName;
    var tagDef = this.context.getTagDef(tagName);

    var state = getParserStateForTag(this, el, tagDef);
    var parseOptions = tagDef && tagDef.parseOptions;

    if (!state && !parseOptions) {
      return;
    }

    if (parseOptions) {
      if (state) {
        // We need to merge in the state to the returned parse options
        parseOptions = extend({ state: state }, parseOptions);
      }
    } else {
      parseOptions = { state: state };
    }

    return parseOptions;
  }

  isOpenTagOnly(tagName) {
    var tagDef = this.context.getTagDef(tagName);
    return tagDef && tagDef.openTagOnly;
  }
}

module.exports = Parser;
