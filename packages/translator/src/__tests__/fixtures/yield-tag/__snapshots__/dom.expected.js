var _return;

return _return;
import { createRenderer as _createRenderer, conditional as _conditional, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _elseBody = /* @__PURE__ */_createRenderer("", "");

const _ifBody = /* @__PURE__ */_createRenderer("", "");

const _if = /* @__PURE__ */_conditional(0, 1, (_scope, show = _scope[6]) => show ? _ifBody : _elseBody);

const _show = /* @__PURE__ */_source(6, [_if]);

export const attrs = /* @__PURE__ */_destructureSources([_show], (_scope, {
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
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);