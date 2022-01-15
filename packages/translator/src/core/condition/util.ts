import { types as t } from "@marko/compiler";
import * as writer from "../../util/writer";
import * as sorted from "../../util/sorted-arr";
import { callRuntime } from "../../util/runtime";
import { isCoreTagName } from "../../util/is-core-tag";
import toFirstStatementOrBlock from "../../util/to-first-statement-or-block";
import { Binding, compareReferences } from "../../analyze/util/references";
import { isOutputDOM } from "../../util/marko-config";

const BRANCHES_LOOKUP = new WeakMap<
  t.NodePath<t.MarkoTag>,
  {
    tag: t.NodePath<t.MarkoTag>;
    section: writer.Section;
  }[]
>();

export function exitCondition(
  tag: t.NodePath<t.MarkoTag>,
  section: writer.Section
) {
  const nextTag = tag.getNextSibling();
  const isLast = !(
    isCoreTagName(nextTag, "else") || isCoreTagName(nextTag, "else-if")
  );
  const branches = BRANCHES_LOOKUP.get(tag) || [];

  branches.push({
    tag,
    section,
  });

  if (isLast) {
    if (isOutputDOM(tag)) {
      const { extra } = branches[0].tag.node;
      const refs: Binding[] = [];
      const declarators: t.VariableDeclarator[] = [];
      let expr: t.Expression = t.nullLiteral();

      for (let i = branches.length; i--; ) {
        const { tag, section } = branches[i];
        const id = tag.scope.generateUidIdentifierBasedOnNode(tag.node.name);
        const [testAttr] = tag.node.attributes;
        const {
          writes = t.stringLiteral(""),
          walks = t.stringLiteral(""),
          apply = t.nullLiteral(),
        } = writer.getSectionMeta(section);
        declarators.push(
          t.variableDeclarator(
            id,
            callRuntime(tag, "createRenderer", writes, walks, apply)
          )
        );

        tag.remove();

        if (testAttr) {
          const curRefs = testAttr.extra.valueReferences;
          if (curRefs) {
            if (Array.isArray(curRefs)) {
              for (const ref of curRefs) {
                sorted.insert(compareReferences, refs, ref);
              }
            } else {
              sorted.insert(compareReferences, refs, curRefs);
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
        tag,
        refs.length === 0 ? undefined : refs.length === 1 ? refs[0] : refs,
        t.expressionStatement(
          callRuntime(
            tag,
            "setConditionalRenderer",
            t.numericLiteral(extra.visitIndex!),
            writer.reserveToScopeId(tag, extra.reserve!),
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
