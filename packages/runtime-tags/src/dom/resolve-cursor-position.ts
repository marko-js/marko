const R = /[\p{L}\p{N}]/gu;

export function resolveCursorPosition(
  inputType: string,
  initialPosition: number | null | false,
  initialValue: string,
  updatedValue: string,
) {
  if (
    // Null or false initial position means this node is not the active
    // element or does not support selection ranges.
    (initialPosition || initialPosition === 0) &&
    (initialPosition !== initialValue.length ||
      // short regex to match input types that delete backwards
      /kw/.test(inputType))
  ) {
    const before = initialValue.slice(0, initialPosition);
    const after = initialValue.slice(initialPosition);
    if (updatedValue.startsWith(before)) return initialPosition;
    if (updatedValue.endsWith(after)) return updatedValue.length - after.length;
    // Whole-code-point matches keep astral letters one unit on both sides;
    // `match` resets `lastIndex`, and each `test` advances it to the walk pos.
    let count = before.match(R)?.length;
    while (count && R.test(updatedValue)) count--;
    return count ? updatedValue.length : R.lastIndex;
  }
  return -1;
}
