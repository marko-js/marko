var _return;

return _return;
import { createRenderer as _createRenderer, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _elseBody = _createRenderer("", "");

const _ifBody = _createRenderer("", "");

const _if = _conditional(0, 1, (_scope, show = _scope[6]) => show ? _ifBody : _elseBody);

const _show = _source(6, [_if]);

export const attrs = _destructureSources([_show], (_scope, {
  show
}) => {
  _setSource(_scope, _show, show);
});
export { _show as _apply_show };
export const template = "<!>";
export const walks =
/* replace, skip(5), over(1) */
"%-b";
export const setup = function () {};
export default _createRenderFn(template, walks, setup, attrs);