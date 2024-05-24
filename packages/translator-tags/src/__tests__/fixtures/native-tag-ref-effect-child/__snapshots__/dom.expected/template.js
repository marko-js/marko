import { bindFunction as _bindFunction, inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const el_getter = _scope => _scope["#div/0"];
import { _setup_ as _helloSetter, _el_ as _helloSetter__el_, _template_ as _helloSetter_template, _walks_ as _helloSetter_walks } from "./components/hello-setter.marko";
const _setup = _scope => {
  _helloSetter(_scope["#childScope/1"]);
  _helloSetter__el_(_scope["#childScope/1"], /* @__PURE__ */_bindFunction(_scope, el_getter));
};
export const _template_ = `<div></div>${_helloSetter_template}`;
export const _walks_ = /* get, over(1), beginChild, _helloSetter_walks, endChild */` b/${_helloSetter_walks}&`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko");