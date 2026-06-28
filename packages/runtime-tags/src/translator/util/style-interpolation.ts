import { types as t } from "@marko/compiler";

export const htmlStyleTagAlternateMsg =
  " For a native html [`<style>` tag](https://markojs.com/docs/reference/core-tag#style) use the `html-style` core tag instead.";

export function checkStyleInterpolations(tag: t.NodePath<t.MarkoTag>) {
  const { body } = tag.node.body;
  let stringQuote = "";
  let inComment = false;
  let groupDepth = 0;
  let blockDepth = 0;
  let valueColon = false;
  let runPlaceholder: t.MarkoPlaceholder | undefined;
  let runAfterColon = false;
  let runDecl = false;

  const endRun = (selector: boolean) => {
    if (runPlaceholder && !runAfterColon && (selector || runDecl)) {
      throw tag.hub.buildError(
        runPlaceholder,
        selector ? styleSelectorMsg : stylePropertyMsg,
      );
    }
    valueColon = false;
    runPlaceholder = undefined;
  };

  for (let i = 0; i < body.length; i++) {
    const child = body[i];

    if (t.isMarkoPlaceholder(child)) {
      if (stringQuote) {
        throw tag.hub.buildError(child, styleStringMsg);
      }
      if (!runPlaceholder) {
        runPlaceholder = child;
        runAfterColon = valueColon;
        runDecl = blockDepth > 0;
      }
      const prev = body[i - 1];
      if (t.isMarkoText(prev) && cssGluedBefore.test(prev.value)) {
        throw tag.hub.buildError(child, styleGluedBeforeMsg);
      }
      const next = body[i + 1];
      if (t.isMarkoText(next) && cssGluedValue.test(next.value)) {
        throw tag.hub.buildError(child, styleGluedMsg);
      }
      continue;
    }

    const text = (child as t.MarkoText).value;
    for (let j = 0; j < text.length; j++) {
      const c = text[j];
      if (inComment) {
        if (c === "*" && text[j + 1] === "/") {
          inComment = false;
          j++;
        }
      } else if (stringQuote) {
        if (c === "\\") {
          j++;
        } else if (c === stringQuote) {
          stringQuote = "";
        }
      } else if (c === "\\") {
        j++;
      } else if (c === "/" && text[j + 1] === "*") {
        inComment = true;
        j++;
      } else if (c === '"' || c === "'") {
        stringQuote = c;
      } else if (c === "(" || c === "[") {
        groupDepth++;
      } else if (c === ")" || c === "]") {
        if (groupDepth) groupDepth--;
      } else if (!groupDepth) {
        switch (c) {
          case ":":
            if (blockDepth) valueColon = true;
            break;
          case "{":
            endRun(true);
            blockDepth++;
            break;
          case ";":
            endRun(!blockDepth);
            break;
          case "}":
            endRun(false);
            if (blockDepth) blockDepth--;
            break;
        }
      }
    }
  }

  endRun(!blockDepth);
}

const styleInterpolationMsg =
  "A `${...}` interpolation in a [`<style>` tag](https://markojs.com/docs/reference/core-tag#style) is substituted as a `var(--…)` custom property reference, which";
const styleSelectorMsg =
  `${styleInterpolationMsg} only resolves in a declaration value, not in a selector or at-rule prelude.` +
  htmlStyleTagAlternateMsg;
const stylePropertyMsg =
  `${styleInterpolationMsg} cannot be used as a property name.` +
  htmlStyleTagAlternateMsg;
const styleStringMsg =
  `${styleInterpolationMsg} is not substituted inside a quoted CSS string — the literal text \`var(--…)\` would be rendered instead of the value.` +
  htmlStyleTagAlternateMsg;
const styleGluedMsg = `${styleInterpolationMsg} CSS does not re-tokenize, so a unit written directly after it (eg \`\${x}px\`) becomes the invalid \`var(--…)px\`. Move the unit into the interpolated value (so it resolves to eg \`"10px"\`) or use \`calc(var(--…) * 1px)\`.`;
const styleGluedBeforeMsg = `${styleInterpolationMsg} CSS does not re-tokenize, so text written directly before it (eg \`10\${x}\`) merges with the \`var(--…)\` into a single invalid token. Add whitespace before the interpolation or move the text into the interpolated value.`;
const cssGluedValue =
  /^(?:[%.\d]|(?:p[xtc]|in|[cm]m|q|r?em|ex|ch|r?lh|v[whib]|vmin|vmax|fr|deg|g?rad|turn|m?s|k?hz|dp(?:i|cm|px)|cq[whib]|cqmin|cqmax)(?![\w-]))/i;
const cssGluedBefore = /[\w%]$/;
