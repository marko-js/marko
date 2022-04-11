import { apply as _counter, template as _counter_template, walks as _counter_walks } from "./components/counter.marko";

function _apply(_scope) {
  _counter(_scope[0]);
}

export const template = `<div>${_counter_template}</div>`;
export const walks =
/* next(1), beginChild(0), _counter_walks, endChild, out(1) */
`D/${_counter_walks}&l`;
export const apply = _apply;
import { createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export default _createRenderFn(template, walks, apply);