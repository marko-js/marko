var _return;

const _else = _createRenderer("", "", null),
      _if = _createRenderer("", "", null);

return _return;
import { createRenderer as _createRenderer, setConditionalRenderer as _setConditionalRenderer, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_show(show) {
  if (_write(1, show)) _setConditionalRenderer(0, 5, show ? _if : _else);
}

export const template = "<!>";
export const walks = "%";
export const apply = _apply_show;
export default _createRenderFn(template, walks, apply);