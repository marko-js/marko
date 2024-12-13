import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoAttributeTags,
  assertNoParams,
  parseExpression,
  type Tag,
} from "@marko/compiler/babel-utils";

import { assertNoBodyContent } from "../util/assert";
import { isOutputDOM } from "../util/marko-config";
import { dropReferences, getAllTagReferenceNodes } from "../util/references";
import runtimeInfo from "../util/runtime-info";
import { getSection } from "../util/sections";
import { addHTMLEffectCall, addStatement } from "../util/signals";
import { skip, traverseContains } from "../util/traverse";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";

const htmlScriptTagAlternateMsg =
  " For a native html `script` tag use the `html-script` core tag instead.";

export default {
  parse(tag) {
    const { node } = tag;
    const { body } = node.body;
    if (body.length) {
      const codePrefix = "async ()=>{";
      const codeSuffix = "}";
      let code = codePrefix;
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
      code += codeSuffix;

      const start = body[0]?.start;
      const end = body[body.length - 1]?.end;
      const bodyExpression = parseExpression<t.ArrowFunctionExpression>(
        tag.hub.file,
        code,
        start,
        end,
        codePrefix.length,
      );

      bodyExpression.async = traverseContains(
        bodyExpression.body,
        isAwaitExpression,
      );
      (bodyExpression as any).fromBody = true;
      node.attributes.push(t.markoAttribute("value", bodyExpression));
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
        (currentProgramPath.node.extra ??= {}).isInteractive = true;
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
  html: false,
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
  types: runtimeInfo.name + "/tag-types/script.d.marko",
} as Tag;

function isAwaitExpression(node: t.Node) {
  switch (node.type) {
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
