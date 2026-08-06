import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
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
    registerNestedFunctions(path, file, markoOpts);
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

// A function nested in a class-to-tags attribute is invisible to the top-level
// scan the compat runtime does, and closes over a render frame the browser never
// has. Hoisting it to a factory over the component gives both sides one stable
// id to resume through, so the value serializes instead of falling back to a noop.
function registerNestedFunctions(path, file, markoOpts) {
  for (const attr of path.get("attributes")) {
    if (attr.isMarkoAttribute()) {
      registerNested(attr.get("value"), path, file, markoOpts);
    } else if (attr.isMarkoSpreadAttribute()) {
      registerFunctionsIn(attr.get("value"), path, file, markoOpts);
    }
  }
}

function registerFunctionsIn(valuePath, tagPath, file, markoOpts) {
  if (valuePath.isObjectExpression()) {
    for (const prop of valuePath.get("properties")) {
      if (
        prop.isObjectMethod() &&
        prop.node.kind === "method" &&
        !isProtoKey(prop.node)
      ) {
        registerNested(prop, tagPath, file, markoOpts);
      } else if (prop.isObjectProperty()) {
        registerNested(prop.get("value"), tagPath, file, markoOpts);
      }
    }
  } else if (valuePath.isArrayExpression()) {
    for (const el of valuePath.get("elements")) {
      if (el.node) registerNested(el, tagPath, file, markoOpts);
    }
  }
}

function registerNested(valuePath, tagPath, file, markoOpts) {
  if (isFunction(valuePath)) {
    const factory = hoistToFactory(valuePath, file);
    if (factory) {
      replaceWithResumable(valuePath, factory, file, markoOpts);
    }
    return;
  }

  registerFunctionsIn(valuePath, tagPath, file, markoOpts);
}

function isProtoKey({ key, computed }) {
  return (
    !computed &&
    ((key.type === "Identifier" && key.name === "__proto__") ||
      (key.type === "StringLiteral" && key.value === "__proto__"))
  );
}

function isFunction(valuePath) {
  return (
    valuePath.isFunctionExpression() ||
    valuePath.isArrowFunctionExpression() ||
    (valuePath.isObjectMethod() && valuePath.node.kind === "method")
  );
}

// `input`/`out`/`state`/`$global` only become renderer parameters in `Program.exit`,
// so at this point they can still look module scoped.
const RENDER_LOCALS = new Set(["input", "out", "state", "$global"]);

// Only the component survives into the browser; anything else the body closes
// over belongs to a render frame that resume cannot rebuild.
function hoistToFactory(fnPath, file) {
  const componentId = file._componentInstanceIdentifier;
  if (!componentId) return null;

  const program = fnPath.hub.file.path;
  const outer = new Set();
  let usesThis = false;

  fnPath.traverse({
    ThisExpression() {
      usesThis = true;
    },
    Super() {
      usesThis = true;
    },
    MetaProperty() {
      usesThis = true;
    },
    ReferencedIdentifier(ref) {
      const { name } = ref.node;
      const binding = ref.scope.getBinding(name);
      if (binding && isInside(binding.scope.path, fnPath)) return;
      if (name === "component" || name === componentId.name) {
        outer.add("component");
        return;
      }
      if (RENDER_LOCALS.has(name)) {
        outer.add(name);
        return;
      }
      if (binding && binding.scope === program.scope) return;
      if (binding && binding.identifier === componentId) {
        outer.add("component");
        return;
      }
      outer.add(name);
    },
  });

  if (usesThis) return null;
  for (const name of outer) {
    if (name !== "component") return null;
  }

  const fnNode = fnPath.isObjectMethod()
    ? t.functionExpression(
        null,
        fnPath.node.params,
        fnPath.node.body,
        fnPath.node.generator,
        fnPath.node.async,
      )
    : fnPath.node;
  const factoryId = program.scope.generateUidIdentifier("marko_class_fn");

  program.pushContainer("body", [
    t.variableDeclaration("const", [
      t.variableDeclarator(
        factoryId,
        t.arrowFunctionExpression([t.cloneNode(componentId)], fnNode),
      ),
    ]),
  ]);

  return factoryId;
}

function isInside(scopePath, fnPath) {
  return scopePath === fnPath || scopePath.isDescendant(fnPath);
}

function replaceWithResumable(fnPath, factoryId, file, markoOpts) {
  const isHTML = markoOpts.output === "html";
  const id = t.stringLiteral(nextClassFnId(file));
  const built = t.callExpression(t.cloneNode(factoryId), [
    t.cloneNode(file._componentInstanceIdentifier),
  ]);
  let replacement;

  if (isHTML) {
    replacement = t.callExpression(compatHelper(file, markoOpts), [
      id,
      built,
      t.cloneNode(file._componentInstanceIdentifier),
    ]);
  } else {
    // Registered once per module so a resumed reference can rebuild the
    // handler against whichever component instance the scope names.
    file.path.pushContainer("body", [
      t.expressionStatement(
        t.callExpression(compatHelper(file, markoOpts), [
          id,
          t.cloneNode(factoryId),
        ]),
      ),
    ]);
    replacement = built;
  }

  if (fnPath.isObjectMethod()) {
    fnPath.replaceWith(
      t.objectProperty(fnPath.node.key, replacement, fnPath.node.computed),
    );
  } else {
    fnPath.replaceWith(replacement);
  }
}

function nextClassFnId(file) {
  file._markoClassFnCount = (file._markoClassFnCount || 0) + 1;
  return `${file.metadata.marko.id}/h${file._markoClassFnCount - 1}`;
}

function compatHelper(file, markoOpts) {
  const { optimize, modules, output } = markoOpts;
  return importNamed(
    file,
    `marko/${optimize ? "dist" : "src"}/runtime/helpers/tags-compat/${
      output === "html" ? "html" : "dom"
    }${optimize ? "" : "-debug"}.${modules === "esm" ? "mjs" : "js"}`,
    "f",
    "marko_class_fn",
  );
}
