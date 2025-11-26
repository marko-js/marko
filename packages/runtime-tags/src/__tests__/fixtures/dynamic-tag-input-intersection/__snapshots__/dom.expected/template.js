export const $template = `<!>${_myTag_template}${_myTag_template}<!>`;
export const $walks = /* over(1), <my-tag>, <my-tag>, over(1) */`b/${_myTag_walks}&/${_myTag_walks}&b`;
import { $setup as _myTag, $inputContent as _myTag_input_content, $inputAs as _myTag_input_as, $inputClass as _myTag_input_class, $htmlInput as _myTag_input_$rest, $template as _myTag_template, $walks as _myTag_walks } from "./tags/my-tag.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $mytag_content2 = _._content_resume("__tests__/template.marko_2_content", "Span", /* over(1) */"b");
const $mytag_content = _._content_resume("__tests__/template.marko_1_content", "Div", /* over(1) */"b");
export function $setup($scope) {
  _myTag($scope["#childScope/0"]);
  _myTag_input_content($scope["#childScope/0"], $mytag_content($scope));
  _myTag_input_as($scope["#childScope/0"]);
  _myTag_input_class($scope["#childScope/0"]);
  _myTag_input_$rest($scope["#childScope/0"], {});
  _myTag($scope["#childScope/1"]);
  _myTag_input_content($scope["#childScope/1"], $mytag_content2($scope));
  _myTag_input_as($scope["#childScope/1"], "span");
  _myTag_input_class($scope["#childScope/1"]);
  _myTag_input_$rest($scope["#childScope/1"], {});
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);