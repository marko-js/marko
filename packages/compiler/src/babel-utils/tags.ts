import { basename, dirname, join, relative, resolve, sep } from "path";

import { type Config, types as t, type MarkoMeta } from "@marko/compiler";
import type { TagDefinition } from "@marko/compiler/babel-utils";
import markoModules from "@marko/compiler/modules";

import {
  type CompileFile,
  type FileOpts,
  type TagNode,
} from "../util/compile-file";
import { Hash } from "../util/quick-hash";
import { resolveImport } from "../util/resolve";
import { diagnosticWarn } from "./diagnostics";
import { resolveRelativePath } from "./imports";
import { getTagDefForTagName } from "./taglib";

const { cwd, root } = markoModules;
const MACRO_IDS_KEY = Symbol();
const MACRO_NAMES_KEY = "__marko_macro_names__"; // must be a string literal since it is used across compiler stages.
type TagPath = t.NodePath<t.MarkoTag>;
type StaticTagPath = t.NodePath<t.MarkoTag & { name: t.StringLiteral }>;

type MacroMeta = MarkoMeta & {
  [MACRO_IDS_KEY]?: Record<string, string>;
  [MACRO_NAMES_KEY]?: Record<string, boolean>;
};

const TRANSPARENT_TAGS = new Set([
  "for",
  "while",
  "if",
  "else",
  "else-if",
  "_no-update",
]);

export function isNativeTag(path: TagPath) {
  if ((path.node as TagNode)._isDynamicString) {
    return true;
  }

  const tagDef = getTagDef(path);
  return !!(tagDef && tagDef.html && !tagDef.template && !tagDef.renderer);
}

// Translators ask these of a body's other children too, which have no name,
// so they test it with `t.isStringLiteral` rather than reading its `type`.
export function isDynamicTag(path: TagPath) {
  return !t.isStringLiteral(path.node.name);
}

export function isAttributeTag(path: TagPath): path is StaticTagPath {
  const {
    node: { name },
  } = path;
  return t.isStringLiteral(name) && name.value[0] === "@";
}

export function isTransparentTag(path: TagPath): path is StaticTagPath {
  const {
    node: { name },
  } = path;
  return t.isStringLiteral(name) && TRANSPARENT_TAGS.has(name.value);
}

export function registerMacro(path: t.NodePath, name: string) {
  const { file } = path.hub;
  const markoMeta = file.metadata.marko as MacroMeta;
  const macroNames = markoMeta[MACRO_NAMES_KEY];

  if (macroNames) {
    if (macroNames[name]) {
      diagnosticWarn(path, {
        label: `A macro with the name "${name}" already exists.`,
        fix() {
          findParentTag(path)!.remove();
        },
      });
    }
    macroNames[name] = true;
  } else {
    markoMeta[MACRO_NAMES_KEY] = { [name]: true };
  }
}

export function hasMacro(path: t.NodePath, name: string) {
  const macroNames = (path.hub.file.metadata.marko as MacroMeta)[
    MACRO_NAMES_KEY
  ];
  return !!(macroNames && macroNames[name]);
}

export function isMacroTag(path: TagPath): path is StaticTagPath {
  const { name } = path.node;
  return t.isStringLiteral(name) && hasMacro(path, name.value);
}

export function getMacroIdentifierForName(path: t.NodePath, name: string) {
  const file = path.hub.file as CompileFile;

  if (file.___compileStage !== "translate") {
    throw new Error(
      "getMacroIdentifierForName can only be called during the translate phase of the compiler.",
    );
  }

  const markoMeta = file.metadata.marko as MacroMeta;
  let macroIds = markoMeta[MACRO_IDS_KEY];

  if (!macroIds) {
    macroIds = markoMeta[MACRO_IDS_KEY] = {} as Record<string, string>;

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

export function getMacroIdentifier(path: TagPath) {
  const file = path.hub.file as CompileFile;

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

export function getTagTemplate(tag: TagPath) {
  const { file } = tag.hub;
  const node = tag.node as TagNode;

  if (node.extra?.tagNameImported) {
    return join(file.opts.filename, node.extra.tagNameImported);
  }
  return getTagDef(tag)?.template;
}

export function getTagDef(path: TagPath): TagDefinition | null {
  const { file } = path.hub;
  const node = path.node as TagNode;
  const { name } = node;

  if (node.tagDef === undefined) {
    if (!t.isStringLiteral(name) || isMacroTag(path)) {
      node.tagDef = null;
    } else {
      node.tagDef =
        getTagDefForTagName(
          file,
          isAttributeTag(path) ? getFullyResolvedTagName(path) : name.value,
        ) || null;
    }
  }

  return node.tagDef;
}

export function getFullyResolvedTagName(path: TagPath) {
  const parts: string[] = [];
  let next: TagPath | undefined = path;
  do {
    path = next;
    const { name } = path.node;

    if (isAttributeTag(path)) {
      parts.push(path.node.name.value.slice(1));
    } else {
      // A dynamic tag's name is unknown, so its attribute tags resolve
      // against the nested tags of `*`'s definition.
      parts.push((name.type === "StringLiteral" && name.value) || "*");
      break;
    }
  } while ((next = findParentTag(path)));

  return parts.reverse().join(":");
}

export function findParentTag(path: t.NodePath): TagPath | undefined {
  let cur = path.parentPath!;

  while (cur.node) {
    if (cur.isMarkoTagBody()) {
      cur = cur.parentPath!;
      continue;
    }

    if (!cur.isMarkoTag()) {
      break;
    }

    if (isTransparentTag(cur)) {
      cur = cur.parentPath!;
      continue;
    }

    return cur;
  }
}

export function findAttributeTags(
  path: TagPath,
  attributeTags: TagPath[] = [],
): TagPath[] {
  // A tag body that holds attribute tags (`body.attributeTags`) lists them in its body.
  const attrTags = (
    path.node.body.attributeTags
      ? path.get("body").get("body")
      : path.get("attributeTags")
  ) as TagPath[];
  attrTags.forEach((child) => {
    if (isAttributeTag(child)) {
      attributeTags.push(child);
    } else if (isTransparentTag(child)) {
      findAttributeTags(child, attributeTags);
    }
  });

  return attributeTags;
}

export function getArgOrSequence(
  path: t.NodePath<t.MarkoTag | t.MarkoAttribute>,
) {
  const {
    node: { arguments: args },
  } = path;
  const len = args && args.length;

  if (len) {
    if (len > 1) {
      return t.sequenceExpression(args as t.Expression[]);
    } else {
      return args![0] as t.Expression;
    }
  }
}

export function isLoopTag(path: t.NodePath): path is StaticTagPath {
  if (!path.isMarkoTag()) {
    return false;
  }

  const { name } = path.node;
  return (
    name.type === "StringLiteral" &&
    (name.value === "while" || name.value === "for")
  );
}

export function loadFileForTag(tag: TagPath) {
  const { file } = tag.hub;
  const node = tag.node as TagNode;
  if (node.extra?.tagNameImported) {
    return loadFileForImport(file, node.extra.tagNameImported);
  }

  const def = getTagDef(tag);
  const filename = def && def.template;

  if (filename) {
    return resolveMarkoFile(file, filename);
  }
}

export function loadFileForImport(file: t.BabelFile, request: string) {
  const relativeRequest = resolveTagImport(file.path, request);
  if (relativeRequest) {
    let filename;
    if (relativeRequest[0] === ".") {
      filename = resolve(file.opts.filename, "..", relativeRequest);
    } else {
      // A package's template, through the file system the compile reads.
      filename = resolveImport(
        file.markoOpts.fileSystem,
        dirname(file.opts.filename),
        relativeRequest,
      );
      if (!filename) {
        throw new Error(
          `Cannot find module '${relativeRequest}' from '${file.opts.filename}'`,
        );
      }
    }
    return resolveMarkoFile(file, filename);
  }
}

function resolveMarkoFile(
  markoFile: t.BabelFile,
  filename: string,
): CompileFile | undefined {
  const file = markoFile as CompileFile;
  if (filename === file.opts.filename) {
    if (file.___compileStage === "analyze") {
      return file;
    }

    return file.___getMarkoFile(file.code, file.opts, file.markoOpts);
  }

  // Analysis keeps references into each template it read, so later loads,
  // translate's included, get that same template rather than a newer cache entry.
  const loadedFile = file.___loadedFiles.get(filename);
  if (loadedFile) return loadedFile;

  try {
    const childFile = file.___getMarkoFile(
      file.markoOpts.fileSystem.readFileSync(filename).toString("utf-8"),
      createNewFileOpts(file.opts, filename),
      file.markoOpts,
    );

    file.___loadedFiles.set(filename, childFile);
    // A `Set` while compiling; the compile result lists it.
    ((file.metadata.marko as { analyzedTags?: Set<string> }).analyzedTags ||=
      new Set()).add(filename);
    return childFile;
  } catch (err) {
    // A file that exists but fails to compile is not a missing tag, so only a
    // genuinely absent file is swallowed; the child's error surfaces instead.
    const code = (err as NodeJS.ErrnoException | null | undefined)?.code;
    if (code !== "ENOENT" && code !== "ENOTDIR") throw err;
  }
}

const idCache = new WeakMap<
  string[],
  Map<string, { id: string; children: Map<string, number> }>
>();
// Percent-encode only what is unsafe in string, URL or filesystem contexts;
// `%` always encodes so the encoding stays reversible (custom ids too).
const unsafeTemplateIdCharReg = /[\u0000-\u0020\u007f-\uffff"%\\`<>;,]/g;
const normalizeTemplateId = (id: string) =>
  id.replace(
    unsafeTemplateIdCharReg,
    (ch) => "%" + ch.charCodeAt(0).toString(16),
  );
export function getTemplateId(
  opts: Config | boolean,
  request: string,
  child?: string,
) {
  // Callers that predate the config pass `optimize` alone, and a boolean has
  // none of the config's fields.
  const config = opts as Config;
  if (!child && config.getTemplateId) {
    return normalizeTemplateId(config.getTemplateId(request));
  }

  const id = normalizeTemplateId(relative(root, request));

  if (config.optimize) {
    const { optimizeKnownTemplates } = config;
    const knownTemplatesSize = optimizeKnownTemplates?.length || 0;
    if (knownTemplatesSize) {
      let lookup = idCache.get(optimizeKnownTemplates!);
      if (!lookup) {
        lookup = new Map();
        idCache.set(optimizeKnownTemplates!, lookup);
        for (let i = 0; i < knownTemplatesSize; i++) {
          lookup.set(optimizeKnownTemplates![i], {
            id: encodeTemplateId(i, 54),
            children: new Map(),
          });
        }
      }
      let registered = lookup.get(request);
      if (registered) {
        if (child) {
          // Numbered in request order, so the html and dom compiles must share
          // one `optimizeKnownTemplates` array (as `@marko/vite` does) to agree.
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

export function resolveTagImport(path: t.NodePath, request: string) {
  const {
    hub: { file },
  } = path;
  if (request[0] === "<") {
    const tagName = request.slice(1, -1);
    const tagDef = getTagDefForTagName(file, tagName);
    const tagEntry = tagDef && (tagDef.renderer || tagDef.template);
    const relativePath =
      tagEntry && resolveRelativePath(file, tagEntry, tagDef);

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

function createNewFileOpts(opts: FileOpts, filename: string) {
  const sourceFileName = basename(filename);
  const sourceRoot = dirname(filename) + sep;
  const filenameRelative = relative(cwd, filename);
  return {
    ...opts,
    filename,
    sourceRoot,
    sourceFileName,
    filenameRelative,
    generatorOpts: {
      ...opts.generatorOpts,
      filename,
      sourceRoot,
      sourceFileName,
    },
  };
}

function encodeTemplateId(id: number, base = 64) {
  const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
  let n = id;
  let r = c[n % 53]; // Avoids chars that cannot start a property name and _ (reserved).
  n = Math.floor(n / 53);

  // At most 7 characters. Known template ids pass base 54 (no digits), so one
  // plus a decimal child index never equals another id.
  for (let i = 6; n > 0 && i--; n = Math.floor(n / base)) {
    r += c[n % base];
  }

  return r;
}
