import { types as t } from "@marko/compiler";
import { Tag, assertNoParams, assertNoVar } from "@marko/babel-utils";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import {
  getSignalFn,
  getSignal,
  setSubscriberBuilder,
  writeHTMLResumeStatements,
  getSerializedScopeProperties,
  getResumeRegisterId,
  addValue,
  getClosures,
  setRegisterScopeBuilder,
} from "../../util/signals";
import { callRuntime, importRuntime } from "../../util/runtime";
import { isCoreTagName } from "../../util/is-core-tag";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import {
  getOrCreateSection,
  getScopeIdentifier,
  getScopeIdIdentifier,
  getSection,
  Section,
} from "../../util/sections";
import {
  ReserveType,
  reserveScope,
  getScopeAccessorLiteral,
} from "../../util/reserve";
import { isOutputDOM, isOutputHTML } from "../../util/marko-config";
import analyzeAttributeTags from "../../util/nested-attribute-tags";
import customTag from "../../visitors/tag/custom-tag";
import { mergeReferences, References } from "../../util/references";
import { scopeIdentifier } from "../../visitors/program";

export default {
  analyze: {
    enter(tag) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSection(tag),
        tag.node,
        "if",
        "#text"
      );
      customTag.analyze.enter(tag);
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
            `The '<if>' tag requires a default attribute like '<if=condition>'.`
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
            Error
          );
        }
      }

      walks.visit(tag, walks.WalkCodes.Replace);
      walks.enterShallow(tag);
      if (isOutputHTML()) {
        writer.flushBefore(tag);
      }
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

export function exitBranchAnalyze(tag: t.NodePath<t.MarkoTag>) {
  const section = getOrCreateSection(tag);
  const tagBody = tag.get("body");
  const bodySection = getOrCreateSection(tagBody);
  const [isLast, branches] = getBranches(tag, bodySection);
  if (isLast) {
    const rootExtra = branches[0].tag.node.extra;
    const conditionalReferences = mergeReferences(
      section,
      branches
        .filter(({ tag }) => tag.node.attributes[0]?.extra?.valueReferences)
        .map(({ tag }) => [tag.node.attributes[0].extra, "valueReferences"])
    );
    rootExtra.conditionalReferences = conditionalReferences;
    rootExtra.isStateful = !!conditionalReferences;
    rootExtra.singleNodeOptimization = branches.every(({ tag }) => {
      return tag.node.body.body.length === 1;
    });
  }
}

export function exitBranchTranslate(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const section = getSection(tag);
  const bodySection = getSection(tagBody);
  const [isLast, branches] = getBranches(tag, bodySection);
  const rootExtra = branches[0].tag.node.extra;
  const isStateful = rootExtra.isStateful;
  const singleNodeOptimization = rootExtra.singleNodeOptimization;

  if (isOutputHTML()) {
    if (isStateful) {
      if (!singleNodeOptimization) {
        writer.writePrependTo(tagBody)`${callRuntime(
          "markResumeScopeStart",
          getScopeIdIdentifier(bodySection)
        )}`;
      }
      setRegisterScopeBuilder(tag, (scope: t.Expression) => {
        return t.assignmentExpression(
          "=",
          getScopeIdentifier(bodySection),
          scope
        );
      });
      getSerializedScopeProperties(bodySection).set(
        importRuntime("SYMBOL_OWNER"),
        getScopeIdIdentifier(section)
      );
    }
    writer.flushInto(tag);
    writeHTMLResumeStatements(tagBody);
  }

  if (isLast) {
    const { extra } = branches[0].tag.node;
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
            getScopeAccessorLiteral(extra.reserve!)
            /*writer.getRenderer(section)*/
          );
        });

        if (isStateful) {
          writer.setRegisterRenderer(section, true);
        }

        tag.remove();

        if (testAttr) {
          expr = t.conditionalExpression(testAttr.value, id, expr);
        } else {
          expr = id;
        }
      }

      const signal = getSignal(section, extra.reserve);
      signal.build = () => {
        return callRuntime(
          "conditional",
          getScopeAccessorLiteral(extra.reserve!),
          getSignalFn(signal, [scopeIdentifier])
        );
      };
      signal.hasDownstreamIntersections = () =>
        branches.some((b) => getClosures(b.section).length > 0);
      addValue(
        section,
        extra.conditionalReferences as References,
        signal,
        expr
      );
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
        branchScopeIdentifier.name = ifScopeIdentifier.name;

        if (isStateful) {
          tag.node.body.body.push(
            t.expressionStatement(
              callRuntime(
                "register",
                t.assignmentExpression(
                  "=",
                  ifRendererIdentifier,
                  t.arrowFunctionExpression([], t.blockStatement([]))
                ),
                t.stringLiteral(getResumeRegisterId(section, "renderer"))
              )
            ) as any
          );

          if (singleNodeOptimization) {
            tag.node.body.body.push(
              t.expressionStatement(
                t.assignmentExpression(
                  "=",
                  ifScopeIdIdentifier,
                  getScopeIdIdentifier(section)
                )
              ) as any
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

      if (!isStateful) {
        nextTag.insertBefore(statement!);
      } else {
        nextTag.insertBefore([
          t.variableDeclaration(
            "let",
            [
              singleNodeOptimization &&
                t.variableDeclarator(ifScopeIdIdentifier),
              t.variableDeclarator(ifScopeIdentifier),
              t.variableDeclarator(ifRendererIdentifier),
            ].filter(Boolean) as t.VariableDeclarator[]
          ),
          statement!,
        ]);
        if (singleNodeOptimization) {
          write`${callRuntime(
            "markResumeControlSingleNodeEnd",
            getScopeIdIdentifier(section),
            getScopeAccessorLiteral(extra.reserve!),
            ifScopeIdIdentifier
          )}`;
        } else {
          write`${callRuntime(
            "markResumeControlEnd",
            getScopeIdIdentifier(section),
            getScopeAccessorLiteral(extra.reserve!)
          )}`;
        }
        getSerializedScopeProperties(section).set(
          t.stringLiteral(getScopeAccessorLiteral(extra.reserve!).value + "!"),
          ifScopeIdentifier
        );
        getSerializedScopeProperties(section).set(
          t.stringLiteral(getScopeAccessorLiteral(extra.reserve!).value + "("),
          ifRendererIdentifier
        );
      }
    }
  }
}
