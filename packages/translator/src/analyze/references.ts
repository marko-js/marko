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
  state?: true;
  input?: { [x: string]: boolean };
  inputAccessor?: string; // only set when the reference _is_ input itself.
}

interface TemplateReferenceMeta extends ReferenceMeta {
  set?: ReferenceMeta;
  yield?: ReferenceMeta;
  // This is when we know it is going to render a specific renderBody (eg `<${input.x}/>)
  knownRenderBodies?: {
    [x: string]: ReferenceMeta;
  };
  // This is when we don't know the specific renderBody, but know what input it's based under.
  unknownRenderBodies?: {
    [x: string]: ReferenceMeta;
  };
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
      state?: true;
      input?: { [x: string]: true };
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
  Identifier(identifier) {
    if (
      identifier.node.name !== "input" ||
      identifier.scope.hasBinding(identifier.node.name)
    ) {
      return;
    }

    trackInputReference(identifier, "");
  },
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
          let references = templateMeta[tagDef.name];

          if (references) {
            // When we've got multiple references we cannot do the `inputAccessor` optimization.
            references.inputAccessor = undefined;
          } else {
            references = templateMeta[tagDef.name] = {
              inputAccessor: defaultAttrReferences.inputAccessor,
            };
          }

          if (defaultAttrReferences.state) {
            references.state = true;
          }

          if (defaultAttrReferences.input) {
            references.input = {
              ...references.input,
              ...defaultAttrReferences.input,
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
              references.state = true;
              break;
            case "const": {
              const defaultAttrReferences = getDefaultAttrReferenceMeta(tag);
              if (defaultAttrReferences) {
                references.state = defaultAttrReferences.state;
                references.input = defaultAttrReferences.input;
                references.inputAccessor = defaultAttrReferences.inputAccessor;
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
                  if (
                    setReferences.state ||
                    setReferences.input ||
                    setReferences.inputAccessor
                  ) {
                    references.state = true;
                  }
                }
              } else {
                references.state = true;
              }
              break;
            }
          }
        } else if (tagDef?.html) {
          references.state = true;
        } else {
          const childFile = loadFileForTag(tag);

          if (childFile) {
            const childExtra = childFile.path.node.extra;
            const childYieldReferences = childExtra.references?.yield;

            if (childYieldReferences) {
              if (
                childYieldReferences.state ||
                ((childYieldReferences.input ||
                  childYieldReferences.inputAccessor) &&
                  hasStatefulAttributes(tag))
              ) {
                references.state = true;
              }
            }
          }
        }

        if (references.inputAccessor) {
          // Reference is an alias of input, so we track its binding as input references.
          trackInputAlias(
            tag.get("var") as t.NodePath<t.LVal>,
            references.inputAccessor
          );
        } else {
          // Otherwise copy the reference meta to all of the bindings introduced.
          copyReferencesToBindings(
            tag.get("var").getBindingIdentifiers(),
            tag.scope,
            references
          );
        }
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
                if (attrReferences.state) {
                  references.state = true;
                }

                if (attrReferences.input) {
                  references.input = {
                    ...references.input,
                    ...attrReferences.input,
                  };
                }
              }
            }
            break;
        }
      } else {
        references.state = true;
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
  // TODO: support mapping yield input/inputAccessor back to attribute.
  return (
    tag.node.extra.nestedAttributeTags ||
    tag.get("attributes").some((attr) => {
      const refs = attr.node.extra.references?.value;
      return refs && (refs.state || refs.inputAccessor || refs.input);
    })
  );
}

function trackInputReference(
  identifier: t.NodePath<t.Identifier>,
  accessor: string
) {
  let curPath = identifier as t.NodePath<t.Node>;
  let curAccessor = accessor;

  while (true) {
    const parentPath = curPath.parentPath!;

    if (parentPath.isVariableDeclarator()) {
      trackInputAlias(parentPath.get("id"), curAccessor);
      return;
    }

    if (parentPath.isMemberExpression()) {
      const property = parentPath.get("property");

      if (!parentPath.node.computed) {
        curAccessor = joinAccessor(
          curAccessor,
          (property.node as t.Identifier).name
        );
      } else if (property.isStringLiteral()) {
        curAccessor = joinAccessor(curAccessor, property.node.value);
      } else {
        // Bail when computed property used.
        break;
      }
    } else {
      break;
    }

    curPath = parentPath;
  }

  const exprRoot = getExprRoot(curPath);
  const exprMeta = getMetaForExpr(exprRoot);
  const inputsForExpr = (exprMeta.input ??= {});

  if (exprRoot === curPath) {
    exprMeta.inputAccessor = curAccessor;
  }

  if (!inputsForExpr[curAccessor]) {
    const tagMeta = getMetaForTag(exprRoot);
    const inputsForTag = tagMeta ? (tagMeta.input ??= {}) : inputsForExpr;
    inputsForExpr[curAccessor] = true;

    if (!tagMeta || !inputsForTag[curAccessor]) {
      const templateMeta = getMetaForTemplate(exprRoot);
      const inputsForTemplate = (templateMeta.input ??= {});
      inputsForTemplate[curAccessor] = inputsForTag[curAccessor] = true;
    }
  }
}

function trackInputAlias(lVal: t.NodePath<t.LVal>, accessor: string) {
  if (lVal.isIdentifier()) {
    for (const ref of lVal.scope.getBinding(lVal.node.name)!.referencePaths) {
      trackInputReference(ref as t.NodePath<t.Identifier>, accessor);
    }
  } else if (lVal.isArrayPattern()) {
    let i = 0;
    for (const element of lVal.get("elements")) {
      if (element.node) {
        if (element.isRestElement()) {
          trackInputAlias(element.get("argument"), accessor);
        } else {
          trackInputAlias(
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
        trackInputAlias(property.get("argument"), accessor);
      } else if (property.isObjectProperty()) {
        trackInputAlias(
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
  if (references.state || references.input) {
    for (const name in names) {
      for (const refPath of scope.getBinding(name)!.referencePaths) {
        const exprRoot = getExprRoot(refPath);
        const exprMeta = getMetaForExpr(exprRoot);
        const tagMeta = getMetaForTag(exprRoot) ?? exprMeta;
        const templateMeta = getMetaForTemplate(exprRoot);

        if (references.state) {
          templateMeta.state = tagMeta.state = exprMeta.state = true;
        }

        if (references.input) {
          tagMeta.input = { ...tagMeta.input, ...references.input };
          exprMeta.input = { ...exprMeta.input, ...references.input };
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
