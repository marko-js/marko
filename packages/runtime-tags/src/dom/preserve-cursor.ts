let preserving = false;

type InputType =
  | "deleteContentBackward"
  | "deleteContentForward"
  | "insertText"
  | string;

export const preserveCursorPosition = (
  el: Element,
  update: () => void,
  event?: InputEvent,
) => {
  if (!preserving && document.activeElement === el) {
    const initialValue = (el as HTMLInputElement).value;
    const initialPosition = (el as HTMLInputElement).selectionStart!;
    preserving = true;
    update();
    preserving = false;
    const updatedValue = (el as HTMLInputElement).value;
    const updatedPosition = resolveCursorPosition(
      updatedValue,
      initialValue,
      initialPosition,
      event?.inputType as InputType,
    );
    if (updatedPosition !== undefined) {
      (el as HTMLInputElement).setSelectionRange(
        updatedPosition,
        updatedPosition,
      );
    }
  } else {
    update();
  }
};

export const resolveCursorPosition = (
  updatedValue: string,
  initialValue: string,
  initialPosition: number,
  inputType: InputType = "",
) => {
  if (
    // TODO should we just do `/B/.test(inputType)
    /delete.*Backwards/.test(inputType) ||
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
};

const stripSpacesAndPunctuation = (str: string) => {
  return str.replace(/[^\p{L}\p{N}]/gu, "");
};
