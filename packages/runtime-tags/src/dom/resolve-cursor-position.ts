const R = /[^\p{L}\p{N}]/gu;

export function resolveCursorPosition(
  inputType: string,
  initialPosition: number | null | false,
  initialValue: string,
  updatedValue: string,
) {
  if (
    // If initial position is null or false then
    // either this node is not the active element
    // or does not support selection ranges.
    (initialPosition || initialPosition === 0) &&
    (initialPosition !== initialValue.length ||
      // short regex to match input types that delete backwards
      /kw/.test(inputType))
  ) {
    const before = initialValue.slice(0, initialPosition);
    const after = initialValue.slice(initialPosition);
    if (updatedValue.startsWith(before)) return initialPosition;
    if (updatedValue.endsWith(after)) return updatedValue.length - after.length;
    let count = before.replace(R, "").length;
    let pos = 0;
    while (count && updatedValue[pos]) {
      if (updatedValue[pos++].replace(R, "")) count--;
    }
    return pos;
  }
  return -1;
}
