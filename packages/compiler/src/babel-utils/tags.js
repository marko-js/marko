import { types as t } from "@marko/compiler";
import markoModules from "@marko/compiler/modules";
import { basename, dirname, join, relative, resolve } from "path";

import { Hash } from "../util/quick-hash";
import { diagnosticWarn } from "./diagnostics";
import { resolveRelativePath } from "./imports";
import { getTagDefForTagName } from "./taglib";

const { cwd, root } = markoModules;
const MACRO_IDS_KEY = Symbol();
const MACRO_NAMES_KEY = "__marko_macro_names__"; // must be a string literal since it is used across compiler stages.
const TRANSPARENT_TAGS = new Set([
  "for",
  "while",
  "if",
  "else",
  "else-if",
  "_no-update",
]);

export function isNativeTag(path) {
  if (path.node._isDynamicString) {
    return true;
  }

  const tagDef = getTagDef(path);
  return (
    tagDef &&
    tagDef.html &&
    (tagDef.htmlType === "custom-element" ||
      (!tagDef.template && !tagDef.renderer))
  );
}

export function isDynamicTag(path) {
  return !t.isStringLiteral(path.node.name);
}

export function isAttributeTag(path) {
  const {
    node: { name },
  } = path;
  return t.isStringLiteral(name) && name.value[0] === "@";
}

export function isTransparentTag(path) {
  const {
    node: { name },
  } = path;
  return t.isStringLiteral(name) && TRANSPARENT_TAGS.has(name.value);
}

export function registerMacro(path, name) {
  const { file } = path.hub;
  const markoMeta = file.metadata.marko;
  const macroNames = markoMeta[MACRO_NAMES_KEY];

  if (macroNames) {
    if (macroNames[name]) {
      diagnosticWarn(path, {
        label: `A macro with the name "${name}" already exists.`,
        fix() {
          findParentTag(path).remove();
        },
      });
    }
    macroNames[name] = true;
  } else {
    markoMeta[MACRO_NAMES_KEY] = { [name]: true };
  }
}

export function hasMacro(path, name) {
  const macroNames = path.hub.file.metadata.marko[MACRO_NAMES_KEY];
  return !!(macroNames && macroNames[name]);
}

export function isMacroTag(path) {
  const { name } = path.node;
  return t.isStringLiteral(name) && hasMacro(path, name.value);
}

export function getMacroIdentifierForName(path, name) {
  const { file } = path.hub;

  if (file.___compileStage !== "translate") {
    throw new Error(
      "getMacroIdentifierForName can only be called during the translate phase of the compiler.",
    );
  }

  const markoMeta = file.metadata.marko;
  let macroIds = markoMeta[MACRO_IDS_KEY];

  if (!macroIds) {
    macroIds = markoMeta[MACRO_IDS_KEY] = {};

    for (const macroName in markoMeta[MACRO_NAMES_KEY]) {
      macroIds[macroName] = file.path.scope.generateUid(macroName);
    }
  }

  const id = macroIds[name];

  if (!id) {
    throw new Error(
      "<macro> was added programmatically, but was not registered via the 'registerMacro' api in @marko/compiler/babel-utils.",
    );
  }

  return t.identifier(id);
}

export function getMacroIdentifier(path) {
  const { file } = path.hub;

  if (file.___compileStage !== "translate") {
    throw new Error(
      "getMacroIdentifier can only be called during the translate phase of the compiler.",
    );
  }

  if (!isMacroTag(path)) {
    throw path.buildCodeFrameError(
      "getMacroIdentifier called on non macro referencing tag.",
    );
  }

  return getMacroIdentifierForName(path, path.node.name.value);
}

export function getTagTemplate(tag) {
  const {
    node,
    hub: { file },
  } = tag;

  if (node.extra?.tagNameImported) {
    return join(file.opts.filename, node.extra.tagNameImported);
  }
  return getTagDef(tag)?.template;
}

export function getTagDef(path) {
  const {
    node,
    hub: { file },
  } = path;

  if (node.tagDef === undefined) {
    if (isDynamicTag(path) || isMacroTag(path)) {
      node.tagDef = null;
    } else {
      node.tagDef =
        getTagDefForTagName(
          file,
          isAttributeTag(path)
            ? getFullyResolvedTagName(path)
            : node.name.value,
        ) || null;
    }
  }

  return node.tagDef;
}

export function getFullyResolvedTagName(path) {
  const parts = [];
  let cur;
  do {
    cur = path.node.name.value;

    if (isAttributeTag(path)) {
      parts.push(cur.slice(1));
    } else {
      parts.push(cur || "*");
      break;
    }
  } while ((path = findParentTag(path)));

  return parts.reverse().join(":");
}

export function findParentTag(path) {
  let cur = path.parentPath;

  while (cur.node) {
    if (cur.isMarkoTagBody()) {
      cur = cur.parentPath;
      continue;
    }

    if (!cur.isMarkoTag()) {
      cur = undefined;
      break;
    }

    if (isTransparentTag(cur)) {
      cur = cur.parentPath;
      continue;
    }

    return cur;
  }
}

export function findAttributeTags(path, attributeTags = []) {
  const attrTags = path.node.body.attributeTags
    ? path.get("body").get("body")
    : path.get("attributeTags");
  attrTags.forEach((child) => {
    if (isAttributeTag(child)) {
      attributeTags.push(child);
    } else if (isTransparentTag(child)) {
      findAttributeTags(child, attributeTags);
    }
  });

  return attributeTags;
}

export function getArgOrSequence(path) {
  const {
    node: { arguments: args },
  } = path;
  const len = args && args.length;

  if (len) {
    if (len > 1) {
      return t.sequenceExpression(args);
    } else {
      return args[0];
    }
  }
}

export function isLoopTag(path) {
  if (!path.isMarkoTag()) {
    return false;
  }

  const tagName = path.node.name.value;
  return tagName === "while" || tagName === "for";
}

export function loadFileForTag(tag) {
  const { file } = tag.hub;
  if (tag.node.extra?.tagNameImported) {
    return loadFileForImport(file, tag.node.extra?.tagNameImported);
  }

  const def = getTagDef(tag);
  const filename = def && def.template;

  if (filename) {
    return resolveMarkoFile(file, filename);
  }
}

export function loadFileForImport(file, request) {
  const relativeRequest = resolveTagImport(file.path, request);
  if (relativeRequest) {
    const filename =
      relativeRequest[0] === "."
        ? resolve(file.opts.filename, "..", relativeRequest)
        : markoModules.resolve(relativeRequest, dirname(file.opts.filename));
    return resolveMarkoFile(file, filename);
  }
}

function resolveMarkoFile(file, filename) {
  if (filename === file.opts.filename) {
    if (file.___compileStage === "analyze") {
      return file;
    }

    return file.___getMarkoFile(file.code, file.opts, file.markoOpts);
  }

  try {
    const childFile = file.___getMarkoFile(
      file.markoOpts.fileSystem.readFileSync(filename).toString("utf-8"),
      createNewFileOpts(file.opts, filename),
      file.markoOpts,
    );

    (file.metadata.marko.analyzedTags ||= new Set()).add(filename);
    return childFile;
  } catch (_) {
    // ignore
  }
}

const idCache = new WeakMap();
const templateIdHashOpts = { outputLength: 5 };
export function getTemplateId(opts, request, child) {
  if (!child && opts.getTemplateId) return opts.getTemplateId(request);

  const id = relative(root, request).replace(/[^a-zA-Z0-9_$./-]/g, "/");

  if (opts.optimize) {
    const optimizeKnownTemplates =
      typeof opts === "object" && opts.optimizeKnownTemplates;
    const knownTemplatesSize = optimizeKnownTemplates?.length || 0;
    if (knownTemplatesSize) {
      let lookup = idCache.get(optimizeKnownTemplates);
      if (!lookup) {
        lookup = new Map();
        idCache.set(optimizeKnownTemplates, lookup);
        for (let i = 0; i < knownTemplatesSize; i++) {
          lookup.set(optimizeKnownTemplates[i], {
            id: encodeTemplateId(i),
            children: new Map(),
          });
        }
      }
      let registered = lookup.get(request);
      if (registered) {
        if (child) {
          let childId = registered.children.get(child);
          if (childId === undefined) {
            childId = registered.children.size;
            registered.children.set(child, childId);
          }
          return registered.id + childId;
        }
        return registered.id;
      }
    }

    const hash = new Hash().update(id);
    if (child) {
      hash.update(child);
    }

    return encodeTemplateId(hash.digest());
  }

  return id + (child ? `_${child}` : "");
}

export function resolveTagImport(path, request) {
  const {
    hub: { file },
  } = path;
  if (request[0] === "<") {
    const tagName = request.slice(1, -1);
    const tagDef = getTagDefForTagName(file, tagName);
    const tagEntry = tagDef && (tagDef.renderer || tagDef.template);
    const relativePath = tagEntry && resolveRelativePath(file, tagEntry);

    if (!relativePath) {
      throw path.buildCodeFrameError(
        `Unable to find entry point for custom tag <${tagName}>.`,
      );
    }

    return relativePath;
  }

  if (request.endsWith(".marko")) {
    return resolveRelativePath(file, request);
  }
}

function createNewFileOpts(opts, filename) {
  const sourceFileName = basename(filename);
  const sourceRoot = dirname(filename);
  const filenameRelative = relative(cwd, filename);
  return {
    ...opts,
    filename,
    sourceRoot,
    sourceFileName,
    filenameRelative,
    parserOpts: {
      ...opts.parserOpts,
      sourceFileName,
    },
    generatorOpts: {
      ...opts.generatorOpts,
      filename,
      sourceRoot,
      sourceFileName,
    },
  };
}

function encodeTemplateId(id) {
  const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
  let n = id;
  let r = c[n % 53]; // Avoids chars that cannot start a property name and _ (reserved).
  n = Math.floor(n / 53);

  // ensure at most 7 characters.
  for (let i = 6; n > 0 && i--; n = Math.floor(n / 64)) {
    r += c[n & 63];
  }

  return r;
}
