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
} from "../../util/signals";
import { callRuntime } from "../../util/runtime";
import { isCoreTagName } from "../../util/is-core-tag";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import { getOrCreateSectionId, getSectionId } from "../../util/sections";
import { ReserveType, reserveScope, countReserves } from "../../util/reserve";
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
        5
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
    branches[0].tag.node.extra.conditionalReferences = mergeReferenceGroups(
      sectionId,
      branches
        .filter(({ tag }) => tag.node.attributes[0]?.extra?.valueReferences)
        .map(({ tag }) => [tag.node.attributes[0].extra, "valueReferences"])
    );
  }
}

export function exitBranchTranslate(tag: t.NodePath<t.MarkoTag>) {
  const tagBody = tag.get("body");
  const bodySectionId = getSectionId(tagBody);
  const [isLast, branches] = getBranches(tag, bodySectionId);

  if (isOutputHTML()) {
    writer.flushInto(tag);
    writeHTMLHydrateStatements(tagBody);
  }

  if (isLast) {
    if (isOutputDOM()) {
      const sectionId = getSectionId(tag);
      const { extra } = branches[0].tag.node;
      let expr: t.Expression = t.nullLiteral();

      for (let i = branches.length; i--; ) {
        const { tag, sectionId } = branches[i];
        const [testAttr] = tag.node.attributes;
        const id = writer.getRenderer(sectionId);

        setSubscriberBuilder(tag, (subscriber) => {
          return callRuntime(
            "inConditionalScope",
            subscriber,
            t.numericLiteral(extra.reserve!.id)
            /*writer.getRenderer(sectionId)*/
          );
        });

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
          t.numericLiteral(extra.reserve!.id),
          t.numericLiteral(countReserves(references) || 1),
          getComputeFn(sectionId, expr, references)
        );
      };
      subscribe(references, signal);
    } else {
      const nextTag = tag.getNextSibling();

      let statement: t.Statement | undefined;
      for (let i = branches.length; i--; ) {
        const { tag } = branches[i];
        const [testAttr] = tag.node.attributes;
        const curStatement = toFirstStatementOrBlock(tag.node.body);

        if (testAttr) {
          statement = t.ifStatement(testAttr.value, curStatement, statement);
        } else {
          statement = curStatement;
        }

        tag.remove();
      }

      nextTag.insertBefore(statement!);
    }
  }
}
