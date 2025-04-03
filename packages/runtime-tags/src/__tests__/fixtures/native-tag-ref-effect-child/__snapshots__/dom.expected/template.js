export const $template = `<div></div>${_helloSetter_template}`;
export const $walks = /* get, over(1), beginChild, _helloSetter_walks, endChild */` b/${_helloSetter_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $get_el = _$.nodeRef("__tests__/template.marko_0/#div", "Getter:#div/0");
import { $setup as _helloSetter, $el as _helloSetter_input_el, $template as _helloSetter_template, $walks as _helloSetter_walks } from "./tags/hello-setter.marko";
export function $setup($scope) {
  _helloSetter($scope["#childScope/1"]);
  _helloSetter_input_el($scope["#childScope/1"], $get_el($scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);