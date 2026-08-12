// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, 0, () => $el);
const $tag = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $text = /*@__PURE__*/ _let(6, ($scope) => _text($scope.e, $scope.g));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.c, "click", function() {
		$tag($scope, $scope.f === "div" ? "span" : "div");
	});
	_on($scope.d, "click", function() {
		$text($scope, $scope.h() ? $scope.h().tagName : "none");
	});
});
const $el = _var_resume("a0", /*@__PURE__*/ _const(7));
