const formatNumber = n => {
  return "$" + n.toFixed(2);
};
import { setup as _counter, attrs as _counter_attrs, template as _counter_template, walks as _counter_walks } from "./components/counter.marko";
import { inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _setup = _scope => {
  _counter(_scope["#childScope/0"]);
  _counter_attrs(_scope["#childScope/0"], {
    format: formatNumber
  });
};
export const template = `${_counter_template}`;
export const walks = /* beginChild, _counter_walks, endChild */`/${_counter_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/component-attrs-static-code/template.marko");