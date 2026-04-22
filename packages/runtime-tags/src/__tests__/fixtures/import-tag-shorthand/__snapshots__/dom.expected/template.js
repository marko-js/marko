export const $template = /*@__PURE__*/((_w0, _w1) => `<!>${_w0}${_w1}<!>`)(_BazComp_template, _BazComp_template);
export const $walks =
/*@__PURE__*/
/* over(1), <BazComp>, <BazComp>, over(1) */
((_w0, _w1) => `b/${_w0}&/${_w1}&b`)(_BazComp_walks, _BazComp_walks);
import BazComp from "./tags/baz.marko";
import { $setup as _BazComp, $template as _BazComp_template, $walks as _BazComp_walks } from "./tags/baz.marko";
export function $setup($scope) {
  _BazComp($scope["#childScope/0"]);
  _BazComp($scope["#childScope/1"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);