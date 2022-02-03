import { types as t } from "@marko/compiler";
import { Tag, assertNoParams, assertNoVar } from "@marko/babel-utils";
import * as writer from "../../util/writer";
import * as walks from "../../util/walks";
import * as sorted from "../../util/sorted-arr";
import { callRuntime } from "../../util/runtime";
import { isCoreTagName } from "../../util/is-core-tag";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import { getOrCreateSectionId, getSectionId } from "../../util/sections";
import {
  Reserve,
  ReserveType,
  reserveScope,
  compareReserves,
} from "../../util/reserve";
import { isOutputDOM } from "../../util/marko-config";
import analyzeAttributeTags from "../../util/nested-attribute-tags";
import customTag from "../../visitors/tag/custom-tag";

export default {
  analyze: {
    enter(tag) {
      reserveScope(
        ReserveType.Visit,
        getOrCreateSectionId(tag),
        tag.node,
        "if",
        3
      );
      customTag.analyze.enter(tag);
    },
    exit(tag) {
      analyzeAttributeTags(tag);
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
      writer.start(tag);
      writer.setQueueFactory(tag, queueBranchFactory);
    },
    exit(tag) {
      exitCondition(tag);
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

export const queueBranchFactory: writer.queueFactory = (
  binding,
  functionIdentifier,
  targetSectionId
) => {
  const renderer = writer.getRenderer(targetSectionId);
  return callRuntime(
    "queueInBranch",
    t.numericLiteral(0),
    renderer,
    functionIdentifier,
    t.numericLiteral(binding.id)
  );
};

export function exitCondition(tag: t.NodePath<t.MarkoTag>) {
  const sectionId = writer.end(tag);
  const nextTag = tag.getNextSibling();
  const isLast = !(
    isCoreTagName(nextTag, "else") || isCoreTagName(nextTag, "else-if")
  );
  const branches = BRANCHES_LOOKUP.get(tag) || [];

  branches.push({
    tag,
    sectionId,
  });

  if (isLast) {
    if (isOutputDOM()) {
      const sectionId = getSectionId(tag);
      const { extra } = branches[0].tag.node;
      const refs: Reserve[] = [];
      const declarators: t.VariableDeclarator[] = [];
      let expr: t.Expression = t.nullLiteral();

      for (let i = branches.length; i--; ) {
        const { tag, sectionId } = branches[i];
        const [testAttr] = tag.node.attributes;
        const rendererDeclarator = writer.getSectionDeclarator(
          tag,
          sectionId,
          "if"
        );
        const id = rendererDeclarator.id as t.Identifier;

        declarators.push(rendererDeclarator);

        tag.remove();

        if (testAttr) {
          const curRefs = testAttr.extra.valueReferences;
          if (curRefs) {
            if (Array.isArray(curRefs)) {
              for (const ref of curRefs) {
                sorted.insert(compareReserves, refs, ref);
              }
            } else {
              sorted.insert(compareReserves, refs, curRefs);
            }
          }

          expr = t.conditionalExpression(testAttr.value, id, expr);
        } else {
          expr = id;
        }
      }

      nextTag.insertBefore(t.variableDeclaration("const", declarators));

      writer.addStatement(
        "apply",
        sectionId,
        refs.length === 0 ? undefined : refs.length === 1 ? refs[0] : refs,
        t.expressionStatement(
          callRuntime(
            "setConditionalRenderer",
            t.numericLiteral(extra.reserve!.id),
            expr
          )
        )
      );
    } else {
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
  } else {
    BRANCHES_LOOKUP.set(nextTag as t.NodePath<t.MarkoTag>, branches);
  }
}
