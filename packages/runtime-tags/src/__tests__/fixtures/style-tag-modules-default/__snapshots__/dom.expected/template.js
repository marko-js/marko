export const _template = "<div>Hello</div>";
export const _walks = /* get, over(1) */" b";
import myStyles from "virtual:./template.marko.module.css \n  .content {\n    color: green;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function _setup(_scope) {
  _$.classAttr(_scope["#div/0"], myStyles.content);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);