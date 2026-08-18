import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  getFile,
  getProgram,
  getTagDef,
  importDefault,
  importNamed,
  resolveRelativePath,
  resolveTagImport,
} from "@marko/compiler/babel-utils";

import { translateLoadTag } from "../util/load-import";
import withPreviousLocation from "../util/with-previous-location";
import dynamicTag from "./dynamic-tag";
import nativeTag from "./native-tag";
import { buildEventHandlerArray, getAttrs } from "./util";

export default function (path, isNullable) {
  const {
    hub: { file },
    node,
  } = path;
  const { markoOpts } = file;
  const { name, key } = node;

  assertNoArgs(path);

  let tagIdentifier;

  if (node.extra?.featureType === "tags") {
    registerClassHandlerFunctions(path);
    // A dynamic `<${tagName}>` already references the imported template
    // binding directly; only a static tag name needs to be resolved to one.
    if (t.isStringLiteral(name)) {
      path.set(
        "name",
        path.scope.hasBinding(name.value)
          ? t.identifier(name.value)
          : importDefault(file, node.extra.relativePath, name.value),
      );
    }
    return dynamicTag(path);
  }

  if (t.isStringLiteral(name)) {
    const tagName = name.value;
    let relativePath = node.extra && node.extra.relativePath;

    if (!relativePath) {
      const tagDef = getTagDef(path);
      if (tagDef && tagDef.renderer) {
        // Normally new tags should not be added in the translate stage.
        // We make an exception here for core tags, init-components & _preserve being the primary culprits.
        // TODO: in the future refactor so this is not needed.
        relativePath = resolveRelativePath(file, tagDef.renderer, tagDef);
      }
    }

    let binding = !relativePath && path.scope.getBinding(tagName);
    if (binding && !binding.identifier.loc) binding = null;

    if (relativePath) {
      tagIdentifier = node.extra?.tagNameLoad
        ? translateLoadTag(path, tagName, relativePath)
        : importDefault(file, relativePath, tagName);
    } else if (binding) {
      path.set("name", t.identifier(tagName));
      return dynamicTag(path);
    } else if (markoOpts.ignoreUnrecognizedTags) {
      return nativeTag(path);
    } else {
      throw path
        .get("name")
        .buildCodeFrameError(
          `Unable to find entry point for custom tag <${tagName}>.`,
        );
    }
  } else {
    tagIdentifier = name;
  }

  const foundAttrs = getAttrs(path);
  const customTagRenderCall = withPreviousLocation(
    t.expressionStatement(
      t.callExpression(
        importDefault(
          file,
          "marko/src/runtime/helpers/render-tag.js",
          "marko_tag",
        ),
        [
          tagIdentifier,
          // TODO: this could be left as null if we froze input mutations and used a default object in the runtime.
          t.isNullLiteral(foundAttrs) ? t.objectExpression([]) : foundAttrs,
          t.identifier("out"),
          file._componentDefIdentifier,
          key,
          ...buildEventHandlerArray(path),
        ],
      ),
    ),
    node,
  );

  if (isNullable) {
    let renderBodyIdentifier;
    const renderBodyProp =
      t.isObjectExpression(foundAttrs) &&
      foundAttrs.properties.find(
        (prop) => prop.key && prop.key.value === "renderBody",
      );

    if (renderBodyProp) {
      renderBodyIdentifier = path.scope.generateUidIdentifier("renderBody");
      path.insertBefore(
        t.variableDeclaration("const", [
          t.variableDeclarator(renderBodyIdentifier, renderBodyProp.value),
        ]),
      );

      renderBodyProp.value = renderBodyIdentifier;
    }

    path.replaceWith(
      t.ifStatement(
        name,
        customTagRenderCall,
        renderBodyIdentifier &&
          t.expressionStatement(
            t.callExpression(renderBodyIdentifier, [t.identifier("out")]),
          ),
      ),
    );
  } else {
    path.replaceWith(customTagRenderCall);
  }
}

// Hoist direct attribute handlers to a component factory for class→tags resume.
// Nested functions in object/array attr values are not supported across the boundary.
function registerClassHandlerFunctions(path) {
  for (const attr of path.get("attributes")) {
    if (!attr.isMarkoAttribute()) continue;
    const valuePath = attr.get("value");
    if (
      !valuePath.isFunctionExpression() &&
      !valuePath.isArrowFunctionExpression()
    ) {
      continue;
    }
    const factory = hoistToFactory(valuePath);
    if (factory) {
      replaceWithResumable(valuePath, factory);
    }
  }
}

// `input`/`out`/`state`/`$global` only become renderer parameters in `Program.exit`,
// so at this point they can still look module scoped.
const RENDER_LOCALS = new Set(["input", "out", "state", "$global"]);

// Only the component survives into the browser; anything else the body closes
// over belongs to a render frame that resume cannot rebuild.
function hoistToFactory(fnPath) {
  const file = getFile();
  const componentId = file._componentInstanceIdentifier;
  if (!componentId) return null;

  const program = getProgram();
  const outer = new Set();

  for (let scope = fnPath.scope.parent; scope; scope = scope.parent) {
    for (const name in scope.bindings) {
      const binding = scope.bindings[name];
      if (!binding.referencePaths.some((ref) => ref.isDescendant(fnPath))) {
        continue;
      }

      if (
        name === "component" ||
        name === componentId.name ||
        binding.identifier === componentId
      ) {
        outer.add("component");
      } else if (RENDER_LOCALS.has(name) || binding.scope !== program.scope) {
        outer.add(name);
      }
    }
    if (scope === program.scope) break;
  }

  for (const name of outer) {
    if (name !== "component") return null;
  }

  const factoryId = program.scope.generateUidIdentifier("marko_class_fn");

  program.pushContainer("body", [
    t.variableDeclaration("const", [
      t.variableDeclarator(
        factoryId,
        t.arrowFunctionExpression([t.cloneNode(componentId)], fnPath.node),
      ),
    ]),
  ]);

  return factoryId;
}

function replaceWithResumable(fnPath, factoryId) {
  const file = getFile();
  const { markoOpts } = file;
  const isHTML = markoOpts.output === "html";
  const id = t.stringLiteral(nextClassFnId());
  const built = t.callExpression(t.cloneNode(factoryId), [
    t.cloneNode(file._componentInstanceIdentifier),
  ]);
  let replacement;

  if (isHTML) {
    replacement = t.callExpression(compatHelper(), [
      id,
      built,
      t.cloneNode(file._componentInstanceIdentifier),
      t.identifier("out"),
    ]);
  } else {
    // Registered once per module so a resumed reference can rebuild the
    // handler against whichever component instance the scope names.
    getProgram().pushContainer("body", [
      t.expressionStatement(
        t.callExpression(compatHelper(), [id, t.cloneNode(factoryId)]),
      ),
    ]);
    replacement = built;
  }

  fnPath.replaceWith(replacement);
}

function nextClassFnId() {
  const file = getFile();
  file._markoClassFnCount = (file._markoClassFnCount || 0) + 1;
  return `${file.metadata.marko.id}/h${file._markoClassFnCount - 1}`;
}

function compatHelper() {
  const file = getFile();
  const { optimize, modules, output } = file.markoOpts;
  return importNamed(
    file,
    `marko/${optimize ? "dist" : "src"}/runtime/helpers/tags-compat/${
      output === "html" ? "html" : "dom"
    }${optimize ? "" : "-debug"}.${modules === "esm" ? "mjs" : "js"}`,
    "f",
    "marko_class_fn",
  );
}
