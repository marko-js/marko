var _return;

return _return;
import { setConditionalRenderer as _setConditionalRenderer, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_show(_scope, show) {
  if (_write(_scope, 4, show)) _setConditionalRenderer(_scope, 0, show ? _if2 : _if);
}

const _if2 = _createRenderer("", "", null),
      _if = _createRenderer("", "", null);

export const applyAttrs = function (_scope, {
  show
}) {
  _apply_show(_scope, show);
};
export { _apply_show };
export const template = "<!>";
export const walks =
/* replace, skip(3), over(1) */
"%+b";
export const apply = function () {};
export default _createRenderFn(template, walks, apply, applyAttrs);