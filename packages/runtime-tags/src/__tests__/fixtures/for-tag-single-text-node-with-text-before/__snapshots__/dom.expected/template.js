export const _template = "<div>Before <!></div>";
export const _walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _for_content = /* @__PURE__ */_$.createRenderer("Child");
const _for = /* @__PURE__ */_$.loopOf("#text/1", _for_content);
const _children_length = /* @__PURE__ */_$.value("children_length", (_scope, children_length) => _$.attr(_scope["#div/0"], "data-children", children_length));
const _children_effect = _$.effect("__tests__/template.marko_0_children", (_scope, {
  children
}) => {
  if (children.length === 1) {
    _children(_scope, [...children, 2]);
  }
});
const _children = /* @__PURE__ */_$.state("children/2", (_scope, children) => {
  _children_length(_scope, children?.length);
  _for(_scope, [children]);
  _children_effect(_scope);
});
export function _setup(_scope) {
  _children(_scope, [1]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);