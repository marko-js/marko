export const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const $walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $description$for$content = /* @__PURE__ */_$.value("description", ($scope, description) => _$.data($scope["#text/1"], description));
const $name$for$content = /* @__PURE__ */_$.value("name", ($scope, name) => _$.data($scope["#text/0"], name));
const $temp$for$content = /* @__PURE__ */_$.value("$temp", ($scope, $temp) => {
  $name$for$content($scope, $temp.name);
  $description$for$content($scope, $temp.description);
});
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $temp$for$content($scope, $params2?.[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
const $items_effect = _$.effect("__tests__/template.marko_0_items", ($scope, {
  items
}) => {
  _$.on($scope["#button/1"], "click", function () {
    $items($scope, [...items, {
      name: "JavaScript",
      description: "Java, but scriptier"
    }]);
  });
  _$.on($scope["#button/2"], "click", function () {
    $items($scope, items.slice(0, -1));
  });
});
const $items = /* @__PURE__ */_$.state("items/3", ($scope, items) => {
  $for($scope, [items]);
  $items_effect($scope);
});
const $id = $scope => {};
export function $setup($scope) {
  $id($scope, 0);
  $items($scope, [{
    name: "Marko",
    description: "HTML Reimagined"
  }]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);