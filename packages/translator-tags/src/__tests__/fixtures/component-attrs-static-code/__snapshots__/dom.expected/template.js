export const _template_ = `${_counter_template}${_counter_template}`;
export const _walks_ = /* beginChild, _counter_walks, endChild, beginChild, _counter_walks, endChild */`/${_counter_walks}&/${_counter_walks}&`;
_register("packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko_0/formatNumber2", formatNumber2);
const formatNumber = _register("packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko_0/anonymous", n => {
  return "$" + n.toFixed(2);
});
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
import { register as _register, inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
import { _setup_ as _counter, _input_ as _counter_input, _template_ as _counter_template, _walks_ as _counter_walks } from "./components/counter.marko";
export function _setup_(_scope) {
  _counter(_scope["#childScope/0"]);
  _counter(_scope["#childScope/1"]);
  _counter_input(_scope["#childScope/0"], {
    format: formatNumber
  });
  _counter_input(_scope["#childScope/1"], {
    format: formatNumber2
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko");