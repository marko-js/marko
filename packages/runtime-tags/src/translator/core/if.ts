import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/compiler/babel-utils";

import { AccessorChar, WalkCode } from "../../common/types";
import { assertNoSpreadAttrs } from "../util/assert";
import { getParentTag } from "../util/get-parent-tag";
import { getTagName } from "../util/get-tag-name";
import { isConditionTag, isCoreTagName } from "../util/is-core-tag";
import {
  getOptimizedOnlyChildNodeRef,
  isOnlyChildInParent,
} from "../util/is-only-child-in-parent";
import { isStatefulReferences } from "../util/is-stateful";
import {
  type Binding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  checkStatefulClosures,
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
  addValue,
  getHTMLSectionStatements,
  getSerializedScopeProperties,
  getSignal,
  setClosureSignalBuilder,
  setForceResumeScope,
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

    const [isLast, branches] = getBranches(tag, startSection(tag.get("body")));
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
      getOptimizedOnlyChildNodeRef(rootTag, section, branches.length);
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
        const isStateful = isStatefulReferences(rootExtra.referencedBindings);
        const singleNodeOptimization = rootExtra.singleNodeOptimization;
        const hasStatefulClosures =
          bodySection && checkStatefulClosures(bodySection, true);

        if (bodySection) {
          if (isStateful || hasStatefulClosures) {
            setForceResumeScope(bodySection);
          }
          writer.flushInto(tag);
          // TODO: this is a hack to get around the fact that we don't have a way to
          // know if a scope requires dynamic subscriptions
          setClosureSignalBuilder(tag, (() => {}) as any);
          writeHTMLResumeStatements(tagBody);
        }

        if (isLast) {
          const nodeRef = getOptimizedOnlyChildNodeRef(rootTag, section);
          const onlyChildInParentOptimization = isOnlyChildInParent(rootTag);
          const nextTag = tag.getNextSibling();
          const ifScopeIdIdentifier =
            rootTag.scope.generateUidIdentifier("ifScopeId");
          const ifBranchIdentifier =
            rootTag.scope.generateUidIdentifier("ifBranch");
          let statement: t.Statement | undefined;

          if (onlyChildInParentOptimization) {
            getParentTag(rootTag)!.node.extra![kSerializeMarker] = false;
          }

          for (let i = branches.length; i--; ) {
            const [branchTag, branchBodySection] = branches[i];
            const bodyStatements = branchTag.node.body.body;

            if (branchBodySection) {
              const branchHasStatefulClosures = checkStatefulClosures(
                branchBodySection,
                true,
              );

              if (isStateful) {
                bodyStatements.push(
                  t.expressionStatement(
                    t.assignmentExpression(
                      "=",
                      ifBranchIdentifier,
                      t.numericLiteral(i),
                    ),
                  ) as any,
                );
              }
              if (isStateful || branchHasStatefulClosures) {
                bodyStatements.push(
                  t.expressionStatement(
                    t.assignmentExpression(
                      "=",
                      ifScopeIdIdentifier,
                      getScopeIdIdentifier(branchBodySection),
                    ),
                  ) as any,
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

          if (!(isStateful || hasStatefulClosures)) {
            nextTag.insertBefore(statement!);
          } else {
            if (isStateful) {
              getSerializedScopeProperties(section).set(
                t.stringLiteral(
                  getScopeAccessorLiteral(nodeRef).value +
                    AccessorChar.ConditionalRenderer,
                ),
                ifBranchIdentifier,
              );
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
                      onlyChildInParentOptimization && t.numericLiteral(1),
                    )
                  : callRuntime(
                      "resumeConditional",
                      cbNode,
                      getScopeIdIdentifier(section),
                      getScopeAccessorLiteral(nodeRef),
                    ),
              );
            }

            nextTag.insertBefore(statement!);
            getHTMLSectionStatements(section).push(
              t.variableDeclaration(
                "let",
                [
                  t.variableDeclarator(ifScopeIdIdentifier),
                  isStateful && t.variableDeclarator(ifBranchIdentifier),
                ].filter(Boolean) as t.VariableDeclarator[],
              ),
            );
            getSerializedScopeProperties(section).set(
              t.stringLiteral(
                getScopeAccessorLiteral(nodeRef).value +
                  AccessorChar.ConditionalScope,
              ),
              callRuntime("getScopeById", ifScopeIdIdentifier),
            );
          }
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
              setClosureSignalBuilder(
                branchTag,
                (closureSignal, render, intersection) => {
                  return callRuntime(
                    "conditionalClosure",
                    getScopeAccessorLiteral(
                      closureSignal.referencedBindings as Binding,
                    ),
                    getScopeAccessorLiteral(nodeRef),
                    t.numericLiteral(i),
                    render,
                    intersection,
                  );
                },
              );
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
          signal.hasDownstreamIntersections = () =>
            branches.some(([, bodySection]) => bodySection?.closures);
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

function isRoot(tag: t.NodePath<t.MarkoTag>) {
  return isCoreTagName(tag, "if");
}
