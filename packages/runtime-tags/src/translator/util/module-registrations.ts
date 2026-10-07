import path from "path";

import { types as t } from "@marko/compiler";
import { getFile, importDefault } from "@marko/compiler/babel-utils";

import type { RegisteredExport } from "../visitors/function";
import { getMarkoOpts, isOutputHTML } from "./marko-config";
import { isRegisteredFnExtra } from "./references";
import { callRuntime, getRuntimePath, registerRuntimeValue } from "./runtime";
import { isValidPropertyIdentifier } from "./to-property-name";

/**
 * Writes the registrations for module scoped functions: the ones this template
 * exports and registers itself, and the ones it imports from a template that
 * reserved a register id without registering it; and for templates it imports.
 */
export function writeModuleRegistrations(program: t.NodePath<t.Program>) {
  const file = getFile();
  const statements: t.Statement[] = [];
  const seen = new Set<string>();

  for (const child of program.node.body) {
    const registeredImports =
      t.isImportDeclaration(child) && child.extra?.registeredImports;
    if (registeredImports) {
      for (const [local, registered] of registeredImports) {
        if (seen.has(registered.registerId)) continue;
        seen.add(registered.registerId);

        // The dom output shares a module per export, so templates that import
        // the same one do not each carry a copy of its registration into the
        // bundle. The html output has no bundle to keep small, and a server
        // template registers itself.
        if (isOutputHTML()) {
          if (registered.exportName !== "default") {
            statements.push(buildRegistration(local, registered.registerId));
          }
        } else {
          importDefault(file, resolveRegisterModule(file, registered));
        }
      }
    } else if (child.type === "ExportNamedDeclaration") {
      addExportRegistrations(child, seen, statements);
    }
  }

  program.node.body.push(...statements);
}

// The exporting template registers itself inline: it is the only module that
// can, and importing its own registration back would be a cycle through the
// declaration it is registering.
function addExportRegistrations(
  node: t.ExportNamedDeclaration,
  seen: Set<string>,
  statements: t.Statement[],
) {
  const { declaration } = node;
  if (!declaration) return;

  const add = (local: string, registerId: string) => {
    if (seen.has(registerId)) return;
    seen.add(registerId);
    statements.push(buildRegistration(local, registerId));
  };

  if (declaration.type === "FunctionDeclaration") {
    if (isRegisteredFnExtra(declaration.extra)) {
      add(declaration.id!.name, declaration.extra.registerId);
    }
    return;
  }

  // The html output registers exported function expressions where they are
  // written, by replacing them with the `_resume` call that returns them.
  if (isOutputHTML() || declaration.type !== "VariableDeclaration") return;

  for (const declarator of declaration.declarations) {
    const extra = declarator.init?.extra;
    if (isRegisteredFnExtra(extra) && t.isIdentifier(declarator.id)) {
      add(declarator.id.name, extra.registerId);
    }
  }
}

function buildRegistration(local: string, registerId: string) {
  return t.expressionStatement(
    isOutputHTML()
      ? callRuntime("_resume", t.identifier(local), t.stringLiteral(registerId))
      : registerRuntimeValue(registerId, t.identifier(local)),
  );
}

// Keyed by the declaring template and the export's canonical name, so every
// template that imports the function resolves to the same module.
function resolveRegisterModule(
  file: t.BabelFile,
  { filename, exportName, registerId }: RegisteredExport,
) {
  const importer = file.opts.filename;
  return getMarkoOpts().resolveVirtualDependency!(importer, {
    virtualPath: `${relativePath(importer, filename)}.register-${exportName}.js`,
    code:
      `import { ${exportName} as value } from "./${path.basename(filename)}";\n` +
      `import { _resumed } from "${getRuntimePath("dom")}";\n` +
      `_resumed${isValidPropertyIdentifier(registerId) ? `.${registerId}` : `[${JSON.stringify(registerId)}]`} = value;\n`,
  })!;
}

// The module is placed beside the template it registers, so that it can import
// it as a sibling. `resolveRelativePath` would name a template in another
// package by that package, which resolves somewhere else entirely.
function relativePath(from: string, to: string) {
  const relative = path
    .relative(path.dirname(from), to)
    .split(path.sep)
    .join("/");
  return relative.startsWith(".") ? relative : `./${relative}`;
}
