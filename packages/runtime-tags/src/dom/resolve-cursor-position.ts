export function resolveCursorPosition(
  updatedValue: string,
  initialValue: string,
  initialPosition: number,
  inputType: string,
) {
  if (
    initialPosition !== initialValue.length ||
    // short regex to match input types that delete backwards
    /kw/.test(inputType)
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
