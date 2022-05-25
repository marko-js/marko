let _item;

import { data as _data, write as _write, setConditionalRenderer as _setConditionalRenderer, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";

function _apply$itemBody(_scope) {
  _data(_scope[0], y);
}

function _apply$helloBody_x(_scope, x = _scope._[1]) {
  _setConditionalRenderer(_scope, 0, x ? _ifBody : null);
}

function _apply_x(_scope, x) {
  if (_write(_scope, 1, x)) {}
}

function _apply(_scope) {
  _hello(_scope[0]);
}

export const applyAttrs = function (_scope, {
  x
}) {
  _apply_x(_scope, x);
};
export { _apply_x };
export const template = `${_hello_template}`;
export const walks =
/* beginChild(0), _hello_walks, endChild */
`/${_hello_walks}&`;
export const apply = _apply;

const _helloBody = _createRenderer("<!>",
/* replace, skip(3) */
"%+", null),
      _ifBody = _createRenderer("", "", null),
      _itemBody = _createRenderer("",
/* get */
" ", _apply$itemBody);

export default _createRenderFn(template, walks, apply, applyAttrs);