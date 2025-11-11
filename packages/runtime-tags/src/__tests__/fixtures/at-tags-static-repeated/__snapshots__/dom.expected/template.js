export const $template = `<!>${_list_template}<!>`;
export const $walks = /* over(1), <list>, over(1) */`b/${_list_walks}&b`;
import { $setup as _list, $input_item as _list_input_item, $template as _list_template, $walks as _list_walks } from "./tags/list/index.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $item_content2 = /* @__PURE__ */_._content("__tests__/template.marko_2_content", "Again", /* over(1) */"b");
const $item_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "Hello", /* over(1) */"b");
export function $setup($scope) {
  _list($scope["#childScope/0"]);
  _list_input_item($scope["#childScope/0"], (_.attrTags(_.attrTag({
    content: $item_content($scope)
  }), {
    content: $item_content2($scope)
  })));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);