import { types as t } from "@marko/compiler";
import {
  parse as babelParse,
  parseExpression as babelParseExpression,
} from "@marko/compiler/internal/babel";

import { getLoc, getLocRange } from "./loc";

export function parseStatements(
  file,
  str,
  sourceStart,
  sourceEnd,
  sourceOffset,
) {
  return tryParse(file, false, str, sourceStart, sourceEnd, sourceOffset);
}

export function parseExpression(
  file,
  str,
  sourceStart,
  sourceEnd,
  sourceOffset,
) {
  return tryParse(file, true, str, sourceStart, sourceEnd, sourceOffset);
}

export function parseParams(file, str, sourceStart, sourceEnd) {
  const parsed = parseExpression(
    file,
    `(${str})=>{}`,
    sourceStart,
    sourceEnd,
    1,
  );

  if (parsed.type === "ArrowFunctionExpression") {
    return parsed.params;
  }

  return [ensureParseError(file, parsed, sourceStart, sourceEnd)];
}

export function parseArgs(file, str, sourceStart, sourceEnd) {
  const parsed = parseExpression(file, `_(${str})`, sourceStart, sourceEnd, 2);

  if (parsed.type === "CallExpression") {
    return parsed.arguments;
  }

  return [ensureParseError(file, parsed, sourceStart, sourceEnd)];
}

export function parseVar(file, str, sourceStart, sourceEnd) {
  const parsed = parseExpression(
    file,
    `(${str})=>{}`,
    sourceStart,
    sourceEnd,
    1,
  );

  if (parsed.type === "ArrowFunctionExpression" && parsed.params.length === 1) {
    return parsed.params[0];
  }

  return ensureParseError(file, parsed, sourceStart, sourceEnd);
}

export function parseTemplateLiteral(file, str, sourceStart, sourceEnd) {
  const parsed = parseExpression(
    file,
    "`" + str + "`",
    sourceStart,
    sourceEnd,
    1,
  );

  if (parsed.type === "TemplateLiteral") {
    return t.templateLiteral(parsed.quasis, parsed.expressions);
  }

  return ensureParseError(file, parsed, sourceStart, sourceEnd);
}

export function parseTypeArgs(file, str, sourceStart, sourceEnd) {
  const parsed = parseExpression(file, `_<${str}>`, sourceStart, sourceEnd, 2);

  if (parsed.type === "TSInstantiationExpression") {
    // typeArguments is Flow only (not TS), we need to use typeParameters
    return parsed.typeParameters;
  }

  return [ensureParseError(file, parsed, sourceStart, sourceEnd)];
}

export function parseTypeParams(file, str, sourceStart, sourceEnd) {
  const parsed = parseExpression(
    file,
    `<${str}>()=>{}`,
    sourceStart,
    sourceEnd,
    1,
  );

  if (parsed.type === "ArrowFunctionExpression") {
    return parsed.typeParameters;
  }

  return [ensureParseError(file, parsed, sourceStart, sourceEnd)];
}

function tryParse(
  file,
  isExpression,
  code,
  sourceStart,
  sourceEnd,
  sourceOffset,
) {
  const { parserOpts } = file.opts;

  if (typeof sourceStart === "number") {
    const startLoc = getLoc(file, sourceStart);
    const startLine = startLoc.line;
    let startIndex = sourceStart;
    let startColumn = startLoc.column;

    if (sourceOffset) {
      startIndex -= sourceOffset;
      startColumn -= sourceOffset;
    }

    parserOpts.startLine = startLine;
    parserOpts.startIndex = startIndex;
    parserOpts.startColumn = startColumn;

    try {
      if (isExpression) {
        return babelParseExpression(code, parserOpts);
      } else {
        const { program } = babelParse(code, parserOpts);
        if (program.innerComments) {
          const lastNode = t.emptyStatement();
          lastNode.trailingComments = program.innerComments;
          program.body.push(lastNode);
        }
        return program.body;
      }
    } catch (err) {
      const parseError = createParseError(
        file,
        sourceStart,
        sourceEnd,
        err.message,
        err.loc,
      );

      if (isExpression) {
        return parseError;
      } else {
        return [parseError];
      }
    } finally {
      parserOpts.startIndex = 0;
      parserOpts.startColumn = 0;
      parserOpts.startLine = 1;
    }
  } else {
    return isExpression
      ? t.cloneDeepWithoutLoc(babelParseExpression(code, parserOpts))
      : babelParse(code, parserOpts).program.body.map((node) =>
          t.cloneDeepWithoutLoc(node),
        );
  }
}

function ensureParseError(file, node, sourceStart, sourceEnd) {
  if (node.type === "MarkoParseError") return node;
  return createParseError(
    file,
    sourceStart,
    sourceEnd,
    `Unexpected node of type ${node.type} returned while parsing.`,
  );
}

function createParseError(file, sourceStart, sourceEnd, label, errorLoc) {
  file.___hasParseErrors = true;
  const loc = getLocRange(file, sourceStart, sourceEnd);
  return {
    type: "MarkoParseError",
    source: file.code.slice(sourceStart, sourceEnd),
    label: label.replace(/ *\(\d+:\d+\)$/, ""),
    errorLoc: errorLoc && getBoundedRange(loc, errorLoc),
    loc,
    start: sourceStart,
    end: sourceEnd,
  };
}

function getBoundedRange(range, loc) {
  if (loc && typeof loc.line === "number") {
    const { start, end } = range;
    // If start is out of bounds return the source.
    if (
      loc.line < start.line ||
      (loc.line === start.line && loc.column < start.column) ||
      loc.line > end.line ||
      (loc.line === end.line && loc.column > end.column)
    ) {
      return range;
    }

    return { start: loc, end: loc };
  }
}
