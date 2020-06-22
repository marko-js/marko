"use strict";

var Node = require("../../Node");

class StartTag extends Node {
  constructor(def) {
    super("StartTag");

    this.tagName = def.tagName;
    this.attributes = def.attributes;
    this.properties = def.properties;
    this.argument = def.argument;
    this.selfClosed = def.selfClosed;
    this.userKey = def.userKey;
    this.includeDataMarko = def.includeDataMarko;
  }

  generateCode(codegen) {
    var builder = codegen.builder;

    var tagName = this.tagName;
    var selfClosed = this.selfClosed;
    var context = codegen.context;

    var nodes = [builder.htmlLiteral("<"), builder.html(tagName)];

    var attributes = this.attributes;

    if (this.includeDataMarko) {
      var dataMarkoArgs = [
        builder.identifier("out"),
        builder.identifier("__component")
      ];

      var properties = this.properties;
      if (properties) {
        var propKeys = properties && Object.keys(properties);

        if (propKeys.length) {
          dataMarkoArgs.push(
            builder.objectExpression(
              propKeys.map(propName => {
                return builder.property(
                  builder.literal(propName),
                  properties[propName]
                );
              })
            )
          );
        }
      }

      if (this.userKey) {
        if (dataMarkoArgs.length === 2) {
          dataMarkoArgs.push(builder.literal(0));
        }

        dataMarkoArgs.push(this.userKey);
      }

      if (dataMarkoArgs.length > 2) {
        nodes.push(
          builder.html(
            builder.functionCall(context.helper("dataMarko"), dataMarkoArgs)
          )
        );
      }
    }

    if (attributes) {
      var hasSpread = attributes.find(attr => attr.spread);
      if (!hasSpread) {
        for (let i = 0; i < attributes.length; i++) {
          let attr = attributes[i];
          nodes.push(codegen.generateCode(attr));
        }
      } else {
        let explicitAttrs = null;
        let attrs = [];

        for (let i = 0; i < attributes.length; i++) {
          let attr = attributes[i];
          if (attr.spread) {
            if (explicitAttrs) {
              attrs.push(builder.objectExpression(explicitAttrs));
            }
            attrs.push(attr.value);
            explicitAttrs = null;
          } else {
            explicitAttrs = explicitAttrs || {};
            explicitAttrs[attr.name] = attr.value;
          }
        }

        if (explicitAttrs) {
          attrs.push(builder.objectExpression(explicitAttrs));
        }

        nodes.push(
          builder.html(
            builder.functionCall(
              context.helper(attrs.length === 1 ? "attrs" : "mergeAttrs"),
              attrs
            )
          )
        );
      }
    }

    if (selfClosed) {
      nodes.push(builder.htmlLiteral("/>"));
    } else {
      nodes.push(builder.htmlLiteral(">"));
    }

    return nodes;
  }
}

module.exports = StartTag;
