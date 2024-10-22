export const _template_ = `<div></div>${_helloSetter_template}`;
export const _walks_ = /* get, over(1), beginChild, _helloSetter_walks, endChild */` b/${_helloSetter_walks}&`;
import { nodeRef as _nodeRef, inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _get_el = _nodeRef("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko_0/#div", "#div/0");
import { _setup_ as _helloSetter, _el_ as _helloSetter__el_, _template_ as _helloSetter_template, _walks_ as _helloSetter_walks } from "./components/hello-setter.marko";
export function _setup_(_scope) {
  _helloSetter(_scope["#childScope/1"]);
  _helloSetter__el_(_scope["#childScope/1"], _get_el(_scope));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/template.marko");