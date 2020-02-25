const NEW_LINE = /\r?\n/g;

export function getLoc(code, pos) {
  const src = code.slice(0, pos);
  let lastIndex = 0;
  let line = 1;

  while (NEW_LINE.exec(src)) {
    line++;
    lastIndex = NEW_LINE.lastIndex;
  }

  return {
    line,
    column: pos - lastIndex + 1
  };
}

export function getLocRange(code, start, end) {
  return {
    start,
    end,
    loc: {
      start: getLoc(code, start),
      end: getLoc(code, end)
    }
  };
}
