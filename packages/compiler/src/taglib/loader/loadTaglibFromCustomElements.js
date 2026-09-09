import nodePath from "path";

import taglibConfig from "../config";
import * as cache from "./cache";
import * as jsonFileReader from "./json-file-reader";
import * as loaders from "./loaders";
import * as types from "./types";

/**
 * Synthesizes a taglib for an installed package that ships no `marko.json`
 * but declares a custom elements manifest via the `customElements` field in
 * its `package.json` (https://github.com/webcomponents/custom-elements-manifest).
 *
 * Each custom element registration becomes a generated shadow template under
 * `node_modules/.marko-custom-elements/` that types its attributes as `Input`,
 * imports the module registering the element, and renders it as a native tag:
 *
 *     export interface Input { label?: string }
 *     import "some-package/some-element.js";
 *     <${"some-element"} ...input/>
 *
 * so the element flows through the regular custom tag pipeline: the import
 * reaches the client bundle, and editors/TS pick up `Input` like any tag.
 */
function loadFromCustomElements(packageJsonPath, packageName, rootDir) {
  var pkg;
  try {
    pkg = jsonFileReader.readFileSync(packageJsonPath);
  } catch (_) {
    return undefined;
  }

  if (typeof pkg.customElements !== "string") {
    return undefined;
  }

  var manifestPath = nodePath.join(
    nodePath.dirname(packageJsonPath),
    pkg.customElements,
  );
  var taglib = cache.get(manifestPath);

  if (!taglib) {
    taglib = new types.Taglib(manifestPath, true, packageName);
    cache.put(manifestPath, taglib);

    try {
      var manifest = jsonFileReader.readFileSync(manifestPath);
      loaders.loadTaglibFromProps(
        taglib,
        manifestToTaglibProps(manifest, packageName, rootDir),
      );
    } catch (err) {
      cache.remove(manifestPath);
      throw err;
    }
  }

  return taglib;
}

function manifestToTaglibProps(manifest, packageName, rootDir) {
  var props = {};
  var generatedDir = nodePath.join(
    rootDir,
    "node_modules",
    ".marko-custom-elements",
    packageName,
  );

  for (var mod of manifest.modules || []) {
    if (mod.kind !== "javascript-module") continue;

    for (var exp of mod.exports || []) {
      if (exp.kind !== "custom-element-definition") continue;

      var decl = resolveDeclaration(manifest, mod, exp.declaration);
      var template = nodePath.join(generatedDir, exp.name + ".marko");
      writeIfChanged(
        template,
        shadowTemplate(exp.name, decl, packageName + "/" + mod.path),
      );

      var tagProps = (props["<" + exp.name + ">"] = { template });
      if (decl && (decl.description || decl.summary)) {
        tagProps.description = decl.description || decl.summary;
      }
    }
  }

  return props;
}

function shadowTemplate(tagName, decl, importPath) {
  var fields = [];

  for (var attr of (decl && decl.attributes) || []) {
    var doc = attr.description || attr.summary;
    if (doc) fields.push("  /** " + doc.replace(/\*\//g, "*\\/") + " */");
    fields.push(
      "  " + propertyKey(attr.name) + "?: " + attributeType(attr.type) + ";",
    );
  }

  fields.push("  content?: Marko.Body;");

  return (
    "// Generated from the custom elements manifest of " +
    importPath.split("/")[0] +
    " — do not edit.\n" +
    "export interface Input {\n" +
    fields.join("\n") +
    "\n}\n\n" +
    "import " +
    JSON.stringify(importPath) +
    ";\n\n" +
    "<${" +
    JSON.stringify(tagName) +
    "} ...input/>\n"
  );
}

function resolveDeclaration(manifest, mod, ref) {
  if (!ref || ref.package) return undefined;

  var target = mod;
  if (ref.module) {
    target = (manifest.modules || []).find((m) => m.path === ref.module);
    if (!target) return undefined;
  }

  return (target.declarations || []).find(
    (d) => d.name === ref.name && d.customElement,
  );
}

function propertyKey(name) {
  return /^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name);
}

// Manifest attribute types are free-form (TS, JSDoc or Closure); anything
// that does not scan as a plain TS type expression falls back to `string`.
function attributeType(type) {
  var text = type && type.text;
  return text && /^[\w\s|&'"`,.<>[\]()-]+$/.test(text) ? text : "string";
}

function writeIfChanged(file, content) {
  var fs = taglibConfig.fs;
  try {
    if (fs.readFileSync(file, "utf8") === content) return;
  } catch (_) {
    // Missing or unreadable: fall through to the write.
  }

  try {
    fs.mkdirSync(nodePath.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  } catch (_) {
    // A read-only fs (eg a browser shim) keeps the tag; resolving its
    // template will surface a clearer error than throwing here.
  }
}

export default loadFromCustomElements;
