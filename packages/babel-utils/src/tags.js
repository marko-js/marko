import { relative, resolve } from "path";
import { createHash } from "crypto";
import { types as t } from "@marko/compiler";
import * as compilerModules from "@marko/compiler/modules";
import { getRootDir } from "lasso-package-root";
import { getTagDefForTagName } from "./taglib";
import { resolveRelativePath } from "./imports";
const TRANSPARENT_TAGS = new Set([
  "for",
  "while",
  "if",
  "else",
  "else-if",
  "_no-update"
]);

let ROOT = process.cwd();
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
    node: { name }
  } = path;
  return t.isStringLiteral(name) && name.value[0] === "@";
}

export function isTransparentTag(path) {
  const {
    node: { name }
  } = path;
  return t.isStringLiteral(name) && TRANSPARENT_TAGS.has(name.value);
}

export function isMacroTag(path) {
  return Boolean(getMacroIdentifier(path));
}

export function getMacroIdentifier(path) {
  const macros = path.hub.file.metadata.marko.macros;
  const { name } = path.node;

  if (t.isStringLiteral(name)) {
    const id = macros[name.value];

    if (id) {
      return t.identifier(id);
    }
  }
}

export function getTagDef(path) {
  const {
    node,
    hub: { file }
  } = path;

  if (!node.tagDef) {
    if (isDynamicTag(path) || isMacroTag(path)) {
      node.tagDef = null;
    } else {
      node.tagDef =
        getTagDefForTagName(
          file,
          isAttributeTag(path) ? getFullyResolvedTagName(path) : node.name.value
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
  path.get("body.body").forEach(child => {
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
    node: { arguments: args }
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
  const def = getTagDef(tag);
  const { file } = tag.hub;
  const fs = file.markoOpts.fileSystem;
  const sourceFileName = def && def.template;

  if (sourceFileName) {
    return file.___getMarkoFile(
      fs.readFileSync(sourceFileName).toString("utf-8"),
      { ...file.opts, sourceFileName },
      file.markoOpts
    );
  }
}

export function loadFileForImport(file, request) {
  const fs = file.markoOpts.fileSystem;
  const relativeRequest = resolveTagImport(file.path, request);

  if (relativeRequest) {
    const sourceFileName =
      relativeRequest[0] === "."
        ? resolve(file.opts.sourceFileName, "..", relativeRequest)
        : compilerModules.require.resolve(relativeRequest);
    return file.___getMarkoFile(
      fs.readFileSync(sourceFileName).toString("utf-8"),
      { ...file.opts, sourceFileName },
      file.markoOpts
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
    hub: { file }
  } = path;
  if (request[0] === "<") {
    const tagName = request.slice(1, -1);
    const tagDef = getTagDefForTagName(file, tagName);
    const tagEntry = tagDef && (tagDef.renderer || tagDef.template);
    const relativePath = tagEntry && resolveRelativePath(file, tagEntry);

    if (!relativePath) {
      throw path.buildCodeFrameError(
        `Unable to find entry point for custom tag <${tagName}>.`
      );
    }

    return relativePath;
  }

  if (request.endsWith(".marko")) {
    return resolveRelativePath(file, request);
  }
}
