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
    if (updatedValue.startsWith(before)) {
      return initialPosition;
    } else if (updatedValue.endsWith(after)) {
      return updatedValue.length - after.length;
    } else {
      const relevantChars = stripSpacesAndPunctuation(before).length;
      let pos = 0;
      let relevantIndex = 0;
      while (relevantIndex < relevantChars) {
        if (stripSpacesAndPunctuation(updatedValue[pos])) relevantIndex++;
        pos++;
      }
      return pos;
    }
  }
  return -1;
}

function stripSpacesAndPunctuation(str: string) {
  return str.replace(/[^\p{L}\p{N}]/gu, "");
}
