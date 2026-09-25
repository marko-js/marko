import path from "path";

import { codeFrameColumns } from "@marko/compiler/internal/babel";
import { cwd } from "@marko/compiler/modules";
// Imported by name: a default import compiles to a `__toESM(mod, 1)` wrapper
// that double-wraps once a bundler resolves kleur through its ESM entry.
import { cyan, yellow } from "kleur/colors";

import { stripAnsi } from "./strip-ansi";
const indent = "    ";
// Wider framed lines (inlined data, generated markup) are windowed around the
// error so the message stays bounded no matter how long the source line is.
const maxFrameColumns = 160;
const linesAbove = 2;
const linesBelow = 3;
const ellipsis = "…";
// The line breaks Babel's code frame splits on, so line numbers still agree.
const newline = /\r\n|[\n\r\u2028\u2029]/;

class CompileError extends Error {
  constructor(filename, code, loc, label) {
    const prettyMessage = buildMessage(code, loc, label);
    const prettyFileName = buildFileName(filename, loc);
    // `message` carries the position and frame since it is all Node output keeps;
    // bundler plugins rebuild their own error shape from `label`, `loc` and `frame`.
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
    Object.defineProperties(this, {
      // The file the error is about, so a parent compile can tell its own.
      filename: {
        value: filename,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      loc: {
        value: loc,
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
      frame: {
        value: prettyMessage,
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

function buildMessage(code, loc, message) {
  if (!loc) return message;

  const { line } = loc.start;
  const lines = code.split(newline);
  const first = Math.max(line - linesAbove - 1, 0);
  let framed = lines.slice(first, line + linesBelow);
  let start = loc.start.column;
  let end = loc.end && loc.end.line === line ? loc.end.column : start;

  if (framed.some((text) => text.length > maxFrameColumns)) {
    const lead = Math.max(
      (maxFrameColumns - (end - start)) >> 1,
      maxFrameColumns >> 3,
    );
    const from = Math.max(
      0,
      Math.min(start - lead, (lines[line - 1] || "").length - maxFrameColumns),
    );
    const to = from + maxFrameColumns;
    const shift = from ? ellipsis.length : 0;
    framed = framed.map(
      (text) =>
        (from && text ? ellipsis : "") +
        text.slice(from, to) +
        (text.length > to ? ellipsis : ""),
    );
    end = Math.max(Math.min(end, to), start) + shift - from;
    start += shift - from;
  }

  return codeFrameColumns(
    framed.join("\n"),
    {
      start: { line, column: start + 1 },
      end: { line, column: end + 1 },
    },
    {
      highlightCode: true,
      message,
      linesAbove,
      linesBelow,
      startLine: first + 1,
    },
  );
}

function buildFileName(filename, loc) {
  return `${cyan(path.relative(cwd, filename))}${
    loc ? `:${yellow(loc.start.line)}:${yellow(loc.start.column + 1)}` : ""
  }`;
}

function noop() {}
