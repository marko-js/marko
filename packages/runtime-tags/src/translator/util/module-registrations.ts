import path from "path";

import { types as t } from "@marko/compiler";
import { getFile, importDefault } from "@marko/compiler/babel-utils";

import type { ResolvedExport } from "../visitors/function";
import { getMarkoOpts, isOutputHTML } from "./marko-config";
import { forEach } from "./optional";
import { isRegisteredFnExtra } from "./references";
import { getRegisteredExports } from "./rendered-content";
import { callRuntime, getRuntimePath, registerRuntimeValue } from "./runtime";
import { isValidPropertyIdentifier } from "./to-property-name";

/**
 * Writes the registrations for module scoped functions: the ones this template
 * exports and registers itself, and the ones it imports from a template that
 * reserved a register id without registering it. The dom output also registers
 * the content of rendered templates that it may name with an unresolved value.
 */
export function writeModuleRegistrations(program: t.NodePath<t.Program>) {
  const file = getFile();
  const statements: t.Statement[] = [];
  const seen = new Set<string>();

  for (const child of program.node.body) {
    const registeredImportedFns = child.extra?.registeredImportedFns;
    if (registeredImportedFns) {
      for (const importedFn of registeredImportedFns) {
        if (seen.has(importedFn.registerId)) continue;
        seen.add(importedFn.registerId);

        // The dom output shares a module per function, so templates that import
        // the same one do not each carry a copy of its registration into the
        // bundle. The html output has no bundle to keep small.
        if (isOutputHTML()) {
          statements.push(
            buildRegistration(importedFn.local, importedFn.registerId),
          );
        } else {
          importDefault(file, resolveRegisterModule(file, importedFn));
        }
      }
    } else if (child.type === "ExportNamedDeclaration") {
      addExportRegistrations(child, seen, statements);
    }
  }

  if (!isOutputHTML()) {
    forEach(getRegisteredExports(), (contentExport) => {
      if (!seen.has(contentExport.registerId)) {
        seen.add(contentExport.registerId);
        importDefault(file, resolveRegisterModule(file, contentExport));
      }
    });
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
  { filename, exportName, registerId }: ResolvedExport,
) {
  const importer = file.opts.filename as string;
  return getMarkoOpts().resolveVirtualDependency!(importer, {
    virtualPath: `${relativePath(importer, filename)}.register-${exportName}.js`,
    code:
      `import { ${exportName} } from "./${path.basename(filename)}";\n` +
      `import { _resumed } from "${getRuntimePath("dom")}";\n` +
      `_resumed${isValidPropertyIdentifier(registerId) ? `.${registerId}` : `[${JSON.stringify(registerId)}]`} = ${exportName};\n`,
  })!;
}

// The module is placed beside the template it registers, so that it can import
// it as a sibling. `resolveRelativePath` would name a template in another
// package by that package, which resolves somewhere else entirely.
export function relativePath(from: string, to: string) {
  const relative = path
    .relative(path.dirname(from), to)
    .split(path.sep)
    .join("/");
  return relative.startsWith(".") ? relative : `./${relative}`;
}
