export const $template = `<!>${_list_template}<!>`;
export const $walks = /* beginChild, _list_walks, endChild */`D/${_list_walks}&D`;
import { $setup as _list, $input_item as _list_input_item, $template as _list_template, $walks as _list_walks } from "./tags/list/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $item_content2 = _$.registerContent("__tests__/template.marko_2_renderer", "Again");
const $item_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello");
export function $setup($scope) {
  _list($scope["#childScope/0"]);
  _list_input_item($scope["#childScope/0"], (_$.attrTags(_$.attrTag({
    content: $item_content($scope)
  }), {
    content: $item_content2($scope)
  })));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);