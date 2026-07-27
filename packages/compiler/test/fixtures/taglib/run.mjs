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
};

cases[process.env.CASE]();
