import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("src/__tests__/fixtures/dynamic-tag-name/template.marko", input => {
  _dynamicTag(input.renderBody, {
    class: ["a", "b"],
    other: input.other
  });

  _dynamicTag(input.x, {
    class: ["a", "b"],
    other: input.other
  });

  const _tagName = input.show ? "div" : null;

  _dynamicTag(_tagName, {
    class: ["a", "b"],
    other: input.other
  });

  const _tagName2 = input.show && "div";

  _dynamicTag(_tagName2, {
    class: ["a", "b"],
    other: input.other
  });

  _dynamicTag(input.large ? "h1" : "h2", {
    class: ["a", "b"],
    other: input.other
  });

  _dynamicTag(input.showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: input.other,
    class: ["a", "b"],
    other: input.other
  });

  const _tagName3 = input.showTagA && tagA;

  _dynamicTag(_tagName3, {
    class: ["a", "b"],
    other: input.other
  });

  const _tagName4 = input.showTagA && tagA;

  _dynamicTag(_tagName4, {
    class: ["a", "b"],
    other: input.other
  });

  _dynamicTag(input.tag || tagA, {
    class: ["a", "b"],
    other: input.other
  });

  const largeHeading = input.isLarge && "h1";

  const _tagName5 = largeHeading || "h2";

  _dynamicTag(_tagName5, {
    class: ["a", "b"],
    other: input.other
  });

  _dynamicTag(global.x = "a" + "b", {
    class: ["a", "b"],
    other: input.other
  });

  _dynamicTag("h" + input.level, {
    class: ["a", "b"],
    other: input.other
  });

  _dynamicTag(`h${input.level}`, {
    class: ["a", "b"],
    other: input.other
  });

  const tagConstA = "a";

  _dynamicTag(tagConstA, {
    class: ["a", "b"],
    other: input.other
  });

  const tagConstB = input.show ? "div" : null;

  _dynamicTag(tagConstB, {
    class: ["a", "b"],
    other: input.other
  });
});
export default _createRenderFn(template, walks, ["renderBody", "other", "x", "show", "large", "showTagA", "tag", "isLarge", "level"], hydrate);