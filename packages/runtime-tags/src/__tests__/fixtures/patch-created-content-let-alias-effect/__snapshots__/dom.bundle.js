// template.marko
const $wrap_content__text__script = _script("a0", ($scope) => $scope.a.textContent = $scope._._.g);
const $wrap_content__text = /*@__PURE__*/ _closure_get_patch("a5", 7, $wrap_content__text__script, ($scope) => $scope._._);
const $text = _let(6, /* @__PURE__ */ _closure($wrap_content__text));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$text($scope, $scope.g + "!");
}));
