import { types as t } from "@marko/compiler";

import { resolveSerializeReasonId } from "../visitors/program";
import { getSharedUid } from "./generate-uid";
import { groupBy, mapToString, type OneMany } from "./optional";
import {
  type Binding,
  getDebugName,
  getInputDebugName,
  type InputBinding,
  type Sources,
} from "./references";
import { callRuntime } from "./runtime";
import type { Section } from "./sections";
import {
  getBindingSerializeReason,
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
              `state: ${mapToString(reason.state, ", ", getDebugName)}`,
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
            `state: ${mapToString(reason.state, ", ", getDebugName)}`,
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
  if (!reason) {
    return undefined as any;
  }
  if (reason === true || reason.state) {
    return expr as any;
  }

  let orExpr: t.Expression | undefined;

  const grouped = groupBy(reason.param, (binding) => binding.section);
  for (const [section, reasons] of grouped) {
    const serializeIdentifier = t.identifier(
      getSharedUid("serialize", section),
    );

    const guard = section.paramReasonGroups
      ? callRuntime(
          "_serialize_if",
          serializeIdentifier,
          withLeadingComment(
            t.numericLiteral(
              resolveSerializeReasonId(section.paramReasonGroups!, reasons),
            ),
            mapToString(reasons, ",", getDebugName),
          ),
        )
      : serializeIdentifier;

    orExpr = orExpr ? t.logicalExpression("||", orExpr, guard) : guard;
  }

  return t.logicalExpression("&&", orExpr!, expr) as any;
}

function getInputSerializeReasonGuard(reason: Sources) {
  let expr: t.Expression | undefined;

  const grouped = groupBy(reason.param, (binding) => binding.section);
  for (const [section, reasons] of grouped) {
    const serializeIdentifier = t.identifier(
      getSharedUid("serialize", section),
    );
    const guard = section.paramReasonGroups
      ? callRuntime(
          "_serialize_guard",
          serializeIdentifier,
          withLeadingComment(
            t.numericLiteral(
              resolveSerializeReasonId(section.paramReasonGroups!, reasons),
            ),
            mapToString(reasons, ",", getDebugName),
          ),
        )
      : serializeIdentifier;

    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr!;
}

export function getPropertySerializeGuard(
  section: Section,
  childSection: Section,
  childScopeBinding: Binding,
  childSerializeReasonIds: [symbol, ...symbol[]],
) {
  let childSerializeReasonExpr: t.Expression | undefined;
  if (childSerializeReasonIds.length === 1) {
    // Special case single reason to pass either 1 or undefined.
    const reason = getBindingSerializeReason(
      section,
      childScopeBinding,
      childSerializeReasonIds[0],
    );
    childSerializeReasonExpr = !reason
      ? undefined
      : reason == true || reason.state
        ? t.numericLiteral(1)
        : getSerializeGuard(reason, true);
  } else {
    const props: t.ObjectExpression["properties"] = [];
    let hasDynamicReasons = false;
    let hasSkippedReasons = false;
    for (let i = 0; i < childSerializeReasonIds.length; i++) {
      const reason = getBindingSerializeReason(
        section,
        childScopeBinding,
        childSerializeReasonIds[i],
      );
      if (reason) {
        hasDynamicReasons ||= reason !== true && !reason.state;
        const childReason = childSection.paramReasonGroups![
          i
        ] as OneMany<InputBinding>;
        props.push(
          t.objectProperty(
            withLeadingComment(
              t.numericLiteral(i),
              mapToString(childReason, ", ", getInputDebugName),
            ),
            reason === true || reason.state
              ? t.numericLiteral(1)
              : getSerializeGuard(reason, false)!,
          ),
        );
      } else {
        hasSkippedReasons = true;
      }
    }

    if (props.length) {
      childSerializeReasonExpr =
        hasDynamicReasons || hasSkippedReasons
          ? t.objectExpression(props)
          : t.numericLiteral(1);
    }
  }
  return childSerializeReasonExpr;
}
