// TODO: this shares a bunch of logic with the native tag translator.
// we should probably attempt to share that logic where possible.
// Also need to ensure it stays in sync.

import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  getProgram,
  type Tag,
} from "@marko/compiler/babel-utils";

import { getEventHandlerName, isEventHandler } from "../../common/helpers";
import { WalkCode } from "../../common/types";
import evaluate from "../util/evaluate";
import { generateUidIdentifier } from "../util/generate-uid";
import { getAccessorProp } from "../util/get-accessor-char";
import isInvokedFunction from "../util/is-invoked-function";
import { isOutputHTML } from "../util/marko-config";
import { type Opt, push } from "../util/optional";
import {
  type Binding,
  BindingType,
  createBinding,
  dropReferences,
  getScopeAccessorLiteral,
  mergeReferences,
  setReferencesScope,
  trackHoistedReference,
} from "../util/references";
import { callRuntime, getHTMLRuntime } from "../util/runtime";
import {
  createScopeReadExpression,
  getScopeExpression,
} from "../util/scope-read";
import {
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  isSameOrChildSection,
} from "../util/sections";
import {
  addBindingSerializeReasonExpr,
  forceBindingSerialize,
  forceOwnersSerialize,
  getBindingSerializeReason,
} from "../util/serialize-reasons";
import {
  addHTMLEffectCall,
  addStatement,
  getRegisterUID,
} from "../util/signals";
import { toObjectProperty } from "../util/to-property-name";
import { propsToExpression } from "../util/translate-attrs";
import translateVar from "../util/translate-var";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { scopeIdentifier } from "../visitors/program";

const kNodeBinding = Symbol("style tag node binding");
const kGetterId = Symbol("node getter id");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kNodeBinding]?: Binding;
    [kGetterId]?: string;
  }
}

export default {
  analyze(tag) {
    assertNoArgs(tag);
    assertNoParams(tag);

    const { node } = tag;
    if (node.var && !t.isIdentifier(node.var)) {
      throw tag
        .get("var")
        .buildCodeFrameError(
          "Tag variables on native elements cannot be destructured.",
        );
    }

    const seen: Record<string, t.MarkoAttribute> = {};
    const { attributes } = tag.node;
    let spreadReferenceNodes: t.Node[] | undefined;
    let exprExtras: Opt<t.NodeExtra>;
    let hasEventHandlers = false;
    let hasDynamicAttributes = false;

    for (let i = attributes.length; i--; ) {
      const attr = attributes[i];
      const valueExtra = (attr.value.extra ??= {});

      if (t.isMarkoAttribute(attr)) {
        if (seen[attr.name]) {
          // drop references for duplicated attributes.
          dropReferences(attr.value);
          continue;
        }

        seen[attr.name] = attr;

        if (isEventHandler(attr.name)) {
          valueExtra.isEffect = true;
          hasEventHandlers = true;
        } else if (!evaluate(attr.value).confident) {
          hasDynamicAttributes = true;
        }
      } else if (t.isMarkoSpreadAttribute(attr)) {
        valueExtra.isEffect = true;
        hasEventHandlers = true;
        hasDynamicAttributes = true;
      }

      if (spreadReferenceNodes) {
        spreadReferenceNodes.push(attr.value);
      } else if (t.isMarkoSpreadAttribute(attr)) {
        spreadReferenceNodes = [attr.value];
      } else {
        exprExtras = push(exprExtras, valueExtra);
      }
    }

    const bodyPlaceholderNodes: t.Node[] = [];
    let hasBodyPlaceholders = false;
    for (const child of tag.node.body.body) {
      if (t.isMarkoPlaceholder(child)) {
        bodyPlaceholderNodes.push(child.value);
        hasBodyPlaceholders = true;
      } else if (!t.isMarkoText(child)) {
        throw tag.hub.buildError(
          child,
          "Invalid child. Only text is allowed inside an html-style.",
        );
      }
    }

    if (
      node.var ||
      hasEventHandlers ||
      hasDynamicAttributes ||
      hasBodyPlaceholders
    ) {
      const tagExtra = (node.extra ??= {});
      const tagSection = getOrCreateSection(tag);
      const nodeBinding = (tagExtra[kNodeBinding] = createBinding(
        "#style",
        BindingType.dom,
        tagSection,
      ));
      getProgram().node.extra.isInteractive ||= hasEventHandlers;

      if (spreadReferenceNodes) {
        mergeReferences(tagSection, tag.node, spreadReferenceNodes);
      }

      if (hasBodyPlaceholders) {
        exprExtras = push(
          exprExtras,
          bodyPlaceholderNodes.length === 1
            ? (bodyPlaceholderNodes[0].extra ??= {})
            : mergeReferences(
                tagSection,
                bodyPlaceholderNodes[0],
                bodyPlaceholderNodes.slice(1),
              ),
        );
      }

      if (hasEventHandlers || spreadReferenceNodes) {
        forceBindingSerialize(tagSection, nodeBinding);
      }

      if (node.var) {
        forceBindingSerialize(tagSection, nodeBinding);

        for (const ref of tag.scope.getBinding(node.var.name)!.referencePaths) {
          const refSection = getOrCreateSection(ref);
          setReferencesScope(ref);

          if (isSameOrChildSection(tagSection, refSection)) {
            forceOwnersSerialize(
              refSection,
              tagSection,
              getAccessorProp().Owner,
            );
            if (!tagExtra[kGetterId] && !isInvokedFunction(ref)) {
              tagExtra[kGetterId] = getRegisterUID(tagSection, "#style");
            }
          } else {
            trackHoistedReference(ref as t.NodePath<t.Identifier>, nodeBinding);
          }
        }
      }

      addBindingSerializeReasonExpr(
        tagSection,
        nodeBinding,
        push(exprExtras, tagExtra),
      );
    }
  },
  translate: {
    enter(tag) {
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];
      const isHTML = isOutputHTML();
      const write = writer.writeTo(tag);
      const tagSection = getSection(tag);
      const hasVar = !!tag.node.var;

      if (hasVar) {
        const getterId = tagExtra[kGetterId];
        if (isHTML) {
          translateVar(
            tag,
            callRuntime(
              "nodeRef",
              getterId && getScopeIdIdentifier(tagSection),
              getterId && t.stringLiteral(getterId),
            ),
          );
        } else {
          const varName = (tag.node.var as t.Identifier).name;
          const references = tag.scope.getBinding(varName)!.referencePaths;
          let getterFnIdentifier: t.Identifier | undefined;
          if (getterId) {
            getterFnIdentifier = generateUidIdentifier(`get_${varName}`);
            getProgram().node.body.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  getterFnIdentifier,
                  callRuntime(
                    "nodeRef",
                    t.stringLiteral(getterId),
                    getScopeAccessorLiteral(nodeBinding!),
                  ),
                ),
              ]),
            );
          }

          for (const reference of references) {
            const referenceSection = getSection(reference);
            if (isInvokedFunction(reference)) {
              reference.parentPath.replaceWith(
                t.expressionStatement(
                  createScopeReadExpression(referenceSection, nodeBinding!),
                ),
              );
            } else if (getterFnIdentifier) {
              reference.replaceWith(
                t.callExpression(getterFnIdentifier, [
                  getScopeExpression(referenceSection, getSection(tag)),
                ]),
              );
            }
          }
        }
      }

      const visitAccessor = nodeBinding && getScopeAccessorLiteral(nodeBinding);
      if (visitAccessor) {
        walks.visit(tag, WalkCode.Get);
      }

      write`<style`;

      const usedAttrs = getUsedAttrs(tag.node);
      const { staticAttrs, skipExpression, spreadExpression } = usedAttrs;

      for (const attr of staticAttrs) {
        const { name, value } = attr;
        const { confident, computed } = value.extra || {};
        const valueReferences = value.extra?.referencedBindings;

        switch (name) {
          case "class":
          case "style": {
            const helper = `${name}Attr` as const;
            if (confident) {
              write`${getHTMLRuntime()[helper](computed)}`;
            } else if (isHTML) {
              write`${callRuntime(helper, value)}`;
            } else {
              addStatement(
                "render",
                tagSection,
                valueReferences,
                t.expressionStatement(
                  callRuntime(
                    helper,
                    t.memberExpression(scopeIdentifier, visitAccessor!, true),
                    value,
                  ),
                ),
              );
            }
            break;
          }
          default:
            if (confident) {
              write`${getHTMLRuntime().attr(name, computed)}`;
            } else if (isHTML) {
              if (isEventHandler(name)) {
                addHTMLEffectCall(tagSection, valueReferences);
              } else {
                write`${callRuntime("attr", t.stringLiteral(name), value)}`;
              }
            } else if (isEventHandler(name)) {
              addStatement(
                "effect",
                tagSection,
                valueReferences,
                t.expressionStatement(
                  callRuntime(
                    "on",
                    t.memberExpression(scopeIdentifier, visitAccessor!, true),
                    t.stringLiteral(getEventHandlerName(name)),
                    value,
                  ),
                ),
              );
            } else {
              addStatement(
                "render",
                tagSection,
                valueReferences,
                t.expressionStatement(
                  callRuntime(
                    "attr",
                    t.memberExpression(scopeIdentifier, visitAccessor!, true),
                    t.stringLiteral(name),
                    value,
                  ),
                ),
              );
            }

            break;
        }
      }

      if (spreadExpression) {
        if (isHTML) {
          addHTMLEffectCall(tagSection, tagExtra.referencedBindings);

          if (skipExpression) {
            write`${callRuntime("partialAttrs", spreadExpression, skipExpression, visitAccessor, getScopeIdIdentifier(tagSection), t.stringLiteral("style"))}`;
          } else {
            write`${callRuntime("attrs", spreadExpression, visitAccessor, getScopeIdIdentifier(tagSection), t.stringLiteral("style"))}`;
          }
        } else {
          if (skipExpression) {
            addStatement(
              "render",
              tagSection,
              tagExtra.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  "partialAttrs",
                  scopeIdentifier,
                  visitAccessor,
                  spreadExpression,
                  skipExpression,
                ),
              ),
            );
          } else {
            addStatement(
              "render",
              tagSection,
              tagExtra.referencedBindings,
              t.expressionStatement(
                callRuntime(
                  "attrs",
                  scopeIdentifier,
                  visitAccessor,
                  spreadExpression,
                ),
              ),
            );
          }

          addStatement(
            "effect",
            tagSection,
            tagExtra.referencedBindings,
            t.expressionStatement(
              callRuntime("attrsEvents", scopeIdentifier, visitAccessor),
            ),
            false,
          );
        }
      }

      write`>`;
      walks.enter(tag);
    },
    exit(tag) {
      const tagSection = getSection(tag);
      const tagExtra = tag.node.extra!;
      const nodeBinding = tagExtra[kNodeBinding];
      const write = writer.writeTo(tag);

      if (isOutputHTML()) {
        for (const child of tag.node.body.body) {
          if (t.isMarkoText(child)) {
            write`${child.value}`;
          } else if (t.isMarkoPlaceholder(child)) {
            write`${callRuntime("escapeStyle", child.value)}`;
          }
        }
      } else {
        const templateQuasis: t.TemplateElement[] = [];
        const templateExpressions: t.Expression[] = [];
        let currentQuasi = "";
        let referencePlaceholder: t.MarkoPlaceholder | undefined;
        for (const child of tag.node.body.body) {
          if (t.isMarkoText(child)) {
            currentQuasi += child.value;
          } else if (t.isMarkoPlaceholder(child)) {
            referencePlaceholder ||= child;
            templateQuasis.push(t.templateElement({ raw: currentQuasi }));
            templateExpressions.push(child.value);
            currentQuasi = "";
          }
        }

        if (!referencePlaceholder) {
          write`${currentQuasi}`;
        } else {
          templateQuasis.push(t.templateElement({ raw: currentQuasi }));
          addStatement(
            "render",
            getSection(tag),
            referencePlaceholder.value.extra?.referencedBindings,
            t.expressionStatement(
              callRuntime(
                "textContent",
                t.memberExpression(
                  scopeIdentifier,
                  getScopeAccessorLiteral(nodeBinding!),
                  true,
                ),
                t.templateLiteral(templateQuasis, templateExpressions),
              ),
            ),
          );
        }
      }

      write`</style>`;

      if (nodeBinding) {
        writer.markNode(
          tag,
          nodeBinding,
          getBindingSerializeReason(tagSection, nodeBinding),
        );
      }

      walks.exit(tag);
      tag.remove();
    },
  },
  "@disabled": "#html-disabled",
  "@media": "#html-media",
  "@nonce": "#html-nonce",
  "@type": "#html-type",
  "attribute-groups": ["html-attributes"],
  parseOptions: {
    text: true,
    preserveWhitespace: true,
  },
} as Tag;

function getUsedAttrs(tag: t.MarkoTag) {
  const seen: Record<string, t.MarkoAttribute> = {};
  const { attributes } = tag;
  const maybeStaticAttrs = new Set<t.MarkoAttribute>();
  let spreadExpression: undefined | t.Expression;
  let skipExpression: undefined | t.Expression;
  let spreadProps: undefined | t.ObjectExpression["properties"];
  let skipProps: undefined | t.ObjectExpression["properties"];
  for (let i = attributes.length; i--; ) {
    const attr = attributes[i];
    const { value } = attr;
    if (t.isMarkoSpreadAttribute(attr)) {
      if (!spreadProps) {
        spreadProps = [];
      }
      spreadProps.push(t.spreadElement(value));
    } else if (!seen[attr.name]) {
      seen[attr.name] = attr;
      if (spreadProps) {
        spreadProps.push(toObjectProperty(attr.name, attr.value));
      } else {
        maybeStaticAttrs.add(attr);
      }
    }
  }

  const staticAttrs = [...maybeStaticAttrs].reverse();

  if (spreadProps) {
    spreadProps.reverse();

    for (const { name } of staticAttrs) {
      (skipProps ||= []).push(toObjectProperty(name, t.numericLiteral(1)));
    }

    if (skipProps) {
      skipExpression = t.objectExpression(skipProps);
    }

    spreadExpression = propsToExpression(spreadProps);
  }

  return {
    staticAttrs,
    spreadExpression,
    skipExpression,
  };
}
