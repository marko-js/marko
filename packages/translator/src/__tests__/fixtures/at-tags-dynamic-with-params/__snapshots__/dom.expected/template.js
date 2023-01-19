let _item;
import { data as _data, write as _write, bindRenderer as _bindRenderer, createRenderer as _createRenderer, conditional as _conditional, dynamicSubscribers as _dynamicSubscribers, dynamicClosure as _dynamicClosure, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _hello, template as _hello_template, walks as _hello_walks } from "./components/hello/index.marko";
const _setup$itemBody = _scope => {
  _data(_scope[0], y);
};
const _itemBody = /* @__PURE__ */_createRenderer("", /* get */" ", _setup$itemBody);
const _ifBody = /* @__PURE__ */_createRenderer("", "");
const _if$helloBody = /* @__PURE__ */_conditional(0, 1, (_scope, x = _scope._[0]) => x ? _ifBody : null);
const _x$helloBody = _dynamicClosure(1, 0, [_if$helloBody]);
const _helloBody = /* @__PURE__ */_createRenderer("<!>", /* replace */"%", null, [_x$helloBody]);
const _x = /* @__PURE__ */_source(0, [_dynamicSubscribers(0)]);
const _setup = _scope => {
  _hello(_scope[1]);
};
export const attrs = /* @__PURE__ */_destructureSources([_x], (_scope, {
  x
}) => {
  _setSource(_scope, _x, x);
});
export { _x as _apply_x };
export const template = `${_hello_template}`;
export const walks = /* beginChild(1), _hello_walks, endChild */`0${_hello_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);