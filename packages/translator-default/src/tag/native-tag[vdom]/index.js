import { resolve } from "path";
import { types as t } from "@marko/babel-types";
import write from "../../util/vdom-out-write";
import * as FLAGS from "../../util/runtime-flags";
import { getAttrs, evaluateAttr } from "../util";
import { getTagDef } from "@marko/babel-utils";
import withPreviousLocation from "../../util/with-previous-location";

const EMPTY_OBJECT = {};
const SIMPLE_ATTRS = ["id", "class", "style"];
const MAYBE_SVG = {
  a: true,
  script: true,
  style: true,
  title: true
};

/**
 * Translates the html streaming version of a standard html element.
 */
export default function(path) {
  const {
    hub: { file },
    node,
    parent
  } = path;
  const {
    name,
    key,
    body: { body },
    isNullable,
    properties,
    handlers
  } = node;

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

  const tagProperties = properties.slice();
  const isEmpty = !body.length;
  let attrsObj = getAttrs(path, true, true);

  if (!t.isNullLiteral(attrsObj)) {
    if (
      !t.isObjectExpression(attrsObj) ||
      attrsObj.properties.some(t.isSpreadElement)
    ) {
      attrsObj = t.callExpression(
        file.importDefault(
          path,
          "marko/src/runtime/vdom/helpers/attrs",
          "marko_attrs"
        ),
        [attrsObj]
      );
    }
  }

  const writeArgs = [
    isEmpty ? "e" : "be",
    name,
    attrsObj,
    key,
    t.identifier("component"),
    body.length ? t.nullLiteral() : t.numericLiteral(0)
  ];

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
    !tagProperties.some(n => isPropertyName(n, ["noupdate"]))
  ) {
    node.runtimeFlags |= FLAGS.HAS_SIMPLE_ATTRS;
  }

  const tagDef = getTagDef(path);

  if (tagDef) {
    const { htmlType, name, parseOptions = EMPTY_OBJECT } = tagDef;
    if (htmlType === "custom-element") {
      node.runtimeFlags |= FLAGS.IS_CUSTOM_ELEMENT;
      if (parseOptions.import) {
        // TODO: the taglib should be updated to support this as a top level option.
        file.metadata.marko.deps.push(resolve(tagDef.dir, parseOptions.import));
      }
    } else if (
      htmlType === "svg" ||
      (MAYBE_SVG[name] &&
        t.isMarkoTag(parent) &&
        parent.tagDef &&
        parent.tagDef.htmlType === "svg")
    ) {
      node.runtimeFlags |= FLAGS.IS_SVG;
    } else if (name === "textarea") {
      node.runtimeFlags |= FLAGS.IS_TEXTAREA;
    }
  }

  writeArgs.push(t.numericLiteral(node.runtimeFlags));

  if (tagProperties.length) {
    writeArgs.push(t.objectExpression(tagProperties));
  }

  let writeStartNode = withPreviousLocation(write(...writeArgs), node.name);

  if (isNullable) {
    writeStartNode = t.ifStatement(name, writeStartNode);
  }

  if (isEmpty) {
    path.replaceWith(writeStartNode);
    return;
  }

  let writeEndNode = write("ee");
  if (isNullable) {
    writeEndNode = t.ifStatement(name, writeEndNode);
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
