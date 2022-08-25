import { on as _on, data as _data, source as _source, register as _register, queueHydrate as _queueHydrate, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _text = /* @__PURE__ */_source(3, [], (_scope, text) => _data(_scope[1], text));

const _hydrate_onclick = _register("packages/translator/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onclick", _scope => {
  const onclick = _scope[2];

  _on(_scope[0], "click", onclick);
});

const _onclick = /* @__PURE__ */_source(2, [], (_scope, onclick) => _queueHydrate(_scope, _hydrate_onclick));

export const attrs = /* @__PURE__ */_destructureSources([_onclick, _text], (_scope, {
  onclick,
  text
}) => {
  _setSource(_scope, _onclick, onclick);

  _setSource(_scope, _text, text);
});
export { _onclick as _apply_onclick, _text as _apply_text };
export const template = "<button> </button>";
export const walks =
/* get, next(1), get, out(1) */
" D l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);