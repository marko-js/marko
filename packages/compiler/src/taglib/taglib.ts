import nodePath from "path";

import type { types as t } from "@marko/compiler";
import type {
  PluginDefinition,
  TagDefinition,
} from "@marko/compiler/babel-utils";
import { resolveSync } from "resolve-sync";

import { exists, type FileSystem, isDirectory } from "../util/fs";
import { mainField, resolveFrom, resolveFS } from "../util/resolve";
import { isProps, type Props, readJSON } from "./json";
import { addHooks, createTemplateTag, loadTag, propName, toHook } from "./tag";

/** A taglib as a translator or `register` provides it. */
export type TaglibEntry = [id: string, props: Props];

export interface Taglib {
  /** The file system its tags are read through. */
  fs: FileSystem;
  id: string;
  filePath: string;
  dirname: string;
  packageName: string | undefined;
  packageRoot: string | undefined;
  classTaglibs: boolean;
  /** Its `tags-dir`, `undefined` when it leaves tag discovery for its directory on. */
  tagsDir: string | string[] | false | null | undefined;
  /** For a discovered tags dir, the name it was discovered by. */
  discoveryDir: string | undefined;
  /** Where its tags are found, in search order. */
  sources: TagSource[];
  migrators: PluginDefinition<t.Program>[] | undefined;
  transformers: PluginDefinition<t.Program>[] | undefined;
  translators: PluginDefinition<t.Program>[] | undefined;
  /** The taglibs its `taglib-imports` name, theirs included, in import order. */
  imports: Taglib[] | undefined;
}

/** Tags found by name. */
export interface TagSource {
  get(name: string): TagDefinition | undefined;
  names(): Iterable<string>;
}

const inNodeModules = /[\\/]node_modules[\\/]/;

/**
 * Reads a taglib from its props. Its sources are its `<tag>` entries, then its
 * tags dirs, the last declared first.
 */
export function loadTaglib(
  filePath: string,
  props: Props,
  options: {
    fs: FileSystem;
    classTaglibs: boolean;
    /** For an installed package, the name it is installed as. */
    packageName?: string;
    /** The package's root, when not the taglib's own directory. */
    packageRoot?: string;
    /** Installed, though not under `node_modules` (eg a linked workspace). */
    isInstalled?: boolean;
  },
  // Taglib files already imported, so mutual imports end.
  imported?: Set<string>,
): Taglib {
  const dirname = nodePath.dirname(filePath);
  const taglib: Taglib = {
    fs: options.fs,
    id: filePath,
    filePath,
    dirname,
    packageName: options.packageName,
    packageRoot: options.packageName
      ? options.packageRoot || dirname
      : undefined,
    classTaglibs: options.classTaglibs,
    tagsDir: undefined,
    discoveryDir: undefined,
    sources: [],
    migrators: undefined,
    transformers: undefined,
    translators: undefined,
    imports: undefined,
  };
  let entries: TagEntries | undefined;
  let importSpecs: unknown[] | undefined;
  const tagsDirs: string[] = [];

  for (const key in props) {
    const value = props[key];

    if (key[0] === "<") {
      (entries ||= new TagEntries(taglib)).add(key.slice(1, -1), value);
      continue;
    }

    switch (propName(key, taglib)) {
      case "tags": {
        const tags = value as Props;
        for (const name in tags) {
          (entries ||= new TagEntries(taglib)).add(name, tags[name]);
        }
        break;
      }
      case "tagsDir": {
        const tagsDir = value as Taglib["tagsDir"];
        taglib.tagsDir = tagsDir;
        if (tagsDir != null && tagsDir !== false) {
          for (const dir of Array.isArray(tagsDir) ? tagsDir : [tagsDir]) {
            tagsDirs.push(resolveTagsDir(taglib, dir));
          }
        }
        break;
      }
      case "exports":
        if (options.isInstalled || inNodeModules.test(filePath)) {
          taglib.tagsDir = false;
          tagsDirs.push(resolveTagsDir(taglib, value as string));
        }
        break;
      case "migrate":
        taglib.migrators = addHooks(taglib.migrators, dirname, value);
        break;
      case "transform":
        taglib.transformers = addHooks(taglib.transformers, dirname, value);
        break;
      case "translate":
        taglib.translators = [toHook(dirname, value)];
        break;
      case "taglibId":
        taglib.id = (value as string) || filePath;
        break;
      case "taglibImports":
        importSpecs = value as unknown[];
        break;
    }
  }

  if (entries) taglib.sources.push(entries);
  for (let i = tagsDirs.length; i--;) {
    taglib.sources.push(new TagsDir(tagsDirs[i], taglib));
  }
  if (importSpecs) {
    taglib.imports = loadImports(
      taglib,
      importSpecs,
      imported || new Set([filePath]),
    );
  }

  return taglib;
}

/** A tags dir found by its name (eg `tags`) beside a template's directories. */
export function discoveredTaglib(
  fs: FileSystem,
  classTaglibs: boolean,
  path: string,
  name: string,
): Taglib {
  const taglib: Taglib = {
    fs,
    id: path,
    filePath: path,
    dirname: nodePath.dirname(path),
    packageName: undefined,
    packageRoot: undefined,
    // A discovered `tags` dir only holds Tags API templates (see the interop's
    // `isTagsAPI`), so class API rules never apply to it.
    classTaglibs: classTaglibs && name !== "tags",
    tagsDir: undefined,
    discoveryDir: name,
    sources: [],
    migrators: undefined,
    transformers: undefined,
    translators: undefined,
    imports: undefined,
  };
  taglib.sources.push(new TagsDir(path, taglib));
  return taglib;
}

/** A taglib's `<tag>` entries, each read into a definition on first use. */
export class TagEntries implements TagSource {
  #taglib: Taglib;
  #props = new Map<string, unknown>();
  #tags = new Map<string, TagDefinition>();

  constructor(taglib: Taglib) {
    this.#taglib = taglib;
  }

  add(name: string, value: unknown) {
    // A `name` prop renames the tag, so it is found by that name.
    this.#props.set(
      isProps(value) && typeof value.name === "string" && value.name
        ? value.name
        : name,
      value,
    );
  }

  get(name: string) {
    let tag = this.#tags.get(name);
    if (tag === undefined) {
      const value = this.#props.get(name);
      if (value === undefined) return;
      tag = loadEntry(name, value, this.#taglib);
      this.#tags.set(name, tag);
    }
    return tag;
  }

  names() {
    return this.#props.keys();
  }
}

/**
 * Tags as `<name>.marko` files or tag directories, other directories grouping
 * more one level down; all read on first use.
 */
export class TagsDir implements TagSource {
  #path: string;
  #taglib: Taglib;
  #tags: Map<string, TagDefinition | BrokenDir> | undefined;

  constructor(path: string, taglib: Taglib) {
    this.#path = path;
    this.#taglib = taglib;
  }

  get(name: string): TagDefinition | undefined {
    const tag = (this.#tags ||= this.#load()).get(name);
    if (tag instanceof BrokenDir) throw tag.error;
    return tag;
  }

  *names() {
    for (const [name, tag] of (this.#tags ||= this.#load())) {
      if (!(tag instanceof BrokenDir)) yield name;
    }
  }

  #load() {
    const tags = new Map<string, TagDefinition | BrokenDir>();
    let entries: string[];
    try {
      // Listed without options, as file systems adding virtual files expect.
      entries = this.#taglib.fs.readdirSync(this.#path);
    } catch (err) {
      // Removed since it was found; it stays empty until the caches are cleared.
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
      return tags;
    }

    const groups: Listed[] = [];
    this.#addLevel(tags, [{ path: this.#path, entries }], groups);
    if (groups.length) this.#addLevel(tags, groups, undefined);
    return tags;
  }

  // Adds the tags one level down, each tag's own file winning over a directory
  // of the same name at its level, and a level above winning over both. At the
  // top level, other directories are groups to read next.
  #addLevel(
    tags: Map<string, TagDefinition | BrokenDir>,
    level: Listed[],
    groups: Listed[] | undefined,
  ) {
    const dirs: string[] = [];
    for (const { path: dir, entries: listed } of level) {
      let entries = listed;
      if (!entries) {
        try {
          entries = this.#taglib.fs.readdirSync(dir);
        } catch {
          // An unreadable group holds no tags anyone could name.
          continue;
        }
      }

      for (const name of entries) {
        if (name[0] === "." || name === "node_modules") continue;
        const path = nodePath.join(dir, name);
        if (name.endsWith(".marko")) {
          // A class API entry left in a grouped folder would shadow `<template>`.
          if (!groups && name === "template.marko") continue;
          const tagName = name.slice(0, -6);
          if (!tags.has(tagName)) {
            tags.set(
              tagName,
              createTemplateTag(tagName, path, this.#path, this.#taglib),
            );
          }
        } else {
          dirs.push(name, path);
        }
      }
    }

    for (let i = 0; i < dirs.length; i += 2) {
      const name = dirs[i];
      const path = dirs[i + 1];
      if (tags.has(name) || !isDirectory(this.#taglib.fs, path)) continue;

      let entries: string[] | undefined;
      let tag: TagDefinition | undefined;
      try {
        if (this.#taglib.classTaglibs) {
          entries = this.#taglib.fs.readdirSync(path);
          tag = loadClassTagDir(name, path, entries, this.#taglib);
        } else {
          tag = loadTagDir(name, path, this.#taglib);
        }
      } catch (err) {
        tags.set(name, new BrokenDir(err));
        continue;
      }

      if (tag) {
        // Under its own name, or the one its `marko-tag.json` gives it, which
        // a tag's own file keeps.
        if (!tags.has(tag.name)) tags.set(tag.name, tag);
      } else if (groups && name !== "tags" && name !== "components") {
        // `tags` and `components` folders stay private to their location.
        groups.push({ path, entries });
      }
    }
  }
}

// A directory, with its entries if already listed.
interface Listed {
  path: string;
  entries: string[] | undefined;
}

// A tag directory that failed to load, reported only when its tag is used.
class BrokenDir {
  readonly error: unknown;

  constructor(error: unknown) {
    this.error = error;
  }
}

// Each `taglib-imports` entry is a taglib file resolved from the importer.
function loadImports(taglib: Taglib, specs: unknown[], imported: Set<string>) {
  const imports: Taglib[] = [];
  const add = (path: string) => {
    if (imported.has(path)) return;
    imported.add(path);
    // An import inside the importing package is read as part of that package.
    const inherit =
      taglib.packageRoot !== undefined &&
      isWithin(taglib.packageRoot, nodePath.dirname(path));
    const importedTaglib = loadTaglib(
      path,
      readJSON(taglib.fs, path),
      {
        fs: taglib.fs,
        classTaglibs: taglib.classTaglibs,
        packageName: inherit ? taglib.packageName : undefined,
        packageRoot: inherit ? taglib.packageRoot : undefined,
      },
      imported,
    );
    imports.push(importedTaglib);
    if (importedTaglib.imports) {
      for (const nested of importedTaglib.imports) imports.push(nested);
    }
  };

  for (const spec of specs) {
    if (typeof spec !== "string") continue;
    // As `require` resolves it, through the file system the taglib is read by.
    const path = resolveSync(spec, {
      from: resolveFrom(taglib.fs, taglib.dirname),
      require: true,
      fields: mainField,
      silent: true,
      fs: resolveFS(taglib.fs),
    });
    if (!path) {
      throw new Error(`Import not found: ${spec} (from ${taglib.dirname})`);
    }

    if (nodePath.basename(path) === "package.json") {
      throw new Error(
        `taglib-imports no longer takes a package.json: list each dependency's marko.json instead (${spec} from ${taglib.dirname})`,
      );
    }
    add(path);
  }

  return imports;
}

function isWithin(dir: string, path: string) {
  const rel = nodePath.relative(dir, path);
  return !rel.startsWith("..") && !nodePath.isAbsolute(rel);
}

function resolveTagsDir(taglib: Taglib, dir: unknown) {
  if (typeof dir !== "string") {
    throw new Error(
      `A tags directory must be a path; the { path, prefix } form is no longer supported. (${taglib.filePath})`,
    );
  }
  const path = nodePath.resolve(taglib.dirname, dir);
  if (!isDirectory(taglib.fs, path)) {
    throw new Error(
      `The tags directory "${path}" does not exist. (${taglib.filePath})`,
    );
  }
  return path;
}

function loadEntry(name: string, value: unknown, taglib: Taglib) {
  if (typeof value === "string") {
    const filePath = nodePath.resolve(taglib.dirname, value);
    if (!exists(taglib.fs, filePath)) {
      throw new Error(
        `Tag at path "${filePath}" does not exist. (${taglib.filePath})`,
      );
    }
    const props = readJSON(taglib.fs, filePath);
    // Found by its key before its file is read, so it keeps that name.
    delete props.name;
    return loadTag(name, props, taglib, filePath);
  }

  return loadTag(name, value as Props, taglib, taglib.filePath);
}

// The `marko-tag.json` keys that give a tag directory its entry, kept as
// released (so not `migrator`); a renderer is the class API's.
const entryKeys = new Set([
  "template",
  "migrate",
  "transform",
  "transformer",
  "code-generator",
  "translate",
  "node-factory",
  "parse",
]);
const classEntryKeys = new Set([...entryKeys, "renderer"]);
// The class API's entry files, in search order.
const classEntryFiles = [
  { name: "index.marko", type: "template" },
  { name: "renderer", type: "renderer" },
  { name: "index", type: "renderer" },
  { name: "template.marko", type: "template" },
  { name: "migrate", type: "migrate" },
  { name: "code-generator", type: "translate" },
  { name: "translate", type: "translate" },
  { name: "node-factory", type: "parse" },
  { name: "parse", type: "parse" },
  { name: "transformer", type: "transform" },
  { name: "transform", type: "transform" },
];

// A tag directory's marko-tag.json and template, checked without listing it; a
// marko-tag.json without an entry still names a tag, reported where it is used.
function loadTagDir(name: string, dir: string, taglib: Taglib) {
  const tagJsonPath = nodePath.join(dir, "marko-tag.json");

  if (exists(taglib.fs, tagJsonPath)) {
    const props = readJSON(taglib.fs, tagJsonPath);
    if (!hasEntry(props, taglib)) {
      const template = findTemplate(taglib.fs, name, dir);
      if (template) props.template = template;
    }
    return loadTag(name, props, taglib, tagJsonPath);
  }

  const template = findTemplate(taglib.fs, name, dir);
  if (template) return createTemplateTag(name, template, dir, taglib);
}

// Its `index.marko`, or else the file named for it, so the directory's other
// files stay private to it.
function findTemplate(fs: FileSystem, name: string, dir: string) {
  const indexPath = nodePath.join(dir, "index.marko");
  if (exists(fs, indexPath)) return indexPath;
  const namedPath = nodePath.join(dir, name + ".marko");
  if (exists(fs, namedPath)) return namedPath;
}

// The class API's tag directory, whose entry may be any of several files.
function loadClassTagDir(
  name: string,
  dir: string,
  entries: string[],
  taglib: Taglib,
) {
  // A file by its full name, or by its name without the extension.
  const files = new Map<string, string>();
  for (const entry of entries) {
    const path = nodePath.join(dir, entry);
    const ext = nodePath.extname(entry);
    files.set(entry, path);
    if (ext) {
      const base = entry.slice(0, -ext.length);
      if (!files.has(base)) files.set(base, path);
    }
  }

  const tagJsonPath = files.get("marko-tag.json");
  const props = tagJsonPath ? readJSON(taglib.fs, tagJsonPath) : {};
  if (!hasEntry(props, taglib)) {
    let found = false;
    for (const { name: file, type } of classEntryFiles) {
      const path =
        files.get(file) || files.get(name + "." + file.replace("index.", ""));
      if (path) {
        props[type] = path;
        found = true;
        break;
      }
    }
    if (!found && !tagJsonPath) return;
  }

  return loadTag(name, props, taglib, tagJsonPath || dir);
}

function hasEntry(props: Props, taglib: Taglib) {
  const keys = taglib.classTaglibs ? classEntryKeys : entryKeys;
  for (const key in props) if (props[key] && keys.has(key)) return true;
  return false;
}
