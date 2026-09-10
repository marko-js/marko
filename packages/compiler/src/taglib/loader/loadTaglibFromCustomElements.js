import nodePath from "path";

import taglibConfig from "../config";
import * as cache from "./cache";
import * as jsonFileReader from "./json-file-reader";
import * as loaders from "./loaders";
import * as types from "./types";

export default function loadFromCustomElements(packageJsonPath, packageName) {
  const pkg = jsonFileReader.readFileSync(packageJsonPath);
  if (typeof pkg.customElements !== "string") return;

  const packageRoot = nodePath.dirname(packageJsonPath);
  const manifestPath = nodePath.resolve(packageRoot, pkg.customElements);
  const cacheKey = `${packageJsonPath}\0${manifestPath}\0${packageName}`;
  let taglib = cache.get(cacheKey);
  if (taglib) return taglib;

  const manifestKey = `${manifestPath}\0manifest`;
  let manifest = cache.get(manifestKey);
  if (!manifest) {
    manifest = normalizeManifest(jsonFileReader.readFileSync(manifestPath));
    cache.put(manifestKey, manifest);
  }
  // CEM module paths should be package-root relative, but some manifests
  // (eg Shoelace's) write them relative to the manifest's own directory.
  const manifestRoot = nodePath.dirname(manifestPath);
  const props = {};
  for (const { name, module, declaration: decl } of manifest) {
    let browserImport = nodePath.resolve(packageRoot, module);
    if (manifestRoot !== packageRoot && !fileExists(browserImport)) {
      const fromManifest = nodePath.resolve(manifestRoot, module);
      if (fileExists(fromManifest)) browserImport = fromManifest;
    }
    const relativeModule = nodePath.relative(packageRoot, browserImport);
    if (
      relativeModule === ".." ||
      relativeModule.startsWith(`..${nodePath.sep}`) ||
      nodePath.isAbsolute(relativeModule)
    )
      continue;
    const attributes = Object.create(null);
    attributes["*"] = {
      type: "expression",
      preserveName: true,
      targetProperty: null,
    };
    for (const attr of decl?.attributes || []) {
      if (typeof attr.name !== "string") continue;
      attributes[attr.name] = {
        type: "expression",
        ...(typeof attr.type?.text === "string"
          ? { nativeType: attr.type.text }
          : {}),
        preserveName: true,
        targetProperty: null,
        ...(attr.description || attr.summary
          ? { description: attr.description || attr.summary }
          : {}),
      };
    }
    props[`<${name}>`] = {
      html: true,
      htmlType: "custom-element",
      browserImport,
      attributes,
      ...(decl?.description || decl?.summary
        ? { description: decl.description || decl.summary }
        : {}),
    };
  }
  taglib = new types.Taglib(manifestPath, true, packageName);
  taglib.setPackageName(packageName, packageRoot);
  loaders.loadTaglibFromProps(taglib, props);
  cache.put(cacheKey, taglib);
  return taglib;
}

const tagNameReg = /^[a-z][a-z0-9._-]*-[a-z0-9._-]*$/;

function normalizeManifest(manifest) {
  const elements = [];
  const seen = new Set();
  for (const mod of manifest.modules || []) {
    if (mod.kind !== "javascript-module" || typeof mod.path !== "string")
      continue;
    for (const exp of mod.exports || []) {
      if (
        exp.kind === "custom-element-definition" &&
        tagNameReg.test(exp.name) &&
        !seen.has(exp.name)
      ) {
        seen.add(exp.name);
        elements.push({
          name: exp.name,
          module: mod.path,
          declaration: resolveDeclaration(manifest, mod, exp.declaration),
        });
      }
    }
  }
  // Manifests without `custom-element-definition` exports (eg Shoelace's)
  // still mark elements via `customElement: true` declarations with a `tagName`.
  for (const mod of manifest.modules || []) {
    if (mod.kind !== "javascript-module" || typeof mod.path !== "string")
      continue;
    for (const decl of mod.declarations || []) {
      if (
        decl.customElement &&
        typeof decl.tagName === "string" &&
        tagNameReg.test(decl.tagName) &&
        !seen.has(decl.tagName)
      ) {
        seen.add(decl.tagName);
        elements.push({
          name: decl.tagName,
          module: mod.path,
          declaration: decl,
        });
      }
    }
  }
  return elements;
}

function fileExists(filename) {
  try {
    return taglibConfig.fs.statSync(filename).isFile();
  } catch {
    return false;
  }
}

function resolveDeclaration(manifest, mod, ref) {
  if (!ref || ref.package) return;
  const target = ref.module
    ? manifest.modules.find(
        (m) =>
          nodePath.posix.normalize(m.path) ===
          nodePath.posix.normalize(ref.module),
      )
    : mod;
  return target?.declarations?.find((d) => d.name === ref.name);
}
