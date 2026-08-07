import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import { bodyToRawTextLiteral, kRawText } from "../util/body-to-text-literal";
import {
  getBranchSectionAccessor,
  initBranchSection,
  resumeOwnerByMarkerWhenStatic,
} from "../util/branch-tag";
import { getParentTag } from "../util/get-parent-tag";
import { getTagName } from "../util/get-tag-name";
import { isConditionTag, isCoreTagName } from "../util/is-core-tag";
import {
  getOnlyChildParentTagName,
  getOptimizedOnlyChildNodeBinding,
} from "../util/is-only-child-in-parent";
import { isPersisted } from "../util/marko-config";
import { addSorted } from "../util/optional";
import {
  isPatchCaptureSection,
  onFinalizePersisted,
  paramsDeliverAsFills,
  recordStructuralParams,
} from "../util/persisted";
import {
  compareSources,
  getScopeAccessorLiteral,
  kBranchSerializeReason,
  mergeReferences,
} from "../util/references";
import {
  addRuntimeFeatureAsset,
  callRuntime,
  getHTMLRuntime,
  importRuntimeFeature,
} from "../util/runtime";
import {
  ContentType,
  getBranchRendererArgs,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  type Section,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  getSerializeGuard,
  getSerializeGuardForAny,
  scopeReasonIdentifier,
} from "../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
  getSerializeSourcesForExpr,
  type SerializeReasons,
} from "../util/serialize-reasons";
import { getShellId, getShells, isShellDropped } from "../util/shell";
import {
  addValue,
  getSignal,
  replaceNullishAndEmptyFunctionsWith0,
  setClosureSignalBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import * as structure from "../util/structure";
import analyzeTagNameType, { TagNameType } from "../util/tag-name-type";
import toFirstStatementOrBlock from "../util/to-first-statement-or-block";
import { translateByTarget } from "../util/visitors";
import * as writer from "../util/writer";
import { kSkipEndTag } from "../visitors/tag/native-tag";

const kStatefulReason = Symbol("<if> stateful reason");
const BRANCHES_LOOKUP = new WeakMap<
  t.NodePath<t.MarkoTag>,
  [tag: t.NodePath<t.MarkoTag>, bodySection: Section | undefined][]
>();

export const IfTag = {
  analyze(tag) {
    assertValidCondition(tag);
    // Unlike `<show>`, a compile-time-constant condition is deliberately not folded: too rare to justify the branch-chain rewrite.
    if (tag.node.body.attributeTags) return;
    if (isLastBranch(tag)) {
      const branches = getBranches(tag);
      const [ifTag] = branches[0];
      const ifTagSection = getOrCreateSection(ifTag);
      const ifTagExtra = (ifTag.node.extra ??= {});
      const mergeReferenceNodes: t.Node[] = [];
      // Recorded at the last branch so the only-child check sees the full
      // branch count; nothing records to this section between the branches.
      if (!getOnlyChildParentTagName(ifTag, branches.length)) {
        structure.visit(ifTag, WalkCode.Replace);
        structure.enterShallow(ifTag);
      }
      const nodeBinding = getOptimizedOnlyChildNodeBinding(
        ifTag,
        ifTagSection,
        branches.length,
      );
      const sectionAccessor = getBranchSectionAccessor(nodeBinding);
      // TODO: remove all branches if none have body content.

      for (const [branchTag, branchBodySection] of branches) {
        if (branchBodySection) {
          initBranchSection(branchBodySection, ifTagExtra, sectionAccessor);
        }

        if (branchTag.node.attributes.length) {
          mergeReferenceNodes.push(branchTag.node.attributes[0].value);
        }
      }

      mergeReferences(ifTagSection, ifTag.node, mergeReferenceNodes);
      addSerializeExpr(ifTagSection, ifTagExtra, kStatefulReason);
      if (isPersisted() && isPatchCaptureSection(ifTagSection)) {
        // Ownership classifies once the merged test sources resolve.
        onFinalizePersisted(() => {
          const sources = getSerializeSourcesForExpr(ifTagExtra);
          if (
            sources?.state &&
            !sources.global &&
            paramsDeliverAsFills(sources.param)
          ) {
            // A client-evaluable chain is client-owned structure (state
            // re-selects directly; param feeds fill their slots).
            for (const [, branchBody] of branches) {
              if (branchBody) {
                branchBody.isClientOwnedStructure = true;
              }
            }
          } else {
            addRuntimeFeatureAsset(ifTag.hub.file, "patch-branch");
            // Branch tests drive structure: call sites reject feeding them
            // from client-owned values.
            recordStructuralParams(sources);
          }
        });
      }
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        writer.flushBefore(tag);

        if (bodySection) {
          setSectionParentIsOwner(bodySection, true);
        }
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (bodySection) {
          const branches = getBranches(tag);
          const [ifTag] = branches[0];
          const ifTagSection = getSection(ifTag);
          resumeOwnerByMarkerWhenStatic(
            ifTagSection,
            bodySection,
            getOptimizedOnlyChildNodeBinding(
              ifTag,
              ifTagSection,
              branches.length,
            ),
            kStatefulReason,
          );
          writer.flushInto(tag);
          writeHTMLResumeStatements(tagBody);
        }

        if (isLastBranch(tag)) {
          const branches = getBranches(tag);
          const [ifTag] = branches[0];
          const ifTagSection = getSection(ifTag);
          const nodeBinding = getOptimizedOnlyChildNodeBinding(
            ifTag,
            ifTagSection,
            branches.length,
          );
          const onlyChildParentTagName = getOnlyChildParentTagName(
            ifTag,
            branches.length,
          );
          const markerSerializeReason = getSerializeReason(
            ifTagSection,
            nodeBinding,
          );
          const nextTag = tag.getNextSibling();
          let branchSerializeReasons: SerializeReasons | undefined;
          let statement: t.Statement | undefined;
          let singleChild = true;

          // A client-owned chain compiles like a stateful conditional on a
          // plain page: no marker retention, shells, or branch entry.
          const clientOwned = branches.some(
            ([, branchBody]) => branchBody?.isClientOwnedStructure,
          );
          // A patchable conditional keeps its markers: the shipped-branch
          // swap anchors at the marker node, which elision would remove.
          const persistedPatch =
            isPersisted() &&
            !clientOwned &&
            isPatchCaptureSection(ifTagSection);
          if (persistedPatch) {
            singleChild = false;
          } else {
            for (const [, branchBodySection] of branches) {
              if (
                !(
                  branchBodySection?.content?.singleChild &&
                  branchBodySection.content.startType !== ContentType.Text
                )
              ) {
                singleChild = false;
                break;
              }
            }
          }

          for (let i = branches.length; i--;) {
            const [branchTag, branchBodySection] = branches[i];
            const bodyStatements = branchTag.node.body.body;
            if (branchBodySection) {
              const branchSerializeReason = getSerializeReason(
                branchBodySection,
                kBranchSerializeReason,
              );
              if (branchSerializeReason) {
                if (branchSerializeReasons !== true) {
                  if (
                    branchSerializeReason === true ||
                    branchSerializeReason.state
                  ) {
                    branchSerializeReasons = true;
                  } else if (branchSerializeReasons) {
                    branchSerializeReasons = addSorted(
                      compareSources,
                      branchSerializeReasons,
                      branchSerializeReason,
                    );
                  } else {
                    branchSerializeReasons = [branchSerializeReason];
                  }
                }
                bodyStatements.push(
                  t.returnStatement(t.numericLiteral(i)) as any,
                );
              }
            }

            const [testAttr] = branchTag.node.attributes;
            const curStatement = toFirstStatementOrBlock(bodyStatements);

            if (testAttr) {
              statement = t.ifStatement(
                testAttr.value,
                curStatement,
                statement,
              );
            } else {
              statement = curStatement;
            }

            branchTag.remove();
          }

          if (branchSerializeReasons) {
            const skipParentEnd =
              !persistedPatch &&
              onlyChildParentTagName &&
              markerSerializeReason;
            if (skipParentEnd) {
              getParentTag(ifTag)!.node.extra![kSkipEndTag] = true;
            }

            const statefulSerializeArg = getSerializeGuard(
              ifTagSection,
              getSerializeReason(ifTagSection, kStatefulReason),
              !(skipParentEnd || singleChild),
            );
            const markerSerializeArg = getSerializeGuard(
              ifTagSection,
              markerSerializeReason,
              !statefulSerializeArg,
            );
            const cbNode = t.arrowFunctionExpression(
              [],
              t.blockStatement([statement!]),
            );

            statement = t.expressionStatement(
              callRuntime(
                "_if",
                cbNode,
                getScopeIdIdentifier(ifTagSection),
                getScopeAccessorLiteral(nodeBinding),
                // Pairing stays statically on under persisted: the patch
                // intercept preempts, and interior writes anchor through it.
                persistedPatch
                  ? t.numericLiteral(1)
                  : getSerializeGuardForAny(
                      ifTagSection,
                      branchSerializeReasons,
                      !markerSerializeArg,
                    ),
                markerSerializeArg,
                statefulSerializeArg,
                skipParentEnd
                  ? t.stringLiteral(`</${onlyChildParentTagName}>`)
                  : singleChild
                    ? t.numericLiteral(0)
                    : undefined,
                singleChild ? t.numericLiteral(1) : undefined,
                // Shell ids per branch index: a patch ships the shell so the
                // client constructs diverged branches without bundling them.
                persistedPatch
                  ? t.arrayExpression(
                      branches.map(([, branchBody]) => {
                        // Only ids with a built shell ship; a bare `0` makes
                        // divergence to the branch reject the patch.
                        const id =
                          branchBody &&
                          !isShellDropped(branchBody) &&
                          getShellId(branchBody);
                        return id && getShells()?.[id]
                          ? t.stringLiteral(id)
                          : t.numericLiteral(0);
                      }),
                    )
                  : undefined,
              ),
            );
          }

          if (clientOwned) {
            // Patch renders skip the chain: the tests' state reads are
            // server-stale and the frame never speaks the selection.
            let rootSection = ifTagSection;
            while (rootSection.parent) rootSection = rootSection.parent;
            statement = t.ifStatement(
              scopeReasonIdentifier(rootSection),
              statement!,
            );
          }

          nextTag.insertBefore(statement!);
        }
      },
    },
    dom: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (bodySection) {
          setSectionParentIsOwner(bodySection, true);
        }
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        if (isLastBranch(tag)) {
          const branches = getBranches(tag);
          const [ifTag] = branches[0];
          const ifTagSection = getSection(ifTag);
          if (
            isPersisted() &&
            isPatchCaptureSection(ifTagSection) &&
            !branches.some(
              ([, branchBody]) => branchBody?.isClientOwnedStructure,
            )
          ) {
            // An interactive page receives assets transitively through its
            // dom program, so the feature import rides both outputs.
            importRuntimeFeature("patch-branch");
          }
          const ifTagExtra = branches[0][0].node.extra!;
          const nodeRef = getOptimizedOnlyChildNodeBinding(
            ifTag,
            ifTagSection,
            branches.length,
          );

          let expr: t.Expression = t.numericLiteral(branches.length);

          for (let i = branches.length; i--;) {
            const [branchTag, branchBodySection] = branches[i];
            const [testAttr] = branchTag.node.attributes;
            const consequent = t.numericLiteral(branchBodySection ? i : -1);
            if (branchBodySection) {
              setClosureSignalBuilder(branchTag, (_closure, render) => {
                return callRuntime(
                  "_if_closure",
                  getScopeAccessorLiteral(nodeRef, true),
                  t.numericLiteral(i),
                  render,
                );
              });
            }

            branchTag.remove();
            expr = testAttr
              ? t.conditionalExpression(testAttr.value, consequent, expr)
              : consequent;
          }

          const signal = getSignal(ifTagSection, nodeRef, "if");
          signal.build = () => {
            const rendererArgs: (t.Expression | undefined)[] = [];
            for (const [_, branchBodySection] of branches) {
              if (branchBodySection) {
                rendererArgs.push(
                  ...getBranchRendererArgs(branchBodySection).slice(0, 3),
                ); // Slice to 3 to ignore params
              } else {
                rendererArgs.push(undefined, undefined, undefined);
              }
            }

            return callRuntime(
              "_if",
              getScopeAccessorLiteral(nodeRef, true),
              ...replaceNullishAndEmptyFunctionsWith0(rendererArgs),
            );
          };
          addValue(ifTagSection, ifTagExtra.referencedBindings, signal, expr);
        }
      },
    },
  }),
  parseOptions: { controlFlow: true },
  autocomplete: [
    {
      snippet: "if=${1:condition}",
      description: "Use to display content only if the condition is met.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#if--else",
    },
  ],
} as Tag;

export const ElseIfTag = {
  ...IfTag,
  autocomplete: [
    {
      snippet: "else-if=${1:condition}",
      description:
        "Use after an <if> or <else-if> tag to display content if those conditions do not match and this one does.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#if--else",
    },
  ],
};

export const ElseTag = {
  ...IfTag,
  autocomplete: [
    {
      description:
        "Use after an <if> or <else-if> tag to display content if those conditions do not match.",
      descriptionMoreURL:
        "https://markojs.com/docs/reference/core-tag#if--else",
    },
  ],
};

// Collapse a text-only `<if>`/`<else-if>`/`<else>` chain into a single text
// placeholder, avoiding the branch scopes and `_if` runtime entirely.
export function flattenTextOnlyConditional(rootTag: t.NodePath<t.MarkoTag>) {
  if (!isCoreTagName(rootTag, "if")) return;

  // Only convert inside a native element (a text node); at a template or component
  // root the content is a dynamic renderer with different output, so the rewrite differs.
  const tagBody = rootTag.parentPath;
  if (!tagBody.isMarkoTagBody()) return;
  const parentTag = tagBody.parentPath;
  if (
    !parentTag.isMarkoTag() ||
    analyzeTagNameType(parentTag) !== TagNameType.NativeTag
  ) {
    return;
  }

  const { _escape } = getHTMLRuntime();
  const branches: t.NodePath<t.MarkoTag>[] = [];
  let cur: t.NodePath<any> = rootTag;

  do {
    const tag = cur as t.NodePath<t.MarkoTag>;
    const { node } = tag;
    const body = node.body.body;

    // Attribute tags or empty bodies fall back to the normal `<if>` handling.
    if (node.body.attributeTags || !body.length) return;

    const [attr] = node.attributes;
    if (isCoreTagName(tag, "else")) {
      // A lone `if=` is `<else if=cond>`, equivalent to `<else-if=cond>`; any
      // other attribute shape falls back to the normal `<if>` handling.
      if (
        node.attributes.length > 1 ||
        (attr && (!t.isMarkoAttribute(attr) || attr.name !== "if"))
      ) {
        return;
      }
    } else if (
      node.attributes.length !== 1 ||
      !t.isMarkoAttribute(attr) ||
      !attr.default
    ) {
      return;
    }

    for (const child of body) {
      if (t.isMarkoText(child)) {
        // A placeholder escapes its value, so only collapse static text that
        // is unaffected by escaping (otherwise e.g. `&amp;` would change).
        if (_escape(child.value) !== child.value) return;
      } else if (!t.isMarkoPlaceholder(child) || !child.escape) {
        // An unescaped placeholder would render raw, but the flattened
        // placeholder always escapes, so leave the chain alone.
        return;
      }
    }

    branches.push(tag);

    let next = cur.getNextSibling();
    while (next.node && next.isMarkoComment()) next = next.getNextSibling();
    cur = next;
  } while (
    cur.node &&
    (isCoreTagName(cur, "else-if") || isCoreTagName(cur, "else"))
  );

  // Converting bypasses the analyze phase, so validate first; invalid chains
  // fall through to the normal handling where the error is reported.
  for (const branchTag of branches) {
    assertValidCondition(branchTag);
  }

  let expr: t.Expression = t.stringLiteral("");
  let rawText = false;
  for (let i = branches.length; i--;) {
    const branchTag = branches[i];
    const text = bodyToRawTextLiteral(branchTag.node.body);
    // A template literal means static text concatenated with a raw
    // interpolation, which translate must still coerce.
    rawText ||= t.isTemplateLiteral(text);
    // `<if=>`, `<else-if=>`, and `<else if=>` all expose the condition at
    // `attributes[0]`; a plain `<else>` has none and stays unconditional.
    const [conditionAttr] = branchTag.node.attributes;
    expr = conditionAttr
      ? t.conditionalExpression(conditionAttr.value, text, expr)
      : text;
  }

  for (let i = branches.length; i-- > 1;) {
    branches[i].remove();
  }
  const placeholder = t.markoPlaceholder(expr, true);
  if (rawText) {
    (placeholder.extra ??= {})[kRawText] = true;
  }
  rootTag.replaceWith(placeholder);
}

function assertValidCondition(tag: t.NodePath<t.MarkoTag>) {
  const conditionTagName = getTagName(tag);
  assertNoVar(tag);
  assertNoArgs(
    tag,
    conditionTagName === "else"
      ? "Write the condition as an attribute instead: `<else if=condition>`."
      : `Write the condition as a value attribute instead: \`<${conditionTagName}=condition>\`.`,
  );
  assertNoParams(tag);
  assertHasBody(tag);
  assertNoSpreadAttrs(tag);

  switch (getTagName(tag)) {
    case "if":
      assertHasValueAttribute(tag);
      break;
    case "else-if":
      assertHasValueAttribute(tag);
      assertHasPrecedingCondition(tag);
      break;
    case "else":
      assertOptionalIfAttribute(tag);
      assertHasPrecedingCondition(tag);
      break;
  }
}

function assertHasPrecedingCondition(tag: t.NodePath<t.MarkoTag>) {
  let prev = tag.getPrevSibling();
  while (prev.node && prev.isMarkoComment()) prev = prev.getPrevSibling();

  if (
    !isConditionTag(prev) ||
    (getTagName(prev) === "else" && !prev.node.attributes.length)
  ) {
    throw tag.buildCodeFrameError(
      `The [\`<${getTagName(tag)}>\` tag](https://markojs.com/docs/reference/core-tag#if--else) must have a preceding \`<if=cond>\` or \`<else if=cond>\`.`,
    );
  }
}

function assertHasBody(tag: t.NodePath<t.MarkoTag>) {
  if (!(tag.node.body.body.length || tag.node.attributeTags.length)) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The [\`${getTagName(tag)}\` tag](https://markojs.com/docs/reference/core-tag#if--else) requires [body content](https://markojs.com/docs/reference/language#tag-content).`,
      );
  }
}

function assertHasValueAttribute(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const [valueAttr] = node.attributes;

  if (!t.isMarkoAttribute(valueAttr) || !valueAttr.default) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The [\`${getTagName(tag)}\` tag](https://markojs.com/docs/reference/core-tag#if--else) requires a [\`value=\` attribute](https://markojs.com/docs/reference/language#shorthand-value).`,
      );
  }

  if (node.attributes.length > 1) {
    const start = node.attributes[1].loc?.start;
    const end = node.attributes[node.attributes.length - 1].loc?.end;
    const msg = `The [\`${getTagName(tag)}\` tag](https://markojs.com/docs/reference/core-tag#if--else) only supports the [\`value=\` attribute](https://markojs.com/docs/reference/language#shorthand-value).`;

    if (start == null || end == null) {
      throw tag.get("name").buildCodeFrameError(msg);
    } else {
      throw tag.hub.buildError(
        { loc: { start, end } } as unknown as t.Node,
        msg,
        Error,
      );
    }
  }
}

function assertOptionalIfAttribute(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const [ifAttr] = node.attributes;

  if (
    node.attributes.length > 1 ||
    (ifAttr && (ifAttr as t.MarkoAttribute).name !== "if")
  ) {
    const start = node.attributes[0].loc?.start;
    const end = node.attributes[node.attributes.length - 1].loc?.end;
    const msg = `The [\`${getTagName(tag)}\` tag](https://markojs.com/docs/reference/core-tag#if--else) only supports an \`if=\` attribute.`;

    if (start == null || end == null) {
      throw tag.get("name").buildCodeFrameError(msg);
    } else {
      throw tag.hub.buildError(
        { loc: { start, end } } as unknown as t.Node,
        msg,
        Error,
      );
    }
  }
}

function getBranches(tag: t.NodePath<t.MarkoTag>) {
  let branches = BRANCHES_LOOKUP.get(tag);

  if (!branches) {
    let curTag: t.NodePath<any> = tag;
    branches = [];

    do {
      BRANCHES_LOOKUP.set(curTag, branches);
      branches.push([
        curTag,
        startSection((curTag as t.NodePath<t.MarkoTag>).get("body")),
      ]);
      while ((curTag = curTag.getNextSibling()).isMarkoComment());
    } while (isCoreTagName(curTag, "else") || isCoreTagName(curTag, "else-if"));
  }

  return branches;
}

function isLastBranch(tag: t.NodePath<t.MarkoTag>) {
  const branches = getBranches(tag);
  return branches[branches.length - 1][0] === tag;
}
