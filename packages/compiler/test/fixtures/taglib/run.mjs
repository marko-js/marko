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
