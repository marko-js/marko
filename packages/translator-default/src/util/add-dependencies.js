import path from "path";
import {
  loadFileForImport,
  parseStatements,
  resolveRelativePath,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import MagicString from "magic-string";
import resolveFrom from "resolve-from";

export default (entryFile, isHydrate) => {
  const { resolveVirtualDependency, hydrateIncludeImports, hydrateInit } =
    entryFile.markoOpts;
  const program = entryFile.path;
  const shouldIncludeImport = toTestFn(hydrateIncludeImports);
  const resolvedDeps = new Set();
  const body = [];

  if (!isHydrate) {
    scanBrowserDeps(entryFile);
    if (body.length) {
      program.node.body = body.concat(program.node.body);
    }
    return;
  }

  const hydratedTemplates = new Set();
  const watchFiles = new Set();
  let hasComponents = false;
  let splitComponentIndex = 0;

  scanHydrateDeps(entryFile);

  if (hasComponents) {
    const initId = t.identifier("init");
    const markoComponentsImport = importPath(
      resolvePath(entryFile, "marko/src/runtime/components/index.js"),
    );
    if (splitComponentIndex) {
      markoComponentsImport.specifiers.push(
        t.importSpecifier(t.identifier("register"), t.identifier("register")),
      );
    }

    body.unshift(markoComponentsImport);

    if (hydrateInit) {
      markoComponentsImport.specifiers.push(t.importSpecifier(initId, initId));
      body.push(
        t.expressionStatement(
          t.callExpression(
            initId,
            entryFile.markoOpts.runtimeId
              ? [t.stringLiteral(entryFile.markoOpts.runtimeId)]
              : [],
          ),
        ),
      );
    }
  }

  entryFile.metadata.marko.watchFiles = Array.from(watchFiles);
  program.node.body = body;
  program.skip();

  function scanHydrateDeps(file) {
    const meta = file.metadata.marko;
    const resolved = resolveRelativePath(entryFile, file.opts.filename);
    if (hydratedTemplates.has(resolved)) return;

    hydratedTemplates.add(resolved);

    if (meta.component) {
      hasComponents = true;

      if (path.basename(meta.component) === path.basename(file.opts.filename)) {
        // Stateful component.
        addDep(resolved);
        return;
      }
    }

    watchFiles.add(file.opts.filename);

    for (const watchFile of meta.watchFiles) {
      watchFiles.add(watchFile);
    }

    scanBrowserDeps(file);

    for (const child of file.path.node.body) {
      if (t.isImportDeclaration(child)) {
        const { value } = child.source;
        if (shouldIncludeImport(value)) {
          addDep(resolvePath(file, value));
        }
      }
    }

    for (const tag of meta.tags) {
      if (tag.endsWith(".marko")) {
        if (!hydratedTemplates.has(resolvePath(file, tag))) {
          scanHydrateDeps(loadFileForImport(file, tag));
        }
      } else {
        const importedTemplates = tryGetTemplateImports(file, tag);
        if (importedTemplates) {
          for (const templateFile of importedTemplates) {
            if (!hydratedTemplates.has(resolvePath(file, templateFile))) {
              scanHydrateDeps(loadFileForImport(file, templateFile));
            }
          }
        }
      }
    }

    if (meta.component) {
      // Split component
      const splitComponentId = t.identifier(
        `component_${splitComponentIndex++}`,
      );
      const splitComponentImport = importPath(
        resolvePath(file, meta.component),
      );
      splitComponentImport.specifiers.push(
        t.importDefaultSpecifier(splitComponentId),
      );
      body.push(
        splitComponentImport,
        t.expressionStatement(
          t.callExpression(t.identifier("register"), [
            t.stringLiteral(meta.id),
            splitComponentId,
          ]),
        ),
      );
    }
  }

  function scanBrowserDeps(file) {
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

        if (!dep) {
          continue;
        }
      } else if (dep.startsWith("package:")) {
        continue;
      }

      addDep(resolvePath(file, dep));
    }
  }

  function addDep(resolved) {
    if (resolvedDeps.has(resolved)) return;
    resolvedDeps.add(resolved);
    body.push(importPath(resolved));
  }

  function resolvePath(file, req) {
    return file === entryFile
      ? resolveRelativePath(file, req)
      : resolveRelativePath(
          entryFile,
          path.join(file.opts.filename, "..", req),
        );
  }

  function importPath(path) {
    return t.importDeclaration([], t.stringLiteral(path));
  }
};

function tryGetTemplateImports(file, rendererRelativePath) {
  const resolvedRendererPath = path.join(
    file.opts.filename,
    "..",
    rendererRelativePath,
  );
  let templateImports;

  try {
    for (const statement of parseStatements(
      file,
      file.markoOpts.fileSystem.readFileSync(resolvedRendererPath, "utf-8"),
    )) {
      if (statement.type === "ImportDeclaration") {
        addImport(statement.source.value);
      } else {
        t.traverseFast(statement, (node) => {
          if (
            node.type === "CallExpression" &&
            (node.callee.name === "require" ||
              (node.callee.type === "MemberExpression" &&
                node.callee.object.type === "Identifier" &&
                node.callee.object.name === "require" &&
                node.callee.property.type === "Identifier" &&
                node.callee.property.name === "resolve")) &&
            node.arguments.length === 1 &&
            node.arguments[0].type === "StringLiteral"
          ) {
            addImport(node.arguments[0].value);
          }
        });
      }
    }
  } catch {
    // Ignore
  }

  return templateImports;

  function addImport(request) {
    if (request.endsWith(".marko")) {
      const resolvedTemplatePath =
        request[0] === "."
          ? path.resolve(resolvedRendererPath, "..", request)
          : resolveFrom.silent(path.dirname(resolvedRendererPath), request);
      if (resolvedTemplatePath) {
        if (templateImports) {
          templateImports.push(resolvedTemplatePath);
        } else {
          templateImports = [resolvedTemplatePath];
        }
      }
    }
  }
}

function toTestFn(val) {
  if (typeof val === "function") {
    return val;
  }

  return val.test.bind(val);
}
