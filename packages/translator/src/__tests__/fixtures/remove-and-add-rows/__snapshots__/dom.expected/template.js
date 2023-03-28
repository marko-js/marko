import { data as _data, value as _value, createRenderer as _createRenderer, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _child$forBody = /* @__PURE__ */_value("child", (_scope, child) => _data(_scope["#text/0"], child.text));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ");
const _for = /* @__PURE__ */_loop("#div/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let child;
  if (_dirty) [child] = _destructure;
  _child$forBody(_scope, child, _dirty);
});
const _children = /* @__PURE__ */_value("children", (_scope, children) => _for(_scope, [children, function (c) {
  return c.id;
}]));
export const attrs = (_scope, _destructure2, _dirty = true) => {
  let children;
  if (_dirty) ({
    children
  } = _destructure2);
  _children(_scope, children, _dirty);
};
export { _children as _apply_children };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/remove-and-add-rows/template.marko");