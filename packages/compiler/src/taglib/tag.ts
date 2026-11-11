import nodePath from "path";

import type { types as t } from "@marko/compiler";
import type {
  AttributeDefinition,
  ParsePlugin,
  Plugin,
  TagDefinition,
} from "@marko/compiler/babel-utils";
import markoModules from "@marko/compiler/modules";
import { type ResolveOptions, resolveSync } from "resolve-sync";

import { exists, type FileSystem, isFile, realpath } from "../util/fs";
import { isProps, type Props } from "./json";
import type { Taglib } from "./taglib";

/** A definition with every key present, even when unset. */
type Complete<T> = { [K in keyof Required<T>]: T[K] };
type Tag = Complete<TagDefinition>;
type Attribute = Complete<AttributeDefinition>;

/** A compiler plugin, with the path it is required from when it has one. */
interface Hook<H> {
  path?: string;
  hook: H;
}

/**
 * Builds a tag definition from its props, resolving paths from the directory
 * of `filePath`; attributes and nested tags are read only with `classTaglibs`.
 */
export function loadTag(
  name: string,
  props: Props,
  taglib: Taglib,
  filePath: string,
): Tag {
  const tag = createTag(name, filePath, taglib);
  const dirname = nodePath.dirname(filePath);

  for (const key in props) {
    const value = props[key];

    if (key[0] === "@" || key[0] === "<") {
      if (taglib.classTaglibs) addShorthand(tag, key, value, taglib);
      continue;
    }

    switch (propName(key, taglib)) {
      case "name":
        tag.name = value as string;
        break;
      case "template":
        tag.template = resolveTemplate(taglib.fs, dirname, value as string);
        break;
      case "renderer":
        tag.renderer = resolveRenderer(taglib.fs, dirname, value as string);
        // A `.marko` renderer is the tag's template too.
        if (tag.renderer.endsWith(".marko")) tag.template ||= tag.renderer;
        break;
      case "types": {
        const types = value as string;
        tag.types = types[0] === "." ? nodePath.resolve(dirname, types) : types;
        break;
      }
      case "html":
        tag.html = value === true;
        break;
      case "htmlType":
        tag.htmlType = value as Tag["htmlType"];
        break;
      case "parseOptions":
        tag.parseOptions = value as Tag["parseOptions"];
        break;
      case "parse":
        tag.parser = toHook<ParsePlugin<t.MarkoTag>>(dirname, value);
        break;
      case "migrate":
        tag.migrators = addHooks(tag.migrators, dirname, value);
        break;
      case "transform":
        tag.transformers = addHooks(tag.transformers, dirname, value);
        break;
      case "analyze":
        tag.analyzer = toHook<Plugin<t.MarkoTag>>(dirname, value);
        break;
      case "translate":
        tag.translator = toHook<Plugin<t.MarkoTag>>(dirname, value);
        break;
      case "attributes": {
        const attrs = value as Props;
        for (const attrName in attrs) {
          addAttribute(tag, attrName, attrs[attrName]);
        }
        break;
      }
      case "nestedTags": {
        const nestedTags = value as Props;
        for (const nestedName in nestedTags) {
          const nestedTag = loadNestedTag(
            nestedName,
            nestedTags[nestedName],
            tag,
            taglib,
          );
          addNestedTag(tag, nestedTag);
          addAttribute(tag, nestedTag.targetProperty!, undefined);
        }
        break;
      }
      case "isRepeated":
        tag.isRepeated = value as boolean;
        break;
      case "targetProperty":
        tag.targetProperty = value as string;
        break;
    }
  }

  return tag;
}

/** A tag rendered by a template file, with nothing else to read. */
export function createTemplateTag(
  name: string,
  template: string,
  filePath: string,
  taglib: Taglib,
): Tag {
  const tag = createTag(name, filePath, taglib);
  tag.template = template;
  return tag;
}

/** Whether a tag is defined (and so replaces one further away) rather than extended. */
export function definesTag(tag: TagDefinition) {
  return !!(tag.template || tag.renderer || tag.html);
}

/**
 * Extends a tag with another taglib's definition of the same name: migrators and
 * transformers accumulate, objects merge by key and anything else the extension sets wins.
 */
export function mergeTag(base: TagDefinition, ext: TagDefinition): Tag {
  const tag = new TagDef(
    ext.name,
    ext.filePath,
    ext.taglibId,
    ext.packageName ?? base.packageName,
    ext.packageRoot ?? base.packageRoot,
  );
  tag.template = ext.template ?? base.template;
  tag.renderer = ext.renderer ?? base.renderer;
  tag.types = ext.types ?? base.types;
  tag.html = ext.html ?? base.html;
  tag.htmlType = ext.htmlType ?? base.htmlType;
  tag.parseOptions = mergeObjects(base.parseOptions, ext.parseOptions);
  tag.parser = ext.parser ?? base.parser;
  tag.migrators = concat(base.migrators, ext.migrators);
  tag.transformers = concat(base.transformers, ext.transformers);
  tag.analyzer = ext.analyzer ?? base.analyzer;
  tag.translator = ext.translator ?? base.translator;
  tag.attributes = mergeObjects(base.attributes, ext.attributes);
  tag.patternAttributes = concat(base.patternAttributes, ext.patternAttributes);
  tag.nestedTags = mergeObjects(base.nestedTags, ext.nestedTags);
  tag.isNestedTag = ext.isNestedTag ?? base.isNestedTag;
  tag.isRepeated = ext.isRepeated ?? base.isRepeated;
  tag.targetProperty = ext.targetProperty ?? base.targetProperty;
  return tag;
}

// Only what changes the class API's output: how the attribute maps onto the
// tag's input, and its default. A declared attribute stays out of a `*` one.
export function createAttribute(name: string): Attribute {
  return {
    name,
    dynamicAttribute: name === "*",
    targetProperty: undefined,
    preserveName: undefined,
    removeDashes: undefined,
    defaultValue: undefined,
    pattern: undefined,
  };
}

/** A plugin hook, required from its path on first use. */
export function toHook<H>(dirname: string, value: unknown): Hook<H> {
  if (typeof value === "string") {
    const path =
      value[0] === "."
        ? markoModules.tryResolve(value, dirname) || value
        : value;
    return {
      path,
      get hook() {
        return markoModules.require(path) as H;
      },
    };
  }

  return { hook: value as H };
}

export function addHooks<H>(
  hooks: Hook<H>[] | undefined,
  dirname: string,
  value: unknown,
) {
  if (Array.isArray(value)) {
    for (const item of value) hooks = addHooks(hooks, dirname, item);
  } else {
    (hooks ||= []).push(toHook(dirname, value));
  }
  return hooks;
}

// Older hook names, still read as the current ones.
const hookAliases = new Map([
  ["nodeFactory", "parse"],
  ["migrator", "migrate"],
  ["transformer", "transform"],
  ["codeGenerator", "translate"],
]);
// Props only the class API reads.
const classProps = new Set(["renderer", "attributes", "nestedTags"]);

/** A prop's camel cased name, or `undefined` for a class API prop it ignores. */
export function propName(key: string, taglib: Taglib) {
  const name = camelCase(key);
  return (
    hookAliases.get(name) ||
    (taglib.classTaglibs || !classProps.has(name) ? name : undefined)
  );
}

// Any attribute, which a tag declaring none accepts.
const anyAttribute = createAttribute("*");
const anyAttributes: Record<string, AttributeDefinition> = {
  "*": anyAttribute,
};

// Its methods serve class API translators released up to Marko 5.39; on the
// prototype, they cost a tag nothing.
class TagDef implements Tag {
  // Every key, in one order, so all tags share one shape.
  name: Tag["name"];
  filePath: Tag["filePath"];
  taglibId: Tag["taglibId"];
  packageName: Tag["packageName"];
  packageRoot: Tag["packageRoot"];
  template: Tag["template"];
  renderer: Tag["renderer"];
  types: Tag["types"];
  html: Tag["html"];
  htmlType: Tag["htmlType"];
  parseOptions: Tag["parseOptions"];
  parser: Tag["parser"];
  migrators: Tag["migrators"];
  transformers: Tag["transformers"];
  analyzer: Tag["analyzer"];
  translator: Tag["translator"];
  attributes: Tag["attributes"];
  patternAttributes: Tag["patternAttributes"];
  nestedTags: Tag["nestedTags"];
  isNestedTag: Tag["isNestedTag"];
  isRepeated: Tag["isRepeated"];
  targetProperty: Tag["targetProperty"];

  constructor(
    name: string,
    filePath: string,
    taglibId: string,
    packageName: string | undefined,
    packageRoot: string | undefined,
  ) {
    this.name = name;
    this.filePath = filePath;
    this.taglibId = taglibId;
    this.packageName = packageName;
    this.packageRoot = packageRoot;
  }

  getAttribute(name: string) {
    const { attributes, patternAttributes } = this;
    if (!attributes && !patternAttributes) return anyAttribute;
    const attr = attributes && (attributes[name] || attributes["*"]);
    if (attr || !patternAttributes) return attr;
    for (const patternAttr of patternAttributes) {
      if (patternAttr.pattern!.test(name)) return patternAttr;
    }
  }

  forEachAttribute(fn: (attr: AttributeDefinition) => void) {
    const attributes =
      this.attributes || (this.patternAttributes ? undefined : anyAttributes);
    for (const name in attributes) fn(attributes[name]);
  }
}

type ResolveFS = NonNullable<ResolveOptions["fs"]>;
// Each file system as resolve-sync reads it, reused by every renderer it resolves.
const resolveFileSystems = new WeakMap<FileSystem, ResolveFS>();
const mainField = ["main"];
const defaultExtensions = { ".js": 0, ".json": 0 };
const dashedChar = /-([a-z])/g;
const whitespace = /\s+/;
const wildcardParts = /[*?]|[^*?]+/g;
const regExpChars = /[.+^${}()|[\]\\]/g;

function camelCase(key: string) {
  return key.includes("-") ? key.replace(dashedChar, upperCaseChar) : key;
}

function upperCaseChar(_: string, char: string) {
  return char.toUpperCase();
}

function createTag(name: string, filePath: string, taglib: Taglib): Tag {
  return new TagDef(
    name,
    filePath,
    taglib.id,
    taglib.packageName,
    taglib.packageRoot,
  );
}

// `"@items <item>[]"` declares any mix of attributes and nested tags at once,
// the nested tags targeting the first attribute's name.
function addShorthand(tag: Tag, key: string, value: unknown, taglib: Taglib) {
  const parts = key.split(whitespace);
  const props = isProps(value) ? value : {};
  const targetProperty = parts[0][0] === "@" ? parts[0].slice(1) : undefined;

  for (const part of parts) {
    if (part[0] === "@") {
      addAttribute(tag, part.slice(1), props);
    } else if (part[0] === "<") {
      const isRepeated = part.endsWith("[]");
      const nestedTag = loadNestedTag(
        part.slice(1, isRepeated ? -3 : -1),
        props,
        tag,
        taglib,
      );
      nestedTag.isRepeated ||= isRepeated;
      nestedTag.targetProperty ||= targetProperty;
      addNestedTag(tag, nestedTag);
      // A nested tag set once can be passed as an attribute of its target too.
      const target = nestedTag.targetProperty!;
      if (!nestedTag.isRepeated && !tag.attributes?.[target]) {
        addAttribute(tag, target, undefined);
      }
    }
  }
}

function loadNestedTag(
  name: string,
  props: unknown,
  parent: Tag,
  taglib: Taglib,
) {
  const nestedTag = loadTag(
    name,
    isProps(props) ? props : {},
    taglib,
    parent.filePath,
  );
  nestedTag.name = name;
  return nestedTag;
}

function addNestedTag(tag: Tag, nestedTag: Tag) {
  (tag.nestedTags ||= {})[nestedTag.name] = Object.assign(nestedTag, {
    isNestedTag: true as const,
    targetProperty: nestedTag.targetProperty || nestedTag.name,
  });
}

function addAttribute(tag: Tag, name: string, props: unknown) {
  const attr = createAttribute(name);

  if (isProps(props)) {
    for (const key in props) {
      const value = props[key];
      switch (camelCase(key)) {
        case "targetProperty":
          attr.targetProperty = value as string;
          break;
        case "preserveName":
          attr.preserveName = value as boolean;
          break;
        case "removeDashes":
          attr.removeDashes = value === true;
          break;
        case "defaultValue":
          attr.defaultValue = value;
          break;
        case "pattern":
          if (value === true) attr.pattern = wildcardRegExp(name);
          break;
      }
    }
  }

  if (attr.pattern) {
    (tag.patternAttributes ||= []).push(attr);
  } else {
    (tag.attributes ||= {})[name] = attr;
  }
}

// `*` matches any run of characters and `?` at most one; the rest is literal.
function wildcardRegExp(pattern: string) {
  return new RegExp(`^${pattern.replace(wildcardParts, wildcardPart)}$`);
}

function wildcardPart(part: string) {
  return part === "*"
    ? ".*?"
    : part === "?"
      ? ".?"
      : part.replace(regExpChars, "\\$&");
}

function concat<T>(base: T[] | undefined, ext: T[] | undefined) {
  return base && ext ? base.concat(ext) : base || ext;
}

function mergeObjects<T extends object>(
  base: T | undefined,
  ext: T | undefined,
) {
  return base && ext ? { ...base, ...ext } : base || ext;
}

function resolveTemplate(fs: FileSystem, dirname: string, value: string) {
  const path = nodePath.resolve(dirname, value);
  if (!exists(fs, path)) {
    throw new Error(`Template at path "${path}" does not exist.`);
  }
  return path;
}

// A relative renderer resolves through the compile's file system, trying the
// extensions `require` loads, then `.marko`.
function resolveRenderer(fs: FileSystem, dirname: string, value: string) {
  if (value[0] !== ".") return value;

  let resolveFS = resolveFileSystems.get(fs);
  if (!resolveFS) resolveFileSystems.set(fs, (resolveFS = toResolveFS(fs)));
  return (
    resolveSync(value, {
      from: nodePath.join(realpath(fs, dirname), "_"),
      exts: requireExtensions(),
      fields: mainField,
      silent: true,
      fs: resolveFS,
    }) || value
  );
}

function toResolveFS(fs: FileSystem): ResolveFS {
  return {
    isFile: (file) => isFile(fs, file),
    readPkg: (file) => {
      try {
        return JSON.parse(fs.readFileSync(file, "utf8"));
      } catch {
        return undefined;
      }
    },
    realpath: (file) => realpath(fs, file),
  };
}

// Read each time, since more can be registered.
function requireExtensions() {
  const { extensions = defaultExtensions } =
    markoModules.require as typeof markoModules.require & {
      extensions?: Record<string, unknown>;
    };
  const exts = Object.keys(extensions);
  if (!(".marko" in extensions)) exts.push(".marko");
  return exts;
}
