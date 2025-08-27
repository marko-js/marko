export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$else$content_effect = _$.effect("__tests__/template.marko_3", $scope => _$.on($scope["#button/0"], "click", function () {
  $editing$for$content($scope._, true);
}));
const $setup$else$content = $scope => {
  $count$else$content._($scope);
  $setup$else$content_effect($scope);
};
const $count$else$content = /* @__PURE__ */_$.conditionalClosure("count", "#text/0", 1, ($scope, count) => _$.data($scope["#text/1"], count));
const $else_content = /* @__PURE__ */_$.createRenderer("<button>Increment <!></button>", /* get, next(1), over(1), replace, out(1) */" Db%l", $setup$else$content);
const $expr_counts_count_i$if$content_effect = _$.effect("__tests__/template.marko_2_counts_count_i", ($scope, {
  _: {
    _: {
      counts
    },
    count,
    i
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $counts($scope._._, counts = [...counts.slice(0, i), count + 1, ...counts.slice(i + 1)]);
  $editing$for$content($scope._, false);
}));
const $expr_counts_count_i$if$content = /* @__PURE__ */_$.intersection(2, $expr_counts_count_i$if$content_effect, 2);
const $counts$if$content = /* @__PURE__ */_$.dynamicClosureRead("counts", $expr_counts_count_i$if$content, $scope => $scope._._);
const $count$if$content = /* @__PURE__ */_$.conditionalClosure("count", "#text/0", 0, ($scope, count) => {
  _$.data($scope["#text/1"], count + 1);
  $expr_counts_count_i$if$content($scope);
});
const $i$if$content = /* @__PURE__ */_$.conditionalClosure("i", "#text/0", 0, $expr_counts_count_i$if$content);
const $setup$if$content = $scope => {
  $counts$if$content($scope);
  $count$if$content._($scope);
  $i$if$content._($scope);
};
const $if_content = /* @__PURE__ */_$.createRenderer("<button>Confirm <!></button>", /* get, next(1), over(1), replace, out(1) */" Db%l", $setup$if$content);
const $if$for$content = /* @__PURE__ */_$.conditional("#text/0", $if_content, $else_content);
const $editing$for$content = /* @__PURE__ */_$.state("editing/4", ($scope, editing) => $if$for$content($scope, editing ? 0 : 1));
const $setup$for$content = $scope => {
  $editing$for$content($scope, false);
};
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $count$for$content($scope, $params2[0]);
  $i$for$content($scope, $params2[1]);
});
const $count$for$content = /* @__PURE__ */_$.value("count", $scope => {
  $count$if$content($scope);
  $count$else$content($scope);
});
const $i$for$content = /* @__PURE__ */_$.value("i", $i$if$content);
const $for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* over(1), replace, over(2) */"b%c", $setup$for$content, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
const $counts_closure = /* @__PURE__ */_$.dynamicClosure($counts$if$content);
const $counts = /* @__PURE__ */_$.state("counts/1", ($scope, counts) => {
  $for($scope, [counts]);
  $counts_closure($scope);
});
export function $setup($scope) {
  $counts($scope, [0, 0, 0]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);