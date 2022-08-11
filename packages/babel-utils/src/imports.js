import path from "path";
import { types as t } from "@marko/compiler";
import { relativeImportPath } from "relative-import-path";

const IMPORTS_KEY = Symbol();
const FS_START = path.sep === "/" ? path.sep : /^(.*?:)/.exec(process.cwd())[1];

export function resolveRelativePath(file, request) {
  if (request.startsWith(FS_START)) {
    request = relativeImportPath(file.opts.filename, request);
  }

  if (file.markoOpts.optimize) {
    request = request.replace(
      /(^|\/node-modules\/)marko\/src\//,
      "$1marko/dist/"
    );
  }

  return request;
}

export function importDefault(file, request, nameHint) {
  const imports = getImports(file);
  request = resolveRelativePath(file, request);
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
  request = resolveRelativePath(file, request);
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
  let imports = file.metadata.marko[IMPORTS_KEY];

  if (!imports) {
    imports = file.metadata.marko[IMPORTS_KEY] = new Map();
  }

  return imports;
}
