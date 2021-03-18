import path from "path";
import MagicString from "magic-string";
import { types as t } from "@marko/compiler";
import { loadFileForImport, resolveRelativePath } from "@marko/babel-utils";
export default (entryFile, isHydrate) => {
  const { modules, resolveVirtualDependency } = entryFile.markoOpts;
  const program = entryFile.path;

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
    const markoComponentsImport = importPath(entryFile, "marko/components");
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

    if (meta.component) {
      hasComponents = true;

      if (
        path.basename(meta.component) ===
        path.basename(file.opts.sourceFileName)
      ) {
        // Stateful component.
        program.pushContainer("body", importPath(file, meta.component));
        return;
      }
    }

    for (const watchFile of meta.watchFiles) {
      watchFiles.add(watchFile);
    }

    addBrowserDeps(file);

    for (const tag of meta.tags) {
      if (tag.endsWith(".marko")) {
        addHydrateDeps(loadFileForImport(file, tag));
      }
    }

    if (meta.component) {
      // Split component
      const splitComponentId = t.identifier(
        `component_${splitComponentIndex++}`
      );
      const splitComponentImport = importPath(file, meta.component);
      splitComponentImport.specifiers.push(
        t.importDefaultSpecifier(splitComponentId)
      );
      program.pushContainer("body", splitComponentImport);
      program.pushContainer(
        "body",
        t.expressionStatement(
          t.callExpression(registerId, [
            t.stringLiteral(meta.id),
            splitComponentId
          ])
        )
      );
    }
  }

  function addBrowserDeps(file) {
    const { sourceFileName, sourceMaps } = file.opts;
    let s;

    for (let dep of file.metadata.marko.deps) {
      if (typeof dep !== "string") {
        const { virtualPath } = dep;
        let { code } = dep;
        let map;

        if (sourceMaps && dep.startPos !== undefined) {
          s = s || new MagicString(file.code, { source: sourceFileName });
          map = s.snip(dep.startPos, dep.endPos).generateMap();

          if (sourceMaps === "inline" || sourceMaps === "both") {
            if (sourceMaps === "inline") {
              map = undefined;
            }

            code += virtualPath.endsWith(".css")
              ? `\n/*# sourceMappingURL=${map.toUrl()}*/`
              : `\n//# sourceMappingURL=${map.toUrl()}`;
          }
        }

        dep = resolveVirtualDependency(sourceFileName, {
          map,
          code,
          virtualPath
        });
      }

      program.pushContainer("body", importPath(file, dep));
    }
  }

  function importPath(file, req) {
    let resolved = req;

    if (file !== entryFile) {
      resolved = resolveRelativePath(
        entryFile,
        path.join(
          file.opts.sourceFileName,
          "..",
          path.sep === "/" ? req : req.replace(/\//g, path.sep)
        )
      );
    }

    if (modules === "cjs") {
      return t.expressionStatement(
        t.callExpression(t.identifier("require"), [t.stringLiteral(resolved)])
      );
    }

    return t.importDeclaration([], t.stringLiteral(resolved));
  }
};
