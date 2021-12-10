import type { types as t } from "@marko/compiler";
import * as sorted from "../util/sorted-arr";
import { getSection, Section } from "./sections";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

export interface Reference {
  name: string;
  sectionIndex: number;
  bindingIndex: number;
}
export type References = undefined | Reference | Reference[];

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    bindings?: number;
  }

  export interface IdentifierExtra {
    name?: string;
    sectionIndex?: number;
    bindingIndex?: number;
  }

  export interface MarkoTagExtra {
    varReferences?: References;
    nameReferences?: References;
  }

  export interface MarkoTagBodyExtra {
    bindings?: number;
    paramsReferences?: References;
  }

  export interface MarkoAttributeExtra {
    valueReferences?: References;
  }

  export interface MarkoSpreadAttributeExtra {
    valueReferences?: References;
  }

  export interface MarkoPlaceholderExtra {
    valueReferences?: References;
  }
}

export default function trackCustomTagReferences(tag: t.NodePath<t.MarkoTag>) {
  if (tag.has("var")) {
    trackReferences(getSection(tag), tag.get("var"));
  }

  const body = tag.get("body");
  if (body.get("body").length && body.get("params").length) {
    trackReferences(getSection(body), body);
  }
}

function trackReferences(section: Section, path: t.NodePath<any>) {
  const scope = path.scope;
  const { sectionIndex } = section;
  const bindings = path.getBindingIdentifiers() as unknown as Record<
    string,
    t.Identifier
  >;
  for (const name in bindings) {
    const references = scope.getBinding(name)!.referencePaths;

    if (references.length) {
      const identifier = bindings[name];
      const identifierExtra = (identifier.extra ??= {});
      const bindingIndex = section.bindings++;
      const ref: Reference = {
        name,
        sectionIndex,
        bindingIndex,
      };
      identifierExtra.name = name;
      identifierExtra.sectionIndex = sectionIndex;
      identifierExtra.bindingIndex = bindingIndex;

      for (const reference of references) {
        const exprRoot = getExprRoot(reference);
        const exprExtra = (exprRoot.parentPath.node.extra ??= {});
        const key = exprRoot.listKey || exprRoot.key;
        const refsKey = `${key}References`;
        const curRefs = exprExtra[refsKey] as References;

        if (curRefs) {
          if (Array.isArray(curRefs)) {
            sorted.insert(curRefs, ref, compareReferences);
          } else {
            const compareResult = compareReferences(curRefs, ref);

            if (compareResult !== 0) {
              exprExtra[refsKey] =
                compareResult > 0 ? [curRefs, ref] : [ref, curRefs];
            }
          }
        } else {
          exprExtra[refsKey] = ref;
        }
      }
    }
  }
}

function getExprRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  while (!isMarkoPath(curPath.parentPath!)) {
    curPath = curPath.parentPath!;
  }

  return curPath as t.NodePath<t.Node> & {
    parentPath: MarkoExprRootPath;
  };
}

function isMarkoPath(path: t.NodePath<any>): path is MarkoExprRootPath {
  switch (path.type) {
    case "MarkoTag":
    case "MarkoTagBody":
    case "MarkoAttribute":
    case "MarkoSpreadAttribute":
    case "MarkoPlaceholder":
      return true;
    default:
      return false;
  }
}

export function compareReferences(a: Reference, b: Reference) {
  return a.sectionIndex === b.sectionIndex
    ? a.bindingIndex - b.bindingIndex
    : a.sectionIndex - b.sectionIndex;
}
