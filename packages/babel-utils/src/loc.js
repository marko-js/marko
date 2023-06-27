const LINE_INDEX_KEY = Symbol();

export function getLoc(file, index) {
  return findLoc(getLineIndexes(file), 0, index);
}

export function getLocRange(file, start, end) {
  const lineIndexes = getLineIndexes(file);
  const startLoc = findLoc(lineIndexes, 0, start);

  if (startLoc) {
    const endLoc =
      start === end ? startLoc : findLoc(lineIndexes, startLoc.line - 1, end);

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

function getLineIndexes(file) {
  let lineIndexes = file.metadata.marko[LINE_INDEX_KEY];

  if (!lineIndexes) {
    lineIndexes = [0];
    for (let i = 0; i < file.code.length; i++) {
      if (file.code[i] === "\n") {
        lineIndexes.push(i);
      }
    }

    file.metadata.marko[LINE_INDEX_KEY] = lineIndexes;
  }

  return lineIndexes;
}

function findLoc(lineIndexes, startLine, index) {
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
  if (lineIndex > index) {
    lineIndex = lineIndexes[--line];
  }

  return {
    index,
    line: line + 1,
    column: index === lineIndex ? 0 : index - lineIndex - (line === 0 ? 0 : 1)
  };
}
