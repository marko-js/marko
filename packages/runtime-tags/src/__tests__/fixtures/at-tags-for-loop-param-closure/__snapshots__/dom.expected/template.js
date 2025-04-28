export const $template = `<!>${_list_template}<!>`;
export const $walks = /* beginChild, _list_walks, endChild */`D/${_list_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _list, $input_item as _list_input_item, $template as _list_template, $walks as _list_walks } from "./tags/list/index.marko";
const $item_content = _$.localClosures(_$.registerContent("__tests__/template.marko_1_renderer", " ", /* get */" "), {
  item($scope, item) {
    _$.data($scope["#text/0"], item);
  }
});
export function $setup($scope) {
  _list($scope["#childScope/0"]);
  let $item;
  _$.forOf([1, 2, 3], item => {
    $item = _$.attrTags($item, {
      content: $item_content($scope, {
        item
      })
    });
  });
  _list_input_item($scope["#childScope/0"], $item);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);