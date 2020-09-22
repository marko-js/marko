import path from "path";
import { types as t } from "@marko/babel-types";
import { getLoc, ___setTaglibLookup } from "@marko/babel-utils";
import { buildLookup } from "../taglib";
import { parseMarko } from "./parser";
import { visitor as migrate } from "./plugins/migrate";
import { visitor as transform } from "./plugins/transform";
import traverse, { visitors } from "@babel/traverse";
import { getRootDir } from "lasso-package-root";
import markoModules from "../../modules";
import { MarkoFile } from "./file";
import checksum from "./util/checksum";

let ROOT = process.cwd();
try {
  ROOT = getRootDir(ROOT);
  // eslint-disable-next-line no-empty
} catch {}

export default (api, markoOpts) => {
  api.assertVersion(7);
  const translator = markoOpts.translator;
  const optimize = (markoOpts.optimize =
    markoOpts.optimize === undefined
      ? api.env("production")
      : markoOpts.optimize);
  markoOpts.output = markoOpts.output || "html";

  if (!translator || !translator.visitor) {
    throw new Error(
      "@marko/compiler: translator must provide a visitor object"
    );
  }

  return {
    name: "marko",
    parserOverride(code, jsParseOptions) {
      const watchFiles = new Set();
      const filename = jsParseOptions.sourceFileName;
      const componentId = path.relative(ROOT, filename);
      const taglibLookup = buildLookup(
        path.dirname(filename),
        markoOpts.translator
      );
      const file = new MarkoFile(jsParseOptions, {
        code,
        ast: {
          type: "File",
          program: {
            type: "Program",
            sourceType: "module",
            body: [],
            directives: []
          }
        }
      });
      file.ast.start = file.ast.program.start = 0;
      file.ast.end = file.ast.program.end = code.length - 1;
      file.ast.loc = file.ast.program.loc = {
        start: { line: 0, column: 0 },
        end: getLoc(file, file.ast.end)
      };

      file.metadata.marko = {
        id: optimize ? checksum(componentId) : componentId,
        deps: [],
        tags: [],
        watchFiles
      };

      file.markoOpts = markoOpts;

      ___setTaglibLookup(file, taglibLookup);
      parseMarko(file);

      if (!markoOpts._parseOnly) {
        file.path.scope.crawl(); // Initialize bindings.
        const rootMigrators = Object.values(taglibLookup.taglibsById)
          .map(({ migratorPath }) => {
            if (migratorPath) {
              const mod = markoModules.require(migratorPath);
              watchFiles.add(migratorPath);
              return (mod.default || mod)(api, markoOpts);
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
        if (!markoOpts._migrateOnly) {
          const rootTransformers = taglibLookup.merged.transformers.map(
            ({ path: transformerPath }) => {
              const mod = markoModules.require(transformerPath);
              watchFiles.add(transformerPath);
              return (mod.default || mod)(api, markoOpts);
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

      for (const taglibId in taglibLookup.taglibsById) {
        const { filePath } = taglibLookup.taglibsById[taglibId];

        if (
          filePath[filePath.length - 5] === "." &&
          filePath.endsWith("marko.json")
        ) {
          watchFiles.add(filePath);
        }
      }

      file.metadata.marko.watchFiles = Array.from(
        file.metadata.marko.watchFiles
      );
      result._meta = file.metadata.marko;

      return result;
    },
    pre(file) {
      // Copy over the Marko specific metadata.
      file.metadata.marko = file.ast._meta;
      delete file.ast._meta;
    }
  };
};
