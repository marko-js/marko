import { type Tag, assertNoParams, assertNoVar } from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { AccessorChar, WalkCode } from "@marko/runtime-tags/common/types";
import { isCoreTagName } from "../../util/is-core-tag";
import { isStatefulReferences } from "../../util/is-stateful";
import { isOutputDOM, isOutputHTML } from "../../util/marko-config";
import analyzeAttributeTags from "../../util/nested-attribute-tags";
import {
  mergeReferences,
  BindingType,
  getScopeAccessorLiteral,
  type Binding,
  createBinding,
} from "../../util/references";
import { callRuntime } from "../../util/runtime";
import {
  type Section,
  getOrCreateSection,
  getScopeIdIdentifier,
  getScopeIdentifier,
  getSection,
  startSection,
  checkStatefulClosures,
} from "../../util/sections";
import {
  addValue,
  getClosures,
  getResumeRegisterId,
  getSerializedScopeProperties,
  getSignal,
  getSignalFn,
  setForceResumeScope,
  setRegisterScopeBuilder,
  setSubscriberBuilder,
  writeHTMLResumeStatements,
} from "../../util/signals";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import * as walks from "../../util/walks";
import * as writer from "../../util/writer";
import { scopeIdentifier } from "../../visitors/program";

const kBinding = Symbol("if node binding");

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kBinding]?: Binding;
  }
}

export default {
  analyze: {
    enter(tag) {
      const tagBody = tag.get("body");
      const section = getOrCreateSection(tag);
      const tagExtra = (tag.node.extra ??= {});
      startSection(tagBody);
      tagExtra[kBinding] = createBinding(
        "#text",
        BindingType.dom,
        section,
        undefined,
        tagExtra,
      );
    },
    exit(tag) {
      analyzeAttributeTags(tag);
      exitBranchAnalyze(tag);
    },
  },
  translate: {
    enter(tag) {
      const { node } = tag;
      const [testAttr] = node.attributes;

      assertNoVar(tag);
      assertNoParams(tag);

      if (!t.isMarkoAttribute(testAttr) || !testAttr.default) {
        throw tag
          .get("name")
          .buildCodeFrameError(
            `The '<if>' tag requires a default attribute like '<if=condition>'.`,
          );
      }

      if (node.attributes.length > 1) {
        const start = node.attributes[1].loc?.start;
        const end = node.attributes[node.attributes.length - 1].loc?.end;
        const msg = `The '<if>' tag only supports a default attribute.`;

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

      walks.visit(tag, WalkCode.Replace);
      walks.enterShallow(tag);
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
      enterBranchTranslate(tag);
    },
    exit(tag) {
      exitBranchTranslate(tag);
    },
  },
  attributes: {},
  autocomplete: [
    {
      snippet: "if=${1:condition}",
      description: "Use to display content only if the condition is met.",
      descriptionMoreURL: "https://markojs.com/docs/core-tags/#if-else-if-else",
    },
  ],
} as Tag;

const BRANCHES_LOOKUP = new WeakMap<
  t.NodePath<t.MarkoTag>,
  {
    tag: t.NodePath<t.MarkoTag>;
    section: Section;
  }[]
>();

function getBranches(tag: t.NodePath<t.MarkoTag>, bodySection: Section) {
  const branches = BRANCHES_LOOKUP.get(tag) ?? [];
  const nextTag = tag.getNextSibling();
  const isLast = !(
    isCoreTagName(nextTag, "else") || isCoreTagName(nextTag, "else-if")
  );

  branches.push({
    tag,
    section: bodySection,
  });

  if (!isLast) {
    BRANCHES_LOOKUP.set(nextTag as t.NodePath<t.MarkoTag>, branches);
  }

  return [isLast, branches] as const;
}

function getRoot(tag: t.NodePath<t.MarkoTag>) {
  if (isCoreTagName(tag, "if")) {
    return tag;
  }
  return BRANCHES_LOOKUP.get(tag)![0].tag;
}

export function exitBranchAnalyze(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const bodySection = getOrCreateSection(tagBody);
  const [isLast, branches] = getBranches(tag, bodySection);
  if (isLast) {
    const rootTag = branches[0].tag;
    const rootExtra = rootTag.node.extra!;
    mergeReferences(
      rootTag,
      branches.map(({ tag }) => tag.node.attributes[0]?.value),
    );
    rootExtra.singleNodeOptimization = branches.every(({ tag }) => {
      return tag.node.body.body.length === 1;
    });
    branches.forEach(({ section }) => {
      section.upstreamExpression = rootExtra;
    });
  }
}

export function enterBranchTranslate(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const bodySection = getSection(tagBody);
  const rootExtra = getRoot(tag).node.extra!;
  const isStateful = isStatefulReferences(rootExtra.referencedBindings);
  const singleNodeOptimization = rootExtra.singleNodeOptimization;

  if (isOutputHTML() && isStateful && !singleNodeOptimization) {
    writer.writeTo(tagBody)`${callRuntime(
      "markResumeScopeStart",
      getScopeIdIdentifier(bodySection),
    )}`;
  }
}

export function exitBranchTranslate(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const section = getSection(tag);
  const bodySection = getSection(tagBody);
  const [isLast, branches] = getBranches(tag, bodySection);
  const rootExtra = branches[0].tag.node.extra!;
  const nodeRef = rootExtra[kBinding]!;
  const isStateful = isStatefulReferences(rootExtra.referencedBindings);
  const singleNodeOptimization = rootExtra.singleNodeOptimization;
  const hasStatefulClosures = checkStatefulClosures(bodySection, true);

  if (isOutputHTML()) {
    if (isStateful || hasStatefulClosures) {
      setRegisterScopeBuilder(tag, (scope: t.Expression) => {
        return t.assignmentExpression(
          "=",
          getScopeIdentifier(bodySection),
          scope,
        );
      });
      setForceResumeScope(bodySection);
    }
    writer.flushInto(tag);
    // TODO: this is a hack to get around the fact that we don't have a way to
    // know if a scope requires dynamic subscriptions
    setSubscriberBuilder(tag, (() => {}) as any);
    writeHTMLResumeStatements(tagBody);
  }

  if (isLast) {
    const extra = branches[0].tag.node.extra!;
    if (isOutputDOM()) {
      let expr: t.Expression = t.nullLiteral();

      for (let i = branches.length; i--; ) {
        const { tag, section } = branches[i];
        const [testAttr] = tag.node.attributes;
        const id = writer.getRenderer(section);

        setSubscriberBuilder(tag, (subscriber) => {
          return callRuntime(
            "inConditionalScope",
            subscriber,
            getScopeAccessorLiteral(nodeRef),
            /*writer.getRenderer(section)*/
          );
        });

        tag.remove();

        if (testAttr) {
          expr = t.conditionalExpression(testAttr.value, id, expr);
        } else {
          expr = id;
        }
      }

      const signal = getSignal(section, nodeRef, "if");
      signal.build = () => {
        return callRuntime(
          "conditional",
          getScopeAccessorLiteral(nodeRef),
          getSignalFn(signal, [scopeIdentifier]),
        );
      };
      signal.hasDownstreamIntersections = () =>
        branches.some((b) => getClosures(b.section).length > 0);
      addValue(section, extra.referencedBindings, signal, expr);
    } else {
      const write = writer.writeTo(tag);
      const nextTag = tag.getNextSibling();
      const ifScopeIdIdentifier = tag.scope.generateUidIdentifier("ifScopeId");
      const ifScopeIdentifier = getScopeIdentifier(branches[0].section);
      const ifRendererIdentifier =
        tag.scope.generateUidIdentifier("ifRenderer");

      let statement: t.Statement | undefined;
      for (let i = branches.length; i--; ) {
        const { tag, section } = branches[i];
        const branchScopeIdentifier = getScopeIdentifier(section, true);
        const branchHasStatefulClosures = checkStatefulClosures(section, true);
        branchScopeIdentifier.name = ifScopeIdentifier.name;

        if (isStateful) {
          tag.node.body.body.push(
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
                t.stringLiteral(getResumeRegisterId(section, "renderer")),
              ),
            ) as any,
          );
        }
        if (isStateful || branchHasStatefulClosures) {
          if (singleNodeOptimization) {
            tag.node.body.body.push(
              t.expressionStatement(
                t.assignmentExpression(
                  "=",
                  ifScopeIdIdentifier,
                  getScopeIdIdentifier(section),
                ),
              ) as any,
            );
          }
        }

        const [testAttr] = tag.node.attributes;
        const curStatement = toFirstStatementOrBlock(tag.node.body);

        if (testAttr) {
          statement = t.ifStatement(testAttr.value, curStatement, statement);
        } else {
          statement = curStatement;
        }

        tag.remove();
      }

      if (!isStateful && !hasStatefulClosures) {
        nextTag.insertBefore(statement!);
      } else {
        nextTag.insertBefore([
          t.variableDeclaration(
            "let",
            [
              singleNodeOptimization &&
                t.variableDeclarator(ifScopeIdIdentifier),
              t.variableDeclarator(ifScopeIdentifier),
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
          ifScopeIdentifier,
        );
      }
    }
  }
}
