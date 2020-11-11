const LINE_POS_KEY = Symbol();

export function getLoc(file, pos) {
  return findLoc(getLinePositions(file), 0, pos);
}

export function getLocRange(file, start, end) {
  const linePositions = getLinePositions(file);
  const startLoc = findLoc(linePositions, 0, start);

  if (startLoc) {
    const endLoc =
      start === end ? startLoc : findLoc(linePositions, startLoc.line - 1, end);

    return {
      start: startLoc,
      end: endLoc
    };
  }
}

export function withLoc(file, node, start, end) {
  node.loc = getLocRange(file, start, end);
  node.start = start;
  node.end = end;
  return node;
}

function getLinePositions(file) {
  let linePositions = file.metadata.marko[LINE_POS_KEY];

  if (!linePositions) {
    linePositions = [0];
    for (let i = 0; i < file.code.length; i++) {
      if (file.code[i] === "\n") {
        linePositions.push(i);
      }
    }

    file.metadata.marko[LINE_POS_KEY] = linePositions;
  }

  return linePositions;
}

function findLoc(linePositions, startLine, pos) {
  const endLine = linePositions.length - 1;
  let max = endLine;
  let line = startLine;

  while (line < max) {
    const mid = (line + max) >>> 1;
    if (linePositions[mid] < pos) {
      line = mid + 1;
    } else {
      max = mid;
    }
  }

  let linePos = linePositions[line];
  if (linePos > pos) {
    linePos = linePositions[--line];
  }

  return {
    line: line + 1,
    column: pos === linePos ? 0 : pos - linePos - (line === 0 ? 0 : 1)
  };
}
