import { types as t } from "@marko/compiler";
import {
  getTagDef,
  normalizeTemplateString,
} from "@marko/compiler/babel-utils";

import * as FLAGS from "../../util/runtime-flags";
import write from "../../util/vdom-out-write";
import withPreviousLocation from "../../util/with-previous-location";
import translateAttributes from "./attributes";

const SIMPLE_ATTRS = ["id", "class", "style"];

/**
 * Translates the html streaming version of a standard html element.
 */
export default function (path, isNullable) {
  const { node } = path;
  const {
    name,
    key,
    body: { body },
  } = node;

  const isEmpty = !body.length;
  const writeArgs = tagArguments(path, false);
  let writeStartNode = withPreviousLocation(
    write(isEmpty ? "e" : "be", ...writeArgs),
    node.name,
  );

  if (isNullable) {
    writeStartNode = t.ifStatement(name, writeStartNode);

    if (!isEmpty) {
      writeStartNode.alternate = t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier("out"), t.identifier("bf")),
          [
            normalizeTemplateString`f_${key}`,
            path.hub.file._componentInstanceIdentifier,
          ],
        ),
      );
    }
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
          [],
        ),
      ),
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
      .concat(writeEndNode),
  );
}

function isPropertyName({ key }, names) {
  if (t.isStringLiteral(key)) {
    return names.includes(key.value);
  } else if (t.isIdentifier(key)) {
    return names.includes(key.name);
  }
}

function tagArguments(path) {
  const {
    hub: { file },
    node,
  } = path;
  const {
    name,
    key,
    body: { body },
    handlers,
  } = node;
  const tagProperties = (path.node.extra && path.node.extra.properties) || [];
  const attrsObj = translateAttributes(path, path.get("attributes"));
  let runtimeFlags = 0;

  if (!t.isNullLiteral(attrsObj) && !t.isObjectExpression(attrsObj)) {
    runtimeFlags |= FLAGS.SPREAD_ATTRS;
  }

  const writeArgs = [
    name,
    attrsObj,
    key,
    file._componentInstanceIdentifier,
    body.length ? t.nullLiteral() : t.numericLiteral(0),
  ];

  if (node.preserveAttrs) {
    tagProperties.push(
      t.objectProperty(
        t.identifier("pa"),
        t.objectExpression(
          node.preserveAttrs.map((name) =>
            t.objectProperty(
              t.isValidIdentifier(name)
                ? t.identifier(name)
                : t.stringLiteral(name),
              t.numericLiteral(1),
            ),
          ),
        ),
      ),
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
                t.identifier("d"),
              ),
              delegateArgs,
            ),
          ),
        );
      },
    );
  }

  if (
    t.isObjectExpression(attrsObj) &&
    attrsObj.properties.every((n) => isPropertyName(n, SIMPLE_ATTRS)) &&
    !node.preserveAttrs
  ) {
    runtimeFlags |= FLAGS.HAS_SIMPLE_ATTRS;
  }

  const tagDef = getTagDef(path);

  if (tagDef) {
    const { htmlType } = tagDef;
    if (htmlType === "custom-element") {
      runtimeFlags |= FLAGS.IS_CUSTOM_ELEMENT;
    }
  }

  writeArgs.push(t.numericLiteral(runtimeFlags));

  if (tagProperties.length) {
    writeArgs.push(t.objectExpression(tagProperties));
  }
  return writeArgs;
}
