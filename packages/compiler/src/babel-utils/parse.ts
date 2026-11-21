import { types as t } from "@marko/compiler";
import {
  parse as babelParse,
  parseExpression as babelParseExpression,
} from "@marko/compiler/internal/babel";

import type { Loc, LocRange } from "../util/build-code-frame";
import type { CompileFile } from "../util/compile-file";
import { getLoc, getLocRange, withLoc } from "./loc";

type Pos = number | null | undefined;

// Each parser returns a parse error in place of the node it fails to parse,
// typed as that node.

export function parseStatements(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
  sourceOffset?: Pos,
) {
  return tryParse(file, false, str, sourceStart, sourceEnd, sourceOffset).body;
}

// Also keeps what Babel parses beside the statements: their directives, and
// the comments of code that has no statements to attach them to.
export function parseBlock(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
) {
  const { body, directives, innerComments } = tryParse(
    file,
    false,
    str,
    sourceStart,
    sourceEnd,
  );
  const block = t.blockStatement(body, directives);
  block.innerComments = innerComments;
  return withLoc(file, block, sourceStart!, sourceEnd!);
}

export function parseExpression(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
  sourceOffset?: Pos,
) {
  return tryParse(file, true, str, sourceStart, sourceEnd, sourceOffset);
}

export function parseParams(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
): t.Function["params"] {
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

  return [
    ensureParseError(
      file,
      str,
      parsed,
      sourceStart,
      sourceEnd,
    ) as unknown as t.FunctionParameter,
  ];
}

export function parseArgs(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
): t.CallExpression["arguments"] {
  const parsed = parseExpression(file, `_(${str})`, sourceStart, sourceEnd, 2);

  if (parsed.type === "CallExpression") {
    return parsed.arguments;
  }

  return [ensureParseError(file, str, parsed, sourceStart, sourceEnd)];
}

export function parseVar(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
): t.VariableDeclarator["id"] {
  // htmljs-parser folds a trailing line comment into the var, so the wrapper
  // closes on the next line rather than inside that comment.
  const parsed = parseExpression(
    file,
    `(${str}\n)=>{}`,
    sourceStart,
    sourceEnd,
    1,
  );

  if (parsed.type === "ArrowFunctionExpression" && parsed.params.length === 1) {
    return parsed.params[0] as t.VariableDeclarator["id"];
  }

  const parseError = ensureParseError(
    file,
    str,
    parsed,
    sourceStart,
    sourceEnd,
  );
  // Babel reports the borrowed parameter-list grammar ("invalid left-hand
  // side in function parameter list"), naming syntax the author never wrote.
  if (/function parameter list/.test(parseError.label)) {
    parseError.label = `\`${str}\` is not a valid [tag variable](https://markojs.com/docs/reference/language#tag-variables); use a JavaScript identifier or destructuring pattern.`;
  }

  return parseError as unknown as t.VariableDeclarator["id"];
}

export function parseTemplateLiteral(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
): t.TemplateLiteral {
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

  return ensureParseError(
    file,
    str,
    parsed,
    sourceStart,
    sourceEnd,
  ) as unknown as t.TemplateLiteral;
}

export function parseTypeArgs(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
): t.TSTypeParameterInstantiation | [t.MarkoParseError] {
  const parsed = parseExpression(file, `_<${str}>`, sourceStart, sourceEnd, 2);

  if (parsed.type === "TSInstantiationExpression") {
    // typeArguments is Flow only (not TS), we need to use typeParameters
    return parsed.typeParameters!;
  }

  return [ensureParseError(file, str, parsed, sourceStart, sourceEnd)];
}

export function parseTypeParams(
  file: t.BabelFile,
  str: string,
  sourceStart?: Pos,
  sourceEnd?: Pos,
): t.TSTypeParameterDeclaration | [t.MarkoParseError] {
  const parsed = parseExpression(
    file,
    `<${str}>()=>{}`,
    sourceStart,
    sourceEnd,
    1,
  );

  if (parsed.type === "ArrowFunctionExpression") {
    return parsed.typeParameters as t.TSTypeParameterDeclaration;
  }

  return [ensureParseError(file, str, parsed, sourceStart, sourceEnd)];
}

function tryParse(
  file: t.BabelFile,
  isExpression: true,
  code: string,
  sourceStart: Pos,
  sourceEnd: Pos,
  sourceOffset?: Pos,
): t.Expression | t.MarkoParseError;
function tryParse(
  file: t.BabelFile,
  isExpression: false,
  code: string,
  sourceStart: Pos,
  sourceEnd: Pos,
  sourceOffset?: Pos,
): t.Program;
function tryParse(
  file: t.BabelFile,
  isExpression: boolean,
  code: string,
  sourceStart: Pos,
  sourceEnd: Pos,
  sourceOffset?: Pos,
): t.Expression | t.MarkoParseError | t.Program {
  const { parserOpts } = (file as CompileFile).opts;
  const startLoc = getLoc(file, sourceStart!);

  if (startLoc) {
    const startLine = startLoc.line;
    let startIndex = sourceStart!;
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
        return babelParseExpression(code, parserOpts) as t.Expression;
      } else {
        return babelParse(code, parserOpts).program as t.Program;
      }
    } catch (err) {
      const parseError = createParseError(
        file,
        code,
        sourceStart,
        sourceEnd,
        getParseErrorLabel(err as ParseFailure, code, startIndex),
        (err as ParseFailure).loc,
      );

      if (isExpression) {
        return parseError;
      } else {
        return t.program([parseError]);
      }
    } finally {
      parserOpts.startIndex = 0;
      parserOpts.startColumn = 0;
      parserOpts.startLine = 1;
    }
  } else {
    return isExpression
      ? t.cloneDeepWithoutLoc(
          babelParseExpression(code, parserOpts) as t.Expression,
        )
      : t.cloneDeepWithoutLoc(
          babelParse(code, parserOpts).program as t.Program,
        );
  }
}

interface ParseFailure {
  message: string;
  reasonCode?: string;
  pos: number;
  loc?: Loc;
}

// Babel words these two in terms of its own `parseExpression()` API.
function getParseErrorLabel(
  err: ParseFailure,
  code: string,
  startIndex: number,
) {
  switch (err.reasonCode) {
    case "ParseExpressionEmptyInput":
      return "Expected an expression, but found only whitespace or comments.";
    case "ParseExpressionExpectsEOF":
      return `Expected a single expression, but found \`${String.fromCodePoint(
        code.codePointAt(err.pos - startIndex)!,
      )}\` after it.`;
    default:
      return err.message;
  }
}

function ensureParseError(
  file: t.BabelFile,
  str: string,
  node: t.Node,
  sourceStart: Pos,
  sourceEnd: Pos,
) {
  if (node.type === "MarkoParseError") return node;
  return createParseError(
    file,
    str,
    sourceStart,
    sourceEnd,
    `Unexpected node of type ${node.type} returned while parsing.`,
  );
}

// Without a source range the error has no loc, and its source is what was parsed.
function createParseError(
  file: t.BabelFile,
  str: string,
  sourceStart: Pos,
  sourceEnd: Pos,
  label: string,
  errorLoc?: Loc,
): t.MarkoParseError {
  (file as CompileFile).___hasParseErrors = true;
  const loc = getLocRange(file, sourceStart!, sourceEnd!);
  return {
    type: "MarkoParseError",
    source: loc ? file.code.slice(sourceStart!, sourceEnd!) : str,
    label: label.replace(/ *\(\d+:\d+\)$/, ""),
    errorLoc: (loc && errorLoc && getBoundedRange(loc, errorLoc)) as
      | object
      | null,
    loc: loc as t.SourceLocation | undefined,
    start: sourceStart,
    end: sourceEnd,
  };
}

function getBoundedRange(
  range: Required<LocRange>,
  loc: Loc,
): Required<LocRange> | undefined {
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
