export const $template = /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)(_recurse_template);
export const $walks =
/*@__PURE__*/
/* over(1), <recurse>, over(1) */
(_w0 => `b/${_w0}&b`)(_recurse_walks);
import { $setup as _recurse, $input_level as _recurse_input_level, $template as _recurse_template, $walks as _recurse_walks } from "./tags/recurse.marko";
export function $setup($scope) {
  _recurse($scope["#childScope/0"]);
  _recurse_input_level($scope["#childScope/0"], 4);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);