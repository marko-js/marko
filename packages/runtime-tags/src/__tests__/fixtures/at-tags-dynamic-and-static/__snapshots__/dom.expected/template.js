export const $template = `<!>${_hello_template}<!>`;
export const $walks = /* over(1), beginChild, _hello_walks, endChild, over(1) */`b/${_hello_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _hello, $input_other as _hello_input_other, $input_item as _hello_input_item, $template as _hello_template, $walks as _hello_walks } from "./tags/hello/index.marko";
const $other_content = /* @__PURE__ */_._content("__tests__/template.marko_2_content", "other", /* over(1) */"b");
const $item_content = /* @__PURE__ */_._content_closures(/* @__PURE__ */_._content("__tests__/template.marko_1_content", "<!>:<!>", /* replace, over(2), replace, over(1) */"%c%b"), {
  a($scope, a) {
    _._text($scope["#text/0"], a);
  },
  v($scope, v) {
    _._text($scope["#text/1"], v);
  }
});
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
  _hello_input_other($scope["#childScope/0"], _.attrTag({
    content: $other_content($scope)
  }));
  let $item;
  _.forIn({
    a: 1,
    b: 2
  }, (a, v) => {
    $item = _.attrTags($item, {
      content: $item_content($scope, {
        a,
        v
      })
    });
  });
  _hello_input_item($scope["#childScope/0"], $item);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);