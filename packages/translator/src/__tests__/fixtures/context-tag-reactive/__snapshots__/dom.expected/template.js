import { setSource as _setSource, queueSource as _queueSource, dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, inChildMany as _inChildMany, on as _on, data as _data, createRenderer as _createRenderer, derivation as _derivation, source as _source, register as _register, queueHydrate as _queueHydrate, bind as _bind, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _child, template as _child_template, walks as _child_walks, closures as _child_closures } from "./components/child.marko";
const _setup$putBody = _scope => {
  _child(_scope[0]);
};
const _putBody = /* @__PURE__ */_createRenderer(`${_child_template}`, /* beginChild(0), _child_walks, endChild */`/${_child_walks}&`, _setup$putBody, [_inChildMany(_child_closures, 0)]);
const _put = /* @__PURE__ */_derivation(1, 1, [_dynamicSubscribers(1)], (_scope, x = _scope[4]) => x);
const _onClick = function (_scope) {
  const x = _scope[4];
  _queueSource(_scope, _x, x + 1);
};
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko_0_x", _scope => {
  const x = _scope[4];
  _on(_scope[2], "click", /* @__PURE__ */_bind(_scope, _onClick));
});
const _x = /* @__PURE__ */_source(4, [_put], (_scope, x) => {
  _data(_scope[3], x);
  _queueHydrate(_scope, _hydrate_x);
});
const _setup = _scope => {
  _setSource(_scope, _x, 123);
  _initContextProvider(_scope, 0, 1, "packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko", _putBody);
};
export const template = "<!><button id=increment> </button>";
export const walks = /* replace, skip(1), over(1), get, next(1), get, out(1) */"%)b D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);