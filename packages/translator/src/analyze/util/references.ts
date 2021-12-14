import type { types as t } from "@marko/compiler";
import * as sorted from "../../util/sorted-arr";
import { getSection, Section } from "./sections";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

export interface Binding {
  name: string;
  sectionIndex: number;
  bindingIndex: number;
}
export type References = undefined | Binding | Binding[];

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    bindings?: number;
  }

  export interface IdentifierExtra {
    binding?: Binding;
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

export default function trackReferences(tag: t.NodePath<t.MarkoTag>) {
  if (tag.has("var")) {
    trackReferencesForBindings(getSection(tag), tag.get("var"));
  }

  const body = tag.get("body");
  if (body.get("body").length && body.get("params").length) {
    trackReferencesForBindings(getSection(body), body);
  }
}

function trackReferencesForBindings(section: Section, path: t.NodePath<any>) {
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
      const binding: Binding = (identifierExtra.binding = {
        name,
        sectionIndex,
        bindingIndex,
      });

      for (const reference of references) {
        const exprRoot = getExprRoot(reference);
        const exprExtra = (exprRoot.parentPath.node.extra ??= {});
        const key = exprRoot.listKey || exprRoot.key;
        const refsKey = `${key}References`;
        const curRefs = exprExtra[refsKey] as References;

        if (curRefs) {
          if (Array.isArray(curRefs)) {
            sorted.insert(curRefs, binding, compareReferences);
          } else {
            const compareResult = compareReferences(curRefs, binding);

            if (compareResult !== 0) {
              exprExtra[refsKey] =
                compareResult > 0 ? [curRefs, binding] : [binding, curRefs];
            }
          }
        } else {
          exprExtra[refsKey] = binding;
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

export function compareReferences(a: Binding, b: Binding) {
  return a.sectionIndex === b.sectionIndex
    ? a.bindingIndex - b.bindingIndex
    : a.sectionIndex - b.sectionIndex;
}
