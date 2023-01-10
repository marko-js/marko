import { data as _data, source as _source, createRenderer as _createRenderer, setSource as _setSource, loop as _loop, bind as _bind, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _child$forBody = /* @__PURE__ */_source(1, [], (_scope, child) => _data(_scope[0], child.text));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ");
const _temp3 = function (_scope, c) {
  return c.id;
};
const _for = /* @__PURE__ */_loop(0, 1, _forBody, [_child$forBody], (_scope, [child]) => _setSource(_scope, _child$forBody, child), (_scope, children = _scope[7]) => [children, /* @__PURE__ */_bind(_scope, _temp3)]);
const _children = /* @__PURE__ */_source(7, [_for]);
export const attrs = /* @__PURE__ */_destructureSources([_children], (_scope, {
  children
}) => {
  _setSource(_scope, _children, children);
});
export { _children as _apply_children };
export const template = "<div></div>";
export const walks = /* get, skip(6), over(1) */" .b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);