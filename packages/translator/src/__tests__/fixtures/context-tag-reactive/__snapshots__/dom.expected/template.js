import { setSource as _setSource, dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, inChildMany as _inChildMany, on as _on, queueSource as _queueSource, data as _data, createRenderer as _createRenderer, derivation as _derivation, source as _source, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _child, template as _child_template, walks as _child_walks, closures as _child_closures } from "./components/child.marko";
const _setup$putBody = _scope => {
  _child(_scope["#childScope/0"]);
};
const _putBody = /* @__PURE__ */_createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$putBody, [_inChildMany(_child_closures, "#childScope/0")]);
const _put = /* @__PURE__ */_derivation("0:", 1, [_dynamicSubscribers("0:")], (_scope, x = _scope["x"]) => x);
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const x = _scope["x"];
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_source("x", [_put], (_scope, x) => {
  _data(_scope["#text/2"], x);
  _queueHydrate(_scope, _hydrate_x);
});
const _setup = _scope => {
  _setSource(_scope, _x, 123);
  _initContextProvider(_scope, "#text/0", "0:", "packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko", _putBody);
};
export const template = "<!><button id=increment> </button>";
export const walks = /* replace, over(1), get, next(1), get, out(1) */"%b D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);