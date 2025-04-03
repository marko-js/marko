export const $template = "<div><!--abc--><!--[if lt IE 9]><script src=\"...\"></script><![endif]--></div>";
export const $walks = /* over(1) */"b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);