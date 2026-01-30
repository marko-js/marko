export const $template = `<div></div>${_helloSetter_template}`;
export const $walks = /* get, over(1), <hello-setter> */` b/${_helloSetter_walks}&`;
import { $setup as _helloSetter, $el as _helloSetter_input_el, $template as _helloSetter_template, $walks as _helloSetter_walks } from "./tags/hello-setter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $el_getter = _._el("__tests__/template.marko_0_#div", "#div/0");
export function $setup($scope) {
  _helloSetter($scope["#childScope/1"]);
  _helloSetter_input_el($scope["#childScope/1"], $el_getter($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);