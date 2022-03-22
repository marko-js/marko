import { classAttr as _classAttr, attr as _attr, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply(_scope) {
  _classAttr(_scope, 0, input.className);

  _attr(_scope, 0, "foo", 'a' + input.foo + 'b');

  _attr(_scope, 0, "bar", `a ${input.foo} b`);
}

export const template = "<div></div>";
export const walks =
/* get, over(1) */
" b";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);