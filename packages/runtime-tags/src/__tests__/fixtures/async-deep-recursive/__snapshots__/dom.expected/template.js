export const _template = `<!>${_recurse_template}<!>`;
export const _walks = /* beginChild, _recurse_walks, endChild */`D/${_recurse_walks}&D`;
import { _setup as _recurse, _input_level as _recurse_input_level, _template as _recurse_template, _walks as _recurse_walks } from "./tags/recurse.marko";
export function _setup(_scope) {
  _recurse(_scope["#childScope/0"]);
  _recurse_input_level(_scope["#childScope/0"], 4);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);