export const $template = `<!>${_BazComp_template}${_BazComp_template}<!>`;
export const $walks = /* over(1), beginChild, _BazComp_walks, endChild, beginChild, _BazComp_walks, endChild, over(1) */`b/${_BazComp_walks}&/${_BazComp_walks}&b`;
import BazComp from "./tags/baz.marko";
import { $setup as _BazComp, $template as _BazComp_template, $walks as _BazComp_walks } from "./tags/baz.marko";
export function $setup($scope) {
  _BazComp($scope["#childScope/0"]);
  _BazComp($scope["#childScope/1"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);