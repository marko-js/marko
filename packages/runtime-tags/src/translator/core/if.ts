import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { _escape } from "../../html/content";
import {
  assertHasBody,
  assertNoSpreadAttrs,
  assertOnlyValueAttr,
  buildAttrsError,
} from "../util/assert";
import { bodyToUncoercedText } from "../util/body-to-text";
import {
  getBranchResumeArgs,
  initBranchSection,
  isSingleNodeBranch,
  resumeOwnerByMarkerWhenUnconditional,
} from "../util/branch-tag";
import { getTagName } from "../util/get-tag-name";
import { isConditionTag, isCoreTagName } from "../util/is-core-tag";
import { enterBranchIdSites, exitBranchIdSites } from "../util/known-tag";
import { isPatch } from "../util/marko-config";
import { onReasonsSettled } from "../util/patch/decisions";
import {
  patchesBranchesAt,
  recordStructuralParams,
} from "../util/patch/structure";
import { getExprRootGroupArgs } from "../util/patch/writers";
import {
  addReasonExprs,
  getSourcesForExpr,
  type Reasons,
} from "../util/reasons";
import { mergeReferences, onFinalizeReferences } from "../util/references";
import { callRuntime, linkRuntimeFeature } from "../util/runtime";
import { getScopeAccessorLiteral } from "../util/scope-accessor";
import {
  getBranchRendererArgs,
  ensureSection,
  ensureBodySection,
  getSection,
  getSectionForBody,
  type Section,
} from "../util/sections";
import { getShellIdArg } from "../util/shell";
import {
  addValue,
  getSignal,
  setClosureSignalBuilder,
  trimEmptyArgs,
  writeHTMLResumeStatements,
} from "../util/signals";
import { ensureSlot, SlotKind } from "../util/slots";
import { sourcesUtil } from "../util/sources";
import * as structure from "../util/structure";
import analyzeTagNameType, { TagNameType } from "../util/tag-name-type";
import { toOnlyStatementOrBlock } from "../util/to-only-or-block";
import { translateByTarget } from "../util/visitors";
import { getBranchWriteReason } from "../util/write-guard";
import * as writer from "../util/writer";

const BRANCHES_LOOKUP = new WeakMap<
  t.NodePath<t.MarkoTag>,
  [tag: t.NodePath<t.MarkoTag>, bodySection: Section | undefined][]
>();

export const IfTag = {
  analyze(tag) {
    assertValidCondition(tag);
    // Unlike `<show>`, a compile-time-constant condition is deliberately not folded: too rare to justify the branch-chain rewrite.
    if (tag.node.body.attributeTags) return;
    if (isCoreTagName(tag, "if")) {
      // Every branch's section starts at the `<if>`, numbered before the
      // sections inside them.
      let branchTag: t.NodePath<t.MarkoTag> | undefined = tag;
      do {
        ensureBodySection(branchTag.get("body"));
      } while ((branchTag = getNextBranchTag(branchTag)));
    }
    if (isLastBranch(tag)) {
      const branches = getBranches(tag);
      const [ifTag] = branches[0];
      const ifTagSection = ensureSection(ifTag);
      const ifTagExtra = (ifTag.node.extra ??= {});
      const mergeReferenceNodes: t.Node[] = [];
      // Recorded at the last branch, once every branch's body exists; nothing
      // records to this section between the branches.
      const nodeBinding = structure.controlFlowNode(ifTag, ifTagSection);
      // TODO: remove all branches if none have body content.

      for (let index = 0; index < branches.length; index++) {
        const [branchTag, branchBodySection] = branches[index];
        if (branchBodySection) {
          initBranchSection(branchBodySection, ifTagExtra, {
            nodeBinding,
            optional: true,
            index,
          });
        }

        if (branchTag.node.attributes.length) {
          mergeReferenceNodes.push(branchTag.node.attributes[0].value);
        }
      }

      mergeReferences(ifTagSection, ifTag.node, mergeReferenceNodes);
      addReasonExprs(ensureSlot(nodeBinding, SlotKind.BranchExpr), ifTagExtra);
      if (isPatch()) {
        onFinalizeReferences(() => {
          recordStructuralParams(getSourcesForExpr(ifTagExtra));
        });
        onReasonsSettled(() => {
          if (patchesBranchesAt(nodeBinding)) {
            linkRuntimeFeature("patches/branch");
          }
        });
      }
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;
        enterBranchIdSites(getBranches(tag));
        writer.flushBefore(tag);
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;
        exitBranchIdSites(getBranches(tag));

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (bodySection) {
          const branches = getBranches(tag);
          const [ifTag] = branches[0];
          resumeOwnerByMarkerWhenUnconditional(
            bodySection,
            ifTag.node.extra!.nodeBinding!,
          );
          writeHTMLResumeStatements(tag);
        }

        if (isLastBranch(tag)) {
          const branches = getBranches(tag);
          const [ifTag] = branches[0];
          const ifTagSection = getSection(ifTag);
          const ifTagExtra = ifTag.node.extra!;
          const nodeBinding = ifTagExtra.nodeBinding!;
          const nextTag = tag.getNextSibling();
          let branchReasons: Reasons | undefined;
          let statement: t.Statement | undefined;

          // A patchable conditional keeps its markers: the shipped-branch
          // swap inserts at the marker node, which elision would remove.
          const patchesBranches = patchesBranchesAt(nodeBinding);

          for (let i = branches.length; i--;) {
            const [branchTag, branchBodySection] = branches[i];
            const bodyStatements = branchTag.node.body.body;
            if (branchBodySection) {
              const branchReason = getBranchWriteReason(branchBodySection);
              if (branchReason) {
                branchReasons = sourcesUtil.add(branchReasons, branchReason);
                bodyStatements.push(
                  t.returnStatement(t.numericLiteral(i)) as any,
                );
              }
            }

            const [testAttr] = branchTag.node.attributes;
            const curStatement = toOnlyStatementOrBlock(bodyStatements);

            if (testAttr) {
              statement = t.ifStatement(
                testAttr.value,
                curStatement,
                statement,
              );
            } else {
              statement = curStatement;
            }
          }

          if (branchReasons) {
            const cbNode = t.arrowFunctionExpression(
              [],
              t.blockStatement([statement!]),
            );

            statement = t.expressionStatement(
              callRuntime(
                "_if",
                cbNode,
                ...getBranchResumeArgs(
                  ifTag,
                  branchReasons,
                  branches.every(([, branchBody]) =>
                    isSingleNodeBranch(branchBody),
                  ),
                  patchesBranches,
                ),
                // Shell ids per branch index (an absent body ships `0`): the
                // client creates diverged branches without bundling them.
                patchesBranches &&
                  t.arrayExpression(branches.map(getBranchShellIdArg)),
                // A chain whose conditions derive from params yields to the
                // client when the call site passes state for them.
                ...(patchesBranches
                  ? getExprRootGroupArgs(ifTagSection, ifTagExtra)
                  : []),
              ),
            );
          }

          for (const [branchTag] of branches) {
            branchTag.remove();
          }
          nextTag.insertBefore(statement!);
        }
      },
    },
    dom: {
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        if (isLastBranch(tag)) {
          const branches = getBranches(tag);
          const [ifTag] = branches[0];
          const ifTagSection = getSection(ifTag);
          const ifTagExtra = branches[0][0].node.extra!;
          const nodeBinding = ifTagExtra.nodeBinding!;

          let expr: t.Expression = t.numericLiteral(branches.length);

          for (let i = branches.length; i--;) {
            const [branchTag, branchBodySection] = branches[i];
            const [testAttr] = branchTag.node.attributes;
            const consequent = t.numericLiteral(branchBodySection ? i : -1);
            if (branchBodySection) {
              setClosureSignalBuilder(branchTag, {
                kind: "if",
                nodeBinding,
                index: i,
              });
            }

            branchTag.remove();
            expr = testAttr
              ? t.conditionalExpression(testAttr.value, consequent, expr)
              : consequent;
          }

          const signal = getSignal(ifTagSection, nodeBinding, "if");
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
              getScopeAccessorLiteral(nodeBinding, true),
              ...trimEmptyArgs(rendererArgs),
            );
          };
          addValue(ifTagSection, ifTagExtra, signal, expr);
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

  const branches: t.NodePath<t.MarkoTag>[] = [];
  let tag: t.NodePath<t.MarkoTag> | undefined = rootTag;

  do {
    const { node } = tag;

    // Attribute tags fall back to the normal `<if>` handling.
    if (node.body.attributeTags) return;

    for (const child of node.body.body) {
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
  } while ((tag = getNextBranchTag(tag)));

  // Converting bypasses the analyze phase, so validate first.
  for (const branchTag of branches) {
    assertValidCondition(branchTag);
  }

  let expr: t.Expression = t.stringLiteral("");
  let needsTextCoercion = false;
  for (let i = branches.length; i--;) {
    const branchTag = branches[i];
    const text = bodyToUncoercedText(branchTag.node.body);
    // A template literal means static text concatenated with an uncoerced
    // interpolation, which translate must still coerce.
    needsTextCoercion ||= t.isTemplateLiteral(text);
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
  if (needsTextCoercion) {
    (placeholder.extra ??= {}).needsTextCoercion = true;
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
      assertOnlyValueAttr(tag, true);
      break;
    case "else-if":
      assertOnlyValueAttr(tag, true);
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

function assertOptionalIfAttribute(tag: t.NodePath<t.MarkoTag>) {
  const { attributes } = tag.node;
  if (
    attributes.length > 1 ||
    (attributes.length === 1 && !isIfAttr(attributes[0]))
  ) {
    const ifAttr = attributes.find(isIfAttr);
    throw buildAttrsError(
      tag,
      attributes.filter((attr) => attr !== ifAttr),
      "The [`<else>` tag](https://markojs.com/docs/reference/core-tag#if--else) only supports the `if=` attribute.",
    );
  }
}

function getBranches(tag: t.NodePath<t.MarkoTag>) {
  let branches = BRANCHES_LOOKUP.get(tag);

  if (!branches) {
    let curTag: t.NodePath<t.MarkoTag> | undefined = tag;
    branches = [];

    do {
      BRANCHES_LOOKUP.set(curTag, branches);
      branches.push([curTag, getSectionForBody(curTag.get("body"))]);
    } while ((curTag = getNextBranchTag(curTag)));
  }

  return branches;
}

function getBranchShellIdArg([, bodySection]: [unknown, Section | undefined]) {
  return getShellIdArg(bodySection);
}

// The `<else-if>` or `<else>` continuing the chain after `tag`, past comments.
function getNextBranchTag(tag: t.NodePath<t.MarkoTag>) {
  let next = tag.getNextSibling();
  while (next.isMarkoComment()) next = next.getNextSibling();
  if (isCoreTagName(next, "else-if") || isCoreTagName(next, "else")) {
    return next;
  }
}

function isLastBranch(tag: t.NodePath<t.MarkoTag>) {
  const branches = getBranches(tag);
  return branches[branches.length - 1][0] === tag;
}

function isIfAttr(attr: t.MarkoTag["attributes"][number]) {
  return attr.type === "MarkoAttribute" && attr.name === "if";
}
