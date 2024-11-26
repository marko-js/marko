export const _template_ = `<!>${_counter_template}`;
export const _walks_ = /* beginChild, _counter_walks, endChild */`D/${_counter_walks}&`;
import { formatNumber } from "./helpers";
import { _setup_ as _counter, _input_ as _counter_input, _template_ as _counter_template, _walks_ as _counter_walks } from "./components/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup_(_scope) {
  _counter(_scope["#childScope/0"]);
  _counter_input(_scope["#childScope/0"], {
    format: formatNumber
  });
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/component-attrs-import-value/template.marko", _template_, _walks_, _setup_);