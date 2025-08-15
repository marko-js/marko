import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  getProgram,
  parseStatements,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { dropReferences, getAllTagReferenceNodes } from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { skip, traverseContains } from "../util/traverse";
import { scopeIdentifier } from "../visitors/program";

const htmlScriptTagAlternateMsg =
  " For a native html `script` tag use the `html-script` core tag instead.";

export default {
  parse(tag) {
    const { node } = tag;
    const { body } = node.body;
    if (body.length) {
      let code = "";
      for (const child of body) {
        if (child.type !== "MarkoText") {
          throw tag.hub.file.hub.buildError(
            child,
            "Unexpected content in `script` tag. Only javascript and typescript is supported." +
              htmlScriptTagAlternateMsg,
            SyntaxError,
          );
        }

        code += child.value;
      }

      const start = body[0]?.start;
      const end = body[body.length - 1]?.end;
      const bodyStatements = parseStatements(tag.hub.file, code, start, end);
      const valueFn = t.arrowFunctionExpression(
        [],
        t.blockStatement(bodyStatements),
        traverseContains(bodyStatements, isAwaitExpression),
      );

      node.attributes.push(t.markoAttribute("value", valueFn));
      node.body.body = [];
    }
  },

  analyze(tag) {
    const { node } = tag;
    assertNoArgs(tag);
    assertNoParams(tag);
    assertNoBodyContent(tag);
    assertNoAttributeTags(tag);

    if (node.var) {
      throw tag.hub.buildError(
        node.var,
        "The `script` tag does not support a tag variable reference." +
          htmlScriptTagAlternateMsg,
      );
    }

    let seenValueAttr = false;
    for (const attr of node.attributes) {
      if (attr.type === "MarkoAttribute" && attr.name === "value") {
        if (seenValueAttr) {
          throw tag.hub.buildError(attr, "Invalid duplicate value attribute.");
        }
        seenValueAttr = true;
        (attr.value.extra ??= {}).isEffect = true;
        (getProgram().node.extra ??= {}).isInteractive = true;
      } else {
        throw tag.hub.buildError(
          attr,
          "The `script` tag does not support html attributes." +
            htmlScriptTagAlternateMsg,
        );
      }
    }

    if (!seenValueAttr) {
      dropReferences(getAllTagReferenceNodes(node));
    }
  },
  translate: {
    exit(tag) {
      const { node } = tag;
      const [valueAttr] = node.attributes;
      if (!valueAttr) {
        tag.remove();
        return;
      }

      const section = getSection(tag);
      const { value } = valueAttr;
      const referencedBindings = value.extra?.referencedBindings;
      if (isOutputDOM()) {
        const { value } = valueAttr;
        const isFunction =
          t.isFunctionExpression(value) || t.isArrowFunctionExpression(value);
        let inlineBody: t.Statement | t.Statement[] | null = null;
        if (isFunction && !(value.async || value.generator)) {
          if (t.isBlockStatement(value.body)) {
            let hasDeclaration = false;
            for (const child of value.body.body) {
              if (t.isDeclaration(child)) {
                hasDeclaration = true;
                break;
              }
            }

            inlineBody = hasDeclaration ? value.body : value.body.body;
          } else {
            inlineBody = t.expressionStatement(value.body);
          }
        }
        addStatement(
          "effect",
          section,
          referencedBindings,
          inlineBody ||
            t.expressionStatement(
              t.callExpression(value, isFunction ? [] : [scopeIdentifier]),
            ),
        );
      } else {
        addHTMLEffectCall(section, referencedBindings);
      }

      tag.remove();
    },
  },
  parseOptions: {
    text: true,
    preserveWhitespace: true,
  },
  attributes: {},
  autocomplete: [
    {
      description: "Use to create a side effects.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#script",
    },
  ],
  types: runtimeInfo.name + "/tags/script.d.marko",
} as Tag;

function isAwaitExpression(node: t.Node) {
  switch (node.type) {
    case "ForOfStatement":
      return node.await;
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "ClassMethod":
    case "ObjectMethod":
    case "ClassPrivateMethod":
      return skip;
    case "AwaitExpression":
      return true;
    default:
      return false;
  }
}
