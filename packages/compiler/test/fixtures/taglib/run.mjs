import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { taglib } from "@marko/compiler";

// Empty on both halves of what a translator owes the lookup, so what comes
// back is only what `register` put there.
const emptyTranslator = { taglibs: [], tagDiscoveryDirs: [] };
const write = (value) => process.stdout.write(JSON.stringify(value));
const message = (fn) => {
  try {
    fn();
    return null;
  } catch (err) {
    return err.message;
  }
};

const cases = {
  "invalid-translator": () =>
    write(message(() => taglib.buildLookup(process.cwd(), {}))),

  "register-by-path": () => {
    taglib.register("./local/marko.json");
    write(!!taglib.buildLookup(process.cwd(), emptyTranslator).getTag("probe-local"));
  },

  "register-by-module": () => {
    taglib.register("@marko/compiler/test/fixtures/taglib/local/marko.json");
    write(!!taglib.buildLookup(process.cwd(), emptyTranslator).getTag("probe-local"));
  },

  "shorthand-attr-merge": () => {
    taglib.register("./local/marko.json");
    const tag = taglib.buildLookup(process.cwd(), emptyTranslator).getTag("probe-shorthand");
    const attr = tag.attributes.label;
    write({
      type: attr.type,
      defaultValue: attr.defaultValue,
      required: attr.required,
      autocomplete: !!attr.autocomplete,
      target: tag.nestedTags.label.targetProperty,
    });
  },

  "optional-undeclared": () => write(taglib.resolveOptionalTaglibs(["marko-undeclared-taglib"])),

  "optional-throws": () =>
    write(message(() => taglib.resolveOptionalTaglibs(["marko-missing-taglib"]))),

  "optional-onerror": () => {
    const errors = [];
    const resolved = taglib.resolveOptionalTaglibs(["marko-missing-taglib"], (err) =>
      errors.push(err.message),
    );
    write({ resolved, errors });
  },

  lookup: () => {
    taglib.register("probe-lookup", {
      "taglib-id": "probe-lookup",
      "attribute-groups": { aria: { "aria-label": "string" } },
      "<probe-tag>": {
        "@a": "string",
        // The second group is undeclared, so the lookup has to skip it.
        "attribute-groups": ["aria", "missing-group"],
      },
      "<probe-pattern>": { "@data-*": { pattern: true, type: "string" } },
      "<probe-bare>": {},
    });
    const lookup = taglib.buildLookup(process.cwd(), emptyTranslator);
    const names = (tagName) => {
      const found = [];
      lookup.forEachAttribute(tagName, (attr) => found.push(attr.name));
      return found;
    };
    write({
      attrs: names("probe-tag"),
      patternAttrs: names("probe-pattern"),
      bareAttrs: names("probe-bare"),
      missingTagAttrs: names("does-not-exist"),
      tagByName: !!lookup.getTag("probe-tag"),
      tagByElement: !!lookup.getTag({ tagName: "probe-tag" }),
      missingTag: lookup.getTag("does-not-exist") ?? null,
      attrByObjects:
        lookup.getAttribute({ tagName: "probe-tag" }, { name: "a" })?.name ??
          null,
      groupAttr: lookup.getAttribute("probe-tag", "aria-label")?.name ?? null,
      patternAttr: lookup.getAttribute("probe-pattern", "data-x")?.name ?? null,
      missingAttr: lookup.getAttribute("probe-tag", "nope") ?? null,
      sortedIsCached: lookup.getTagsSorted() === lookup.getTagsSorted(),
      sortedNames: lookup
        .getTagsSorted()
        .map((tag) => tag.name)
        .filter((name) => name.startsWith("probe-")),
    });
  },

  "reload-after-parse-error": () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-taglib-"));
    const file = path.join(dir, "marko-tag.json");
    fs.writeFileSync(file, "{ BAD JSON");
    const firstError = message(() => taglib._loader.loadTaglibFromFile(file));
    fs.writeFileSync(file, JSON.stringify({ tags: { "legacy-panel": {} } }));
    write({
      firstError,
      tags: Object.keys(taglib._loader.loadTaglibFromFile(file).tags),
    });
  },
};

cases[process.env.CASE]();
