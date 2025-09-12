export const $template = "<button class=up>up</button><button class=down>down</button><button class=change> </button>";
export const $walks = /* get, over(1), get, over(1), get, next(1), get, out(1) */" b b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__OR__direction__script = _._script("__tests__/template.marko_0_x_direction", ($scope, {
  x,
  direction
}) => _._on($scope["#button/2"], "click", function () {
  if (direction === "up") $x($scope, ++x);else if (direction === "down") $x($scope, --x);
}));
const $x__OR__direction = /* @__PURE__ */_._or(6, $x__OR__direction__script);
const $x = /* @__PURE__ */_._let("x/4", ($scope, x) => {
  _._text($scope["#text/3"], x);
  $x__OR__direction($scope);
});
const $direction = /* @__PURE__ */_._let("direction/5", $x__OR__direction);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._on($scope["#button/0"], "click", function () {
    $direction($scope, "up");
  });
  _._on($scope["#button/1"], "click", function () {
    $direction($scope, "down");
  });
});
export function $setup($scope) {
  $x($scope, 1);
  $direction($scope, undefined);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);