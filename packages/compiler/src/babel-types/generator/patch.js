import "../types/patch";

import * as t from "@babel/types";
import SELF_CLOSING from "self-closing-tags";
import Printer from "@babel/generator/lib/printer";

const UNENCLOSED_WHITESPACE_TYPES = [
  "LogicalExpression",
  "AssignmentExpression",
  "ConditionalExpression",
  "BinaryExpression",
  "NewExpression",
  "Function",
  "AssignmentExpression"
];

Object.assign(Printer.prototype, {
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
      const parentBody = parent.body;
      const prev = parentBody[parentBody.indexOf(node) - 1];

      if (prev && (t.isMarkoText(prev) || t.isMarkoPlaceholder(prev))) {
        this.removeTrailingNewline();
      }
    }

    this.token(node.escape ? "${" : "$!{");
    this.print(node.value, node);
    this.token("}");
  },
  MarkoScriptlet(node, parent) {
    this.removeTrailingNewline();

    if (!(t.isProgram(parent) && parent.body.indexOf(node) === 0)) {
      this.token("\n");
    }

    this.token(`${node.static ? "static" : "$"} `);

    if (node.body.length === 1) {
      // TODO should determine if node has unenclosed newlines.
      this.print(node.body[0], node);
    } else {
      this.token("{");
      this.newline();
      this.indent();
      this.printSequence(node.body, node);
      this.dedent();
      this.token("}");
    }
  },
  MarkoClass(node) {
    this.token("class");
    this.token(" ");
    this.print(node.body, node);
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
        this.printList(node.arguments, node);
        this.token(")");
      }
    }

    if (node.default || !t.isBooleanLiteral(value, { value: true })) {
      if (
        t.isFunctionExpression(value) &&
        !(value.id || value.async || value.generator)
      ) {
        this.token("(");
        this.printList(value.params, value);
        this.token(") ");
        this.print(value.body, value);
      } else {
        this.token(node.bound ? ":=" : "=");
        printWithParansIfNeeded.call(this, value, node);
      }
    }
  },
  MarkoSpreadAttribute(node) {
    this.token("...");
    printWithParansIfNeeded.call(this, node.value, node);
  },
  MarkoText(node, parent) {
    const parentBody = parent.body;
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
    this.printSequence(node.body, node, { indent: true });
  },
  MarkoTag(node) {
    const isDynamicTag = !t.isStringLiteral(node.name);
    const tagName = !isDynamicTag && node.name.value;
    const rawValue = node.rawValue;

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
        this.print(node.name, node);
        this.token("}");
      } else {
        this.token(tagName);
      }

      if (node.var) {
        this.token("/");
        this.print(node.var, node);
      }

      if (node.arguments && node.arguments.length) {
        this.token("(");
        this.printList(node.arguments, node);
        this.token(")");
      }

      if (node.body.params.length) {
        this.token("|");
        this.printList(node.body.params, node);
        this.token("|");
      }

      if (node.attributes.length) {
        if (
          !(node.attributes && node.attributes[0] && node.attributes[0].default)
        ) {
          this.token(" ");
        }

        this.printJoin(node.attributes, node, { separator: spaceSeparator });
      }
    }

    if (SELF_CLOSING.voidElements.includes(tagName)) {
      this.token(">");
    } else if (
      !node.body.body.length ||
      SELF_CLOSING.svgElements.includes(tagName)
    ) {
      this.token("/>");
    } else {
      this.token(">");
      this.newline();
      this.print(node.body, node);
      this.token("</");
      if (!isDynamicTag) {
        this.token(tagName);
      }
      this.token(">");
    }
  }
});

function spaceSeparator() {
  this.token(" ");
}

function printWithParansIfNeeded(value, parent) {
  const needsParans = hasUnenclosedWhitespace(value);

  if (needsParans) {
    this.token("(");
  }

  this.print(value, parent);

  if (needsParans) {
    this.token(")");
  }
}

function hasUnenclosedWhitespace(node) {
  return UNENCLOSED_WHITESPACE_TYPES.includes(node.type);
}
