import { write as _write, getInContext as _getInContext, data as _data, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { apply as _other, template as _other_template, walks as _other_walks } from "./components/other.marko";

function _apply_message(_scope, message) {
  if (_write(_scope, 1, message)) _data(_scope[0], message);
}

function _apply(_scope) {
  _other(_scope[0]);
}

const _temp = _createRenderer(" </span>",
/* next(1), get */
"D ", null);

export const template = `${_other_template}`;
export const walks =
/* beginChild(0), _other_walks, endChild */
`/${_other_walks}&`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);