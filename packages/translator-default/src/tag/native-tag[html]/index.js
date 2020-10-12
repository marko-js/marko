import { resolve } from "path";
import SELF_CLOSING from "self-closing-tags";
import { types as t } from "@marko/babel-types";
import {
  getTagDef,
  normalizeTemplateString,
  importDefault
} from "@marko/babel-utils";
import write from "../../util/html-out-write";
import { hasUserKey } from "../../util/key-manager";
import translateAttributes from "./attributes";
import getComponentFiles from "../../util/get-component-files";
import withPreviousLocation from "../../util/with-previous-location";

const EMPTY_OBJECT = {};

/**
 * Translates the html streaming version of a standard html element.
 */
export default function(path, isNullable) {
  const {
    hub: { file },
    node
  } = path;
  const {
    key,
    name,
    body: { body },
    properties,
    handlers
  } = node;
  const tagProperties = properties.slice();
  const tagDef = getTagDef(path);

  if (tagDef) {
    const { parseOptions = EMPTY_OBJECT } = tagDef;
    if (parseOptions.import) {
      // TODO: the taglib should be updated to support this as a top level option.
      file.metadata.marko.deps.push(resolve(tagDef.dir, parseOptions.import));
    }
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

  const isHTML = file.markoOpts.output === "html";
  let dataMarko = t.stringLiteral("");

  if (isHTML) {
    const componentFiles = getComponentFiles(path);
    const isSplit = Boolean(componentFiles.componentBrowserFile);
    const isImplicit = Boolean(
      !file._inlineComponentClass &&
        !componentFiles.componentFile &&
        !file._hasTagParams
    );

    const needsDataMarkoAttr = isSplit || isImplicit || isPreserved(path);

    if (needsDataMarkoAttr) {
      const dataMarkoArgs = [t.identifier("out"), file._componentDefIdentifier];

      if (tagProperties.length) {
        // TODO we should pre evaluate this if it is static.
        dataMarkoArgs.push(t.objectExpression(tagProperties));
      }

      if (hasUserKey(path)) {
        if (dataMarkoArgs.length === 2) {
          dataMarkoArgs.push(t.numericLiteral(0));
        }

        dataMarkoArgs.push(key, file._componentDefIdentifier);
      }

      if (dataMarkoArgs.length > 2) {
        dataMarko = t.callExpression(
          importDefault(
            file,
            "marko/src/runtime/html/helpers/data-marko",
            "marko_props"
          ),
          dataMarkoArgs
        );
      }
    }
  }

  const translatedAttrs = translateAttributes(path, path.get("attributes"));
  let isSelfClosing = false;
  let openTagEnding = ">";

  if (t.isStringLiteral(name)) {
    if (
      tagDef &&
      tagDef.htmlType &&
      (tagDef.htmlType === "svg" || tagDef.htmlType === "math")
    ) {
      if (!body.length) {
        isSelfClosing = true;
        openTagEnding = " />";
      }
    } else if (SELF_CLOSING.voidElements.indexOf(name.value) !== -1) {
      isSelfClosing = true;
    }
  }

  const isEmpty = isSelfClosing || !body.length;
  let writeStartNode = normalizeTemplateString`<${name}${dataMarko}${translatedAttrs}${openTagEnding}`;

  writeStartNode = withPreviousLocation(
    isEmpty && !isSelfClosing
      ? write`${writeStartNode}</${name}>`
      : write`${writeStartNode}`,
    name
  );

  if (isNullable) {
    writeStartNode = t.ifStatement(
      name,
      writeStartNode,
      t.expressionStatement(
        t.callExpression(
          t.memberExpression(t.identifier("out"), t.identifier("bf")),
          [normalizeTemplateString`f_${key}`, t.identifier("component")]
        )
      )
    );
  }

  if (isEmpty) {
    path.replaceWith(writeStartNode);
    return;
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

  let writeEndNode = write`</${name}>`;

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

  path.replaceWithMultiple(
    [writeStartNode]
      .concat(needsBlock ? t.blockStatement(body) : body)
      .concat(writeEndNode)
  );
}

function isPreserved(path) {
  let parentTag = path;
  do {
    parentTag = parentTag.parentPath.parentPath;
    if (parentTag.get("isPreserved").node === true) {
      return true;
    }
  } while (t.isMarkoTag(parentTag));

  return false;
}
