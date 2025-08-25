export const $template = `<!>${_myTag_template}${_myTag_template}<!>`;
export const $walks = /* beginChild, _myTag_walks, endChild, beginChild, _myTag_walks, endChild */`D/${_myTag_walks}&/${_myTag_walks}&D`;
import { $setup as _myTag, $input as _myTag_input, $template as _myTag_template, $walks as _myTag_walks } from "./tags/my-tag.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $mytag_content2 = _$.registerContent("__tests__/template.marko_2_renderer", "Span");
const $mytag_content = _$.registerContent("__tests__/template.marko_1_renderer", "Div");
export function $setup($scope) {
  _myTag($scope["#childScope/0"]);
  _myTag_input($scope["#childScope/0"], {
    content: $mytag_content($scope)
  });
  _myTag($scope["#childScope/1"]);
  _myTag_input($scope["#childScope/1"], {
    as: "span",
    content: $mytag_content2($scope)
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);