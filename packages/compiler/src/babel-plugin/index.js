import { extname, dirname } from "path";
import { Hub } from "./hub";
import { parse } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import { NodePath, visitors } from "@babel/traverse";
import { buildLookup } from "../taglib";
import markoModules from "../../modules";

export default (api, options) => {
  api.assertVersion(7);
  options.output = options.output || "html";

  const isProduction = api.env("production");
  const translator = options.translator;

  if (!translator || !translator.visitor) {
    throw new Error(
      "@marko/compiler: translator must provide a visitor object"
    );
  }

  return {
    name: "marko",
    parserOverride(code, jsParseOptions) {
      const filename = jsParseOptions.sourceFileName;
      const hub = new Hub(filename, code, {
        ...options,
        jsParseOptions,
        isProduction,
        lookup: buildLookup(dirname(filename), translator)
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
          .map(it => it.migratorPath)
          .filter(Boolean)
          .map(it => markoModules.require(it))
          .map(it => (it.default || it)(api, options));
        nodePath.traverse(
          rootMigrators.length
            ? visitors.merge(rootMigrators.concat(migrate))
            : migrate
        );
        if (!options._migrateOnly) {
          const rootTransformers = hub.lookup.merged.transformers
            .map(it => markoModules.require(it.path))
            .map(it => (it.default || it)(api, options));
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
