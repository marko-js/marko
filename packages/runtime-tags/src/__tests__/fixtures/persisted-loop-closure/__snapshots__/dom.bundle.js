// template.marko
const $for_content__boost = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.f));
_resume("a3", (scope) => {
	$for_content__boost._(scope);
});
const $boost = /*@__PURE__*/ _let(5, $for_content__boost);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$boost($scope, $scope.f + 1);
}));
