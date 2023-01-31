import { types as t } from "@marko/compiler";
import { Tag, assertNoParams, assertNoVar } from "@marko/babel-utils";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import {
  subscribe,
  getComputeFn,
  getSignal,
  setSubscriberBuilder,
  writeHTMLHydrateStatements,
  getSerializedScopeProperties,
  getHydrateRegisterId,
} from "../../util/signals";
import { callRuntime, importRuntime } from "../../util/runtime";
import { isCoreTagName } from "../../util/is-core-tag";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import {
  getOrCreateSectionId,
  getScopeIdentifier,
  getScopeIdIdentifier,
  getSectionId,
} from "../../util/sections";
import {
  ReserveType,
  reserveScope,
  countReserves,
  getNodeLiteral,
} from "../../util/reserve";
import { isOutputDOM, isOutputHTML } from "../../util/marko-config";
import analyzeAttributeTags from "../../util/nested-attribute-tags";
import customTag from "../../visitors/tag/custom-tag";
import { mergeReferenceGroups, ReferenceGroup } from "../../util/references";

export default {
  analyze: {
    enter(tag) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSectionId(tag),
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
    sectionId: number;
  }[]
>();

function getBranches(tag: t.NodePath<t.MarkoTag>, bodySectionId: number) {
  const branches = BRANCHES_LOOKUP.get(tag) ?? [];
  const nextTag = tag.getNextSibling();
  const isLast = !(
    isCoreTagName(nextTag, "else") || isCoreTagName(nextTag, "else-if")
  );

  branches.push({
    tag,
    sectionId: bodySectionId,
  });

  if (!isLast) {
    BRANCHES_LOOKUP.set(nextTag as t.NodePath<t.MarkoTag>, branches);
  }

  return [isLast, branches] as const;
}

export function exitBranchAnalyze(tag: t.NodePath<t.MarkoTag>) {
  const sectionId = getOrCreateSectionId(tag);
  const tagBody = tag.get("body");
  const bodySectionId = getOrCreateSectionId(tagBody);
  const [isLast, branches] = getBranches(tag, bodySectionId);
  if (isLast) {
    const rootExtra = branches[0].tag.node.extra;
    const conditionalReferences = mergeReferenceGroups(
      sectionId,
      branches
        .filter(({ tag }) => tag.node.attributes[0]?.extra?.valueReferences)
        .map(({ tag }) => [tag.node.attributes[0].extra, "valueReferences"])
    );
    rootExtra.conditionalReferences = conditionalReferences;
    rootExtra.isStateful = !!conditionalReferences.references;
    rootExtra.singleNodeOptimization = branches.every(({ tag }) => {
      return tag.node.body.body.length === 1;
    });
  }
}

export function exitBranchTranslate(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const sectionId = getSectionId(tag);
  const bodySectionId = getSectionId(tagBody);
  const [isLast, branches] = getBranches(tag, bodySectionId);
  const rootExtra = branches[0].tag.node.extra;
  const isStateful = rootExtra.isStateful;
  const singleNodeOptimization = rootExtra.singleNodeOptimization;

  if (isOutputHTML()) {
    if (isStateful) {
      if (!singleNodeOptimization) {
        writer.writePrependTo(tagBody)`${callRuntime(
          "markHydrateScopeStart",
          getScopeIdIdentifier(bodySectionId)
        )}`;
      }
      getSerializedScopeProperties(bodySectionId).set(
        importRuntime("SYMBOL_OWNER"),
        getScopeIdIdentifier(sectionId)
      );
    }
    writer.flushInto(tag);
    writeHTMLHydrateStatements(tagBody);
  }

  if (isLast) {
    const { extra } = branches[0].tag.node;
    if (isOutputDOM()) {
      let expr: t.Expression = t.nullLiteral();

      for (let i = branches.length; i--; ) {
        const { tag, sectionId } = branches[i];
        const [testAttr] = tag.node.attributes;
        const id = writer.getRenderer(sectionId);

        setSubscriberBuilder(tag, (subscriber) => {
          return callRuntime(
            "inConditionalScope",
            subscriber,
            getNodeLiteral(extra.reserve!)
            /*writer.getRenderer(sectionId)*/
          );
        });

        if (isStateful) {
          writer.setRegisterRenderer(sectionId, true);
        }

        tag.remove();

        if (testAttr) {
          expr = t.conditionalExpression(testAttr.value, id, expr);
        } else {
          expr = id;
        }
      }

      const references = (extra.conditionalReferences as ReferenceGroup)
        .references;
      const signal = getSignal(sectionId, extra.reserve);
      signal.build = () => {
        return callRuntime(
          "conditional",
          getNodeLiteral(extra.reserve!),
          t.numericLiteral(countReserves(references) || 1),
          getComputeFn(sectionId, expr, references)
        );
      };
      subscribe(references, signal);
    } else {
      const write = writer.writeTo(tag);
      const nextTag = tag.getNextSibling();
      const ifScopeIdIdentifier = tag.scope.generateUidIdentifier("ifScopeId");
      const ifScopeIdentifier = getScopeIdentifier(branches[0].sectionId);
      const ifRendererIdentifier =
        tag.scope.generateUidIdentifier("ifRenderer");

      let statement: t.Statement | undefined;
      for (let i = branches.length; i--; ) {
        const { tag, sectionId } = branches[i];

        if (isStateful) {
          tag.node.body.body.push(
            t.expressionStatement(
              callRuntime(
                "register",
                ifRendererIdentifier,
                t.stringLiteral(getHydrateRegisterId(sectionId, "renderer"))
              )
            ) as any
          );

          if (singleNodeOptimization) {
            tag.node.body.body.push(
              t.expressionStatement(
                t.assignmentExpression(
                  "=",
                  ifScopeIdIdentifier,
                  getScopeIdIdentifier(sectionId)
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
        nextTag.insertBefore(
          [
            singleNodeOptimization &&
              t.variableDeclaration("let", [
                t.variableDeclarator(ifScopeIdIdentifier),
              ]),
            t.variableDeclaration("const", [
              t.variableDeclarator(ifScopeIdentifier, t.objectExpression([])),
              t.variableDeclarator(
                ifRendererIdentifier,
                t.arrowFunctionExpression([], t.blockStatement([]))
              ),
            ]),
            statement!,
          ].filter(Boolean) as t.Statement[]
        );
        if (singleNodeOptimization) {
          write`${callRuntime(
            "markHydrateControlSingleNodeEnd",
            getScopeIdIdentifier(sectionId),
            getNodeLiteral(extra.reserve!),
            ifScopeIdIdentifier
          )}`;
        } else {
          write`${callRuntime(
            "markHydrateControlEnd",
            getScopeIdIdentifier(sectionId),
            getNodeLiteral(extra.reserve!)
          )}`;
        }
        getSerializedScopeProperties(sectionId).set(
          t.stringLiteral(getNodeLiteral(extra.reserve!).value + "!"),
          ifScopeIdentifier
        );
        getSerializedScopeProperties(sectionId).set(
          t.stringLiteral(getNodeLiteral(extra.reserve!).value + "("),
          ifRendererIdentifier
        );
      }
    }
  }
}
