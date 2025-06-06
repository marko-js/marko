export const $template = "<div>Hello</div>";
export const $walks = /* get, over(1) */" b";
import * as _style from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
const {
  content
} = _style;
import * as _$ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _$.classAttr($scope["#div/0"], content);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);