import path from "path";
import { types as t } from "@marko/babel-types";

const IMPORTS = new WeakMap();

const toPosix =
  path.sep === "/"
    ? v => v
    : v => {
        let result = "";
        for (let i = v.length; i--; ) {
          const c = v[i];
          result = (c === path.sep ? "/" : c) + result;
        }

        return result;
      };

export function resolveRelativePath(file, request) {
  if (request[0] === ".") {
    return request;
  }

  const { sourceFileName } = file.opts;
  let relativePath = toPosix(
    path.relative(path.dirname(sourceFileName), request)
  );
  if (relativePath[0] !== ".") relativePath = `./${relativePath}`;
  return relativePath.replace(/^(?:\.{1,2}\/)+node_modules\//, "");
}

export function importDefault(file, request, nameHint) {
  const imports = getImports(file);
  request = remapProductionMarkoBuild(file, request);
  let importDeclaration = imports.get(request);

  if (!importDeclaration) {
    imports.set(
      request,
      (importDeclaration = file.path.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(request))
      )[0])
    );
  }

  if (!nameHint) {
    return;
  }

  const specifiers = importDeclaration.get("specifiers");
  const specifier = specifiers.find(specifier =>
    specifier.isImportDefaultSpecifier()
  );

  if (!specifier) {
    const identifier = file.scope.generateUidIdentifier(nameHint);
    importDeclaration.pushContainer(
      "specifiers",
      t.importDefaultSpecifier(identifier)
    );
    return identifier;
  }

  return t.identifier(specifier.node.local.name);
}

export function importNamed(file, request, name, nameHint = name) {
  request = remapProductionMarkoBuild(file, request);
  const imports = getImports(file);
  let importDeclaration = imports.get(request);

  if (!importDeclaration) {
    imports.set(
      request,
      (importDeclaration = file.path.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(request))
      )[0])
    );
  }

  const specifiers = importDeclaration.get("specifiers");
  const specifier = specifiers.find(
    specifier =>
      specifier.isImportSpecifier() && specifier.node.imported.name === name
  );

  if (!specifier) {
    const identifier = file.scope.generateUidIdentifier(nameHint);
    importDeclaration.pushContainer(
      "specifiers",
      t.importSpecifier(identifier, t.identifier(name))
    );
    return identifier;
  }

  return t.identifier(specifier.node.local.name);
}

function getImports(file) {
  let imports = IMPORTS.get(file);

  if (!imports) {
    IMPORTS.set(file, (imports = new Map()));
  }

  return imports;
}

function remapProductionMarkoBuild(file, request) {
  if (!file.markoOpts.optimize) return request;
  return request.replace(/^marko\/src\//, "marko/dist/");
}
