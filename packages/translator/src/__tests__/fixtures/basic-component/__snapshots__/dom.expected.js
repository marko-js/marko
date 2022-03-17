import { apply as _counter, template as _counter_template, walks as _counter_walks } from "./components/counter.marko";

function _apply(_scope) {
  _counter(_scope[0]);
}

import { createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = `<div>${_counter_template}</div>`;
export const walks = `D/${_counter_walks}l`;
export const apply = _apply;
export default _createRenderFn(template, walks, apply);