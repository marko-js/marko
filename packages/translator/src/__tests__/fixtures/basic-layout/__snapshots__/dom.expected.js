import { data as _data, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _layout, applyAttrs as _layout_attrs, template as _layout_template, walks as _layout_walks } from "./components/layout.marko";

function _apply$layoutBody_name(_scope, name = _scope._[1]) {
  _data(_scope[0], name);
}

function _apply_name(_scope, name) {
  if (_write(_scope, 1, name)) {}
}

function _apply(_scope) {
  _layout(_scope[0]);
}

export const applyAttrs = function (_scope, {
  name
}) {
  _apply_name(_scope, name);
};
export { _apply_name };
export const template = `${_layout_template}`;
export const walks =
/* beginChild(0), _layout_walks, endChild */
`/${_layout_walks}&`;
export const apply = _apply;

const _layoutBody = _createRenderer("<h1>Hello <!></h1>",
/* next(1), over(1), replace */
"Db%", null);

export default _createRenderFn(template, walks, apply, applyAttrs);