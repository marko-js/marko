// template.marko
const $Box_content__label = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.d), 0, "a1");
const $Box_content = _content("a0", "<em> </em>", "D ", $Box_content__label);
const $label = /*@__PURE__*/ _const(3, /* @__PURE__ */ _closure($Box_content__label));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $show__OR__Box = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.c ? $scope.e : null));
const $show = /*@__PURE__*/ _let(2, ($scope) => {
	$label($scope, $scope.c ? "on" : "off");
	$show__OR__Box($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
