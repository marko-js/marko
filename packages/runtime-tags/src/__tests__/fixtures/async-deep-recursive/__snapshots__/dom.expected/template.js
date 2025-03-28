export const _template_ = `<!>${_recurse_template}<!>`;
export const _walks_ = /* beginChild, _recurse_walks, endChild */`D/${_recurse_walks}&D`;
import { _setup_ as _recurse, _input_level_ as _recurse_input_level, _template_ as _recurse_template, _walks_ as _recurse_walks } from "./tags/recurse.marko";
export function _setup_(_scope) {
  _recurse(_scope["#childScope/0"]);
  _recurse_input_level(_scope["#childScope/0"], 4);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);