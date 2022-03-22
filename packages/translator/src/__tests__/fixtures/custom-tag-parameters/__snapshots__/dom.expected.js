import { data as _data, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _customTag, template as _customTag_template, walks as _customTag_walks } from "./components/custom-tag.marko";

function _apply_c(_scope, c) {
  if (_write(_scope, 5, c)) _data(_scope, 2, c);
}

function _apply_b(_scope, b) {
  if (_write(_scope, 4, b)) _data(_scope, 1, b);
}

function _apply_a(_scope, a) {
  if (_write(_scope, 3, a)) _data(_scope, 0, a);
}

function _apply(_scope) {
  _customTag(_scope[0]);
}

const _temp = _createRenderer("<div><!> <!> <!></div>",
/* next(1), replace, over(2), replace, over(2), replace */
"D%c%c%", null);

export const template = `${_customTag_template}`;
export const walks =
/* beginChild(0), _customTag_walks, endChild */
`/${_customTag_walks}&`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);