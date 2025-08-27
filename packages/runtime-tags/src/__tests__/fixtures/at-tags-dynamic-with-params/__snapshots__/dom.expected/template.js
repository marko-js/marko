export const $template = `<!>${_hello_template}<button>Toggle</button>`;
export const $walks = /* over(1), beginChild, _hello_walks, endChild, get, over(1) */`b/${_hello_walks}& b`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _hello, $input_item as _hello_input_item, $template as _hello_template, $walks as _hello_walks } from "./tags/hello/index.marko";
const $y$item$content = /* @__PURE__ */_$.value("y", ($scope, y) => _$.data($scope["#text/0"], y));
const $params2$item$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $y$item$content($scope, $params2[0]));
const $item_content = _$.registerContent("__tests__/template.marko_1_renderer", "y: <!>", /* over(1), replace, over(1) */"b%b", 0, $params2$item$content);
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/1"], "click", function () {
  $x($scope, x = !x);
}));
const $x = /* @__PURE__ */_$.state("x/2", ($scope, x) => {
  let $item;
  if (x) {
    $item = _$.attrTag({
      content: $item_content($scope)
    });
  }
  _hello_input_item($scope["#childScope/0"], $item);
  $x_effect($scope);
});
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
  $x($scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);