import { types as t } from "@marko/compiler";

import { getSharedUid } from "./generate-uid";
import { mapToString } from "./optional";
import { getDebugName, type Sources } from "./references";
import { callRuntime } from "./runtime";
import { getParamReasonGroupIndex, groupParamsBySection } from "./sections";
import {
  isReasonDynamic,
  type SerializeReason,
  type SerializeReasons,
} from "./serialize-reasons";
import { withLeadingComment } from "./with-comment";

export function getSerializeGuard(
  reason: undefined | SerializeReason,
  optional: boolean,
) {
  return !reason
    ? t.numericLiteral(0)
    : reason === true || reason.state
      ? optional
        ? undefined
        : reason === true
          ? t.numericLiteral(1)
          : withLeadingComment(
              t.numericLiteral(1),
              mapToString(reason.state, ", ", getDebugName),
            )
      : getInputSerializeReasonGuard(reason);
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
      return optional
        ? undefined
        : withLeadingComment(
            t.numericLiteral(1),
            mapToString(reason.state, ", ", getDebugName),
          );
    }

    const guard = getSerializeGuard(reason, false)!;
    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr;
}

export function getExprIfSerialized<
  T extends undefined | SerializeReason,
  U extends t.Expression,
>(reason: T, expr: U): T extends {} ? U : undefined {
  if (!isReasonDynamic(reason)) {
    return (reason && expr) as T extends {} ? U : undefined;
  }

  let orExpr: t.Expression | undefined;

  for (const [section, reasons] of groupParamsBySection(reason.param)) {
    const serializeIdentifier = t.identifier(
      getSharedUid("serialize", section),
    );

    const guard = section.paramReasonGroups
      ? callRuntime(
          "_serialize_if",
          serializeIdentifier,
          withLeadingComment(
            t.numericLiteral(getParamReasonGroupIndex(section, reasons)),
            mapToString(reasons, ", ", getDebugName),
          ),
        )
      : serializeIdentifier;

    orExpr = orExpr ? t.logicalExpression("||", orExpr, guard) : guard;
  }

  return t.logicalExpression("&&", orExpr!, expr) as any;
}

function getInputSerializeReasonGuard(reason: Sources) {
  let expr: t.Expression | undefined;

  for (const [section, reasons] of groupParamsBySection(reason.param)) {
    const serializeIdentifier = t.identifier(
      getSharedUid("serialize", section),
    );
    const guard = section.paramReasonGroups
      ? callRuntime(
          "_serialize_guard",
          serializeIdentifier,
          withLeadingComment(
            t.numericLiteral(getParamReasonGroupIndex(section, reasons)),
            mapToString(reasons, ", ", getDebugName),
          ),
        )
      : serializeIdentifier;

    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr!;
}
