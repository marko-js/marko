import path from "path";

import { types as t, type MarkoMeta } from "@marko/compiler";
import type { TagDefinition } from "@marko/compiler/babel-utils";
import { cwd } from "@marko/compiler/modules";
import { relativeImportPath } from "relative-import-path";

import type { CompileFile } from "../util/compile-file";

const IMPORTS_KEY = Symbol();
const FS_START = path.sep === "/" ? path.sep : /^(.*?:)/.exec(cwd)![1];
const REG_NODE_MODULES = /[\\/]node_modules[\\/]/;

interface Imported {
  declaration: t.NodePath<t.ImportDeclaration>;
  named: Map<string, string>;
}

type ImportsMeta = MarkoMeta & {
  [IMPORTS_KEY]?: Map<string, Imported>;
};

export function resolveRelativePath(
  file: t.BabelFile,
  request: string,
  tagDef?: TagDefinition,
) {
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
function packageImportPath(
  from: string,
  tagDef: TagDefinition | undefined,
  request: string,
) {
  if (!tagDef?.packageName || !REG_NODE_MODULES.test(request)) return;

  const packageRoot = tagDef.packageRoot!;
  // Within the package we stay relative, both because it always resolves and
  // because a self reference would only work if the package exports the tag.
  if (!isWithin(packageRoot, request) || isWithin(packageRoot, from)) return;

  const subPath = path.relative(packageRoot, request);
  return `${tagDef.packageName}/${subPath.split(path.sep).join("/")}`;
}

function isWithin(dir: string, filename: string) {
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

export function importDefault(
  file: t.BabelFile,
  request: string,
  nameHint?: string,
) {
  const { declaration } = getImport(file, request);

  if (!nameHint) {
    return;
  }

  let specifier: t.ImportDefaultSpecifier | undefined;
  for (const s of declaration.node.specifiers) {
    if (s.type === "ImportDefaultSpecifier") {
      specifier = s;
      break;
    }
  }

  if (!specifier) {
    specifier = t.importDefaultSpecifier(
      (file as CompileFile).scope.generateUidIdentifier(nameHint),
    );
    declaration.pushContainer("specifiers", specifier);
  }

  return t.identifier(specifier.local.name);
}

export function importNamed(
  file: t.BabelFile,
  request: string,
  name: string,
  nameHint = name,
) {
  const { declaration, named } = getImport(file, request);
  let localName = named.get(name);

  if (!localName) {
    localName = (file as CompileFile).scope.generateUid(nameHint);
    named.set(name, localName);
    declaration.pushContainer(
      "specifiers",
      t.importSpecifier(t.identifier(localName), t.identifier(name)),
    );
  }

  return t.identifier(localName);
}

export function importStar(
  file: t.BabelFile,
  request: string,
  nameHint?: string,
) {
  const { declaration } = getImport(file, request);

  if (!nameHint) {
    return;
  }

  let specifier: t.ImportNamespaceSpecifier | undefined;
  for (const s of declaration.node.specifiers) {
    if (s.type === "ImportNamespaceSpecifier") {
      specifier = s;
      break;
    }
  }

  if (!specifier) {
    specifier = t.importNamespaceSpecifier(
      (file as CompileFile).scope.generateUidIdentifier(nameHint),
    );
    declaration.pushContainer("specifiers", specifier);
  }

  return t.identifier(specifier.local.name);
}

// Only these helpers edit the declarations they create, so `named` stays in
// sync with the declaration's named specifiers.
function getImport(file: t.BabelFile, request: string): Imported {
  const meta = file.metadata.marko as ImportsMeta;
  let imports = meta[IMPORTS_KEY];

  if (!imports) {
    imports = meta[IMPORTS_KEY] = new Map();
  }

  let imported = imports.get(request);

  if (!imported) {
    // Keyed by the request both as given and resolved, since resolving a
    // resolved request returns it unchanged.
    const resolved = resolveRelativePath(file, request);
    imported = imports.get(resolved);

    if (!imported) {
      imports.set(
        resolved,
        (imported = {
          declaration: file.path.pushContainer(
            "body",
            t.importDeclaration([], t.stringLiteral(resolved)),
          )[0],
          named: new Map(),
        }),
      );
    }

    imports.set(request, imported);
  }

  return imported;
}
