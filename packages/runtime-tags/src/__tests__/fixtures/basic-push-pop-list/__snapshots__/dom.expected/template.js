export const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
export const $walks = /* next(1), replace, over(1), get, over(1), get, out(1) */"D%b b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $item$for$content = /* @__PURE__ */_$.value("item", ($scope, item) => _$.data($scope["#text/0"], item));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $item$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, $params2$for$content);
const $expr_id_items_effect = _$.effect("__tests__/template.marko_0_id_items", ($scope, {
  id,
  items
}) => _$.on($scope["#button/1"], "click", function () {
  // TODO: nested writes ([...items, id++]) don't work
  const nextId = id + 1;
  $id($scope, nextId);
  $items($scope, [...items, nextId]);
}));
const $expr_id_items = /* @__PURE__ */_$.intersection(5, $expr_id_items_effect);
const $id = /* @__PURE__ */_$.state("id/3", $expr_id_items);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
const $items_effect = _$.effect("__tests__/template.marko_0_items", ($scope, {
  items
}) => _$.on($scope["#button/2"], "click", function () {
  $items($scope, items.slice(0, -1));
}));
const $items = /* @__PURE__ */_$.state("items/4", ($scope, items) => {
  $for($scope, [items]);
  $expr_id_items($scope);
  $items_effect($scope);
});
export function $setup($scope) {
  $id($scope, 0);
  $items($scope, []);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);