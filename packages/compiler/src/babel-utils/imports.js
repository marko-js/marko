import path from "path";

import { types as t } from "@marko/compiler";
import { cwd } from "@marko/compiler/modules";
import { relativeImportPath } from "relative-import-path";

const IMPORTS_KEY = Symbol();
const FS_START = path.sep === "/" ? path.sep : /^(.*?:)/.exec(cwd)[1];
const REG_NODE_MODULES = /[\\/]node_modules[\\/]/;

export function resolveRelativePath(file, request, tagDef) {
  if (request.startsWith(FS_START)) {
    request =
      packageImportPath(file.opts.filename, tagDef, request) ||
      relativeImportPath(file.opts.filename, request);
  }

  if (file.markoOpts.optimize) {
    request = request.replace(
      /(^|\/node-modules\/)marko\/src\//,
      "$1marko/dist/",
    );
  }

  return request;
}

/**
 * A tag installed into `node_modules` is imported through the name its package was
 * resolved by, since its path is a realpath which may not be importable at all.
 */
function packageImportPath(from, tagDef, request) {
  if (!tagDef?.packageName || !REG_NODE_MODULES.test(request)) return;

  const { packageRoot } = tagDef;
  // Within the package we stay relative, both because it always resolves and
  // because a self reference would only work if the package exports the tag.
  if (!isWithin(packageRoot, request) || isWithin(packageRoot, from)) return;

  const subPath = path.relative(packageRoot, request);
  return `${tagDef.packageName}/${subPath.split(path.sep).join("/")}`;
}

function isWithin(dir, filename) {
  const rel = path.relative(dir, filename);
  // `path.relative` walks out of the dir with `..`, or returns an absolute path
  // when it cannot relate the two at all, eg across windows drives.
  return (
    !!rel &&
    rel !== ".." &&
    !rel.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(rel)
  );
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
        t.importDeclaration([], t.stringLiteral(request)),
      )[0]),
    );
  }

  if (!nameHint) {
    return;
  }

  const specifiers = importDeclaration.get("specifiers");
  const specifier = specifiers.find((specifier) =>
    specifier.isImportDefaultSpecifier(),
  );

  if (!specifier) {
    const identifier = file.scope.generateUidIdentifier(nameHint);
    importDeclaration.pushContainer(
      "specifiers",
      t.importDefaultSpecifier(identifier),
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
        t.importDeclaration([], t.stringLiteral(request)),
      )[0]),
    );
  }

  const specifiers = importDeclaration.get("specifiers");
  const specifier = specifiers.find(
    (specifier) =>
      specifier.isImportSpecifier() && specifier.node.imported.name === name,
  );

  if (!specifier) {
    const identifier = file.scope.generateUidIdentifier(nameHint);
    importDeclaration.pushContainer(
      "specifiers",
      t.importSpecifier(identifier, t.identifier(name)),
    );
    return identifier;
  }

  return t.identifier(specifier.node.local.name);
}

export function importStar(file, request, nameHint) {
  const imports = getImports(file);
  request = resolveRelativePath(file, request);
  let importDeclaration = imports.get(request);

  if (!importDeclaration) {
    imports.set(
      request,
      (importDeclaration = file.path.pushContainer(
        "body",
        t.importDeclaration([], t.stringLiteral(request)),
      )[0]),
    );
  }

  if (!nameHint) {
    return;
  }

  const specifiers = importDeclaration.get("specifiers");
  const specifier = specifiers.find((specifier) =>
    specifier.isImportNamespaceSpecifier(),
  );

  if (!specifier) {
    const identifier = file.scope.generateUidIdentifier(nameHint);
    importDeclaration.pushContainer(
      "specifiers",
      t.importNamespaceSpecifier(identifier),
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
