import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { getSharedUid, usedSharedUid } from "../../util/generate-uid";
import isStatic from "../../util/is-static";
import { getReadReplacement, isRegisteredFnExtra } from "../../util/references";
import { callRuntime } from "../../util/runtime";
import { getScopeIdIdentifier } from "../../util/sections";
import type {
  SerializeReason,
  SerializeReasons,
} from "../../util/serialize-reasons";
import { writeHTMLResumeStatements } from "../../util/signals";
import { simplifyFunction } from "../../util/simplify-fn";
import { traverseReplace } from "../../util/traverse";
import type { TemplateVisitor } from "../../util/visitors";
import { flushInto } from "../../util/writer";
import { type InputSerializeReason, resolveSerializeReasonId } from ".";

export function getTemplateContentName() {
  return getSharedUid("content");
}

export function getSerializeGuard(
  reason: undefined | SerializeReason,
  optional: boolean,
) {
  return !reason
    ? t.numericLiteral(0)
    : reason === true || reason.state
      ? optional
        ? undefined
        : t.numericLiteral(1)
      : getInputSerializeReasonGuard(reason.input!);
}

export function getSerializeGuardForAny(
  reasons: undefined | SerializeReasons,
  optional: boolean,
) {
  if (!reasons || reasons === true) {
    return getSerializeGuard(reasons, optional);
  }

  if (reasons.length === 1) {
    return getSerializeGuard(reasons[0], optional);
  }

  let expr!: t.Expression;
  for (const reason of reasons) {
    if (reason.state) {
      return optional ? undefined : t.numericLiteral(1);
    }

    const guard = getSerializeGuard(reason, false)!;
    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr;
}

export function getExprIfSerialized<
  T extends undefined | SerializeReason,
  U extends t.Expression,
>(reason: T, expr: U) {
  return (
    reason
      ? reason === true || reason.state
        ? expr
        : t.logicalExpression(
            "&&",
            callRuntime(
              "serializeIf",
              t.identifier(getSharedUid("serialize")),
              t.numericLiteral(
                resolveSerializeReasonId(
                  getProgram().node.extra.inputSerializeReasons!,
                  reason.input!,
                ),
              ),
            ),
            expr,
          )
      : undefined
  ) as T extends {} ? U : undefined;
}

function getInputSerializeReasonGuard(reason: InputSerializeReason) {
  return callRuntime(
    "serializeGuard",
    t.identifier(getSharedUid("serialize")),
    t.numericLiteral(
      resolveSerializeReasonId(
        getProgram().node.extra.inputSerializeReasons!,
        reason,
      ),
    ),
  );
}

export default {
  translate: {
    exit(program) {
      flushInto(program);
      writeHTMLResumeStatements(program);
      traverseReplace(program.node, "body", replaceNode);
      const renderContent: t.Statement[] = [];

      for (const child of program.get("body")) {
        if (!isStatic(child)) {
          renderContent.push(child.node);
          child.remove();
        } else if (child.isMarkoScriptlet()) {
          if (child.node.target && child.node.target !== "server") {
            child.remove();
          } else {
            child.replaceWithMultiple(child.node.body);
          }
        }
      }

      const serializeId =
        usedSharedUid("serialize") && getSharedUid("serialize");
      const contentId = usedSharedUid("content") && getTemplateContentName();
      const contentFn = t.arrowFunctionExpression(
        serializeId
          ? [t.identifier("input"), t.identifier(serializeId)]
          : [t.identifier("input")],
        t.blockStatement(renderContent),
      );
      const exportDefault = t.exportDefaultDeclaration(
        callRuntime(
          "createTemplate",
          t.stringLiteral(program.hub.file.metadata.marko.id),
          contentId ? t.identifier(contentId) : contentFn,
        ),
      );

      if (contentId) {
        program.node.body.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(t.identifier(contentId), contentFn),
          ]),
          exportDefault,
        );
      } else {
        program.node.body.push(exportDefault);
      }
    },
  },
} satisfies TemplateVisitor<t.Program>;

function replaceNode(node: t.Node, container: t.Node | t.Node[]) {
  return (
    replaceBindingReadNode(node) ||
    replaceRegisteredFunctionNode(node, container)
  );
}

function replaceBindingReadNode(node: t.Node) {
  switch (node.type) {
    case "Identifier":
    case "MemberExpression": {
      const { extra } = node;
      if (
        extra &&
        !(
          (extra.read && !extra.read.binding.declared) ||
          (extra.binding && !extra.binding.declared)
        )
      ) {
        // Only rename declared bindings
        // TODO this is probably wrong and should walk up to the closest declared binding.
        return getReadReplacement(node);
      }
    }
  }
}

export function replaceRegisteredFunctionNode(
  node: t.Node,
  container: t.Node[] | t.Node,
) {
  switch (node.type) {
    case "ClassMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.classProperty(node.key, replacement);
    }
    case "ClassPrivateMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.classPrivateProperty(node.key, replacement);
    }
    case "ObjectMethod": {
      const replacement = getRegisteredFnExpression(node);
      return replacement && t.objectProperty(node.key, replacement);
    }
    case "FunctionDeclaration": {
      const { extra } = node;
      if (isRegisteredFnExtra(extra)) {
        let registeredFnDeclarations = registeredFnDeclarationsByBody.get(
          container as t.FunctionDeclaration["body"]["body"],
        );
        if (!registeredFnDeclarations) {
          registeredFnDeclarationsByBody.set(
            container as t.FunctionDeclaration["body"]["body"],
            (registeredFnDeclarations = []),
          );
        }
        registeredFnDeclarations.push({
          id: node.id!.name,
          registerId: extra.registerId,
        });
      }
      break;
    }
    case "ArrowFunctionExpression":
    case "FunctionExpression": {
      return getRegisteredFnExpression(node);
    }
    case "BlockStatement":
    case "MarkoScriptlet":
      addRegisteredDeclarations(node.body);
      break;
  }
}

const registeredFnDeclarationsByBody: WeakMap<
  t.Program["body"] | t.BlockStatement["body"],
  {
    id: string;
    registerId: string;
  }[]
> = new WeakMap();

function addRegisteredDeclarations(body: t.Statement[]) {
  const registeredFnDeclarations = registeredFnDeclarationsByBody.get(body);
  if (registeredFnDeclarations) {
    for (const { id, registerId } of registeredFnDeclarations) {
      body.push(
        t.expressionStatement(
          callRuntime(
            "register",
            t.identifier(id),
            t.stringLiteral(registerId),
          ),
        ),
      );
    }
  }
}

function getRegisteredFnExpression(
  node: Exclude<t.Function, t.FunctionDeclaration>,
) {
  const { extra } = node;
  if (isRegisteredFnExtra(extra)) {
    return callRuntime(
      "register",
      simplifyFunction(node) as
        | t.FunctionExpression
        | t.ArrowFunctionExpression,
      t.stringLiteral(extra.registerId),
      (extra.referencedBindingsInFunction || extra.referencesScope) &&
        getScopeIdIdentifier(extra.section),
    );
  }
}
