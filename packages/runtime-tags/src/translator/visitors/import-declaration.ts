import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  loadFileForImport,
  resolveRelativePath,
  resolveTagImport,
} from "@marko/compiler/babel-utils";

import { getEventHandlerName, isEventHandler } from "../../common/helpers";
import type { LoadTrigger } from "../../html/assets";
import { addAssetImport, isClientAssetImport } from "../util/asset-imports";
import { generateUid } from "../util/generate-uid";
import { getMarkoOpts, getReadyId, isOutputHTML } from "../util/marko-config";
import { callRuntime, importRuntimeFeature } from "../util/runtime";
import { createProgramState } from "../util/state";
import { toMemberExpression } from "../util/to-property-name";
import type { TemplateVisitor } from "../util/visitors";
import {
  resolveRegisteredExport,
  type ResolvedExport,
  trackImportedFn,
} from "./function";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** Absolute filenames of templates this one imports with `load`. */
    loadImports?: Set<string>;
  }
  export interface NodeExtra {
    tagImport?: string;
    loadImport?: LoadImportConfig;
    registeredImportedFns?: (ResolvedExport & { local: string })[];
  }
}

export type LoadImportConfig =
  | { render: true; triggers?: never }
  | { render: false; triggers: LoadTrigger[] };
const triggerRegExp = /\s*([\w-]+)\s*([^?|]+?)?\s*(?:\?([^|]*?))?\s*(?:\||$)/g;
const [getHtmlLoadWrapped] = createProgramState(
  () => new Map<string, string>(),
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
      addAssetImport(getFile(), value);
    }

    const tagImport = resolveTagImport(importDecl, value);
    if (tagImport) {
      (node.extra ??= {}).tagImport = tagImport;
      const tags = getFile().metadata.marko.tags!;
      if (!tags.includes(tagImport)) {
        tags.push(tagImport);
      }

      trackImportedRegisteredFns(importDecl);
    }

    const loadAttrPath = node.attributes?.length
      ? (importDecl.get("attributes") as t.NodePath<t.ImportAttribute>[]).find(
          (p) =>
            (p.node.key.type === "Identifier"
              ? p.node.key.name
              : p.node.key.value) === "load",
        )
      : undefined;
    if (loadAttrPath) {
      const loadImport = getLoadImportConfig(loadAttrPath.get("value"));

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

      if (!node.specifiers.some(t.isImportDefaultSpecifier)) {
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

      (node.extra ??= {}).loadImport = loadImport;
      const { file } = importDecl.hub;

      const loadFile = tagImport && loadFileForImport(file, value);
      if (!loadFile) {
        throw importDecl.buildCodeFrameError(
          "Unable to resolve marko file for load import.",
        );
      }

      // The page entry links eager templates only; a lazy one arrives through
      // its own load entry.
      ((file.path.node.extra.loadImports ??= new Set()) as Set<string>).add(
        loadFile.opts.filename as string,
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
          const { local } = node.specifiers.find(t.isImportDefaultSpecifier)!;
          const binding = importDecl.scope.getBinding(local.name)!;

          if (isOutputHTML()) {
            const { file } = importDecl.hub;
            const loadFile = loadFileForImport(file, node.source.value)!;
            const wrappedName = getOrCreateHtmlLoadWrapped(
              getReadyId(loadFile)!,
              t.identifier(local.name),
              loadFile.opts.filename,
              loadImport.render ? undefined : loadImport.triggers,
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
            const allKnownTagReferences = binding.referencePaths.every(
              (ref) =>
                t.isMarkoTag(ref.parent) && ref.parent.extra?.tagNameLoad,
            );
            if (allKnownTagReferences) {
              importDecl.remove();
            } else {
              const { file } = importDecl.hub;
              const loadFile = loadFileForImport(file, node.source.value)!;
              const resolvedPath = resolveRelativePath(
                file,
                loadFile.opts.filename,
              );
              importRuntimeFeature("catch");
              importDecl.replaceWith(
                t.variableDeclaration("const", [
                  t.variableDeclarator(
                    local,
                    callRuntime(
                      "_load_template",
                      t.stringLiteral(loadFile.metadata.marko.id),
                      t.arrowFunctionExpression(
                        [],
                        t.callExpression(
                          t.memberExpression(
                            t.callExpression(t.import(), [
                              t.stringLiteral(resolvedPath),
                            ]),
                            t.identifier("then"),
                          ),
                          [
                            t.arrowFunctionExpression(
                              [t.identifier("mod")],
                              toMemberExpression(
                                t.identifier("mod"),
                                "default",
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ]),
              );
            }
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
function getOrCreateHtmlLoadWrapped(
  readyId: string,
  originalIdentifier: t.Expression,
  filename: string,
  triggers: LoadTrigger[] | undefined,
) {
  const markoOpts = getMarkoOpts();
  const loadWrapped = getHtmlLoadWrapped();
  const existing = loadWrapped.get(readyId);
  if (existing) return existing;

  markoOpts.linkAssets?.onAsset("load", filename, readyId);

  const wrappedName = generateUid(
    `${(originalIdentifier as t.Identifier).name ?? "tag"}_withLoadAssets`,
  );
  loadWrapped.set(readyId, wrappedName);
  getProgram().node.body.push(
    t.markoScriptlet(
      [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            t.identifier(wrappedName),
            callRuntime(
              "withLoadAssets",
              originalIdentifier,
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

function trackImportedRegisteredFns(
  importDecl: t.NodePath<t.ImportDeclaration>,
) {
  const { node } = importDecl;
  // Type imports are already stripped: the compiler turns `stripTypes` on for
  // every output this translator runs for.
  const childFile = loadFileForImport(getFile(), node.source.value);
  if (!childFile) return;

  for (const specifier of importDecl.get("specifiers")) {
    if (!specifier.isImportSpecifier()) continue;
    const { imported } = specifier.node;
    const importedName =
      imported.type === "Identifier" ? imported.name : imported.value;
    // A default specifier is skipped by its type; this is the same import
    // written as a name, and a template's default export is the template.
    if (importedName === "default") continue;

    const resolved = resolveRegisteredExport(childFile, importedName);
    if (resolved) {
      trackImportedFn(importDecl, specifier.node.local.name, resolved);
    }
  }
}

function getLoadImportConfig(
  attrValue: t.NodePath<t.StringLiteral>,
): LoadImportConfig {
  const raw = attrValue.node.value;

  if (raw === "render") return { render: true };

  const triggers: LoadTrigger[] = [];
  for (const match of raw.matchAll(triggerRegExp)) {
    const type = parseTriggerType(match[1]);
    const selector = match[2];
    const query = match[3];

    if (!type) {
      throw attrValue.buildCodeFrameError(
        `Unknown trigger type "${match[1]}". Supported triggers are "visible", "idle", "media", and "on*".`,
      );
    }
    if (type === "render") {
      throw attrValue.buildCodeFrameError(
        'The "render" trigger must be used alone.',
      );
    }
    if (type === "idle") {
      if (selector) {
        throw attrValue.buildCodeFrameError(
          `Selector is not supported for the "idle" trigger.`,
        );
      }
    } else if (!selector) {
      throw attrValue.buildCodeFrameError(
        type === "media"
          ? `A media query is required for the "media" trigger. (e.g. "media(max-width:768px)")`
          : `A selector is required for the "${type}" trigger. (e.g. "${type}.my-element")`,
      );
    }
    const trigger: LoadTrigger = (
      selector ? { type, selector } : { type }
    ) as LoadTrigger;
    if (query) {
      const params = new URLSearchParams(query);
      switch (type) {
        case "visible": {
          let rootMargin: string | undefined;
          for (const [key, value] of params) {
            if (key !== "rootMargin") {
              throw attrValue.buildCodeFrameError(
                `Unknown param "${key}" for the "visible" trigger. Supported params: "rootMargin".`,
              );
            }
            rootMargin = value;
          }
          if (rootMargin) {
            trigger.options = { rootMargin };
          }
          break;
        }
        case "idle": {
          let timeout: number | undefined;
          for (const [key, value] of params) {
            if (key !== "timeout") {
              throw attrValue.buildCodeFrameError(
                `Unknown param "${key}" for the "idle" trigger. Supported params: "timeout".`,
              );
            }
            timeout = Number(value);
          }
          if (timeout) {
            trigger.options = { timeout };
          }
          break;
        }
        default:
          throw attrValue.buildCodeFrameError(
            `Params are not supported for the "${type}" trigger.`,
          );
      }
    }
    triggers.push(trigger);
  }

  if (!triggers.length) {
    throw attrValue.buildCodeFrameError(
      'The "load" attribute requires "render" or at least one trigger (e.g. "visible.my-element").',
    );
  }

  return { render: false, triggers };
}

function parseTriggerType(type: string) {
  switch (type) {
    case "idle":
    case "media":
    case "render":
    case "visible":
      return type;
    default:
      return isEventHandler(type)
        ? (`on-${getEventHandlerName(type)}` as const)
        : undefined;
  }
}
