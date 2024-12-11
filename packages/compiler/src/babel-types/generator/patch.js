import "../types/patch";

import Printer from "@babel/generator/lib/printer";
import * as t from "@babel/types";
import SELF_CLOSING from "self-closing-tags";

Object.assign(Printer.prototype, {
  MarkoParseError(node) {
    this.token(node.source);
  },
  MarkoDocumentType(node) {
    this.token("<!");
    this.token(node.value);
    this.token(">");
  },
  MarkoDeclaration(node) {
    this.token("<?");
    this.token(node.value);
    this.token("?>");
  },
  MarkoCDATA(node) {
    this.token("<![CDATA[");
    this.token(node.value);
    this.token("]]>");
  },
  MarkoComment(node) {
    this.token("<!--");
    this.token(node.value);
    this.token("-->");
  },
  MarkoPlaceholder(node, parent) {
    if (parent) {
      const parentBody = getBody(parent);
      const prev = parentBody[parentBody.indexOf(node) - 1];

      if (prev && (t.isMarkoText(prev) || t.isMarkoPlaceholder(prev))) {
        this.removeTrailingNewline();
      }
    }

    this.token(node.escape ? "${" : "$!{");
    this.print(node.value);
    this.token("}");
  },
  MarkoScriptlet(node, parent) {
    this.removeTrailingNewline();

    if (!(t.isProgram(parent) && getBody(parent)[0] === node)) {
      this.token("\n");
    }

    this.token(`${node.static ? (node.target ?? "static") : "$"} `);

    if (
      node.body.length === 1 &&
      !statementCouldHaveUnenclosedNewline(node.body[0])
    ) {
      // TODO should determine if node has unenclosed newlines.
      this.print(node.body[0]);
    } else {
      this.token("{");
      this.newline();
      this.indent();
      this.printSequence(node.body);
      this.dedent();
      this.token("}");
    }
  },
  MarkoClass(node) {
    this.token("class");
    this.token(" ");
    this.print(node.body);
  },
  MarkoAttribute(node) {
    const value = node.value;

    if (!node.default) {
      this.token(node.name);

      if (node.modifier) {
        this.token(":");
        this.token(node.modifier);
      }

      if (node.arguments && node.arguments.length) {
        this.token("(");
        this.printList(node.arguments);
        this.token(")");
      }
    }

    if (node.default || !t.isBooleanLiteral(value, { value: true })) {
      if (
        t.isFunctionExpression(value) &&
        !(value.id || value.async || value.generator)
      ) {
        this.token("(");
        this.printList(value.params);
        this.token(") ");
        this.print(value.body);
      } else {
        this.token(node.bound ? ":=" : "=");
        printWithParansIfNeeded.call(this, value);
      }
    }
  },
  MarkoSpreadAttribute(node) {
    this.token("...");
    printWithParansIfNeeded.call(this, node.value);
  },
  MarkoText(node, parent) {
    const parentBody = getBody(parent);
    const prev = parentBody[parentBody.indexOf(node) - 1];
    const concatToPrev = prev && t.isMarkoPlaceholder(prev);
    let { value } = node;

    if (concatToPrev) {
      this.removeTrailingNewline();
    }

    const isMultiLine = /[\r\n]/g.test(value);
    const isRootLevel = !concatToPrev && t.isProgram(parent);

    if (isRootLevel) {
      if (isMultiLine) {
        this.token("---\n");
      } else {
        this.token("-- ");
      }
    }

    this.word(value);

    if (isMultiLine && isRootLevel) {
      this.token("\n---");
    }
  },
  MarkoTagBody(node) {
    this.printSequence(node.body, { indent: true });
  },
  MarkoTag(node) {
    const isDynamicTag = !t.isStringLiteral(node.name);
    const tagName = !isDynamicTag && node.name.value;
    const rawValue = node.rawValue;
    let bodyOverride;

    if (
      tagName === "style" &&
      /^style(?:\.[^\s]+)?\s*\{[\s\S]*}$/.test(rawValue)
    ) {
      this.token(rawValue);
      return;
    }

    this.token("<");

    if (rawValue) {
      this.token(rawValue);
    } else {
      if (isDynamicTag) {
        this.token("${");
        this.print(node.name);
        this.token("}");
      } else {
        this.token(tagName);
      }

      if (node.typeArguments) {
        this.token("<");
        this.printList(node.typeArguments.params);
        this.token(">");
      }

      if (node.var) {
        this.token("/");
        this.print(node.var);

        if (node.var.typeAnnotation) {
          this.print(node.var.typeAnnotation);
        }
      }

      if (node.arguments && node.arguments.length) {
        this.token("(");
        this.printList(node.arguments);
        this.token(")");
      }

      if (node.body.params.length) {
        if (node.body.typeParameters) {
          if (!node.typeArguments) {
            this.token(" ");
          }
          this.token("<");
          this.printList(node.body.typeParameters.params);
          this.token(">");
        }
        this.token("|");
        this.printList(node.body.params);
        this.token("|");
      }

      let { attributes } = node;
      if (attributes.length) {
        if (tagName === "script") {
          for (let i = attributes.length; i--; ) {
            if (attributes[i].value.fromBody) {
              bodyOverride = attributes[i].value.body.body;
              attributes = toSpliced(attributes, i);
              break;
            }
          }
        }

        if (!(attributes && attributes[0] && attributes[0].default)) {
          this.token(" ");
        }

        this.printJoin(attributes, { separator: spaceSeparator });
      }
    }

    if (SELF_CLOSING.voidElements.includes(tagName)) {
      this.token(">");
    } else if (
      !(bodyOverride || node.body.body.length || node.attributeTags.length) ||
      SELF_CLOSING.svgElements.includes(tagName)
    ) {
      this.token("/>");
    } else {
      this.token(">");
      this.newline();
      this.printSequence(bodyOverride || zipAttributeTagsAndBody(node), {
        indent: true,
      });
      this.token("</");
      if (!isDynamicTag) {
        this.token(tagName);
      }
      this.token(">");
    }
  },
});

function spaceSeparator() {
  this.token(" ");
}

function printWithParansIfNeeded(value) {
  const needsParans = expressionCouldHaveUnenclosedWhitespace(value);

  if (needsParans) {
    this.token("(");
  }

  this.print(value);

  if (needsParans) {
    this.token(")");
  }
}

function expressionCouldHaveUnenclosedWhitespace(node) {
  switch (node.type) {
    case "AssignmentExpression":
    case "BinaryExpression":
    case "ConditionalExpression":
    case "Function":
    case "LogicalExpression":
    case "NewExpression":
      return true;
    default:
      return false;
  }
}

function statementCouldHaveUnenclosedNewline(node) {
  switch (node.type) {
    case "VariableDeclaration":
      return node.declarations.length > 1;
    default:
      return false;
  }
}

function zipAttributeTagsAndBody(tag) {
  const {
    attributeTags,
    body: { body },
  } = tag;
  const bodyLen = body.length;
  const attributeTagsLen = attributeTags.length;
  if (!attributeTagsLen) return body;
  if (!bodyLen) return attributeTags;

  const result = [];
  let i = 0;
  let j = 0;

  while (i < bodyLen && j < attributeTagsLen) {
    const bodyNode = body[i];
    const attributeTag = attributeTags[j];

    if (bodyNode.loc != null && attributeTag.loc != null) {
      if (compareStartLoc(bodyNode, attributeTag) < 0) {
        result.push(bodyNode);
        i++;
      } else {
        result.push(attributeTag);
        j++;
      }
    } else if (j < attributeTagsLen) {
      result.push(attributeTag);
      j++;
    } else {
      result.push(bodyNode);
      i++;
    }
  }

  while (j < attributeTagsLen) {
    result.push(attributeTags[j++]);
  }

  while (i < bodyLen) {
    result.push(body[i++]);
  }

  return result;
}

function getBody(parent) {
  switch (parent.type) {
    case "MarkoTag":
      return parent.body.body;
    default:
      return parent.body;
  }
}

function compareStartLoc(a, b) {
  return (
    a.loc.start.line - b.loc.start.line ||
    a.loc.start.column - b.loc.start.column
  );
}

function toSpliced(arr, index) {
  const len = arr.length;
  const result = new Array(len - 1);
  let i = 0;

  for (; i < index; i++) {
    result[i] = arr[i];
  }

  for (i++; i < len; i++) {
    result[i - 1] = arr[i];
  }

  return result;
}
