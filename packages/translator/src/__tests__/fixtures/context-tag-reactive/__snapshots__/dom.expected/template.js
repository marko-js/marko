import { dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, childClosures as _childClosures, on as _on, queueSource as _queueSource, data as _data, createRenderer as _createRenderer, value as _value, register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _child, template as _child_template, walks as _child_walks, closures as _child_closures } from "./components/child.marko";
const _setup$putBody = _scope => {
  _child(_scope["#childScope/0"]);
};
const _putBody = /* @__PURE__ */_createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$putBody, [_childClosures(_child_closures, "#childScope/0")]);
const _put = /* @__PURE__ */_value("0:", (_scope, put, _dirty) => _dynamicSubscribers(_scope["0:*"], _dirty));
const _hydrate_x = _register("packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const x = _scope["x"];
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x, _dirty) => {
  let _put_value;
  if (_dirty) {
    _data(_scope["#text/2"], x);
    _queueHydrate(_scope, _hydrate_x);
    _put_value = x;
  }
  _put(_scope, _put_value, _dirty);
});
const _setup = _scope => {
  _initContextProvider(_scope, "#text/0", "0:", "packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko", _putBody);
  _x(_scope, 123);
};
export const template = "<!><button id=increment> </button>";
export const walks = /* replace, over(1), get, next(1), get, out(1) */"%b D l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko");