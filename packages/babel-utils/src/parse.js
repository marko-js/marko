import * as babelParser from "@babel/parser";
import { getLocRange } from "./loc";
import { types as t } from "@marko/compiler";

const CODE_AS_WHITE_SPACE_KEY = Symbol();

export function parseStatements(
  file,
  str,
  sourceStart,
  sourceEnd,
  sourceOffset
) {
  return tryParse(file, false, str, sourceStart, sourceEnd, sourceOffset);
}

export function parseExpression(
  file,
  str,
  sourceStart,
  sourceEnd,
  sourceOffset
) {
  return tryParse(file, true, str, sourceStart, sourceEnd, sourceOffset);
}

export function parseParams(file, str, sourceStart, sourceEnd) {
  const parsed = parseExpression(
    file,
    `(${str})=>{}`,
    sourceStart,
    sourceEnd,
    1
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
    1
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
    1
  );

  if (parsed.type === "TemplateLiteral") {
    return parsed;
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
    1
  );

  if (parsed.type === "ArrowFunctionExpression") {
    return parsed.typeParameters;
  }

  return [ensureParseError(file, parsed, sourceStart, sourceEnd)];
}

function tryParse(
  file,
  isExpression,
  str,
  sourceStart,
  sourceEnd,
  sourceOffset
) {
  const { parserOpts } = file.opts;
  let code = str;

  if (typeof sourceStart === "number") {
    const whitespace =
      file.metadata.marko[CODE_AS_WHITE_SPACE_KEY] ||
      (file.metadata.marko[CODE_AS_WHITE_SPACE_KEY] = file.code.replace(
        /[^\s]/g,
        " "
      ));
    code =
      whitespace.slice(
        0,
        sourceOffset ? sourceStart - sourceOffset : sourceStart
      ) + str;

    try {
      return isExpression
        ? babelParser.parseExpression(code, parserOpts)
        : babelParser.parse(code, parserOpts).program.body;
    } catch (err) {
      const parseError = createParseError(
        file,
        sourceStart,
        sourceEnd,
        err.message,
        err.loc
      );

      if (isExpression) {
        return parseError;
      } else {
        return [parseError];
      }
    }
  } else {
    return isExpression
      ? t.cloneDeepWithoutLoc(babelParser.parseExpression(code, parserOpts))
      : babelParser
          .parse(code, parserOpts)
          .program.body.map((node) => t.cloneDeepWithoutLoc(node));
  }
}

function ensureParseError(file, node, sourceStart, sourceEnd) {
  if (node.type === "MarkoParseError") return node;
  return createParseError(
    file,
    sourceStart,
    sourceEnd,
    `Unexpected node of type ${node.type} returned while parsing.`
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

function getBoundedRange(sourceRange, start) {
  if (start && typeof start.index === "number") {
    if (
      start.index < sourceRange.start.index ||
      start.index >= sourceRange.end.index
    ) {
      return sourceRange;
    }

    return { start, end: start };
  }
}
