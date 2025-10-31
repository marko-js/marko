export const $template = `<!>${_list_template}<!>`;
export const $walks = /* over(1), beginChild, _list_walks, endChild, over(1) */`b/${_list_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _list, $input_item as _list_input_item, $template as _list_template, $walks as _list_walks } from "./tags/list/index.marko";
const $item_content = /* @__PURE__ */_._content_closures(/* @__PURE__ */_._content("__tests__/template.marko_1_content", " ", /* get, over(1) */" b"), {
  zzz($scope) {
    _._text($scope["#text/0"], $scope.zzz);
  }
});
export function $setup($scope) {
  _list($scope["#childScope/0"]);
  let $item;
  _.forOf([1, 2, 3], zzz => {
    $item = _.attrTags($item, {
      content: $item_content($scope, {
        zzz
      })
    });
  });
  _list_input_item($scope["#childScope/0"], $item);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);