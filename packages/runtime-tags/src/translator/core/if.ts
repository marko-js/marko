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
  getOptimizedOnlyChildNodeBinding,
  isOnlyChildInParent,
} from "../util/is-only-child-in-parent";
import { getScopeAccessorLiteral, mergeReferences } from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  ContentType,
  getOrCreateSection,
  getScopeIdIdentifier,
  getSection,
  getSectionForBody,
  kBranchSerializeReason,
  type Section,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
import {
  getBindingSerializeReason,
  getPropSerializeReason,
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
import { kSkipMark } from "../visitors/tag/native-tag";

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
      let singleNodeOptimization = true;
      // TODO: remove all branches if none have body content.

      for (const [branchTag, branchBodySection] of branches) {
        if (branchBodySection) {
          singleNodeOptimization &&=
            branchBodySection.content === null ||
            (branchBodySection.content?.singleChild &&
              branchBodySection.content.startType !== ContentType.Text);
          branchBodySection.isBranch = true;
          branchBodySection.upstreamExpression = ifTagExtra;
          branchBodySection.sectionAccessor = sectionAccessor;
        }

        if (branchTag.node.attributes.length) {
          mergeReferenceNodes.push(branchTag.node.attributes[0].value);
        }
      }

      mergeReferences(ifTagSection, ifTag.node, mergeReferenceNodes);
      ifTagExtra.singleNodeOptimization = singleNodeOptimization;
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.body.attributeTags) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (isRoot(tag) && !isOnlyChildInParent(tag)) {
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
          const ifTagExtra = ifTag.node.extra!;
          const singleNodeOptimization = ifTagExtra.singleNodeOptimization;
          const nodeBinding = getOptimizedOnlyChildNodeBinding(
            ifTag,
            ifTagSection,
          );
          const onlyChildInParentOptimization = isOnlyChildInParent(ifTag);
          const branchSerializeReason = getPropSerializeReason(
            ifTagSection,
            ifTagExtra,
            kBranchSerializeReason,
          );
          const markerSerializeReason = getBindingSerializeReason(
            ifTagSection,
            nodeBinding,
          );
          const nextTag = tag.getNextSibling();
          let statement: t.Statement | undefined;

          if (markerSerializeReason && onlyChildInParentOptimization) {
            getParentTag(ifTag)!.node.extra![kSkipMark] = true;
          }

          for (let i = branches.length; i--; ) {
            const [branchTag] = branches[i];
            const bodyStatements = branchTag.node.body.body;
            if (branchSerializeReason) {
              bodyStatements.push(
                t.returnStatement(t.numericLiteral(i)) as any,
              );
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

          if (branchSerializeReason) {
            const cbNode = t.arrowFunctionExpression(
              [],
              t.blockStatement([statement!]),
            );
            statement = t.expressionStatement(
              singleNodeOptimization
                ? callRuntime(
                    "resumeSingleNodeConditional",
                    cbNode,
                    getScopeIdIdentifier(ifTagSection),
                    getScopeAccessorLiteral(nodeBinding),
                    markerSerializeReason
                      ? t.numericLiteral(1)
                      : onlyChildInParentOptimization
                        ? t.numericLiteral(0)
                        : undefined,
                    onlyChildInParentOptimization && t.numericLiteral(1),
                  )
                : callRuntime(
                    "resumeConditional",
                    cbNode,
                    getScopeIdIdentifier(ifTagSection),
                    getScopeAccessorLiteral(nodeBinding),
                    markerSerializeReason ? t.numericLiteral(1) : undefined,
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

        if (isRoot(tag) && !isOnlyChildInParent(tag)) {
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
                  "conditionalClosure",
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
              "conditional",
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
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#if-else-if-else",
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
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#if-else-if-else",
    },
  ],
};

export const ElseTag = {
  ...IfTag,
  autocomplete: [
    {
      description:
        "Use after an <if> or <else-if> tag to display content if those conditions do not match.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#if-else-if-else",
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
      `The \`<${getTagName(tag)}>\` must have a preceding \`<if=cond>\`, \`<else-if=cond>\`, or \`<else if=cond>\`.`,
    );
  }
}

function assertHasBody(tag: t.NodePath<t.MarkoTag>) {
  if (!(tag.node.body.body.length || tag.node.attributeTags.length)) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        `The \`${getTagName(tag)}\` tag requires body content.`,
      );
  }
}

function assertHasValueAttribute(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const [valueAttr] = node.attributes;

  if (!t.isMarkoAttribute(valueAttr) || !valueAttr.default) {
    throw tag
      .get("name")
      .buildCodeFrameError(`The \`${getTagName(tag)}\` tag requires a value.`);
  }

  if (node.attributes.length > 1) {
    const start = node.attributes[1].loc?.start;
    const end = node.attributes[node.attributes.length - 1].loc?.end;
    const msg = `The \`${getTagName(tag)}\` tag only supports the \`value\` attribute.`;

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
    const msg = `The \`${getTagName(tag)}\` tag only supports an \`if=\` attribute.`;

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
