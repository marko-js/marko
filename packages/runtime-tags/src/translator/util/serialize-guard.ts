import { types as t } from "@marko/compiler";

import { getSharedUid } from "./generate-uid";
import { getDebugNames } from "./references";
import { callRuntime } from "./runtime";
import {
  getParamReasonGroupIndex,
  groupParamsBySection,
  isSameOrChildSection,
  type Section,
} from "./sections";
import {
  isReasonDynamic,
  type SerializeReason,
  type SerializeReasons,
} from "./serialize-reasons";
import { withLeadingComment } from "./with-comment";

export function getSerializeGuard(
  section: Section,
  reason: undefined | SerializeReason,
  optional: boolean,
) {
  if (!isReasonDynamic(reason)) {
    return reason
      ? optional
        ? undefined
        : withLeadingComment(
            t.numericLiteral(1),
            getDebugNames(reason === true ? undefined : reason.state),
          )
      : t.numericLiteral(0);
  }

  let expr: t.Expression | undefined;
  for (const [paramsSection, params] of groupParamsBySection(reason.param)) {
    if (!isSameOrChildSection(paramsSection, section)) {
      return optional
        ? undefined
        : withLeadingComment(t.numericLiteral(1), getDebugNames(params));
    }

    const serializeIdentifier = t.identifier(
      getSharedUid(`scope${paramsSection.id}_reason`, paramsSection),
    );
    const guard = paramsSection.paramReasonGroups
      ? callRuntime(
          "_serialize_guard",
          serializeIdentifier,
          withLeadingComment(
            t.numericLiteral(getParamReasonGroupIndex(paramsSection, params)),
            getDebugNames(params),
          ),
        )
      : serializeIdentifier;

    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr!;
}

export function getSerializeGuardForAny(
  section: Section,
  reasons: undefined | SerializeReasons,
  optional: boolean,
) {
  if (!reasons || reasons === true) {
    return getSerializeGuard(section, reasons, optional);
  }

  if (reasons.length === 1) {
    return getSerializeGuard(section, reasons[0], optional);
  }

  let expr!: t.Expression;
  for (const reason of reasons) {
    if (!isReasonDynamic(reason)) {
      return optional
        ? undefined
        : withLeadingComment(t.numericLiteral(1), getDebugNames(reason.state));
    }

    const guard = getSerializeGuard(section, reason, false)!;
    expr = expr ? t.logicalExpression("||", expr, guard) : guard;
  }

  return expr;
}

export function getExprIfSerialized<
  T extends undefined | SerializeReason,
  U extends t.Expression,
>(section: Section, reason: T, expr: U): T extends {} ? U : undefined {
  if (!isReasonDynamic(reason)) {
    return (reason && expr) as T extends {} ? U : undefined;
  }

  let orExpr: t.Expression | undefined;
  for (const [paramsSection, params] of groupParamsBySection(reason.param)) {
    if (!isSameOrChildSection(paramsSection, section)) {
      return expr as T extends {} ? U : undefined;
    }

    const serializeIdentifier = t.identifier(
      getSharedUid(`scope${paramsSection.id}_reason`, paramsSection),
    );

    const guard = paramsSection.paramReasonGroups
      ? callRuntime(
          "_serialize_if",
          serializeIdentifier,
          withLeadingComment(
            t.numericLiteral(getParamReasonGroupIndex(paramsSection, params)),
            getDebugNames(params),
          ),
        )
      : serializeIdentifier;

    orExpr = orExpr ? t.logicalExpression("||", orExpr, guard) : guard;
  }

  return t.logicalExpression("&&", orExpr!, expr) as any;
}
