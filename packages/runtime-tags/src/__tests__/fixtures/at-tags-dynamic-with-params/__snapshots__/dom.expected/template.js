export const $template = `<!>${_hello_template}<button>Toggle</button>`;
export const $walks = /* over(1), beginChild, _hello_walks, endChild, get, over(1) */`b/${_hello_walks}& b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _hello, $input_item as _hello_input_item, $template as _hello_template, $walks as _hello_walks } from "./tags/hello/index.marko";
const $item_content__y = /* @__PURE__ */_._const("y", ($scope, y) => _._text($scope["#text/0"], y));
const $item_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $item_content__y($scope, $params2[0]));
const $item_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "y: <!>", /* over(1), replace, over(1) */"b%b", 0, $item_content__$params);
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, x = !x);
}));
const $x = /* @__PURE__ */_._let("x/2", ($scope, x) => {
  let $item;
  if (x) {
    $item = _.attrTag({
      content: $item_content($scope)
    });
  }
  _hello_input_item($scope["#childScope/0"], $item);
  $x__script($scope);
});
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
  $x($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);