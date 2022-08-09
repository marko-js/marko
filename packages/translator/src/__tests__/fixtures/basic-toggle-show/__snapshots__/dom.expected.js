import { setSource as _setSource, queueSource as _queueSource, on as _on, createRenderer as _createRenderer, conditional as _conditional, source as _source, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _ifBody = _createRenderer("Hello!", "");

const _if = _conditional(0, 1, (_scope, show = _scope[7]) => show ? _ifBody : null);

const _onclick = function (_scope) {
  const show = _scope[7];

  _queueSource(_scope, _show, !show);
};

const _hydrate_show = _register("packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko_0_show", _scope => {
  const show = _scope[7];

  _on(_scope[6], "click", _bind(_scope, _onclick));
});

const _show = _source(7, [_if], (_scope, show) => _queueHydrate(_scope, _hydrate_show));

const _setup = _scope => {
  _setSource(_scope, _show, true);
};

export const template = "<div><!><button>Toggle</button></div>";
export const walks =
/* next(1), replace, skip(5), over(1), get, out(1) */
"D%-b l";
export const setup = _setup;
export default _createRenderFn(template, walks, setup);