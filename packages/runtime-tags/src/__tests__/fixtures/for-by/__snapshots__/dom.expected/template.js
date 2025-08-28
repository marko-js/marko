export const $template = "<div><div class=by-string></div><div class=by-function></div><div class=by-unknown-string></div><div class=by-unknown-function></div><div class=by-unknown-missing></div><button>Rotate</button></div>";
export const $walks = /* next(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, out(1) */"D b b b b b l";
function getStringBy() {
  return "id";
}
function getFunctionBy() {
  return item => item.id;
}
function getMissingBy() {
  return undefined;
}
import * as _$ from "@marko/runtime-tags/debug/dom";
const $text$for$content5 = /* @__PURE__ */_$.value("text", ($scope, text) => _$.data($scope["#text/0"], text));
const $params6$for$content = /* @__PURE__ */_$.value("$params6", ($scope, $params6) => $temp5$for$content($scope, $params6?.[0]));
const $temp5$for$content = /* @__PURE__ */_$.value("$temp5", ($scope, $temp5) => $text$for$content5($scope, $temp5.text));
const $for_content5 = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params6$for$content);
const $text$for$content4 = /* @__PURE__ */_$.value("text", ($scope, text) => _$.data($scope["#text/0"], text));
const $params5$for$content = /* @__PURE__ */_$.value("$params5", ($scope, $params5) => $temp4$for$content($scope, $params5?.[0]));
const $temp4$for$content = /* @__PURE__ */_$.value("$temp4", ($scope, $temp4) => $text$for$content4($scope, $temp4.text));
const $for_content4 = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params5$for$content);
const $text$for$content3 = /* @__PURE__ */_$.value("text", ($scope, text) => _$.data($scope["#text/0"], text));
const $params4$for$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $temp3$for$content($scope, $params4?.[0]));
const $temp3$for$content = /* @__PURE__ */_$.value("$temp3", ($scope, $temp3) => $text$for$content3($scope, $temp3.text));
const $for_content3 = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params4$for$content);
const $text$for$content2 = /* @__PURE__ */_$.value("text", ($scope, text) => _$.data($scope["#text/0"], text));
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $temp2$for$content($scope, $params3?.[0]));
const $temp2$for$content = /* @__PURE__ */_$.value("$temp2", ($scope, $temp2) => $text$for$content2($scope, $temp2.text));
const $for_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params3$for$content);
const $text$for$content = /* @__PURE__ */_$.value("text", ($scope, text) => _$.data($scope["#text/0"], text));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $temp$for$content($scope, $params2?.[0]));
const $temp$for$content = /* @__PURE__ */_$.value("$temp", ($scope, $temp) => $text$for$content($scope, $temp.text));
const $for_content = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#div/0", $for_content);
const $for2 = /* @__PURE__ */_$.loopOf("#div/1", $for_content2);
const $for3 = /* @__PURE__ */_$.loopOf("#div/2", $for_content3);
const $for4 = /* @__PURE__ */_$.loopOf("#div/3", $for_content4);
const $for5 = /* @__PURE__ */_$.loopOf("#div/4", $for_content5);
const $items_effect = _$.effect("__tests__/template.marko_0_items", ($scope, {
  items
}) => _$.on($scope["#button/5"], "click", function () {
  $items($scope, items = [...items.slice(1), items[0]]);
}));
const $items = /* @__PURE__ */_$.state("items/6", ($scope, items) => {
  $for($scope, [items, "id"]);
  $for2($scope, [items, item => item.id]);
  $for3($scope, [items, getStringBy()]);
  $for4($scope, [items, getFunctionBy()]);
  $for5($scope, [items, getMissingBy()]);
  $items_effect($scope);
});
export function $setup($scope) {
  $items($scope, [{
    id: 0,
    text: "first"
  }, {
    id: 1,
    text: "second"
  }, {
    id: 2,
    text: "third"
  }]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);