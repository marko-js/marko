const formatNumber = n => {
  return "$" + n.toFixed(2);
};
import { _setup_ as _counter, _input_ as _counter_args, _template_ as _counter_template, _walks_ as _counter_walks } from "./components/counter.marko";
import { inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup = _scope => {
  _counter(_scope["#childScope/0"]);
  _counter_args(_scope["#childScope/0"], {
    format: formatNumber
  });
};
export const _template_ = `${_counter_template}`;
export const _walks_ = /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`;
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko");