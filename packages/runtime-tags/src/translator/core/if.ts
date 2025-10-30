import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import { getAccessorPrefix } from "../util/get-accessor-char";
import { getParentTag } from "../util/get-parent-tag";
import { getTagName } from "../util/get-tag-name";
import { isConditionTag, isCoreTagName } from "../util/is-core-tag";
import {
  getOnlyChildParentTagName,
  getOptimizedOnlyChildNodeBinding,
} from "../util/is-only-child-in-parent";
import { addSorted } from "../util/optional";
import {
  compareSources,
  getScopeAccessorLiteral,
  kBranchSerializeReason,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  ContentType,
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
} from "../util/serialize-guard";
import {
  addSerializeExpr,
  getSerializeReason,
  type SerializeReasons,
} from "../util/serialize-reasons";
import {
  addValue,
  getSignal,
  setClosureSignalBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import toFirstStatementOrBlock from "../util/to-first-statement-or-block";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
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
    if (tag.node.body.attributeTags) return;
    if (isLastBranch(tag)) {
      const branches = getBranches(tag);
      const [ifTag] = branches[0];
      const ifTagSection = getOrCreateSection(ifTag);
      const ifTagExtra = (ifTag.node.extra ??= {});
      const mergeReferenceNodes: t.Node[] = [];
      const nodeBinding = getOptimizedOnlyChildNodeBinding(
        ifTag,
        ifTagSection,
        branches.length,
      );
      const sectionAccessor: Section["sectionAccessor"] = {
        binding: nodeBinding,
        prefix: getAccessorPrefix().ConditionalScope,
      };
      // TODO: remove all branches if none have body content.

      for (const [branchTag, branchBodySection] of branches) {
        if (branchBodySection) {
          branchBodySection.isBranch = true;
          branchBodySection.upstreamExpression = ifTagExtra;
          branchBodySection.sectionAccessor = sectionAccessor;
        }

        if (branchTag.node.attributes.length) {
          mergeReferenceNodes.push(branchTag.node.attributes[0].value);
        }
      }

      mergeReferences(ifTagSection, ifTag.node, mergeReferenceNodes);
      addSerializeExpr(ifTagSection, ifTagExtra, kStatefulReason);
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (isRoot(tag) && !getOnlyChildParentTagName(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }

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
          );
          const onlyChildParentTagName = getOnlyChildParentTagName(ifTag);
          const markerSerializeReason = getSerializeReason(
            ifTagSection,
            nodeBinding,
          );
          const nextTag = tag.getNextSibling();
          let branchSerializeReasons: SerializeReasons | undefined;
          let statement: t.Statement | undefined;
          let singleChild = true;

          for (const [, branchBody] of branches) {
            if (
              !(
                branchBody?.content?.singleChild &&
                branchBody.content.startType !== ContentType.Text
              )
            ) {
              singleChild = false;
              break;
            }
          }

          for (let i = branches.length; i--; ) {
            const [branchTag, branchBody] = branches[i];
            const bodyStatements = branchTag.node.body.body;
            if (branchBody) {
              const branchSerializeReason = getSerializeReason(
                branchBody,
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
              onlyChildParentTagName && markerSerializeReason;
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
                getSerializeGuardForAny(
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
              ),
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

        if (isRoot(tag) && !getOnlyChildParentTagName(tag)) {
          walks.visit(tag, WalkCode.Replace);
          walks.enterShallow(tag);
        }
      },
      exit(tag) {
        if (tag.node.body.attributeTags) return;

        if (isLastBranch(tag)) {
          const branches = getBranches(tag);
          const [ifTag] = branches[0];
          const ifTagSection = getSection(ifTag);
          const ifTagExtra = branches[0][0].node.extra!;
          const nodeRef = getOptimizedOnlyChildNodeBinding(ifTag, ifTagSection);
          const rendererIdentifiers: t.Identifier[] = [];
          let expr: t.Expression = t.numericLiteral(branches.length);

          for (let i = branches.length; i--; ) {
            const [branchTag, branchBodySection] = branches[i];
            const [testAttr] = branchTag.node.attributes;
            const consequent = t.numericLiteral(branchBodySection ? i : -1);
            if (branchBodySection) {
              rendererIdentifiers.push(t.identifier(branchBodySection.name));
              setClosureSignalBuilder(branchTag, (closure, render) => {
                return callRuntime(
                  "_if_closure",
                  getScopeAccessorLiteral(closure),
                  getScopeAccessorLiteral(nodeRef),
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
            return callRuntime(
              "_if",
              getScopeAccessorLiteral(nodeRef),
              ...rendererIdentifiers.reverse(),
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
} satisfies Tag;

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

function assertValidCondition(tag: t.NodePath<t.MarkoTag>) {
  assertNoVar(tag);
  assertNoArgs(tag);
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
    (getTagName(prev) !== "else" && !prev.node.attributes.length)
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
    const start = node.attributes[1].loc?.start;
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

function isRoot(tag: t.NodePath<t.MarkoTag>) {
  return isCoreTagName(tag, "if");
}
