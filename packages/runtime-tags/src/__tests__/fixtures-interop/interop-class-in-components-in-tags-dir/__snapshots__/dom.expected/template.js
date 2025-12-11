export const $template = `<!>${_hello_template}<!>`;
export const $walks = /* over(1), <hello>, over(1) */`b/${_hello_walks}&b`;
import { $setup as _hello, $template as _hello_template, $walks as _hello_walks } from "./tags/hello.marko";
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);