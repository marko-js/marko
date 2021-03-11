import path from "path";
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

      if (path.basename(meta.component) === file.opts.sourceFileName) {
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
    for (const dep of file.metadata.marko.deps) {
      program.pushContainer(
        "body",
        importPath(
          file,
          typeof dep === "string"
            ? dep
            : resolveVirtualDependency(file.opts.sourceFileName, {
                code: dep.code,
                virtualPath: dep.virtualPath
              })
        )
      );
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
