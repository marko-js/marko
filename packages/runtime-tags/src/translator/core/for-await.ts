import { types as t } from "@marko/compiler";
import {
  assertAllowedAttributes,
  assertNoArgs,
  assertNoAttributeTags,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import {
  getBranchSectionAccessor,
  initBranchSection,
} from "../util/branch-tag";
import { detectForSelector, getForSelectorKey } from "../util/for-selector";
import { getAccessorProp } from "../util/get-accessor-enums";
import { getKnownAttrValues } from "../util/get-known-attr-values";
import {
  type Binding,
  BindingType,
  createBinding,
  dropNodes,
  getAllTagReferenceNodes,
  getScopeAccessorLiteral,
  kBranchSerializeReason,
  mergeReferences,
  onFinalizeReferences,
  setBindingDownstream,
  trackParamsReferences,
} from "../util/references";
import { callRuntime, importRuntimeFeature } from "../util/runtime";
import runtimeInfo from "../util/runtime-info";
import {
  getBranchRendererArgs,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import { getSerializeGuard } from "../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
} from "../util/serialize-reasons";
import {
  addValue,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  setClosureSignalBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { findLoopParamRead, getLoopKeyBinding } from "./for";

const kStatefulReason = Symbol("<for-await> stateful reason");
const kDOMBinding = Symbol("for-await tag dom binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kDOMBinding]?: Binding;
  }
}

export default {
  analyze(tag) {
    assertNoVar(tag);
    assertNoArgs(tag);
    assertNoSpreadAttrs(tag);
    assertNoAttributeTags(
      tag,
      "For pending and error UI, wrap the `<for-await>` in a [`<try>` tag](https://markojs.com/docs/reference/core-tag#try) with `<@placeholder>` and `<@catch|err|>` attribute tags.",
    );

    const { node } = tag;
    const tagSection = getOrCreateSection(tag);
    const tagBody = tag.get("body");
    const paramsBinding = trackParamsReferences(tagBody, BindingType.derived);

    // Redirect the React/Vue `key=` habit to `by=` before the generic error.
    const keyAttr = node.attributes.find(
      (attr) => attr.type === "MarkoAttribute" && attr.name === "key",
    );
    if (keyAttr) {
      throw tag.hub.buildError(
        keyAttr,
        'The [`<for-await>` tag](https://markojs.com/docs/reference/core-tag#for-await) keys items with the `by=` attribute, not `key=`. Use `by="propName"` or `by=(item, index) => key`.',
      );
    }

    if (
      !node.attributes.some(
        (attr) => attr.type === "MarkoAttribute" && attr.name === "of",
      )
    ) {
      throw tag.buildCodeFrameError(
        "The [`<for-await>` tag](https://markojs.com/docs/reference/core-tag#for-await) requires an `of=` attribute.",
      );
    }

    assertAllowedAttributes(tag, ["of", "by"]);

    const byAttr = getKnownAttrValues(node).by;

    // `by=` is evaluated once before the loop runs, so loop parameters are not
    // in scope; keying by one otherwise dies at render with an
    // undefined-variable error.
    if (byAttr) {
      const paramNames = new Set<string>();
      for (const param of node.body.params) {
        for (const name in t.getBindingIdentifiers(param)) {
          paramNames.add(name);
        }
      }
      const paramRead = paramNames.size
        ? findLoopParamRead(byAttr, paramNames)
        : undefined;
      if (paramRead) {
        throw tag.hub.buildError(
          paramRead,
          `The \`by=\` attribute is evaluated before the loop runs, so \`${paramRead.name}\` is not in scope. Key with a property name string (\`by="id"\`) or a function (\`by=(${paramRead.name}) => key\`).`,
        );
      }
    }

    const bodySection = startSection(tagBody);

    if (!bodySection) {
      // An empty loop body deliberately compiles the whole tag away, matching
      // `<for>`; the `of=` expression is then never evaluated.
      dropNodes(getAllTagReferenceNodes(tag.node));
      return;
    }

    const tagExtra = mergeReferences(
      tagSection,
      node,
      getAllTagReferenceNodes(node),
    );
    const nodeBinding = (tagExtra[kDOMBinding] = createBinding(
      "#text",
      BindingType.dom,
      tagSection,
    ));

    addSerializeExpr(tagSection, tagExtra, kStatefulReason);

    if (paramsBinding) {
      setBindingDownstream(paramsBinding, tagExtra);

      const keyBinding = getLoopKeyBinding(byAttr, paramsBinding, "of");
      if (keyBinding) {
        if (!byAttr) {
          keyBinding.type = BindingType.constant;
          keyBinding.scopeAccessor = getAccessorProp().LoopKey;
        }
        onFinalizeReferences(() => detectForSelector(bodySection, keyBinding));
      }
    }
    initBranchSection(
      bodySection,
      tagExtra,
      getBranchSectionAccessor(nodeBinding),
    );

    structure.visit(tag, WalkCode.Replace);
    structure.enterShallow(tag);
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        const bodySection = getSectionForBody(tag.get("body"));

        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);
        writer.flushBefore(tag);
      },
      exit(tag) {
        const { node } = tag;
        const tagBody = tag.get("body");
        const tagSection = getSection(tag);
        const bodySection = getSectionForBody(tagBody)!;
        const nodeBinding = node.extra![kDOMBinding]!;
        const forAttrs = getKnownAttrValues(node);

        writer.flushInto(tag);
        writeHTMLResumeStatements(tagBody);

        const statefulSerializeArg = getSerializeGuard(
          tagSection,
          getSerializeReason(tagSection, kStatefulReason),
          true,
        );
        const markerSerializeArg = getSerializeGuard(
          tagSection,
          getSerializeReason(tagSection, nodeBinding),
          !statefulSerializeArg,
        );
        const branchSerializeArg = getSerializeGuard(
          tagSection,
          getSerializeReason(bodySection, kBranchSerializeReason),
          !markerSerializeArg,
        );

        tag
          .replaceWith(
            t.expressionStatement(
              callRuntime(
                "_for_await",
                forAttrs.of,
                t.arrowFunctionExpression(
                  node.body.params,
                  t.blockStatement(node.body.body as t.Statement[]),
                ),
                forAttrs.by || t.numericLiteral(0),
                getScopeIdIdentifier(tagSection),
                getScopeAccessorLiteral(nodeBinding),
                branchSerializeArg,
                markerSerializeArg,
                statefulSerializeArg,
              ),
            ),
          )[0]
          .skip();
      },
    },
    dom: {
      enter(tag) {
        const bodySection = getSectionForBody(tag.get("body"));

        if (!bodySection) {
          tag.remove();
          return;
        }

        setSectionParentIsOwner(bodySection, true);
      },
      exit(tag) {
        const { node } = tag;
        const tagBody = tag.get("body");
        const tagSection = getSection(tag);
        const bodySection = getSectionForBody(tagBody)!;
        const tagExtra = node.extra!;
        const { referencedBindings } = tagExtra;
        const nodeRef = tagExtra[kDOMBinding]!;

        setClosureSignalBuilder(tag, (closure, render) => {
          const selectorKeyBinding = getForSelectorKey(bodySection, closure);
          if (selectorKeyBinding) {
            return callRuntime(
              "_for_selector",
              getScopeAccessorLiteral(nodeRef, true),
              getScopeAccessorLiteral(closure, true),
              getScopeAccessorLiteral(selectorKeyBinding, true),
              render,
            );
          }
          return callRuntime(
            "_for_closure",
            getScopeAccessorLiteral(nodeRef, true),
            render,
          );
        });

        const signal = getSignal(tagSection, nodeRef, "for_await");
        signal.build = () => {
          importRuntimeFeature("catch");
          return callRuntime(
            "_for_await",
            getScopeAccessorLiteral(nodeRef, true),
            ...replaceNullishAndEmptyFunctionsWith0(
              getBranchRendererArgs(bodySection),
            ),
          );
        };

        const forAttrs = getKnownAttrValues(node);
        const loopArgs = [forAttrs.of];
        if (forAttrs.by) {
          loopArgs.push(forAttrs.by);
        }

        addValue(
          tagSection,
          referencedBindings,
          signal,
          t.arrayExpression(loopArgs),
        );

        tag.remove();
      },
    },
  }),
  attributes: {
    of: {
      type: "expression",
      autocomplete: [
        {
          description:
            "Iterates over an async iterable, rendering each item as it arrives.",
        },
      ],
    },
    by: {
      type: "expression",
      autocomplete: [
        {
          description:
            "A property name or function used to key each item for reconciliation.",
        },
      ],
    },
  },
  autocomplete: [
    {
      snippet: "for-await|${1:value, index}| of=${3:asyncIterable}",
      description:
        "Use to iterate over an async iterable, streaming each item as it arrives.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#for-await",
    },
  ],
  types: runtimeInfo.name + "/tags/for-await.d.marko",
} as Tag;
