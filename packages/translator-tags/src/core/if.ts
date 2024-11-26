import {
  assertNoArgs,
  assertNoParams,
  assertNoVar,
  type Tag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { AccessorChar, WalkCode } from "@marko/runtime-tags/common/types";

import { assertNoSpreadAttrs } from "../util/assert";
import { getTagName } from "../util/get-tag-name";
import { isConditionTag, isCoreTagName } from "../util/is-core-tag";
import { isStatefulReferences } from "../util/is-stateful";
import {
  type Binding,
  BindingType,
  createBinding,
  getScopeAccessorLiteral,
  mergeReferences,
} from "../util/references";
import { callRuntime } from "../util/runtime";
import {
  checkStatefulClosures,
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
  getResumeRegisterId,
  getSerializedScopeProperties,
  getSignal,
  getSignalFn,
  setForceResumeScope,
  setSubscriberBuilder,
  writeHTMLResumeStatements,
} from "../util/signals";
import toFirstStatementOrBlock from "../util/to-first-statement-or-block";
import { translateByTarget } from "../util/visitors";
import * as walks from "../util/walks";
import * as writer from "../util/writer";

const kBinding = Symbol("if node binding");
const BRANCHES_LOOKUP = new WeakMap<
  t.NodePath<t.MarkoTag>,
  [tag: t.NodePath<t.MarkoTag>, bodySection: Section | undefined][]
>();

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kBinding]?: Binding;
  }
}

export const IfTag = {
  analyze(tag) {
    assertValidCondition(tag);
    if (tag.node.attributeTags.length) return;

    const [isLast, branches] = getBranches(tag, startSection(tag.get("body")));
    if (isLast) {
      const [rootTag] = branches[0];
      const rootExtra = (rootTag.node.extra ??= {});
      const mergeReferenceNodes: t.Node[] = [];
      let singleNodeOptimization = true;

      for (const [branchTag, branchBodySection] of branches) {
        if (branchBodySection) {
          branchBodySection.upstreamExpression = rootExtra;

          if (
            !(
              branchBodySection.content === null ||
              branchBodySection.content?.singleChild
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
      rootExtra[kBinding] = createBinding(
        "#text",
        BindingType.dom,
        section,
        undefined,
        rootExtra,
      );
      rootExtra.singleNodeOptimization = singleNodeOptimization;
      mergeReferences(section, rootTag.node, mergeReferenceNodes);
    }
  },
  translate: translateByTarget({
    html: {
      enter(tag) {
        if (tag.node.attributeTags.length) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);
        const rootExtra = getRoot(tag).node.extra!;
        const isStateful = isStatefulReferences(rootExtra.referencedBindings);
        const singleNodeOptimization = rootExtra.singleNodeOptimization;

        if (isRoot(tag)) {
          walks.visit(tag, WalkCode.Replace);
        }

        walks.enterShallow(tag);
        writer.flushBefore(tag);

        if (bodySection) {
          setSectionParentIsOwner(bodySection, true);

          if (isStateful && !singleNodeOptimization) {
            writer.writeTo(tagBody)`${callRuntime(
              "markResumeScopeStart",
              getScopeIdIdentifier(bodySection),
            )}`;
          }
        }
      },
      exit(tag) {
        if (tag.node.attributeTags.length) return;

        const tagBody = tag.get("body");
        const section = getSection(tag);
        const bodySection = getSectionForBody(tagBody);
        const [isLast, branches] = getBranches(tag, bodySection);
        const rootExtra = branches[0][0].node.extra!;
        const nodeRef = rootExtra[kBinding]!;
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
          setSubscriberBuilder(tag, (() => {}) as any);
          writeHTMLResumeStatements(tagBody);
        }

        if (isLast) {
          const write = writer.writeTo(tag);
          const nextTag = tag.getNextSibling();
          const ifScopeIdIdentifier =
            tag.scope.generateUidIdentifier("ifScopeId");
          const ifRendererIdentifier =
            tag.scope.generateUidIdentifier("ifRenderer");

          let statement: t.Statement | undefined;
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
                    callRuntime(
                      "register",
                      t.assignmentExpression(
                        "=",
                        ifRendererIdentifier,
                        callRuntime(
                          "createRenderer",
                          t.arrowFunctionExpression([], t.blockStatement([])),
                        ),
                      ),
                      t.stringLiteral(
                        getResumeRegisterId(branchBodySection, "renderer"),
                      ),
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
            nextTag.insertBefore([
              t.variableDeclaration(
                "let",
                [
                  t.variableDeclarator(ifScopeIdIdentifier),
                  isStateful && t.variableDeclarator(ifRendererIdentifier),
                ].filter(Boolean) as t.VariableDeclarator[],
              ),
              statement!,
            ]);
            if (isStateful) {
              if (singleNodeOptimization) {
                write`${callRuntime(
                  "markResumeControlSingleNodeEnd",
                  getScopeIdIdentifier(section),
                  getScopeAccessorLiteral(nodeRef),
                  ifScopeIdIdentifier,
                )}`;
              } else {
                write`${callRuntime(
                  "markResumeControlEnd",
                  getScopeIdIdentifier(section),
                  getScopeAccessorLiteral(nodeRef),
                )}`;
              }
              getSerializedScopeProperties(section).set(
                t.stringLiteral(
                  getScopeAccessorLiteral(nodeRef).value +
                    AccessorChar.ConditionalRenderer,
                ),
                ifRendererIdentifier,
              );
            }
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
        if (tag.node.attributeTags.length) return;

        const tagBody = tag.get("body");
        const bodySection = getSectionForBody(tagBody);

        if (bodySection) {
          setSectionParentIsOwner(bodySection, true);
        }

        if (isRoot(tag)) {
          walks.visit(tag, WalkCode.Replace);
        }

        walks.enterShallow(tag);
      },
      exit(tag) {
        if (tag.node.attributeTags.length) return;

        const [isLast, branches] = getBranches(
          tag,
          getSectionForBody(tag.get("body")),
        );

        if (isLast) {
          const section = getSection(tag);
          const rootExtra = branches[0][0].node.extra!;
          const nodeRef = rootExtra[kBinding]!;
          let expr: t.Expression = t.numericLiteral(0);

          for (let i = branches.length; i--; ) {
            const [branchTag, branchBodySection] = branches[i];
            const [testAttr] = branchTag.node.attributes;
            const consequent = branchBodySection
              ? t.identifier(branchBodySection.name)
              : t.numericLiteral(0);

            setSubscriberBuilder(branchTag, (subscriber) => {
              return callRuntime(
                "inConditionalScope",
                subscriber,
                getScopeAccessorLiteral(nodeRef),
                /*t.identifier(section.name)*/
              );
            });

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
              getSignalFn(signal),
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

function getRoot(tag: t.NodePath<t.MarkoTag>) {
  return isRoot(tag) ? tag : BRANCHES_LOOKUP.get(tag)![0][0];
}

function isRoot(tag: t.NodePath<t.MarkoTag>) {
  return isCoreTagName(tag, "if");
}
