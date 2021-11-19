import {
  getTagDef,
  loadFileForTag,
  loadFileForImport,
  TagDefinition,
} from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

interface ReferenceMeta {
  lets?: true;
  attrs?: { [x: string]: boolean };
}

interface TemplateReferenceMeta extends ReferenceMeta {
  set?: ReferenceMeta;
  yield?: ReferenceMeta;
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    references?: TemplateReferenceMeta;
  }

  export interface MarkoTagExtra {
    references?: {
      var?: ReferenceMeta;
      name?: ReferenceMeta;
      // ResourceMeta as tracked from a child
      lets?: true;
      attrs?: { [x: string]: true };
    };
  }

  export interface MarkoTagBodyExtra {
    references?: {
      params?: ReferenceMeta[];
    };
  }

  export interface MarkoAttributeExtra {
    references?: {
      value?: ReferenceMeta;
    };
  }

  export interface MarkoSpreadAttributeExtra {
    references?: {
      value?: ReferenceMeta;
    };
  }

  export interface MarkoPlaceholderExtra {
    references?: {
      value?: ReferenceMeta;
    };
  }
}

export default {
  MarkoTag: {
    exit(tag) {
      const tagDef = getTagDef(tag);

      if (
        tagDef &&
        isCoreTag(tagDef) &&
        (tagDef.name === "yield" || tagDef.name === "set")
      ) {
        const defaultAttrReferences = getDefaultAttrReferenceMeta(tag);

        if (defaultAttrReferences) {
          const templateMeta = getMetaForTemplate(tag as t.NodePath);
          const references =
            templateMeta[tagDef.name] || (templateMeta[tagDef.name] = {});

          if (defaultAttrReferences.lets) {
            references.lets = true;
          }

          if (defaultAttrReferences.attrs) {
            references.attrs = {
              ...references.attrs,
              ...defaultAttrReferences.attrs,
            };
          }
        }
      }

      if (tag.has("var")) {
        const references: ReferenceMeta = {};

        if (tagDef?.translator && isCoreTag(tagDef)) {
          switch (tagDef.name) {
            case "let":
              // TODO could check if there are any assignments.
              references.lets = true;
              break;
            case "attrs":
              trackAttrAlias(tag.get("var") as t.NodePath<t.LVal>, "");
              break;
            case "const": {
              const defaultAttrReferences = getDefaultAttrReferenceMeta(tag);
              if (defaultAttrReferences) {
                references.lets = defaultAttrReferences.lets;
                references.attrs = defaultAttrReferences.attrs;
              }
              break;
            }
            case "get": {
              const defaultAttr = tag.get("attributes")[0];
              const defaultAttrValue = defaultAttr.isMarkoAttribute({
                default: true,
              })
                ? defaultAttr.get("value")
                : undefined;
              if (defaultAttrValue?.isStringLiteral()) {
                const request = defaultAttrValue.node.value;
                const setReferences = (
                  request === "."
                    ? tag.hub.file
                    : loadFileForImport(tag.hub.file, request)
                )?.path.node.extra.references?.set;

                if (setReferences) {
                  // TODO: could be more granular, but needs more thought.
                  if (setReferences.lets || setReferences.attrs) {
                    references.lets = true;
                  }
                }
              } else {
                references.lets = true;
              }
              break;
            }
          }
        } else if (tagDef?.html) {
          references.lets = true;
        } else {
          const childFile = loadFileForTag(tag);

          if (childFile) {
            const childExtra = childFile.path.node.extra;
            const childYieldReferences = childExtra.references?.yield;

            if (childYieldReferences) {
              if (
                childYieldReferences.lets ||
                (childYieldReferences.attrs && hasStatefulAttributes(tag))
              ) {
                references.lets = true;
              }
            }
          }
        }

        copyReferencesToBindings(
          tag.get("var").getBindingIdentifiers(),
          tag.scope,
          references
        );
      }
    },
  },
  MarkoTagBody(body) {
    if (body.get("params").length) {
      const tag = body.parentPath as t.NodePath<t.MarkoTag>;
      const tagDef = getTagDef(tag);
      const references: ReferenceMeta = {};

      if (tagDef?.translator && isCoreTag(tagDef)) {
        switch (tagDef.name) {
          case "for":
            for (const attr of tag.get("attributes")) {
              const attrReferences = getAttrReferenceMeta(attr);

              if (attrReferences) {
                if (attrReferences.lets) {
                  references.lets = true;
                }

                if (attrReferences.attrs) {
                  references.attrs = {
                    ...references.attrs,
                    ...attrReferences.attrs,
                  };
                }
              }
            }
            break;
        }
      } else {
        references.lets = true;
      }

      copyReferencesToBindings(
        body.getBindingIdentifiers(),
        body.scope,
        references
      );
    }
  },
} as t.Visitor;

function getMetaForExpr(expr: ReturnType<typeof getExprRoot>): ReferenceMeta {
  let references = ((expr.parentPath.node.extra ??= {}).references ??=
    {}) as any;

  if (expr.listKey) {
    references = references[expr.listKey] ??= [];
  }

  return (references[expr.key] ??= {});
}

function getMetaForTag(expr: ReturnType<typeof getExprRoot>) {
  let { parentPath } = expr;

  if (parentPath.isMarkoPlaceholder()) {
    return;
  }

  if (!parentPath.isMarkoTag()) {
    parentPath = parentPath.parentPath as typeof parentPath;
  }

  return ((parentPath.node.extra ??= {}).references ??= {}) as ReferenceMeta;
}

function getMetaForTemplate(path: t.NodePath) {
  return (path.hub.file.path.node.extra.references ??=
    {}) as TemplateReferenceMeta;
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

function getDefaultAttrReferenceMeta(tag: t.NodePath<t.MarkoTag>) {
  const defaultAttr = tag
    .get("attributes")
    .find((attr) => (attr.node as t.MarkoAttribute).default);

  return defaultAttr && getAttrReferenceMeta(defaultAttr);
}

function getAttrReferenceMeta(
  attr: t.NodePath<t.MarkoAttribute | t.MarkoSpreadAttribute>
) {
  return attr.node.extra?.references?.value;
}

function hasStatefulAttributes(tag: t.NodePath<t.MarkoTag>) {
  // TODO: optimize nestedAttributeTags
  // TODO: support mapping yield attrs back to attribute.
  return (
    tag.node.extra.nestedAttributeTags ||
    tag.get("attributes").some((attr) => {
      const refs = attr.node.extra.references?.value;
      return refs && (refs.lets || refs.attrs);
    })
  );
}

function trackAttrReference(
  identifier: t.NodePath<t.Identifier>,
  accessor: string
) {
  const exprRoot = getExprRoot(identifier);
  const exprMeta = getMetaForExpr(exprRoot);
  const attrsForExpr = (exprMeta.attrs ??= {});

  if (!attrsForExpr[accessor]) {
    const tagMeta = getMetaForTag(exprRoot);
    const inputsForTag = tagMeta ? (tagMeta.attrs ??= {}) : attrsForExpr;
    attrsForExpr[accessor] = true;

    if (!tagMeta || !inputsForTag[accessor]) {
      const templateMeta = getMetaForTemplate(exprRoot);
      const inputsForTemplate = (templateMeta.attrs ??= {});
      inputsForTemplate[accessor] = inputsForTag[accessor] = true;
    }
  }
}

function trackAttrAlias(lVal: t.NodePath<t.LVal>, accessor: string) {
  if (lVal.isIdentifier()) {
    for (const ref of lVal.scope.getBinding(lVal.node.name)!.referencePaths) {
      trackAttrReference(ref as t.NodePath<t.Identifier>, accessor);
    }
  } else if (lVal.isArrayPattern()) {
    let i = 0;
    for (const element of lVal.get("elements")) {
      if (element.node) {
        if (element.isRestElement()) {
          trackAttrAlias(element.get("argument"), accessor);
        } else {
          trackAttrAlias(
            element as Extract<typeof element, t.NodePath<null>>,
            joinAccessor(accessor, `${i}`)
          );
        }
      }

      i++;
    }
  } else if (lVal.isObjectPattern()) {
    for (const property of lVal.get("properties")) {
      if (property.isRestElement()) {
        trackAttrAlias(property.get("argument"), accessor);
      } else if (property.isObjectProperty()) {
        trackAttrAlias(
          property.get("value") as t.NodePath<t.LVal>,
          joinAccessor(
            accessor,
            (property.get("key").node as t.Identifier).name
          )
        );
      }
    }
  }
}

function copyReferencesToBindings(
  names: ReturnType<t.NodePath["getBindingIdentifiers"]>,
  scope: t.Scope,
  references: ReferenceMeta
) {
  if (references.lets || references.attrs) {
    for (const name in names) {
      for (const refPath of scope.getBinding(name)!.referencePaths) {
        const exprRoot = getExprRoot(refPath);
        const exprMeta = getMetaForExpr(exprRoot);
        const tagMeta = getMetaForTag(exprRoot) ?? exprMeta;
        const templateMeta = getMetaForTemplate(exprRoot);

        if (references.lets) {
          templateMeta.lets = tagMeta.lets = exprMeta.lets = true;
        }

        if (references.attrs) {
          tagMeta.attrs = { ...tagMeta.attrs, ...references.attrs };
          exprMeta.attrs = { ...exprMeta.attrs, ...references.attrs };
        }
      }
    }
  }
}

function isMarkoPath(path: t.NodePath<any>): path is MarkoExprRootPath {
  switch (path.node.type) {
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

function isCoreTag(tagDef: TagDefinition) {
  return tagDef.taglibId === "marko-core";
}

function joinAccessor(a: string, b: string) {
  return a ? `${a}.${b}` : b;
}
