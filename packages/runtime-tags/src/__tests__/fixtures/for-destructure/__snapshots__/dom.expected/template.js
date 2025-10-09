export const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const $walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $for_content__description = /* @__PURE__ */_._const("description", ($scope, description) => _._text($scope["#text/1"], description));
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]));
const $for_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => {
  $for_content__name($scope, $temp.name);
  $for_content__description($scope, $temp.description);
});
const $for_content = /* @__PURE__ */_._content_branch("<div><!>: <!></div>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
const $items__script = _._script("__tests__/template.marko_0_items", ($scope, {
  items
}) => {
  _._on($scope["#button/1"], "click", function () {
    $items($scope, items = [...items, {
      name: "JavaScript",
      description: "Java, but scriptier"
    }]);
  });
  _._on($scope["#button/2"], "click", function () {
    $items($scope, items = items.slice(0, -1));
  });
});
const $items = /* @__PURE__ */_._let("items/3", ($scope, items) => {
  $for($scope, [items]);
  $items__script($scope);
});
export function $setup($scope) {
  /* id */0;
  $items($scope, [{
    name: "Marko",
    description: "HTML Reimagined"
  }]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);