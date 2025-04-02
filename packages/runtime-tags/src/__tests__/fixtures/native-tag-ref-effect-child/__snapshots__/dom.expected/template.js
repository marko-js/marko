export const _template = `<div></div>${_helloSetter_template}`;
export const _walks = /* get, over(1), beginChild, _helloSetter_walks, endChild */` b/${_helloSetter_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_el = _$.nodeRef("__tests__/template.marko_0/#div", "Getter:#div/0");
import { _setup as _helloSetter, _el as _helloSetter_input_el, _template as _helloSetter_template, _walks as _helloSetter_walks } from "./tags/hello-setter.marko";
export function _setup(_scope) {
  _helloSetter(_scope["#childScope/1"]);
  _helloSetter_input_el(_scope["#childScope/1"], _get_el(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);