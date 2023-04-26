let _item;
import { data as _data, write as _write, bindRenderer as _bindRenderer, createRenderer as _createRenderer, register as _register, conditional as _conditional, dynamicClosure as _dynamicClosure, dynamicSubscribers as _dynamicSubscribers, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
const _setup$itemBody = _scope => {
  _data(_scope["#text/0"], y);
};
const _itemBody = /* @__PURE__ */_createRenderer("", /* get */" ", _setup$itemBody);
const _ifBody = _register("packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko_2_renderer", /* @__PURE__ */_createRenderer("", ""));
const _if$helloBody = /* @__PURE__ */_conditional("#text/0");
const _x$helloBody = /* @__PURE__ */_dynamicClosure("x", (_scope, x) => _if$helloBody(_scope, x ? _ifBody : null));
const _helloBody = /* @__PURE__ */_createRenderer("<!>", /* replace */"%", null, [_x$helloBody]);
const _x = /* @__PURE__ */_value("x", (_scope, x, _dirty) => _dynamicSubscribers(_scope["x*"], _dirty));
const _setup = _scope => {
  _hello(_scope["#childScope/0"]);
};
export const attrs = (_scope, _destructure, _dirty = true) => {
  let x;
  if (_dirty) ({
    x
  } = _destructure);
  _x(_scope, x, _dirty);
};
export { _x };
export const template = `${_hello_template}`;
export const walks = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/at-tags-dynamic-with-params/template.marko");