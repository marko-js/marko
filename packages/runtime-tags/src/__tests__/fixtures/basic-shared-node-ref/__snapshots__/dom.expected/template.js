export const $template = "<ul></ul><button id=toggle>Toggle</button><button id=reverse>Reverse</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__x = /* @__PURE__ */_._const("x", ($scope, x) => _._text($scope["#text/0"], x));
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__x($scope, $params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<li> </li>", /* next(1), get, out(1) */"D l", 0, $for_content__$params);
const $open__script = _._script("__tests__/template.marko_0_open", ($scope, {
  open
}) => _._on($scope["#button/1"], "click", function () {
  $open($scope, open = !open);
}));
const $open = /* @__PURE__ */_._let("open/3", ($scope, open) => {
  _._attr($scope["#ul/0"], "hidden", !open);
  $open__script($scope);
});
const $for = /* @__PURE__ */_._for_of("#ul/0", $for_content);
const $list__script = _._script("__tests__/template.marko_0_list", ($scope, {
  list
}) => _._on($scope["#button/2"], "click", function () {
  $list($scope, list = [].concat(list).reverse());
}));
const $list = /* @__PURE__ */_._let("list/4", ($scope, list) => {
  $for($scope, [list, function (x) {
    return x;
  }]);
  $list__script($scope);
});
export function $setup($scope) {
  $open($scope, true);
  $list($scope, [1, 2, 3]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);