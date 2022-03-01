import { classAttr as _classAttr, attr as _attr, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply() {
  _classAttr(0, input.className);

  _attr(0, "foo", 'a' + input.foo + 'b');

  _attr(0, "bar", `a ${input.foo} b`);
}

export const template = "<div></div>";
export const walks = " b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);