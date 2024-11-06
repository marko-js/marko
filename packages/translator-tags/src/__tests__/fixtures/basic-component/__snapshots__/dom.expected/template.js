export const _template_ = `<div>${_counter_template}</div>`;
export const _walks_ = /* next(1), beginChild, _counter_walks, endChild, out(1) */`D/${_counter_walks}&l`;
import { _setup_ as _counter, _template_ as _counter_template, _walks_ as _counter_walks } from "./components/counter.marko";
export function _setup_(_scope) {
  _counter(_scope["#childScope/0"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-component/template.marko");