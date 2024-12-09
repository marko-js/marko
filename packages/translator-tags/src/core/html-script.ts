// TODO: this shares a bunch of logic with the native tag translator.
// we should probably attempt to share that logic where possible.
// Also need to ensure it stays in sync.

import { assertNoArgs, assertNoParams, type Tag } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import {
  getEventHandlerName,
  isEventHandler,
} from "@marko/runtime-tags/common/helpers";
import { WalkCode } from "@marko/runtime-tags/common/types";

import evaluate from "../util/evaluate";
import { isOutputHTML } from "../util/marko-config";
import {
  BindingType,
  createBinding,
  dropReferences,
  getScopeAccessorLiteral,
  mergeReferences,
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
} from "../util/sections";
import {
  addHTMLEffectCall,
  addStatement,
  getRegisterUID,
  getSerializedScopeProperties,
} from "../util/signals";
import { toObjectProperty } from "../util/to-property-name";
import { propsToExpression } from "../util/translate-attrs";
import translateVar from "../util/translate-var";
import * as walks from "../util/walks";
import * as writer from "../util/writer";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import {
  kNativeTagBinding,
  kSerializeMarker,
} from "../visitors/tag/native-tag";

const kGetterId = Symbol("node getter id");

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
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

    const section = getOrCreateSection(tag);
    let hasEventHandlers = false;
    let hasDynamicAttributes = false;

    const seen: Record<string, t.MarkoAttribute> = {};
    const { attributes } = tag.node;
    let spreadReferenceNodes: t.Node[] | undefined;
    for (let i = attributes.length; i--; ) {
      const attr = attributes[i];
      if (t.isMarkoAttribute(attr)) {
        if (seen[attr.name]) {
          // drop references for duplicated attributes.
          dropReferences(attr.value);
          continue;
        }

        seen[attr.name] = attr;

        if (isEventHandler(attr.name)) {
          (attr.value.extra ??= {}).isEffect = true;
          hasEventHandlers = true;
        } else if (!evaluate(attr.value).confident) {
          hasDynamicAttributes = true;
        }
      } else if (t.isMarkoSpreadAttribute(attr)) {
        hasEventHandlers = true;
        hasDynamicAttributes = true;
        (attr.value.extra ??= {}).isEffect = true;
      }

      if (spreadReferenceNodes) {
        spreadReferenceNodes.push(attr.value);
      } else if (t.isMarkoSpreadAttribute(attr)) {
        spreadReferenceNodes = [attr.value];
      }
    }

    if (spreadReferenceNodes) {
      mergeReferences(section, tag.node, spreadReferenceNodes);
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
          "Invalid child. Only text is allowed inside an html-script.",
        );
      }
    }

    if (bodyPlaceholderNodes.length > 1) {
      mergeReferences(
        section,
        bodyPlaceholderNodes[0],
        bodyPlaceholderNodes.slice(1),
      );
    }

    if (
      node.var ||
      hasEventHandlers ||
      hasDynamicAttributes ||
      hasBodyPlaceholders
    ) {
      currentProgramPath.node.extra.isInteractive ||= hasEventHandlers;
      const tagExtra = (node.extra ??= {});
      const bindingName = "#script";
      tagExtra[kSerializeMarker] = hasEventHandlers || !!node.var;
      tagExtra[kNativeTagBinding] = createBinding(
        bindingName,
        BindingType.dom,
        section,
      );

      if (node.var) {
        for (const ref of tag.scope.getBinding(node.var.name)!.referencePaths) {
          if (!ref.parentPath?.isCallExpression()) {
            tagExtra[kGetterId] = getRegisterUID(section, bindingName);
            break;
          }
        }
      }
    }
  },
  translate(tag) {
    const tagExtra = tag.node.extra!;
    const nodeRef = tagExtra[kNativeTagBinding];
    const isHTML = isOutputHTML();
    const write = writer.writeTo(tag);
    const section = getSection(tag);
    const hasVar = !!tag.node.var;

    if (hasVar) {
      const getterId = tagExtra[kGetterId];
      if (isHTML) {
        const varName = (tag.node.var as t.Identifier).name;
        const references = tag.scope.getBinding(varName)!.referencePaths;
        for (const reference of references) {
          let currentSection = getSection(reference);
          while (currentSection !== section && currentSection.parent) {
            getSerializedScopeProperties(currentSection).set(
              t.stringLiteral("_"),
              callRuntime(
                "ensureScopeWithId",
                getScopeIdIdentifier((currentSection = currentSection.parent!)),
              ),
            );
          }
        }

        translateVar(
          tag,
          callRuntime(
            "nodeRef",
            getterId && getScopeIdIdentifier(section),
            getterId && t.stringLiteral(getterId),
          ),
        );
      } else {
        const varName = (tag.node.var as t.Identifier).name;
        const references = tag.scope.getBinding(varName)!.referencePaths;
        let getterFnIdentifier: t.Identifier | undefined;
        if (getterId) {
          getterFnIdentifier = currentProgramPath.scope.generateUidIdentifier(
            `get_${varName}`,
          );
          currentProgramPath.pushContainer(
            "body",
            t.variableDeclaration("const", [
              t.variableDeclarator(
                getterFnIdentifier,
                callRuntime(
                  "nodeRef",
                  t.stringLiteral(getterId),
                  getScopeAccessorLiteral(nodeRef!),
                ),
              ),
            ]),
          );
        }

        for (const reference of references) {
          const referenceSection = getSection(reference);
          if (reference.parentPath?.isCallExpression()) {
            reference.parentPath.replaceWith(
              t.expressionStatement(
                createScopeReadExpression(referenceSection, nodeRef!),
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

    let visitAccessor: t.StringLiteral | t.NumericLiteral | undefined;
    if (nodeRef) {
      visitAccessor = getScopeAccessorLiteral(nodeRef);
      walks.visit(tag, WalkCode.Get);
    }

    write`<script`;

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
              section,
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
              addHTMLEffectCall(section, valueReferences);
            } else {
              write`${callRuntime("attr", t.stringLiteral(name), value)}`;
            }
          } else if (isEventHandler(name)) {
            addStatement(
              "effect",
              section,
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
              section,
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
        addHTMLEffectCall(section, tagExtra.referencedBindings);

        if (skipExpression) {
          write`${callRuntime("partialAttrs", spreadExpression, skipExpression, visitAccessor, getScopeIdIdentifier(section), t.stringLiteral("script"))}`;
        } else {
          write`${callRuntime("attrs", spreadExpression, visitAccessor, getScopeIdIdentifier(section), t.stringLiteral("script"))}`;
        }
      } else {
        if (skipExpression) {
          addStatement(
            "render",
            section,
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
            section,
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
          section,
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

    if (isOutputHTML()) {
      for (const child of tag.node.body.body) {
        if (t.isMarkoText(child)) {
          write`${child.value}`;
        } else if (t.isMarkoPlaceholder(child)) {
          write`${callRuntime("escapeScript", child.value)}`;
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
              t.memberExpression(scopeIdentifier, visitAccessor!, true),
              t.templateLiteral(templateQuasis, templateExpressions),
            ),
          ),
        );
      }
    }

    walks.exit(tag);
    write`</script>`;

    if (nodeRef) {
      writer.markNode(tag, nodeRef);
    }

    tag.remove();
  },
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
