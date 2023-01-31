import { data as _data, source as _source, createRenderer as _createRenderer, setSource as _setSource, loop as _loop, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _child$forBody = /* @__PURE__ */_source("child", [], (_scope, child) => _data(_scope["#text/0"], child.text));
const _forBody = /* @__PURE__ */_createRenderer(" ", /* get */" ");
const _for = /* @__PURE__ */_loop("#div/0", 1, _forBody, [_child$forBody], (_scope, [child]) => _setSource(_scope, _child$forBody, child), (_scope, children = _scope["children"]) => [children, function (c) {
  return c.id;
}]);
const _children = /* @__PURE__ */_source("children", [_for]);
export const attrs = /* @__PURE__ */_destructureSources([_children], (_scope, {
  children
}) => {
  _setSource(_scope, _children, children);
});
export { _children as _apply_children };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/move-and-clear-children/template.marko");