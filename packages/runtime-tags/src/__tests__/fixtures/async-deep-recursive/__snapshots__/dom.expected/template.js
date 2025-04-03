export const $template = `<!>${_recurse_template}<!>`;
export const $walks = /* beginChild, _recurse_walks, endChild */`D/${_recurse_walks}&D`;
import { $setup as _recurse, $input_level as _recurse_input_level, $template as _recurse_template, $walks as _recurse_walks } from "./tags/recurse.marko";
export function $setup($scope) {
  _recurse($scope["#childScope/0"]);
  _recurse_input_level($scope["#childScope/0"], 4);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);