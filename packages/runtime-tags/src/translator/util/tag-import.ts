import path from "path";

import { types as t } from "@marko/compiler";
import {
  getFile,
  importNamed,
  resolveTagImport,
} from "@marko/compiler/babel-utils";

import { getEventHandlerName, isEventHandler } from "../../common/helpers";
import type { LoadTrigger } from "../../html/assets";
import { getMarkoOpts } from "./marko-config";
import { getLiteralName } from "./to-property-name";

declare module "@marko/compiler/dist/types" {
  export interface ImportDeclarationExtra {
    tagImport?: string;
    loadImport?: LoadImportConfig;
  }
}

export type LoadImportConfig =
  | { render: true; triggers?: never }
  | { render: false; triggers: LoadTrigger[] };
const triggerRegExp = /\s*([\w-]+)\s*([^?|]+?)?\s*(?:\?([^|]*?))?\s*(?:\||$)/g;
const derivedImports = new WeakSet<t.ImportDeclaration>();

export function importOrSelfReferenceName(
  file: t.BabelFile,
  request: string,
  name: string,
  nameHint?: string,
): t.Identifier {
  if (isCircularRequest(file, request)) {
    return t.identifier(name);
  }

  return importNamed(file, request, name, nameHint);
}

export function isCircularRequest(file: t.BabelFile, request: string) {
  const { filename } = file.opts;
  return (
    request === filename ||
    (request[0] === "." && path.resolve(filename, "..", request) === filename)
  );
}

// A template importing (or re-exporting) a tag compiles it too.
export function trackTagImport(tagImport: string) {
  const tags = getFile().metadata.marko.tags!;
  if (!tags.includes(tagImport)) {
    tags.push(tagImport);
  }
}

// A tag can be typed before its import is analyzed (a section lookup or
// pre-analyze asks first), so both read the import's facts through here.
export function getImportFacts(importDecl: t.NodePath<t.ImportDeclaration>) {
  const { node } = importDecl;
  const extra = (node.extra ??= {});
  if (!derivedImports.has(node)) {
    derivedImports.add(node);
    const tagImport = resolveTagImport(importDecl, node.source.value);
    if (tagImport) extra.tagImport = tagImport;
    const loadAttrPath = getLoadAttr(importDecl);
    const loadImport =
      loadAttrPath && getLoadImportConfig(loadAttrPath.get("value"));
    // Without `linkAssets` nothing drives lazy loading (eg `linked: false`),
    // so the tag imports eagerly.
    if (loadImport && getMarkoOpts().linkAssets) extra.loadImport = loadImport;
  }
  return extra;
}

export function getLoadAttr(importDecl: t.NodePath<t.ImportDeclaration>) {
  return importDecl.node.attributes?.length
    ? (importDecl.get("attributes") as t.NodePath<t.ImportAttribute>[]).find(
        (p) => getLiteralName(p.node.key) === "load",
      )
    : undefined;
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
