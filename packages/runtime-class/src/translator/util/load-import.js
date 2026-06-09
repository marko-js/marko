import { types as t } from "@marko/compiler";
import {
  importDefault,
  importNamed,
  loadFileForTag,
} from "@marko/compiler/babel-utils";

const triggerRegExp = /\s*([\w-]+)\s*([^?|]+?)?\s*(?:\?([^|]*?))?\s*(?:\||$)/g;
const loadTagsByFile = new WeakMap();

export function analyzeLoadImport(importDecl, tagEntry) {
  const loadAttrValuePath = importDecl
    .get("attributes")
    .find(
      (p) =>
        (p.node.key.type === "Identifier"
          ? p.node.key.name
          : p.node.key.value) === "load",
    )
    ?.get("value");

  if (!loadAttrValuePath) return;

  if (!tagEntry) {
    throw importDecl.buildCodeFrameError(
      "Unable to resolve marko file for load import.",
    );
  }

  if ((importDecl.node.importKind || "value") !== "value") {
    throw importDecl.buildCodeFrameError("Invalid load import.");
  }

  for (const specifier of importDecl.get("specifiers")) {
    if (!t.isImportDefaultSpecifier(specifier.node)) {
      throw specifier.buildCodeFrameError(
        "Invalid load import, only a default specifier is allowed.",
      );
    }
  }

  const { markoOpts } = importDecl.hub.file;
  if (!markoOpts.linkAssets) {
    throw importDecl.buildCodeFrameError(
      "The `load` import attribute requires the `linkAssets` compiler option to be configured.",
    );
  }

  (importDecl.node.extra ??= {}).loadImport =
    getLoadImportConfig(loadAttrValuePath);
}

export function translateLoadTag(path, tagName, relativePath) {
  const { file } = path.hub;
  const { markoOpts } = file;

  const loadTagFn =
    markoOpts.output === "dom"
      ? importDefault(
          file,
          "marko/src/runtime/helpers/load-tag-browser.js",
          "marko_load_tag",
        )
      : importNamed(
          file,
          "marko/src/runtime/helpers/load-tag.js",
          "withLoadAssets",
          "marko_load_tag",
        );

  const importBinding = path.scope.getBinding(tagName);
  const importDecl = importBinding?.path?.parentPath?.isImportDeclaration()
    ? importBinding.path.parentPath
    : null;
  const loadImport = importDecl?.node?.extra?.loadImport;
  const triggers =
    loadImport && !loadImport.render && loadImport.triggers.length
      ? loadImport.triggers
      : null;

  let loadTags = loadTagsByFile.get(file);
  if (!loadTags) loadTagsByFile.set(file, (loadTags = new Map()));
  if (loadTags.has(relativePath)) {
    return loadTags.get(relativePath);
  }

  const loadId = file.path.scope.generateUidIdentifier(`marko_load_${tagName}`);
  loadTags.set(relativePath, loadId);

  let loadArgs;
  if (markoOpts.output === "dom") {
    if (
      importDecl &&
      importBinding.referencePaths.every((ref) => t.isMarkoTag(ref.parent))
    ) {
      // TODO: is this actually unconditional
      importDecl.remove();
    }
    const childFile = loadFileForTag(path);
    loadArgs = [
      t.stringLiteral(childFile.metadata.marko.id),
      t.arrowFunctionExpression(
        [],
        t.callExpression(t.import(), [t.stringLiteral(relativePath)]),
      ),
    ];
    if (triggers) loadArgs.push(buildDomTrigger(file, triggers));
  } else {
    const { linkAssets } = markoOpts;
    const childFile = loadFileForTag(path);
    linkAssets.onAsset(
      "load",
      childFile.opts.filename,
      childFile.metadata.marko.id,
    );
    loadArgs = [
      t.stringLiteral(childFile.metadata.marko.id),
      t.identifier(tagName),
    ];
    if (triggers) loadArgs.push(t.valueToNode(triggers));
  }

  file.path.unshiftContainer("body", [
    t.variableDeclaration("const", [
      t.variableDeclarator(loadId, t.callExpression(loadTagFn, loadArgs)),
    ]),
  ]);

  return loadId;
}

function getLoadImportConfig(attrValue) {
  const raw = attrValue.node.value;

  if (raw === "render") return { render: true };

  const triggers = [];
  for (const match of raw.matchAll(triggerRegExp)) {
    const type = parseTriggerType(match[1]);
    const selector = match[2];
    const query = match[3];

    if (!type) {
      throw attrValue.buildCodeFrameError(
        `Unknown trigger type "${match[1]}". Supported triggers are "visible", "idle", "media", and "on*".`,
      );
    }
    if (type === "render") {
      throw attrValue.buildCodeFrameError(
        'The "render" trigger must be used alone.',
      );
    }
    if (type === "idle") {
      if (selector) {
        throw attrValue.buildCodeFrameError(
          `Selector is not supported for the "idle" trigger.`,
        );
      }
    } else if (!selector) {
      throw attrValue.buildCodeFrameError(
        type === "media"
          ? `A media query is required for the "media" trigger. (e.g. "media(max-width:768px)")`
          : `A selector is required for the "${type}" trigger. (e.g. "${type}.my-element")`,
      );
    }

    const trigger = selector ? { type, selector } : { type };

    if (query) {
      const params = new URLSearchParams(query);
      switch (type) {
        case "visible": {
          let rootMargin;
          for (const [key, value] of params) {
            if (key !== "rootMargin") {
              throw attrValue.buildCodeFrameError(
                `Unknown param "${key}" for the "visible" trigger. Supported params: "rootMargin".`,
              );
            }
            rootMargin = value;
          }
          if (rootMargin) trigger.options = { rootMargin };
          break;
        }
        case "idle": {
          let timeout;
          for (const [key, value] of params) {
            if (key !== "timeout") {
              throw attrValue.buildCodeFrameError(
                `Unknown param "${key}" for the "idle" trigger. Supported params: "timeout".`,
              );
            }
            timeout = Number(value);
          }
          if (timeout) trigger.options = { timeout };
          break;
        }
        default:
          throw attrValue.buildCodeFrameError(
            `Params are not supported for the "${type}" trigger.`,
          );
      }
    }

    triggers.push(trigger);
  }

  return { render: false, triggers };
}

function buildDomTrigger(file, triggers) {
  const triggerExprs = triggers.map((trigger) => {
    switch (trigger.type) {
      case "visible": {
        const fn = importDefault(
          file,
          "marko/src/runtime/helpers/load-tag-visible-trigger.js",
          "marko_visible_trigger",
        );
        const args = [t.stringLiteral(trigger.selector)];
        if (trigger.options) args.push(t.valueToNode(trigger.options));
        return t.callExpression(fn, args);
      }
      case "idle": {
        const fn = importDefault(
          file,
          "marko/src/runtime/helpers/load-tag-idle-trigger.js",
          "marko_idle_trigger",
        );
        return t.callExpression(
          fn,
          trigger.options ? [t.valueToNode(trigger.options)] : [],
        );
      }
      case "media": {
        const fn = importDefault(
          file,
          "marko/src/runtime/helpers/load-tag-media-trigger.js",
          "marko_media_trigger",
        );
        return t.callExpression(fn, [t.stringLiteral(trigger.selector)]);
      }
      default: {
        const fn = importDefault(
          file,
          "marko/src/runtime/helpers/load-tag-event-trigger.js",
          "marko_event_trigger",
        );
        return t.callExpression(fn, [
          t.stringLiteral(trigger.type.slice("on-".length)),
          t.stringLiteral(trigger.selector),
        ]);
      }
    }
  });

  if (triggerExprs.length === 1) return triggerExprs[0];

  const raceFn = importDefault(
    file,
    "marko/src/runtime/helpers/load-tag-race-trigger.js",
    "marko_race_trigger",
  );
  return t.callExpression(raceFn, triggerExprs);
}

function parseTriggerType(type) {
  switch (type) {
    case "idle":
    case "media":
    case "render":
    case "visible":
      return type;
    default:
      return /^on[A-Z-]/.test(type)
        ? `on-${type[2] === "-" ? type.slice(3) : type.slice(2).toLowerCase()}`
        : undefined;
  }
}
