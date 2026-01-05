import { types as t } from "@marko/compiler";
import {
  loadFileForImport,
  parseStatements,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";
import markoModules from "@marko/compiler/modules";
import MagicString from "magic-string";
import path from "path";
const kEntryState = Symbol();
const lassoDepPrefix = "package: ";

export default (entryFile, isHydrate) => {
  const program = entryFile.path;
  const programNode = program.node;

  if (!isHydrate) {
    const body = [];
    addBrowserImports(new Set(), undefined, body, entryFile, entryFile);
    if (body.length) {
      programNode.body = body.concat(programNode.body);
    }
    return;
  }

  const visitedFiles = new Set([
    resolveRelativePath(entryFile, entryFile.opts.filename),
  ]);
  entryBuilder.visit(entryFile, entryFile, function visitChild(resolved) {
    if (!visitedFiles.has(resolved)) {
      visitedFiles.add(resolved);
      const file = loadFileForImport(entryFile, resolved);
      if (file) {
        entryBuilder.visit(file, entryFile, (id) =>
          visitChild(resolveRelativeToEntry(entryFile, file, id)),
        );
      }
    }
  });

  programNode.body = entryBuilder.build(entryFile);
  program.skip();
};

export const entryBuilder = {
  build(entryFile, exportInit) {
    const state = entryFile[kEntryState];
    if (!state) {
      throw entryFile.path.buildCodeFrameError(
        "Unable to build hydrate code, no files were visited before finalizing the build",
      );
    }
    const { markoOpts } = entryFile;
    const entryMarkoMeta = entryFile.metadata.marko;
    const { body } = state;
    let didExportInit = false;
    entryMarkoMeta.watchFiles = [...state.watchFiles];
    entryMarkoMeta.deps = [...state.lassoDeps];

    if (state.hasComponents) {
      const initId = t.identifier("init");
      const markoComponentsImport = importPath(
        resolveRelativePath(entryFile, "marko/src/runtime/components/index.js"),
      );
      if (state.splitComponentIndex) {
        markoComponentsImport.specifiers.push(
          t.importSpecifier(t.identifier("register"), t.identifier("register")),
        );
      }

      body.unshift(markoComponentsImport);

      if (markoOpts.hydrateInit || exportInit) {
        const initExpression = t.callExpression(
          initId,
          markoOpts.runtimeId ? [t.stringLiteral(markoOpts.runtimeId)] : [],
        );
        markoComponentsImport.specifiers.push(
          t.importSpecifier(initId, initId),
        );

        body.push(
          exportInit
            ? t.exportDefaultDeclaration(
                t.arrowFunctionExpression([], initExpression),
              )
            : t.expressionStatement(initExpression),
        );
      }
    } else if (exportInit) {
      body.push(
        t.exportDefaultDeclaration(
          t.arrowFunctionExpression([], t.blockStatement([])),
        ),
      );
    }

    return body;
  },
  visit(file, entryFile, visitChild) {
    const fileMeta = file.metadata.marko;
    const fileName = file.opts.filename;
    const state = (entryFile[kEntryState] ||= {
      shouldIncludeImport: toTestFn(file.markoOpts.hydrateIncludeImports),
      watchFiles: new Set(),
      imports: new Set(),
      lassoDeps: new Set(),
      hasComponents: false,
      splitComponentIndex: 0,
      body: [],
    });

    const { watchFiles, imports, lassoDeps, body } = state;

    if (fileMeta.component) {
      state.hasComponents = true;

      if (path.basename(fileMeta.component) === path.basename(fileName)) {
        // Stateful component.
        addImport(imports, body, resolveRelativePath(entryFile, fileName));
        return;
      }
    }

    watchFiles.add(fileName);

    for (const watchFile of fileMeta.watchFiles) {
      watchFiles.add(watchFile);
    }

    addBrowserImports(imports, lassoDeps, body, file, entryFile);

    for (const child of file.path.node.body) {
      if (t.isImportDeclaration(child)) {
        const { value } = child.source;
        if (state.shouldIncludeImport(value)) {
          addImport(
            imports,
            body,
            resolveRelativeToEntry(entryFile, file, value),
          );
        }
      } else if (
        t.isMarkoScriptlet(child) &&
        child.static &&
        child.target !== "server"
      ) {
        for (const stmt of child.body) {
          if (t.isImportDeclaration(stmt)) {
            const { value } = stmt.source;
            if (child.target === "client" || state.shouldIncludeImport(value)) {
              addImport(
                imports,
                body,
                resolveRelativeToEntry(entryFile, file, value),
              );
            }
          }
        }
      }
    }

    for (const tag of fileMeta.tags) {
      if (tag.endsWith(".marko")) {
        visitChild(tag);
      } else if (/^@lasso\/marko-taglib\//.test(tag)) {
        state.hasComponents = true;
      } else {
        const importedTemplates = tryGetTemplateImports(file, tag);
        if (importedTemplates) {
          for (const templateFile of importedTemplates) {
            visitChild(templateFile);
          }
        }
      }
    }

    if (fileMeta.component) {
      // Split component
      const splitComponentId = t.identifier(
        `component_${state.splitComponentIndex++}`,
      );
      const splitComponentImport = importPath(
        resolveRelativeToEntry(entryFile, file, fileMeta.component),
      );
      splitComponentImport.specifiers.push(
        t.importDefaultSpecifier(splitComponentId),
      );
      body.push(
        splitComponentImport,
        t.expressionStatement(
          t.callExpression(t.identifier("register"), [
            t.stringLiteral(fileMeta.id),
            splitComponentId,
          ]),
        ),
      );
    }
  },
};

function addBrowserImports(seenImports, lassoDeps, body, file, entryFile) {
  const { filename, sourceMaps } = file.opts;
  let s;

  for (let dep of file.metadata.marko.deps) {
    if (typeof dep !== "string") {
      const { virtualPath } = dep;
      let { code } = dep;
      let map;

      if (sourceMaps && dep.startPos !== undefined) {
        s = s || new MagicString(file.code, { filename });
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

      dep = file.markoOpts.resolveVirtualDependency(filename, {
        map,
        code,
        virtualPath,
      });

      if (!dep) {
        continue;
      }
    } else if (isLassoDep(dep)) {
      if (lassoDeps) {
        lassoDeps.add(
          resolveLassoManifestDepRelativeToEntry(entryFile, file, dep),
        );
      }
      continue;
    }

    addImport(seenImports, body, resolveRelativeToEntry(entryFile, file, dep));
  }
}

function addImport(seenImports, body, resolved) {
  if (seenImports.has(resolved)) return;
  seenImports.add(resolved);
  body.push(importPath(resolved));
}

function resolveRelativeToEntry(entryFile, file, req) {
  return file === entryFile
    ? resolveRelativePath(file, req)
    : resolveRelativePath(
        entryFile,
        req[0] === "." ? path.join(file.opts.filename, "..", req) : req,
      );
}

function importPath(path) {
  return t.importDeclaration([], t.stringLiteral(path));
}

function tryGetTemplateImports(file, rendererRelativePath) {
  const resolvedRendererPath = tryResolveFrom(
    rendererRelativePath,
    file.opts.filename,
  );
  let templateImports;

  if (resolvedRendererPath) {
    if (resolvedRendererPath.endsWith(".marko")) {
      addTemplateImport(resolvedRendererPath);
    } else if (resolvedRendererPath.endsWith(".js")) {
      try {
        for (const statement of parseStatements(
          file,
          file.markoOpts.fileSystem.readFileSync(resolvedRendererPath, "utf-8"),
        )) {
          if (statement.type === "ImportDeclaration") {
            addTemplateImport(statement.source.value);
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
                addTemplateImport(node.arguments[0].value);
              }
            });
          }
        }
      } catch {
        // Ignore
      }
    }
  }

  return templateImports;

  function addTemplateImport(request) {
    if (request.endsWith(".marko")) {
      const resolvedTemplatePath = tryResolveFrom(
        request,
        resolvedRendererPath,
      );
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

function tryResolveFrom(request, from) {
  return request[0] === "."
    ? path.resolve(from, "..", request)
    : /^(?:[/\\]|[a-zA-Z]:)/.test(request)
      ? request
      : markoModules.tryResolve(request, path.dirname(from));
}

function toTestFn(val) {
  if (typeof val === "function") {
    return val;
  }

  return val.test.bind(val);
}

function isLassoDep(dep) {
  return dep.startsWith(lassoDepPrefix);
}

/**
 * Lasso manifest deps in `lasso-marko` do not support node module resolution.
 * eg `package: @ebay/ebayui-core/browser.json` will not resolve.
 *
 * This resolution returns a direct posix relative path.
 */
function resolveLassoManifestDepRelativeToEntry(entryFile, targetFile, dep) {
  const entryFileName = entryFile.opts.filename;
  const targetFileName = targetFile.opts.filename;
  if (entryFileName === targetFileName) return dep;

  const resolved = toPosix(
    path.relative(
      path.dirname(entryFileName),
      path.join(targetFileName, "..", dep.slice(lassoDepPrefix.length)),
    ),
  );
  return lassoDepPrefix + (resolved[0] === "." ? resolved : `./${resolved}`);
}

const toPosix = path.sep === "/" ? (v) => v : (v) => v.replace(/\\/g, "/");
