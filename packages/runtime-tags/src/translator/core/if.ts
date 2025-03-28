import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import {
  getDynamicSourcesForSection,
  getDynamicSourcesForSections,
} from "../util/dynamic-sources";
import { getAccessorPrefix } from "../util/get-accessor-char";
import { getParentTag } from "../util/get-parent-tag";
import { getTagName } from "../util/get-tag-name";
import { isConditionTag, isCoreTagName } from "../util/is-core-tag";
import {
  getOptimizedOnlyChildNodeRef,
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
  isSectionWithHoists,
  type Section,
  setSectionParentIsOwner,
  startSection,
} from "../util/sections";
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
import { kSerializeMarker } from "../visitors/tag/native-tag";

const BRANCHES_LOOKUP = new WeakMap<
  t.NodePath<t.MarkoTag>,
  [tag: t.NodePath<t.MarkoTag>, bodySection: Section | undefined][]
>();

export const IfTag = {
  analyze(tag) {
    assertValidCondition(tag);
    if (tag.node.body.attributeTags) return;

    const bodySection = startSection(tag.get("body"));
    const [isLast, branches] = getBranches(tag, bodySection);
    if (isLast) {
      const [rootTag] = branches[0];
      const rootExtra = (rootTag.node.extra ??= {});
      const mergeReferenceNodes: t.Node[] = [];
      let singleNodeOptimization = true;
      // TODO: remove all branches if none have body content.

      for (const [branchTag, branchBodySection] of branches) {
        if (branchBodySection) {
          branchBodySection.isBranch = true;
          branchBodySection.upstreamExpression = rootExtra;

          if (
            !(
              branchBodySection.content === null ||
              (branchBodySection.content?.singleChild &&
                branchBodySection.content.startType !== ContentType.Text)
            )
          ) {
            singleNodeOptimization = false;
          }
        }

        if (branchTag.node.attributes.length) {
          mergeReferenceNodes.push(branchTag.node.attributes[0].value);
        }
      }

      const section = getOrCreateSection(tag);
      mergeReferences(section, rootTag.node, mergeReferenceNodes);

      bodySection!.sectionAccessor = {
        binding: getOptimizedOnlyChildNodeRef(
          rootTag,
          section,
          branches.length,
        ),
        prefix: getAccessorPrefix().ConditionalScope,
      };

      rootExtra.singleNodeOptimization = singleNodeOptimization;
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
        const section = getSection(tag);
        const bodySection = getSectionForBody(tagBody);
        const [isLast, branches] = getBranches(tag, bodySection);
        const [rootTag] = branches[0];
        const rootExtra = rootTag.node.extra!;
        const singleNodeOptimization = rootExtra.singleNodeOptimization;
        const branchSources = getSourcesForBranches(branches);
        const hasHoists = hasHoistsInBranches(branches);
        const serializeReason = hasHoists || branchSources?.all;

        if (bodySection) {
          writer.flushInto(tag);
          writeHTMLResumeStatements(tagBody);
        }

        if (isLast) {
          const nodeRef = getOptimizedOnlyChildNodeRef(rootTag, section);
          const onlyChildInParentOptimization = isOnlyChildInParent(rootTag);
          const nextTag = tag.getNextSibling();
          let statement: t.Statement | undefined;

          if (branchSources?.referenced && onlyChildInParentOptimization) {
            getParentTag(rootTag)!.node.extra![kSerializeMarker] = false;
          }

          for (let i = branches.length; i--; ) {
            const [branchTag] = branches[i];
            const bodyStatements = branchTag.node.body.body;
            if (serializeReason) {
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

          if (serializeReason) {
            const conditionSerializeReason = branchSources?.referenced;
            const cbNode = t.arrowFunctionExpression(
              [],
              t.blockStatement([statement!]),
            );
            statement = t.expressionStatement(
              singleNodeOptimization
                ? callRuntime(
                    "resumeSingleNodeConditional",
                    cbNode,
                    getScopeIdIdentifier(section),
                    getScopeAccessorLiteral(nodeRef),
                    conditionSerializeReason
                      ? t.numericLiteral(1)
                      : onlyChildInParentOptimization
                        ? t.numericLiteral(0)
                        : undefined,
                    onlyChildInParentOptimization && t.numericLiteral(1),
                  )
                : callRuntime(
                    "resumeConditional",
                    cbNode,
                    getScopeIdIdentifier(section),
                    getScopeAccessorLiteral(nodeRef),
                    conditionSerializeReason ? t.numericLiteral(1) : undefined,
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

        const [isLast, branches] = getBranches(
          tag,
          getSectionForBody(tag.get("body")),
        );

        if (isLast) {
          const [rootTag] = branches[0];
          const section = getSection(rootTag);
          const rootExtra = branches[0][0].node.extra!;
          const nodeRef = getOptimizedOnlyChildNodeRef(rootTag, section);
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

          const signal = getSignal(section, nodeRef, "if");
          signal.build = () => {
            return callRuntime(
              "conditional",
              getScopeAccessorLiteral(nodeRef),
              ...rendererIdentifiers.reverse(),
            );
          };
          addValue(section, rootExtra.referencedBindings, signal, expr);
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

function getBranches(
  tag: t.NodePath<t.MarkoTag>,
  bodySection: Section | undefined,
) {
  const branches = BRANCHES_LOOKUP.get(tag) ?? [];
  let nextTag = tag.getNextSibling();
  while (nextTag.isMarkoComment()) nextTag = nextTag.getNextSibling();

  const isLast = !(
    isCoreTagName(nextTag, "else") || isCoreTagName(nextTag, "else-if")
  );

  branches.push([tag, bodySection]);

  if (!isLast) {
    BRANCHES_LOOKUP.set(nextTag as t.NodePath<t.MarkoTag>, branches);
  }

  return [isLast, branches] as const;
}

function hasHoistsInBranches(
  branches: [tag: t.NodePath<t.MarkoTag>, bodySection: Section | undefined][],
) {
  for (const [, section] of branches) {
    if (section && isSectionWithHoists(section)) return true;
  }
}

function getSourcesForBranches(
  branches: [tag: t.NodePath<t.MarkoTag>, bodySection: Section | undefined][],
) {
  if (branches.length === 1) {
    return getDynamicSourcesForSection(branches[0][1]!);
  }

  const branchSections = [];
  for (const [, branchSection] of branches) {
    branchSections.push(branchSection);
  }

  return getDynamicSourcesForSections(branchSections);
}

function isRoot(tag: t.NodePath<t.MarkoTag>) {
  return isCoreTagName(tag, "if");
}
