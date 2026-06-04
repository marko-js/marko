import { types as t } from "@marko/compiler";
import {
  getProgram,
  loadFileForImport,
  resolveRelativePath,
  resolveTagImport,
} from "@marko/compiler/babel-utils";

import { generateUidIdentifier } from "../util/generate-uid";
import { getMarkoOpts, isOutputHTML } from "../util/marko-config";
import { callRuntime } from "../util/runtime";
import { createProgramState } from "../util/state";
import { toMemberExpression } from "../util/to-property-name";
import type { TemplateVisitor } from "../util/visitors";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    tagImport?: string;
    loadImport?: LoadImportConfig;
  }
}

export type LoadImportConfig =
  | { render: true; triggers?: never }
  | { render: false; triggers: LoadTrigger[] };
interface VisibleTrigger {
  type: "visible";
  selector: string;
  options?: { rootMargin: string };
}
interface IdleTrigger {
  type: "idle";
  selector?: never;
  options?: { timeout: number };
}
interface EventTrigger {
  type: `on-${string}`;
  selector: string;
  options?: never;
}
export type LoadTrigger = VisibleTrigger | IdleTrigger | EventTrigger;
const triggerRegExp = /\s*([\w-]+)([^?|]+)?(?:\?([^|]*?))?\s*(?:\||$)/g;
const [getHtmlLoadWrapped] = createProgramState(
  () => new Map<string, t.Identifier>(),
);

export default {
  analyze(importDecl) {
    const { node } = importDecl;
    const { source } = node;
    const { value } = source;
    const tagImport = resolveTagImport(importDecl, value);
    if (tagImport) {
      (node.extra ??= {}).tagImport = tagImport;
      const tags = importDecl.hub.file.metadata.marko.tags!;
      if (!tags.includes(tagImport)) {
        tags.push(tagImport);
      }
    }

    const loadAttrValuePath = (
      importDecl.get("attributes") as t.NodePath<t.ImportAttribute>[]
    )
      .find(
        (p) =>
          (p.node.key.type === "Identifier"
            ? p.node.key.name
            : p.node.key.value) === "load",
      )
      ?.get("value");
    if (loadAttrValuePath) {
      (node.extra ??= {}).loadImport = getLoadImportConfig(loadAttrValuePath);
      const { file } = importDecl.hub;
      const loadFile = tagImport && loadFileForImport(file, value);
      if (!loadFile) {
        throw importDecl.buildCodeFrameError(
          "Unable to resolve marko file for load import.",
        );
      }

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
            const childExtra = loadFile.ast.program.extra;
            const readyId = childExtra.readyId;

            if (readyId) {
              const wrappedIdentifier = getOrCreateHtmlLoadWrapped(
                readyId,
                t.identifier(local.name),
                loadFile.opts.filename,
                loadImport.render ? undefined : loadImport.triggers,
              );

              for (const ref of binding.referencePaths) {
                ref.replaceWith(t.cloneNode(wrappedIdentifier));
              }

              node.source.value = tagImport;
              return;
            }
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

  const wrappedIdentifier = generateUidIdentifier(
    `load_${(originalIdentifier as t.Identifier).name ?? "tag"}`,
  );
  loadWrapped.set(readyId, wrappedIdentifier);
  getProgram().node.body.push(
    t.markoScriptlet(
      [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            wrappedIdentifier,
            callRuntime(
              "withAssets",
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
  return wrappedIdentifier;
}

function getLoadImportConfig(
  attrValue: t.NodePath<t.StringLiteral>,
): LoadImportConfig {
  const raw = attrValue.node.value;

  if (raw === "render") return { render: true };

  const triggers: LoadTrigger[] = [];
  for (const [, type, selector, query] of raw.matchAll(triggerRegExp)) {
    if (type === "render") {
      throw attrValue.buildCodeFrameError(
        'The "render" trigger must be used alone.',
      );
    }
    if (!isLoadTriggerType(type)) {
      throw attrValue.buildCodeFrameError(
        `Unknown trigger type "${type}". Supported triggers are "visible", "idle", and "on-*".`,
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
        `A selector is required for the "${type}" trigger. (e.g. "${type}.my-element")`,
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

  return { render: false, triggers };
}

function isLoadTriggerType(type: string): type is LoadTrigger["type"] {
  return type === "visible" || type === "idle" || type.startsWith("on-");
}
