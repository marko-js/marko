import type { types as t, MarkoMeta } from "@marko/compiler";

import type { Loc, LocRange } from "../util/build-code-frame";

const LINE_INDEX_KEY = Symbol();

type IndexedMeta = MarkoMeta & {
  [LINE_INDEX_KEY]?: number[];
};

// A position that is not a number (the `start` of a built node) has no loc.
export function getLoc(file: t.BabelFile, index: number): Loc | undefined {
  if (Number.isFinite(index)) {
    return findLoc(getLineIndexes(file), 0, index);
  }
}

export function getLocRange(
  file: t.BabelFile,
  start: number,
  end: number,
): Required<LocRange> | undefined {
  if (Number.isFinite(start) && Number.isFinite(end)) {
    const lineIndexes = getLineIndexes(file);
    const startLoc = findLoc(lineIndexes, 0, start);
    const endLoc =
      start === end ? startLoc : findLoc(lineIndexes, startLoc.line - 1, end);

    return {
      start: startLoc,
      end: endLoc,
    };
  }
}

export function withLoc<T extends t.Node>(
  file: t.BabelFile,
  node: T,
  start: number,
  end: number,
) {
  const loc = getLocRange(file, start, end);
  if (loc) {
    node.loc = loc as t.SourceLocation;
    node.start = start;
    node.end = end;
  }
  return node;
}

export function getStart(file: t.BabelFile, node: t.Node) {
  // Restore if merged: https://github.com/babel/babel/pull/16849
  // if (node.start != null) {
  //   return node.start;
  // }

  if (node.loc) {
    return locToIndex(file, node.loc.start);
  }

  return null;
}

export function getEnd(file: t.BabelFile, node: t.Node) {
  // Restore if merged: https://github.com/babel/babel/pull/16849
  // if (node.end != null) {
  //   return node.end;
  // }

  if (node.loc) {
    return locToIndex(file, node.loc.end);
  }

  return null;
}

function locToIndex(file: t.BabelFile, loc: Loc) {
  const { line, column } = loc;
  return line === 1 ? column : getLineIndexes(file)[line - 1] + column + 1;
}

function getLineIndexes(file: t.BabelFile) {
  const meta = file.metadata.marko as IndexedMeta;
  let lineIndexes = meta[LINE_INDEX_KEY];

  if (!lineIndexes) {
    lineIndexes = [-1];
    for (let i = 0; i < file.code.length; i++) {
      if (file.code[i] === "\n") {
        lineIndexes.push(i);
      }
    }

    meta[LINE_INDEX_KEY] = lineIndexes;
  }

  return lineIndexes;
}

function findLoc(lineIndexes: number[], startLine: number, index: number): Loc {
  if (index <= 0) {
    return {
      line: 1,
      column: 0,
    };
  }

  const endLine = lineIndexes.length - 1;
  let max = endLine;
  let line = startLine;

  while (line < max) {
    const mid = (line + max) >>> 1;
    if (lineIndexes[mid] < index) {
      line = mid + 1;
    } else {
      max = mid;
    }
  }

  let lineIndex = lineIndexes[line];
  if (lineIndex >= index) {
    lineIndex = lineIndexes[--line];
  }

  if (line === 0) {
    return {
      line: 1,
      column: index,
    };
  }

  return {
    line: line + 1,
    column: index - lineIndex - 1,
  };
}
