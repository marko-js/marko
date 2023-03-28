import { data as _data, value as _value, createRenderer as _createRenderer, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _child$forBody = /* @__PURE__ */_value("child", (_scope, child) => _data(_scope["#text/0"], child.text));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ");
const _for = /* @__PURE__ */_loop("#text/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let child;
  if (_dirty) [child] = _destructure;
  _child$forBody(_scope, child, _dirty);
});
const _input = /* @__PURE__ */_value("input", (_scope, input) => _for(_scope, [input.children, function (c) {
  return c.id;
}]));
export const attrs = _input;
export { _input as _apply_input };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/move-and-clear-top-level/template.marko");