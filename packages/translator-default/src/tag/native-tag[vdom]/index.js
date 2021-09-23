import { types as t } from "@marko/compiler";
import write from "../../util/vdom-out-write";
import * as FLAGS from "../../util/runtime-flags";
import { getAttrs, evaluateAttr } from "../util";
import {
  getTagDef,
  normalizeTemplateString,
  importDefault
} from "@marko/babel-utils";
import withPreviousLocation from "../../util/with-previous-location";

const SIMPLE_ATTRS = ["id", "class", "style"];
const MAYBE_SVG = {
  a: true,
  script: true,
  style: true,
  title: true
};

export function tagArguments(path, isStatic) {
  const {
    hub: { file },
    node,
    parent
  } = path;
  const {
    name,
    key,
    body: { body },
    handlers
  } = node;
  const tagProperties = (path.node.extra && path.node.extra.properties) || [];
  let runtimeFlags = 0;

  path.get("attributes").forEach(attr => {
    const { confident, computed } = evaluateAttr(attr);

    if (confident) {
      if (computed == null || computed === false) {
        attr.remove();
      } else {
        attr.set("value", t.stringLiteral(computed));
      }
    }
  });

  let attrsObj = getAttrs(path, true, true);

  if (!t.isNullLiteral(attrsObj)) {
    if (
      !t.isObjectExpression(attrsObj) ||
      attrsObj.properties.some(t.isSpreadElement)
    ) {
      runtimeFlags |= FLAGS.SPREAD_ATTRS;
      attrsObj = t.callExpression(
        importDefault(
          file,
          "marko/src/runtime/vdom/helpers/attrs",
          "marko_attrs"
        ),
        [attrsObj]
      );
    }
  }

  const writeArgs = [
    name,
    attrsObj,
    !key && isStatic ? t.nullLiteral() : key,
    isStatic ? t.nullLiteral() : file._componentInstanceIdentifier,
    isStatic
      ? t.numericLiteral(body.length)
      : body.length
      ? t.nullLiteral()
      : t.numericLiteral(0)
  ];

  if (node.preserveAttrs) {
    tagProperties.push(
      t.objectProperty(
        t.identifier("pa"),
        t.arrayExpression(node.preserveAttrs.map(name => t.stringLiteral(name)))
      )
    );
  }

  if (handlers) {
    Object.entries(handlers).forEach(
      ([eventName, { arguments: args, once }]) => {
        const delegateArgs = [t.stringLiteral(eventName), args[0]];

        // TODO: look into only sending this if once is true.
        delegateArgs.push(t.booleanLiteral(once));

        if (args.length > 1) {
          delegateArgs.push(t.arrayExpression(args.slice(1)));
        }

        // TODO: why do we output eventName twice.
        tagProperties.push(
          t.objectProperty(
            t.stringLiteral(`on${eventName}`),
            t.callExpression(
              t.memberExpression(
                file._componentDefIdentifier,
                t.identifier("d")
              ),
              delegateArgs
            )
          )
        );
      }
    );
  }

  if (
    t.isObjectExpression(attrsObj) &&
    attrsObj.properties.every(n => isPropertyName(n, SIMPLE_ATTRS)) &&
    !node.preserveAttrs
  ) {
    runtimeFlags |= FLAGS.HAS_SIMPLE_ATTRS;
  }

  const tagDef = getTagDef(path);

  if (tagDef) {
    const { htmlType, name } = tagDef;
    if (htmlType === "custom-element") {
      runtimeFlags |= FLAGS.IS_CUSTOM_ELEMENT;
    } else if (
      htmlType === "svg" ||
      (MAYBE_SVG[name] &&
        t.isMarkoTag(parent) &&
        parent.tagDef &&
        parent.tagDef.htmlType === "svg")
    ) {
      runtimeFlags |= FLAGS.IS_SVG;
    } else if (name === "textarea") {
      runtimeFlags |= FLAGS.IS_TEXTAREA;
    }
  }

  writeArgs.push(t.numericLiteral(runtimeFlags));

  if (tagProperties.length) {
    writeArgs.push(t.objectExpression(tagProperties));
  }
  return writeArgs;
}

/**
 * Translates the html streaming version of a standard html element.
 */
export default function (path, isNullable) {
  const { node } = path;
  const {
    name,
    key,
    body: { body }
  } = node;

  const isEmpty = !body.length;
  const writeArgs = tagArguments(path, false);
  let writeStartNode = withPreviousLocation(
    write(isEmpty ? "e" : "be", ...writeArgs),
    node.name
  );

  if (isNullable) {
    writeStartNode = t.ifStatement(
      name,
      writeStartNode,
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier("out"), t.identifier("bf")),
          [
            normalizeTemplateString`f_${key}`,
            path.hub.file._componentInstanceIdentifier
          ]
        )
      )
    );
  }

  if (isEmpty) {
    path.replaceWith(writeStartNode);
    return;
  }

  let writeEndNode = write("ee");
  if (isNullable) {
    writeEndNode = t.ifStatement(
      name,
      writeEndNode,
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier("out"), t.identifier("ef")),
          []
        )
      )
    );
  }

  let needsBlock;
  for (const childNode of body) {
    if (t.isVariableDeclaration(childNode)) {
      if (childNode.kind === "const" || childNode.kind === "let") {
        needsBlock = true;
        break;
      }
    }
  }

  path.replaceWithMultiple(
    [writeStartNode]
      .concat(needsBlock ? t.blockStatement(body) : body)
      .concat(writeEndNode)
  );
}

function isPropertyName({ key }, names) {
  if (t.isStringLiteral(key)) {
    return names.includes(key.value);
  } else if (t.isIdentifier(key)) {
    return names.includes(key.name);
  }
}
