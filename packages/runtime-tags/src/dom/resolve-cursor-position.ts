export function resolveCursorPosition(
  updatedValue: string,
  initialValue: string,
  initialPosition: number,
  inputType?: string,
) {
  if (
    // short regex to match input types that delete backwards
    (inputType && /kw/.test(inputType)) ||
    initialPosition !== initialValue.length
  ) {
    const before = initialValue.slice(0, initialPosition);
    const after = initialValue.slice(initialPosition);
    if (updatedValue.startsWith(before)) {
      return initialPosition;
    } else if (updatedValue.endsWith(after)) {
      return updatedValue.length - after.length;
    } else {
      const relevantChars = stripSpacesAndPunctuation(before);
      let pos = 0;
      let relevantIndex = 0;
      while (relevantIndex < relevantChars.length) {
        if (stripSpacesAndPunctuation(updatedValue[pos])) relevantIndex++;
        pos++;
      }
      return pos;
    }
  }
}

function stripSpacesAndPunctuation(str: string) {
  return str.replace(/[^\p{L}\p{N}]/gu, "");
}
