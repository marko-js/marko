import nodePath from "path";

import * as cache from "./cache";
import * as jsonFileReader from "./json-file-reader";
import * as loaders from "./loaders";
import * as types from "./types";

/**
 * Synthesizes a taglib for an installed package that ships no `marko.json`
 * but declares a custom elements manifest via the `customElements` field in
 * its `package.json` (https://github.com/webcomponents/custom-elements-manifest).
 * Every custom element registration in the manifest becomes a native tag
 * (`html: true`, `htmlType: "custom-element"`) with attribute metadata, and
 * the module that registers it is recorded so translators can load it client side.
 */
function loadFromCustomElements(packageJsonPath, packageName) {
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
        manifestToTaglibProps(manifest, packageName),
      );
    } catch (err) {
      cache.remove(manifestPath);
      throw err;
    }
  }

  return taglib;
}

function manifestToTaglibProps(manifest, packageName) {
  var props = {};

  for (var mod of manifest.modules || []) {
    if (mod.kind !== "javascript-module") continue;

    for (var exp of mod.exports || []) {
      if (exp.kind !== "custom-element-definition") continue;

      var decl = resolveDeclaration(manifest, mod, exp.declaration);
      var tagProps = (props["<" + exp.name + ">"] = {
        html: true,
        htmlType: "custom-element",
        // The module holding the `customElements.define` call; importing it
        // in the browser is what upgrades the rendered element.
        parseOptions: { import: packageName + "/" + mod.path },
      });

      if (decl) {
        if (decl.description || decl.summary) {
          tagProps.description = decl.description || decl.summary;
        }

        for (var attr of decl.attributes || []) {
          var attrProps = { type: attributeType(attr.type) };
          if (attr.description || attr.summary) {
            attrProps.description = attr.description || attr.summary;
          }
          if (attr.default !== undefined) {
            attrProps.defaultValue = attr.default;
          }
          tagProps["@" + attr.name] = attrProps;
        }
      }
    }
  }

  return props;
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

function attributeType(type) {
  var text = type && type.text;
  if (!text) return "string";
  if (/\bboolean\b/.test(text)) return "boolean";
  if (/\bnumber\b/.test(text)) return "number";
  return "string";
}

export default loadFromCustomElements;
