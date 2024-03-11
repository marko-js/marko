import { createHash } from "crypto";
import { basename, dirname, relative, resolve, join } from "path";
import { types as t } from "@marko/compiler";
import { getRootDir } from "lasso-package-root";
import resolveFrom from "resolve-from";
import { resolveRelativePath } from "./imports";
import { getTagDefForTagName } from "./taglib";

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

const CWD = process.cwd();
let ROOT = CWD;
try {
  ROOT = getRootDir(ROOT) || ROOT;
  // eslint-disable-next-line no-empty
} catch {}

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
      throw path.buildCodeFrameError(
        `A macro with the name "${name}" already exists.`,
      );
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
      "<macro> was added programmatically, but was not registered via the 'registerMacro' api in @marko/babel-utils.",
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
  path.get("body.body").forEach((child) => {
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
  const fs = file.markoOpts.fileSystem;
  const filename = def && def.template;

  if (filename) {
    const markoMeta = file.metadata.marko;
    const relativeFileName = resolveRelativePath(file, filename);
    const { analyzedTags } = markoMeta;
    if (analyzedTags) {
      analyzedTags.add(relativeFileName);
    } else {
      markoMeta.analyzedTags = new Set([relativeFileName]);
    }

    return file.___getMarkoFile(
      fs.readFileSync(filename).toString("utf-8"),
      createNewFileOpts(file.opts, filename),
      file.markoOpts,
    );
  }
}

export function loadFileForImport(file, request) {
  const fs = file.markoOpts.fileSystem;
  const relativeRequest = resolveTagImport(file.path, request);

  if (relativeRequest) {
    const filename =
      relativeRequest[0] === "."
        ? resolve(file.opts.filename, "..", relativeRequest)
        : resolveFrom(dirname(file.opts.filename), relativeRequest);
    const markoMeta = file.metadata.marko;
    const { analyzedTags } = markoMeta;
    if (analyzedTags) {
      analyzedTags.add(relativeRequest);
    } else {
      markoMeta.analyzedTags = new Set([relativeRequest]);
    }

    return file.___getMarkoFile(
      fs.readFileSync(filename).toString("utf-8"),
      createNewFileOpts(file.opts, filename),
      file.markoOpts,
    );
  }
}

export function getTemplateId(optimize, request) {
  const id = relative(ROOT, request);

  if (optimize) {
    return createHash("MD5").update(id).digest("base64").slice(0, 8);
  }

  return id;
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
  const filenameRelative = relative(CWD, filename);
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
