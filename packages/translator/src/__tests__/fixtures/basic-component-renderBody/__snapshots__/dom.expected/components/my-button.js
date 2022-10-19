import { on as _on, source as _source, register as _register, queueHydrate as _queueHydrate, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _renderBody = /* @__PURE__ */_source(2, []);

const _hydrate_onclick = _register("packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onclick", _scope => {
  const onclick = _scope[1];

  _on(_scope[0], "click", onclick);
});

const _onclick = /* @__PURE__ */_source(1, [], (_scope, onclick) => _queueHydrate(_scope, _hydrate_onclick));

export const attrs = /* @__PURE__ */_destructureSources([_onclick, _renderBody], (_scope, {
  onclick,
  renderBody
}) => {
  _setSource(_scope, _onclick, onclick);

  _setSource(_scope, _renderBody, renderBody);
});
export { _onclick as _apply_onclick, _renderBody as _apply_renderBody };
export const template = "<button></button>";
export const walks =
/* get, over(1) */
" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);