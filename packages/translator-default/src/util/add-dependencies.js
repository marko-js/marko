import path from "path";
import MagicString from "magic-string";
import { types as t } from "@marko/compiler";
import { loadFileForImport, resolveRelativePath } from "@marko/babel-utils";

export default (entryFile, isHydrate) => {
  const { resolveVirtualDependency, hydrateIncludeImports } =
    entryFile.markoOpts;
  const hydratedFiles = new Set();
  const program = entryFile.path;
  const shouldIncludeImport = toTestFn(hydrateIncludeImports);

  if (!isHydrate) {
    addBrowserDeps(entryFile);
    return;
  }

  const registerId = t.identifier("register");
  const watchFiles = new Set();
  let hasComponents = false;
  let splitComponentIndex = 0;
  program.set("body", []);
  program.skip();

  addHydrateDeps(entryFile);
  entryFile.metadata.marko.watchFiles = Array.from(watchFiles);

  if (hasComponents) {
    const initId = t.identifier("init");
    const markoComponentsImport = importPath(
      resolvePath(entryFile, "marko/src/runtime/components/index.js")
    );
    if (splitComponentIndex) {
      markoComponentsImport.specifiers.push(
        t.importSpecifier(registerId, registerId)
      );
    }
    markoComponentsImport.specifiers.push(t.importSpecifier(initId, initId));
    program.unshiftContainer("body", markoComponentsImport);
    program.pushContainer(
      "body",
      t.expressionStatement(
        t.callExpression(
          initId,
          entryFile.markoOpts.runtimeId
            ? [t.stringLiteral(entryFile.markoOpts.runtimeId)]
            : []
        )
      )
    );
  }

  function addHydrateDeps(file) {
    const meta = file.metadata.marko;
    const resolved = resolveRelativePath(entryFile, file.opts.filename);
    if (hydratedFiles.has(resolved)) return;

    hydratedFiles.add(resolved);

    if (meta.component) {
      hasComponents = true;

      if (path.basename(meta.component) === path.basename(file.opts.filename)) {
        // Stateful component.
        program.pushContainer("body", importPath(resolved));
        return;
      }
    }

    watchFiles.add(file.opts.filename);

    for (const watchFile of meta.watchFiles) {
      watchFiles.add(watchFile);
    }

    addBrowserDeps(file);

    for (const imported of meta.imports) {
      if (shouldIncludeImport(imported)) {
        program.pushContainer("body", importPath(resolvePath(file, imported)));
      }
    }

    for (const tag of meta.tags) {
      if (tag.endsWith(".marko")) {
        if (!hydratedFiles.has(resolvePath(file, tag))) {
          addHydrateDeps(loadFileForImport(file, tag));
        }
      }
    }

    if (meta.component) {
      // Split component
      const splitComponentId = t.identifier(
        `component_${splitComponentIndex++}`
      );
      const splitComponentImport = importPath(
        resolvePath(file, meta.component)
      );
      splitComponentImport.specifiers.push(
        t.importDefaultSpecifier(splitComponentId)
      );
      program.pushContainer("body", splitComponentImport);
      program.pushContainer(
        "body",
        t.expressionStatement(
          t.callExpression(registerId, [
            t.stringLiteral(meta.id),
            splitComponentId,
          ])
        )
      );
    }
  }

  function addBrowserDeps(file) {
    const { filename, sourceMaps } = file.opts;
    let s;

    for (let dep of file.metadata.marko.deps) {
      if (typeof dep !== "string") {
        const { virtualPath } = dep;
        let { code } = dep;
        let map;

        if (sourceMaps && dep.startPos !== undefined) {
          s = s || new MagicString(file.code, { source: filename });
          map = s.snip(dep.startPos, dep.endPos).generateMap({
            source: filename,
            includeContent: true,
          });

          if (sourceMaps === "inline" || sourceMaps === "both") {
            code += dep.style
              ? `\n/*# sourceMappingURL=${map.toUrl()}*/`
              : `\n//# sourceMappingURL=${map.toUrl()}`;

            if (sourceMaps === "inline") {
              map = undefined;
            }
          }
        }

        dep = resolveVirtualDependency(filename, {
          map,
          code,
          virtualPath,
        });
      } else if (dep.startsWith("package:")) {
        continue;
      }

      program.pushContainer("body", importPath(resolvePath(file, dep)));
    }
  }

  function resolvePath(file, req) {
    return file === entryFile
      ? resolveRelativePath(file, req)
      : resolveRelativePath(
          entryFile,
          path.join(file.opts.filename, "..", req)
        );
  }

  function importPath(path) {
    return t.importDeclaration([], t.stringLiteral(path));
  }
};

function toTestFn(val) {
  if (typeof val === "function") {
    return val;
  }

  return val.test.bind(val);
}
