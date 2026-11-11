import path from "path";

import markoModules from "@marko/compiler/modules";

import { globalConfig } from "../config";
import type { FileSystem } from "../util/fs";
import { clearImportCache } from "../util/resolve";
import tryLoadTranslator from "../util/try-load-translator";
import { type Props, readJSON } from "./json";
import { Registry, type TaglibLookup, type Translator } from "./lookup";
import markoHTMLTaglib from "./marko-html.json" with { type: "json" };
import markoMathTaglib from "./marko-math.json" with { type: "json" };
import markoSVGTaglib from "./marko-svg.json" with { type: "json" };
import type { TaglibEntry } from "./taglib";

const registeredTaglibs: TaglibEntry[] = [
  [markoHTMLTaglib["taglib-id"], markoHTMLTaglib],
  [markoSVGTaglib["taglib-id"], markoSVGTaglib],
  [markoMathTaglib["taglib-id"], markoMathTaglib],
];
const excludedDirs = new Set<string>();
const excludedPackages = new Set<string>();
// Created when a lookup is first built, and dropped when what they read
// changes. Each file system gets its own, collected once it is unused.
let registries: WeakMap<FileSystem, Map<Translator, Registry>> | undefined;

export function buildLookup(
  dirname: string,
  requestedTranslator?: unknown,
  onError?: (err: Error) => void,
  fileSystem: FileSystem = globalConfig.fileSystem,
): TaglibLookup {
  const translator = tryLoadTranslator(requestedTranslator) as
    | Translator
    | undefined;
  if (!translator || !Array.isArray(translator.taglibs)) {
    throw new Error(
      "@marko/compiler: Invalid translator provided to buildLookup(dir, translator)",
    );
  }

  let byTranslator = registries?.get(fileSystem);
  let registry = byTranslator?.get(translator);
  if (!registry) {
    registry = new Registry(
      fileSystem,
      translator,
      registeredTaglibs,
      resolveOptionalTaglibs(translator.optionalTaglibs || [], onError),
      excludedDirs,
      excludedPackages,
    );
    if (!byTranslator) {
      (registries ||= new WeakMap()).set(
        fileSystem,
        (byTranslator = new Map()),
      );
    }
    byTranslator.set(translator, registry);
  }

  try {
    return registry.lookup(dirname);
  } catch (err) {
    if (!onError) throw err;
    onError(err as Error);
    return registry.empty;
  }
}

export function register(id: string, props?: Props) {
  registeredTaglibs.push(props === undefined ? resolveTaglib(id) : [id, props]);
  registries = undefined;
}

export function excludeDir(dir: string) {
  excludedDirs.add(dir);
  registries = undefined;
}

export function excludePackage(name: string) {
  excludedPackages.add(name);
  registries = undefined;
}

export function clearCaches() {
  registries = undefined;
  clearImportCache();
}

export function resolveOptionalTaglibs(
  taglibIds: string[],
  onError?: (err: Error) => void,
) {
  const resolvedTaglibs: TaglibEntry[] = [];
  for (const id of taglibIds) {
    if (hasRootDependency(id)) {
      try {
        resolvedTaglibs.push(resolveTaglib(id));
      } catch (err) {
        if (!onError) throw err;
        onError(err as Error);
      }
    }
  }

  return resolvedTaglibs;
}

function resolveTaglib(id: string): TaglibEntry {
  const isFile = /^[./\\]/.test(id) || path.isAbsolute(id);
  if (!isFile && !id.endsWith(".json")) {
    id = path.join(id, "marko.json");
  }

  const resolved = markoModules.resolve(id);
  // A file is read as discovered taglibs are, allowing comments.
  return [
    resolved,
    isFile && resolved.endsWith(".json")
      ? readJSON(globalConfig.fileSystem, resolved)
      : (markoModules.require(resolved) as Props),
  ];
}

function hasRootDependency(id: string) {
  const pkg = markoModules.pkg as {
    dependencies?: Props;
    devDependencies?: Props;
  } | null;
  return !!(pkg && (pkg.dependencies?.[id] || pkg.devDependencies?.[id]));
}
