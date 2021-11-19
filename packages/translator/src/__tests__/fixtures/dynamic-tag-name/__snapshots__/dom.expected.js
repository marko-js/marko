import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { dynamicTag as _dynamicTag, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-name/template.marko", input => {
  _dynamicTag(renderBody, {
    class: ["a", "b"],
    other: other
  });

  _dynamicTag(x, {
    class: ["a", "b"],
    other: other
  });

  const _tagName = show ? "div" : null;

  _dynamicTag(_tagName, {
    class: ["a", "b"],
    other: other
  });

  const _tagName2 = show && "div";

  _dynamicTag(_tagName2, {
    class: ["a", "b"],
    other: other
  });

  _dynamicTag(large ? "h1" : "h2", {
    class: ["a", "b"],
    other: other
  });

  _dynamicTag(showTagA ? tagA : tagB, {
    class: ["a", "b"],
    other: other,
    class: ["a", "b"],
    other: other
  });

  const _tagName3 = showTagA && tagA;

  _dynamicTag(_tagName3, {
    class: ["a", "b"],
    other: other
  });

  const _tagName4 = showTagA && tagA;

  _dynamicTag(_tagName4, {
    class: ["a", "b"],
    other: other
  });

  _dynamicTag(tag || tagA, {
    class: ["a", "b"],
    other: other
  });

  const largeHeading = isLarge && "h1";

  const _tagName5 = largeHeading || "h2";

  _dynamicTag(_tagName5, {
    class: ["a", "b"],
    other: other
  });

  _dynamicTag(global.x = "a" + "b", {
    class: ["a", "b"],
    other: other
  });

  _dynamicTag("h" + level, {
    class: ["a", "b"],
    other: other
  });

  _dynamicTag(`h${level}`, {
    class: ["a", "b"],
    other: other
  });

  const tagConstA = "a";

  _dynamicTag(tagConstA, {
    class: ["a", "b"],
    other: other
  });

  const tagConstB = show ? "div" : null;

  _dynamicTag(tagConstB, {
    class: ["a", "b"],
    other: other
  });
});
export default _createRenderFn(template, walks, ["show", "showTagA", "isLarge", "tag", "level", "other"], hydrate);