import path from "path";

import { codeFrameColumns } from "@marko/compiler/internal/babel";
import { cwd } from "@marko/compiler/modules";
// Imported by name: a default import compiles to a `__toESM(mod, 1)` wrapper
// that double-wraps once a bundler resolves kleur through its ESM entry.
import { cyan, yellow } from "kleur/colors";

import { stripAnsi } from "./strip-ansi";
const indent = "    ";

class CompileError extends Error {
  constructor(filename, code, loc, label) {
    if (label !== undefined && label.length > MAX_LABEL_LENGTH) {
      label = label.slice(0, MAX_LABEL_LENGTH) + "…";
    }
    const prettyMessage = buildMessage(code, loc, label);
    const prettyFileName = buildFileName(filename, loc);
    const message = loc
      ? `\n${indent}at ${prettyFileName}\n${prettyMessage.replace(
          /^/gm,
          indent,
        )}`
      : `${prettyMessage}\n${indent}at ${prettyFileName}`;
    const { stackTraceLimit } = Error;
    Error.stackTraceLimit = loc ? 0 : 3;
    super(message);
    Error.captureStackTrace?.(this, buildCodeFrameError);
    this.name = "CompileError";
    Error.stackTraceLimit = stackTraceLimit;
    // Flat position fields so bundlers that read `{ file, line, column }`
    // (rollup/vite) print the location instead of `undefined:undefined`.
    Object.defineProperties(this, {
      file: {
        value: filename,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      line: {
        value: loc?.start.line,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      column: {
        value: loc?.start.column,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      loc: {
        // Flat fields first so bundlers reading `{ file, line, column }`
        // print the position; Babel's `start`/`end` stay for existing readers.
        value: loc && {
          file: filename,
          line: loc.start.line,
          column: loc.start.column,
          start: loc.start,
          end: loc.end,
        },
        enumerable: false,
        writable: true,
        configurable: true,
      },
      label: {
        value: label,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      // Ignore some mutations from Babel.
      code: {
        enumerable: false,
        configurable: true,
        get: noop,
        set: noop,
      },
      message: {
        enumerable: true,
        configurable: true,
        get() {
          return message;
        },
        set() {
          Object.defineProperty(this, "message", {
            value: message,
            enumerable: true,
            writable: true,
            configurable: true,
          });
        },
      },
    });
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return `${this.name}: ${stripAnsi(this.message)}`;
  }
}

export function buildCodeFrameError(filename, code, loc, label) {
  return new CompileError(filename, code, loc, label);
}

// Long single lines (inlined data URIs, generated markup) otherwise produce a
// frame that grows with the source and repeats the line as carets.
const MAX_FRAME_LINE = 200;

function windowCode(code, loc) {
  const lines = code.split("\n");
  const index = loc.start.line - 1;
  const line = lines[index];
  if (line === undefined || line.length <= MAX_FRAME_LINE * 2) {
    return { code, loc };
  }

  const start = Math.max(
    0,
    Math.min(loc.start.column - MAX_FRAME_LINE, line.length - MAX_FRAME_LINE),
  );
  const end = Math.min(line.length, start + MAX_FRAME_LINE * 2);
  lines[index] =
    (start > 0 ? "…" : "") +
    line.slice(start, end) +
    (end < line.length ? "…" : "");

  const windowedLoc = {
    ...loc,
    start: { ...loc.start, column: loc.start.column - start },
  };
  if (windowedLoc.end && windowedLoc.start.line === windowedLoc.end.line) {
    windowedLoc.end = {
      ...windowedLoc.end,
      column: Math.min(windowedLoc.end.column, end) - start,
    };
  }

  return { code: lines.join("\n"), loc: windowedLoc };
}

// A diagnostic can interpolate huge tokens; cap it so errors stay readable.
const MAX_LABEL_LENGTH = 2000;

function buildMessage(code, loc, message) {
  if (!loc) return message;
  ({ code, loc } = windowCode(code, loc));
  return codeFrameColumns(
    code,
    {
      start: {
        line: loc.start.line,
        column: loc.start.column + 1,
      },
      end:
        loc.end && loc.start.line === loc.end.line
          ? {
              line: loc.end.line,
              column: loc.end.column + 1,
            }
          : undefined,
    },
    { highlightCode: true, message },
  );
}

function buildFileName(filename, loc) {
  return `${cyan(path.relative(cwd, filename))}${
    loc ? `:${yellow(loc.start.line)}:${yellow(loc.start.column + 1)}` : ""
  }`;
}

function noop() {}
