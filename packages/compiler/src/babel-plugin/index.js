import { types as t } from "@marko/babel-types";
import { parse } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import traverse, { visitors } from "@babel/traverse";
import markoModules from "../../modules";
import { MarkoFile } from "./file";

export default (api, markoOptions) => {
  api.assertVersion(7);
  markoOptions.output = markoOptions.output || "html";

  const isProduction = api.env("production");
  const translator = markoOptions.translator;

  if (!translator || !translator.visitor) {
    throw new Error(
      "@marko/compiler: translator must provide a visitor object"
    );
  }

  return {
    name: "marko",
    parserOverride(code, jsParseOptions) {
      const filename = jsParseOptions.sourceFileName;
      const file = new MarkoFile(filename, code, jsParseOptions, {
        ...markoOptions,
        isProduction
      });

      parse(file);

      // TODO: this package should be split into 4:
      // 1. babel-syntax-marko (removes the need for the _parseOnly option)
      // 2. babel-plugin-migrate-marko (removes the need for the _migrateOnly option)
      // 3. babel-plugin-transform-marko (only runs transformers without converting Marko nodes to js)
      // 4. babel-plugin-translate-marko (runs final translations)
      if (!markoOptions._parseOnly) {
        file.path.scope.crawl(); // Initialize bindings.
        const rootMigrators = Object.values(file._lookup.taglibsById)
          .map(({ migratorPath }) => {
            if (migratorPath) {
              const mod = markoModules.require(migratorPath);
              file._watchFiles.add(migratorPath);
              return (mod.default || mod)(api, markoOptions);
            }
          })
          .filter(Boolean);
        traverse(
          file.ast,
          rootMigrators.length
            ? visitors.merge(rootMigrators.concat(migrate))
            : migrate,
          file.scope
        );
        if (!markoOptions._migrateOnly) {
          const rootTransformers = file._lookup.merged.transformers.map(
            ({ path: transformerPath }) => {
              const mod = markoModules.require(transformerPath);
              file._watchFiles.add(transformerPath);
              return (mod.default || mod)(api, markoOptions);
            }
          );
          traverse(
            file.ast,
            rootTransformers.length
              ? visitors.merge(rootTransformers.concat(transform))
              : transform,
            file.scope
          );

          traverse(file.ast, translator.visitor, file.scope);
        }
      }

      const result = t.cloneDeep(file.ast);

      for (const id in file._lookup.taglibsById) {
        const { filePath } = file._lookup.taglibsById[id];

        if (
          filePath[filePath.length - 5] === "." &&
          filePath.endsWith("marko.json")
        ) {
          file._watchFiles.add(filePath);
        }
      }

      result._meta = file.metadata.marko;
      result._meta.watchFiles = Array.from(file._watchFiles);

      return result;
    },
    pre(file) {
      // Copy over the Marko specific metadata.
      file.metadata.marko = file.ast._meta;
      delete file.ast._meta;
    }
  };
};
