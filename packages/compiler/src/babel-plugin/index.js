import { extname, dirname } from "path";
import { Hub } from "./hub";
import { parse } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import { NodePath, visitors } from "@babel/traverse";
import { buildLookup } from "../taglib";

export default (api, options) => {
  api.assertVersion(7);
  options.output = options.output || "html";
  options.translator = options.translator || "default";

  const isProduction = api.env("production");
  let translator;

  if (typeof window === "undefined") {
    translator = require(`@marko/translator-${options.translator}`);
  } else {
    if (translator !== "default") {
      throw new Error(
        "@marko/compiler: only the default translator can be used in the browser."
      );
    }

    translator = require("@marko/translator-default");
  }

  return {
    name: "marko",
    parserOverride(code, jsParseOptions) {
      const filename = jsParseOptions.sourceFileName;
      const hub = new Hub(filename, code, {
        ...options,
        jsParseOptions,
        isProduction,
        lookup: buildLookup(dirname(filename), translator.taglibs)
      });

      // Only run on Marko files.
      if (!(extname(filename) === ".marko" || options.allExtensions)) {
        return hub.parse(code, 0);
      }

      const nodePath = new NodePath(hub);
      nodePath.node = hub.file;
      hub.program = nodePath.get("program");
      parse(nodePath);

      // TODO: this package should be split into 4:
      // 1. babel-syntax-marko (removes the need for the _parseOnly option)
      // 2. babel-plugin-migrate-marko (removes the need for the _migrateOnly option)
      // 3. babel-plugin-transform-marko (only runs transformers without converting Marko nodes to js)
      // 4. babel-plugin-translate-marko (runs final translations)
      if (!options._parseOnly) {
        nodePath.get("program").scope.crawl(); // Initialize bindings.
        const rootMigrators = Object.values(hub.lookup.taglibsById)
          .map(taglib => taglib.getMigrator())
          .filter(m => m)
          .map(m => m.default || m)
          .map(m => m(api, options));
        nodePath.traverse(
          rootMigrators.length
            ? visitors.merge(rootMigrators.concat(migrate))
            : migrate
        );
        if (!options._migrateOnly) {
          const rootTransformers = hub.lookup.merged.transformers
            .map(t => require(t.path))
            .map(t => t.default || t)
            .map(t => t(api, options));
          nodePath.traverse(
            rootTransformers.length
              ? visitors.merge(rootTransformers.concat(transform))
              : transform
          );

          nodePath.traverse(translator.visitor);
        }
      }

      return Object.assign({}, hub.file);
    },
    post(file) {
      // Attach marko metadata to babel metadata.
      file.metadata.marko = file.ast.markoMeta;
    }
  };
};
