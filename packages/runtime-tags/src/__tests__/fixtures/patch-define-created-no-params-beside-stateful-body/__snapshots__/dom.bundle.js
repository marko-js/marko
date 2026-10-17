// template.marko
const $Panel_content__walks = "b";
const $Panel_content__template = "<em>panel</em>";
const $Panel_content = _content$1("a1", $Panel_content__template, $Panel_content__walks);
const $Tag = /* @__PURE__ */ _dynamic_tag(1);
const $open__OR__Panel = /*@__PURE__*/ _or(8, ($scope) => $Tag($scope, $scope.g ? $scope.h : "div"));
const $open = /*@__PURE__*/ _fill_let("a3", 6, $open__OR__Panel);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.g);
}));
