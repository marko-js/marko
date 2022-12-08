import { bind as _bind, setSource as _setSource, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const el_getter = _scope => _scope[0];
import { setup as _helloSetter, attrs as _helloSetter_attrs, template as _helloSetter_template, walks as _helloSetter_walks } from "./components/hello-setter.marko";
const _setup = _scope => {
  _helloSetter(_scope[1]);
  _setSource(_scope[1], _helloSetter_attrs, {
    el: /* @__PURE__ */_bind(_scope, el_getter)
  });
  _notifySignal(_scope, _helloSetter_attrs);
};
export const template = `<div></div>${_helloSetter_template}`;
export const walks = /* get, over(1), beginChild(1), _helloSetter_walks, endChild */` b0${_helloSetter_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);