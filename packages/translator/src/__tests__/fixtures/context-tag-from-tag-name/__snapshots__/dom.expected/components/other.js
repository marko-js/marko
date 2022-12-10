import { dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, conditional as _conditional, dynamicClosure as _dynamicClosure, createRenderer as _createRenderer, derivation as _derivation, source as _source, notifySignal as _notifySignal, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName$putBody = /* @__PURE__ */_conditional(0, 1, (_scope, input = _scope._[2]) => input.renderBody);
const _input$putBody = _dynamicClosure(1, 2, [_dynamicTagName$putBody]);
const _putBody = /* @__PURE__ */_createRenderer("<!>", /* replace, skip(5) */"%-", null, [_input$putBody]);
const _put = /* @__PURE__ */_derivation(1, 1, [_dynamicSubscribers(1)], _scope => "Hello");
const _input = /* @__PURE__ */_source(2, [_dynamicSubscribers(2)]);
const _setup = _scope => {
  _initContextProvider(_scope, 0, 1, "packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko", _putBody);
  _notifySignal(_scope, _put);
};
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<!>";
export const walks = /* replace, skip(1), over(1) */"%)b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);