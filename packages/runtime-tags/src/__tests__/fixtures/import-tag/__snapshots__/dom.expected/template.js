export const $template = `<!>${_Baz_template}${_Baz_template}${_Baz_template}<!>`;
export const $walks = /* beginChild, _Baz_walks, endChild, beginChild, _Baz_walks, endChild, beginChild, _Baz_walks, endChild, replace, over(1) */`D/${_Baz_walks}&/${_Baz_walks}&/${_Baz_walks}&%b`;
import "./foo";
import { b as c } from "./bar";
import Baz from "./tags/baz.marko";
import { $setup as _Baz, $template as _Baz_template, $walks as _Baz_walks } from "./tags/baz.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _Baz($scope["#childScope/0"]);
  _Baz($scope["#childScope/1"]);
  _Baz($scope["#childScope/2"]);
  _$.data($scope["#text/3"], c);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);