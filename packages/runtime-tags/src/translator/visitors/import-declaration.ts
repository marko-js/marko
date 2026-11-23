import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  importNamed,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import type { LoadTrigger } from "../../html/assets";
import { addAssetImport, isClientAssetImport } from "../util/asset-imports";
import {
  generateUid,
  generateUidIdentifier,
  getUnusedParamIdentifier,
} from "../util/generate-uid";
import { getMarkoOpts, getReadyId, isOutputHTML } from "../util/marko-config";
import {
  resolveRegisteredExport,
  trackImport,
  trackImportedTemplate,
} from "../util/module-registrations";
import {
  callRuntime,
  dynamicImport,
  importRuntime,
  importRuntimeFeature,
} from "../util/runtime";
import { createOutputState } from "../util/state";
import {
  getImportFacts,
  getLoadAttr,
  type LoadImportConfig,
  trackTagImport,
} from "../util/tag-import";
import { getLiteralName, toMemberExpression } from "../util/to-property-name";
import type { TemplateVisitor } from "../util/visitors";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Absolute filenames of templates this one imports with `load`. */
    loadImports?: Set<string>;
  }
}

const [getHtmlLoadWrapped] = createOutputState(() => new Map<string, string>());
// The trigger each load import declares, which every load of it waits for.
export const [getLoadTriggers] = createOutputState(
  () => new Map<LoadImportConfig, t.Identifier>(),
);

export default {
  analyze(importDecl) {
    const { node } = importDecl;
    const { source } = node;
    const { value } = source;

    // Link client-side asset imports (eg css) into the page entry so server-only
    // templates still ship them. Only top-level imports need linking.
    if (
      t.isProgram(importDecl.parent) &&
      isClientAssetImport(getFile(), value)
    ) {
      addAssetImport(value);
    }

    const { tagImport } = getImportFacts(importDecl);
    if (tagImport) {
      trackTagImport(tagImport);
      trackRegisteredImports(importDecl);
    }

    const loadAttrPath = getLoadAttr(importDecl);
    if (loadAttrPath) {
      if ((node.importKind || "value") !== "value") {
        throw importDecl.buildCodeFrameError("Invalid load import.");
      }

      for (const specifier of importDecl.get("specifiers")) {
        if (!t.isImportDefaultSpecifier(specifier.node)) {
          throw specifier.buildCodeFrameError(
            "Invalid load import, only a default specifier is allowed.",
          );
        }
      }

      if (!node.specifiers.length) {
        throw importDecl.buildCodeFrameError(
          "Invalid load import, a default specifier is required.",
        );
      }

      // Without `linkAssets` there is no asset orchestration to drive lazy
      // loading (eg `linked: false`); fall back to an eager tag import.
      if (!getMarkoOpts().linkAssets) {
        loadAttrPath.remove();
        return;
      }

      // A lazy template's uses are wrapped as its import translates, which is
      // too late for content above it.
      const { local } = node.specifiers[0];
      const useAbove = importDecl.scope
        .getBinding(local.name)!
        .referencePaths.find(
          (ref) =>
            (ref.find((p) => !!p.parentPath?.isProgram())!.key as number) <
            (importDecl.key as number),
        );
      if (useAbove) {
        throw useAbove.buildCodeFrameError(
          `\`${local.name}\` is used above its \`load\` import. Move the import above its first use.`,
        );
      }

      const file = getFile();

      const loadFile = tagImport && loadFileForImport(file, value);
      if (!loadFile) {
        throw importDecl.buildCodeFrameError(
          "Unable to resolve marko file for load import.",
        );
      }

      // The page entry links eager templates only; a lazy one arrives through
      // its own load entry.
      (file.path.node.extra.loadImports ??= new Set()).add(
        loadFile.opts.filename,
      );

      // The compat dynamic tag this child renders through cannot read the load
      // config, so it would reference a binding this import no longer declares.
      if (loadFile.ast.program.extra?.featureType === "class") {
        throw importDecl.buildCodeFrameError(
          `The [\`load\` import attribute](https://markojs.com/docs/reference/lazy-loading) is not supported for the Marko 5 (class API) tag \`${value}\`. Import it without \`load\`, or migrate the tag to the tags API.`,
        );
      }
    }
  },
  translate: {
    exit(importDecl) {
      const { node } = importDecl;
      const { extra } = node;
      const tagImport = extra?.tagImport;
      const loadImport = extra?.loadImport;
      if (tagImport) {
        if (loadImport) {
          const { local } = node.specifiers[0];
          const binding = importDecl.scope.getBinding(local.name)!;
          const file = getFile();
          const loadFile = loadFileForImport(file, node.source.value)!;

          if (isOutputHTML()) {
            const wrappedName = ensureHtmlLoadWrapped(
              loadFile,
              () => t.identifier(local.name),
              loadImport.triggers,
            );

            for (const ref of binding.referencePaths) {
              ref.replaceWith(t.identifier(wrappedName));
            }

            node.source.value = tagImport;
            // The `load` attribute must not reach the emitted server module;
            // Node rejects unknown import attributes at import time.
            node.attributes = undefined;
            return;
          } else {
            const statements: t.Statement[] = [];
            const triggerExpr = loadTriggersToExpression(loadImport);
            let trigger: t.Identifier | undefined;
            if (triggerExpr) {
              trigger = generateUidIdentifier(`load_${local.name}_trigger`);
              getLoadTriggers().set(loadImport, trigger);
              statements.push(
                t.variableDeclaration("const", [
                  t.variableDeclarator(trigger, triggerExpr),
                ]),
              );
            }

            const onlyLoadTagReferences = binding.referencePaths.every(
              (ref) =>
                t.isMarkoTag(ref.parent) && ref.parent.extra?.tagNameLoad,
            );
            if (!onlyLoadTagReferences) {
              importRuntimeFeature("catch");
              const load = t.arrowFunctionExpression(
                [getUnusedParamIdentifier()],
                dynamicImport(
                  resolveRelativePath(file, loadFile.opts.filename),
                  t.arrowFunctionExpression(
                    [t.identifier("mod")],
                    toMemberExpression(t.identifier("mod"), "default"),
                  ),
                ),
              );
              const args = [
                t.stringLiteral(loadFile.metadata.marko.id),
                applyLoadTrigger(trigger, load),
              ];
              statements.push(
                t.variableDeclaration("const", [
                  t.variableDeclarator(
                    local,
                    // `_load_template` registers the template; one the server
                    // writes stays registered whatever else the client keeps.
                    extra.registeredImports?.has(local.name)
                      ? t.callExpression(importRuntime("_load_template"), args)
                      : callRuntime("_load_template", ...args),
                  ),
                ]),
              );
            }

            importDecl.replaceWithMultiple(statements);
          }

          return;
        }

        node.source.value = tagImport;
      }
    },
  },
} satisfies TemplateVisitor<t.ImportDeclaration>;

// Same-file lazy imports of one template share the first wrapper's triggers;
// diverging triggers only meaningfully conflict across files, out of scope here.
export function ensureHtmlLoadWrapped(
  loadFile: t.BabelFile,
  getTemplate: () => t.Identifier,
  triggers: LoadTrigger[] | undefined,
) {
  const markoOpts = getMarkoOpts();
  const loadWrapped = getHtmlLoadWrapped();
  const readyId = getReadyId(loadFile)!;
  const existing = loadWrapped.get(readyId);
  if (existing) return existing;

  markoOpts.linkAssets!.onAsset("load", loadFile.opts.filename, readyId);

  const template = getTemplate();
  const wrappedName = generateUid(`${template.name}_withLoadAssets`);
  loadWrapped.set(readyId, wrappedName);
  getProgram().node.body.push(
    t.markoScriptlet(
      [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            t.identifier(wrappedName),
            callRuntime(
              "withLoadAssets",
              t.arrowFunctionExpression([], template),
              t.stringLiteral(loadFile.metadata.marko.id),
              importNamed(getFile(), markoOpts.linkAssets!.runtime, "flush"),
              t.stringLiteral(readyId),
              triggers ? t.valueToNode(triggers) : undefined,
            ),
          ),
        ]),
      ],
      true,
    ),
  );
  return wrappedName;
}

// Applying a trigger only wraps the load, so it is pure: a load nothing reads
// still drops. Not a runtime helper call.
export function applyLoadTrigger(
  trigger: t.Identifier | undefined,
  load: t.Expression,
) {
  return trigger
    ? t.addComment(t.callExpression(trigger, [load]), "leading", "@__PURE__")
    : load;
}

function trackRegisteredImports(importDecl: t.NodePath<t.ImportDeclaration>) {
  const { node } = importDecl;
  // Type imports are already stripped: the compiler turns `stripTypes` on for
  // every output this translator runs for.
  const childFile = loadFileForImport(getFile(), node.source.value);
  if (!childFile) return;

  for (const specifier of importDecl.get("specifiers")) {
    let importedName = "default";
    if (specifier.isImportSpecifier()) {
      importedName = getLiteralName(specifier.node.imported);
    } else if (!specifier.isImportDefaultSpecifier()) {
      continue;
    }

    const local = specifier.node.local.name;
    if (importedName === "default") {
      trackImportedTemplate(importDecl, local, childFile);
    } else {
      trackImport(
        importDecl,
        local,
        resolveRegisteredExport(childFile, importedName),
      );
    }
  }
}

function loadTriggersToExpression(loadConfig: LoadImportConfig) {
  if (loadConfig.render) return;

  const triggers = loadConfig.triggers.map(toDOMTriggerExpression);
  return triggers.length === 1
    ? triggers[0]
    : callRuntime("_load_race_trigger", ...triggers);
}

function toDOMTriggerExpression(trigger: LoadTrigger) {
  switch (trigger.type) {
    case "visible":
      return callRuntime(
        "_load_visible_trigger",
        t.stringLiteral(trigger.selector),
        optionalValueToNode(trigger.options),
      );
    case "idle":
      return callRuntime(
        "_load_idle_trigger",
        optionalValueToNode(trigger.options),
      );
    case "media":
      return callRuntime(
        "_load_media_trigger",
        t.stringLiteral(trigger.selector),
      );
    default:
      return callRuntime(
        "_load_event_trigger",
        t.stringLiteral(trigger.type.slice("on-".length)),
        t.stringLiteral(trigger.selector),
      );
  }
}

function optionalValueToNode(value: unknown) {
  return value ? t.valueToNode(value) : undefined;
}
